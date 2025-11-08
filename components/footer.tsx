import Link from "next/link"
import { Mail, Instagram, TicketIcon as TikTok, Twitter } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-secondary text-secondary-foreground py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="font-bold text-lg mb-4">Lyrikk Dion, Lil' Miss Detroit</h3>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Navigation</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="hover:opacity-70">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:opacity-70">
                  About
                </Link>
              </li>
              <li>
                <Link href="/talents" className="hover:opacity-70">
                  Talents
                </Link>
              </li>
              <li>
                <Link href="/events" className="hover:opacity-70">
                  Events
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Resources</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/news" className="hover:opacity-70">
                  News
                </Link>
              </li>
              <li>
                <Link href="/booking" className="hover:opacity-70">
                  Book Now
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:opacity-70">
                  Contact
                </Link>
              </li>
              <li>
                <a href="#" className="hover:opacity-70">
                  Press Kit
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Follow Us</h4>
            <div className="flex gap-4">
              <a href="https://www.instagram.com/lyrikk__dion?igsh=MWxrOWg2MnZ4dWRkcw==" className="hover:opacity-70">
                <Instagram size={20} />
              </a>
              <a href="#" className="hover:opacity-70">
                <TikTok size={20} />
              </a>
              <a href="#" className="hover:opacity-70">
                <Twitter size={20} />
              </a>
              <a href="#" className="hover:opacity-70">
                <Mail size={20} />
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-secondary-foreground/20 pt-8 text-center text-sm opacity-70">
          <p>&copy; 2025 Talent Collective. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
