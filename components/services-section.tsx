import { Search, MousePointerClick, Target, BarChart3, Mail, Megaphone } from "lucide-react"

const services = [
  {
    icon: Search,
    title: "SEO",
    description:
      "Technical optimization, content strategy, and link building for organic search growth.",
  },
  {
    icon: MousePointerClick,
    title: "Google Ads",
    description:
      "High-intent search campaigns, shopping ads, and display retargeting.",
  },
  {
    icon: Target,
    title: "Meta Ads",
    description:
      "Precision targeting across Facebook and Instagram with converting creatives.",
  },
  {
    icon: BarChart3,
    title: "Analytics",
    description:
      "Custom dashboards, attribution modeling, and data-driven insights.",
  },
  {
    icon: Mail,
    title: "Email Marketing",
    description:
      "Automated flows, segmentation, and retention campaigns.",
  },
  {
    icon: Megaphone,
    title: "Content Strategy",
    description:
      "Editorial planning, copywriting, and multi-channel distribution.",
  },
]

export function ServicesSection() {
  return (
    <section id="services" className="py-12 lg:py-20 px-6 lg:px-8 bg-background-secondary">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="max-w-2xl mb-16 lg:mb-20">
          <p className="text-sm uppercase tracking-widest text-primary mb-4">
            Our Services
          </p>
          <h2 className="font-serif text-3xl lg:text-4xl xl:text-5xl font-semibold text-foreground leading-tight mb-6">
            Full-spectrum <em className="text-primary not-italic">performance</em> marketing
          </h2>
          <p className="text-lg text-foreground-muted leading-relaxed">
            Full-spectrum performance marketing to handle your growth from acquisition to retention.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
          {services.map((service) => (
            <div
              key={service.title}
              className="group bg-card/45 backdrop-blur-md border border-border/50 rounded-xl p-8 hover:bg-card/70 hover:border-primary/30 hover:shadow-[0_8px_30px_rgba(0,0,0,0.02)] transition-all duration-300 hover-lift"
            >
              <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center mb-6 group-hover:bg-primary/10 transition-colors duration-300">
                <service.icon className="w-6 h-6 text-foreground group-hover:text-primary transition-colors duration-300" />
              </div>
              <h3 className="font-serif text-xl font-semibold text-foreground mb-3">
                {service.title}
              </h3>
              <p className="text-foreground-muted leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
