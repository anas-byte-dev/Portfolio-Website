'use client'

import { useEffect } from 'react'
import Lenis from 'lenis'

export function SmoothScroll({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    // Respect reduced motion
    if (
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches
    ) {
      return
    }

    const isTouchDevice =
      typeof window !== 'undefined' &&
      (window.matchMedia('(pointer: coarse)').matches ||
        'ontouchstart' in window ||
        navigator.maxTouchPoints > 0)

    const lenis = new Lenis({
      duration: isTouchDevice ? 0.7 : 0.85,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1.15,
      touchMultiplier: 1.2,
      syncTouch: false,
      infinite: false,
    })

    ;(window as any).__lenis = lenis

    function raf(time: number) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    const animId = requestAnimationFrame(raf)

    return () => {
      cancelAnimationFrame(animId)
      ;(window as any).__lenis = null
      lenis.destroy()
    }
  }, [])

  return <>{children}</>
}
