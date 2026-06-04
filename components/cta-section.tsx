"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight, Check, Globe, Phone, MessageCircle } from "lucide-react"
import { toast } from "sonner"
import { submitAuditForm } from "@/app/actions/submit-audit"

export function CtaSection() {
  const [isSuccess, setIsSuccess] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  
  const [website, setWebsite] = useState("")
  const [selectedChannels, setSelectedChannels] = useState<string[]>([])
  const [challenge, setChallenge] = useState("")
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")

  // Available Channels
  const channels = ["SEO", "Google Ads", "Meta Ads", "Email Marketing"]

  const handleChannelToggle = (channel: string) => {
    if (selectedChannels.includes(channel)) {
      setSelectedChannels(selectedChannels.filter((c) => c !== channel))
    } else {
      setSelectedChannels([...selectedChannels, channel])
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!name || !email) {
      toast.error("Please provide your name and email.")
      return
    }
    
    if (selectedChannels.length === 0) {
      toast.error("Please select at least one channel to analyze.")
      return
    }

    setIsSubmitting(true)

    // Build FormData
    const formData = new FormData()
    formData.append("name", name)
    formData.append("email", email)
    formData.append("website", website)
    formData.append("challenge", challenge)
    formData.append("channels", selectedChannels.join(","))

    try {
      const result = await submitAuditForm(formData)
      if (result.success) {
        setIsSuccess(true)
        toast.success(result.message)
      } else {
        toast.error(result.error || "Failed to submit request.")
      }
    } catch (error) {
      toast.error("An unexpected error occurred.")
    } finally {
      setIsSubmitting(false)
    }
  }

  const resetForm = () => {
    setIsSuccess(false)
    setWebsite("")
    setSelectedChannels([])
    setChallenge("")
    setName("")
    setEmail("")
  }

  return (
    <section id="audit-form" className="py-12 lg:py-20 px-6 lg:px-8 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

          {/* Left Column - Copywriting details */}
          <div className="lg:col-span-5 text-left animate-fade-in-up">
            <h2 className="font-serif text-3xl lg:text-4xl xl:text-5xl font-semibold text-foreground leading-tight mb-6">
              Ready to <em className="text-primary not-italic font-bold">dominate</em> your market?
            </h2>
            <p className="text-lg text-foreground-muted leading-relaxed mb-8">
              Book a free 30-minute growth audit. Our strategists will analyze your marketing to locate conversion leaks and build a custom 90-day scaling roadmap.
            </p>

            <div className="space-y-4 mb-8">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Check className="w-5 h-5 text-primary" />
                </div>
                <p className="text-foreground-muted text-sm">Comprehensive account audit</p>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Check className="w-5 h-5 text-primary" />
                </div>
                <p className="text-foreground-muted text-sm">Competitor analysis</p>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Check className="w-5 h-5 text-primary" />
                </div>
                <p className="text-foreground-muted text-sm">Actionable 90-day growth roadmap</p>
              </div>
            </div>

            <div className="pt-8 border-t border-border/50">
              <p className="text-sm font-semibold text-foreground mb-4">Prefer to talk right away?</p>
              <div className="flex flex-wrap gap-4">
                <a href="tel:+919876543210" className="flex items-center gap-2 text-sm text-foreground-muted hover:text-primary transition-colors">
                  <Phone className="w-4 h-4" />
                  +91-98765-43210
                </a>
                <a href="https://wa.me/919876543210" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm text-foreground-muted hover:text-[#25D366] transition-colors">
                  <MessageCircle className="w-4 h-4" />
                  WhatsApp Us
                </a>
              </div>
            </div>
          </div>

          {/* Right Column - Premium Wizard Form */}
          <div className="lg:col-span-7 w-full">
            <div className="bg-card/45 backdrop-blur-md border border-border/50 rounded-2xl p-6 lg:p-8 shadow-[0_8px_30px_rgba(0,0,0,0.015)] relative">
              {/* Radial gradient backing the wizard */}
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary/5 via-transparent to-transparent pointer-events-none rounded-2xl" />

              <div className="relative z-10">
                {!isSuccess ? (
                  <form onSubmit={handleSubmit} className="animate-fade-in-up">
                    <h3 className="font-serif text-xl font-semibold text-foreground mb-2 text-left">
                      Request Your Free Audit
                    </h3>
                    <p className="text-xs text-foreground-muted mb-6 text-left">
                      Tell us a bit about your business to get started.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                      <div>
                        <label className="text-xs font-medium text-foreground block mb-1.5">Name *</label>
                        <input
                          type="text"
                          required
                          placeholder="Your Name"
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          className="w-full px-4 py-3 rounded-xl border border-border/50 bg-background/40 text-foreground placeholder:text-foreground-muted/40 focus:outline-none focus:ring-2 focus:ring-primary/45 focus:border-primary transition-all text-sm"
                        />
                      </div>
                      <div>
                        <label className="text-xs font-medium text-foreground block mb-1.5">Work Email *</label>
                        <input
                          type="email"
                          required
                          placeholder="you@company.com"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          className="w-full px-4 py-3 rounded-xl border border-border/50 bg-background/40 text-foreground placeholder:text-foreground-muted/40 focus:outline-none focus:ring-2 focus:ring-primary/45 focus:border-primary transition-all text-sm"
                        />
                      </div>
                    </div>

                    <div className="mb-6">
                      <label className="text-xs font-medium text-foreground block mb-1.5">Website URL</label>
                      <div className="relative">
                        <Globe className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-foreground-muted" />
                        <input
                          type="url"
                          placeholder="www.yourbrand.com"
                          value={website}
                          onChange={(e) => setWebsite(e.target.value)}
                          className="w-full pl-10 pr-4 py-3 rounded-xl border border-border/50 bg-background/40 text-foreground placeholder:text-foreground-muted/40 focus:outline-none focus:ring-2 focus:ring-primary/45 focus:border-primary transition-all text-sm"
                        />
                      </div>
                    </div>

                    {/* Channels Selection */}
                    <div className="mb-6">
                      <label className="text-xs font-medium text-foreground block mb-2">
                        Channels of Interest *
                      </label>
                      <div className="grid grid-cols-2 gap-2.5">
                        {channels.map((ch) => {
                          const isSelected = selectedChannels.includes(ch)
                          return (
                            <button
                              key={ch}
                              type="button"
                              onClick={() => handleChannelToggle(ch)}
                              className={`p-3 rounded-xl border text-xs font-semibold tracking-wide transition-all duration-200 ${
                                isSelected
                                  ? "bg-primary/10 border-primary text-primary shadow-[inset_0_0_10px_rgba(163,121,48,0.05)] scale-[1.01]"
                                  : "bg-background/40 border-border/40 text-foreground-muted hover:border-primary/20 hover:text-foreground"
                              }`}
                            >
                              {ch}
                            </button>
                          )
                        })}
                      </div>
                    </div>

                    {/* Challenge Input */}
                    <div className="mb-6">
                      <label className="text-xs font-medium text-foreground block mb-1.5">
                        Primary Scaling Challenge
                      </label>
                      <textarea
                        placeholder="e.g. High CPC, low quality leads..."
                        value={challenge}
                        onChange={(e) => setChallenge(e.target.value)}
                        rows={2}
                        className="w-full px-4 py-3 rounded-xl border border-border/50 bg-background/40 text-foreground placeholder:text-foreground-muted/40 focus:outline-none focus:ring-2 focus:ring-primary/45 focus:border-primary transition-all text-sm leading-relaxed resize-none"
                      />
                    </div>

                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-primary hover:bg-primary/90 text-primary-foreground rounded-xl py-6 text-sm font-semibold hover-arrow-translate shadow-sm disabled:opacity-70"
                    >
                      {isSubmitting ? "Submitting..." : "Get My Free Audit"}
                      {!isSubmitting && <ArrowRight className="w-4 h-4 ml-2 arrow-icon" />}
                    </Button>
                  </form>
                ) : (
                  <div className="py-8 text-center animate-fade-in-up">
                    <div className="w-16 h-16 rounded-full bg-primary/10 border-2 border-primary flex items-center justify-center mb-6 mx-auto animate-pulse-slow select-none">
                      <Check className="w-7 h-7 text-primary animate-bounce" />
                    </div>

                    <h3 className="font-serif text-2xl lg:text-3xl font-semibold text-foreground mb-4">
                      Audit Request Received!
                    </h3>
                    <p className="text-foreground-muted text-sm max-w-sm mx-auto leading-relaxed mb-8">
                      Thank you, <strong className="text-foreground">{name}</strong>! We have received your request.
                    </p>

                    <div className="bg-background-secondary border border-border/50 rounded-xl p-5 text-left max-w-sm mx-auto text-xs text-foreground-muted leading-relaxed mb-8">
                      <strong className="text-foreground block mb-1">What happens next?</strong>
                      Our team will review your details and send you an email shortly with a calendar link to book your 30-minute strategy session.
                    </div>

                    <Button
                      onClick={resetForm}
                      variant="outline"
                      className="border-border/60 text-foreground-muted hover:border-primary/40 hover:bg-primary/5 hover:text-primary rounded-xl px-8 py-5 text-xs font-semibold transition-all duration-200 cursor-pointer"
                    >
                      Submit Another Request
                    </Button>
                  </div>
                )}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
