import { Metadata } from 'next'
import { generateSEO } from '@/lib/seo'

export const metadata: Metadata = generateSEO({
  title: 'Tech Talks & Sessions',
  description: 'Explore CodeBreakers GCEK\'s technical sessions, workshops, and knowledge-sharing events. Learn from industry experts, senior members, and guest speakers on cutting-edge technologies and programming concepts.',
  url: '/events/sessions',
  keywords: [
    'tech sessions GCEK',
    'coding workshops',
    'programming talks',
    'technical sessions',
    'CodeBreakers workshops',
    'tech events Kalahandi',
    'developer sessions',
    'learning events',
  ],
})

export default function SessionsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
