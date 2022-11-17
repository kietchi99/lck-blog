import groq from 'groq';
import client from '../config'

const COMMENT_FIELDS = `
  _id,
  content,
  'user': user->,
  blog,
  createdAt,
  repliesQuantity,
`;

export const getCurrentUserComments = ({ blogId, currentUserId}) => {
  console.log('hehe', blogId, currentUserId)
  const query = groq`
    *[_type == "comment" && blog._ref == "${blogId}" && user._ref == "${currentUserId}" ] | order(repliesQuantity desc,_createdAt desc) {
      ${COMMENT_FIELDS}
    }
  `;

  return query;
};

export const getBlogCommentsOnPage = async (offset, blogId) => {

  const result = await client.fetch(`
    *[_type == "comment" && blog._ref == "${blogId}"]| order(repliesQuantity desc, _createdAt desc)[${offset}...${offset+1}] {
      ${COMMENT_FIELDS}
    }
  `);
  return result;
};