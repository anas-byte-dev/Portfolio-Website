'use client'

import { motion } from 'framer-motion'
import { Users, Calendar, Building, Sparkles } from 'lucide-react'
import { leadership } from '@/lib/portfolio-data'
import { Reveal } from './reveal'
import { SectionHeading } from './section-heading'

export function Leadership() {
  return (
    <section id="leadership" className="relative mx-auto max-w-6xl px-5 py-24 sm:px-8">
      <Reveal>
        <SectionHeading
          index="07 / leadership"
          title="Leadership & Campus Roles"
          subtitle="Demonstrated ownership, student advocacy, and organizational coordination across academic initiatives."
        />
      </Reveal>

      <div className="grid gap-6 md:grid-cols-2">
        {leadership.map((item, i) => (
          <Reveal key={item.role} delay={250 + i * 220} direction="up">
            <motion.div
              whileHover={{ y: -4 }}
              transition={{ type: 'spring', stiffness: 350, damping: 22 }}
              className="group relative flex h-full flex-col justify-between overflow-hidden rounded-2xl border border-border/80 bg-card/80 p-7 shadow-md backdrop-blur-md transition-all hover:border-primary/50 hover:shadow-xl hover:shadow-primary/5"
            >
              <div>
                <div className="flex items-center justify-between">
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                    <Users className="h-5 w-5" />
                  </span>
                  <span className="flex items-center gap-1 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 font-mono text-xs font-semibold text-primary">
                    <Calendar className="h-3.5 w-3.5" />
                    {item.period}
                  </span>
                </div>

                <h3 className="mt-5 text-xl font-bold text-foreground text-balance">
                  {item.role}
                </h3>

                <p className="mt-1 flex items-center gap-1.5 text-sm font-medium text-muted-foreground">
                  <Building className="h-4 w-4 text-primary" />
                  {item.org}
                </p>

                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                  {item.description}
                </p>
              </div>

              <div className="mt-6 flex items-center gap-1.5 border-t border-border/60 pt-4 font-mono text-xs text-primary">
                <Sparkles className="h-3.5 w-3.5" />
                <span>Active Campus Contributor</span>
              </div>
            </motion.div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
