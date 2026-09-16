'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { skillGroups } from '@/lib/portfolio-data'
import { Reveal } from './reveal'
import { SectionHeading } from './section-heading'
import { TechMarquee } from './tech-marquee'
import { CheckCircle } from 'lucide-react'

export function Skills() {
  const categories = ['All', ...skillGroups.map((g) => g.title)]
  const [selectedCategory, setSelectedCategory] = useState('All')

  const filteredGroups =
    selectedCategory === 'All'
      ? skillGroups
      : skillGroups.filter((g) => g.title === selectedCategory)

  return (
    <section id="skills" className="relative border-y border-border/60 bg-card/20 py-24">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal>
          <SectionHeading
            index="02 / skills"
            title="Tools & Technologies"
            subtitle="A curated stack of enterprise technologies, frameworks, and tools I use to design, build, and deploy reliable full-stack applications."
          />
        </Reveal>

        {/* Filter Tabs */}
        <Reveal delay={80} className="mb-10">
          <div className="flex flex-wrap items-center gap-2">
            {categories.map((cat) => {
              const isSelected = selectedCategory === cat
              return (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setSelectedCategory(cat)}
                  className={`relative rounded-full px-4 py-1.5 font-mono text-xs font-medium transition-all ${
                    isSelected
                      ? 'text-primary-foreground font-semibold shadow-md'
                      : 'border border-border/60 bg-card/60 text-muted-foreground hover:border-primary/40 hover:text-foreground'
                  }`}
                >
                  {isSelected && (
                    <motion.div
                      layoutId="active-skill-tab"
                      transition={{ type: 'spring', stiffness: 350, damping: 28 }}
                      className="absolute inset-0 rounded-full bg-primary"
                    />
                  )}
                  <span className="relative z-10">{cat}</span>
                </button>
              )
            })}
          </div>
        </Reveal>

        {/* Skill Groups Grid with Smooth Tab Slide Animation */}
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedCategory}
            initial={{ opacity: 0, x: 28 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -28 }}
            transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
            className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
          >
            {filteredGroups.map((group, i) => (
              <motion.div
                key={group.title}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.35, delay: i * 0.05 }}
                whileHover={{ y: -4 }}
                className="group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-border/80 bg-card/70 p-6 shadow-sm backdrop-blur-md transition-all hover:border-primary/50 hover:shadow-xl hover:shadow-primary/5"
              >
                {/* Subtle top glare line on card hover */}
                <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-transparent via-primary/50 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />

                <div>
                  <div className="flex items-center justify-between">
                    <h3 className="font-mono text-sm font-bold tracking-wide text-primary">
                      {group.title}
                    </h3>
                    <span className="font-mono text-[11px] text-muted-foreground">
                      {group.items.length} skills
                    </span>
                  </div>

                  <ul className="mt-4 flex flex-wrap gap-2">
                    {group.items.map((item) => (
                      <motion.li
                        key={item}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.96 }}
                        className="flex items-center gap-1.5 rounded-lg border border-border/70 bg-secondary/50 px-3 py-1.5 font-mono text-xs text-foreground/90 transition-colors hover:border-primary/50 hover:bg-primary/10 hover:text-primary"
                      >
                        <CheckCircle className="h-3 w-3 text-primary/70" />
                        <span>{item}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Embedded Tech Marquee */}
      <div className="mt-20">
        <TechMarquee />
      </div>
    </section>
  )
}
