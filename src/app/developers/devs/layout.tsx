import { Metadata } from 'next'
import { generateSEO } from '@/lib/seo'

export const metadata: Metadata = generateSEO({
  title: 'Our Developers',
  description: 'Meet the talented team behind CodeBreakers GCEK. Our core members, coordinators, and developers are passionate about coding, innovation, and building the future of technology at Government College of Engineering Kalahandi.',
  url: '/developers/devs',
  keywords: [
    'CodeBreakers team',
    'GCEK developers',
    'CodeBreakers members',
    'student developers Kalahandi',
    'coding club team',
    'tech team GCEK',
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
