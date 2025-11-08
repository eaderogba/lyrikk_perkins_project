"use client"

import Link from "next/link"
import Image from "next/image"
import { ArrowRight } from "lucide-react"
import { motion } from "framer-motion"
import {
  FadeIn,
  SlideInUp,
  StaggerContainer,
  StaggerItem,
  scaleHoverVariants,
  liftHoverVariants,
} from "@/components/animations"
import { AspectRatio } from "@/components/ui/aspect-ratio"
import HomeNewsPreview from "@/components/HomeNewsPreview"

export default function Home() {
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

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="pt-16 pb-24 px-4 sm:px-8">
        <div className="space-y-8">
          <div className="max-w-2xl">
            <FadeIn delay={0.1}>
              <h1 className="text-6xl sm:text-7xl font-bold tracking-tight mb-4">Lyrikk Dion</h1>
            </FadeIn>
            <SlideInUp delay={0.2}>
              <p className="text-lg text-foreground/70 leading-relaxed">
                Available for live performances at birthdays, weddings, corporate events, and private celebrations. Book a
                captivating performance today.
              </p>
            </SlideInUp>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/booking" className="w-fit">
              <motion.button
                variants={scaleHoverVariants}
                initial="initial"
                whileHover="hover"
                transition={{ duration: 0.2 }}
                className="px-8 py-3 bg-primary text-primary-foreground font-semibold hover:bg-primary/90 transition-colors inline-flex items-center gap-2"
              >
                BOOK NOW
                <ArrowRight size={20} />
              </motion.button>
            </Link>
            <Link href="/music" className="w-fit">
              <motion.button
                variants={scaleHoverVariants}
                initial="initial"
                whileHover="hover"
                transition={{ duration: 0.2 }}
                className="px-8 py-3 border-2 border-primary text-primary font-semibold hover:bg-primary/10 transition-colors inline-flex items-center gap-2"
              >
                EXPLORE MUSIC
              </motion.button>
            </Link>
          </div>
        </div>
      </section>

      {/* Gallery Grid - Masonry Style */}
      <section className="py-16 px-4 sm:px-8">
        <StaggerContainer staggerDelay={0.1}>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryImages.map((image) => (
              <StaggerItem key={image.id}>
                <motion.div
                  variants={scaleHoverVariants}
                  initial="initial"
                  whileHover="hover"
                  transition={{ duration: 0.2 }}
                >
                  <div className="rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 group cursor-pointer">
                    <AspectRatio ratio={4 / 3} className="bg-muted">
                      <Image
                        src={image.src || "/placeholder.svg"}
                        alt={image.alt}
                        fill
                        className="object-contain group-hover:scale-105 transition-transform duration-300"
                      />
                    </AspectRatio>
                  </div>
                </motion.div>
              </StaggerItem>
            ))}
          </div>
        </StaggerContainer>
      </section>

      {/* Upcoming Shows */}
      <section className="py-20 px-4 sm:px-8 border-t border-border">
        <FadeIn>
          <h2 className="text-5xl font-bold mb-12">UPCOMING SHOWS</h2>
        </FadeIn>
        <StaggerContainer staggerDelay={0.1}>
          <div className="space-y-4">
            {upcomingShows.map((show, idx) => (
              <StaggerItem key={idx}>
                <motion.div
                  variants={liftHoverVariants}
                  initial="initial"
                  whileHover="hover"
                  transition={{ duration: 0.2 }}
                >
                  <div className="flex items-center justify-between py-6 border-b border-border hover:bg-muted/30 px-4 transition-colors group cursor-pointer">
                    <div>
                      <h3 className="text-xl font-bold mb-1">{show.venue}</h3>
                      <p className="text-sm text-foreground/60">{show.city}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm font-semibold">{show.date}</p>
                    </div>
                    <motion.div initial={{ opacity: 0, x: -10 }} whileHover={{ opacity: 1, x: 0 }} className="ml-4">
                      <ArrowRight size={20} />
                    </motion.div>
                  </div>
                </motion.div>
              </StaggerItem>
            ))}
          </div>
        </StaggerContainer>
        <FadeIn delay={0.4}>
          <div className="mt-8">
            <Link
              href="/events"
              className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all"
            >
              VIEW ALL EVENTS
              <ArrowRight size={20} />
            </Link>
          </div>
        </FadeIn>
      </section>

      <HomeNewsPreview />

      {/* About Preview */}
      <section className="py-20 px-4 sm:px-8 bg-primary text-primary-foreground">
        <div className="max-w-3xl">
          <FadeIn>
            <h2 className="text-4xl font-bold mb-6">ABOUT</h2>
          </FadeIn>
          <SlideInUp delay={0.2}>
            <p className="text-lg leading-relaxed mb-8 opacity-90">
              Lyrikk Dion, also known as Lyrikk Perkins or “Little Miss Detroit,” is a 12-year-old artist, model, actress, and influencer from Detroit, Michigan. Born on April 17th, Lyrikk has been shining in the spotlight from a very young age.
            </p>
          </SlideInUp>
          <Link href="/about">
            <motion.button
              variants={scaleHoverVariants}
              initial="initial"
              whileHover="hover"
              transition={{ duration: 0.2 }}
              className="inline-flex items-center gap-2 text-primary-foreground font-semibold hover:gap-3 transition-all border-b border-primary-foreground/50 pb-2 bg-transparent border-0 p-0 h-auto"
            >
              READ MORE
              <ArrowRight size={20} />
            </motion.button>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 sm:px-8 border-t border-border text-center text-sm text-foreground/60">
        <p>&copy; 2025. All rights reserved.</p>
      </footer>
    </div>
  )
}
