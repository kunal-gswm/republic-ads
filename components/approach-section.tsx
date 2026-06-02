const approaches = [
  {
    numeral: "i",
    title: "Data First",
    description:
      "Every decision is rooted in advanced analytics and attribution modeling.",
  },
  {
    numeral: "ii",
    title: "Revenue Focus",
    description:
      "We optimize for business growth and revenue impact, not vanity metrics.",
  },
  {
    numeral: "iii",
    title: "Full Transparency",
    description:
      "Clear reporting, open data access, and regular strategy alignment.",
  },
  {
    numeral: "iv",
    title: "Continuous Optimization",
    description:
      "Weekly analysis and rapid testing cycles to improve performance month over month.",
  },
]

export function ApproachSection() {
  return (
    <section id="approach" className="py-12 lg:py-20 px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Left Column - Header */}
          <div className="lg:sticky lg:top-32 lg:h-fit">
            <p className="text-sm uppercase tracking-widest text-primary mb-4">
              Our Philosophy
            </p>
            <h2 className="font-serif text-3xl lg:text-4xl xl:text-5xl font-semibold text-foreground leading-tight mb-6">
              A different kind of <em className="text-primary not-italic">agency</em>
            </h2>
            <p className="text-lg text-foreground-muted leading-relaxed">
              A straightforward, results-driven agency built on transparency.
            </p>
          </div>

          {/* Right Column - Numbered List */}
          <div className="space-y-12">
            {approaches.map((approach) => (
              <div key={approach.numeral} className="flex gap-6">
                <span className="font-serif text-2xl text-primary italic flex-shrink-0 w-8">
                  {approach.numeral}
                </span>
                <div>
                  <h3 className="font-serif text-xl font-semibold text-foreground mb-3">
                    {approach.title}
                  </h3>
                  <p className="text-foreground-muted leading-relaxed">
                    {approach.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
