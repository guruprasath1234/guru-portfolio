'use client'
import { useEffect, useState } from 'react'
import Image from 'next/image'
import { data } from '../data'

const roles = ['Full Stack Dev', 'React Engineer', 'Next.js Dev', 'UI/UX Enthusiast', 'Problem Solver']

export default function Hero() {
  const [roleIdx, setRoleIdx] = useState(0)
  const [displayed, setDisplayed] = useState('')
  const [typing, setTyping] = useState(true)

  useEffect(() => {
    const current = roles[roleIdx]
    let timeout: ReturnType<typeof setTimeout>

    if (typing) {
      if (displayed.length < current.length) {
        timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 80)
      } else {
        timeout = setTimeout(() => setTyping(false), 1800)
      }
    } else {
      if (displayed.length > 0) {
        timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 40)
      } else {
        setRoleIdx((i) => (i + 1) % roles.length)
        setTyping(true)
      }
    }
    return () => clearTimeout(timeout)
  }, [displayed, typing, roleIdx])

  return (
    <section className="min-h-screen pt-[60px] flex flex-col" id="hero">

      {/* ── Top announcement bar ── */}
      <div className="bg-neu-red text-white text-center text-xs font-bold tracking-widest uppercase py-2 border-b-[3px] border-neu-black">
        🔥 Open to Full-Time Roles &amp; Internships — Feb 2026 onwards
      </div>

      {/* ── Main hero grid — wider right column: 560px ── */}
      <div className="flex-1 grid grid-cols-1 lg:grid-cols-[1fr_560px] border-b-[3px] border-neu-black">

        {/* ──── LEFT: main content ──── */}
        <div className="p-8 md:p-16 flex flex-col justify-center border-b-[3px] lg:border-b-0 lg:border-r-[3px] border-neu-black relative overflow-hidden">

          {/* Decorative BG code symbol */}
          <div
            className="absolute -bottom-10 -right-8 font-display font-black leading-none select-none pointer-events-none"
            style={{ fontSize: '14rem', color: 'rgba(13,13,13,0.04)' }}
          >
            &lt;/&gt;
          </div>

          {/* Available badge */}
          <div className="inline-flex items-center gap-2 mb-6">
            <span className="section-label">Portfolio 2026</span>
            <span className="w-2 h-2 rounded-full bg-neu-green border-2 border-neu-black animate-pulse" />
            <span className="text-xs font-bold uppercase tracking-widest">Available</span>
          </div>

          {/* Name */}
          <h1
            className="font-display font-black leading-none tracking-tight mb-4"
            style={{ fontSize: 'clamp(3rem, 8vw, 7rem)' }}
          >
            {data.name.split(' ')[0]}<br />
            {data.name.split(' ')[1]}{' '}
            <span className="text-neu-blue">{data.name.split(' ')[2]}</span>
          </h1>

          {/* Typewriter */}
          <div className="flex items-center gap-3 mb-8">
            <span className="text-lg font-bold font-mono opacity-60">→</span>
            <span className="text-xl font-bold font-mono min-h-[2rem]">
              {displayed}
              <span className="blink text-neu-blue">|</span>
            </span>
          </div>

          {/* Tagline */}
          <p className="font-mono text-sm leading-relaxed opacity-70 max-w-lg mb-10">
            {data.tagline} Currently interning at Gleamator Technologies, Bangalore. Building cool things since 2022.
          </p>

          {/* CTA buttons */}
          <div className="flex flex-wrap gap-3">
            <a href="#projects" className="neu-btn bg-neu-blue text-white px-6 py-3 text-sm">
              View Projects ↗
            </a>
            <a href={`mailto:${data.email}`} className="neu-btn bg-neu-yellow text-neu-black px-6 py-3 text-sm">
              Hire Me ✉
            </a>
            <a href={data.links.github} target="_blank" rel="noreferrer" className="neu-btn bg-white text-neu-black px-6 py-3 text-sm">
              Github ↗
            </a>
            {/* Place resume at: public/resume.pdf */}
            <a
              href="/resume.pdf"
              download="Guruprasath_M_Resume.pdf"
              className="neu-btn bg-neu-green text-white px-6 py-3 text-sm"
            >
              ↓ Resume
            </a>
          </div>
        </div>

        {/* ──── RIGHT: Photo + Stats — wider & taller ──── */}
        <div className="flex flex-col">

          {/* ── PHOTO BLOCK — taller ── */}
          <div
            className="relative border-b-[3px] border-neu-black overflow-hidden bg-neu-yellow"
            style={{ minHeight: '440px' }}
          >
            {/* Diagonal stripes background */}
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                backgroundImage:
                  'repeating-linear-gradient(45deg, transparent, transparent 18px, rgba(13,13,13,0.07) 18px, rgba(13,13,13,0.07) 20px)',
              }}
            />

            {/* Decorative corner squares */}
            <div className="absolute top-5 left-5 w-10 h-10 bg-neu-red border-[3px] border-neu-black z-10" />
            <div className="absolute top-5 right-5 w-10 h-10 bg-neu-blue border-[3px] border-neu-black z-10" />
            <div className="absolute bottom-5 left-5 w-10 h-10 bg-neu-green border-[3px] border-neu-black z-10" />

            {/* GM monogram badge */}
            <div
              className="absolute bottom-5 right-5 z-10 bg-neu-black text-neu-yellow font-display font-black text-sm px-4 py-2 border-[3px] border-neu-black"
              style={{ boxShadow: '4px 4px 0 #FFE500' }}
            >
              GM/
            </div>

            {/* Dot grid overlay */}
            <div
              className="absolute inset-0 pointer-events-none z-0"
              style={{
                backgroundImage: 'radial-gradient(circle, rgba(13,13,13,0.15) 1px, transparent 1px)',
                backgroundSize: '20px 20px',
              }}
            />

            {/* ── THE PHOTO ── */}
            <div className="relative z-10 flex items-end justify-center h-full pt-12">
              <div
                className="relative"
                style={{ filter: 'drop-shadow(10px 10px 0px #0D0D0D)' }}
              >
                {/* Stacked offset rectangles for depth */}
                <div
                  className="absolute bg-neu-blue border-[3px] border-neu-black"
                  style={{ inset: 0, transform: 'translate(14px, 14px)', zIndex: 0 }}
                />
                <div
                  className="absolute bg-neu-red border-[3px] border-neu-black"
                  style={{ inset: 0, transform: 'translate(7px, 7px)', zIndex: 1 }}
                />

                {/* Photo — larger size */}
                <div
                  className="relative border-[3px] border-neu-black overflow-hidden bg-white"
                  style={{ width: 280, height: 340, zIndex: 2 }}
                >
                  <Image
                    src="/profile.jpg.jpeg"
                    alt="Guruprasath M"
                    fill
                    className="object-cover object-top"
                    priority
                  />

                  {/* Fallback placeholder */}
                  <div
                    className="absolute inset-0 flex flex-col items-center justify-center bg-white/90 text-neu-black font-display font-black text-4xl select-none"
                    style={{ display: 'none' }}
                  >
                    GM
                    <span className="text-xs font-mono font-normal mt-2 opacity-50">Add profile.jpg</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Name tag floating bottom-left */}
            <div
              className="absolute bottom-6 left-20 z-20 bg-white border-[3px] border-neu-black px-4 py-2"
              style={{ boxShadow: '5px 5px 0 #0D0D0D' }}
            >
              <div className="font-display font-black text-sm uppercase tracking-wider leading-tight">
                Guruprasath M
              </div>
              <div className="text-[10px] font-mono opacity-50 uppercase tracking-widest mt-0.5">Full Stack Dev</div>
            </div>
          </div>

          {/* ── STAT CARDS — bigger padding ── */}
          <StatCard
            label="Current Role"
            value="Full Stack Dev Intern"
            sub="@ Gleamator Technologies"
            bg="bg-white"
            icon="💼"
          />
          <StatCard
            label="Education"
            value="B.E CSE · CGPA 7.486"
            sub="Sri Sairam College, Bangalore"
            bg="bg-neu-blue text-white"
            icon="🎓"
          />
          <StatCard
            label="Coding & Recognition"
            value="700+ Problems · SIH Grand Finalist"
            sub="SkillRack · HackerRank · SIH 2024"
            bg="bg-neu-red text-white"
            icon="🏆"
          />

          {/* ── Resume download strip ── */}
          <a
            href="/resume.pdf"
            download="Guruprasath_M_Resume.pdf"
            className="flex items-center justify-between px-7 py-5 bg-neu-green text-white border-t-[3px] border-b-[3px] border-neu-black group transition-colors duration-150 hover:bg-neu-black"
          >
            <div>
              <div className="font-display font-black text-sm uppercase tracking-widest leading-tight">
                ↓ Download Resume
              </div>
              <div className="text-[11px] font-mono opacity-70 mt-1">Guruprasath_M_Resume.pdf</div>
            </div>
            <div
              className="w-11 h-11 border-[3px] border-white flex items-center justify-center font-black text-lg flex-shrink-0 group-hover:bg-neu-yellow group-hover:text-neu-black group-hover:border-neu-yellow transition-all duration-150"
            >
              ↓
            </div>
          </a>

          {/* Language strip */}
          <div className="flex border-t-[3px] border-neu-black">
            {data.languages.map((lang, i) => (
              <div
                key={lang}
                className={`flex-1 py-4 px-2 text-center border-r-[3px] border-neu-black last:border-r-0 ${
                  i % 2 === 0 ? 'bg-neu-yellow' : 'bg-white'
                }`}
              >
                <div className="text-[10px] font-bold uppercase tracking-widest opacity-70">{lang}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Marquee strip ── */}
      <div className="overflow-hidden border-b-[3px] border-neu-black bg-neu-black py-3">
        <div
          className="marquee-track whitespace-nowrap text-neu-yellow font-display font-bold text-sm uppercase tracking-widest"
          style={{ animationDuration: '30s' }}
        >
          {Array(8)
            .fill(
              'React.js ✦ Next.js ✦ TypeScript ✦ Node.js ✦ MongoDB ✦ Figma ✦ AWS ✦ Docker ✦ Web3 ✦ REST API ✦ JWT ✦ Git ✦ Vercel ✦ MySQL ✦ Nest.js ✦ '
            )
            .join('')}
        </div>
      </div>
    </section>
  )
}

function StatCard({
  label,
  value,
  sub,
  bg,
  icon,
}: {
  label: string
  value: string
  sub: string
  bg: string
  icon: string
}) {
  return (
    <div
      className={`flex items-center gap-5 px-7 py-6 border-b-[3px] border-neu-black ${bg} group transition-all duration-150 hover:-translate-x-1`}
    >
      <div className="text-3xl flex-shrink-0">{icon}</div>
      <div className="flex-1 min-w-0">
        <div className="text-[10px] font-bold uppercase tracking-widest opacity-60 mb-0.5">{label}</div>
        <div className="font-display font-bold text-base leading-tight">{value}</div>
        <div className="text-xs opacity-60 mt-0.5">{sub}</div>
      </div>
    </div>
  )
}
