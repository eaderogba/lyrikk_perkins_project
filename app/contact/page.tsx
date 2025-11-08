"use client"

import type React from "react"

import { useState } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Mail, Phone, MapPin, Send, Instagram, TicketIcon as TikTok, Twitter } from "lucide-react"

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Contact form submitted:", formData)
  }

  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero */}
      <section className="pt-32 pb-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-primary/10 to-background">
        <div className="max-w-4xl mx-auto text-center space-y-4">
          <h1 className="text-5xl font-bold">Get In Touch</h1>
          <p className="text-xl text-muted-foreground">Have questions? I'd love to hear from you</p>
        </div>
      </section>

      {/* Content */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <form onSubmit={handleSubmit} className="space-y-6">
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

                <div>
                  <label className="block text-sm font-semibold mb-2">Subject *</label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="How can I help?"
                    className="w-full px-4 py-2 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-2">Message *</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Your message..."
                    rows={6}
                    className="w-full px-4 py-2 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                    required
                  />
                </div>

                <button
                  type="submit"
                  className="w-full px-8 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-colors flex items-center justify-center gap-2"
                >
                  <Send size={20} />
                  Send Message
                </button>
              </form>
            </div>

            {/* Contact Info */}
            <div className="space-y-6">
              <div className="p-8 bg-card rounded-lg border border-border">
                <div className="flex items-start gap-4 mb-6">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <Mail className="text-primary" size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">Email</h3>
                    <p className="text-muted-foreground text-sm mb-2">For general inquiries</p>
                    <a href="mailto:hello@artist.com" className="text-primary font-semibold hover:underline">
                      hello@artist.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4 mb-6 pt-6 border-t border-border">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <Phone className="text-primary" size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">Phone</h3>
                    <p className="text-muted-foreground text-sm mb-2">Business hours: 9AM - 6PM EST</p>
                    <a href="tel:+15551234567" className="text-primary font-semibold hover:underline">
                      +1 (555) 123-4567
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4 pt-6 border-t border-border">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <MapPin className="text-primary" size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">Managed By</h3>
                    <p className="text-muted-foreground text-sm">
                      Managed by my mother
                      <br />
                      New York, NY 10001
                    </p>
                  </div>
                </div>
              </div>

              {/* Social Media */}
              <div className="p-8 bg-card rounded-lg border border-border">
                <h3 className="font-bold mb-4">Follow Me</h3>
                <div className="grid grid-cols-2 gap-3">
                  {[
                    { icon: Instagram, label: "Instagram", href: "#" },
                    { icon: TikTok, label: "TikTok", href: "#" },
                    { icon: Twitter, label: "Twitter", href: "#" },
                    { icon: Mail, label: "Newsletter", href: "#" },
                  ].map((social, idx) => (
                    <a
                      key={idx}
                      href={social.href}
                      className="p-4 bg-background rounded-lg border border-border hover:border-primary/50 flex items-center justify-center gap-2 text-sm font-semibold transition-colors group"
                    >
                      <social.icon size={18} className="group-hover:text-primary transition-colors" />
                      <span className="hidden sm:inline group-hover:text-primary transition-colors">
                        {social.label}
                      </span>
                    </a>
                  ))}
                </div>
              </div>

              {/* Newsletter */}
              <div className="p-8 bg-gradient-to-br from-primary/10 to-accent/10 rounded-lg border border-primary/30">
                <h3 className="font-bold mb-2">Newsletter</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Get exclusive updates and behind-the-scenes content
                </p>
                <input
                  type="email"
                  placeholder="your@email.com"
                  className="w-full px-4 py-2 border border-border rounded-lg bg-background mb-3 focus:outline-none focus:ring-2 focus:ring-primary text-sm"
                />
                <button className="w-full px-4 py-2 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-colors text-sm">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
