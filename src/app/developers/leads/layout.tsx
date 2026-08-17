import { Metadata } from 'next'
import { generateSEO } from '@/lib/seo'

export const metadata: Metadata = generateSEO({
  title: 'Our Leads',
  description: 'Meet the talented leads behind CodeBreakers GCEK. Our core members, coordinators, and developers are passionate about coding, innovation, and building the future of technology at Government College of Engineering Kalahandi.',
  url: '/developers/leads',
  keywords: [
    'CodeBreakers leads',
    'GCEK leads',
    'CodeBreakers leads',
    'student leads Kalahandi',
    'coding club leads',
    'tech leads GCEK',
    'CodeBreakers coordinators',
    'student programmers Odisha',
  ],
})

export default function DevsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
