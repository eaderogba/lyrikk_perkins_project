"use client"

import React from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { Calendar, ArrowRight } from "lucide-react"
import { AspectRatio } from "./ui/aspect-ratio"

const news = [
  {
    id: 1,
    slug: "awarded-best-female-vocalist-at-regional-music-festival",
    title: "Awarded Best Female Vocalist at Regional Music Festival",
    excerpt:
      "I'm thrilled to have been recognized with the Best Female Vocalist award at the annual Regional Music Festival.",
    date: "June 14, 2025",
    category: "Achievement",
    image: "/placeholder.jpg",
    type: "news",
  },
  {
    id: 2,
    slug: "new-original-single-dreams-in-motion-released",
    title: "New Original Single 'Dreams in Motion' Released",
    excerpt:
      "Excited to share my latest original single! 'Dreams in Motion' is now available on all streaming platforms.",
    date: "June 1, 2025",
    category: "Music Release",
    image: "/placeholder.jpg",
    type: "news",
  },
  {
    id: 3,
    slug: "behind-the-scenes-recording-studio-session",
    title: "Behind the Scenes: Recording Studio Session",
    excerpt: "Check out behind-the-scenes footage from my latest recording session at State-of-the-Art Studios.",
    date: "May 20, 2025",
    category: "Behind the Scenes",
    image: "/placeholder.jpg",
    type: "news",
  },
]

const events = [
  {
    id: 1,
    slug: "summer-wedding-reception",
    name: "Summer Wedding Reception",
    date: "June 15, 2025",
    location: "Garden Manor, New York",
    type: "Wedding",
    image: "/placeholder.jpg",
    typeEntry: "event",
  },
  {
    id: 2,
    slug: "corporate-gala-night-performance",
    name: "Corporate Gala Night Performance",
    date: "July 20, 2025",
    location: "Grand Ballroom, Los Angeles",
    type: "Corporate Event",
    image: "/placeholder.jpg",
    typeEntry: "event",
  },
  {
    id: 3,
    slug: "private-birthday-celebration",
    name: "Private Birthday Celebration",
    date: "August 10, 2025",
    location: "Downtown Venue, Chicago",
    type: "Private Event",
    image: "/placeholder.jpg",
    typeEntry: "event",
  },
]

// Normalize and combine news and events into a single array
function normalizeEntries() {
  const normalizedNews = news.map((item) => ({
    id: item.id,
    slug: item.slug,
    title: item.title,
    excerpt: item.excerpt,
    date: new Date(item.date),
    category: item.category,
    image: item.image,
    type: "news",
  }))

  const normalizedEvents = events.map((item) => ({
    id: item.id,
    slug: item.slug,
    title: item.name,
    excerpt: item.location,
    date: new Date(item.date),
    category: item.type,
    image: item.image,
    type: "event",
  }))

  const combined = [...normalizedNews, ...normalizedEvents]
  combined.sort((a, b) => b.date.getTime() - a.date.getTime())
  return combined.slice(0, 3)
}

export default function HomeNewsPreview() {
  const router = useRouter()
  const latestEntries = normalizeEntries()

  function handleCardClick(entry: typeof latestEntries[0]) {
    if (entry.type === "news") {
      router.push(`/news/${entry.slug}`)
    } else if (entry.type === "event") {
      router.push(`/events/${entry.slug}`)
    }
  }

  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-3xl font-bold">Latest News & Events</h2>
        <Link
          href="/news"
          className="text-primary font-semibold hover:underline flex items-center gap-1"
        >
          View All <ArrowRight size={16} />
        </Link>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {latestEntries.map((entry) => (
          <div
            key={entry.id}
            onClick={() => handleCardClick(entry)}
            className="cursor-pointer rounded-lg border border-border overflow-hidden shadow-sm hover:shadow-lg transition-shadow bg-background"
          >
            <AspectRatio ratio={16 / 9}>
              <img
                src={entry.image}
                alt={entry.title}
                className="object-cover w-full h-full"
                loading="lazy"
              />
            </AspectRatio>
            <div className="p-4">
              <div className="inline-block px-2 py-1 bg-primary/10 text-primary rounded-full text-xs font-semibold mb-2">
                {entry.category}
              </div>
              <h3 className="text-lg font-semibold mb-1">{entry.title}</h3>
              <div className="flex items-center text-muted-foreground text-xs mb-2">
                <Calendar size={14} className="mr-1" />
                <time dateTime={entry.date.toISOString()}>
                  {entry.date.toLocaleDateString("en-GB", {
                    year: "numeric",
                    month: "short",
                    day: "numeric",
                  })}
                </time>
              </div>
              <p className="text-sm text-muted-foreground line-clamp-3">{entry.excerpt}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}