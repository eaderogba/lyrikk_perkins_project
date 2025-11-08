"use client"

import Link from "next/link"
import { useState } from "react"
import { Menu, X, Instagram, Twitter, Mail } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

export function Sidebar() {
  const [isOpen, setIsOpen] = useState(false)

  const navItems = [
    { label: "NOW", href: "/" },
    { label: "ABOUT", href: "/about" },
    { label: "MUSIC", href: "/music" },
    { label: "EVENTS", href: "/events" },
    { label: "NEWS", href: "/news" },
    { label: "CONTACT", href: "/contact" },
  ]

  return (
    <>
      {/* Mobile Menu Button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed top-4 left-4 z-50 md:hidden p-2 bg-foreground text-background rounded hover:bg-foreground/90 transition-colors"
        aria-label="Toggle menu"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.div key="close" initial={{ rotate: -90 }} animate={{ rotate: 0 }} exit={{ rotate: 90 }}>
              <X size={24} />
            </motion.div>
          ) : (
            <motion.div key="menu" initial={{ rotate: 90 }} animate={{ rotate: 0 }} exit={{ rotate: -90 }}>
              <Menu size={24} />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.button>

      {/* Sidebar */}
      <AnimatePresence>
        <motion.aside
          initial={{ x: -256 }}
          animate={{ x: 0 }}
          exit={{ x: -256 }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
          className={`fixed left-0 top-0 h-full w-64 bg-primary text-primary-foreground flex flex-col pt-24 px-6 pb-8 z-40 md:translate-x-0 ${
            isOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"
          }`}
        >
          {/* Brand */}
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.1 }}>
            <Link
              href="/"
              className="text-2xl font-bold mb-12 hover:opacity-80 transition-opacity"
              onClick={() => setIsOpen(false)}
            >
              ARTIST
            </Link>
          </motion.div>

          {/* Navigation */}
          <nav className="space-y-6 flex-1">
            {navItems.map((item, idx) => (
              <motion.div
                key={item.href}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 + idx * 0.05 }}
              >
                <Link
                  href={item.href}
                  className="block text-sm font-semibold tracking-wider hover:opacity-70 transition-opacity"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
              </motion.div>
            ))}
          </nav>

          {/* Social Links */}
          <motion.div
            className="flex gap-4 border-t border-primary-foreground/20 pt-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            {[
              { icon: Instagram, label: "Instagram" },
              { icon: Twitter, label: "Twitter" },
              { icon: Mail, label: "Email" },
            ].map((item) => (
              <motion.a
                key={item.label}
                href="#"
                className="hover:opacity-70 transition-opacity"
                aria-label={item.label}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
              >
                <item.icon size={20} />
              </motion.a>
            ))}
          </motion.div>
        </motion.aside>
      </AnimatePresence>

      {/* Overlay for mobile */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 z-30 md:hidden"
            onClick={() => setIsOpen(false)}
          />
        )}
      </AnimatePresence>
    </>
  )
}
