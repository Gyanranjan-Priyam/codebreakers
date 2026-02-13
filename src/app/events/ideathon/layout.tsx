import { Metadata } from 'next'
import { generateSEO } from '@/lib/seo'

export const metadata: Metadata = generateSEO({
  title: 'Ideathon',
  description: 'Participate in CodeBreakers GCEK\'s Ideathon - where innovation meets execution. Present your ideas, collaborate with teams, and turn concepts into reality.',
  url: '/events/ideathon',
  keywords: [
    'Ideathon GCEK',
    'CodeBreakers Ideathon',
    'innovation competition',
    'idea competition',
    'startup ideas',
    'tech innovation GCEK',
  ],
})

export default function IdeathonLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
