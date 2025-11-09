import HomeClient from "@/components/HomeClient"
import { client } from "@/lib/sanityClient"
import { HomeNewsPreviewProps } from "@/components/HomeNewsPreview"

const newsQuery = `*[_type == "post"] | order(publishedAt desc) {
  _id,
  title,
  slug,
  publishedAt,
  excerpt,
  category,
  "image": mainImage.asset->url
}`

const eventsQuery = `*[_type == "event"] | order(startDate asc) {
  _id,
  title,
  slug,
  startDate,
  endDate,
  location,
  description,
  "image": mainImage.asset->url
}`

async function fetchLatestEntries() {
  const news = await client.fetch(newsQuery)
  const events = await client.fetch(eventsQuery)

  // Normalize news
  const normalizedNews = news.map((item: any) => ({
    id: item._id,
    slug: item.slug.current || item.slug,
    title: item.title,
    excerpt: item.excerpt,
    date: new Date(item.publishedAt),
    category: item.category,
    image: item.image || "/placeholder.jpg",
    type: "news",
  }))

  // Normalize events
  const normalizedEvents = events.map((item: any) => ({
    id: item._id,
    slug: item.slug.current || item.slug,
    title: item.title,
    excerpt: item.location,
    date: new Date(item.startDate),
    category: "Event",
    image: item.image || "/placeholder.jpg",
    type: "event",
  }))

  // Combine and sort by date descending
  const combined = [...normalizedNews, ...normalizedEvents]
  combined.sort((a, b) => b.date.getTime() - a.date.getTime())

  // Return top 3 latest entries
  return combined.slice(0, 3)
}

export default async function Home() {
  // Data fetching (server-side)
  async function fetchLatestEntries() {
    const newsQuery = `*[_type == "post"] | order(publishedAt desc) {
      _id,
      title,
      slug,
      publishedAt,
      excerpt,
      category,
      "image": mainImage.asset->url
    }`
    const eventsQuery = `*[_type == "event"] | order(startDate asc) {
      _id,
      title,
      slug,
      startDate,
      endDate,
      location,
      description,
      "image": mainImage.asset->url
    }`
    const news = await client.fetch(newsQuery)
    const events = await client.fetch(eventsQuery)
    const normalizedNews = news.map((item: any) => ({
      id: item._id,
      slug: item.slug.current || item.slug,
      title: item.title,
      excerpt: item.excerpt,
      date: new Date(item.publishedAt),
      category: item.category,
      image: item.image || "/placeholder.jpg",
      type: "news",
    }))
    const normalizedEvents = events.map((item: any) => ({
      id: item._id,
      slug: item.slug.current || item.slug,
      title: item.title,
      excerpt: item.location,
      date: new Date(item.startDate),
      category: "Event",
      image: item.image || "/placeholder.jpg",
      type: "event",
    }))
    const combined = [...normalizedNews, ...normalizedEvents]
    combined.sort((a, b) => b.date.getTime() - a.date.getTime())
    return combined.slice(0, 3)
  }

  const latestEntries: HomeNewsPreviewProps["latestEntries"] = await fetchLatestEntries()

  const upcomingShows = [
    { date: "March 15, 2025", venue: "City Center", city: "New York" },
    { date: "March 22, 2025", venue: "Live Hall", city: "Los Angeles" },
    { date: "April 5, 2025", venue: "Grand Theater", city: "Chicago" },
  ]

  const galleryImages = [
    { id: 1, src: "/lyrikk-at-FoxNews.jpg", alt: "Lyrikk at FoxNews" },
    { id: 2, src: "/lyrikk-on-stage-performing.jpg", alt: "Stage" },
    { id: 3, src: "/lyrikk-posing-street.jpg", alt: "Portrait" },
    { id: 4, src: "/lyrikk-burning-blue.jpg", alt: "Dance" },
    { id: 5, src: "/lyrikk-ego-pose.jpg", alt: "Album" },
    { id: 6, src: "/lyrikk-and-mama.jpg", alt: "Singing" },
  ]

  return <HomeClient latestEntries={latestEntries} upcomingShows={upcomingShows} galleryImages={galleryImages} />
}
