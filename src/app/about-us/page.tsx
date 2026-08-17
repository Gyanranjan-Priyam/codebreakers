import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import {
  Code2,
  Cpu,
  ShieldCheck,
  Terminal,
  Users,
  Zap,
  Award,
  ChevronRight} from 'lucide-react'
import { Grid3D } from '@/components/thegridcn/grid'
import { officialIncharges } from '@/data/inchargesData'
import { generateSEO } from '@/lib/seo'

export const metadata: Metadata = generateSEO({
  title: 'About Us',
  description:
    'CodeBreakers is the official coding and technology club of the Department of Computer Science and Engineering at Government College of Engineering, Kalahandi (GCEK). Established in 2017, officially named in 2019, and registered in 2025.',
  url: '/about-us',
  keywords: [
    'About CodeBreakers GCEK',
    'CodeBreakers About Us',
    'GCEK coding club',
    'Dr. Ashok Kumar Bhoi',
    'Department of Computer Science and Engineering GCEK',
    'Government College of Engineering Kalahandi tech club',
    'CodeBreakers history',
  ],
})

export default function AboutUsPage() {
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

      {/* CRT Scanlines Overlay */}
      <div className="crt-scanlines pointer-events-none fixed inset-0 z-10 opacity-[0.03]" />

      <div className="relative z-20 px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
        <div className="mx-auto max-w-7xl space-y-20">
          
          {/* ========================================================================= */}
          {/* HERO HEADER                                                               */}
          {/* ========================================================================= */}
          <div className="text-center">
            <div className="relative inline-block">
              {/* Scanning Frame Effect */}
              <div className="absolute -inset-4 border border-primary/30">
                <div className="absolute left-0 top-0 h-3 w-3 border-l-2 border-t-2 border-primary" />
                <div className="absolute right-0 top-0 h-3 w-3 border-r-2 border-t-2 border-primary" />
                <div className="absolute bottom-0 left-0 h-3 w-3 border-b-2 border-l-2 border-primary" />
                <div className="absolute bottom-0 right-0 h-3 w-3 border-b-2 border-r-2 border-primary" />
              </div>
              <h1 className="relative px-6 py-3 font-mono text-4xl font-bold tracking-wider text-primary sm:text-5xl md:text-6xl">
                THE CODEBREAKERS STORY
              </h1>
            </div>


            <p className="mt-10 mx-auto max-w-3xl font-mono text-xs tracking-wider text-foreground/75 sm:text-sm leading-relaxed uppercase">
              DEPARTMENT OF COMPUTER SCIENCE AND ENGINEERING • GOVERNMENT COLLEGE OF ENGINEERING, KALAHANDI
            </p>
          </div>

          {/* ========================================================================= */}
          {/* OFFICIAL ABOUT CODEBREAKERS CONTENT                                        */}
          {/* ========================================================================= */}
          <section className="relative">
            <div className="relative overflow-hidden border border-primary/30 bg-panel/80 p-6 sm:p-10 backdrop-blur-md">
              {/* Corner Brackets */}
              <div className="pointer-events-none absolute left-0 top-0 h-4 w-4 border-l-2 border-t-2 border-primary" />
              <div className="pointer-events-none absolute right-0 top-0 h-4 w-4 border-r-2 border-t-2 border-primary" />
              <div className="pointer-events-none absolute bottom-0 left-0 h-4 w-4 border-b-2 border-l-2 border-primary" />
              <div className="pointer-events-none absolute bottom-0 right-0 h-4 w-4 border-b-2 border-r-2 border-primary" />

              <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:items-stretch">
                
                {/* Text Content */}
                <div className="space-y-6 lg:col-span-8">
                  <div className="flex items-center gap-3">
                    <Terminal className="h-6 w-6 text-primary animate-pulse" />
                    <span className="font-mono text-xs font-bold tracking-[0.2em] text-primary uppercase">
                      OFFICIAL CLUB PROFILES & HISTORY
                    </span>
                  </div>

                  <h2 className="font-mono text-2xl font-bold text-foreground sm:text-3xl">
                    Official Technical & Coding Community of CSE, GCEK
                  </h2>

                  <div className="space-y-4 font-mono text-sm leading-relaxed text-foreground/85">
                    <p>
                      <strong className="text-primary font-semibold">CodeBreakers</strong> is the official coding and technology club of the <strong className="text-foreground font-medium">Department of Computer Science and Engineering</strong> at <strong className="text-foreground font-medium">Government College of Engineering, Kalahandi (GCEK)</strong>. The club was initially established in <span className="border-b border-primary/60 text-primary font-bold">2017</span> through the collective initiative of the students and faculty of the CSE Department, with the vision of fostering a culture of coding, innovation, collaboration, and continuous learning among students.
                    </p>

                    <p>
                      In <span className="border-b border-primary/60 text-primary font-bold">2019</span>, the club was formally named <strong className="text-primary font-bold">CodeBreakers</strong>, marking the beginning of its journey as a dedicated platform for students to explore and strengthen their technical abilities. The club has been guided by the mentorship of <strong className="text-primary font-semibold">Dr. Ashok Kumar Bhoi</strong>, Assistant Professor, Department of Computer Science and Engineering, who has served as the Professor-in-Charge and played an important role in nurturing the club&apos;s growth and activities.
                    </p>

                    <p>
                      Over the years, CodeBreakers has evolved beyond being a coding club into a platform for <strong className="text-foreground font-semibold">technical development, innovation, leadership, and professional growth</strong>. Through coding sessions, technical events, workshops, competitions, hackathons, and collaborative projects, the club provides students with opportunities to transform their academic knowledge into practical skills and real-world solutions.
                    </p>

                    <p>
                      In <span className="border-b border-primary/60 text-primary font-bold">2025</span>, <strong className="text-primary font-bold">CodeBreakers was officially registered as a club</strong>, marking a significant milestone in its journey and further strengthening its role within the institution.
                    </p>

                    <p>
                      Today, CodeBreakers continues to empower students to learn, experiment, collaborate, and innovate. The achievements of its members in <strong className="text-foreground font-medium">hackathons, technical competitions, internships, projects, and other professional pursuits</strong> reflect the impact of the club&apos;s efforts in shaping their careers. By encouraging curiosity, problem-solving, teamwork, and technological excellence, CodeBreakers strives to prepare its members to confidently meet the challenges and opportunities of the future.
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-4 pt-2">
                    <div className="flex items-center gap-2 border border-primary/30 bg-primary/5 px-3 py-1.5 font-mono text-xs text-primary">
                      <Zap className="h-4 w-4" />
                      <span>EST. 2017 • REGISTERED 2025</span>
                    </div>
                    <div className="flex items-center gap-2 border border-primary/30 bg-primary/5 px-3 py-1.5 font-mono text-xs text-primary">
                      <ShieldCheck className="h-4 w-4" />
                      <span>DEPT OF CSE, GCE KALAHANDI</span>
                    </div>
                  </div>
                </div>

                {/* Sidebar Cyber Milestone Card */}
                <div className="lg:col-span-4 flex flex-col justify-between space-y-6 lg:space-y-4 lg:h-full">
                  <div className="relative flex flex-1 flex-col justify-between border border-primary/40 bg-card/60 p-5 backdrop-blur-sm">
                    <div className="mb-4 flex items-center justify-between border-b border-primary/20 pb-3 font-mono text-xs text-primary">
                      <span className="flex items-center gap-2">
                        KEY MILESTONES
                      </span>
                      <span>TIMELINE</span>
                    </div>

                    <div className="relative flex flex-1 flex-col justify-between space-y-4 py-2 font-mono text-xs pl-6">
                      {/* Continuous Connecting Line */}
                      <div className="absolute left-[5px] top-4 bottom-4 w-0.5 bg-primary/50 pointer-events-none" />

                      {/* Timeline Item 1 */}
                      <div className="relative space-y-1">
                        <div className="absolute -left-6 top-1 z-10 h-3 w-3 rounded-full bg-primary ring-4 ring-card shadow-[0_0_10px_var(--primary)]" />
                        <div className="font-bold text-primary tracking-wider text-xs">2017 — FOUNDATION & INITIATIVES</div>
                        <p className="text-foreground/80 text-[11px] leading-relaxed">
                          Established by CSE students & faculty to cultivate competitive coding and collaborative learning at GCEK.
                        </p>
                        <div className="text-[10px] text-primary/70 font-semibold">
                          ▸ Peer coding circles & tech workshops
                        </div>
                      </div>

                      {/* Timeline Item 2 */}
                      <div className="relative space-y-1">
                        <div className="absolute -left-6 top-1 z-10 h-3 w-3 rounded-full bg-primary ring-4 ring-card shadow-[0_0_10px_var(--primary)]" />
                        <div className="font-bold text-primary tracking-wider text-xs">2019 — FORMALLY NAMED</div>
                        <p className="text-foreground/80 text-[11px] leading-relaxed">
                          Adopted the name CodeBreakers under mentorship of Dr. Ashok Kumar Bhoi (Professor-in-Charge).
                        </p>
                        <div className="text-[10px] text-primary/70 font-semibold">
                          ▸ Structured leadership & annual coding leagues
                        </div>
                      </div>

                      {/* Timeline Item 3 */}
                      <div className="relative space-y-1">
                        <div className="absolute -left-6 top-1 z-10 h-3 w-3 rounded-full bg-primary ring-4 ring-card shadow-[0_0_10px_var(--primary)]" />
                        <div className="font-bold text-primary tracking-wider text-xs">2021 — DIGITAL FLEET & EXPANSION</div>
                        <p className="text-foreground/80 text-[11px] leading-relaxed">
                          Built official institute platforms, fest portals (INSPRANO & UDAAN), and CodeChef GCEK Chapter.
                        </p>
                        <div className="text-[10px] text-primary/70 font-semibold">
                          ▸ Full-stack projects & competitive chapters
                        </div>
                      </div>

                      {/* Timeline Item 4 */}
                      <div className="relative space-y-1">
                        <div className="absolute -left-6 top-1 z-10 h-3 w-3 rounded-full bg-primary ring-4 ring-card shadow-[0_0_10px_var(--primary)]" />
                        <div className="font-bold text-primary tracking-wider text-xs">2025 — OFFICIAL REGISTERED CLUB</div>
                        <p className="text-foreground/80 text-[11px] leading-relaxed">
                          Achieved official registration as a recognized institutional club at GCE Kalahandi.
                        </p>
                        <div className="text-[10px] text-primary/70 font-semibold">
                          ▸ Executive council & alumni mentorship
                        </div>
                      </div>

                      {/* Timeline Item 5 */}
                      <div className="relative space-y-1">
                        <div className="absolute -left-6 top-1 z-10 h-3 w-3 rounded-full bg-primary ring-4 ring-card shadow-[0_0_10px_var(--primary)] animate-pulse" />
                        <div className="font-bold text-primary tracking-wider text-xs">PRESENT — CONTINUOUS INNOVATION</div>
                        <p className="text-foreground/80 text-[11px] leading-relaxed">
                          Empowering 500+ student coders through Hack Nova, 9-Lock Challenges, open-source, & placements.
                        </p>
                        <div className="text-[10px] text-primary/70 font-semibold">
                          ▸ Hackathons, rated contests, & career growth
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Motto Box */}
                  <div className="border border-primary/30 bg-primary/5 p-4 text-center shrink-0">
                    <p className="font-mono text-xs font-bold tracking-[0.2em] text-primary uppercase">
                      CodeBreakers — Learn. Build. Innovate. Lead.
                    </p>
                  </div>
                </div>

              </div>
            </div>
          </section>

          {/* ========================================================================= */}
          {/* OFFICIAL INCHARGES SECTION (PRINCIPAL, DSW, PIC)                           */}
          {/* ========================================================================= */}
          <section className="space-y-10">
            <div className="text-center">
              <div className="mb-2 flex items-center justify-center gap-4">
                <div className="h-px w-16 bg-linear-to-r from-transparent to-primary/40" />
                <div className="relative inline-block border border-primary/30 bg-primary/5 px-4 py-1.5">
                  <div className="absolute -left-px -top-px h-2 w-2 border-l-2 border-t-2 border-primary" />
                  <div className="absolute -right-px -top-px h-2 w-2 border-r-2 border-t-2 border-primary" />
                  <h2 className="font-display text-base font-bold tracking-[0.3em] text-primary uppercase">
                    OUR GUIDING MINDS
                  </h2>
                </div>
                <div className="h-px w-16 bg-linear-to-l from-transparent to-primary/40" />
              </div>
              <p className="font-mono text-xs text-foreground/70 sm:text-sm tracking-wider uppercase">
                FACULTY PATRONS & INSTITUTIONAL LEADERSHIP OF GCE KALAHANDI
              </p>
            </div>

            <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
              {officialIncharges.map((incharge, index) => (
                <div
                  key={incharge.id || index}
                  className="group relative flex flex-col justify-between overflow-hidden border border-primary/30 bg-panel transition-all duration-300 hover:border-primary hover:shadow-[0_0_30px_var(--primary)]"
                >
                  {/* Corner accents */}
                  <div className="pointer-events-none absolute left-0 top-0 z-10 h-4 w-4 border-l-2 border-t-2 border-primary transition-all duration-300 group-hover:h-6 group-hover:w-6" />
                  <div className="pointer-events-none absolute right-0 top-0 z-10 h-4 w-4 border-r-2 border-t-2 border-primary transition-all duration-300 group-hover:h-6 group-hover:w-6" />
                  <div className="pointer-events-none absolute bottom-0 left-0 z-10 h-4 w-4 border-b-2 border-l-2 border-primary transition-all duration-300 group-hover:h-6 group-hover:w-6" />
                  <div className="pointer-events-none absolute bottom-0 right-0 z-10 h-4 w-4 border-b-2 border-r-2 border-primary transition-all duration-300 group-hover:h-6 group-hover:w-6" />

                  <div>
                    {/* Image Container */}
                    <div className="relative aspect-4/3 overflow-hidden bg-card/50">
                      <div className="pointer-events-none absolute inset-0 bg-linear-to-b from-transparent via-transparent to-panel z-10" />
                      <Image
                        src={incharge.image}
                        alt={incharge.name}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                        sizes="(max-width: 768px) 100vw, 33vw"
                      />
                      <div className="absolute top-3 left-3 z-20">
                        <span className="border border-primary/40 bg-background/80 px-2.5 py-1 font-mono text-[10px] font-bold tracking-wider text-primary backdrop-blur-sm">
                          {incharge.designation}
                        </span>
                      </div>
                    </div>

                    {/* Content Details */}
                    <div className="p-6 space-y-4">
                      <div>
                        <h3 className="font-mono text-xl font-bold tracking-wider text-primary">
                          {incharge.name}
                        </h3>
                        <p className="mt-1 font-mono text-sm font-semibold text-foreground/90">
                          {incharge.designation}
                        </p>
                        <p className="mt-0.5 font-mono text-xs text-foreground/70">
                          {incharge.role}
                        </p>
                        <p className="mt-0.5 font-mono text-[11px] text-foreground/50">
                          {incharge.department}
                        </p>
                      </div>

                      {/* Message / Quote */}
                      {incharge.quote && (
                        <div className="border-l-2 border-primary/60 bg-primary/5 p-3">
                          <p className="font-mono text-xs italic text-foreground/80 leading-relaxed">
                            &quot;{incharge.quote}&quot;
                          </p>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Footer Bar */}
                  <div className="border-t border-primary/20 px-6 py-3 bg-card/20 flex items-center justify-between font-mono text-[10px] text-foreground/60">
                    <span>GCE KALAHANDI</span>
                    <span className="text-primary font-semibold">PATRON</span>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* ========================================================================= */}
          {/* CORE PILLARS SECTION                                                      */}
          {/* ========================================================================= */}
          <section className="space-y-8">
            <div className="flex items-center gap-4">
              <div className="h-px flex-1 bg-linear-to-r from-transparent to-primary/30" />
              <div className="relative inline-block border border-primary/30 bg-primary/5 px-4 py-1.5">
                <div className="absolute -left-px -top-px h-2 w-2 border-l-2 border-t-2 border-primary" />
                <div className="absolute -right-px -top-px h-2 w-2 border-r-2 border-t-2 border-primary" />
                <h2 className="font-display text-base font-bold tracking-[0.3em] text-primary uppercase">
                  OUR CORE OBJECTIVES
                </h2>
              </div>
              <div className="h-px flex-1 bg-linear-to-l from-transparent to-primary/30" />
            </div>

            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {/* Pillar 1 */}
              <div className="group relative overflow-hidden border border-primary/30 bg-panel p-6 transition-all duration-300 hover:border-primary hover:shadow-[0_0_25px_var(--primary)]">
                <div className="pointer-events-none absolute left-0 top-0 h-3 w-3 border-l-2 border-t-2 border-primary" />
                <div className="pointer-events-none absolute right-0 top-0 h-3 w-3 border-r-2 border-t-2 border-primary" />
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center border border-primary/30 bg-primary/10 text-primary">
                  <Code2 className="h-6 w-6" />
                </div>
                <h3 className="font-mono text-lg font-bold text-primary mb-2">Technical Skill Building</h3>
                <p className="font-mono text-xs text-foreground/75 leading-relaxed">
                  Regular coding sessions, workshops, & hands-on practical development to bridge theory and practice.
                </p>
              </div>

              {/* Pillar 2 */}
              <div className="group relative overflow-hidden border border-primary/30 bg-panel p-6 transition-all duration-300 hover:border-primary hover:shadow-[0_0_25px_var(--primary)]">
                <div className="pointer-events-none absolute left-0 top-0 h-3 w-3 border-l-2 border-t-2 border-primary" />
                <div className="pointer-events-none absolute right-0 top-0 h-3 w-3 border-r-2 border-t-2 border-primary" />
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center border border-primary/30 bg-primary/10 text-primary">
                  <Cpu className="h-6 w-6" />
                </div>
                <h3 className="font-mono text-lg font-bold text-primary mb-2">Innovation & Projects</h3>
                <p className="font-mono text-xs text-foreground/75 leading-relaxed">
                  Transforming academic knowledge into real-world software applications and open-source solutions.
                </p>
              </div>

              {/* Pillar 3 */}
              <div className="group relative overflow-hidden border border-primary/30 bg-panel p-6 transition-all duration-300 hover:border-primary hover:shadow-[0_0_25px_var(--primary)]">
                <div className="pointer-events-none absolute left-0 top-0 h-3 w-3 border-l-2 border-t-2 border-primary" />
                <div className="pointer-events-none absolute right-0 top-0 h-3 w-3 border-r-2 border-t-2 border-primary" />
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center border border-primary/30 bg-primary/10 text-primary">
                  <Award className="h-6 w-6" />
                </div>
                <h3 className="font-mono text-lg font-bold text-primary mb-2">Hackathons & Competitions</h3>
                <p className="font-mono text-xs text-foreground/75 leading-relaxed">
                  Organizing competitive programming events, hackathons, and technical challenges.
                </p>
              </div>

              {/* Pillar 4 */}
              <div className="group relative overflow-hidden border border-primary/30 bg-panel p-6 transition-all duration-300 hover:border-primary hover:shadow-[0_0_25px_var(--primary)]">
                <div className="pointer-events-none absolute left-0 top-0 h-3 w-3 border-l-2 border-t-2 border-primary" />
                <div className="pointer-events-none absolute right-0 top-0 h-3 w-3 border-r-2 border-t-2 border-primary" />
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center border border-primary/30 bg-primary/10 text-primary">
                  <Users className="h-6 w-6" />
                </div>
                <h3 className="font-mono text-lg font-bold text-primary mb-2">Leadership & Career</h3>
                <p className="font-mono text-xs text-foreground/75 leading-relaxed">
                  Preparing members for internships, professional pursuits, and technical leadership roles.
                </p>
              </div>
            </div>
          </section>

          {/* ========================================================================= */}
          {/* QUICK LINKS / NEXT STEPS                                                  */}
          {/* ========================================================================= */}
          <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
            <Link
              href="/developers/leads"
              className="group relative inline-flex items-center gap-2 border border-primary bg-primary/10 px-6 py-3 font-mono text-xs font-bold tracking-wider text-primary backdrop-blur-sm transition-all hover:bg-primary hover:text-primary-foreground hover:shadow-[0_0_20px_var(--primary)]"
            >
              <span>MEET EXECUTIVE COUNCIL</span>
              <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>

            <Link
              href="/events"
              className="group relative inline-flex items-center gap-2 border border-primary/40 bg-card/40 px-6 py-3 font-mono text-xs font-bold tracking-wider text-foreground backdrop-blur-sm transition-all hover:border-primary hover:text-primary hover:shadow-[0_0_20px_var(--primary)]"
            >
              <span>EXPLORE EVENTS</span>
              <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>

            <Link
              href="/contact"
              className="group relative inline-flex items-center gap-2 border border-primary/40 bg-card/40 px-6 py-3 font-mono text-xs font-bold tracking-wider text-foreground backdrop-blur-sm transition-all hover:border-primary hover:text-primary hover:shadow-[0_0_20px_var(--primary)]"
            >
              <span>CONTACT US</span>
              <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>

        </div>
      </div>
    </div>
  )
}
