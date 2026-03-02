import { data } from '../data'

export default function Contact() {
  return (
    <section id="contact" className="border-b-[3px] border-neu-black">
      <div className="flex items-center gap-4 px-8 py-4 bg-neu-black border-b-[3px] border-neu-black">
        <span className="font-display font-black text-neu-yellow text-xs tracking-widest uppercase bg-neu-orange px-2 py-1">06</span>
        <span className="font-display font-black text-white text-sm uppercase tracking-widest">Connect</span>
        <div className="flex-1 border-t-[2px] border-dashed border-white/20" />
        <span className="text-white/40 text-xs font-mono">// let's talk</span>
      </div>

      {/* Big CTA */}
      <div className="bg-neu-blue text-white p-12 md:p-20 flex flex-col items-center text-center border-b-[3px] border-neu-black relative overflow-hidden">
        <div
          className="absolute inset-0 font-display font-black text-[20rem] leading-none flex items-center justify-center select-none pointer-events-none"
          style={{ color: 'rgba(255,255,255,0.03)' }}
        >
          HI
        </div>
        <div className="section-label bg-neu-yellow text-neu-black mb-6">Let's Work Together</div>
        <h2
          className="font-display font-black leading-none tracking-tight mb-6"
          style={{ fontSize: 'clamp(2.5rem, 7vw, 6rem)' }}
        >
          Got a project<br />in mind?
        </h2>
        <p className="font-mono text-sm opacity-70 max-w-md mb-10 leading-relaxed">
          I'm available for full-time roles, freelance work, and interesting collaborations. Let's build something amazing.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <a
            href={`mailto:${data.email}`}
            className="neu-btn bg-neu-yellow text-neu-black px-8 py-4"
            style={{ border: '3px solid white', boxShadow: '4px 4px 0 white' }}
          >
            ✉ Email Me
          </a>
          <a
            href={`tel:${data.phone}`}
            className="neu-btn bg-white text-neu-black px-8 py-4"
            style={{ border: '3px solid white', boxShadow: '4px 4px 0 rgba(255,255,255,0.5)' }}
          >
            📞 Call Me
          </a>
        </div>
      </div>

      {/* Social links grid — 3 cards now */}
      <div className="grid grid-cols-1 sm:grid-cols-3">
        {[
          {
            label: 'LinkedIn',
            handle: 'guru-prasath-2552b4248',
            href: data.links.linkedin,
            icon: 'in',
            hoverBg: 'hover:bg-neu-blue hover:text-white',
          },
          {
            label: 'GitHub',
            handle: 'guruprasath1234',
            href: data.links.github,
            icon: '⌥',
            hoverBg: 'hover:bg-neu-black hover:text-white',
          },
          {
            label: 'Behance',
            handle: 'guruprasath-m',
            href: data.links.behance,
            icon: 'Be',
            hoverBg: 'hover:bg-neu-red hover:text-white',
          },
        ].map((link) => (
          <a
            key={link.label}
            href={link.href}
            target="_blank"
            rel="noreferrer"
            className={`flex flex-col items-center justify-center p-8 border-r-[3px] border-b-[3px] border-neu-black text-center transition-colors last:border-r-0 group ${link.hoverBg}`}
          >
            <div className="font-display font-black text-2xl mb-3">{link.icon}</div>
            <div className="text-[10px] font-bold uppercase tracking-widest mb-1">{link.label}</div>
            <div className="text-xs opacity-50 group-hover:opacity-80 transition-opacity">{link.handle}</div>
          </a>
        ))}
      </div>

      {/* Resume download bar */}
      {/*
        Place your resume PDF at: public/resume.pdf
        The download attribute triggers a file download instead of opening in browser.
      */}
      <div className="flex flex-col sm:flex-row items-stretch border-b-[3px] border-neu-black">
        <div className="flex-1 bg-neu-yellow px-8 py-6 flex items-center gap-4 border-r-[3px] border-neu-black">
          <div className="font-display font-black text-3xl leading-none">↓</div>
          <div>
            <div className="font-display font-black text-sm uppercase tracking-wider">Download Resume</div>
            <div className="text-[11px] font-mono opacity-60 mt-0.5">Guruprasath_M_Resume.pdf</div>
          </div>
        </div>
        <a
          href="/Resume.pdf"
          download="Guruprasath_M_Resume.pdf"
          className="neu-btn bg-neu-black text-neu-yellow px-10 py-6 text-sm justify-center sm:justify-start"
          style={{ border: '3px solid #0D0D0D', boxShadow: 'none', borderLeft: 'none' }}
        >
          ↓ Download PDF
        </a>
      </div>

      {/* Footer bar */}
      <div className="flex flex-col md:flex-row items-center justify-between px-8 py-5 bg-neu-black text-white">
        <div className="font-display font-black text-neu-yellow tracking-tight mb-2 md:mb-0">GURUPRASATH M</div>
        <div className="text-xs font-mono opacity-40">{data.location} · {data.email}</div>
        <div className="text-xs font-mono opacity-40 mt-2 md:mt-0">© 2026 — Built with Next.js</div>
      </div>
    </section>
  )
}