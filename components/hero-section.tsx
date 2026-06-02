import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

export function HeroSection() {
  return (
    <section className="relative min-h-[100dvh] flex flex-col justify-center pt-24 lg:pt-32 pb-16 lg:pb-28 px-6 lg:px-8 overflow-hidden select-none">
      
      {/* Hanging Background Service Cards */}
      <div className="absolute inset-0 z-0 pointer-events-none hidden md:block overflow-hidden">
        {/* SEO Card */}
        <div className="absolute left-[15%] top-[12%] -rotate-6 opacity-[0.35] hover:opacity-[0.8] hover:scale-105 transition-all duration-300 pointer-events-auto cursor-default bg-card/40 backdrop-blur-xs border border-border/50 px-4 py-2.5 rounded-xl shadow-xs text-xs font-semibold tracking-wider text-primary uppercase select-none animate-float-slow">
          SEO
        </div>
        {/* Google Ads Card */}
        <div className="absolute right-[16%] top-[14%] rotate-6 opacity-[0.4] hover:opacity-[0.8] hover:scale-105 transition-all duration-300 pointer-events-auto cursor-default bg-card/40 backdrop-blur-xs border border-border/50 px-4 py-2.5 rounded-xl shadow-xs text-xs font-semibold tracking-wider text-primary uppercase select-none animate-float-slow-reverse">
          Google Ads
        </div>
        {/* Meta Ads Card */}
        <div className="absolute left-[12%] top-[42%] -rotate-12 opacity-[0.3] hover:opacity-[0.8] hover:scale-105 transition-all duration-300 pointer-events-auto cursor-default bg-card/40 backdrop-blur-xs border border-border/50 px-4 py-2.5 rounded-xl shadow-xs text-xs font-semibold tracking-wider text-primary uppercase select-none animate-float-slow-reverse">
          Meta Ads
        </div>
        {/* GMB Card */}
        <div className="absolute right-[14%] top-[48%] rotate-3 opacity-[0.35] hover:opacity-[0.8] hover:scale-105 transition-all duration-300 pointer-events-auto cursor-default bg-card/40 backdrop-blur-xs border border-border/50 px-4 py-2.5 rounded-xl shadow-xs text-xs font-semibold tracking-wider text-primary uppercase select-none animate-float-slow">
          GMB Optimization
        </div>
        {/* Web Design Card */}
        <div className="absolute left-[18%] bottom-[18%] -rotate-3 opacity-[0.4] hover:opacity-[0.8] hover:scale-105 transition-all duration-300 pointer-events-auto cursor-default bg-card/40 backdrop-blur-xs border border-border/50 px-4 py-2.5 rounded-xl shadow-xs text-xs font-semibold tracking-wider text-primary uppercase select-none animate-float-slow">
          Web Design
        </div>
        {/* Email Marketing Card */}
        <div className="absolute right-[19%] bottom-[15%] rotate-12 opacity-[0.35] hover:opacity-[0.8] hover:scale-105 transition-all duration-300 pointer-events-auto cursor-default bg-card/40 backdrop-blur-xs border border-border/50 px-4 py-2.5 rounded-xl shadow-xs text-xs font-semibold tracking-wider text-primary uppercase select-none animate-float-slow-reverse">
          Email Marketing
        </div>
        {/* CRO Card */}
        <div className="absolute left-[28%] top-[28%] rotate-2 opacity-[0.35] hover:opacity-[0.8] hover:scale-105 transition-all duration-300 pointer-events-auto cursor-default bg-card/40 backdrop-blur-xs border border-border/50 px-4 py-2.5 rounded-xl shadow-xs text-xs font-semibold tracking-wider text-primary uppercase select-none animate-float-slow">
          CRO
        </div>
        {/* Analytics Card */}
        <div className="absolute right-[26%] top-[34%] -rotate-6 opacity-[0.35] hover:opacity-[0.8] hover:scale-105 transition-all duration-300 pointer-events-auto cursor-default bg-card/40 backdrop-blur-xs border border-border/50 px-4 py-2.5 rounded-xl shadow-xs text-xs font-semibold tracking-wider text-primary uppercase select-none animate-float-slow-reverse">
          Analytics
        </div>
        {/* Copywriting Card */}
        <div className="absolute left-[32%] bottom-[8%] rotate-6 opacity-[0.35] hover:opacity-[0.8] hover:scale-105 transition-all duration-300 pointer-events-auto cursor-default bg-card/40 backdrop-blur-xs border border-border/50 px-4 py-2.5 rounded-xl shadow-xs text-xs font-semibold tracking-wider text-primary uppercase select-none animate-float-slow">
          Copywriting
        </div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="max-w-4xl mx-auto text-center">

          {/* Headline */}
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-semibold text-foreground leading-[1.1] tracking-tight text-balance mb-8 animate-fade-in-up">
            We help brands{" "}
            <span className="bg-gradient-to-r from-[#A37930] via-[#D8B478] to-[#A37930] bg-clip-text text-transparent font-bold">scale</span> through{" "}
            <span className="bg-gradient-to-r from-[#A37930] via-[#D8B478] to-[#A37930] bg-clip-text text-transparent font-bold">data-driven</span> marketing
          </h1>

          {/* Subheadline */}
          <p className="text-lg lg:text-xl text-foreground-muted max-w-2xl mx-auto leading-relaxed mb-10 animate-fade-in-up animation-delay-100">
            <span className="font-semibold text-primary">Republic</span><span className="font-semibold text-foreground-muted">Ads</span> is a premium performance marketing agency specializing in
            measurable growth strategies that deliver real results for ambitious brands.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up animation-delay-200">
            <Link href="#audit-form">
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-xl px-8 py-6 text-base hover-arrow-translate cursor-pointer"
              >
                Book a Free Audit
                <ArrowRight className="w-4 h-4 ml-2 arrow-icon" />
              </Button>
            </Link>
            <Link href="#services">
              <Button
                variant="outline"
                size="lg"
                className="border-border text-foreground hover:bg-secondary hover:text-secondary-foreground rounded-xl px-8 py-6 text-base transition-colors duration-200 hover-lift cursor-pointer"
              >
                View Our Work
              </Button>
            </Link>
          </div>

        </div>
      </div>
    </section>
  )
}
