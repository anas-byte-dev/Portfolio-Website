'use client'

import { motion } from 'framer-motion'
import { Briefcase, Calendar, MapPin } from 'lucide-react'
import { experience } from '@/lib/portfolio-data'
import { Reveal } from './reveal'
import { SectionHeading } from './section-heading'

export function Experience() {
  return (
    <section id="experience" className="relative border-y border-border/60 bg-card/20 py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <SectionHeading
            index="04 / experience"
            title="Training & Practical Experience"
            subtitle="Deep-dive professional training sharpening full-stack Java fundamentals, architectural patterns, and database engineering."
          />
        </Reveal>

        <div className="relative ml-0 sm:ml-4">
          {/* Continuous Glowing Timeline Line */}
          <div className="absolute top-2 bottom-2 left-[11px] w-[2px] bg-gradient-to-b from-primary via-primary/50 to-border/40" />

          <div className="space-y-8 sm:space-y-12">
            {experience.map((item, i) => (
              <Reveal key={item.org} delay={i * 120}>
                <div className="relative pl-7 sm:pl-12">
                  {/* Timeline Pulse Node */}
                  <div className="absolute -left-[1px] top-1.5 flex h-6 w-6 items-center justify-center">
                    <span className="absolute h-full w-full animate-ping rounded-full bg-primary/30 opacity-75" />
                    <span className="relative flex h-3.5 w-3.5 items-center justify-center rounded-full border-2 border-primary bg-background shadow-[0_0_8px_var(--primary)]">
                      <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                    </span>
                  </div>

                  {/* Experience Card */}
                  <motion.div
                    whileHover={{ y: -3 }}
                    className="overflow-hidden rounded-2xl border border-border/80 bg-card/80 p-4 sm:p-7 shadow-md backdrop-blur-md transition-all hover:border-primary/50 hover:shadow-xl hover:shadow-primary/5"
                  >
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <span className="inline-flex items-center gap-1.5 rounded-full border border-primary/30 bg-primary/10 px-2.5 sm:px-3 py-1 font-mono text-[11px] sm:text-xs font-semibold text-primary">
                        <Calendar className="h-3 w-3" />
                        {item.period}
                      </span>
                      <span className="flex items-center gap-1 font-mono text-[11px] sm:text-xs text-muted-foreground">
                        <MapPin className="h-3 w-3 text-primary" />
                        {item.org}
                      </span>
                    </div>

                    <h3 className="mt-2.5 sm:mt-3 text-lg sm:text-xl font-bold text-foreground">
                      {item.role}
                    </h3>

                    <ul className="mt-3 sm:mt-4 space-y-2 sm:space-y-2.5">
                      {item.points.map((point, j) => (
                        <motion.li
                          key={j}
                          initial={{ opacity: 0, x: -12 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true, margin: '-30px' }}
                          transition={{
                            duration: 0.45,
                            delay: 0.25 + j * 0.16,
                            ease: 'easeOut',
                          }}
                          className="flex items-start gap-2 text-xs sm:text-sm leading-relaxed text-muted-foreground"
                        >
                          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                          <span>{point}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </motion.div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
