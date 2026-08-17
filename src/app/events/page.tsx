import { Metadata } from 'next'
import Link from 'next/link'
import {
  Terminal,
  Code2,
  Trophy,
  Lightbulb,
  Cpu,
  ChevronRight,
  ArrowRight,
  Sparkles,
  Layers,
} from 'lucide-react'
import { Grid3D } from '@/components/thegridcn/grid'
import { generateSEO } from '@/lib/seo'

export const metadata: Metadata = generateSEO({
  title: 'Events',
  description:
    'Explore technical events, hackathons, coding challenges, sessions, and CodeChef contests organized by CodeBreakers GCEK.',
  url: '/events',
  keywords: [
    'CodeBreakers events',
    'GCEK hackathons',
    '9-Lock Challenges',
    'CodeChef GCEK',
    'Tech Sessions',
    'Ideathon GCEK',
    'Government College of Engineering Kalahandi events',
  ],
})

interface EventItem {
  id: string
  title: string
  subtitle: string
  category: string
  description: string
  href: string
  icon: React.ComponentType<{ className?: string }>
  stats: string
  highlights: string[]
  badge?: string
}

const eventCategories: EventItem[] = [
  {
    id: 'sessions',
    title: 'TECH TALKS & SESSIONS',
    subtitle: 'Interactive Knowledge Series',
    category: 'KNOWLEDGE & SKILLS',
    description:
      'Technical workshops, expert lectures, and hands-on coding sessions focused on modern software engineering, web development, cloud computing, and emerging tech.',
    href: '/events/sessions',
    icon: Terminal,
    stats: '20+ Sessions Conducted',
    highlights: ['Expert Speaker Talks', 'Hands-on Coding Labs', 'Interactive Q&A'],
    badge: 'ACTIVE',
  },
  {
    id: '9-lock-challenges',
    title: '9-LOCK CHALLENGES',
    subtitle: 'Algorithmic Solving Tournament',
    category: 'COMPETITIVE PROGRAMMING',
    description:
      'Multi-stage coding challenges with 9 progressive levels of algorithmic difficulty designed to push speed, logic, and problem-solving abilities.',
    href: '/events/9-lock-challenges',
    icon: Code2,
    stats: '9 Unique Lock Levels',
    highlights: ['Progressive Difficulty', 'Real-time Solves', 'Leaderboard Tracking'],
  },
  {
    id: 'codechef',
    title: 'CODECHEF',
    subtitle: 'Official Rated Contests',
    category: 'CODING LEAGUE',
    description:
      'Official CodeChef Chapter contests, monthly rated challenges, problem discussion workshops, and competitive coding practice leagues.',
    href: '/events/codechef',
    icon: Trophy,
    stats: 'Official College Chapter',
    highlights: ['Rated Competitions', 'Global Ranking Practice', 'Editorial Solution Reviews'],
  },
  {
    id: 'ideathon',
    title: 'IDEATHON COMPETITIONS',
    subtitle: 'Innovation & Product Pitching',
    category: 'INNOVATION',
    description:
      'Technical innovation competitions where teams pitch creative solutions, present product prototypes, and showcase technical architectures to expert panels.',
    href: '/events/ideathon',
    icon: Lightbulb,
    stats: 'Annual Tech Pitch',
    highlights: ['Product Pitching', 'Architecture Design', 'Mentorship & Feedback'],
  },
  {
    id: 'hackathon',
    title: 'HACK NOVA (HACKATHON)',
    subtitle: 'Flagship Hackathon Event',
    category: 'FLAGSHIP EVENT',
    description:
      'Intensive 12-18 hour hackathon bringing together passionate developers to build real-world software applications, AI models, and technology prototypes.',
    href: '/events/hackathon/hack-nova',
    icon: Cpu,
    stats: '24-48 Hour Hackathon',
    highlights: ['Team Project Building', 'Industry Mentors', 'Cash Prizes & Certificates'],
    badge: 'FEATURED',
  },
]

