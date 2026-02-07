import { Metadata } from 'next'
import { generateSEO } from '@/lib/seo'

export const metadata: Metadata = generateSEO({
  title: 'Teams',
  description: 'Explore the diverse teams at CodeBreakers GCEK. From web development to competitive programming, our specialized teams work on exciting projects and organize events to foster technical excellence.',
  url: '/developers/teams',
  keywords: [
    'CodeBreakers teams',
    'GCEK tech teams',
    'web development team',
    'competitive programming team',
    'hackathon team',
    'project teams GCEK',
    'coding club teams',
  ],
})

export default function TeamsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
