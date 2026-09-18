'use client'

import { useCallback, useEffect, useState } from 'react'
import { Moon, Sun } from 'lucide-react'
import { useTheme } from 'nextra-theme-docs'
import { useMounted } from 'nextra/hooks'
import { cn } from '@/lib/utils'

export const FULL_WIDTH_STORAGE_KEY = 'ecosystem-docs-full-width'

function applyFullWidth(enabled: boolean) {
  const root = document.documentElement
  if (!enabled) {
    root.removeAttribute('data-full-width')
    root.style.removeProperty('--nextra-content-width')
    return
  }
  root.setAttribute('data-full-width', 'true')
  root.style.setProperty('--nextra-content-width', `${root.clientWidth}px`)
}

const controlClass =
  'inline-flex h-7 shrink-0 items-center justify-center rounded-md border border-gray-200 bg-white/80 text-xs font-medium text-gray-700 transition-colors hover:bg-gray-100 dark:border-neutral-700 dark:bg-neutral-900/80 dark:text-gray-200 dark:hover:bg-neutral-800 aria-pressed:border-primary/40 aria-pressed:bg-primary/10 aria-pressed:text-primary'

export function NavbarControls() {
  const mounted = useMounted()
  const { resolvedTheme, setTheme } = useTheme()
  const [full, setFull] = useState(false)
  const [prefLoaded, setPrefLoaded] = useState(false)
  const isLight = mounted && resolvedTheme === 'light'

  useEffect(() => {
    try {
      setFull(window.localStorage.getItem(FULL_WIDTH_STORAGE_KEY) === '1')
    } catch {
      // Private mode / blocked storage should not prevent the control from working.
    }
    setPrefLoaded(true)
  }, [])

  const syncFullWidth = useCallback(() => {
    applyFullWidth(full)
  }, [full])

  useEffect(() => {
    if (!prefLoaded) return
    syncFullWidth()
    try {
      window.localStorage.setItem(FULL_WIDTH_STORAGE_KEY, full ? '1' : '0')
    } catch {
      // Ignore persistence failures; the in-session toggle still applies.
    }
    if (!full) return
    window.addEventListener('resize', syncFullWidth)
    return () => window.removeEventListener('resize', syncFullWidth)
  }, [full, prefLoaded, syncFullWidth])

  return (
    <div className="nextra-navbar-controls flex items-center gap-2">
      <button
        type="button"
        className={cn(controlClass, 'w-7')}
        aria-pressed={isLight}
        aria-label={isLight ? 'Switch to dark theme' : 'Switch to light theme'}
        title={isLight ? 'Switch to dark theme' : 'Switch to light theme'}
        onClick={() => setTheme(isLight ? 'dark' : 'light')}
      >
        {isLight ? (
          <Moon className="size-4" strokeWidth={2} aria-hidden />
        ) : (
          <Sun className="size-4" strokeWidth={2} aria-hidden />
        )}
      </button>
      <button
        type="button"
        className={cn(controlClass, 'px-2')}
        aria-pressed={mounted && full}
        aria-label={full ? 'Restore default content width' : 'Expand layout to screen width'}
        title={full ? 'Narrow to default width' : 'Full screen width'}
        onClick={() => setFull((value) => !value)}
      >
        {full ? 'Narrow' : 'Full'}
      </button>
    </div>
  )
}
