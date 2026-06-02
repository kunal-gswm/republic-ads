"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

const navLinks = [
  { href: "#services", label: "Services" },
  { href: "#approach", label: "Approach" },
  { href: "#process", label: "Process" },
  { href: "#industries", label: "Industries" },
  { href: "#faq", label: "FAQ" },
]

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-4 md:px-6 py-4 w-full max-w-7xl mx-auto pointer-events-none">
      <nav className="mx-auto rounded-2xl lg:rounded-full border border-border/40 bg-background/60 backdrop-blur-lg px-6 lg:px-8 shadow-[0_8px_30px_rgba(42,38,33,0.03)] pointer-events-auto transition-all duration-300 w-full">
        <div className="flex items-center justify-between h-14 lg:h-16">
          
          {/* Logo */}
          <Link href="/" className="font-serif text-xl lg:text-2xl font-bold tracking-tight drop-shadow-[0_2px_4px_rgba(42,38,33,0.08)] flex items-center select-none">
            <span className="text-[#A37930] select-none">Republic</span>
            <span className="text-[#73767B] select-none">Ads</span>
          </Link>

          {/* Desktop Navigation - Capsule Pills Hover */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-xs font-bold tracking-wide uppercase text-foreground-muted hover:text-primary hover:bg-primary/5 rounded-full px-4 py-2 transition-all duration-200"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <Link href="#audit-form">
              <Button
                className="bg-gradient-to-r from-[#A37930] to-[#C59B4D] hover:from-[#B5893D] hover:to-[#D5AB5D] text-white text-xs font-bold uppercase tracking-wider shadow-md shadow-primary/10 hover:shadow-[0_4px_20px_rgba(163,121,48,0.25)] hover:scale-[1.03] transition-all duration-300 rounded-full px-6 py-4 border-0 cursor-pointer"
              >
                Free Audit
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 text-foreground"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden py-4 border-t border-border/30">
            <div className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-xs font-bold tracking-wide uppercase text-foreground-muted hover:text-primary hover:bg-primary/5 rounded-full px-4 py-2.5 transition-all duration-200"
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <Link href="#audit-form" onClick={() => setIsOpen(false)}>
                <Button
                  className="bg-gradient-to-r from-[#A37930] to-[#C59B4D] hover:from-[#B5893D] hover:to-[#D5AB5D] text-white text-xs font-bold uppercase tracking-wider shadow-md shadow-primary/10 hover:shadow-[0_4px_20px_rgba(163,121,48,0.25)] hover:scale-[1.03] transition-all duration-300 rounded-full mt-2 w-fit border-0 cursor-pointer"
                >
                  Free Audit
                </Button>
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
