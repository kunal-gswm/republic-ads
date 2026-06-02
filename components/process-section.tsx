import { Compass, Lightbulb, Rocket, BarChart } from "lucide-react"

const steps = [
  {
    icon: Compass,
    step: "01",
    title: "Discovery",
    description:
      "We dive deep into your business, competitors, and market to understand the full landscape and identify opportunities.",
  },
  {
    icon: Lightbulb,
    step: "02",
    title: "Strategy",
    description:
      "Based on our findings, we develop a custom performance marketing strategy aligned with your growth goals.",
  },
  {
    icon: Rocket,
    step: "03",
    title: "Launch",
    description:
      "We execute the strategy across channels with meticulous attention to targeting, creative, and tracking.",
  },
  {
    icon: BarChart,
    step: "04",
    title: "Report & Optimize",
    description:
      "Weekly reporting, monthly reviews, and continuous optimization to maximize your marketing ROI.",
  },
]

export function ProcessSection() {
  return (
    <section id="process" className="py-12 lg:py-20 px-6 lg:px-8 bg-background-secondary">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 lg:mb-20">
          <p className="text-sm uppercase tracking-widest text-primary mb-4">
            Our Process
          </p>
          <h2 className="font-serif text-3xl lg:text-4xl xl:text-5xl font-semibold text-foreground leading-tight mb-6">
            From <em className="text-primary not-italic">insight</em> to{" "}
            <em className="text-primary not-italic">impact</em>
          </h2>
          <p className="text-lg text-foreground-muted leading-relaxed">
            A proven methodology refined over hundreds of successful campaigns.
          </p>
        </div>

        {/* Process Steps */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((item, index) => (
            <div
              key={item.step}
              className="group bg-card/45 backdrop-blur-md border border-border/50 rounded-xl p-8 relative hover:bg-card/70 hover:border-primary/30 hover:shadow-[0_8px_30px_rgba(0,0,0,0.02)] transition-all duration-300 hover-lift"
            >
              {/* Connector Line (hidden on last item and mobile) */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-px bg-border" />
              )}

              <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center mb-6 group-hover:bg-primary/10 transition-colors duration-300">
                <item.icon className="w-6 h-6 text-foreground group-hover:text-primary transition-colors duration-300" />
              </div>

              <span className="text-xs font-medium text-primary mb-2 block">
                Step {item.step}
              </span>

              <h3 className="font-serif text-xl font-semibold text-foreground mb-3">
                {item.title}
              </h3>

              <p className="text-foreground-muted text-sm leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
