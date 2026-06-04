import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Link from "next/link"
import { ScrollReveal } from "@/components/ui/scroll-reveal"

export function HeroSection() {
  return (
    <section className="relative min-h-[100dvh] flex flex-col justify-center pt-24 lg:pt-32 pb-16 lg:pb-28 px-6 lg:px-8 overflow-hidden select-none">
      
      {/* Hanging Background Service Cards */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        {/* SEO Card */}
        <div className="absolute left-[15%] top-[12%] -rotate-6 opacity-[0.35] hover:opacity-[0.8] hover:scale-105 transition-all duration-300 pointer-events-auto cursor-default bg-card/40 backdrop-blur-xs border border-border/50 px-4 py-2.5 rounded-xl shadow-xs text-xs font-semibold tracking-wider text-primary uppercase select-none animate-float-slow hidden md:block">
          SEO
        </div>
        {/* Google Ads Card */}
        <div className="absolute right-[16%] top-[14%] rotate-6 opacity-[0.4] hover:opacity-[0.8] hover:scale-105 transition-all duration-300 pointer-events-auto cursor-default bg-card/40 backdrop-blur-xs border border-border/50 px-4 py-2.5 rounded-xl shadow-xs text-xs font-semibold tracking-wider text-primary uppercase select-none animate-float-slow-reverse hidden md:block">
          Google Ads
        </div>
        {/* Meta Ads Card */}
        <div className="absolute left-[12%] top-[42%] -rotate-12 opacity-[0.3] hover:opacity-[0.8] hover:scale-105 transition-all duration-300 pointer-events-auto cursor-default bg-card/40 backdrop-blur-xs border border-border/50 px-4 py-2.5 rounded-xl shadow-xs text-xs font-semibold tracking-wider text-primary uppercase select-none animate-float-slow-reverse hidden md:block">
          Meta Ads
        </div>
        {/* GMB Card */}
        <div className="absolute right-[14%] top-[48%] rotate-3 opacity-[0.35] hover:opacity-[0.8] hover:scale-105 transition-all duration-300 pointer-events-auto cursor-default bg-card/40 backdrop-blur-xs border border-border/50 px-4 py-2.5 rounded-xl shadow-xs text-xs font-semibold tracking-wider text-primary uppercase select-none animate-float-slow hidden md:block">
          GMB Optimization
        </div>
        {/* Web Design Card */}
        <div className="absolute left-[18%] bottom-[18%] -rotate-3 opacity-[0.4] hover:opacity-[0.8] hover:scale-105 transition-all duration-300 pointer-events-auto cursor-default bg-card/40 backdrop-blur-xs border border-border/50 px-4 py-2.5 rounded-xl shadow-xs text-xs font-semibold tracking-wider text-primary uppercase select-none animate-float-slow hidden md:block">
          Web Design
        </div>
        {/* Email Marketing Card */}
        <div className="absolute right-[19%] bottom-[15%] rotate-12 opacity-[0.35] hover:opacity-[0.8] hover:scale-105 transition-all duration-300 pointer-events-auto cursor-default bg-card/40 backdrop-blur-xs border border-border/50 px-4 py-2.5 rounded-xl shadow-xs text-xs font-semibold tracking-wider text-primary uppercase select-none animate-float-slow-reverse hidden md:block">
          Email Marketing
        </div>
        {/* CRO Card */}
        <div className="absolute left-[28%] top-[28%] rotate-2 opacity-[0.35] hover:opacity-[0.8] hover:scale-105 transition-all duration-300 pointer-events-auto cursor-default bg-card/40 backdrop-blur-xs border border-border/50 px-4 py-2.5 rounded-xl shadow-xs text-xs font-semibold tracking-wider text-primary uppercase select-none animate-float-slow hidden md:block">
          CRO
        </div>
        {/* Analytics Card */}
        <div className="absolute right-[26%] top-[34%] -rotate-6 opacity-[0.35] hover:opacity-[0.8] hover:scale-105 transition-all duration-300 pointer-events-auto cursor-default bg-card/40 backdrop-blur-xs border border-border/50 px-4 py-2.5 rounded-xl shadow-xs text-xs font-semibold tracking-wider text-primary uppercase select-none animate-float-slow-reverse hidden md:block">
          Analytics
        </div>
        {/* Copywriting Card */}
        <div className="absolute left-[32%] bottom-[8%] rotate-6 opacity-[0.35] hover:opacity-[0.8] hover:scale-105 transition-all duration-300 pointer-events-auto cursor-default bg-card/40 backdrop-blur-xs border border-border/50 px-4 py-2.5 rounded-xl shadow-xs text-xs font-semibold tracking-wider text-primary uppercase select-none animate-float-slow hidden md:block">
          Copywriting
        </div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="max-w-4xl mx-auto text-center">

          {/* Headline */}
          <ScrollReveal delay={0}>
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-semibold text-foreground leading-[1.1] tracking-tight text-balance mb-8">
              We Bring{" "}
              <span className="bg-gradient-to-r from-[#A37930] via-[#D8B478] to-[#A37930] bg-clip-text text-transparent font-bold">Delhi NCR Customers</span> to Your Door.
            </h1>
          </ScrollReveal>

          {/* Subheadline */}
          <ScrollReveal delay={0.1}>
            <p className="text-lg lg:text-xl text-foreground-muted max-w-2xl mx-auto leading-relaxed mb-10">
              When people nearby search for what you offer, we make sure they find you first. We turn online searches into real phone calls, bookings, and foot traffic for your growing business.
            </p>
          </ScrollReveal>

          {/* CTAs */}
          <ScrollReveal delay={0.2}>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full px-4 sm:px-0">
              <Link href="#audit-form" className="w-full sm:w-auto">
                <Button
                  size="lg"
                  className="w-full sm:w-auto bg-primary hover:bg-primary/90 text-primary-foreground rounded-xl px-4 sm:px-8 py-5 sm:py-6 text-sm sm:text-base hover-arrow-translate cursor-pointer"
                >
                  Check Your Google Maps Ranking
                  <ArrowRight className="w-4 h-4 ml-2 arrow-icon" />
                </Button>
              </Link>
              <Link href="#results" className="w-full sm:w-auto">
                <Button
                  variant="outline"
                  size="lg"
                  className="w-full sm:w-auto border-border text-foreground hover:bg-secondary hover:text-secondary-foreground rounded-xl px-4 sm:px-8 py-5 sm:py-6 text-sm sm:text-base transition-colors duration-200 hover-lift cursor-pointer"
                >
                  See Our Results
                </Button>
              </Link>
            </div>
          </ScrollReveal>

        </div>
      </div>
    </section>
  )
}
