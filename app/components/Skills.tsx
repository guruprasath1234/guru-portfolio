'use client'
import { data } from '../data'
import { useTheme } from './ThemeProvider'

const colorMap: Record<string, string> = {
  blue: 'bg-neu-blue text-white',
  yellow: 'bg-neu-yellow text-neu-black',
  green: 'bg-neu-green text-white',
  red: 'bg-neu-red text-white',
  purple: 'bg-neu-purple text-white',
}

const monoMap: Record<string, string> = {
  blue: 'bg-neu-black text-white',
  yellow: 'bg-white text-neu-black',
  green: 'bg-neu-black text-white',
  red: 'bg-white text-neu-black',
  purple: 'bg-neu-black text-white',
}

const tagHoverMap: Record<string, string> = {
  blue: 'hover:bg-neu-blue hover:text-white',
  yellow: 'hover:bg-neu-yellow hover:text-neu-black',
  green: 'hover:bg-neu-green hover:text-white',
  red: 'hover:bg-neu-red hover:text-white',
  purple: 'hover:bg-neu-purple hover:text-white',
}

export default function Skills() {
  const { mode } = useTheme()
  const isMono = mode === 'mono'

  return (
    <section id="skills" className="py-24 border-b-[3px] border-neu-black">
      
      {/* Section header */}
      <div className="flex items-center gap-4 px-10 py-6 bg-neu-black border-b-[3px] border-neu-black">
        <span className={`font-display font-black text-xs tracking-widest uppercase px-3 py-1 ${
          isMono ? 'bg-white text-neu-black' : 'text-neu-yellow bg-neu-red'
        }`}>
          01
        </span>
        <span className="font-display font-black text-white text-sm uppercase tracking-widest">
          Skills & Tech Stack
        </span>
        <div className="flex-1 border-t-[2px] border-dashed border-white/20" />
        <span className="text-white/40 text-xs font-mono">
          // what I work with
        </span>
      </div>

      {/* Skill categories */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 mt-12">
        {data.skills.map((cat, i) => {
          const activeMap = isMono ? monoMap : colorMap
          const catBg = activeMap[cat.color]?.split(' ')[0] || ''

          return (
            <div
              key={cat.category}
              className={`p-8 md:p-10 border-r-[3px] border-b-[3px] border-neu-black last:border-r-0 group transition-colors duration-200 ${
                isMono && i % 2 !== 0 ? 'bg-gray-50' : ''
              }`}
              style={{ borderRight: i === data.skills.length - 1 ? 'none' : undefined }}
            >
              {/* Category label */}
              <div className="inline-flex items-center gap-3 mb-6">
                <div
                  className={`w-4 h-4 border-2 border-neu-black ${catBg}`}
                />
                <span className="font-display font-black text-xs uppercase tracking-widest">
                  {cat.category}
                </span>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-3">
                {cat.items.map((item) => (
                  <span
                    key={item}
                    className={`text-xs font-bold px-4 py-2 border-[3px] border-neu-black bg-white transition-all duration-150 neu-hover ${
                      isMono
                        ? 'hover:bg-neu-black hover:text-white'
                        : tagHoverMap[cat.color]
                    }`}
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          )
        })}
      </div>

    </section>
  )
}