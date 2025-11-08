"use client"

import { useState } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import Image from "next/image"
import { AspectRatio } from "@/components/ui/aspect-ratio"

export default function Talents() {
  const [selectedCategory, setSelectedCategory] = useState("all")

  const talents = [
    { name: "Jordan", category: "dance", talent: "Dancer", image: "/placeholder.svg?key=5j4aq" },
    { name: "Maya", category: "music", talent: "Singer", image: "/placeholder.svg?key=njy2k" },
    { name: "Alex", category: "modeling", talent: "Model", image: "/placeholder.svg?key=ct3b4" },
    { name: "Casey", category: "music", talent: "Producer", image: "/placeholder.svg?key=x8p2m" },
    { name: "Riley", category: "dance", talent: "Choreographer", image: "/placeholder.svg?key=p9q3r" },
    { name: "Morgan", category: "modeling", talent: "Fashion Model", image: "/placeholder.svg?key=s4t8u" },
  ]

  const categories = [
    { id: "all", label: "All Talents" },
    { id: "dance", label: "Dance" },
    { id: "music", label: "Music" },
    { id: "modeling", label: "Modeling" },
  ]

  const filtered = selectedCategory === "all" ? talents : talents.filter((t) => t.category === selectedCategory)

  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero */}
      <section className="pt-32 pb-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-primary/10 to-background">
        <div className="max-w-4xl mx-auto text-center space-y-4">
          <h1 className="text-5xl font-bold">Our Talents</h1>
          <p className="text-xl text-muted-foreground">Explore our diverse portfolio of performers and artists</p>
        </div>
      </section>

      {/* Filter */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 border-b border-border">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-6 py-2 rounded-full font-semibold transition-colors ${
                  selectedCategory === cat.id
                    ? "bg-primary text-primary-foreground"
                    : "bg-muted text-foreground hover:bg-muted/80"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filtered.map((talent) => (
              <div key={talent.name} className="group cursor-pointer">
                <AspectRatio ratio={3 / 4} className="mb-4 rounded-lg overflow-hidden shadow-lg relative">
                  <Image
                    src={talent.image || "/placeholder.svg"}
                    alt={talent.name}
                    fill
                    className="object-contain group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                    <div className="text-white">
                      <h3 className="text-2xl font-bold">{talent.name}</h3>
                      <p className="text-sm opacity-90">{talent.talent}</p>
                    </div>
                  </div>
                </AspectRatio>
                <h3 className="text-xl font-bold">{talent.name}</h3>
                <p className="text-primary font-semibold">{talent.talent}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
