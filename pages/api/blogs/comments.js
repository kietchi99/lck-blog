import { getBlogCommentsOnPage } from '../../../lib/sanity/queries/comments';

export default async function getComments(req, res) {
    const offset = parseInt((req.query.offset || 0), 10);
    const blogId = req.query.blogId
    const data = await getBlogCommentsOnPage(offset, blogId);
    
    res.status(200).json(data);
}