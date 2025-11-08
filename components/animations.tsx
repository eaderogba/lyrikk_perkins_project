"use client"

import { motion } from "framer-motion"
import type { ReactNode } from "react"

// Fade in animation
export const FadeIn = ({
  children,
  delay = 0,
  duration = 0.6,
}: {
  children: ReactNode
  delay?: number
  duration?: number
}) => (
  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay, duration }}>
    {children}
  </motion.div>
)

// Slide in from left
export const SlideInLeft = ({
  children,
  delay = 0,
}: {
  children: ReactNode
  delay?: number
}) => (
  <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ delay, duration: 0.6 }}>
    {children}
  </motion.div>
)

// Slide in from bottom
export const SlideInUp = ({
  children,
  delay = 0,
}: {
  children: ReactNode
  delay?: number
}) => (
  <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ delay, duration: 0.6 }}>
    {children}
  </motion.div>
)

// Scale in
export const ScaleIn = ({
  children,
  delay = 0,
}: {
  children: ReactNode
  delay?: number
}) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.8 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ delay, duration: 0.6 }}
  >
    {children}
  </motion.div>
)

// Stagger container for list animations
export const StaggerContainer = ({
  children,
  staggerDelay = 0.1,
}: {
  children: ReactNode
  staggerDelay?: number
}) => (
  <motion.div
    initial="hidden"
    animate="visible"
    variants={{
      hidden: { opacity: 0 },
      visible: {
        opacity: 1,
        transition: {
          staggerChildren: staggerDelay,
        },
      },
    }}
  >
    {children}
  </motion.div>
)

// Stagger item for individual list items
export const StaggerItem = ({ children }: { children: ReactNode }) => (
  <motion.div
    variants={{
      hidden: { opacity: 0, y: 20 },
      visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.5 },
      },
    }}
  >
    {children}
  </motion.div>
)

export const scaleHoverVariants = {
  initial: { scale: 1 },
  hover: { scale: 1.05 },
}

export const liftHoverVariants = {
  initial: { y: 0 },
  hover: { y: -10 },
}

export const MotionButton = motion.button
export const MotionDiv = motion.div
