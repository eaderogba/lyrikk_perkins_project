"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import Image from "next/image"

export default function About() {
  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero */}
      <section className="pt-32 pb-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-primary/10 to-background">
        <div className="max-w-4xl mx-auto text-center space-y-4">
          <h1 className="text-5xl font-bold">About Me</h1>
          <p className="text-xl text-muted-foreground">My journey as a professional singer and performer</p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative h-80 rounded-lg overflow-hidden shadow-lg">
              <Image src="/lyrikk-on-stage-performing.jpg" alt="Artist performing" fill className="object-cover" />
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-4">My Story</h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                I’m Lyrikk Dion — also known as Lyrikk Perkins or “Little Miss Detroit.” I’m a 12-year-old artist, model, actress, and influencer from Detroit, Michigan, and I’ve been performing for as long as I can remember.
                
                I started modeling when I was just 4 years old, and during the pandemic, I discovered my love for music. At 7 years old, I wrote and released my first song, “Mask On.”

                By the time I was 10, I had the amazing opportunity to go on tour with That Girl Lay Lay and Young Dylan from Nickelodeon — an experience that helped me grow as a performer and showed me how powerful it feels to inspire others.

                Now, I continue to build my brand and share my passion for music, dance, and entertainment with fans all over. Every performance is a chance to represent my city, Detroit, and bring positive energy to every stage I step on.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Supported by my mother who manages my career, I've had the opportunity to perform for thousands of
                people and create unforgettable memories through music. My goal is to bring joy, energy, and authentic
                artistry to every stage I step on.
              </p>
            </div>
          </div>

          <div>
            <h2 className="text-3xl font-bold mb-4">My Mission</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              To inspire and entertain kids and families around the world through music, modeling, and performance. I want to show other young people that it’s never too early to chase your dreams and that hard work, confidence, and creativity can take you anywhere.
            </p>
          </div>

          <div>
            <h2 className="text-3xl font-bold mb-4">What I Offer</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  title: "Live Performances",
                  desc: "High-energy shows with dancers and full entertainment — bringing excitement, fun, and Detroit pride to every stage.",
                },
                {
                  title: "Modeling & Acting",
                  desc: "Professional modeling and acting experience from an early age, bringing personality, emotion, and confidence to every role and photo shoot",
                },
                {
                  title: "Youth Inspiration & Influence",
                  desc: "As a young influencer, I aim to motivate and uplift other kids to be bold, expressive, and true to themselves.",
                },
              ].map((offering) => (
                <div key={offering.title} className="p-6 bg-card rounded-lg border border-border">
                  <h3 className="font-bold text-lg mb-2">{offering.title}</h3>
                  <p className="text-muted-foreground text-sm">{offering.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Highlights Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-card">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-16 text-center">Experience & Achievements</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-bold mb-2">Performance Experience</h3>
                <p className="text-muted-foreground">
                  Extensive experience performing at birthdays, weddings, corporate events, festivals, private celebrations, and
                  more. Known for professionalism and engaging performances.
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-2">Vocal Range & Styles</h3>
                <p className="text-muted-foreground">
                  Versatile vocalist comfortable with pop, R&B, soul, and contemporary music. Can adapt my performances
                  to suit any event or audience.
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-2">Professionalism</h3>
                <p className="text-muted-foreground">
                  Reliable, punctual, and dedicated to delivering exceptional performances. Managed by my mother to
                  ensure smooth coordination and planning.
                </p>
              </div>
            </div>

            <div className="relative h-96 rounded-lg overflow-hidden shadow-lg">
              <Image src="/lyrikk-in-my-era.jpg" alt="Live performance" fill className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            {[
              { number: "100+", label: "Events Performed" },
              { number: "5K+", label: "Fans Engaged" },
              { number: "15+", label: "Cities Toured" },
              { number: "98%", label: "Client Satisfaction" },
            ].map((stat, idx) => (
              <div key={idx}>
                <div className="text-4xl font-bold text-primary mb-2">{stat.number}</div>
                <p className="text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
