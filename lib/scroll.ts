/**
 * High-precision smooth scroll controller with easeInOutCubic momentum easing.
 * Provides a cinematic, visible downwards/upwards camera glide across sections.
 */
export function scrollToSection(targetIdOrHref: string) {
  if (typeof window === 'undefined') return

  const id = targetIdOrHref.startsWith('#')
    ? targetIdOrHref.slice(1)
    : targetIdOrHref

  const element = document.getElementById(id)
  if (!element) {
    if (id === 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
    return
  }

  // easeInOutCubic: gentle acceleration, visible travel in direction, gentle cushion stop
  const easeInOutCubic = (t: number) =>
    t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2

  // If Lenis is active, drive the scroll through Lenis for maximum smoothness
  if ((window as any).__lenis) {
    const lenis = (window as any).__lenis
    lenis.scrollTo(element, {
      offset: -70,
      duration: 1.65,
      easing: easeInOutCubic,
    })
    try {
      history.replaceState(null, '', `#${id}`)
    } catch {
      // ignore
    }
    return
  }

  // Fallback standalone RAF animation
  const startY = window.scrollY
  const headerOffset = 70
  const elementY = element.getBoundingClientRect().top + window.scrollY
  const targetY = Math.max(0, elementY - headerOffset)
  const distance = targetY - startY

  if (Math.abs(distance) < 5) return

  const duration = Math.min(1950, Math.max(1200, Math.abs(distance) * 0.6))
  const startTime = performance.now()

  if ((window as any).__portfolioScrollAnim) {
    cancelAnimationFrame((window as any).__portfolioScrollAnim)
  }

  const step = (currentTime: number) => {
    const elapsed = currentTime - startTime
    const progress = Math.min(1, elapsed / duration)
    const easedProgress = easeInOutCubic(progress)

    window.scrollTo({
      top: startY + distance * easedProgress,
      behavior: 'instant' as ScrollBehavior,
    })

    if (progress < 1) {
      ;(window as any).__portfolioScrollAnim = requestAnimationFrame(step)
    } else {
      ;(window as any).__portfolioScrollAnim = null
      try {
        history.replaceState(null, '', `#${id}`)
      } catch {
        // ignore
      }
    }
  }

  ;(window as any).__portfolioScrollAnim = requestAnimationFrame(step)
}
