import { Metadata } from 'next'
import { generateSEO } from '@/lib/seo'

export const metadata: Metadata = generateSEO({
  title: 'Alumni',
  description: 'Meet the CodeBreakers GCEK alumni network. Our former members have gone on to work at top tech companies and startups, contributing to the tech industry worldwide.',
  url: '/developers/alumni',
  keywords: [
    'CodeBreakers alumni',
    'GCEK alumni',
    'coding club alumni',
    'tech alumni Kalahandi',
    'CodeBreakers network',
    'successful developers GCEK',
  ],
})

export default function AlumniLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
