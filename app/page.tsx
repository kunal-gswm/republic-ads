import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/hero-section"
import { ServicesSection } from "@/components/services-section"
import { HowWeWorkSection } from "@/components/how-we-work-section"
import { ResultsSection } from "@/components/results-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { IndustriesSection } from "@/components/industries-section"
import { CtaSection } from "@/components/cta-section"
import { FaqSection } from "@/components/faq-section"
import { Footer } from "@/components/footer"
import { InlineCta } from "@/components/inline-cta"
import { WhatsAppWidget } from "@/components/whatsapp-widget"
import { StickyMobileCta } from "@/components/sticky-mobile-cta"

export default function HomePage() {
  return (
    <main className="relative min-h-screen bg-background overflow-hidden">
      {/* Sleek Vertical Editorial Grid Lines */}
      <div className="absolute inset-y-0 left-0 right-0 z-0 pointer-events-none flex justify-between max-w-7xl mx-auto px-6 lg:px-8">
        <div className="w-px h-full bg-foreground/[0.03]" />
        <div className="hidden md:block w-px h-full bg-foreground/[0.03]" />
        <div className="hidden lg:block w-px h-full bg-foreground/[0.03]" />
        <div className="w-px h-full bg-foreground/[0.03]" />
      </div>

      {/* Premium Dotted Grid Overlay */}
      <div className="absolute inset-0 z-0 pointer-events-none premium-dotted-grid text-foreground/[0.07]" />

      {/* Elegant Floating Warm Radial Backlight Glow Spots */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        {/* Floating Orb 1 */}
        <div className="absolute top-[5%] left-[10%] w-[600px] h-[600px] bg-primary/[0.18] rounded-full blur-[100px] animate-float-slow" />
        {/* Floating Orb 2 */}
        <div className="absolute top-[35%] right-[2%] w-[550px] h-[550px] bg-amber-500/[0.12] rounded-full blur-[90px] animate-float-slow-reverse" />
        {/* Floating Orb 3 */}
        <div className="absolute top-[65%] left-[-8%] w-[600px] h-[600px] bg-yellow-600/[0.10] rounded-full blur-[110px] animate-float-slow" />
        {/* Floating Orb 4 */}
        <div className="absolute bottom-[-10%] right-[10%] w-[550px] h-[550px] bg-primary/[0.16] rounded-full blur-[100px] animate-float-slow-reverse" />
      </div>

      {/* Main Page Content (floating on top of background visual system) */}
      <div className="relative z-10">
        <Navigation />
        <HeroSection />
        
        <ServicesSection />
        
        <InlineCta 
          headline="Ready to grow your local presence?"
          subheadline="Let our experts analyze your digital footprint and find the hidden conversion leaks."
        />
        
        <ResultsSection />
        <TestimonialsSection />
        <HowWeWorkSection />
        
        <InlineCta 
          headline="Want similar results for your business?"
          subheadline="Get a custom 90-day growth roadmap tailored for your market and industry."
        />
        
        <IndustriesSection />
        <CtaSection />
        <FaqSection />
        <Footer />
        
        <WhatsAppWidget />
        <StickyMobileCta />
      </div>
    </main>
  )
}
