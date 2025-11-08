"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Calendar, MapPin, ArrowRight } from "lucide-react"

export default function Events() {
  const upcomingEvents = [
    {
      id: 1,
      name: "Summer Wedding Reception",
      date: "June 15, 2025",
      location: "Garden Manor, New York",
      type: "Wedding",
    },
    {
      id: 2,
      name: "Corporate Gala Night Performance",
      date: "July 20, 2025",
      location: "Grand Ballroom, Los Angeles",
      type: "Corporate Event",
    },
    {
      id: 3,
      name: "Private Birthday Celebration",
      date: "August 10, 2025",
      location: "Downtown Venue, Chicago",
      type: "Private Event",
    },
  ]

  const pastEvents = [
    {
      id: 4,
      name: "Holiday Celebration Performance",
      date: "December 10, 2024",
      location: "Civic Center, Boston",
      type: "Holiday Event",
      highlights: "500+ attendees, standing ovation",
    },
    {
      id: 5,
      name: "Spring Festival Performance",
      date: "April 5, 2024",
      location: "Waterfront Gardens, Miami",
      type: "Festival",
      highlights: "300+ attendees, 90 minute set",
    },
    {
      id: 6,
      name: "Charity Gala Performance",
      date: "March 15, 2024",
      location: "Hotel Grand, San Francisco",
      type: "Fundraiser",
      highlights: "400+ attendees, great audience response",
    },
  ]

  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero */}
      <section className="pt-32 pb-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-primary/10 to-background">
        <div className="max-w-4xl mx-auto text-center space-y-4">
          <h1 className="text-5xl font-bold">My Upcoming Performances</h1>
          <p className="text-xl text-muted-foreground">See where I'm performing next and book me for your event</p>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12">Upcoming Shows</h2>
          <div className="space-y-6 mb-12">
            {upcomingEvents.map((event) => (
              <div
                key={event.id}
                className="border border-border rounded-lg overflow-hidden hover:border-primary/50 transition-colors bg-card p-8"
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
                  <div>
                    <div className="inline-block px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-semibold mb-4">
                      {event.type}
                    </div>
                    <h3 className="text-2xl font-bold mb-4">{event.name}</h3>
                    <div className="space-y-2 text-muted-foreground">
                      <div className="flex items-center gap-2">
                        <Calendar size={18} />
                        <span>{event.date}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin size={18} />
                        <span>{event.location}</span>
                      </div>
                    </div>
                  </div>
                  <button className="flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all whitespace-nowrap">
                    Book Ticket
                    <ArrowRight size={18} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Past Events */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-card">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12">Past Performances</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {pastEvents.map((event) => (
              <div key={event.id} className="p-8 border border-border rounded-lg hover:shadow-lg transition-shadow">
                <div className="inline-block px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-semibold mb-4">
                  {event.type}
                </div>
                <h3 className="text-xl font-bold mb-3">{event.name}</h3>
                <div className="space-y-2 text-sm text-muted-foreground mb-4">
                  <div className="flex items-center gap-2">
                    <Calendar size={16} />
                    <span>{event.date}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin size={16} />
                    <span>{event.location}</span>
                  </div>
                </div>
                <p className="text-sm font-semibold text-primary">{event.highlights}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
