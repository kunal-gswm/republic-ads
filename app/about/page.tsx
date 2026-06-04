import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { CtaSection } from "@/components/cta-section"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: 'About Us | RepublicAds',
  description: 'Learn about RepublicAds, the performance marketing agency dedicated to helping local businesses and startups scale.',
}

export default function AboutPage() {
  return (
    <main className="relative min-h-screen bg-background overflow-hidden pt-24">
      <div className="absolute inset-0 z-0 pointer-events-none premium-dotted-grid text-foreground/[0.07]" />
      
      <div className="relative z-10">
        <Navigation />
        
        <div className="max-w-4xl mx-auto px-6 lg:px-8 py-16 text-center">
          <p className="text-sm uppercase tracking-widest text-primary mb-4">
            Our Story
          </p>
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-semibold text-foreground leading-tight mb-6">
            We are <em className="text-primary not-italic">growth partners</em> for local business
          </h1>
          <p className="text-lg text-foreground-muted leading-relaxed mb-12 max-w-2xl mx-auto">
            RepublicAds was founded with a single mission: to provide enterprise-level marketing strategies to local businesses and startups that need them the most.
          </p>
        </div>
        
        {/* Placeholder Team Section */}
        <section className="py-12">
          <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
            <h2 className="font-serif text-3xl font-semibold text-foreground mb-12">The Team</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[1, 2, 3].map((i) => (
                <div key={i} className="bg-card border border-border/50 rounded-xl p-6 hover-lift">
                  <div className="w-24 h-24 bg-secondary rounded-full mx-auto mb-4" />
                  <h3 className="font-semibold text-foreground">Team Member {i}</h3>
                  <p className="text-sm text-foreground-muted">Position</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        <CtaSection />
        <Footer />
      </div>
    </main>
  )
}
