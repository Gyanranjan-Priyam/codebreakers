import { Metadata } from 'next'
import { generateSEO } from '@/lib/seo'

export const metadata: Metadata = generateSEO({
  title: 'CodeBreakers - Coding Club | Government College of Engineering Kalahandi',
  description: 'Join CodeBreakers, the premier coding club at Government College of Engineering Kalahandi (GCEK). Learn programming, participate in hackathons, compete in coding challenges, and build innovative projects with a community of 500+ passionate developers.',
  keywords: [
    "CodeBreakers",
    "CodeBreakers GCEK",
    "Codebreakers GCE Kalahandi",
    "GCEK",
    "GCE Kalahandi",
    "Government College of Engineering Kalahandi",
    "Kalahandi Engineering College",
    "coding club of GCE Kalahandi",
    "coding club GCEK",
    "programming club Kalahandi",
    "GCEK coding club",
    "GCE Kalahandi tech club",
    "hackathon",
    "competitive programming",
    "coding competitions",
    "programming contests",
    "web development",
    "software development",
    "tech community Kalahandi",
    "student developers GCEK",
    "Odisha engineering college",
    "tech events Kalahandi",
    "project collaboration",
    "coding bootcamp",
    "learn programming GCEK",
    "developer community Odisha",
    "tech club Odisha",
    "engineering students Kalahandi",
    "computer science GCEK",
    "IT club Kalahandi",
    "quiz competition",
    "tech workshops",
    "coding events",
    "best coding club Odisha"
  ],
})

export default function HomeLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
