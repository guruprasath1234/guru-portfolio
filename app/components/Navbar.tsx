'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import { useTheme } from './ThemeProvider'

const links = ['Experience', 'Skills', 'Projects', 'Education', 'Contact']

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [showTooltip, setShowTooltip] = useState(false)
  const { mode, toggle } = useTheme()

  // Show tooltip on first load, hide after 6s or on click
  useEffect(() => {
    const dismissed = sessionStorage.getItem('tooltip-dismissed')
    if (!dismissed) {
      const showTimer = setTimeout(() => setShowTooltip(true), 800)
      return () => clearTimeout(showTimer)
    }
  }, [])

  useEffect(() => {
    if (showTooltip) {
      const hideTimer = setTimeout(() => {
        setShowTooltip(false)
        sessionStorage.setItem('tooltip-dismissed', 'true')
      }, 6000)
      return () => clearTimeout(hideTimer)
    }
  }, [showTooltip])

  const dismissTooltip = () => {
    setShowTooltip(false)
    sessionStorage.setItem('tooltip-dismissed', 'true')
  }

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
          scrolled ? 'bg-neu-yellow border-b-[3px] border-neu-black' : 'bg-transparent'
        }`}
      >
        <div className="flex items-center justify-between px-6 h-[60px]">
          <div className="font-display font-black text-lg tracking-tight">
            GM<span className="text-neu-red">/</span>
          </div>

          {/* Desktop: Toggle + links */}
          <div className="hidden md:flex items-center gap-0">
            {/* Theme Toggle — first */}
            <div className="mr-4 flex items-center gap-2 relative">
              <button
                aria-label="Toggle color theme"
                className="theme-toggle"
                data-active={mode === 'color'}
                onClick={() => { toggle(); dismissTooltip(); }}
              >
                <span className="theme-toggle-icon theme-toggle-icon--mono">◐</span>
                <span className="theme-toggle-icon theme-toggle-icon--color">✦</span>
                <div className="theme-toggle-knob" />
              </button>
              <span className="text-[9px] font-bold uppercase tracking-widest opacity-50 hidden lg:block">
                {mode === 'mono' ? 'B/W' : 'CLR'}
              </span>

              {/* Tooltip arrow pointing to toggle */}
              {showTooltip && (
                <div
                  className="tooltip-arrow-container"
                  onClick={dismissTooltip}
                >
                  <div className="tooltip-bubble">
                    Make the portfolio colourful! ✨
                  </div>
                  <div className="tooltip-arrow-pointer">↑</div>
                </div>
              )}
            </div>

            <ul className="flex">
              {links.map((link, i) => (
                <li key={link}>
                  <Link
                    href={`#${link.toLowerCase()}`}
                    className="block px-4 py-2 text-xs font-bold uppercase tracking-widest border-[3px] border-neu-black -ml-[3px] hover:bg-neu-black hover:text-neu-yellow transition-colors"
                    style={{ borderLeft: i === 0 ? '3px solid #0D0D0D' : undefined }}
                  >
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Mobile: toggle + hamburger */}
          <div className="md:hidden flex items-center gap-3 relative">
            <div className="relative">
              <button
                aria-label="Toggle color theme"
                className="theme-toggle"
                data-active={mode === 'color'}
                onClick={() => { toggle(); dismissTooltip(); }}
              >
                <span className="theme-toggle-icon theme-toggle-icon--mono">◐</span>
                <span className="theme-toggle-icon theme-toggle-icon--color">✦</span>
                <div className="theme-toggle-knob" />
              </button>

              {/* Mobile tooltip */}
              {showTooltip && (
                <div
                  className="tooltip-arrow-container tooltip-arrow-container--mobile"
                  onClick={dismissTooltip}
                >
                  <div className="tooltip-bubble">
                    Make it colourful! ✨
                  </div>
                  <div className="tooltip-arrow-pointer">↑</div>
                </div>
              )}
            </div>

            <button
              aria-label="Toggle menu"
              className="w-10 h-10 border-[3px] border-neu-black bg-neu-yellow flex flex-col justify-center items-center gap-1 neu-shadow"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              <span className={`block w-5 h-[3px] bg-neu-black transition-all ${menuOpen ? 'rotate-45 translate-y-[7px]' : ''}`} />
              <span className={`block w-5 h-[3px] bg-neu-black transition-all ${menuOpen ? 'opacity-0' : ''}`} />
              <span className={`block w-5 h-[3px] bg-neu-black transition-all ${menuOpen ? '-rotate-45 -translate-y-[7px]' : ''}`} />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="fixed inset-0 z-40 bg-neu-yellow pt-[60px] flex flex-col border-b-[3px] border-neu-black">
          {links.map((link) => (
            <Link
              key={link}
              href={`#${link.toLowerCase()}`}
              className="text-3xl font-display font-black px-8 py-5 border-b-[3px] border-neu-black hover:bg-neu-black hover:text-neu-yellow transition-colors"
              onClick={() => setMenuOpen(false)}
            >
              {link}
            </Link>
          ))}
        </div>
      )}
    </>
  )
}
