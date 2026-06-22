'use client'
import { data } from '../data'
import { useTheme } from './ThemeProvider'

export default function Education() {
  const { mode } = useTheme()
  const isMono = mode === 'mono'

  return (
    <section id="education" className="py-24 border-b-[3px] border-neu-black">
      
      {/* Header */}
      <div className="flex items-center gap-4 px-10 py-6 bg-neu-black border-b-[3px] border-neu-black">
        <span className={`font-display font-black text-xs tracking-widest uppercase px-3 py-1 ${
          isMono ? 'bg-white text-neu-black' : 'text-neu-yellow bg-neu-green'
        }`}>
          04
        </span>
        <span className="font-display font-black text-white text-sm uppercase tracking-widest">
          Education
        </span>
        <div className="flex-1 border-t-[2px] border-dashed border-white/20" />
        <span className="text-white/40 text-xs font-mono">
          // academic journey
        </span>
      </div>

      {/* Education Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 mt-12">
        {data.education.map((edu, i) => {
          const colorBgs = ['bg-white', 'bg-neu-yellow', 'bg-white']
          const monoBgs = ['bg-white', 'bg-neu-black text-white', 'bg-white']
          const bgs = isMono ? monoBgs : colorBgs

          return (
            <div
              key={edu.degree}
              className={`p-10 border-r-[3px] border-b-[3px] border-neu-black last:border-r-0 ${bgs[i]} neu-hover group`}
            >
              <div className={`text-[10px] font-bold uppercase tracking-widest mb-4 ${
                isMono && i === 1 ? 'opacity-60' : 'opacity-40'
              }`}>
                {edu.period}
              </div>
              <h3 className="font-display font-black text-base leading-tight mb-4">
                {edu.degree}
              </h3>
              <p className={`text-xs font-mono mb-8 leading-relaxed ${
                isMono && i === 1 ? 'opacity-70' : 'opacity-60'
              }`}>
                {edu.school}
              </p>
              <div className="inline-flex items-center gap-3">
                <div className={`w-2 h-2 ${isMono && i === 1 ? 'bg-white' : 'bg-neu-black'}`} />
                <span className="font-display font-black text-lg">
                  {edu.score}
                </span>
              </div>
            </div>
          )
        })}
      </div>

      {/* Certifications Section */}
      <div className="border-t-[3px] border-neu-black mt-20">
        
        {/* Certifications Header */}
        <div className="flex items-center gap-4 px-10 py-6 bg-neu-black border-b-[3px] border-neu-black">
          <span className={`font-display font-black text-xs tracking-widest uppercase px-3 py-1 ${
            isMono ? 'bg-white text-neu-black' : 'text-neu-yellow bg-neu-blue'
          }`}>
            05
          </span>
          <span className="font-display font-black text-white text-sm uppercase tracking-widest">
            Certifications
          </span>
          <div className="flex-1 border-t-[2px] border-dashed border-white/20" />
          <span className="text-white/40 text-xs font-mono">
            // verified skills
          </span>
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {data.certifications.map((cert, i) => {
            const colorBgs = ['bg-white', 'bg-neu-yellow', 'bg-white']
            const monoBgs = ['bg-white', 'bg-neu-black text-white', 'bg-gray-50']
            const bgs = isMono ? monoBgs : colorBgs

            return (
              <div
                key={cert.name}
                className={`p-10 border-r-[3px] border-b-[3px] border-neu-black last:border-r-0 ${bgs[i % 3]} neu-hover group`}
              >
                <div className={`text-[10px] font-bold uppercase tracking-widest mb-4 ${
                  isMono && i % 3 === 1 ? 'opacity-60' : 'opacity-40'
                }`}>
                  {cert.org}
                </div>

                <h3 className="font-display font-black text-base leading-tight mb-6">
                  {cert.name}
                </h3>

                <div className="inline-flex items-center gap-3">
                  <div className={`w-2 h-2 ${isMono && i % 3 === 1 ? 'bg-white' : 'bg-neu-black'}`} />
                  <span className="font-display font-black text-sm">
                    Certified
                  </span>
                </div>
              </div>
            )
          })}
        </div>

      </div>
    </section>
  )
}