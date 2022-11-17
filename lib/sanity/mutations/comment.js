import { HttpApiMutate } from '../clients/HttpApi';
import SanityEditClient from '../clients/sanityEditClient';

export const createNewComment = async ({ currentUser, blogId, content, createdAt }) => {
  const newComment = {
    _type: 'comment',

    user: {
      _type: 'reference', 
      _ref: currentUser._id 
    },

    blog: {
      _type: 'reference',
      _ref: blogId,
    },

    content,
    createdAt: createdAt,
    repliesQuantity: 0,
  };

  const articleUpdatedFields = {
    inc: {
      commentsQuantity: 1,
    },
  };

  const transactionInfo =
    await SanityEditClient.transaction()
      .create(newComment)
      .patch(blogId, articleUpdatedFields)
      .commit();

  console.log('transactionInfo', transactionInfo);

  const commentResult = transactionInfo.results.find(
    (r) => r.operation === 'create'
  );

  newComment._id = commentResult.id;

  console.log({ commentResult });

  return newComment;
};

export const deleteAComment = async ({ commentId, blogId }) => {
  const mutations = [
    {
      delete: {
        id: commentId,
      }
    },
    {
      patch: {
        id: blogId,
        dec: {
          commentsQuantity: 1,
        },
      },
    },
  ];

  const { data: transactionInfo } = await HttpApiMutate( mutations );

  console.log(transactionInfo);

  return null;
};