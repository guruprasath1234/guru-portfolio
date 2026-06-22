'use client'
import { createContext, useContext, useState, useEffect, ReactNode } from 'react'

type ThemeMode = 'mono' | 'color'

interface ThemeContextType {
  mode: ThemeMode
  toggle: () => void
}

const ThemeContext = createContext<ThemeContextType>({
  mode: 'mono',
  toggle: () => {},
})

export function useTheme() {
  return useContext(ThemeContext)
}

export default function ThemeProvider({ children }: { children: ReactNode }) {
  const [mode, setMode] = useState<ThemeMode>('mono')
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    const saved = localStorage.getItem('theme-mode') as ThemeMode | null
    if (saved === 'color' || saved === 'mono') {
      setMode(saved)
    }
    setMounted(true)
  }, [])

  useEffect(() => {
    if (!mounted) return
    localStorage.setItem('theme-mode', mode)
    document.documentElement.setAttribute('data-theme', mode)
  }, [mode, mounted])

  const toggle = () => setMode(m => (m === 'mono' ? 'color' : 'mono'))

  // Set initial attribute for SSR
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', mode)
  }, [])

  return (
    <ThemeContext.Provider value={{ mode, toggle }}>
      {children}
    </ThemeContext.Provider>
  )
}
