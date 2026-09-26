'use client'

import { useEffect, useState } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'

export function AmbientBackground() {
  const [isClient, setIsClient] = useState(false)
  const mouseX = useMotionValue(-1000)
  const mouseY = useMotionValue(-1000)

  const smoothX = useSpring(mouseX, { damping: 40, stiffness: 200 })
  const smoothY = useSpring(mouseY, { damping: 40, stiffness: 200 })

  useEffect(() => {
    if (typeof window === 'undefined') return
    // Only run cursor spotlight physics on fine-pointer desktop devices
    if (!window.matchMedia('(pointer: fine)').matches) return

    setIsClient(true)
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX)
      mouseY.set(e.clientY)
    }

    window.addEventListener('mousemove', handleMouseMove, { passive: true })
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [mouseX, mouseY])

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden transform-gpu"
    >
      {/* Dynamic Animated Ambient Orbs */}
      <motion.div
        animate={{
          scale: [1, 1.15, 1],
          x: [0, 30, 0],
          y: [0, -20, 0],
          opacity: [0.12, 0.22, 0.12],
        }}
        transition={{
          duration: 16,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="absolute -top-24 left-1/4 h-[300px] w-[300px] sm:h-[480px] sm:w-[480px] -translate-x-1/2 rounded-full bg-primary/20 blur-[70px] sm:blur-[110px] will-change-transform"
      />

      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          x: [0, -35, 0],
          y: [0, 30, 0],
          opacity: [0.08, 0.18, 0.08],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 2,
        }}
        className="absolute top-1/2 right-0 sm:-right-16 h-[320px] w-[320px] sm:h-[500px] sm:w-[500px] rounded-full bg-teal-500/18 blur-[80px] sm:blur-[120px] will-change-transform"
      />

      <motion.div
        animate={{
          scale: [1, 1.1, 1],
          x: [0, 25, 0],
          y: [0, 35, 0],
          opacity: [0.06, 0.14, 0.06],
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 4,
        }}
        className="absolute -bottom-24 left-1/3 h-[280px] w-[280px] sm:h-[450px] sm:w-[450px] rounded-full bg-emerald-600/18 blur-[70px] sm:blur-[110px] will-change-transform"
      />

      {/* Interactive Cursor Spotlight */}
      {isClient && (
        <motion.div
          style={{
            x: smoothX,
            y: smoothY,
            translateX: '-50%',
            translateY: '-50%',
          }}
          className="absolute h-[380px] w-[380px] rounded-full bg-primary/8 blur-[80px]"
        />
      )}

      {/* Subtle Tech Dot Grid with Vignette Mask */}
      <div className="absolute inset-0 text-foreground/[0.04] dot-grid [mask-image:radial-gradient(ellipse_80%_80%_at_50%_50%,#000_50%,transparent_100%)]" />
    </div>
  )
}
