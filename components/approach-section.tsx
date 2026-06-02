const approaches = [
  {
    numeral: "i",
    title: "Data First, Always",
    description:
      "Every decision we make is rooted in data. We use advanced analytics and attribution modeling to understand what truly moves the needle for your business, eliminating guesswork from your marketing strategy.",
  },
  {
    numeral: "ii",
    title: "Quality Over Quantity",
    description:
      "We believe in fewer, higher-quality leads rather than vanity metrics. Our campaigns are optimized for revenue impact, not just clicks or impressions that look good on a dashboard.",
  },
  {
    numeral: "iii",
    title: "Transparent Partnership",
    description:
      "No black boxes or hidden strategies. You get full visibility into our process, access to all data, and regular strategic sessions where we align on priorities and performance.",
  },
  {
    numeral: "iv",
    title: "Continuous Optimization",
    description:
      "Marketing is never set and forget. We run continuous testing cycles, analyze results weekly, and iterate rapidly to ensure your campaigns improve month over month.",
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
              We built <span className="font-semibold text-primary">Republic</span><span className="font-semibold text-foreground-muted">Ads</span> to be the agency we wished existed when we were on
              the brand side. No fluff, no BS—just results-driven marketing with
              complete transparency.
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
