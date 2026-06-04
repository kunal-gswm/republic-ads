"use client"

import { Search, MapPin, MousePointerClick, Target, BarChart3, Mail, Megaphone } from "lucide-react"
import { useEffect, useRef, useState } from "react"

const services = [
  {
    icon: Search,
    title: "SEO (Search Engine Optimization)",
    description: "We help your website show up higher on Google so more people can find you without you having to pay for ads.",
    span: "col-span-1 md:col-span-2 lg:col-span-2",
  },
  {
    icon: MapPin,
    title: "Google Maps Optimization",
    description: "We set up and improve your Google Maps listing so local customers can easily find your physical store.",
    span: "col-span-1 md:col-span-1 lg:col-span-1",
  },
  {
    icon: MousePointerClick,
    title: "Google Ads",
    description: "We run smart Google ads to capture people who are actively searching for what you sell right now.",
    span: "col-span-1 md:col-span-1 lg:col-span-1",
  },
  {
    icon: Target,
    title: "Facebook & Instagram Ads",
    description: "We create eye-catching ads on social media to reach your ideal customers and get them interested in your business.",
    span: "col-span-1 md:col-span-1 lg:col-span-1",
  },
  {
    icon: BarChart3,
    title: "Tracking & Analytics",
    description: "We track exactly where your sales are coming from so you always know what is working and what isn't.",
    span: "col-span-1 md:col-span-1 lg:col-span-1",
  },
  {
    icon: Mail,
    title: "Email Marketing",
    description: "We send helpful emails to your past customers to keep them coming back to buy more from you.",
    span: "col-span-1 md:col-span-1 lg:col-span-1",
  },
  {
    icon: Megaphone,
    title: "Content Creation",
    description: "We write articles and create posts that answer your customers' questions and build trust in your brand.",
    span: "col-span-1 md:col-span-2 lg:col-span-2",
  },
]

export function ServicesSection() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.1 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} id="services" className="py-12 lg:py-20 px-6 lg:px-8 relative overflow-hidden">
      {/* Visual background for glassmorphism pop */}
      <div className="absolute inset-0 z-0 pointer-events-none premium-dotted-grid text-foreground/[0.05]" />
      <div className="absolute top-[20%] left-[-10%] w-[500px] h-[500px] bg-primary/[0.08] rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="max-w-2xl mb-16 lg:mb-20">
          <p className="text-xs uppercase tracking-widest text-primary mb-4 font-bold">
            What We Do
          </p>
          <h2 className="font-serif text-4xl sm:text-5xl font-semibold text-foreground leading-[1.1] sm:leading-tight mb-6">
            Everything you need to <em className="text-primary not-italic">grow</em> your business online
          </h2>
          <p className="text-lg text-foreground-muted leading-relaxed">
            We handle all your online marketing in one place, from getting new customers to keeping them coming back.
          </p>
        </div>

        {/* Bento Grid with CSS Staggered Animations */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
          {services.map((service, index) => {
            const delayClass = `animation-delay-${Math.min((index + 1) * 100, 500)}`
            return (
              <div
                key={service.title}
                className={`group bg-card/60 backdrop-blur-md border border-border/50 rounded-2xl p-8 hover:bg-card/80 hover:border-primary/40 hover:shadow-[0_8px_30px_rgba(0,0,0,0.04)] transition-all duration-300 hover:-translate-y-1 ${service.span} ${isVisible ? 'animate-fade-in-up ' + delayClass : 'opacity-0'}`}
              >
                <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center mb-6 group-hover:bg-primary/10 transition-colors duration-300">
                  <service.icon className="w-6 h-6 text-foreground group-hover:text-primary transition-colors duration-300" />
                </div>
                <h3 className="font-serif text-2xl font-semibold text-foreground mb-3">
                  {service.title}
                </h3>
                <p className="text-foreground-muted leading-relaxed">
                  {service.description}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
