'use client'

import { motion } from 'framer-motion'
import { marqueeTech } from '@/lib/portfolio-data'
import { Sparkles } from 'lucide-react'

export function TechMarquee() {
  const items = [...marqueeTech, ...marqueeTech]

  return (
    <div className="relative w-full overflow-hidden border-y border-border/60 bg-card/20 py-4 backdrop-blur-sm">
      {/* Edge Gradients for smooth fading */}
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-8 sm:w-24 bg-gradient-to-r from-background to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-8 sm:w-24 bg-gradient-to-l from-background to-transparent" />

      <motion.div
        aria-hidden="true"
        className="flex w-max gap-8"
        animate={{
          x: ['0%', '-50%'],
        }}
        transition={{
          repeat: Infinity,
          ease: 'linear',
          duration: 35,
        }}
      >
        {items.map((tech, i) => (
          <div
            key={`${tech}-${i}`}
            className="flex items-center gap-2 font-mono text-xs text-muted-foreground transition-colors hover:text-primary"
          >
            <Sparkles className="h-3 w-3 text-primary/70" />
            <span className="font-semibold tracking-wide">{tech}</span>
          </div>
        ))}
      </motion.div>
    </div>
  )
}
