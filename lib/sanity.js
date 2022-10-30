import sanityClient from '@sanity/client'

const client = sanityClient({
  projectId: process.env.SANITY_PROJECT_ID,
  dataset: process.env.SANITY_DATASET_NAME,
  apiVersion: '2022-10-29',
  useCdn: process.env.NODE_ENV === 'production',
})

export default client