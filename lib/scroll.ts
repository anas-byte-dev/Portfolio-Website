/**
 * Fast, high-precision smooth scroll controller with zero lag.
 * Instantly glides directly to target sections without sluggish delays or overshoot.
 */
export function scrollToSection(targetIdOrHref: string) {
  if (typeof window === 'undefined') return

  const id = targetIdOrHref.startsWith('#')
    ? targetIdOrHref.slice(1)
    : targetIdOrHref

  if (id === 'home') {
    if ((window as any).__lenis) {
      ;(window as any).__lenis.scrollTo(0, { duration: 0.4 })
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
    try {
      history.replaceState(null, '', '#home')
    } catch {}
    return
  }

  const element = document.getElementById(id)
  if (!element) return

  const isMobile = window.innerWidth < 768
  // 64px is standard header height (h-16); offset ensures the section title & badges are fully visible
  const headerOffset = isMobile ? 64 : 76

  // If Lenis is active, drive through Lenis with fast, snappy duration
  if ((window as any).__lenis) {
    const lenis = (window as any).__lenis
    lenis.scrollTo(element, {
      offset: -headerOffset,
      duration: isMobile ? 0.45 : 0.55,
      easing: (t: number) => (t === 1 ? 1 : 1 - Math.pow(2, -10 * t)),
    })
    try {
      history.replaceState(null, '', `#${id}`)
    } catch {}
    return
  }

  // Fast native smooth scroll with headerOffset accounted for
  const elementY = element.getBoundingClientRect().top + window.scrollY
  const targetY = Math.max(0, elementY - headerOffset)

  window.scrollTo({
    top: targetY,
    behavior: 'smooth',
  })

  try {
    history.replaceState(null, '', `#${id}`)
  } catch {}
}
