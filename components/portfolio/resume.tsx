'use client'

import { motion } from 'framer-motion'
import {
  Download,
  ExternalLink,
  FileText,
  CheckCircle2,
  Sparkles,
  Award,
  GraduationCap,
  Briefcase,
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { profile } from '@/lib/portfolio-data'
import { Reveal } from './reveal'
import { SectionHeading } from './section-heading'

export function Resume() {
  return (
    <section id="resume" className="relative mx-auto max-w-6xl px-5 py-24 sm:px-8">
      <SectionHeading
        index="08 / resume"
        title="Resume & Credentials"
        subtitle="Review my verified technical qualifications, academic background, and professional training or download the complete PDF copy."
      />

      <div className="grid gap-8 lg:grid-cols-[1.3fr_0.9fr] lg:items-start">
        {/* Left Column: Interactive Resume Document Card */}
        <Reveal delay={200} direction="up">
          <motion.div
            whileHover={{ y: -4 }}
            className="group relative overflow-hidden rounded-2xl border border-border/80 bg-card/85 p-6 sm:p-8 shadow-xl backdrop-blur-xl transition-all hover:border-primary/50 hover:shadow-2xl hover:shadow-primary/10"
          >
            {/* Top Accent Gradient */}
            <div className="absolute top-0 inset-x-0 h-1.5 bg-gradient-to-r from-emerald-500 via-primary to-teal-400" />

            {/* Document Header */}
            <div className="flex flex-wrap items-start justify-between gap-4 border-b border-border/60 pb-6">
              <div className="flex items-center gap-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-primary/30 bg-primary/10 text-primary shadow-sm">
                  <FileText className="h-7 w-7" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="text-xl font-bold text-foreground">
                      Anas Siddiqui
                    </h3>
                    <span className="rounded-md border border-primary/30 bg-primary/10 px-2 py-0.5 font-mono text-[11px] font-semibold text-primary">
                      PDF · 46 KB
                    </span>
                  </div>
                  <p className="font-mono text-xs text-muted-foreground mt-0.5">
                    Java Full Stack Developer · Fresher / Immediate Joiner
                  </p>
                </div>
              </div>

              {/* Primary Download Button */}
              <div className="flex w-full sm:w-auto items-center gap-2.5">
                <Button
                  size="lg"
                  className="flex-1 sm:flex-initial justify-center gap-2 shadow-lg shadow-primary/25 transition-all hover:shadow-primary/40"
                  nativeButton={false}
                  render={
                    <a
                      href={profile.resume}
                      download="Anas_Siddiqui_Resume.pdf"
                    />
                  }
                >
                  <Download className="h-4 w-4" />
                  Download PDF
                </Button>

                <Button
                  size="lg"
                  variant="outline"
                  className="justify-center gap-2 border-border/80 hover:border-primary/50"
                  nativeButton={false}
                  render={
                    <a
                      href={profile.resume}
                      target="_blank"
                      rel="noopener noreferrer"
                    />
                  }
                >
                  <ExternalLink className="h-4 w-4 text-primary" />
                  View
                </Button>
              </div>
            </div>

            {/* Resume Highlights Checklist */}
            <div className="mt-6 space-y-4 text-sm text-foreground/90">
              <h4 className="font-mono text-xs font-semibold uppercase tracking-wider text-primary">
                Executive Profile Overview
              </h4>

              <p className="text-sm leading-relaxed text-muted-foreground">
                Strong foundation in Core Java, Advanced Java, Object-Oriented Programming (OOP),
                Spring Boot, and SQL. Hands-on experience developing end-to-end full-stack
                applications with MVC architecture, REST APIs, and responsive React.js interfaces.
              </p>

              <div className="grid gap-3 pt-2 sm:grid-cols-2">
                <div className="flex items-center gap-2 rounded-xl border border-border/60 bg-secondary/30 p-3">
                  <CheckCircle2 className="h-4 w-4 text-primary shrink-0" />
                  <span className="text-xs font-medium">B.Tech CSE (Cyber Security)</span>
                </div>
                <div className="flex items-center gap-2 rounded-xl border border-border/60 bg-secondary/30 p-3">
                  <CheckCircle2 className="h-4 w-4 text-primary shrink-0" />
                  <span className="text-xs font-medium">Spring Boot & REST APIs</span>
                </div>
                <div className="flex items-center gap-2 rounded-xl border border-border/60 bg-secondary/30 p-3">
                  <CheckCircle2 className="h-4 w-4 text-primary shrink-0" />
                  <span className="text-xs font-medium">MySQL & PostgreSQL Relational DB</span>
                </div>
                <div className="flex items-center gap-2 rounded-xl border border-border/60 bg-secondary/30 p-3">
                  <CheckCircle2 className="h-4 w-4 text-primary shrink-0" />
                  <span className="text-xs font-medium">React.js Responsive Frontends</span>
                </div>
              </div>
            </div>
          </motion.div>
        </Reveal>

        {/* Right Column: Quick Stats & Direct Action Box */}
        <div className="space-y-4">
          <Reveal delay={350} direction="up">
            <div className="rounded-2xl border border-border/80 bg-card/80 p-6 shadow-sm backdrop-blur-md">
              <h4 className="font-mono text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                Document Metadata
              </h4>

              <dl className="mt-4 space-y-3 font-mono text-xs">
                <div className="flex justify-between border-b border-border/50 pb-2">
                  <dt className="text-muted-foreground">File Format:</dt>
                  <dd className="font-semibold text-foreground">Adobe PDF (.pdf)</dd>
                </div>
                <div className="flex justify-between border-b border-border/50 pb-2">
                  <dt className="text-muted-foreground">File Size:</dt>
                  <dd className="font-semibold text-primary">~46 KB</dd>
                </div>
                <div className="flex justify-between border-b border-border/50 pb-2">
                  <dt className="text-muted-foreground">Availability:</dt>
                  <dd className="font-semibold text-emerald-500">Immediate Joiner</dd>
                </div>
                <div className="flex justify-between border-b border-border/50 pb-2">
                  <dt className="text-muted-foreground">Target Roles:</dt>
                  <dd className="font-semibold text-foreground">GET / Java Developer</dd>
                </div>
                <div className="flex justify-between pt-1">
                  <dt className="text-muted-foreground">Contact:</dt>
                  <dd className="font-semibold text-foreground">+91 7256996846</dd>
                </div>
              </dl>
            </div>
          </Reveal>

          <Reveal delay={500} direction="up">
            <div className="rounded-2xl border border-primary/20 bg-primary/5 p-6 backdrop-blur-md">
              <div className="flex items-center gap-2 font-mono text-xs font-bold text-primary">
                <Sparkles className="h-4 w-4" />
                Ready to Hire or Schedule an Interview?
              </div>
              <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                Feel free to directly download the resume or drop a message in the contact section below to discuss current openings.
              </p>
              <div className="mt-4">
                <Button
                  className="w-full gap-2 shadow-sm"
                  nativeButton={false}
                  render={
                    <a
                      href={profile.resume}
                      download="Anas_Siddiqui_Resume.pdf"
                    />
                  }
                >
                  <Download className="h-4 w-4" />
                  Download Complete Resume
                </Button>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
