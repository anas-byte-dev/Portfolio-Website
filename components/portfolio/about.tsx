'use client'

import { motion } from 'framer-motion'
import { about } from '@/lib/portfolio-data'
import { Reveal } from './reveal'
import { SectionHeading } from './section-heading'
import { Code2, Server, Database, ShieldCheck, Sparkles } from 'lucide-react'

const highlights = [
  {
    icon: Server,
    title: 'Robust Backend Systems',
    desc: 'Engineering scalable enterprise backends with Spring Boot, Spring MVC, REST APIs, and Hibernate JPA.',
  },
  {
    icon: Code2,
    title: 'Full Stack Integration',
    desc: 'Connecting dynamic React front-ends with resilient Java backends, ensuring modular and reusable design.',
  },
  {
    icon: Database,
    title: 'Relational Databases',
    desc: 'Hands-on schema design, query optimization, and transactions using MySQL and PostgreSQL.',
  },
  {
    icon: ShieldCheck,
    title: 'Cyber Security Foundation',
    desc: 'B.Tech specialization in Cyber Security, applying secure coding practices and defensive architecture.',
  },
]

export function About() {
  return (
    <section id="about" className="relative mx-auto max-w-6xl px-5 py-24 sm:px-8">
      <Reveal>
        <SectionHeading
          index="01 / about"
          title="A little about me"
          subtitle="Engineering robust full-stack software with passion and precision."
        />
      </Reveal>

      <div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:items-start">
        {/* Left Column: Bio & Core Highlights */}
        <div>
          <div className="space-y-4">
            {about.bio.map((paragraph, i) => (
              <Reveal key={i} delay={300 + i * 150} direction="up">
                <p className="text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
                  {paragraph}
                </p>
              </Reveal>
            ))}
          </div>

          {/* Highlights Grid */}
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {highlights.map((item, idx) => {
              const Icon = item.icon
              return (
                <Reveal key={item.title} delay={700 + idx * 120} direction="up">
                  <motion.div
                    whileHover={{ y: -3 }}
                    className="group flex flex-col rounded-xl border border-border/70 bg-card/60 p-5 shadow-sm backdrop-blur-sm transition-all hover:border-primary/40 hover:shadow-md"
                  >
                    <div className="mb-3 inline-flex h-9 w-9 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                      <Icon className="h-4 w-4" />
                    </div>
                    <h3 className="font-semibold text-foreground text-sm">
                      {item.title}
                    </h3>
                    <p className="mt-1.5 text-xs leading-relaxed text-muted-foreground">
                      {item.desc}
                    </p>
                  </motion.div>
                </Reveal>
              )
            })}
          </div>
        </div>

        {/* Right Column: Key Stats & Quick Details Card */}
        <div className="grid content-start gap-4">
          <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
            {about.stats.map((stat, i) => (
              <Reveal key={stat.label} delay={450 + i * 150} direction="up">
                <motion.div
                  whileHover={{ scale: 1.02, y: -2 }}
                  transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                  className="relative overflow-hidden rounded-2xl border border-border/80 bg-gradient-to-br from-card/80 to-card/40 p-6 shadow-sm backdrop-blur-md transition-all hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5"
                >
                  <div className="flex items-baseline justify-between">
                    <span className="font-mono text-3xl font-extrabold tracking-tight text-primary sm:text-4xl">
                      {stat.value}
                    </span>
                    <Sparkles className="h-4 w-4 text-primary/40" />
                  </div>
                  <div className="mt-2 text-sm font-medium text-muted-foreground">
                    {stat.label}
                  </div>
                </motion.div>
              </Reveal>
            ))}
          </div>

          {/* Quick Info Box */}
          <Reveal delay={900} direction="up">
            <div className="rounded-2xl border border-border/60 bg-secondary/30 p-6 backdrop-blur-sm">
              <h4 className="font-mono text-xs font-semibold uppercase tracking-wider text-primary">
                Core Philosophies
              </h4>
              <ul className="mt-3 space-y-2 font-mono text-xs text-muted-foreground">
                <li className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                  Clean OOP & SOLID design patterns
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                  Resilient RESTful microservices
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                  Continuous learning & fast adaptability
                </li>
              </ul>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
