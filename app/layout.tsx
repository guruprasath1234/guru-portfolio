import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Guruprasath M — Full Stack Developer',
  description: 'Portfolio of Guruprasath M — Aspiring Software Developer specializing in React, Next.js, and full-stack web applications.',
  keywords: ['Guruprasath', 'Full Stack Developer', 'React', 'Next.js', 'Portfolio'],
  openGraph: {
    title: 'Guruprasath M — Full Stack Developer',
    description: 'Portfolio of Guruprasath M — Aspiring Software Developer',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
