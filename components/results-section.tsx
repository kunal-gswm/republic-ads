import { TrendingUp, MapPin, ShoppingCart } from "lucide-react"

const caseStudies = [
  {
    icon: MapPin,
    industry: "Healthcare",
    title: "Delhi NCR Dental Clinic",
    challenge: "Invisible on Google Maps, only 2 patient inquiries per week",
    result: "3x more inquiries",
    detail: "Top 3 Google Maps ranking within 60 days through GMB optimization and Delhi NCR SEO",
    metric: "2 → 18",
    metricLabel: "Weekly inquiries",
    timeframe: "60 days",
  },
  {
    icon: ShoppingCart,
    industry: "E-Commerce",
    challenge: "High ad spend with poor conversion rates on Google Ads",
    title: "D2C Fashion Startup",
    result: "4.1x ROAS",
    detail: "Restructured campaigns with high-intent keywords and optimized landing pages",
    metric: "1.2x → 4.1x",
    metricLabel: "Return on ad spend",
    timeframe: "90 days",
  },
  {
    icon: TrendingUp,
    industry: "Professional Services",
    title: "Accounting Firm",
    challenge: "Zero organic traffic, fully dependent on paid ads for leads",
    result: "340% organic growth",
    detail: "Technical SEO overhaul, content strategy, and Delhi NCR keyword targeting",
    metric: "120 → 530",
    metricLabel: "Monthly organic visits",
    timeframe: "5 months",
  },
]

export function ResultsSection() {
  return (
    <section id="results" className="py-12 lg:py-20 px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="max-w-2xl mb-16 lg:mb-20">
          <p className="text-xs uppercase tracking-widest text-primary mb-4 font-bold">
            Results
          </p>
          <h2 className="font-serif text-3xl lg:text-4xl xl:text-5xl font-semibold text-foreground leading-[1.1] sm:leading-tight mb-6">
            Real <em className="text-primary not-italic">outcomes</em> for real businesses
          </h2>
          <p className="text-lg text-foreground-muted leading-relaxed">
            Every engagement is measured by its impact on your bottom line, not vanity metrics.
          </p>
        </div>

        {/* Case Study Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {caseStudies.map((study) => (
            <div
              key={study.title}
              className="group bg-card/45 backdrop-blur-md border border-border/50 rounded-xl p-8 hover:bg-card/70 hover:border-primary/30 hover:shadow-[0_8px_30px_rgba(0,0,0,0.02)] transition-all duration-300 hover-lift flex flex-col"
            >
              {/* Industry Tag */}
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center group-hover:bg-primary/10 transition-colors duration-300">
                  <study.icon className="w-5 h-5 text-foreground group-hover:text-primary transition-colors duration-300" />
                </div>
                <span className="text-xs font-semibold uppercase tracking-wider text-foreground-muted">
                  {study.industry}
                </span>
              </div>

              {/* Title & Challenge */}
              <h3 className="font-serif text-xl font-semibold text-foreground mb-2">
                {study.title}
              </h3>
              <p className="text-sm text-foreground-muted leading-relaxed mb-6">
                {study.challenge}
              </p>

              {/* Result Metric */}
              <div className="mt-auto pt-6 border-t border-border/40">
                <div className="flex items-baseline justify-between mb-2">
                  <span className="font-sans text-2xl font-bold text-primary tracking-tight">
                    {study.result}
                  </span>
                  <span className="text-xs text-foreground-muted font-medium">
                    in {study.timeframe}
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-foreground-muted">
                    {study.metricLabel}
                  </span>
                  <span className="text-xs font-semibold text-foreground tracking-wide">
                    {study.metric}
                  </span>
                </div>
              </div>

              {/* Detail */}
              <p className="text-xs text-foreground-muted leading-relaxed mt-4">
                {study.detail}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
