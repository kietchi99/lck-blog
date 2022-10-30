// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { getAllBlogs } from 'lib/api'

export default async function handler(req, res) {
    const blogs = await getAllBlogs()
    res.status(200).json(blogs)
}
