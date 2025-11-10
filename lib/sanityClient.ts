import sanityClient from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'
 
export const client = sanityClient({
  projectId: 'thr00yii', // replace with your Sanity project ID
  dataset: 'production', // replace with your dataset name
  apiVersion: '2023-01-01', // use a specific Sanity API version
  useCdn: true, // `false` if you want to ensure fresh data
})
 
const builder = imageUrlBuilder(client)
 
export function urlFor(source: any) {
  return builder.image(source)
}