import { data } from '../data'

export default function Education() {
  return (
    <section id="education" className="py-24 border-b-[3px] border-neu-black">
      
      {/* Header */}
      <div className="flex items-center gap-4 px-10 py-6 bg-neu-black border-b-[3px] border-neu-black">
        <span className="font-display font-black text-neu-yellow text-xs tracking-widest uppercase bg-neu-green px-3 py-1">
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
          const bgs = ['bg-white', 'bg-neu-yellow', 'bg-white']
          return (
            <div
              key={edu.degree}
              className={`p-10 border-r-[3px] border-b-[3px] border-neu-black last:border-r-0 ${bgs[i]} neu-hover group`}
            >
              <div className="text-[10px] font-bold uppercase tracking-widest opacity-40 mb-4">
                {edu.period}
              </div>
              <h3 className="font-display font-black text-base leading-tight mb-4">
                {edu.degree}
              </h3>
              <p className="text-xs font-mono opacity-60 mb-8 leading-relaxed">
                {edu.school}
              </p>
              <div className="inline-flex items-center gap-3">
                <div className="w-2 h-2 bg-neu-black" />
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
          <span className="font-display font-black text-neu-yellow text-xs tracking-widest uppercase bg-neu-blue px-3 py-1">
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
            const bgs = ['bg-white', 'bg-neu-yellow', 'bg-white']
            return (
              <div
                key={cert.name}
                className={`p-10 border-r-[3px] border-b-[3px] border-neu-black last:border-r-0 ${bgs[i % 3]} neu-hover group`}
              >
                <div className="text-[10px] font-bold uppercase tracking-widest opacity-40 mb-4">
                  {cert.org}
                </div>

                <h3 className="font-display font-black text-base leading-tight mb-6">
                  {cert.name}
                </h3>

                <div className="inline-flex items-center gap-3">
                  <div className="w-2 h-2 bg-neu-black" />
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