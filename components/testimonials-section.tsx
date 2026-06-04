"use client"

import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react"
import useEmblaCarousel from "embla-carousel-react"
import { useCallback, useEffect } from "react"

const testimonials = [
  {
    name: "Dr. Priya Sharma",
    role: "Founder",
    business: "Smile Dental Clinic",
    quote:
      "RepublicAds got our clinic into the top 3 on Google Maps within two months. Patient inquiries went from a handful per week to consistent daily bookings. The ROI speaks for itself.",
    rating: 5,
  },
  {
    name: "Arjun Mehta",
    role: "Co-Founder",
    business: "ThreadCraft Apparel",
    quote:
      "We were burning money on poorly structured ad campaigns before switching to RepublicAds. They restructured everything, and within 90 days our return on ad spend more than tripled.",
    rating: 5,
  },
  {
    name: "Kavitha Rao",
    role: "Managing Partner",
    business: "Pinnacle Accounting",
    quote:
      "As a small firm, we were entirely dependent on referrals. RepublicAds built our organic presence from zero. We now get a steady stream of qualified leads from search alone.",
    rating: 5,
  },
  {
    name: "Rajeev Singh",
    role: "Owner",
    business: "Singh Auto Diagnostics",
    quote:
      "I was skeptical about local ads, but within a month our phone started ringing non-stop for oil changes and brake jobs. They really know how to target people nearby.",
    rating: 5,
  },
  {
    name: "Anita Desai",
    role: "Director",
    business: "Desai Legal Partners",
    quote:
      "Our Google Maps ranking jumped from the 4th page to the top 3 in just 6 weeks. The amount of walk-in traffic and direct calls we get now is unbelievable.",
    rating: 5,
  },
  {
    name: "Vikram Malhotra",
    role: "CEO",
    business: "Malhotra Real Estate",
    quote:
      "RepublicAds completely revamped our online presence. We went from struggling to find buyers to having a waitlist. Their focus on real revenue over vanity metrics is exactly what we needed.",
    rating: 5,
  },
]

export function TestimonialsSection() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ 
    align: "start",
    loop: true 
  })

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev()
  }, [emblaApi])

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext()
  }, [emblaApi])

  // Auto-rotate every 2 seconds
  useEffect(() => {
    if (!emblaApi) return
    const interval = setInterval(() => {
      emblaApi.scrollNext()
    }, 2000)
    return () => clearInterval(interval)
  }, [emblaApi])

  return (
    <section id="testimonials" className="py-12 lg:py-20 px-6 lg:px-8 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header with Navigation */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-12 lg:mb-16">
          <div className="max-w-2xl">
            <p className="text-xs uppercase tracking-widest text-primary mb-4 font-bold">
              Testimonials
            </p>
            <h2 className="font-serif text-3xl lg:text-4xl xl:text-5xl font-semibold text-foreground leading-[1.1] sm:leading-tight mb-4">
              Trusted by <em className="text-primary not-italic">business owners</em> like you
            </h2>
            <p className="text-lg text-foreground-muted leading-relaxed">
              Hear from the businesses we have helped grow.
            </p>
          </div>

          {/* Carousel Controls */}
          <div className="flex gap-3 shrink-0">
            <button 
              onClick={scrollPrev} 
              className="w-12 h-12 flex items-center justify-center rounded-full border border-border/50 bg-card/60 backdrop-blur-md hover:bg-primary/10 hover:border-primary/30 transition-all duration-300"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-5 h-5 text-foreground" />
            </button>
            <button 
              onClick={scrollNext} 
              className="w-12 h-12 flex items-center justify-center rounded-full border border-border/50 bg-card/60 backdrop-blur-md hover:bg-primary/10 hover:border-primary/30 transition-all duration-300"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-5 h-5 text-foreground" />
            </button>
          </div>
        </div>

        {/* Embla Carousel Viewport */}
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex -ml-6">
            {testimonials.map((testimonial) => (
              <div 
                key={testimonial.name} 
                className="flex-[0_0_100%] md:flex-[0_0_50%] lg:flex-[0_0_33.333333%] pl-6 min-w-0"
              >
                <div className="h-full bg-card/45 backdrop-blur-md border border-border/50 rounded-xl p-8 flex flex-col hover:border-primary/30 transition-colors duration-300">
                  <Quote className="w-8 h-8 text-primary/20 mb-4 rotate-180 shrink-0" />
                  <blockquote className="text-foreground leading-relaxed mb-6 flex-1">
                    &ldquo;{testimonial.quote}&rdquo;
                  </blockquote>
                  <div className="flex gap-1 mb-4">
                    {Array.from({ length: testimonial.rating }).map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-primary fill-primary" />
                    ))}
                  </div>
                  <div className="pt-4 border-t border-border/40 shrink-0">
                    <p className="font-semibold text-foreground text-sm">
                      {testimonial.name}
                    </p>
                    <p className="text-xs text-foreground-muted mt-0.5">
                      {testimonial.role}, {testimonial.business}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}
