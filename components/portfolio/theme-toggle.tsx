'use client'

import { useEffect, useState } from 'react'
import { Moon, Sun, Eye } from 'lucide-react'

export type ThemeMode = 'dark' | 'comfort' | 'light'

export function ThemeToggle({ className }: { className?: string }) {
  const [theme, setTheme] = useState<ThemeMode>('dark')
  const [mounted, setMounted] = useState(false)

  const applyTheme = (mode: ThemeMode) => {
    const root = document.documentElement
    root.classList.remove('dark', 'comfort')
    if (mode === 'dark') {
      root.classList.add('dark')
    } else if (mode === 'comfort') {
      root.classList.add('comfort')
    }
    try {
      localStorage.setItem('theme', mode)
    } catch {
      // ignore storage failures
    }
    setTheme(mode)
    window.dispatchEvent(
      new CustomEvent('portfolio-theme-change', { detail: mode }),
    )
  }

  useEffect(() => {
    setMounted(true)
    let stored: string | null = null
    try {
      stored = localStorage.getItem('theme')
    } catch {
      // ignore storage failures
    }
    const initialMode: ThemeMode =
      stored === 'light' || stored === 'comfort' ? stored : 'dark'
    applyTheme(initialMode)

    const handleSync = (e: Event) => {
      const customEvent = e as CustomEvent<ThemeMode>
      if (customEvent.detail) {
        setTheme(customEvent.detail)
      }
    }
    window.addEventListener('portfolio-theme-change', handleSync)
    return () =>
      window.removeEventListener('portfolio-theme-change', handleSync)
  }, [])

  function cycleTheme() {
    const next: ThemeMode =
      theme === 'dark' ? 'comfort' : theme === 'comfort' ? 'light' : 'dark'
    applyTheme(next)
  }

  const tooltipLabel = !mounted
    ? 'Toggle theme'
    : theme === 'dark'
    ? 'Dark Mode (Click for Eye Comfort)'
    : theme === 'comfort'
    ? 'Eye Comfort Mode (Click for Light Mode)'
    : 'Light Mode (Click for Dark Mode)'

  return (
    <button
      type="button"
      onClick={cycleTheme}
      aria-label={tooltipLabel}
      title={tooltipLabel}
      className={`relative inline-flex h-9 w-9 items-center justify-center rounded-lg border border-border bg-card/70 text-foreground transition-all hover:border-primary/50 hover:text-primary active:scale-95 ${
        className || ''
      }`}
    >
      {!mounted ? (
        <Moon className="h-[18px] w-[18px]" />
      ) : theme === 'dark' ? (
        <Moon className="h-[18px] w-[18px] text-primary" />
      ) : theme === 'comfort' ? (
        <div className="relative flex items-center justify-center">
          <Eye className="h-[18px] w-[18px] text-amber-500" />
          <span className="absolute -top-1 -right-1 h-1.5 w-1.5 rounded-full bg-amber-500 animate-pulse" />
        </div>
      ) : (
        <Sun className="h-[18px] w-[18px] text-amber-500" />
      )}
    </button>
  )
}

export function ThemeSegmentedControl() {
  const [theme, setTheme] = useState<ThemeMode>('dark')
  const [mounted, setMounted] = useState(false)

  const applyTheme = (mode: ThemeMode) => {
    const root = document.documentElement
    root.classList.remove('dark', 'comfort')
    if (mode === 'dark') {
      root.classList.add('dark')
    } else if (mode === 'comfort') {
      root.classList.add('comfort')
    }
    try {
      localStorage.setItem('theme', mode)
    } catch {
      // ignore
    }
    setTheme(mode)
    window.dispatchEvent(
      new CustomEvent('portfolio-theme-change', { detail: mode }),
    )
  }

  useEffect(() => {
    setMounted(true)
    let stored: string | null = null
    try {
      stored = localStorage.getItem('theme')
    } catch {
      // ignore
    }
    const initialMode: ThemeMode =
      stored === 'light' || stored === 'comfort' ? stored : 'dark'
    setTheme(initialMode)

    const handleSync = (e: Event) => {
      const customEvent = e as CustomEvent<ThemeMode>
      if (customEvent.detail) {
        setTheme(customEvent.detail)
      }
    }
    window.addEventListener('portfolio-theme-change', handleSync)
    return () =>
      window.removeEventListener('portfolio-theme-change', handleSync)
  }, [])

  if (!mounted) return null

  return (
    <div className="flex w-full items-center justify-between rounded-xl border border-border/80 bg-secondary/40 p-1 font-mono text-xs">
      <button
        type="button"
        onClick={() => applyTheme('dark')}
        className={`flex flex-1 items-center justify-center gap-1.5 rounded-lg py-2 transition-all ${
          theme === 'dark'
            ? 'bg-card text-primary font-semibold shadow-xs'
            : 'text-muted-foreground hover:text-foreground'
        }`}
      >
        <Moon className="h-3.5 w-3.5" />
        <span>Dark</span>
      </button>

      <button
        type="button"
        onClick={() => applyTheme('comfort')}
        className={`flex flex-1 items-center justify-center gap-1.5 rounded-lg py-2 transition-all ${
          theme === 'comfort'
            ? 'bg-amber-500/15 text-amber-600 dark:text-amber-400 font-semibold border border-amber-500/30 shadow-xs'
            : 'text-muted-foreground hover:text-foreground'
        }`}
      >
        <Eye className="h-3.5 w-3.5" />
        <span>Eye Comfort</span>
      </button>

      <button
        type="button"
        onClick={() => applyTheme('light')}
        className={`flex flex-1 items-center justify-center gap-1.5 rounded-lg py-2 transition-all ${
          theme === 'light'
            ? 'bg-card text-primary font-semibold shadow-xs'
            : 'text-muted-foreground hover:text-foreground'
        }`}
      >
        <Sun className="h-3.5 w-3.5" />
        <span>Light</span>
      </button>
    </div>
  )
}

