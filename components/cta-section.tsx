"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight, ArrowLeft, Check, Globe, Phone, MessageCircle, Calendar as CalendarIcon, Clock } from "lucide-react"
import { toast } from "sonner"
import { submitAuditForm } from "@/app/actions/submit-audit"
import { Calendar } from "@/components/ui/calendar"
import { addDays } from "date-fns"

export function CtaSection() {
  const [step, setStep] = useState(1)
  const [isSuccess, setIsSuccess] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  
  // Step 1
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [website, setWebsite] = useState("")
  
  // Step 2
  const [selectedChannels, setSelectedChannels] = useState<string[]>([])
  const [challenge, setChallenge] = useState("")
  
  // Step 3
  const [date, setDate] = useState<Date | undefined>(undefined)
  const [timeSlot, setTimeSlot] = useState<string>("") // morning, afternoon, all

  // Available Channels
  const channels = ["SEO", "Google Ads", "Meta Ads", "Email Marketing"]

  const handleChannelToggle = (channel: string) => {
    if (selectedChannels.includes(channel)) {
      setSelectedChannels(selectedChannels.filter((c) => c !== channel))
    } else {
      setSelectedChannels([...selectedChannels, channel])
    }
  }

  const nextStep = () => {
    if (step === 1) {
      if (!name || !email) {
        toast.error("Please provide your name and email.")
        return
      }
    }
    if (step === 2) {
      if (selectedChannels.length === 0) {
        toast.error("Please select at least one channel to analyze.")
        return
      }
    }
    setStep(step + 1)
  }

  const prevStep = () => {
    setStep(step - 1)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!date || !timeSlot) {
      toast.error("Please select a date and time slot.")
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
    formData.append("date", date.toISOString())
    formData.append("timeSlot", timeSlot)

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
    setStep(1)
    setWebsite("")
    setSelectedChannels([])
    setChallenge("")
    setName("")
    setEmail("")
    setDate(undefined)
    setTimeSlot("")
  }

  return (
    <section id="audit-form" className="py-12 lg:py-20 px-6 lg:px-8 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

          {/* Left Column - Copywriting details */}
          <div className="lg:col-span-5 text-left animate-fade-in-up">
            <h2 className="font-serif text-3xl lg:text-4xl xl:text-5xl font-semibold text-foreground leading-tight mb-6">
              Let's See How You Look to <em className="text-primary not-italic font-bold">Local Customers.</em>
            </h2>
            <p className="text-lg text-foreground-muted leading-relaxed mb-8">
              Find out where you stand against your competitors. Drop your details below for a quick, no-pressure look at your current online presence.
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
            <div className="bg-card/45 backdrop-blur-md border border-border/50 rounded-2xl p-6 lg:p-8 shadow-[0_8px_30px_rgba(0,0,0,0.015)] relative min-h-[450px] flex flex-col justify-center">
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary/5 via-transparent to-transparent pointer-events-none rounded-2xl" />

              <div className="relative z-10 w-full">
                {!isSuccess ? (
                  <form onSubmit={(e) => { e.preventDefault(); if (step === 3) handleSubmit(e); }} className="animate-fade-in-up w-full">
                    
                    {/* Progress Bar */}
                    <div className="mb-8 flex justify-between items-center relative">
                      <div className="absolute left-0 right-0 top-1/2 -translate-y-1/2 h-0.5 bg-border -z-10" />
                      {[1, 2, 3].map((num) => (
                        <div 
                          key={num} 
                          className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold transition-colors ${
                            step >= num ? "bg-primary text-primary-foreground" : "bg-card border border-border text-foreground-muted"
                          }`}
                        >
                          {step > num ? <Check className="w-4 h-4" /> : num}
                        </div>
                      ))}
                    </div>

                    <h3 className="font-serif text-xl font-semibold text-foreground mb-2 text-left">
                      {step === 1 && "Basic Information"}
                      {step === 2 && "Your Goals"}
                      {step === 3 && "Book Your Session"}
                    </h3>
                    <p className="text-xs text-foreground-muted mb-6 text-left">
                      {step === 1 && "Tell us a bit about your business to get started."}
                      {step === 2 && "What are you trying to achieve?"}
                      {step === 3 && "Select a time that works best for you."}
                    </p>

                    {/* Step 1: Basic Info */}
                    {step === 1 && (
                      <div className="space-y-4 animate-in fade-in slide-in-from-right-4 duration-300">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div>
                            <label className="text-xs font-medium text-foreground block mb-1.5">Business / Your Name *</label>
                            <input
                              type="text"
                              required
                              placeholder="Acme Corp / John Doe"
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

                        <div>
                          <label className="text-xs font-medium text-foreground block mb-1.5">Website URL (Optional)</label>
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
                      </div>
                    )}

                    {/* Step 2: Challenges */}
                    {step === 2 && (
                      <div className="space-y-6 animate-in fade-in slide-in-from-right-4 duration-300">
                        <div>
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

                        <div>
                          <label className="text-xs font-medium text-foreground block mb-1.5">
                            Primary Scaling Challenge (If any)
                          </label>
                          <textarea
                            placeholder="e.g. High CPC, low quality leads, low conversion rate..."
                            value={challenge}
                            onChange={(e) => setChallenge(e.target.value)}
                            rows={3}
                            className="w-full px-4 py-3 rounded-xl border border-border/50 bg-background/40 text-foreground placeholder:text-foreground-muted/40 focus:outline-none focus:ring-2 focus:ring-primary/45 focus:border-primary transition-all text-sm leading-relaxed resize-none"
                          />
                        </div>
                      </div>
                    )}

                    {/* Step 3: Booking */}
                    {step === 3 && (
                      <div className="space-y-6 animate-in fade-in slide-in-from-right-4 duration-300">
                        <div className="flex flex-col md:flex-row gap-6">
                          <div className="flex-1 flex justify-center bg-background/40 rounded-xl border border-border/50 p-2">
                            <Calendar
                              mode="single"
                              selected={date}
                              onSelect={setDate}
                              disabled={(day) => day <= new Date()}
                              className="rounded-md border-0 pointer-events-auto"
                            />
                          </div>
                          
                          <div className="flex-1 flex flex-col gap-3 justify-center">
                            <label className="text-xs font-medium text-foreground block mb-1 text-center md:text-left">
                              Select Preferred Time
                            </label>
                            {["Morning (9 AM - 12 PM)", "Afternoon (1 PM - 5 PM)", "Any Time"].map((slot, i) => {
                              const val = ["morning", "afternoon", "all"][i]
                              const isSelected = timeSlot === val
                              return (
                                <button
                                  key={val}
                                  type="button"
                                  onClick={() => setTimeSlot(val)}
                                  className={`flex items-center gap-3 p-3.5 rounded-xl border text-sm font-medium transition-all duration-200 ${
                                    isSelected
                                      ? "bg-primary/10 border-primary text-primary shadow-[inset_0_0_10px_rgba(163,121,48,0.05)] scale-[1.01]"
                                      : "bg-background/40 border-border/40 text-foreground-muted hover:border-primary/20 hover:text-foreground"
                                  }`}
                                >
                                  <Clock className="w-4 h-4" />
                                  {slot}
                                </button>
                              )
                            })}
                          </div>
                        </div>
                      </div>
                    )}

                    {/* Navigation Buttons */}
                    <div className="mt-8 flex gap-3">
                      {step > 1 && (
                        <Button
                          type="button"
                          variant="outline"
                          onClick={prevStep}
                          className="px-6 rounded-xl border-border/60 text-foreground-muted hover:border-primary/40"
                        >
                          <ArrowLeft className="w-4 h-4" />
                        </Button>
                      )}
                      
                      {step < 3 ? (
                        <Button
                          type="button"
                          onClick={nextStep}
                          className="flex-1 bg-primary hover:bg-primary/90 text-primary-foreground rounded-xl py-6 text-sm font-semibold hover-arrow-translate shadow-sm"
                        >
                          Next Step
                          <ArrowRight className="w-4 h-4 ml-2 arrow-icon" />
                        </Button>
                      ) : (
                        <Button
                          type="submit"
                          disabled={isSubmitting}
                          className="flex-1 bg-primary hover:bg-primary/90 text-primary-foreground rounded-xl py-6 text-sm font-semibold hover-arrow-translate shadow-sm disabled:opacity-70"
                        >
                          {isSubmitting ? "Confirming..." : "Confirm Booking"}
                          {!isSubmitting && <Check className="w-4 h-4 ml-2" />}
                        </Button>
                      )}
                    </div>
                  </form>
                ) : (
                  <div className="py-8 text-center animate-fade-in-up">
                    <div className="w-16 h-16 rounded-full bg-primary/10 border-2 border-primary flex items-center justify-center mb-6 mx-auto animate-pulse-slow select-none">
                      <Check className="w-7 h-7 text-primary animate-bounce" />
                    </div>

                    <h3 className="font-serif text-2xl lg:text-3xl font-semibold text-foreground mb-4">
                      Booking Confirmed!
                    </h3>
                    <p className="text-foreground-muted text-sm max-w-sm mx-auto leading-relaxed mb-8">
                      Thank you, <strong className="text-foreground">{name}</strong>! Your audit session has been booked.
                    </p>

                    <div className="bg-background-secondary border border-border/50 rounded-xl p-5 text-left max-w-sm mx-auto text-xs text-foreground-muted leading-relaxed mb-8">
                      <strong className="text-foreground block mb-1">What happens next?</strong>
                      Our team will review your challenges and prepare your custom audit before we meet. You will receive a calendar invite shortly.
                    </div>

                    <Button
                      onClick={resetForm}
                      variant="outline"
                      className="border-border/60 text-foreground-muted hover:border-primary/40 hover:bg-primary/5 hover:text-primary rounded-xl px-8 py-5 text-xs font-semibold transition-all duration-200 cursor-pointer"
                    >
                      Book Another Session
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
