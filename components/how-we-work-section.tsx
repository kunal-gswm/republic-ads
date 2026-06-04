import { Compass, Lightbulb, Rocket, BarChart } from "lucide-react"

const philosophies = [
  {
    numeral: "i",
    title: "Numbers Over Guesswork",
    description: "We don't guess what might work. We use real numbers to make every decision.",
  },
  {
    numeral: "ii",
    title: "Focus on Real Sales",
    description: "We care about making you money, not just getting you 'likes' or clicks.",
  },
  {
    numeral: "iii",
    title: "100% Honest",
    description: "We show you exactly what we are doing and where your money is going.",
  },
  {
    numeral: "iv",
    title: "Long-Term Growth",
    description: "We build systems that continue to bring in steady customers for years to come.",
  },
]

const steps = [
  {
    icon: Compass,
    step: "01",
    title: "Learning About You",
    description: "We take the time to understand your business, your goals, and who your customers are.",
  },
  {
    icon: Lightbulb,
    step: "02",
    title: "Making a Plan",
    description: "We create a simple, clear plan on how to get you more customers within your budget.",
  },
  {
    icon: Rocket,
    step: "03",
    title: "Putting It Into Action",
    description: "We set up your ads, fix your website, and start bringing in new leads.",
  },
  {
    icon: BarChart,
    step: "04",
    title: "Checking and Improving",
    description: "We check the results every week and make changes to get you even better results.",
  },
]

export function HowWeWorkSection() {
  return (
    <section id="how-we-work" className="py-12 lg:py-20 px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 lg:mb-20">
          <p className="text-xs uppercase tracking-widest text-primary mb-4 font-bold">
            How We Work
          </p>
          <h2 className="font-serif text-3xl lg:text-4xl xl:text-5xl font-semibold text-foreground leading-[1.1] sm:leading-tight mb-6">
            A <em className="text-primary not-italic">methodology</em> refined over hundreds of campaigns
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Left Column - Philosophy */}
          <div className="flex flex-col h-full">
            <h3 className="font-serif text-2xl font-semibold text-foreground mb-8">
              Our Philosophy
            </h3>
            <div className="flex-1 flex flex-col justify-between pb-2 space-y-6 lg:space-y-0">
              {philosophies.map((item) => (
                <div key={item.numeral} className="flex gap-5">
                  <span className="font-serif text-xl text-primary italic flex-shrink-0 w-6">
                    {item.numeral}
                  </span>
                  <div>
                    <h4 className="font-serif text-lg font-semibold text-foreground mb-2">
                      {item.title}
                    </h4>
                    <p className="text-foreground-muted leading-relaxed text-sm">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Process Steps */}
          <div>
            <h3 className="font-serif text-2xl font-semibold text-foreground mb-8">
              The Process
            </h3>
            <div className="space-y-6">
              {steps.map((item, index) => (
                <div
                  key={item.step}
                  className="group bg-card/45 backdrop-blur-md border border-border/50 rounded-xl p-6 relative hover:bg-card/70 hover:border-primary/30 transition-all duration-300 hover-lift flex items-start gap-4"
                >
                  <div className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center flex-shrink-0 group-hover:bg-primary/10 transition-colors duration-300">
                    <item.icon className="w-5 h-5 text-foreground group-hover:text-primary transition-colors duration-300" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-[10px] font-bold text-primary uppercase tracking-wider">
                        Step {item.step}
                      </span>
                      <h4 className="font-serif text-lg font-semibold text-foreground">
                        {item.title}
                      </h4>
                    </div>
                    <p className="text-foreground-muted text-sm leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
