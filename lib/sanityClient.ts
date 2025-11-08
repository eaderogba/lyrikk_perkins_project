import sanityClient from '@sanity/client'

export const client = sanityClient({
  projectId: 'thr00yii', // replace with your Sanity project ID
  dataset: 'production', // replace with your dataset name
  apiVersion: '2023-01-01', // use a specific Sanity API version
  useCdn: true, // `false` if you want to ensure fresh data
})