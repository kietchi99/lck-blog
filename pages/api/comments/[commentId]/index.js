import authenticate from '../../../../lib/auth/authenticate';
import SanityEditClient from '../../../../lib/sanity/clients/SanityEditClient';
import { deleteAComment } from '../../../../lib/sanity/mutations/comment';

const commentHandler = (req, res) => {
  const { method } = req;

  switch (method) {
    case 'DELETE': {
      return deleteComment(req, res);
    }

    default: {
      res.status(404).json({
        message: `Cannot find ${req.method} ${req.url}`,
      });
    }
  }
};

const deleteComment = async (req, res) => {
  const { commentId } = req.query;
  const { _id: userId } = req.currentUser;

  try {
    const comment = await SanityEditClient.getDocument( commentId );

    if (!comment) {
      return res.status(404).json({
        message: `There is no comment with ID: ${commentId}`,
      });
    }
    console.log(comment)
    if (comment.user._ref !== userId) {
      return res.status(401).json({
        message: 'The comment does not belong to you!',
      });
    }

    const blogId = comment.blog._ref;
    
    await deleteAComment({ commentId, blogId });

    return res.status(204).send();
  } catch (error) {
    console.error(error);
    res.status(500).json({
      status: 'success',
      errorMessage: error.message,
      error: error,
    });
  }
};

export default authenticate(commentHandler);