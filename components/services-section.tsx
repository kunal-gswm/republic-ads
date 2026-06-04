"use client"

import { Search, MapPin, Target } from "lucide-react"
import { ScrollReveal } from "@/components/ui/scroll-reveal"

const services = [
  {
    icon: MapPin,
    title: "Google Maps Optimization",
    description: "When people nearby search for your services, we make sure you're the first business they see and call.",
    span: "col-span-1 md:col-span-1 lg:col-span-1",
  },
  {
    icon: Search,
    title: "Local Search Optimization",
    description: "We get your website to show up at the top of Google search results. More visibility means more local customers finding you before they find your competitors.",
    span: "col-span-1 md:col-span-1 lg:col-span-1",
  },
  {
    icon: Target,
    title: "Targeted Local Ads",
    description: "We put your business directly in front of locals who are actively looking to buy. Stop wasting money on broad ads and start paying for real, qualified leads.",
    span: "col-span-1 md:col-span-1 lg:col-span-1",
  },
]

export function ServicesSection() {
  return (
    <section id="services" className="py-12 lg:py-20 px-6 lg:px-8 relative overflow-hidden">
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

        {/* Bento Grid with CSS Staggered Animations -> Migrated to Framer Motion */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
          {services.map((service, index) => {
            const delay = Math.min((index + 1) * 0.1, 0.5)
            return (
              <ScrollReveal key={service.title} delay={delay} className={service.span}>
                <div
                  className="group h-full bg-card/90 backdrop-blur-sm shadow-sm md:bg-card/60 md:backdrop-blur-md md:border md:border-border/50 rounded-2xl p-8 hover:bg-card/80 hover:border-primary/40 hover:shadow-[0_8px_30px_rgba(0,0,0,0.04)] transition-all duration-300 hover:-translate-y-1 transform-gpu"
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
              </ScrollReveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
