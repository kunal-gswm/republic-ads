"use client"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const faqs = [
  {
    question: "How long until we see results?",
    answer:
      "It depends on the channel. Paid media campaigns typically show initial results within 2-4 weeks, with optimization continuing over 2-3 months. SEO is a longer-term play, usually showing significant movement in 3-6 months. We set realistic expectations upfront and provide regular progress updates.",
  },
  {
    question: "What makes you different from other agencies?",
    answer:
      "Three things: transparency, focus, and accountability. We don't hide behind vanity metrics or complicated reports. We measure success by revenue impact, and we're small enough to give your account the senior-level attention it deserves—no junior staff running your campaigns.",
  },
  {
    question: "What's your pricing structure?",
    answer:
      "We offer flexible pricing based on scope and complexity. Most clients start with a retainer model that includes strategy, execution, and reporting. We're happy to discuss your specific needs on a discovery call and provide a custom proposal.",
  },
  {
    question: "Do you require long-term contracts?",
    answer:
      "We typically start with a 3-month commitment to give campaigns enough time to optimize and prove results. After that, we move to month-to-month. We believe in earning your business every month, not locking you into lengthy agreements.",
  },
  {
    question: "Can you work with our existing team?",
    answer:
      "Absolutely. We often work alongside in-house marketers, complementing their efforts rather than replacing them. We can handle specific channels, provide strategic oversight, or serve as an extension of your team—whatever makes the most sense for your organization.",
  },
  {
    question: "What industries do you specialize in?",
    answer:
      "We've worked across e-commerce, SaaS, healthcare, finance, and professional services. While we have deep experience in these verticals, our data-driven approach translates well across industries. The fundamentals of performance marketing remain consistent.",
  },
]

export function FaqSection() {
  return (
    <section id="faq" className="py-12 lg:py-20 px-6 lg:px-8 bg-background-secondary">
      <div className="max-w-3xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12 lg:mb-16">
          <p className="text-sm uppercase tracking-widest text-primary mb-4">
            FAQ
          </p>
          <h2 className="font-serif text-3xl lg:text-4xl xl:text-5xl font-semibold text-foreground leading-tight">
            Common <em className="text-primary not-italic">questions</em>
          </h2>
        </div>

        {/* FAQ Accordion */}
        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="bg-card border border-border rounded-xl px-6 data-[state=open]:border-primary/30"
            >
              <AccordionTrigger className="text-left font-serif text-lg font-medium text-foreground hover:no-underline py-6">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-foreground-muted leading-relaxed pb-6">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}
