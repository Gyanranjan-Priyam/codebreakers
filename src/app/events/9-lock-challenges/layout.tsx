import { Metadata } from 'next'
import { generateSEO } from '@/lib/seo'

export const metadata: Metadata = generateSEO({
  title: '9-Lock Challenges',
  description: 'Test your problem-solving skills with CodeBreakers GCEK\'s 9-Lock Challenges. A unique coding competition that challenges participants to solve complex puzzles and unlock all nine locks.',
  url: '/events/9-lock-challenges',
  keywords: [
    '9-lock challenges',
    'CodeBreakers challenges',
    'coding puzzles GCEK',
    'problem solving competition',
    'tech challenges',
    'CodeBreakers events',
  ],
})

export default function NineLockLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
