import { Metadata } from 'next'
import ComingSoon from "../_components/coming-soon";
import { generateSEO } from '@/lib/seo'

export const metadata: Metadata = generateSEO({
  title: 'Projects',
  description: 'Explore innovative projects built by CodeBreakers GCEK members. Discover web applications, mobile apps, machine learning projects, and open-source contributions from our talented developer community.',
  url: '/projects',
  keywords: [
    'CodeBreakers projects',
    'GCEK student projects',
    'coding projects Kalahandi',
    'web development projects',
    'mobile app projects',
    'open source GCEK',
    'student developer projects',
    'tech projects Odisha',
  ],
})

export default function ProjectsPage() {
    return (
        <div className="flex flex-col items-center justify-center gap-4">
            <ComingSoon />
        </div>
    )
}