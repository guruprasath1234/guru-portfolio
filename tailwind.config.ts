import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        mono: ['Space Mono', 'monospace'],
        display: ['Unbounded', 'sans-serif'],
      },
      colors: {
        neu: {
          bg: '#F5F0E8',
          black: '#0D0D0D',
          yellow: '#FFE500',
          red: '#FF2D2D',
          blue: '#1A5CFF',
          green: '#00C853',
          purple: '#7C3AED',
          orange: '#FF6B00',
        }
      },
      boxShadow: {
        'neu': '4px 4px 0px #0D0D0D',
        'neu-md': '6px 6px 0px #0D0D0D',
        'neu-lg': '10px 10px 0px #0D0D0D',
        'neu-xl': '14px 14px 0px #0D0D0D',
      }
    },
  },
  plugins: [],
}

export default config
