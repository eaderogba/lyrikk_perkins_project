"use client"

import type React from "react"

import { useState } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Download, Send } from "lucide-react"

export default function Booking() {
  interface FormData {
    eventName: string
    eventType: string
    date: string
    location: string
    budget: string
    duration: string
    name: string
    email: string
    phone: string
    message: string
    bookingOptions: string[]
    songRequests: string
    promoterName: string
    socialMediaHandles: string
  }

  const [formData, setFormData] = useState<FormData>({
    eventName: "",
    eventType: "",
    date: "",
    location: "",
    budget: "",
    duration: "",
    name: "",
    email: "",
    phone: "",
    message: "",
    bookingOptions: [],
    songRequests: "",
    promoterName: "",
    socialMediaHandles: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    try {
      const response = await fetch('/api/bookings', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })
      if (!response.ok) {
        throw new Error(`Error: ${response.statusText}`)
      }
      alert('Booking request submitted successfully!')
      setFormData({
        eventName: "",
        eventType: "",
        date: "",
        location: "",
        budget: "",
        duration: "",
        name: "",
        email: "",
        phone: "",
        message: "",
        bookingOptions: [],
        songRequests: "",
        promoterName: "",
        socialMediaHandles: "",
      })
    } catch (error) {
      console.error('Failed to submit booking:', error)
      alert('Failed to submit booking request. Please try again later.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero */}
      <section className="pt-32 pb-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-primary/10 to-background">
        <div className="max-w-4xl mx-auto text-center space-y-4">
          <h1 className="text-5xl font-bold">Book Me</h1>
          <p className="text-xl text-muted-foreground">Thank you for your interest in Booking Lil Miss Detroit! Please complete this form in full to request an official booking for Lil Miss Detroit. A member of our team will follow up once the submission is received.
            <br />
            <b>NOTE: ANY INCOMPLETE SUBMITTED REQUEST WILL NOT BE CONSIDERED. LIL MISS DETROIT TEAM DOES NOT PUT HER ON THE ROAD WITHOUT ALL DETAILS, INCLUDING ADDRESS, VERIFIED AND CONFIRMED.</b> 
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Form */}
            <div className="lg:col-span-2">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold mb-2">Event Name *</label>
                    <input
                      type="text"
                      name="eventName"
                      value={formData.eventName}
                      onChange={handleChange}
                      placeholder="e.g., Wedding Reception"
                      className="w-full px-4 py-2 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="eventType" className="block text-sm font-semibold mb-2">Event Type *</label>
                    <select
                      id="eventType"
                      name="eventType"
                      value={formData.eventType}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                      required
                    >
                      <option value="">Select type</option>
                      <option value="corporate">Corporate Event</option>
                      <option value="wedding">Wedding</option>
                      <option value="festival">Festival</option>
                      <option value="private">Private Party</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="date" className="block text-sm font-semibold mb-2">Date *</label>
                    <input
                      id="date"
                      type="date"
                      name="date"
                      value={formData.date}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="duration" className="block text-sm font-semibold mb-2">Duration *</label>
                    <select
                      id="duration"
                      name="duration"
                      value={formData.duration}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                      required
                    >
                      <option value="">Select duration</option>
                      <option value="1-2">1-2 Hours</option>
                      <option value="2-4">2-4 Hours</option>
                      <option value="4-8">4-8 Hours</option>
                      <option value="full-day">Full Day</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-2">Location *</label>
                  <input
                    type="text"
                    name="location"
                    value={formData.location}
                    onChange={handleChange}
                    placeholder="City, Venue"
                    className="w-full px-4 py-2 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="budget" className="block text-sm font-semibold mb-2">Budget Range</label>
                  <select
                    id="budget"
                    name="budget"
                    value={formData.budget}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                  >
                    <option value="">Select budget</option>
                    <option value="5k">$5,000 - $10,000</option>
                    <option value="10k">$10,000 - $25,000</option>
                    <option value="25k">$25,000 - $50,000</option>
                    <option value="50k+">$50,000+</option>
                  </select>
                </div>

                <div className="border-t border-border pt-6">
                  <h3 className="text-lg font-bold mb-4">Contact Information</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold mb-2">Name *</label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Your name"
                        className="w-full px-4 py-2 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold mb-2">Email *</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="your@email.com"
                        className="w-full px-4 py-2 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                        required
                      />
                    </div>
                  </div>
                  <div className="mt-6">
                    <label className="block text-sm font-semibold mb-2">Phone *</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+1 (555) 000-0000"
                      className="w-full px-4 py-2 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                      required
                    />
                  </div>
                </div>

                {/* Additional Details moved down */}

                {/* New Fields */}
                <fieldset className="border-t border-border pt-6">
                  <legend className="text-lg font-bold mb-4">Booking Options</legend>
                  <div className="space-y-2">
                    {[
                      "Walk Through (30-45 mins) $4,000",
                      "Appearance / Hosting Only (1.5 hours) – $5,000",
                      "Appearance + One Song $6,000",
                      "Appearance + Three Songs $8,000",
                      "Live Performance (5 Song Set) – $10,000",
                      "Is your venue more than 40 miles from Chicago?",
                      "Schools Email For Bookings",
                    ].map((option) => (
                      <label key={option} className="flex items-center gap-2">
                        <input
                          type="checkbox"
                          name="bookingOptions"
                          value={option}
                          checked={formData.bookingOptions.includes(option)}
                          onChange={(e) => {
                            const { checked, value } = e.target
                            setFormData((prev) => {
                              const options = new Set(prev.bookingOptions)
                              if (checked) options.add(value)
                              else options.delete(value)
                              return { ...prev, bookingOptions: Array.from(options) }
                            })
                          }}
                          className="form-checkbox"
                          aria-describedby="bookingOptionsHelp"
                          required={formData.bookingOptions.length === 0}
                        />
                        <span>{option}</span>
                      </label>
                    ))}
                  </div>
                  <p id="bookingOptionsHelp" className="text-xs text-muted-foreground mt-1">Please select at least one booking option.</p>
                </fieldset>

                <div className="mt-6">
                  <label className="block text-sm font-semibold mb-2" htmlFor="songRequests">Song Requests</label>
                  <textarea
                    id="songRequests"
                    name="songRequests"
                    value={formData.songRequests}
                    onChange={handleChange}
                    placeholder="List any song requests here"
                    rows={4}
                    className="w-full px-4 py-2 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>

                <div className="mt-6">
                  <label className="block text-sm font-semibold mb-2" htmlFor="promoterName">Promoter Name</label>
                  <input
                    type="text"
                    id="promoterName"
                    name="promoterName"
                    value={formData.promoterName}
                    onChange={handleChange}
                    placeholder="Name of promoter or agency"
                    className="w-full px-4 py-2 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>

                <div className="mt-6">
                  <label className="block text-sm font-semibold mb-2" htmlFor="socialMediaHandles">Social Media Handles</label>
                  <input
                    type="text"
                    id="socialMediaHandles"
                    name="socialMediaHandles"
                    value={formData.socialMediaHandles}
                    onChange={handleChange}
                    placeholder="e.g., @instagram, @twitter"
                    className="w-full px-4 py-2 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-2">Additional Details</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us more about your event, special requests, or questions..."
                    rows={5}
                    className="w-full px-4 py-2 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full px-8 py-3 rounded-lg font-semibold transition-colors flex items-center justify-center gap-2 ${
                    isSubmitting
                      ? 'bg-primary/50 text-primary-foreground cursor-not-allowed'
                      : 'bg-primary text-primary-foreground hover:bg-primary/90'
                  }`}
                >
                  <Send size={20} />
                  {isSubmitting ? 'Submitting...' : 'Send Booking Inquiry'}
                </button>
              </form>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Press Kit */}
              <div className="p-8 bg-card rounded-lg border border-border">
                <h3 className="text-xl font-bold mb-4">Press Kit</h3>
                <p className="text-muted-foreground mb-6">
                  Download my official media kit with bio, photos, and performance highlights.
                </p>
                <button className="w-full px-6 py-3 border-2 border-primary text-primary rounded-lg font-semibold hover:bg-primary/10 transition-colors flex items-center justify-center gap-2">
                  <Download size={20} />
                  Download PDF
                </button>
              </div>

              {/* Contact Info */}
              <div className="p-8 bg-card rounded-lg border border-border">
                <h3 className="text-xl font-bold mb-4">Direct Contact</h3>
                <div className="space-y-4">
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Email</p>
                    <a href="mailto:book@artist.com" className="text-primary font-semibold hover:underline">
                      book@artist.com
                    </a>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Phone</p>
                    <a href="tel:+15551234567" className="text-primary font-semibold hover:underline">
                      +1 (555) 123-4567
                    </a>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">WhatsApp</p>
                    <a
                      href="https://wa.me/15551234567"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary font-semibold hover:underline"
                    >
                      Message on WhatsApp
                    </a>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Managed by</p>
                    <p className="text-primary font-semibold">Mom</p>
                  </div>
                </div>
              </div>

              {/* Popular Packages */}
              <div className="p-8 bg-card rounded-lg border border-border">
                <h3 className="text-xl font-bold mb-4">Performance Packages</h3>
                <ul className="space-y-3 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-primary font-bold">•</span>
                    <span>Walk ThroPerformance Packagesugh (30-45 mins) $4,000</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary font-bold">•</span>
                    <span>Appearance / Hosting Only (1.5 hours) – $5,000</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary font-bold">•</span>
                    <span>Appearance + One Song $6,000</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary font-bold">•</span>
                    <span>Appearance + Three Songs $8,000</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary font-bold">•</span>
                    <span>Live Performance (5 Song Set) – $10,000</span>
                  </li>
                  <li className="flex items-start gap-2">
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
