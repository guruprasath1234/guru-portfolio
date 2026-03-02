'use client'
import { data } from '../data'

const bgMap: Record<string, string> = {
  blue: 'bg-neu-blue',
  yellow: 'bg-neu-yellow',
  green: 'bg-neu-green',
  red: 'bg-neu-red',
}
const textMap: Record<string, string> = {
  blue: 'text-white',
  yellow: 'text-neu-black',
  green: 'text-white',
  red: 'text-white',
}

export default function Projects() {
  return (
    <section id="projects" className="border-b-[3px] border-neu-black">
      {/* Header */}
      <div className="flex items-center gap-4 px-8 py-4 bg-neu-black border-b-[3px] border-neu-black">
        <span className="font-display font-black text-neu-yellow text-xs tracking-widest uppercase bg-neu-blue px-2 py-1">02</span>
        <span className="font-display font-black text-white text-sm uppercase tracking-widest">Projects</span>
        <div className="flex-1 border-t-[2px] border-dashed border-white/20" />
        <span className="text-white/40 text-xs font-mono">// things I've built</span>
      </div>

      {/* Projects grid */}
      <div className="grid grid-cols-1 md:grid-cols-2">
        {data.projects.map((p, i) => (
          <div
            key={p.id}
            className={`group relative border-r-[3px] border-b-[3px] border-neu-black overflow-hidden transition-all duration-200 ${
              i % 2 !== 0 ? 'md:border-r-0' : ''
            }`}
          >
            {/* Color accent bar at top */}
            <div className={`h-2 ${bgMap[p.color]} border-b-[3px] border-neu-black`} />

            <div className="p-8 relative">
              {/* Big number */}
              <div
                className="absolute top-4 right-6 font-display font-black text-7xl leading-none select-none pointer-events-none"
                style={{ color: 'rgba(13,13,13,0.06)' }}
              >
                {p.id}
              </div>

              {/* Subtitle */}
              <div className="text-[10px] font-bold uppercase tracking-widest opacity-50 mb-2">{p.subtitle}</div>

              {/* Name */}
              <h3 className="font-display font-black text-xl md:text-2xl leading-tight mb-4 pr-12">{p.name}</h3>

              {/* Description */}
              <p className="text-sm font-mono leading-relaxed opacity-70 mb-6">{p.description}</p>

              {/* Stack */}
              <div className="flex flex-wrap gap-2 mb-6">
                {p.stack.map((tech) => (
                  <span
                    key={tech}
                    className="text-[10px] font-bold uppercase tracking-wider px-2 py-1 border-[2px] border-neu-black bg-white"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* CTA */}
              <a
                href={p.link}
                target="_blank"
                rel="noreferrer"
                className={`neu-btn text-xs px-5 py-2.5 ${bgMap[p.color]} ${textMap[p.color]}`}
              >
                Live Demo ↗
              </a>
            </div>

            {/* Hover overlay */}
            <div className={`absolute inset-0 ${bgMap[p.color]} opacity-0 group-hover:opacity-5 transition-opacity pointer-events-none`} />
          </div>
        ))}
      </div>
    </section>
  )
}
