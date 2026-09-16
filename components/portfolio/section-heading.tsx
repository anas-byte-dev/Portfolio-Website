'use client'

import { useEffect, useState } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import { cn } from '@/lib/utils'

export function SectionHeading({
  index,
  title,
  subtitle,
  className,
}: {
  index: string
  title: string
  subtitle?: string
  className?: string
}) {
  const [mounted, setMounted] = useState(false)
  const shouldReduceMotion = useReducedMotion()

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return (
      <div className={cn('mb-8 sm:mb-12 max-w-2xl', className)}>
        <span className="font-mono text-sm text-primary">{index}</span>
        <h2 className="mt-2 text-balance text-3xl font-bold tracking-tight sm:text-4xl">
          {title}
        </h2>
        {subtitle ? (
          <p className="mt-3 text-pretty leading-relaxed text-muted-foreground">
            {subtitle}
          </p>
        ) : null}
      </div>
    )
  }

  const offset = shouldReduceMotion ? 0 : 20

  return (
    <div className={cn('mb-8 sm:mb-12 max-w-2xl', className)}>
      {/* Line 1: Section Index */}
      <motion.span
        initial={{ opacity: 0, y: offset }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-40px' }}
        transition={{ duration: 0.45, delay: 0.08, ease: 'easeOut' }}
        className="inline-block font-mono text-sm font-semibold tracking-wider text-primary"
      >
        {index}
      </motion.span>

      {/* Line 2: Title */}
      <motion.h2
        initial={{ opacity: 0, y: offset }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-40px' }}
        transition={{ duration: 0.5, delay: 0.2, ease: 'easeOut' }}
        className="mt-2 text-balance text-3xl font-bold tracking-tight sm:text-4xl"
      >
        {title}
      </motion.h2>

      {/* Line 3: Subtitle */}
      {subtitle ? (
        <motion.p
          initial={{ opacity: 0, y: offset }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.55, delay: 0.32, ease: 'easeOut' }}
          className="mt-3 text-pretty leading-relaxed text-muted-foreground"
        >
          {subtitle}
        </motion.p>
      ) : null}
    </div>
  )
}
