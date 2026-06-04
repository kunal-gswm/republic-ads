import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { CtaSection } from "@/components/cta-section"
import { InlineCta } from "@/components/inline-cta"
import { MapPin } from "lucide-react"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: 'Google My Business Optimization | RepublicAds',
  description: 'Dominate the Google Map Pack. We optimize your GMB profile to drive foot traffic and phone calls to your local business.',
}

export default function GmbPage() {
  return (
    <main className="relative min-h-screen bg-background overflow-hidden pt-24">
      <div className="absolute inset-0 z-0 pointer-events-none premium-dotted-grid text-foreground/[0.07]" />
      
      <div className="relative z-10">
        <Navigation />
        
        <div className="max-w-4xl mx-auto px-6 lg:px-8 py-16 text-center">
          <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-8">
            <MapPin className="w-8 h-8 text-primary" />
          </div>
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-semibold text-foreground leading-tight mb-6">
            Google My Business Optimization
          </h1>
          <p className="text-lg text-foreground-muted leading-relaxed mb-12">
            If you aren't in the top 3 of the Google Map Pack, you're losing customers to your competitors. We optimize your profile to ensure you capture local search intent.
          </p>
        </div>
        
        <InlineCta 
          headline="Is your profile optimized to convert?"
          subheadline="Let us analyze your GMB listing and show you exactly how to rank higher in your local area."
        />
        
        <CtaSection />
        <Footer />
      </div>
    </main>
  )
}
