const industries = [
  "E-Commerce",
  "SaaS",
  "Healthcare",
  "Finance",
  "Real Estate",
  "Education",
  "Travel & Hospitality",
  "Consumer Goods",
  "Technology",
  "Professional Services",
  "Non-Profit",
  "Retail",
]

export function IndustriesSection() {
  return (
    <section id="industries" className="py-12 lg:py-20 px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 lg:mb-16">
          <p className="text-sm uppercase tracking-widest text-primary mb-4">
            Industries We Serve
          </p>
          <h2 className="font-serif text-3xl lg:text-4xl xl:text-5xl font-semibold text-foreground leading-tight mb-6">
            Experience across <em className="text-primary not-italic">verticals</em>
          </h2>
          <p className="text-lg text-foreground-muted leading-relaxed">
            Custom growth strategies across multiple verticals:
          </p>
        </div>

        {/* Industry Pills */}
        <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
          {industries.map((industry) => (
            <span
              key={industry}
              className="px-5 py-2.5 rounded-full border border-border bg-card text-sm text-foreground hover:border-primary/50 hover:text-primary transition-all duration-200 cursor-default"
            >
              {industry}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
