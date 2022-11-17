import { getPaginatedBlogs } from 'lib/sanity/queries/blogs';

export default async function getBlogs(req, res) {
    const offset = parseInt((req.query.offset || 0), 10);
    const data = await getPaginatedBlogs(offset, req.query.tag, req.query.category);
    
    res.status(200).json(data);
}