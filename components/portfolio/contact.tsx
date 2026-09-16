'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Mail,
  Phone,
  Send,
  Copy,
  Check,
  Sparkles,
  CheckCircle2,
  Loader2,
  AlertCircle,
} from 'lucide-react'
import confetti from 'canvas-confetti'
import { Button } from '@/components/ui/button'
import { profile } from '@/lib/portfolio-data'
import { Reveal } from './reveal'
import { SectionHeading } from './section-heading'
import { GithubIcon, LinkedinIcon } from './icons'

export function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [copiedKey, setCopiedKey] = useState<string | null>(null)
  const [isSending, setIsSending] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [errorMessage, setErrorMessage] = useState<string | null>(null)
  const [submittedEmail, setSubmittedEmail] = useState('')
  const [submittedName, setSubmittedName] = useState('')

  const handleCopy = (text: string, key: string) => {
    navigator.clipboard.writeText(text)
    setCopiedKey(key)
    setTimeout(() => setCopiedKey(null), 2200)
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setIsSending(true)
    setErrorMessage(null)

    try {
      // 1. Direct browser submission to FormSubmit (runs from client device, avoiding serverless IP restrictions)
      const res = await fetch(`https://formsubmit.co/ajax/${profile.email}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          _subject: `💼 New Portfolio Message from ${form.name}`,
          message: form.message,
          _replyto: form.email,
          _captcha: 'false',
          _template: 'table',
        }),
      })

      const data = await res.json()

      // If FormSubmit requires one-time email activation
      if (data.message && data.message.toLowerCase().includes('activation')) {
        throw new Error(
          "Action Required: FormSubmit sent an 'Activate Form' confirmation to anassidd7256@gmail.com. Please open Gmail (check your SPAM folder!) and click the link to start receiving messages.",
        )
      }

      if (!res.ok || (data.success !== true && data.success !== 'true')) {
        throw new Error(data.message || 'Failed to dispatch message.')
      }

      setSubmittedName(form.name)
      setSubmittedEmail(form.email)
      setIsSubmitted(true)
      setForm({ name: '', email: '', message: '' })

      // Trigger celebratory confetti
      confetti({
        particleCount: 90,
        spread: 70,
        origin: { y: 0.65 },
        colors: ['#10b981', '#14b8a6', '#06b6d4', '#6366f1'],
      })
    } catch (err: any) {
      setErrorMessage(
        err.message || 'Failed to send message. You can also send via your email client directly.',
      )
    } finally {
      setIsSending(false)
    }
  }

  const handleMailtoFallback = () => {
    const subject = encodeURIComponent(`Portfolio inquiry from ${form.name || 'Visitor'}`)
    const body = encodeURIComponent(
      `${form.message}\n\n— ${form.name} (${form.email})`,
    )
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`
  }

  return (
    <section id="contact" className="relative border-t border-border/60 bg-card/20 py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal>
          <SectionHeading
            index="09 / contact"
            title="Let's Connect & Collaborate"
            subtitle="I am actively looking for opportunities as a Graduate Engineer Trainee or Java Full Stack Developer. Have an opportunity or project? Let's connect!"
          />
        </Reveal>

        <div className="grid gap-8 sm:gap-12 lg:grid-cols-[1fr_1.1fr] lg:gap-16">
          {/* Left Column: Contact Cards with Copy feedback - Cascading line by line */}
          <div className="space-y-4">
            {/* Email Card with 1-click Copy */}
            <Reveal delay={200} direction="up">
              <motion.div
                whileHover={{ y: -3 }}
                className="group flex items-center justify-between rounded-2xl border border-border/80 bg-card/80 p-5 shadow-sm backdrop-blur-md transition-all hover:border-primary/50"
              >
                <a
                  href={`mailto:${profile.email}`}
                  className="flex items-center gap-3 sm:gap-4 flex-1 min-w-0"
                >
                  <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                    <Mail className="h-5 w-5" />
                  </span>
                  <div className="min-w-0 flex-1">
                    <span className="block text-xs font-mono text-muted-foreground">
                      Email Address
                    </span>
                    <span className="font-mono text-xs sm:text-sm font-semibold text-foreground group-hover:text-primary transition-colors truncate block">
                      {profile.email}
                    </span>
                  </div>
                </a>

                <button
                  type="button"
                  onClick={() => handleCopy(profile.email, 'email')}
                  className="relative rounded-lg p-2 text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
                  title="Copy email to clipboard"
                >
                  {copiedKey === 'email' ? (
                    <Check className="h-4 w-4 text-emerald-500" />
                  ) : (
                    <Copy className="h-4 w-4" />
                  )}
                  {copiedKey === 'email' && (
                    <span className="absolute -top-7 right-0 rounded bg-primary px-2 py-0.5 font-mono text-[10px] text-primary-foreground shadow">
                      Copied!
                    </span>
                  )}
                </button>
              </motion.div>
            </Reveal>

            {/* Phone Card with 1-click Copy */}
            <Reveal delay={340} direction="up">
              <motion.div
                whileHover={{ y: -3 }}
                className="group flex items-center justify-between rounded-2xl border border-border/80 bg-card/80 p-5 shadow-sm backdrop-blur-md transition-all hover:border-primary/50"
              >
                <a
                  href={`tel:${profile.phone.replace(/\s/g, '')}`}
                  className="flex items-center gap-3 sm:gap-4 flex-1 min-w-0"
                >
                   <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                    <Phone className="h-5 w-5" />
                  </span>
                  <div className="min-w-0 flex-1">
                    <span className="block text-xs font-mono text-muted-foreground">
                      Phone & WhatsApp
                    </span>
                    <span className="font-mono text-xs sm:text-sm font-semibold text-foreground group-hover:text-primary transition-colors truncate block">
                      {profile.phone}
                    </span>
                  </div>
                </a>

                <button
                  type="button"
                  onClick={() => handleCopy(profile.phone, 'phone')}
                  className="relative rounded-lg p-2 text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
                  title="Copy phone to clipboard"
                >
                  {copiedKey === 'phone' ? (
                    <Check className="h-4 w-4 text-emerald-500" />
                  ) : (
                    <Copy className="h-4 w-4" />
                  )}
                  {copiedKey === 'phone' && (
                    <span className="absolute -top-7 right-0 rounded bg-primary px-2 py-0.5 font-mono text-[10px] text-primary-foreground shadow">
                      Copied!
                    </span>
                  )}
                </button>
              </motion.div>
            </Reveal>

            {/* GitHub Card */}
            <Reveal delay={480} direction="up">
              <motion.a
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -3 }}
                className="group flex items-center gap-4 rounded-2xl border border-border/80 bg-card/80 p-5 shadow-sm backdrop-blur-md transition-all hover:border-primary/50"
              >
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                  <GithubIcon className="h-5 w-5" />
                </span>
                <div>
                  <span className="block text-xs font-mono text-muted-foreground">
                    GitHub Profile
                  </span>
                  <span className="font-mono text-sm font-semibold text-foreground group-hover:text-primary transition-colors">
                    {profile.githubHandle}
                  </span>
                </div>
              </motion.a>
            </Reveal>

            {/* LinkedIn Card */}
            <Reveal delay={620} direction="up">
              <motion.a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -3 }}
                className="group flex items-center gap-4 rounded-2xl border border-border/80 bg-card/80 p-5 shadow-sm backdrop-blur-md transition-all hover:border-primary/50"
              >
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                  <LinkedinIcon className="h-5 w-5" />
                </span>
                <div>
                  <span className="block text-xs font-mono text-muted-foreground">
                    LinkedIn Profile
                  </span>
                  <span className="font-mono text-sm font-semibold text-foreground group-hover:text-primary transition-colors">
                    {profile.linkedinHandle}
                  </span>
                </div>
              </motion.a>
            </Reveal>
          </div>

          {/* Right Column: Interactive Form or Success Banner - Line by Line Entry */}
          <div className="overflow-hidden rounded-2xl border border-border/80 bg-card/80 p-5 sm:p-7 shadow-lg backdrop-blur-md">
            <AnimatePresence mode="wait">
              {!isSubmitted ? (
                <motion.form
                  key="form"
                  onSubmit={handleSubmit}
                  action={`https://formsubmit.co/${profile.email}`}
                  method="POST"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="grid gap-4 sm:gap-5"
                >
                  {/* FormSubmit Configuration Fields */}
                  <input type="hidden" name="_captcha" value="false" />
                  <input type="hidden" name="_template" value="table" />
                  <input
                    type="hidden"
                    name="_subject"
                    value={`💼 New Portfolio Message - Anas Siddiqui`}
                  />

                  {errorMessage && (
                    <div className="flex items-start gap-3 rounded-xl border border-destructive/30 bg-destructive/10 p-4 text-xs text-destructive">
                      <AlertCircle className="h-4 w-4 shrink-0 mt-0.5" />
                      <div className="flex-1">
                        <p className="font-semibold">{errorMessage}</p>
                        <button
                          type="button"
                          onClick={handleMailtoFallback}
                          className="mt-2 inline-flex items-center gap-1 font-mono text-[11px] underline hover:opacity-80"
                        >
                          Send directly via email app instead &rarr;
                        </button>
                      </div>
                    </div>
                  )}

                  <Reveal delay={250} direction="up">
                    <div className="grid gap-2">
                      <label
                        htmlFor="name"
                        className="text-xs font-mono font-semibold uppercase tracking-wider text-muted-foreground"
                      >
                        Your Name
                      </label>
                      <input
                        id="name"
                        name="name"
                        required
                        disabled={isSending}
                        value={form.name}
                        onChange={(e) =>
                          setForm({ ...form, name: e.target.value })
                        }
                        placeholder="e.g. John Doe / Hiring Manager"
                        className="rounded-xl border border-input bg-background/80 px-3.5 sm:px-4 py-2.5 sm:py-3 text-base sm:text-sm outline-none transition-all placeholder:text-muted-foreground/60 focus:border-primary focus:ring-2 focus:ring-primary/20 disabled:opacity-60"
                      />
                    </div>
                  </Reveal>

                  <Reveal delay={400} direction="up">
                    <div className="grid gap-2">
                      <label
                        htmlFor="email"
                        className="text-xs font-mono font-semibold uppercase tracking-wider text-muted-foreground"
                      >
                        Your Email
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        disabled={isSending}
                        value={form.email}
                        onChange={(e) =>
                          setForm({ ...form, email: e.target.value })
                        }
                        placeholder="you@company.com"
                        className="rounded-xl border border-input bg-background/80 px-3.5 sm:px-4 py-2.5 sm:py-3 text-base sm:text-sm outline-none transition-all placeholder:text-muted-foreground/60 focus:border-primary focus:ring-2 focus:ring-primary/20 disabled:opacity-60"
                      />
                    </div>
                  </Reveal>

                  <Reveal delay={550} direction="up">
                    <div className="grid gap-2">
                      <label
                        htmlFor="message"
                        className="text-xs font-mono font-semibold uppercase tracking-wider text-muted-foreground"
                      >
                        Opportunity Details or Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        required
                        rows={4}
                        disabled={isSending}
                        value={form.message}
                        onChange={(e) =>
                          setForm({ ...form, message: e.target.value })
                        }
                        placeholder="Hi Anas, we would love to discuss an opportunity for a Java Full Stack Developer position..."
                        className="resize-none rounded-xl border border-input bg-background/80 px-3.5 sm:px-4 py-2.5 sm:py-3 text-base sm:text-sm outline-none transition-all placeholder:text-muted-foreground/60 focus:border-primary focus:ring-2 focus:ring-primary/20 disabled:opacity-60"
                      />
                    </div>
                  </Reveal>

                  <Reveal delay={700} direction="up">
                    <Button
                      type="submit"
                      size="lg"
                      disabled={isSending}
                      className="mt-2 w-full min-h-[44px] gap-2 shadow-lg shadow-primary/20 transition-all hover:shadow-primary/35 disabled:opacity-60"
                    >
                      {isSending ? (
                        <>
                          <Loader2 className="h-4 w-4 animate-spin" />
                          Sending Message...
                        </>
                      ) : (
                        <>
                          <Send className="h-4 w-4" />
                          Send Message
                        </>
                      )}
                    </Button>
                  </Reveal>
                </motion.form>
              ) : (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center py-8 text-center"
                >
                  <div className="mb-4 inline-flex h-16 w-16 items-center justify-center rounded-full bg-emerald-500/15 text-emerald-500 shadow-lg shadow-emerald-500/20">
                    <CheckCircle2 className="h-8 w-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground">
                    Message Sent Successfully!
                  </h3>
                  <p className="mt-2 max-w-md text-sm leading-relaxed text-muted-foreground">
                    Thank you, <strong className="text-foreground">{submittedName}</strong>! Your message has been dispatched directly to <strong className="text-primary">{profile.email}</strong>.
                  </p>

                  <div className="mt-5 max-w-md rounded-xl border border-primary/25 bg-primary/5 p-4 text-left font-mono text-xs">
                    <div className="flex items-center gap-2 font-bold text-primary">
                      <Sparkles className="h-4 w-4 shrink-0" />
                      Direct Email Reply Enabled
                    </div>
                    <p className="mt-1 text-[11px] text-muted-foreground leading-normal">
                      Your email address (<span className="text-foreground">{submittedEmail}</span>) was attached as the reply target. When Anas replies, his response will arrive straight in your inbox.
                    </p>
                  </div>

                  <button
                    type="button"
                    onClick={() => {
                      setIsSubmitted(false)
                      setErrorMessage(null)
                    }}
                    className="mt-6 rounded-lg border border-border/80 bg-secondary/50 px-4 py-2 font-mono text-xs text-foreground transition-colors hover:border-primary/50 hover:bg-secondary"
                  >
                    Send another message
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  )
}
