import { data } from '../data'

// Add links to your achievements data — update data.ts accordingly
// Each achievement can optionally have a `link` and `linkLabel` field
const achievementLinks: { link?: string; linkLabel?: string }[] = [
  { link: 'http://www.skillrack.com/profile/397736/f1d055169483031d1976042532d820fb91df0973', linkLabel: 'View Profile ↗' },
  { link: 'https://www.hackerrank.com/profile/sce22cs028', linkLabel: 'View Profile ↗' },
  { link: 'https://creyo-get2work.vercel.app', linkLabel: 'View Project ↗' },
  { link: 'https://advaya2k25.vercel.app/', linkLabel: 'View Hackathon ↗' },
]

export default function Achievements() {
  return (
    <section className="border-b-[3px] border-neu-black">
      {/* Header */}
      <div className="flex items-center gap-4 px-8 py-4 bg-neu-black border-b-[3px] border-neu-black">
        <span className="font-display font-black text-neu-yellow text-xs tracking-widest uppercase bg-neu-purple px-2 py-1">05</span>
        <span className="font-display font-black text-white text-sm uppercase tracking-widest">Achievements</span>
        <div className="flex-1 border-t-[2px] border-dashed border-white/20" />
        <span className="text-white/40 text-xs font-mono">// wins & recognition</span>
      </div>

      {/* Achievement cards */}
      <div className="grid grid-cols-1 md:grid-cols-2">
        {data.achievements.map((a, i) => {
          const accents = ['bg-white', 'bg-neu-yellow', 'bg-white', 'bg-neu-green']
          const btnStyles = [
            'bg-neu-blue text-white hover:bg-neu-black',
            'bg-neu-black text-neu-yellow hover:bg-neu-blue hover:text-white',
            'bg-neu-purple text-white hover:bg-neu-black',
            'bg-neu-black text-white hover:bg-neu-red',
          ]
          const meta = achievementLinks[i] ?? {}

          return (
            <div
              key={a.text}
              className={`flex flex-col justify-between gap-6 p-8 border-r-[3px] border-b-[3px] border-neu-black ${accents[i]} group transition-all duration-150 hover:-translate-y-0.5`}
              style={{ borderRight: i % 2 !== 0 ? 'none' : undefined }}
            >
              {/* Top row: icon + text */}
              <div className="flex items-start gap-5">
                <div className="text-4xl flex-shrink-0 mt-0.5">{a.icon}</div>
                <div className="font-bold text-sm leading-relaxed">{a.text}</div>
              </div>

              {/* Link button */}
              {meta.link && (
                <div>
                  <a
                    href={meta.link}
                    target="_blank"
                    rel="noreferrer"
                    className={`
                      inline-flex items-center gap-2
                      text-[11px] font-bold uppercase tracking-widest
                      px-4 py-2
                      border-[3px] border-neu-black
                      transition-all duration-150
                      ${btnStyles[i]}
                      hover:-translate-y-0.5
                      active:translate-y-0.5
                      active:shadow-none
                    `}
                    style={{ boxShadow: '3px 3px 0 #0D0D0D' }}
                  >
                    {meta.linkLabel ?? 'View ↗'}
                  </a>
                </div>
              )}
            </div>
          )
        })}
      </div>

      {/* Soft skills strip */}
      <div className="border-t-[3px] border-neu-black">
        <div className="px-8 py-3 border-b-[3px] border-neu-black bg-white/50">
          <span className="text-[10px] font-bold uppercase tracking-widest opacity-50">Soft Skills</span>
        </div>
        <div className="flex flex-wrap">
          {['Communication', 'Teamwork', 'Leadership', 'Adaptability', 'Problem-Solving'].map((s, i) => {
            const bgs = [
              'bg-neu-blue text-white',
              'bg-neu-yellow',
              'bg-neu-red text-white',
              'bg-white',
              'bg-neu-green text-white',
            ]
            return (
              <div
                key={s}
                className={`flex-1 min-w-[150px] py-5 px-4 text-center border-r-[3px] border-neu-black last:border-r-0 ${bgs[i]} font-display font-black text-xs uppercase tracking-wider`}
              >
                {s}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}