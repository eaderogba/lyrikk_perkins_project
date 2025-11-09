import React from "react"
import Link from "next/link"
import { Calendar, ArrowRight } from "lucide-react"
import { AspectRatio } from "./ui/aspect-ratio"

export interface Entry {
  id: string
  slug: string
  title: string
  excerpt: string
  date: Date
  category: string
  image: string
  type: "news" | "event"
}

export interface HomeNewsPreviewProps {
  latestEntries: Entry[]
}

export default function HomeNewsPreview({ latestEntries }: HomeNewsPreviewProps) {
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
          <Link
            key={entry.id}
            href={entry.type === "news" ? `/news/${entry.slug}` : `/events/${entry.slug}`}
            className="cursor-pointer rounded-lg border border-border overflow-hidden shadow-sm hover:shadow-lg transition-shadow bg-background block"
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
          </Link>
        ))}
      </div>
    </section>
  )
}