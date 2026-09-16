'use client'

import { motion } from 'framer-motion'
import { Award, CheckCircle2, ExternalLink } from 'lucide-react'
import { certifications } from '@/lib/portfolio-data'
import { Reveal } from './reveal'
import { SectionHeading } from './section-heading'

export function Certifications() {
  return (
    <section id="certifications" className="relative border-y border-border/60 bg-card/20 py-24">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal>
          <SectionHeading
            index="06 / certifications"
            title="Professional Certifications"
            subtitle="Industry and academic certifications validating technical proficiency and problem solving."
          />
        </Reveal>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {certifications.map((cert, i) => (
            <Reveal key={cert.title} delay={200 + i * 140} direction="up">
              <motion.div
                whileHover={{ y: -5, scale: 1.02 }}
                transition={{ type: 'spring', stiffness: 350, damping: 22 }}
                className="group relative flex h-full flex-col justify-between overflow-hidden rounded-2xl border border-border/80 bg-card/80 p-6 shadow-md backdrop-blur-md transition-all hover:border-primary/50 hover:shadow-xl hover:shadow-primary/10"
              >
                {/* Shine Sweep Effect on hover */}
                <div className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-primary/10 to-transparent transition-transform duration-700 group-hover:translate-x-full" />

                <div>
                  <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                    <Award className="h-5 w-5" />
                  </div>

                  <h3 className="text-base font-bold leading-snug text-foreground text-balance">
                    {cert.title}
                  </h3>

                  <p className="mt-2 text-xs font-medium text-muted-foreground">
                    {cert.issuer}
                  </p>
                </div>

                <div className="mt-6 flex items-center justify-between border-t border-border/60 pt-3">
                  <span className="inline-flex items-center gap-1 font-mono text-xs font-semibold text-primary">
                    <CheckCircle2 className="h-3.5 w-3.5" />
                    {cert.detail}
                  </span>
                </div>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
