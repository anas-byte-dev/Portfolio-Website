'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence, useMotionValue, useSpring, useTransform } from 'framer-motion'
import { ArrowUpRight, Info, Layers, Sparkles } from 'lucide-react'
import { projects, type Project } from '@/lib/portfolio-data'
import { Reveal } from './reveal'
import { SectionHeading } from './section-heading'
import { ProjectModal } from './project-modal'
import { GithubIcon } from './icons'

export function Projects() {
  const [filter, setFilter] = useState<'All' | 'Full Stack' | 'Java Core' | 'Frontend'>('All')
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)

  const categories = ['All', 'Full Stack', 'Java Core', 'Frontend'] as const

  const filteredProjects =
    filter === 'All'
      ? projects
      : projects.filter((p) => p.category === filter)

  return (
    <section id="projects" className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
      <Reveal>
        <SectionHeading
          index="03 / projects"
          title="Featured Projects"
          subtitle="Production-grade applications spanning full-stack architectures, core Java cryptographic utilities, and dynamic user interfaces."
        />
      </Reveal>

      {/* Filter Tabs */}
      <Reveal delay={80} className="mb-8 sm:mb-10">
        <div className="flex flex-wrap items-center gap-1.5 sm:gap-2">
          {categories.map((cat) => {
            const isSelected = filter === cat
            return (
              <button
                key={cat}
                type="button"
                onClick={() => setFilter(cat)}
                className={`relative rounded-full px-3 sm:px-4 py-1 sm:py-1.5 font-mono text-[11px] sm:text-xs font-medium transition-all ${
                  isSelected
                    ? 'text-primary-foreground font-semibold shadow-md'
                    : 'border border-border/60 bg-card/60 text-muted-foreground hover:border-primary/40 hover:text-foreground'
                }`}
              >
                {isSelected && (
                  <motion.div
                    layoutId="active-project-tab"
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

      {/* Projects Grid with Smooth Tab Animation */}
      <AnimatePresence mode="wait">
        <motion.div
          key={filter}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -12 }}
          transition={{ duration: 0.22, ease: 'easeOut' }}
          className="grid gap-5 sm:gap-8 md:grid-cols-2 lg:grid-cols-3"
        >
          {filteredProjects.map((project, i) => (
            <ProjectCard
              key={project.title}
              project={project}
              index={i}
              onOpenDetails={() => setSelectedProject(project)}
            />
          ))}
        </motion.div>
      </AnimatePresence>

      {/* Interactive Project Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  )
}

function ProjectCard({
  project,
  index,
  onOpenDetails,
}: {
  project: Project
  index: number
  onOpenDetails: () => void
}) {
  const [canHover, setCanHover] = useState(false)

  React.useEffect(() => {
    setCanHover(
      typeof window !== 'undefined' &&
        window.matchMedia('(hover: hover) and (pointer: fine)').matches,
    )
  }, [])

  // 3D Tilt Hook (desktop only)
  const x = useMotionValue(0)
  const y = useMotionValue(0)

  const mouseXSpring = useSpring(x, { stiffness: 300, damping: 20 })
  const mouseYSpring = useSpring(y, { stiffness: 300, damping: 20 })

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ['7.5deg', '-7.5deg'])
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ['-7.5deg', '7.5deg'])

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!canHover) return
    const rect = e.currentTarget.getBoundingClientRect()
    const width = rect.width
    const height = rect.height
    const mouseX = e.clientX - rect.left
    const mouseY = e.clientY - rect.top
    const xPct = mouseX / width - 0.5
    const yPct = mouseY / height - 0.5
    x.set(xPct)
    y.set(yPct)
  }

  const handleMouseLeave = () => {
    if (!canHover) return
    x.set(0)
    y.set(0)
  }

  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.95, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95, y: -15 }}
      transition={{ duration: 0.4, delay: index * 0.08 }}
      style={{
        rotateX: canHover ? rotateX : undefined,
        rotateY: canHover ? rotateY : undefined,
        transformStyle: canHover ? 'preserve-3d' : undefined,
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-border/80 bg-card/80 p-5 sm:p-6 shadow-md backdrop-blur-md transition-all hover:border-primary/50 hover:shadow-2xl hover:shadow-primary/10"
    >
      {/* Top Banner Accent */}
      <div className="absolute top-0 inset-x-0 h-1.5 bg-gradient-to-r from-emerald-500 via-primary to-teal-400 opacity-60 transition-opacity group-hover:opacity-100" />

      <div>
        {/* Category & Icons */}
        <div className="mb-4 flex items-center justify-between">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-primary/30 bg-primary/10 px-2.5 py-0.5 font-mono text-[11px] font-medium text-primary">
            <Sparkles className="h-3 w-3" />
            {project.category}
          </span>
          <div className="flex items-center gap-2">
            <a
              href={project.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="View Source on GitHub"
              className="inline-flex h-8 w-8 items-center justify-center rounded-lg border border-border/60 bg-secondary/50 text-muted-foreground transition-colors hover:border-primary hover:text-primary"
            >
              <GithubIcon className="h-4 w-4" />
            </a>
            {project.demoUrl && (
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Live Demo"
                className="inline-flex h-8 w-8 items-center justify-center rounded-lg border border-border/60 bg-secondary/50 text-muted-foreground transition-colors hover:border-primary hover:text-primary"
              >
                <ArrowUpRight className="h-4 w-4" />
              </a>
            )}
          </div>
        </div>

        <p className="font-mono text-xs text-primary">{project.subtitle}</p>
        <h3 className="mt-1 text-xl font-bold tracking-tight text-balance text-foreground">
          {project.title}
        </h3>
        <p className="mt-3 text-pretty text-sm leading-relaxed text-muted-foreground">
          {project.description}
        </p>

        {/* Tech Stack Pills */}
        <ul className="mt-5 flex flex-wrap gap-1.5">
          {project.stack.map((tech) => (
            <li
              key={tech}
              className="rounded-md border border-border/60 bg-secondary/40 px-2 py-0.5 font-mono text-[11px] text-muted-foreground"
            >
              {tech}
            </li>
          ))}
        </ul>
      </div>

      {/* Details Button */}
      <div className="mt-6 border-t border-border/60 pt-4">
        <button
          type="button"
          onClick={onOpenDetails}
          className="flex w-full items-center justify-center gap-2 rounded-xl border border-primary/20 bg-primary/5 py-2 font-mono text-xs font-semibold text-primary transition-all hover:border-primary hover:bg-primary hover:text-primary-foreground"
        >
          <Layers className="h-3.5 w-3.5" />
          <span>View Architecture & Specs</span>
          <Info className="h-3 w-3 opacity-70" />
        </button>
      </div>
    </motion.div>
  )
}
