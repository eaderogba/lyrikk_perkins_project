"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import Image from "next/image"
import { Music, Play } from "lucide-react"
import { AspectRatio } from "@/components/ui/aspect-ratio"

export default function MusicPage() {
  const songs = [
    {
      title: "Lyrikk Dion",
      genre: "Pop",
      releaseDate: "2024",
      description: "An uplifting anthem about pursuing dreams and never giving up",
      image: "/lyrikk-on-stage-performing.jpg",
    },
  ]

  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero */}
      <section className="pt-32 pb-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-primary/10 to-background">
        <div className="max-w-4xl mx-auto text-center space-y-4">
          <h1 className="text-5xl font-bold">My Music</h1>
          <p className="text-xl text-muted-foreground">Explore my songs and performances</p>
        </div>
      </section>

      {/* Spotify Embed */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <iframe
            style={{ borderRadius: "12px" }}
            src="https://open.spotify.com/embed/artist/4rFi93HeVoNEhJOHdNiPC3?utm_source=generator"
            width="100%"
            height="380"
            frameBorder="0"
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
          />
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-card">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-4xl font-bold">Want me to perform your favorite song?</h2>
          <p className="text-lg text-muted-foreground">
            Request a custom setlist or let me know your favorite tracks when you book me for your event.
          </p>
          <a
            href="/booking"
            className="inline-block px-8 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-colors"
          >
            Book a Performance
          </a>
        </div>
      </section>

      <Footer />
    </div>
  )
}
