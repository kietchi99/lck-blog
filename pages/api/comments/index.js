import { createNewComment } from './../../../lib/sanity/mutations/comment';
import authenticate from '../../../lib/auth/authenticate';

const commentsHandler = (req, res) => {
    const { method } = req;

    switch (method) {
        case 'POST': {
            return createComment(req, res);
        }

        default: {
            res.status(404).json({
                name: 'HttpNotFoundError',
                message: `Cannot find ${req.method} ${req.url}`,
            });
        }
    }
};

const createComment = async (req, res) => {
    const { blogId, content, createdAt} = req.body;
    try {
        const comment = await createNewComment({
            currentUser: req.currentUser,
            blogId,
            content,
            createdAt
        });
        res.status(201).json(comment);
    } catch (error) {
        console.error(error);
        console.dir(error);
        res.status(500).json({
            message:
                'Something went wrong when creating new comment',
            errorMessage: error.message,
            error: error,
        });
    }
};

export const getComments = async function (res, req) {
    const offset = parseInt((req.query.offset || 0), 10);
    const data = await getPaginatedComments(offset, blogId);
    
    res.status(200).json(data);
}
export default authenticate(commentsHandler);