export default function EventsPage() {
  return (
    <div className="relative min-h-screen bg-background text-foreground overflow-hidden">
      {/* 3D Cyber Grid Background */}
      <div className="pointer-events-none fixed inset-0 z-0">
        <Grid3D
          className="h-full w-full"
          enableParticles={true}
          enableBeams={true}
          cameraAnimation={true}
        />
        <div className="absolute inset-0 bg-linear-to-b from-background/30 via-background/60 to-background" />
      </div>

      {/* Background scanline effect */}
      <div className="crt-scanlines pointer-events-none fixed inset-0 z-10 opacity-[0.03]" />

      <div className="relative z-20 mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
        {/* Hero Section */}
        <div className="mb-14 text-center">
          <div className="relative inline-block">
            {/* Corner Bracket Frame */}
            <div className="absolute -inset-4 border border-primary/30">
              <div className="absolute left-0 top-0 h-3 w-3 border-l-2 border-t-2 border-primary" />
              <div className="absolute right-0 top-0 h-3 w-3 border-r-2 border-t-2 border-primary" />
              <div className="absolute bottom-0 left-0 h-3 w-3 border-b-2 border-l-2 border-primary" />
              <div className="absolute bottom-0 right-0 h-3 w-3 border-b-2 border-r-2 border-primary" />
            </div>
            
            <h1 className="relative px-6 py-3 font-mono text-3xl font-bold tracking-wider text-primary sm:text-4xl md:text-5xl">
              CODEBREAKERS EVENTS
            </h1>
          </div>

          <p className="mt-8 mx-auto max-w-2xl font-mono text-xs tracking-wider text-foreground/80 sm:text-sm uppercase leading-relaxed">
            DISCOVER TECHNICAL SESSIONS, COMPETITIVE CODING LEAGUES, IDEATHONS, AND FLAGSHIP HACKATHONS AT GCEK
          </p>

          {/* Featured Explore Button with Join The Community Effect */}
          <div className="mt-8 flex justify-center">
            <a
              href="#event-directory"
              className="group relative overflow-hidden rounded border-2 border-primary bg-primary/20 px-8 py-3.5 font-mono text-sm font-bold tracking-wider text-primary transition-all hover:bg-primary hover:text-primary-foreground hover:shadow-[0_0_30px_var(--primary)]"
            >
              <span className="relative z-10 flex items-center gap-2">
                <span>EXPLORE EVENTS</span>
                <ArrowRight className="h-4 w-4" />
              </span>
              <div className="absolute inset-0 -z-10 translate-y-full bg-primary transition-transform group-hover:translate-y-0" />
            </a>
          </div>

          {/* Quick Metrics Bar */}
          <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4 max-w-4xl mx-auto">
            <div className="border border-primary/20 bg-panel/60 p-4 rounded text-center">
              <div className="font-mono text-xl font-bold text-primary sm:text-2xl">5+</div>
              <div className="font-mono text-[10px] tracking-widest text-foreground/70 uppercase mt-1">
                Event Tracks
              </div>
            </div>
            <div className="border border-primary/20 bg-panel/60 p-4 rounded text-center">
              <div className="font-mono text-xl font-bold text-primary sm:text-2xl">50+</div>
              <div className="font-mono text-[10px] tracking-widest text-foreground/70 uppercase mt-1">
                Contests & Talks
              </div>
            </div>
            <div className="border border-primary/20 bg-panel/60 p-4 rounded text-center">
              <div className="font-mono text-xl font-bold text-primary sm:text-2xl">500+</div>
              <div className="font-mono text-[10px] tracking-widest text-foreground/70 uppercase mt-1">
                Active Participants
              </div>
            </div>
            <div className="border border-primary/20 bg-panel/60 p-4 rounded text-center">
              <div className="font-mono text-xl font-bold text-primary sm:text-2xl">100%</div>
              <div className="font-mono text-[10px] tracking-widest text-foreground/70 uppercase mt-1">
                Open & Free
              </div>
            </div>
          </div>
        </div>

        {/* Section Heading */}
        <div id="event-directory" className="mb-8 flex items-center justify-between border-b border-primary/20 pb-4 scroll-mt-24">
          <div className="flex items-center gap-3">
            <Layers className="h-5 w-5 text-primary" />
            <h2 className="font-mono text-lg font-bold tracking-wider text-foreground sm:text-xl uppercase">
              EXPLORE EVENT DIRECTORY
            </h2>
          </div>
          <span className="font-mono text-xs text-primary/70 tracking-widest hidden sm:inline-block">
            SELECT A CATEGORY BELOW
          </span>
        </div>

        {/* Events Cards Grid */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {eventCategories.map((event) => {
            const Icon = event.icon
            return (
              <div
                key={event.id}
                className="group relative flex flex-col justify-between border border-primary/30 bg-panel/80 p-6 backdrop-blur-sm transition-all hover:border-primary hover:bg-panel"
              >
                {/* Corner Accents */}
                <div className="pointer-events-none absolute left-0 top-0 h-3 w-3 border-l-2 border-t-2 border-primary/60 group-hover:border-primary" />
                <div className="pointer-events-none absolute right-0 top-0 h-3 w-3 border-r-2 border-t-2 border-primary/60 group-hover:border-primary" />
                <div className="pointer-events-none absolute bottom-0 left-0 h-3 w-3 border-b-2 border-l-2 border-primary/60 group-hover:border-primary" />
                <div className="pointer-events-none absolute bottom-0 right-0 h-3 w-3 border-b-2 border-r-2 border-primary/60 group-hover:border-primary" />

                <div>
                  {/* Category Header */}
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <span className="font-mono text-[10px] tracking-widest text-primary uppercase bg-primary/10 px-2.5 py-1 rounded border border-primary/20">
                      {event.category}
                    </span>
                    {event.badge && (
                      <span className="font-mono text-[9px] tracking-widest text-primary font-bold bg-primary/20 px-2 py-0.5 rounded border border-primary/40">
                        {event.badge}
                      </span>
                    )}
                  </div>

                  {/* Icon & Title */}
                  <div className="flex items-start gap-3 mb-3">
                    <div className="rounded border border-primary/40 bg-primary/10 p-2.5 text-primary group-hover:bg-primary group-hover:text-background transition-colors">
                      <Icon className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="font-mono text-lg font-bold tracking-wider text-foreground group-hover:text-primary transition-colors">
                        {event.title}
                      </h3>
                      <p className="font-mono text-xs text-primary/80">
                        {event.subtitle}
                      </p>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="font-mono text-xs leading-relaxed text-foreground/75 mb-6">
                    {event.description}
                  </p>

                  {/* Highlights List */}
                  <div className="mb-6 space-y-1.5 border-t border-primary/10 pt-4">
                    {event.highlights.map((highlight, i) => (
                      <div key={i} className="flex items-center gap-2 font-mono text-[11px] text-foreground/70">
                        <span className="text-primary font-bold">▸</span>
                        <span>{highlight}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Footer Link & Action */}
                <div className="border-t border-primary/20 pt-4 flex items-center justify-between">
                  <span className="font-mono text-[10px] text-primary/70 tracking-widest uppercase">
                    {event.stats}
                  </span>
                  <Link
                    href={event.href}
                    className="group/btn relative overflow-hidden rounded border border-primary bg-primary/20 px-4 py-2 font-mono text-xs font-bold tracking-wider text-primary transition-all hover:bg-primary hover:text-primary-foreground hover:shadow-[0_0_20px_var(--primary)]"
                  >
                    <span className="relative z-10 flex items-center gap-1.5">
                      <span>EXPLORE</span>
                      <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover/btn:translate-x-0.5" />
                    </span>
                    <div className="absolute inset-0 -z-10 translate-y-full bg-primary transition-transform group-hover/btn:translate-y-0" />
                  </Link>
                </div>
              </div>
            )
          })}
        </div>

        {/* Footer Info Box */}
        <div className="mt-14 rounded border border-primary/30 bg-panel/60 p-6 text-center">
          <div className="flex items-center justify-center gap-2 mb-2">
            <Sparkles className="h-4 w-4 text-primary" />
            <h4 className="font-mono text-sm font-bold tracking-wider text-primary uppercase">
              STAY TUNED FOR UPCOMING EVENTS
            </h4>
          </div>
          <p className="font-mono text-xs text-foreground/70 max-w-xl mx-auto">
            CodeBreakers hosts regular technical sessions, algorithmic contests, and hackathons throughout the academic year. Check back frequently or follow our official channels.
          </p>
        </div>

      </div>
    </div>
  )
}
