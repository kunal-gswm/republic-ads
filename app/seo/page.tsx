import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { CtaSection } from "@/components/cta-section"
import { InlineCta } from "@/components/inline-cta"
import { Search } from "lucide-react"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: 'Local SEO Services | RepublicAds',
  description: 'Boost your local search rankings with our expert SEO services. We help local businesses dominate search results and drive organic traffic.',
}

export default function SeoPage() {
  return (
    <main className="relative min-h-screen bg-background overflow-hidden pt-24">
      {/* Background elements */}
      <div className="absolute inset-0 z-0 pointer-events-none premium-dotted-grid text-foreground/[0.07]" />
      
      <div className="relative z-10">
        <Navigation />
        
        <div className="max-w-4xl mx-auto px-6 lg:px-8 py-16 text-center">
          <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-8">
            <Search className="w-8 h-8 text-primary" />
          </div>
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-semibold text-foreground leading-tight mb-6">
            Search Engine Optimization for Local Businesses
          </h1>
          <p className="text-lg text-foreground-muted leading-relaxed mb-12">
            Turn your website into a lead generation machine. Our SEO strategies are designed specifically to help local businesses rank higher for high-intent searches in their area.
          </p>
        </div>
        
        <InlineCta 
          headline="Want to see where you currently rank?"
          subheadline="Get a free technical SEO audit and keyword gap analysis for your website."
        />
        
        <CtaSection />
        <Footer />
      </div>
    </main>
  )
}
