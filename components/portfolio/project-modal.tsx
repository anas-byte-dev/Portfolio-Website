'use client'

import { useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, ExternalLink, CheckCircle2, Layers, Cpu } from 'lucide-react'
import type { Project } from '@/lib/portfolio-data'
import { Button } from '@/components/ui/button'
import { GithubIcon } from './icons'

interface ProjectModalProps {
  project: Project | null
  onClose: () => void
}

export function ProjectModal({ project, onClose }: ProjectModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    if (project) {
      document.body.style.overflow = 'hidden'
      window.addEventListener('keydown', handleKeyDown)
    }
    return () => {
      document.body.style.overflow = 'unset'
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [project, onClose])

  return (
    <AnimatePresence>
      {project && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-background/80 backdrop-blur-md"
          />

          {/* Dialog Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.94, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.94, y: 15 }}
            transition={{ type: 'spring', damping: 28, stiffness: 350 }}
            className="relative z-10 flex flex-col w-full max-w-2xl max-h-[90dvh] overflow-hidden rounded-2xl border border-border bg-card shadow-2xl"
          >
            {/* Header with gradient line */}
            <div className="h-1.5 w-full shrink-0 bg-gradient-to-r from-emerald-500 via-primary to-teal-400" />

            <div className="overflow-y-auto p-5 sm:p-8">
              <div className="flex items-start justify-between gap-4">
                <div className="min-w-0 flex-1">
                  <span className="inline-flex items-center gap-1.5 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 font-mono text-xs font-medium text-primary">
                    <Cpu className="h-3 w-3" />
                    {project.category}
                  </span>
                  <h3 className="mt-2 text-xl font-bold text-foreground sm:text-3xl">
                    {project.title}
                  </h3>
                  <p className="font-mono text-xs sm:text-sm text-primary mt-0.5">
                    {project.subtitle}
                  </p>
                </div>

                <button
                  type="button"
                  onClick={onClose}
                  aria-label="Close modal"
                  className="rounded-xl border border-border/70 bg-secondary/50 p-2 text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground active:scale-95 shrink-0"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              {/* Description */}
              <p className="mt-4 text-sm sm:text-base leading-relaxed text-muted-foreground">
                {project.description}
              </p>

              {/* Architecture Highlight */}
              {project.architecture && (
                <div className="mt-5 rounded-xl border border-primary/20 bg-primary/5 p-4">
                  <div className="flex items-center gap-2 font-mono text-xs font-semibold text-primary">
                    <Layers className="h-4 w-4" />
                    System & Architecture
                  </div>
                  <p className="mt-2 text-xs sm:text-sm text-foreground/90 leading-relaxed">
                    {project.architecture}
                  </p>
                </div>
              )}

              {/* Key Features */}
              {project.features && project.features.length > 0 && (
                <div className="mt-5">
                  <h4 className="font-mono text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                    Key Features & Technical Implementation
                  </h4>
                  <ul className="mt-3 grid gap-2.5 sm:grid-cols-1">
                    {project.features.map((feat, idx) => (
                      <li
                        key={idx}
                        className="flex items-start gap-2.5 text-xs sm:text-sm text-foreground/90"
                      >
                        <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Stack Tags */}
              <div className="mt-5">
                <h4 className="font-mono text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                  Technologies Used
                </h4>
                <div className="mt-2.5 flex flex-wrap gap-1.5 sm:gap-2">
                  {project.stack.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-md border border-border bg-secondary/60 px-2.5 py-1 font-mono text-[11px] sm:text-xs text-secondary-foreground"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Actions */}
              <div className="mt-6 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 border-t border-border pt-5">
                <Button
                  nativeButton={false}
                  render={
                    <a
                      href={project.href}
                      target="_blank"
                      rel="noopener noreferrer"
                    />
                  }
                  className="w-full sm:w-auto justify-center gap-2"
                >
                  <GithubIcon className="h-4 w-4" />
                  View Source Code
                </Button>
                {project.demoUrl && (
                  <Button
                    variant="outline"
                    nativeButton={false}
                    render={
                      <a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      />
                    }
                    className="w-full sm:w-auto justify-center gap-2"
                  >
                    <ExternalLink className="h-4 w-4" />
                    Live Preview
                  </Button>
                )}
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  )
}
