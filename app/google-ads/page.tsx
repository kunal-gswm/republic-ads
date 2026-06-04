import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { CtaSection } from "@/components/cta-section"
import { InlineCta } from "@/components/inline-cta"
import { MousePointerClick } from "lucide-react"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: 'Google Ads Management | RepublicAds',
  description: 'Stop wasting ad spend. We build and manage high-intent Google Ads campaigns that generate qualified leads for your Delhi NCR business.',
}

export default function GoogleAdsPage() {
  return (
    <main className="relative min-h-screen bg-background overflow-hidden pt-24">
      <div className="absolute inset-0 z-0 pointer-events-none premium-dotted-grid text-foreground/[0.07]" />
      
      <div className="relative z-10">
        <Navigation />
        
        <div className="max-w-4xl mx-auto px-6 lg:px-8 py-16 text-center">
          <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-8">
            <MousePointerClick className="w-8 h-8 text-primary" />
          </div>
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-semibold text-foreground leading-tight mb-6">
            Google Ads Management
          </h1>
          <p className="text-lg text-foreground-muted leading-relaxed mb-12">
            Capture high-intent searches the exact moment someone in your area is looking for your services. We focus on maximizing your Return on Ad Spend (ROAS).
          </p>
        </div>
        
        <InlineCta 
          headline="Are your current campaigns profitable?"
          subheadline="Let us audit your Google Ads account to find wasted spend and new opportunities."
        />
        
        <CtaSection />
        <Footer />
      </div>
    </main>
  )
}
