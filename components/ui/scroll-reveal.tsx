"use client"

import { motion } from "framer-motion"
import { ReactNode } from "react"

interface ScrollRevealProps {
  children: ReactNode
  delay?: number
  className?: string
}

export function ScrollReveal({ children, delay = 0, className = "" }: ScrollRevealProps) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      // crucial for mobile performance: 
      // 1. once: true removes the observer after it triggers
      // 2. margin triggers the animation right before it enters
      viewport={{ once: true, margin: "0px 0px -50px 0px" }}
      transition={{
        duration: 0.6,
        delay: delay,
        ease: [0.21, 0.47, 0.32, 0.98], // Custom cubic-bezier for premium feel
      }}
      // Use will-change strategically only when the element is animating
      style={{ willChange: "transform, opacity" }}
    >
      {children}
    </motion.div>
  )
}
