import { createClient } from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'
 
export const client = createClient({
  projectId: 'thr00yii', // Sanity project ID
  dataset: 'production', // dataset name
  apiVersion: '2023-01-01', // Sanity API version
  useCdn: true, // `false` if you want to ensure fresh data
})
 
const builder = imageUrlBuilder(client)
 
export function urlFor(source: any) {
  return builder.image(source)
}