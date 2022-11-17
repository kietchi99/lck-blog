//algolia
import { algoliaClient } from "lib/algolia"

const blogsWebhookHandler = (req, res) => {
    switch (req.method) {
        case 'POST': {
            return onBlogCreated(req, res)
        }

        case 'DELETE': {
            return onBlogDeleted(req, res)
        }

        default: {
            res.status(404).json({
                message: `Cannot find ${req.method} ${req.url}`,
            })
        }
    }
}

const onBlogCreated = (req, res) => {
    const index = algoliaClient.initIndex('blogs');

    const {
        _id,
        title,
        subtitle,
        slug,
        coverimage,
    } = req.body;

  return index
    .saveObject({
        objectID: _id,
        title,
        subtitle,
        slug,
        coverimage
    })
    .then(() => {
        console.log('✔ SUCCESS');
        console.log(req.body);
        res.status(200).json({ status: 'success' });
    })
    .catch((err) => {
        console.log('💥 ERROR');
        console.error(err);
        console.log(req.body)

        res.status(500).json({ status: 'error' });
    })
}

const onBlogDeleted = (req, res) => {
    const index = algoliaClient.initIndex('blogs');

    const { _id } = req.body;

  return index
    .deleteObject(_id)
    .then((_) => {
        res.status(204).json({ status: 'success' });
    })
    .catch((err) => {
        console.log('💥 ERROR');
        console.error(err);
         console.log(req.body)
        res.status(500).json({ status: 'error' });
    })
}

export default blogsWebhookHandler;