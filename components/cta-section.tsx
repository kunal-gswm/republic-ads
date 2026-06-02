"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight, ArrowLeft, Check, Sparkles, Calendar, DollarSign, Globe, Target, ShieldCheck } from "lucide-react"

export function CtaSection() {
  const [step, setStep] = useState<1 | 2 | 3 | "success">(1)
  const [website, setWebsite] = useState<string>("")
  const [selectedChannels, setSelectedChannels] = useState<string[]>([])
  const [challenge, setChallenge] = useState<string>("")
  const [name, setName] = useState<string>("")
  const [email, setEmail] = useState<string>("")
  const [selectedDate, setSelectedDate] = useState<string>("")

  // Available Channels
  const channels = ["SEO", "Google Ads", "Meta Ads", "Email Marketing"]

  const handleChannelToggle = (channel: string) => {
    if (selectedChannels.includes(channel)) {
      setSelectedChannels(selectedChannels.filter((c) => c !== channel))
    } else {
      setSelectedChannels([...selectedChannels, channel])
    }
  }

  const getNextDays = () => {
    const list = []
    const temp = new Date()
    while (list.length < 5) {
      temp.setDate(temp.getDate() + 1)
      // 0 = Sunday, 6 = Saturday
      if (temp.getDay() !== 0 && temp.getDay() !== 6) {
        list.push(
          temp.toLocaleDateString("en-US", {
            weekday: "short",
            month: "short",
            day: "numeric",
          })
        )
      }
    }
    return list
  }

  const handleNext = () => {
    if (step === 1 && !website) {
      alert("Please enter your website URL to proceed.")
      return
    }
    if (step === 2 && selectedChannels.length === 0) {
      alert("Please select at least one channel to analyze.")
      return
    }
    if (step !== "success" && step < 3) setStep((step + 1) as any)
  }

  const handlePrev = () => {
    if (step !== "success" && step > 1) setStep((step - 1) as any)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!name || !email) {
      alert("Please fill in your contact details.")
      return
    }
    if (!selectedDate) {
      alert("Please select a convenient day for your call.")
      return
    }
    setStep("success")
  }

  const resetForm = () => {
    setStep(1)
    setWebsite("")
    setSelectedChannels([])
    setChallenge("")
    setName("")
    setEmail("")
    setSelectedDate("")
  }

  return (
    <section id="audit-form" className="py-12 lg:py-20 px-6 lg:px-8 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column - Copywriting details */}
          <div className="lg:col-span-5 text-left animate-fade-in-up">

            <h2 className="font-serif text-3xl lg:text-4xl xl:text-5xl font-semibold text-foreground leading-tight mb-6">
              Ready to <em className="text-primary not-italic font-bold">scale</em> your performance?
            </h2>
            <p className="text-lg text-foreground-muted leading-relaxed mb-8">
              Book your free 30-minute bespoke growth audit. Our team of senior strategists will custom-analyze your marketing and pre-locate leaks in your funnel.
            </p>

            <ul className="space-y-4 mb-8">
              <li className="flex items-start gap-3 text-sm text-foreground-muted">
                <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Check className="w-3 h-3 text-primary" />
                </div>
                <span><strong>Funnel & Leak Analysis:</strong> Discover exactly where you are losing high-intent ad traffic.</span>
              </li>
              <li className="flex items-start gap-3 text-sm text-foreground-muted">
                <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Check className="w-3 h-3 text-primary" />
                </div>
                <span><strong>Competitor Benchmarking:</strong> See what keywords and search queries your rivals are targeting.</span>
              </li>
              <li className="flex items-start gap-3 text-sm text-foreground-muted">
                <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Check className="w-3 h-3 text-primary" />
                </div>
                <span><strong>A Bespoke 90-Day Roadmap:</strong> Take home a structured scaling execution plan, completely free.</span>
              </li>
            </ul>


          </div>

          {/* Right Column - Premium Wizard Form */}
          <div className="lg:col-span-7 w-full">
            <div className="bg-card/45 backdrop-blur-md border border-border/50 rounded-2xl p-8 shadow-[0_8px_30px_rgba(0,0,0,0.015)] relative hover-lift transition-all duration-300">
              
              {/* Radial gradient backing the wizard */}
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary/5 via-transparent to-transparent pointer-events-none rounded-2xl" />

              {step !== "success" && (
                <div className="relative z-10 flex justify-between items-center mb-8 border-b border-border/40 pb-4">
                  <span className="text-xs font-semibold tracking-wider text-primary uppercase">
                    Step {step} of 3
                  </span>
                  <div className="flex gap-1.5">
                    <div className={`h-1.5 w-8 rounded-full transition-all ${step >= 1 ? "bg-primary" : "bg-border/30"}`} />
                    <div className={`h-1.5 w-8 rounded-full transition-all ${step >= 2 ? "bg-primary" : "bg-border/30"}`} />
                    <div className={`h-1.5 w-8 rounded-full transition-all ${step >= 3 ? "bg-primary" : "bg-border/30"}`} />
                  </div>
                </div>
              )}

              <div className="relative z-10">
                {step === 1 && (
                  <div className="animate-fade-in-up">
                    <h3 className="font-serif text-xl font-semibold text-foreground mb-2 text-left">
                      Tell us about your brand
                    </h3>
                    <p className="text-xs text-foreground-muted mb-8 text-left">
                      Let&apos;s customize your pre-audit parameters.
                    </p>

                    {/* Website Input */}
                    <div className="text-left mb-8">
                      <label className="text-sm font-medium text-foreground block mb-3">
                        Website URL
                      </label>
                      <div className="relative">
                        <Globe className="absolute left-4 top-1/2 -translate-y-1/2 w-4.5 h-4.5 text-foreground-muted" />
                        <input
                          type="url"
                          required
                          placeholder="e.g. www.yourbrand.com"
                          value={website}
                          onChange={(e) => setWebsite(e.target.value)}
                          className="w-full pl-11 pr-4 py-4 rounded-xl border border-border/50 bg-background/40 text-foreground placeholder:text-foreground-muted/40 focus:outline-none focus:ring-2 focus:ring-primary/45 focus:border-primary transition-all text-sm"
                        />
                      </div>
                    </div>

                    <Button
                      onClick={handleNext}
                      className="w-full bg-primary hover:bg-primary/90 text-primary-foreground rounded-xl py-6 text-sm font-semibold hover-arrow-translate shadow-sm mt-2"
                    >
                      Continue
                      <ArrowRight className="w-4 h-4 ml-2 arrow-icon" />
                    </Button>
                  </div>
                )}

                {step === 2 && (
                  <div className="animate-fade-in-up">
                    <h3 className="font-serif text-xl font-semibold text-foreground mb-2 text-left">
                      What are you optimizing?
                    </h3>
                    <p className="text-xs text-foreground-muted mb-8 text-left">
                      Select primary channels and specify scaling obstacles.
                    </p>

                    {/* Channels Selection */}
                    <div className="text-left mb-6">
                      <label className="text-sm font-medium text-foreground block mb-3">
                        Select Channels to Analyze (Multi-select)
                      </label>
                      <div className="grid grid-cols-2 gap-3">
                        {channels.map((ch) => {
                          const isSelected = selectedChannels.includes(ch)
                          return (
                            <button
                              key={ch}
                              type="button"
                              onClick={() => handleChannelToggle(ch)}
                              className={`p-4 rounded-xl border text-xs font-semibold tracking-wide transition-all duration-200 ${
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
                    <div className="text-left mb-8">
                      <label className="text-sm font-medium text-foreground block mb-3">
                        Primary Scaling Challenge
                      </label>
                      <textarea
                        placeholder="e.g. High CPC, stagnant organic keyword acquisition, tracking leaks..."
                        value={challenge}
                        onChange={(e) => setChallenge(e.target.value)}
                        rows={3}
                        className="w-full px-4 py-3.5 rounded-xl border border-border/50 bg-background/40 text-foreground placeholder:text-foreground-muted/40 focus:outline-none focus:ring-2 focus:ring-primary/45 focus:border-primary transition-all text-sm leading-relaxed"
                      />
                    </div>

                    <div className="flex gap-4">
                      <Button
                        onClick={handlePrev}
                        variant="outline"
                        className="border-border text-foreground hover:bg-secondary rounded-xl py-6 px-6 text-sm"
                      >
                        <ArrowLeft className="w-4 h-4" />
                      </Button>
                      <Button
                        onClick={handleNext}
                        className="flex-1 bg-primary hover:bg-primary/90 text-primary-foreground rounded-xl py-6 text-sm font-semibold hover-arrow-translate shadow-sm"
                      >
                        Continue
                        <ArrowRight className="w-4 h-4 ml-2 arrow-icon" />
                      </Button>
                    </div>
                  </div>
                )}

                {step === 3 && (
                  <form onSubmit={handleSubmit} className="animate-fade-in-up">
                    <h3 className="font-serif text-xl font-semibold text-foreground mb-2 text-left">
                      Schedule your session
                    </h3>
                    <p className="text-xs text-foreground-muted mb-8 text-left">
                      Enter details and lock in a pre-audit presentation call.
                    </p>

                    {/* Personal details */}
                    <div className="space-y-4 mb-6 text-left">
                      <div>
                        <input
                          type="text"
                          required
                          placeholder="Your Name"
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          className="w-full px-4 py-4 rounded-xl border border-border/50 bg-background/40 text-foreground placeholder:text-foreground-muted/40 focus:outline-none focus:ring-2 focus:ring-primary/45 focus:border-primary transition-all text-sm"
                        />
                      </div>
                      <div>
                        <input
                          type="email"
                          required
                          placeholder="Your Work Email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          className="w-full px-4 py-4 rounded-xl border border-border/50 bg-background/40 text-foreground placeholder:text-foreground-muted/40 focus:outline-none focus:ring-2 focus:ring-primary/45 focus:border-primary transition-all text-sm"
                        />
                      </div>
                    </div>

                    {/* Booking Calendar Pills */}
                    <div className="text-left mb-8">
                      <div className="flex items-center gap-2 mb-3">
                        <Calendar className="w-4 h-4 text-primary" />
                        <label className="text-sm font-medium text-foreground">
                          Select a Preferred Consult Day
                        </label>
                      </div>
                      <div className="flex flex-wrap gap-2.5">
                        {getNextDays().map((d) => {
                          const isSelected = selectedDate === d
                          return (
                            <button
                              key={d}
                              type="button"
                              onClick={() => setSelectedDate(d)}
                              className={`px-4 py-2.5 rounded-full border text-[10px] lg:text-xs font-bold tracking-wider transition-all duration-200 ${
                                isSelected
                                  ? "bg-primary border-primary text-white shadow-md shadow-primary/20 scale-105"
                                  : "bg-background/40 border-border/40 text-foreground-muted hover:border-primary/30 hover:text-foreground"
                              }`}
                            >
                              {d}
                            </button>
                          )
                        })}
                      </div>
                    </div>

                    <div className="flex gap-4">
                      <Button
                        type="button"
                        onClick={handlePrev}
                        variant="outline"
                        className="border-border text-foreground hover:bg-secondary rounded-xl py-6 px-6 text-sm"
                      >
                        <ArrowLeft className="w-4 h-4" />
                      </Button>
                      <Button
                        type="submit"
                        className="flex-1 bg-primary hover:bg-primary/90 text-primary-foreground rounded-xl py-6 text-sm font-semibold hover-arrow-translate shadow-sm"
                      >
                        Lock in My Pre-Audit
                        <Check className="w-4 h-4 ml-2" />
                      </Button>
                    </div>
                  </form>
                )}

                {step === "success" && (
                  <div className="py-6 text-center animate-fade-in-up">
                    <div className="w-16 h-16 rounded-full bg-primary/10 border-2 border-primary flex items-center justify-center mb-6 mx-auto animate-pulse-slow select-none">
                      <Check className="w-7 h-7 text-primary animate-bounce" />
                    </div>
                    
                    <h3 className="font-serif text-2xl lg:text-3xl font-semibold text-foreground mb-4">
                      Audit Request Locked!
                    </h3>
                    <p className="text-foreground-muted text-sm max-w-sm mx-auto leading-relaxed mb-8">
                      Thank you, <strong className="text-foreground">{name}</strong>! We have registered your growth pre-audit and tentatively booked your presentation call for <strong className="text-primary font-bold">{selectedDate}</strong>.
                    </p>

                    <div className="bg-background-secondary border border-border/50 rounded-xl p-5 text-left max-w-sm mx-auto text-xs text-foreground-muted leading-relaxed mb-8">
                      <strong className="text-foreground block mb-1">What happens next?</strong>
                      Our analytics squad will inspect your website (<strong className="text-foreground text-xs">{website}</strong>) to identify traffic leaks and efficiency gains for <strong className="text-foreground">{selectedChannels.join(", ")}</strong>. We will email your calendar invite shortly!
                    </div>

                    <Button
                      onClick={resetForm}
                      variant="outline"
                      className="border-primary text-primary hover:bg-primary hover:text-primary-foreground rounded-xl px-8 py-5 text-xs font-semibold"
                    >
                      Request Another Audit
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
