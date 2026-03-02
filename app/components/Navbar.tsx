'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'

const links = ['Skills', 'Projects', 'Experience', 'Education', 'Contact']

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

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

          {/* Desktop links */}
          <ul className="hidden md:flex">
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

          {/* Mobile hamburger */}
          <button
            aria-label="Toggle menu"
            className="md:hidden w-10 h-10 border-[3px] border-neu-black bg-neu-yellow flex flex-col justify-center items-center gap-1 neu-shadow"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span className={`block w-5 h-[3px] bg-neu-black transition-all ${menuOpen ? 'rotate-45 translate-y-[7px]' : ''}`} />
            <span className={`block w-5 h-[3px] bg-neu-black transition-all ${menuOpen ? 'opacity-0' : ''}`} />
            <span className={`block w-5 h-[3px] bg-neu-black transition-all ${menuOpen ? '-rotate-45 -translate-y-[7px]' : ''}`} />
          </button>
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
