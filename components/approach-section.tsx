const approaches = [
  {
    numeral: "i",
    title: "We Know Local Business",
    description:
      "We don't use cookie-cutter corporate strategies. We understand how local customers think and exactly what it takes to get them through your doors.",
  },
  {
    numeral: "ii",
    title: "Clear Results, No Confusion",
    description:
      "Forget complicated charts and marketing speak. We give you simple, easy-to-read reports that show exactly how many calls and leads you got this month.",
  },
  {
    numeral: "iii",
    title: "Focused on Real Growth",
    description:
      "We don't care about \"vanity metrics\" like likes or impressions. We only care about what matters to your bottom line: real customers paying for your services.",
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
              Why Choose Us
            </p>
            <h2 className="font-serif text-3xl lg:text-4xl xl:text-5xl font-semibold text-foreground leading-tight mb-6">
              Your Local <em className="text-primary not-italic">Growth</em> Partner
            </h2>
            <p className="text-lg text-foreground-muted leading-relaxed">
              We focus entirely on real-world results that matter to local business owners.
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
