"use client"

import { useState, useEffect } from "react"
import { MessageCircle } from "lucide-react"

export function WhatsAppWidget() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      // Show after scrolling past the hero (~100vh)
      setIsVisible(window.scrollY > window.innerHeight * 0.8)
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  if (!isVisible) return null

  return (
    <a
      href="https://wa.me/919876543210?text=Hi%2C%20I%27d%20like%20to%20learn%20more%20about%20your%20marketing%20services."
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 hidden lg:flex items-center gap-3 bg-[#25D366] hover:bg-[#20BD5A] text-white px-5 py-3.5 rounded-full shadow-lg shadow-[#25D366]/20 hover:shadow-xl hover:shadow-[#25D366]/30 hover:scale-[1.03] transition-all duration-300 cursor-pointer group animate-fade-in-up"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle className="w-5 h-5 group-hover:scale-110 transition-transform duration-200" />
      <span className="text-sm font-semibold tracking-wide">Chat with us</span>
    </a>
  )
}
