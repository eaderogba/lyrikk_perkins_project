"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Calendar, ArrowRight } from "lucide-react"
import { AspectRatio } from "@/components/ui/aspect-ratio"

export default function News() {
  const news = [
    {
      id: 1,
      title: "Awarded Best Female Vocalist at Regional Music Festival",
      excerpt:
        "I'm thrilled to have been recognized with the Best Female Vocalist award at the annual Regional Music Festival.",
      date: "June 14, 2025",
      category: "Achievement",
    },
    {
      id: 2,
      title: "New Original Single 'Dreams in Motion' Released",
      excerpt:
        "Excited to share my latest original single! 'Dreams in Motion' is now available on all streaming platforms.",
      date: "June 1, 2025",
      category: "Music Release",
    },
    {
      id: 3,
      title: "Behind the Scenes: Recording Studio Session",
      excerpt: "Check out behind-the-scenes footage from my latest recording session at State-of-the-Art Studios.",
      date: "May 20, 2025",
      category: "Behind the Scenes",
    },
    {
      id: 4,
      title: "Live Performance at Capitol Theater - Full Review",
      excerpt: "Thank you to everyone who attended my solo performance at Capitol Theater. What an amazing night!",
      date: "May 10, 2025",
      category: "Performance",
    },
    {
      id: 5,
      title: "Collaboration with Grammy-Nominated Producer Announced",
      excerpt: "Excited to announce an upcoming collaboration with renowned producer and composer Alex Mitchell.",
      date: "April 28, 2025",
      category: "Collaboration",
    },
    {
      id: 6,
      title: "Fan Community Platform Now Live",
      excerpt:
        "Connect with fans from around the world, get exclusive content, and stay updated on all my latest news.",
      date: "April 15, 2025",
      category: "Announcement",
    },
  ]

  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero */}
      <section className="pt-32 pb-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-primary/10 to-background">
        <div className="max-w-4xl mx-auto text-center space-y-4">
          <h1 className="text-5xl font-bold">News & Updates</h1>
          <p className="text-xl text-muted-foreground">
            Stay tuned for the latest updates on my career and performances
          </p>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <AspectRatio ratio={16 / 9} className="mb-6 rounded-lg overflow-hidden shadow-lg">
                <div className="w-full h-full bg-primary/20"></div>
              </AspectRatio>
              <div className="inline-block px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-semibold mb-4">
                {news[0].category}
              </div>
              <h2 className="text-3xl font-bold mb-4">{news[0].title}</h2>
              <div className="flex items-center gap-4 text-muted-foreground mb-6">
                <div className="flex items-center gap-2">
                  <Calendar size={18} />
                  <span>{news[0].date}</span>
                </div>
              </div>
              <p className="text-lg text-muted-foreground mb-6">{news[0].excerpt}</p>
              <button className="flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all">
                Read Full Story
                <ArrowRight size={20} />
              </button>
            </div>
            <div className="p-6 bg-card rounded-lg border border-border h-fit">
              <h3 className="font-bold mb-4">Subscribe to Updates</h3>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-2 border border-border rounded-lg bg-background mb-3 focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <button className="w-full px-4 py-2 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-colors">
                Subscribe
              </button>
              <p className="text-xs text-muted-foreground mt-3">We respect your privacy. No spam.</p>
            </div>
          </div>
        </div>
      </section>

      {/* News Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-card">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-12">Latest News</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {news.slice(1).map((post) => (
              <article
                key={post.id}
                className="bg-background rounded-lg overflow-hidden border border-border hover:border-primary/50 transition-colors cursor-pointer group"
              >
                <AspectRatio ratio={16 / 9} className="overflow-hidden">
                  <div className="w-full h-full bg-primary/10 group-hover:bg-primary/20 transition-colors"></div>
                </AspectRatio>
                <div className="p-6">
                  <div className="inline-block px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-semibold mb-3">
                    {post.category}
                  </div>
                  <h3 className="text-lg font-bold mb-3 group-hover:text-primary transition-colors">{post.title}</h3>
                  <p className="text-sm text-muted-foreground mb-4">{post.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-muted-foreground flex items-center gap-1">
                      <Calendar size={14} />
                      {post.date}
                    </span>
                    <ArrowRight
                      size={18}
                      className="text-primary opacity-0 group-hover:opacity-100 transition-opacity"
                    />
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
