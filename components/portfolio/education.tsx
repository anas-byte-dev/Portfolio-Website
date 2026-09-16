'use client'

import { motion } from 'framer-motion'
import { GraduationCap, Award, Calendar, Building2 } from 'lucide-react'
import { education } from '@/lib/portfolio-data'
import { Reveal } from './reveal'
import { SectionHeading } from './section-heading'

export function Education() {
  return (
    <section id="education" className="relative mx-auto max-w-6xl px-5 py-24 sm:px-8">
      <Reveal>
        <SectionHeading
          index="05 / education"
          title="Academic Background"
          subtitle="Foundational computer science education, engineering principles, and cyber security specialization."
        />
      </Reveal>

      <div className="grid gap-6 md:grid-cols-2">
        {education.map((item, i) => (
          <Reveal key={item.degree} delay={250 + i * 220} direction="up">
            <motion.div
              whileHover={{ y: -4 }}
              className="group relative flex h-full flex-col justify-between overflow-hidden rounded-2xl border border-border/80 bg-card/80 p-7 shadow-md backdrop-blur-md transition-all hover:border-primary/50 hover:shadow-xl hover:shadow-primary/5"
            >
              {/* Corner Ambient Glow */}
              <div className="pointer-events-none absolute -right-12 -top-12 h-32 w-32 rounded-full bg-primary/10 blur-2xl transition-all group-hover:bg-primary/20" />

              <div>
                <div className="mb-4 flex items-center justify-between">
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                    <GraduationCap className="h-5 w-5" />
                  </span>
                  <span className="flex items-center gap-1.5 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 font-mono text-xs font-bold text-primary shadow-sm">
                    <Award className="h-3.5 w-3.5" />
                    {item.score}
                  </span>
                </div>

                <h3 className="text-xl font-bold tracking-tight text-foreground text-balance">
                  {item.degree}
                </h3>

                <div className="mt-3 space-y-1 text-sm text-muted-foreground">
                  <p className="flex items-center gap-1.5 font-medium text-foreground/90">
                    <Building2 className="h-4 w-4 text-primary" />
                    {item.school}
                  </p>
                  {item.university && (
                    <p className="pl-5 text-xs text-muted-foreground">
                      {item.university}
                    </p>
                  )}
                </div>
              </div>

              <div className="mt-6 flex items-center gap-2 border-t border-border/60 pt-4 font-mono text-xs text-primary">
                <Calendar className="h-3.5 w-3.5" />
                <span>{item.period}</span>
              </div>
            </motion.div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
