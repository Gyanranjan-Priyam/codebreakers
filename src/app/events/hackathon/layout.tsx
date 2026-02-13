import { Metadata } from 'next'
import { generateSEO } from '@/lib/seo'

export const metadata: Metadata = generateSEO({
  title: 'Hackathons',
  description: 'Join CodeBreakers GCEK\'s flagship hackathons including DevX and Hack Nova. Build innovative solutions, collaborate with talented developers, and compete for exciting prizes.',
  url: '/events/hackathon',
  keywords: [
    'hackathon GCEK',
    'CodeBreakers hackathon',
    'DevX hackathon',
    'Hack Nova',
    '24-hour hackathon',
    'coding marathon',
    'tech hackathon Odisha',
  ],
})

export default function HackathonLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
