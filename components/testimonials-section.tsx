import { Star, Quote } from "lucide-react"

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
]

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-12 lg:py-20 px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 lg:mb-20">
          <p className="text-xs uppercase tracking-widest text-primary mb-4 font-bold">
            Testimonials
          </p>
          <h2 className="font-serif text-3xl lg:text-4xl xl:text-5xl font-semibold text-foreground leading-[1.1] sm:leading-tight mb-6">
            Trusted by <em className="text-primary not-italic">business owners</em> like you
          </h2>
          <p className="text-lg text-foreground-muted leading-relaxed">
            Hear from the businesses we have helped grow.
          </p>
        </div>

        {/* Testimonial Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.name}
              className="group bg-card/45 backdrop-blur-md border border-border/50 rounded-xl p-8 hover:bg-card/70 hover:border-primary/30 hover:shadow-[0_8px_30px_rgba(0,0,0,0.02)] transition-all duration-300 hover-lift flex flex-col"
            >
              {/* Quote Icon */}
              <Quote className="w-8 h-8 text-primary/20 mb-4 rotate-180" />

              {/* Quote Text */}
              <blockquote className="text-foreground leading-relaxed mb-6 flex-1">
                &ldquo;{testimonial.quote}&rdquo;
              </blockquote>

              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 text-primary fill-primary"
                  />
                ))}
              </div>

              {/* Author */}
              <div className="pt-4 border-t border-border/40">
                <p className="font-semibold text-foreground text-sm">
                  {testimonial.name}
                </p>
                <p className="text-xs text-foreground-muted mt-0.5">
                  {testimonial.role}, {testimonial.business}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
