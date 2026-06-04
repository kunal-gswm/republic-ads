import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

interface InlineCtaProps {
  headline: string
  subheadline: string
  buttonText?: string
  href?: string
}

export function InlineCta({ 
  headline, 
  subheadline, 
  buttonText = "Book a Free Strategy Call", 
  href = "#audit-form" 
}: InlineCtaProps) {
  return (
    <section className="py-12 px-6 lg:px-8">
      <div className="max-w-5xl mx-auto bg-card border border-border/50 rounded-2xl p-8 lg:p-12 relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left shadow-sm">
        {/* Subtle radial background */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/5 via-transparent to-transparent pointer-events-none" />
        
        <div className="relative z-10 flex-1">
          <h3 className="font-serif text-2xl lg:text-3xl font-semibold text-foreground mb-3">
            {headline}
          </h3>
          <p className="text-foreground-muted">
            {subheadline}
          </p>
        </div>
        
        <div className="relative z-10 w-full md:w-auto">
          <Link href={href} className="w-full">
            <Button
              size="lg"
              className="w-full md:w-auto bg-primary hover:bg-primary/90 text-primary-foreground rounded-xl px-8 py-6 text-sm font-semibold hover-arrow-translate shadow-md shadow-primary/10 transition-all duration-300 hover-lift cursor-pointer"
            >
              {buttonText}
              <ArrowRight className="w-4 h-4 ml-2 arrow-icon" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
