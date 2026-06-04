"use client"

import { useState, useEffect } from "react"
import { Phone, MessageCircle } from "lucide-react"

export function StickyMobileCta() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > window.innerHeight * 0.7)
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  if (!isVisible) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 lg:hidden animate-fade-in-up">
      <div className="bg-background/80 backdrop-blur-xl border-t border-border/40 px-4 py-3 shadow-[0_-4px_20px_rgba(0,0,0,0.06)]">
        <div className="flex gap-3 max-w-lg mx-auto">
          <a
            href="tel:+919876543210"
            className="flex-1 flex items-center justify-center gap-2.5 bg-foreground text-background rounded-xl py-3.5 text-sm font-semibold tracking-wide hover:opacity-90 transition-opacity duration-200"
          >
            <Phone className="w-4 h-4" />
            <span>Call Now</span>
          </a>
          <a
            href="https://wa.me/919876543210?text=Hi%2C%20I%27d%20like%20to%20learn%20more%20about%20your%20marketing%20services."
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 flex items-center justify-center gap-2.5 bg-[#25D366] text-white rounded-xl py-3.5 text-sm font-semibold tracking-wide hover:bg-[#20BD5A] transition-colors duration-200"
          >
            <MessageCircle className="w-4 h-4" />
            <span>WhatsApp</span>
          </a>
        </div>
      </div>
    </div>
  )
}
