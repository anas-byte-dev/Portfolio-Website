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
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
    >
      {/* Dynamic Animated Ambient Orbs */}
      <motion.div
        animate={{
          scale: [1, 1.15, 1],
          x: [0, 40, 0],
          y: [0, -30, 0],
          opacity: [0.12, 0.22, 0.12],
        }}
        transition={{
          duration: 16,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="absolute -top-36 left-1/4 h-[550px] w-[550px] -translate-x-1/2 rounded-full bg-primary/25 blur-[140px]"
      />

      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          x: [0, -50, 0],
          y: [0, 40, 0],
          opacity: [0.08, 0.18, 0.08],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 2,
        }}
        className="absolute top-1/2 -right-20 h-[600px] w-[600px] rounded-full bg-teal-500/20 blur-[160px]"
      />

      <motion.div
        animate={{
          scale: [1, 1.1, 1],
          x: [0, 30, 0],
          y: [0, 50, 0],
          opacity: [0.06, 0.14, 0.06],
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 4,
        }}
        className="absolute -bottom-32 left-1/3 h-[500px] w-[500px] rounded-full bg-emerald-600/20 blur-[150px]"
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
          className="absolute h-[420px] w-[420px] rounded-full bg-primary/8 blur-[100px]"
        />
      )}

      {/* Subtle Tech Dot Grid with Vignette Mask */}
      <div className="absolute inset-0 text-foreground/[0.04] dot-grid [mask-image:radial-gradient(ellipse_80%_80%_at_50%_50%,#000_50%,transparent_100%)]" />
    </div>
  )
}
