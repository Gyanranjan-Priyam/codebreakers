import { Metadata } from 'next'
import { generateSEO } from '@/lib/seo'

export const metadata: Metadata = generateSEO({
  title: 'CodeCheaf',
  description: 'Join CodeCheaf, CodeBreakers GCEK\'s signature coding competition. Challenge yourself with algorithmic problems, compete with peers, and showcase your programming prowess.',
  url: '/events/codecheaf',
  keywords: [
    'CodeCheaf',
    'coding competition GCEK',
    'programming contest',
    'CodeBreakers competition',
    'algorithmic challenges',
    'competitive programming GCEK',
  ],
})

export default function CodeCheafLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
