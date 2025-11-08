"use client"

import Link from "next/link"
import { useEffect, useState } from "react"
import { MessageCircle } from "lucide-react"

export function FloatingCTA() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 300)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  if (!isVisible) return null

  return (
    <div className="fixed bottom-8 right-8 z-40 space-y-3 animate-in fade-in duration-300">
      <a
        href="https://wa.me/15551234567"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center w-14 h-14 bg-green-500 text-white rounded-full shadow-lg hover:bg-green-600 transition-colors"
        title="Message on WhatsApp"
      >
        <MessageCircle size={24} />
      </a>
      <Link
        href="/booking"
        className="flex items-center justify-center w-14 h-14 bg-primary text-primary-foreground rounded-full shadow-lg hover:bg-primary/90 transition-colors font-bold text-lg"
        title="Book Us"
      >
        BK
      </Link>
    </div>
  )
}
