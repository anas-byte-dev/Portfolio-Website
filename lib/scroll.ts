/**
 * Smooth, balanced scroll controller.
 * Delivers a crisp, elegant glide across sections without sluggish delays.
 */
export function scrollToSection(targetIdOrHref: string) {
  if (typeof window === 'undefined') return

  const id = targetIdOrHref.startsWith('#')
    ? targetIdOrHref.slice(1)
    : targetIdOrHref

  if (id === 'home') {
    if ((window as any).__lenis) {
      ;(window as any).__lenis.scrollTo(0, { duration: 0.6 })
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

  // Balanced easeOutCubic curve: smooth travel with graceful deceleration
  const easeOutCubic = (t: number) => 1 - Math.pow(1 - t, 3)

  // If Lenis is active, drive through Lenis with balanced smooth animation
  if ((window as any).__lenis) {
    const lenis = (window as any).__lenis
    lenis.scrollTo(element, {
      offset: -headerOffset,
      duration: isMobile ? 0.6 : 0.75,
      easing: easeOutCubic,
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
