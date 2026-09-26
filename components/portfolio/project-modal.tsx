'use client'

import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  X,
  ExternalLink,
  CheckCircle2,
  Layers,
  Cpu,
  Sparkles,
  FileCode,
  UserCheck,
  Copy,
  Check,
} from 'lucide-react'
import type { Project } from '@/lib/portfolio-data'
import { Button } from '@/components/ui/button'
import { GithubIcon } from './icons'

interface ProjectModalProps {
  project: Project | null
  onClose: () => void
}

export function ProjectModal({ project, onClose }: ProjectModalProps) {
  const [copiedKey, setCopiedKey] = useState<string | null>(null)

  const copyToClipboard = (text: string, key: string) => {
    if (typeof window !== 'undefined' && navigator?.clipboard?.writeText) {
      navigator.clipboard.writeText(text)
      setCopiedKey(key)
      setTimeout(() => setCopiedKey(null), 2000)
    }
  }

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
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="inline-flex items-center gap-1.5 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 font-mono text-xs font-medium text-primary">
                      <Cpu className="h-3 w-3" />
                      {project.category}
                    </span>
                    {project.domain && (
                      <span className="inline-flex items-center gap-1.5 rounded-full border border-border/80 bg-secondary/60 px-2.5 py-1 font-mono text-[11px] font-medium text-muted-foreground">
                        <Sparkles className="h-3 w-3 text-primary" />
                        {project.domain}
                      </span>
                    )}
                  </div>
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
                    Architecture Overview
                  </div>
                  <p className="mt-2 text-xs sm:text-sm text-foreground/90 leading-relaxed">
                    {project.architecture}
                  </p>
                </div>
              )}

              {/* Pre-seeded Demo Accounts */}
              {project.demoAccounts && project.demoAccounts.length > 0 && (
                <div className="mt-5 rounded-xl border border-emerald-500/25 bg-emerald-500/5 p-4 sm:p-5">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-3">
                    <div className="flex items-center gap-2 font-mono text-xs font-semibold text-emerald-500">
                      <UserCheck className="h-4 w-4" />
                      Pre-seeded Demo Accounts (Instant Login)
                    </div>
                    <span className="font-mono text-[10px] text-muted-foreground">
                      Click credential to copy
                    </span>
                  </div>
                  <div className="grid gap-2.5 sm:grid-cols-3">
                    {project.demoAccounts.map((account) => {
                      const emailKey = `${account.role}-email`
                      const passKey = `${account.role}-pass`
                      const isEmailCopied = copiedKey === emailKey
                      const isPassCopied = copiedKey === passKey

                      return (
                        <div
                          key={account.role}
                          className="rounded-xl border border-border/70 bg-card/90 p-3 shadow-xs space-y-2 backdrop-blur-sm"
                        >
                          <div className="flex items-center justify-between">
                            <span className="rounded-md border border-primary/30 bg-primary/10 px-2 py-0.5 font-mono text-[10px] font-bold text-primary uppercase tracking-wider">
                              {account.role}
                            </span>
                          </div>

                          <div className="space-y-1.5 font-mono text-xs">
                            <div>
                              <div className="text-[10px] text-muted-foreground uppercase font-sans">
                                Email
                              </div>
                              <button
                                type="button"
                                onClick={() => copyToClipboard(account.email, emailKey)}
                                title="Click to copy email"
                                className="group flex w-full items-center justify-between rounded border border-border/40 bg-secondary/30 px-2 py-1 text-left text-muted-foreground transition-colors hover:border-primary/40 hover:bg-secondary/70 hover:text-foreground"
                              >
                                <span className="truncate text-[11px] select-all">{account.email}</span>
                                {isEmailCopied ? (
                                  <Check className="h-3 w-3 shrink-0 text-emerald-500" />
                                ) : (
                                  <Copy className="h-3 w-3 shrink-0 opacity-40 group-hover:opacity-100" />
                                )}
                              </button>
                            </div>

                            <div>
                              <div className="text-[10px] text-muted-foreground uppercase font-sans">
                                Password
                              </div>
                              <button
                                type="button"
                                onClick={() => copyToClipboard(account.password, passKey)}
                                title="Click to copy password"
                                className="group flex w-full items-center justify-between rounded border border-border/40 bg-secondary/30 px-2 py-1 text-left text-muted-foreground transition-colors hover:border-primary/40 hover:bg-secondary/70 hover:text-foreground"
                              >
                                <span className="truncate text-[11px] font-semibold text-foreground/80 select-all">
                                  {account.password}
                                </span>
                                {isPassCopied ? (
                                  <Check className="h-3 w-3 shrink-0 text-emerald-500" />
                                ) : (
                                  <Copy className="h-3 w-3 shrink-0 opacity-40 group-hover:opacity-100" />
                                )}
                              </button>
                            </div>
                          </div>
                        </div>
                      )
                    })}
                  </div>
                </div>
              )}

              {/* Engineering Patterns */}
              {project.engineeringPatterns && project.engineeringPatterns.length > 0 && (
                <div className="mt-5">
                  <h4 className="font-mono text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                    Architecture & Engineering Patterns
                  </h4>
                  <div className="mt-3 grid gap-2.5 sm:grid-cols-2">
                    {project.engineeringPatterns.map((pat, idx) => (
                      <div
                        key={idx}
                        className="rounded-xl border border-border/70 bg-secondary/30 p-3.5 backdrop-blur-sm"
                      >
                        <div className="flex items-center gap-1.5 font-mono text-xs font-semibold text-primary">
                          <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                          {pat.label}
                        </div>
                        <p className="mt-1 text-xs text-muted-foreground leading-relaxed">
                          {pat.detail}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Key Features */}
              {project.features && project.features.length > 0 && (
                <div className="mt-5">
                  <h4 className="font-mono text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                    Key Features & Technical Implementation
                  </h4>
                  <ul className="mt-3 grid gap-2.5 sm:grid-cols-1">
                    {project.features.map((feat, idx) => {
                      const colonIndex = feat.indexOf(':')
                      const hasPrefix = colonIndex > 0 && colonIndex < 60
                      const prefix = hasPrefix ? feat.slice(0, colonIndex + 1) : ''
                      const rest = hasPrefix ? feat.slice(colonIndex + 1) : feat

                      return (
                        <li
                          key={idx}
                          className="flex items-start gap-2.5 text-xs sm:text-sm text-foreground/90 leading-relaxed"
                        >
                          <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                          <span>
                            {hasPrefix ? (
                              <>
                                <strong className="font-semibold text-foreground">
                                  {prefix}
                                </strong>
                                {rest}
                              </>
                            ) : (
                              feat
                            )}
                          </span>
                        </li>
                      )
                    })}
                  </ul>
                </div>
              )}

              {/* Categorized Tech Stack or Stack Tags */}
              {project.techCategories && project.techCategories.length > 0 ? (
                <div className="mt-5">
                  <h4 className="font-mono text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                    Core Tech Stack by Layer
                  </h4>
                  <div className="mt-3 grid gap-3 sm:grid-cols-2">
                    {project.techCategories.map((group, idx) => (
                      <div
                        key={idx}
                        className="rounded-xl border border-border/60 bg-secondary/20 p-3"
                      >
                        <div className="font-mono text-[11px] font-semibold text-primary">
                          {group.category}
                        </div>
                        <div className="mt-2 flex flex-wrap gap-1.5">
                          {group.items.map((item) => (
                            <span
                              key={item}
                              className="rounded-md border border-border/80 bg-card/80 px-2 py-0.5 font-mono text-[10px] text-foreground/85"
                            >
                              {item}
                            </span>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ) : (
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
              )}

              {/* Actions */}
              <div className="mt-6 flex flex-col sm:flex-row flex-wrap items-stretch sm:items-center gap-3 border-t border-border pt-5">
                {project.frontendRepo ? (
                  <>
                    {project.demoUrl && (
                      <Button
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
                    <Button
                      variant="outline"
                      nativeButton={false}
                      render={
                        <a
                          href={project.frontendRepo}
                          target="_blank"
                          rel="noopener noreferrer"
                        />
                      }
                      className="w-full sm:w-auto justify-center gap-2"
                    >
                      <GithubIcon className="h-4 w-4" />
                      Frontend Repo
                    </Button>
                    {project.backendRepo && (
                      <Button
                        variant="outline"
                        nativeButton={false}
                        render={
                          <a
                            href={project.backendRepo}
                            target="_blank"
                            rel="noopener noreferrer"
                          />
                        }
                        className="w-full sm:w-auto justify-center gap-2"
                      >
                        <GithubIcon className="h-4 w-4" />
                        Backend Repo
                      </Button>
                    )}
                  </>
                ) : (
                  <>
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
                      GitHub Profile
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
                  </>
                )}
                {project.apiDocsUrl && (
                  <Button
                    variant="outline"
                    nativeButton={false}
                    render={
                      <a
                        href={project.apiDocsUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      />
                    }
                    className="w-full sm:w-auto justify-center gap-2"
                  >
                    <FileCode className="h-4 w-4 text-primary" />
                    API / Swagger Docs
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
