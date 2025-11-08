"use client"

import { useEffect, useState } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Calendar, MapPin, ArrowRight } from "lucide-react"
import { client } from "@/lib/sanityClient"
import { format } from "date-fns"

interface Event {
  _id: string
  title: string
  startDate: string
  endDate?: string
  location?: string
  description?: { children: { text: string }[] }[]
}

export default function Events() {
  const [upcomingEvents, setUpcomingEvents] = useState<Event[]>([])
  const [pastEvents, setPastEvents] = useState<Event[]>([])

  useEffect(() => {
    async function fetchEvents() {
      const query = `*[_type == "event"] | order(startDate asc) {
        _id,
        title,
        startDate,
        endDate,
        location,
        description
      }`
      const events: Event[] = await client.fetch(query)
      const now = new Date()

      const upcoming = events.filter(
        (event) => new Date(event.startDate) >= now
      )
      const past = events.filter(
        (event) => new Date(event.startDate) < now
      )

      setUpcomingEvents(upcoming)
      setPastEvents(past)
    }
    fetchEvents()
  }, [])

  function formatDateRange(start: string | undefined, end: string | undefined) {
    if (!start) return ""
    const startDate = new Date(start)
    if (!end) {
      return format(startDate, "MMMM d, yyyy")
    }
    const endDate = new Date(end)
    if (startDate.toDateString() === endDate.toDateString()) {
      return format(startDate, "MMMM d, yyyy")
    }
    return `${format(startDate, "MMMM d")} - ${format(endDate, "MMMM d, yyyy")}`
  }

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
            {upcomingEvents.map((event: Event) => (
              <div
                key={event._id}
                className="border border-border rounded-lg overflow-hidden hover:border-primary/50 transition-colors bg-card p-8"
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
                  <div>
                    <div className="inline-block px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-semibold mb-4">
                      Event
                    </div>
                    <h3 className="text-2xl font-bold mb-4">{event.title}</h3>
                    <div className="space-y-2 text-muted-foreground">
                      <div className="flex items-center gap-2">
                        <Calendar size={18} />
                        <span>{formatDateRange(event.startDate, event.endDate)}</span>
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
            {pastEvents.map((event: Event) => (
              <div key={event._id} className="p-8 border border-border rounded-lg hover:shadow-lg transition-shadow">
                <div className="inline-block px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-semibold mb-4">
                  Event
                </div>
                <h3 className="text-xl font-bold mb-3">{event.title}</h3>
                <div className="space-y-2 text-sm text-muted-foreground mb-4">
                  <div className="flex items-center gap-2">
                    <Calendar size={16} />
                    <span>{formatDateRange(event.startDate, event.endDate)}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin size={16} />
                    <span>{event.location}</span>
                  </div>
                </div>
                <p className="text-sm font-semibold text-primary">
                  {event.description && event.description[0]?.children[0]?.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
