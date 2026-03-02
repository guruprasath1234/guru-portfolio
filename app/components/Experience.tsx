import { data } from '../data'

export default function Experience() {
  const exp = data.experience[0]
  return (
    <section id="experience" className="border-b-[3px] border-neu-black">
      <div className="flex items-center gap-4 px-8 py-4 bg-neu-black border-b-[3px] border-neu-black">
        <span className="font-display font-black text-neu-yellow text-xs tracking-widest uppercase bg-neu-red px-2 py-1">03</span>
        <span className="font-display font-black text-white text-sm uppercase tracking-widest">Experience</span>
        <div className="flex-1 border-t-[2px] border-dashed border-white/20" />
        <span className="text-white/40 text-xs font-mono">// where I've worked</span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-[300px_1fr]">
        {/* Left panel */}
        <div className="bg-neu-red text-white p-8 border-r-[3px] border-b-[3px] lg:border-b-0 border-neu-black flex flex-col justify-between">
          <div>
            <div className="text-[10px] font-bold uppercase tracking-widest opacity-60 mb-2">Period</div>
            <div className="font-display font-black text-xl leading-tight mb-6">{exp.period}</div>

            <div className="text-[10px] font-bold uppercase tracking-widest opacity-60 mb-2">Company</div>
            <div className="font-display font-black text-lg leading-tight mb-6">{exp.company}</div>

            <div className="text-[10px] font-bold uppercase tracking-widest opacity-60 mb-2">Location</div>
            <div className="font-bold text-sm">{exp.location}</div>
          </div>

          <div className="mt-8">
            <div className="w-12 h-1 bg-white mb-2" />
            <div className="w-8 h-1 bg-white/50" />
          </div>
        </div>

        {/* Right panel */}
        <div className="p-8 md:p-12">
          <div className="inline-block bg-neu-yellow border-[3px] border-neu-black px-3 py-1 font-bold text-xs uppercase tracking-widest mb-6 neu-shadow">
            Current Position
          </div>
          <h3 className="font-display font-black text-2xl md:text-3xl mb-6">{exp.role}</h3>
          <p className="font-mono text-sm leading-relaxed opacity-70 mb-8 max-w-xl">{exp.description}</p>

          <div>
            <div className="text-[10px] font-bold uppercase tracking-widest opacity-50 mb-3">Tech Stack</div>
            <div className="flex flex-wrap gap-2">
              {exp.stack.map((tech) => (
                <span
                  key={tech}
                  className="px-4 py-2 border-[3px] border-neu-black bg-white font-bold text-xs uppercase tracking-wider neu-shadow neu-hover"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
