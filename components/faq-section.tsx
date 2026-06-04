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
      "Paid media campaigns typically show initial results within 2–4 weeks. SEO is a longer-term strategy, usually showing significant growth in 3–6 months.",
  },
  {
    question: "What makes you different?",
    answer:
      "We focus entirely on revenue impact instead of vanity metrics, maintain complete transparency, and provide dedicated attention to every account.",
  },
  {
    question: "What is your pricing structure?",
    answer:
      "We offer flexible pricing options tailored to your specific budget, goals, and scope of work.",
  },
  {
    question: "Do you require long-term contracts?",
    answer:
      "We start with a 3-month optimization period, then transition to a flexible month-to-month commitment.",
  },
  {
    question: "Can you work with our existing team?",
    answer:
      "Yes. We can manage specific channels, provide strategic oversight, or operate as an extension of your in-house team.",
  },
  {
    question: "What industries do you specialize in?",
    answer:
      "We work across e-commerce, SaaS, healthcare, finance, retail, and professional services. Our data-driven framework adapts to any industry.",
  },
]

export function FaqSection() {
  return (
    <section id="faq" className="py-12 lg:py-20 px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12 lg:mb-16">
          <p className="text-sm uppercase tracking-widest text-primary mb-4">
            FAQ
          </p>
          <h2 className="font-serif text-3xl lg:text-4xl xl:text-5xl font-semibold text-foreground leading-tight">
            Frequently Asked <em className="text-primary not-italic">Questions</em>
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
