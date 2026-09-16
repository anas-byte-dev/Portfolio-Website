'use client'

import React, { useEffect, useState } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import { cn } from '@/lib/utils'

interface RevealProps {
  children: React.ReactNode
  className?: string
  delay?: number
  direction?: 'up' | 'down' | 'left' | 'right' | 'none'
  duration?: number
}

export function Reveal({
  children,
  className,
  delay = 0,
  direction = 'up',
  duration = 0.5,
}: RevealProps) {
  const [mounted, setMounted] = useState(false)
  const shouldReduceMotion = useReducedMotion()

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return <div className={cn(className)}>{children}</div>
  }

  const offset = shouldReduceMotion ? 0 : 24
  let x = 0
  let y = 0
  if (direction === 'up') y = offset
  if (direction === 'down') y = -offset
  if (direction === 'left') x = offset
  if (direction === 'right') x = -offset

  return (
    <motion.div
      initial={{
        opacity: shouldReduceMotion ? 1 : 0,
        x,
        y,
      }}
      whileInView={{
        opacity: 1,
        x: 0,
        y: 0,
      }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{
        duration: shouldReduceMotion ? 0 : duration,
        delay: shouldReduceMotion ? 0 : delay / 1000,
        ease: [0.25, 0.1, 0.25, 1],
      }}
      className={cn(className)}
    >
      {children}
    </motion.div>
  )
}
