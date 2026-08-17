import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { generateSEO } from '@/lib/seo'
import { Grid3D } from '@/components/thegridcn/grid'
import {
  ShieldCheck,
  Database,
  Cpu,
  Share2,
  Camera,
  Lock,
  Clock,
  UserCheck,
  ExternalLink,
  RefreshCw,
  Mail,
  FileCheck,
  ArrowLeft,
} from 'lucide-react'

export const metadata: Metadata = generateSEO({
  title: 'Privacy Policy | CodeBreakers',
  description:
    'Privacy Policy for CodeBreakers - The official coding club of Government College of Engineering Kalahandi, Bhawanipatna',
  url: '/privacy',
  keywords: [
    'CodeBreakers Privacy Policy',
    'CodeBreakers data protection',
    'GCEK coding club privacy policy',
    'GCE Kalahandi data policy',
  ],
})

export default function PrivacyPage() {
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
        <div className="absolute inset-0 bg-gradient-to-b from-background/30 via-background/60 to-background" />
      </div>

      {/* CRT Scanlines Overlay */}
      <div className="crt-scanlines pointer-events-none fixed inset-0 z-10 opacity-[0.03]" />

      <div className="container relative z-20 mx-auto max-w-5xl px-4 py-12 md:py-16">

        {/* Hero Header */}
        <div className="mb-16 text-center">
            <div className="relative inline-block">
              {/* Scanning frame effect */}
              <div className="absolute -inset-6 border border-primary/30">
                <div className="absolute left-0 top-0 h-3 w-3 border-l-2 border-t-2 border-primary" />
                <div className="absolute right-0 top-0 h-3 w-3 border-r-2 border-t-2 border-primary" />
                <div className="absolute bottom-0 left-0 h-3 w-3 border-b-2 border-l-2 border-primary" />
                <div className="absolute bottom-0 right-0 h-3 w-3 border-b-2 border-r-2 border-primary" />
              </div>
              
              <h1 className="relative px-12 py-6 font-mono text-4xl font-bold tracking-wider text-primary sm:text-5xl md:text-6xl">
                Privacy Policy
              </h1>
            </div>
            
            <p className="mt-10 font-mono text-sm tracking-wider text-foreground/70 sm:text-base">
              Privacy Policy of CodeBreakers, GCEK
            </p>
          </div>

        {/* Content Body */}
        <main className="space-y-8 font-mono">
          {/* Section 1 */}
          <section className="relative overflow-hidden border border-primary/30 bg-panel/80 p-6 sm:p-8 backdrop-blur-md transition-all hover:border-primary/50">
            <div className="pointer-events-none absolute left-0 top-0 h-3 w-3 border-l-2 border-t-2 border-primary" />
            <div className="pointer-events-none absolute right-0 top-0 h-3 w-3 border-r-2 border-t-2 border-primary" />

            <div className="mb-4 flex items-center gap-3 border-b border-primary/20 pb-3">
              <h2 className="font-display text-xl font-bold tracking-wider text-primary sm:text-2xl">
                1. INTRODUCTION
              </h2>
            </div>

            <div className="space-y-4 text-xs sm:text-sm leading-relaxed text-foreground/85">
              <p>
                This Privacy Policy describes how <strong className="text-primary font-bold">CodeBreakers</strong>, the official coding club of
                Government College of Engineering Kalahandi (GCEK), collects, uses, stores, shares, and protects
                personal information of its members, participants, and visitors (&quot;Users&quot;).
              </p>
              <p>
                By registering for club membership, participating in events, or using any CodeBreakers-operated
                platform, you consent to the practices described in this policy.
              </p>
            </div>
          </section>

          {/* Section 2 */}
          <section className="relative overflow-hidden border border-primary/30 bg-panel/80 p-6 sm:p-8 backdrop-blur-md transition-all hover:border-primary/50">
            <div className="pointer-events-none absolute left-0 top-0 h-3 w-3 border-l-2 border-t-2 border-primary" />
            <div className="pointer-events-none absolute right-0 top-0 h-3 w-3 border-r-2 border-t-2 border-primary" />

            <div className="mb-4 flex items-center gap-3 border-b border-primary/20 pb-3">
              <h2 className="font-display text-xl font-bold tracking-wider text-primary sm:text-2xl">
                2. INFORMATION WE COLLECT
              </h2>
            </div>

            <p className="mb-4 text-xs sm:text-sm text-foreground/80">We may collect the following categories of information:</p>

            <div className="space-y-6">
              <div className="border-l-2 border-primary/40 pl-4">
                <h3 className="text-sm sm:text-base font-bold text-primary mb-2">2.1 Personal Information</h3>
                <ul className="space-y-1.5 text-xs sm:text-sm text-foreground/80">
                  <li className="flex items-center gap-2"><span className="text-primary">▸</span> Full name</li>
                  <li className="flex items-center gap-2"><span className="text-primary">▸</span> Email address</li>
                  <li className="flex items-center gap-2"><span className="text-primary">▸</span> Phone number</li>
                  <li className="flex items-center gap-2"><span className="text-primary">▸</span> Academic details (branch, year, roll number, college)</li>
                  <li className="flex items-center gap-2"><span className="text-primary">▸</span> Profile photo (if submitted)</li>
                </ul>
              </div>

              <div className="border-l-2 border-primary/40 pl-4">
                <h3 className="text-sm sm:text-base font-bold text-primary mb-2">2.2 Technical & Usage Information</h3>
                <ul className="space-y-1.5 text-xs sm:text-sm text-foreground/80">
                  <li className="flex items-center gap-2"><span className="text-primary">▸</span> Device details (type, browser, OS)</li>
                  <li className="flex items-center gap-2"><span className="text-primary">▸</span> IP address</li>
                  <li className="flex items-center gap-2"><span className="text-primary">▸</span> Activity logs on event registration platforms or club applications</li>
                </ul>
              </div>

              <div className="border-l-2 border-primary/40 pl-4">
                <h3 className="text-sm sm:text-base font-bold text-primary mb-2">2.3 Event-Related Information</h3>
                <ul className="space-y-1.5 text-xs sm:text-sm text-foreground/80">
                  <li className="flex items-center gap-2"><span className="text-primary">▸</span> Registration details</li>
                  <li className="flex items-center gap-2"><span className="text-primary">▸</span> Project submissions</li>
                  <li className="flex items-center gap-2"><span className="text-primary">▸</span> Code files, documents, or presentations</li>
                  <li className="flex items-center gap-2"><span className="text-primary">▸</span> Attendance records</li>
                  <li className="flex items-center gap-2"><span className="text-primary">▸</span> Competition performance, rankings, and achievements</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Section 3 */}
          <section className="relative overflow-hidden border border-primary/30 bg-panel/80 p-6 sm:p-8 backdrop-blur-md transition-all hover:border-primary/50">
            <div className="pointer-events-none absolute left-0 top-0 h-3 w-3 border-l-2 border-t-2 border-primary" />
            <div className="pointer-events-none absolute right-0 top-0 h-3 w-3 border-r-2 border-t-2 border-primary" />

            <div className="mb-4 flex items-center gap-3 border-b border-primary/20 pb-3">
              <h2 className="font-display text-xl font-bold tracking-wider text-primary sm:text-2xl">
                3. HOW WE USE YOUR INFORMATION
              </h2>
            </div>

            <p className="mb-4 text-xs sm:text-sm text-foreground/80">Your information may be used for:</p>

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="border border-primary/20 bg-primary/5 p-4 rounded">
                <h3 className="text-sm font-bold text-primary mb-2">3.1 Administration & Membership</h3>
                <ul className="space-y-1.5 text-xs text-foreground/80">
                  <li className="flex items-start gap-2"><span className="text-primary">▸</span> Maintaining member records</li>
                  <li className="flex items-start gap-2"><span className="text-primary">▸</span> Verifying identity and eligibility</li>
                  <li className="flex items-start gap-2"><span className="text-primary">▸</span> Internal communication regarding meetings & announcements</li>
                </ul>
              </div>

              <div className="border border-primary/20 bg-primary/5 p-4 rounded">
                <h3 className="text-sm font-bold text-primary mb-2">3.2 Event Management</h3>
                <ul className="space-y-1.5 text-xs text-foreground/80">
                  <li className="flex items-start gap-2"><span className="text-primary">▸</span> Organizing workshops, contests, hackathons</li>
                  <li className="flex items-start gap-2"><span className="text-primary">▸</span> Managing logistics & resource allocation</li>
                  <li className="flex items-start gap-2"><span className="text-primary">▸</span> Issuing certificates, rewards, and recognitions</li>
                </ul>
              </div>

              <div className="border border-primary/20 bg-primary/5 p-4 rounded">
                <h3 className="text-sm font-bold text-primary mb-2">3.3 Communication</h3>
                <ul className="space-y-1.5 text-xs text-foreground/80">
                  <li className="flex items-start gap-2"><span className="text-primary">▸</span> Sending updates, reminders, and schedules</li>
                  <li className="flex items-start gap-2"><span className="text-primary">▸</span> Outreach regarding upcoming opportunities</li>
                </ul>
              </div>

              <div className="border border-primary/20 bg-primary/5 p-4 rounded">
                <h3 className="text-sm font-bold text-primary mb-2">3.4 Promotion & Publications</h3>
                <ul className="space-y-1.5 text-xs text-foreground/80">
                  <li className="flex items-start gap-2"><span className="text-primary">▸</span> Sharing event photos & highlights</li>
                  <li className="flex items-start gap-2"><span className="text-primary">▸</span> Publishing achievements or project showcases</li>
                </ul>
              </div>
            </div>

            <div className="mt-4 border border-primary/20 bg-primary/5 p-4 rounded">
              <h3 className="text-sm font-bold text-primary mb-2">3.5 Club Development</h3>
              <p className="text-xs text-foreground/80">
                Improving club operations, events, member experience, statistical analysis, and performance evaluation.
              </p>
            </div>

            <p className="mt-6 font-bold text-xs text-primary bg-primary/10 border border-primary/30 p-3 rounded text-center uppercase tracking-wider">
              [ NO COMMERCIAL EXPLOITATION ] We do not sell, rent, or commercially exploit your personal data.
            </p>
          </section>

          {/* Section 4 */}
          <section className="relative overflow-hidden border border-primary/30 bg-panel/80 p-6 sm:p-8 backdrop-blur-md transition-all hover:border-primary/50">
            <div className="pointer-events-none absolute left-0 top-0 h-3 w-3 border-l-2 border-t-2 border-primary" />
            <div className="pointer-events-none absolute right-0 top-0 h-3 w-3 border-r-2 border-t-2 border-primary" />

            <div className="mb-4 flex items-center gap-3 border-b border-primary/20 pb-3">
              <h2 className="font-display text-xl font-bold tracking-wider text-primary sm:text-2xl">
                4. SHARING OF INFORMATION
              </h2>
            </div>

            <p className="mb-4 text-xs sm:text-sm text-foreground/80">
              We may share personal information only under the following circumstances:
            </p>

            <div className="space-y-4">
              <div className="border-l-2 border-primary/40 pl-4">
                <h3 className="text-sm font-bold text-primary mb-1">4.1 Internal Use</h3>
                <p className="text-xs sm:text-sm text-foreground/80">
                  Shared with club coordinators, core committee members, and faculty advisors for event administration or project coordination.
                </p>
              </div>

              <div className="border-l-2 border-primary/40 pl-4">
                <h3 className="text-sm font-bold text-primary mb-1">4.2 Third-Party Tools</h3>
                <p className="text-xs sm:text-sm text-foreground/80">
                  Used for registration forms, certificate generation, online competitions, and communication platforms. These operating platforms follow their own privacy guidelines.
                </p>
              </div>

              <div className="border-l-2 border-primary/40 pl-4">
                <h3 className="text-sm font-bold text-primary mb-1">4.3 Legal or Safety Requirements</h3>
                <p className="text-xs sm:text-sm text-foreground/80">
                  Disclosed if required by college administration, disciplinary procedures, or to ensure safety of participants.
                </p>
              </div>
            </div>
          </section>

          {/* Section 5 */}
          <section className="relative overflow-hidden border border-primary/30 bg-panel/80 p-6 sm:p-8 backdrop-blur-md transition-all hover:border-primary/50">
            <div className="pointer-events-none absolute left-0 top-0 h-3 w-3 border-l-2 border-t-2 border-primary" />
            <div className="pointer-events-none absolute right-0 top-0 h-3 w-3 border-r-2 border-t-2 border-primary" />

            <div className="mb-4 flex items-center gap-3 border-b border-primary/20 pb-3">
              <h2 className="font-display text-xl font-bold tracking-wider text-primary sm:text-2xl">
                5. MEDIA, PHOTOGRAPHY & RECORDINGS
              </h2>
            </div>

            <div className="space-y-3 text-xs sm:text-sm leading-relaxed text-foreground/80">
              <p>
                During club activities, photographs and recordings may be taken for event documentation, educational content, newsletters, and social media promotions.
              </p>
              <p className="font-semibold text-primary">
                ▸ Note: Users who wish to opt-out of media usage must notify the core committee in writing prior to the event.
              </p>
            </div>
          </section>

          {/* Section 6 */}
          <section className="relative overflow-hidden border border-primary/30 bg-panel/80 p-6 sm:p-8 backdrop-blur-md transition-all hover:border-primary/50">
            <div className="pointer-events-none absolute left-0 top-0 h-3 w-3 border-l-2 border-t-2 border-primary" />
            <div className="pointer-events-none absolute right-0 top-0 h-3 w-3 border-r-2 border-t-2 border-primary" />

            <div className="mb-4 flex items-center gap-3 border-b border-primary/20 pb-3">
              <h2 className="font-display text-xl font-bold tracking-wider text-primary sm:text-2xl">
                6. DATA STORAGE & SECURITY
              </h2>
            </div>

            <div className="space-y-3 text-xs sm:text-sm leading-relaxed text-foreground/80">
              <p>We take reasonable measures to protect personal information by:</p>
              <ul className="space-y-1.5 pl-2">
                <li className="flex items-center gap-2"><span className="text-primary">▸</span> Restricting access to authorized core members</li>
                <li className="flex items-center gap-2"><span className="text-primary">▸</span> Using secure cloud platforms for data storage</li>
                <li className="flex items-center gap-2"><span className="text-primary">▸</span> Avoiding unnecessary retention of sensitive details</li>
              </ul>
            </div>
          </section>

          {/* Section 7 */}
          <section className="relative overflow-hidden border border-primary/30 bg-panel/80 p-6 sm:p-8 backdrop-blur-md transition-all hover:border-primary/50">
            <div className="pointer-events-none absolute left-0 top-0 h-3 w-3 border-l-2 border-t-2 border-primary" />
            <div className="pointer-events-none absolute right-0 top-0 h-3 w-3 border-r-2 border-t-2 border-primary" />

            <div className="mb-4 flex items-center gap-3 border-b border-primary/20 pb-3">
              <h2 className="font-display text-xl font-bold tracking-wider text-primary sm:text-2xl">
                7. DATA RETENTION
              </h2>
            </div>

            <p className="text-xs sm:text-sm text-foreground/80 leading-relaxed">
              We retain user information only for as long as required for event certification, club records, academic-year reporting, and legal obligations. Unnecessary data is archived or permanently deleted at the end of each academic cycle.
            </p>
          </section>

          {/* Section 8 */}
          <section className="relative overflow-hidden border border-primary/30 bg-panel/80 p-6 sm:p-8 backdrop-blur-md transition-all hover:border-primary/50">
            <div className="pointer-events-none absolute left-0 top-0 h-3 w-3 border-l-2 border-t-2 border-primary" />
            <div className="pointer-events-none absolute right-0 top-0 h-3 w-3 border-r-2 border-t-2 border-primary" />

            <div className="mb-4 flex items-center gap-3 border-b border-primary/20 pb-3">
              <h2 className="font-display text-xl font-bold tracking-wider text-primary sm:text-2xl">
                8. USER RIGHTS
              </h2>
            </div>

            <div className="space-y-3 text-xs sm:text-sm text-foreground/80 leading-relaxed">
              <p>Users may request correction of inaccurate information, deletion of optional personal data, or exemption from promotional materials. Contact the club via the official details below.</p>
            </div>
          </section>

          {/* Section 9 */}
          <section className="relative overflow-hidden border border-primary/30 bg-panel/80 p-6 sm:p-8 backdrop-blur-md transition-all hover:border-primary/50">
            <div className="pointer-events-none absolute left-0 top-0 h-3 w-3 border-l-2 border-t-2 border-primary" />
            <div className="pointer-events-none absolute right-0 top-0 h-3 w-3 border-r-2 border-t-2 border-primary" />

            <div className="mb-4 flex items-center gap-3 border-b border-primary/20 pb-3">
              <h2 className="font-display text-xl font-bold tracking-wider text-primary sm:text-2xl">
                9. EXTERNAL LINKS
              </h2>
            </div>

            <p className="text-xs sm:text-sm text-foreground/80 leading-relaxed">
              CodeBreakers platforms may contain links to external websites or third-party tools. We are not responsible for the privacy practices or content of external services.
            </p>
          </section>

          {/* Section 10 */}
          <section className="relative overflow-hidden border border-primary/30 bg-panel/80 p-6 sm:p-8 backdrop-blur-md transition-all hover:border-primary/50">
            <div className="pointer-events-none absolute left-0 top-0 h-3 w-3 border-l-2 border-t-2 border-primary" />
            <div className="pointer-events-none absolute right-0 top-0 h-3 w-3 border-r-2 border-t-2 border-primary" />

            <div className="mb-4 flex items-center gap-3 border-b border-primary/20 pb-3">
              <h2 className="font-display text-xl font-bold tracking-wider text-primary sm:text-2xl">
                10. UPDATES TO THIS PRIVACY POLICY
              </h2>
            </div>

            <p className="text-xs sm:text-sm text-foreground/80 leading-relaxed">
              This policy may be updated periodically to reflect institutional guidelines or operational changes. Continued participation after updates implies acceptance.
            </p>
          </section>

          {/* Section 11 - Contact Information */}
          <section className="relative overflow-hidden border border-primary/50 bg-primary/10 p-6 sm:p-8 backdrop-blur-md">
            <div className="pointer-events-none absolute left-0 top-0 h-3 w-3 border-l-2 border-t-2 border-primary" />
            <div className="pointer-events-none absolute right-0 top-0 h-3 w-3 border-r-2 border-t-2 border-primary" />

            <div className="mb-4 flex items-center gap-3 border-b border-primary/30 pb-3">
              <h2 className="font-display text-xl font-bold tracking-wider text-primary sm:text-2xl">
                11. CONTACT INFORMATION
              </h2>
            </div>

            <p className="mb-4 text-xs sm:text-sm text-foreground/80">
              For questions, data-related requests, or concerns, contact:
            </p>

            <div className="border-l-4 border-primary bg-panel/80 p-4 rounded-r">
              <p className="font-bold text-sm text-foreground">CodeBreakers – Coding Club</p>
              <p className="text-xs text-foreground/75 mt-1">
                Government College of Engineering Kalahandi, Bhawanipatna
              </p>
              <div className="mt-3 flex items-center gap-2 text-xs font-bold text-primary">
                <Mail className="h-4 w-4" />
                <a
                  href="mailto:gcek.codebreakers@gmail.com"
                  className="transition-colors hover:underline hover:text-foreground"
                >
                  gcek.codebreakers@gmail.com
                </a>
              </div>
            </div>
          </section>

          {/* Acknowledgment Box */}
          <section className="relative border border-primary/40 bg-panel/90 p-6 sm:p-8 rounded text-center">
            <div className="flex items-center justify-center gap-2 mb-3 text-primary">
              <h2 className="font-display text-lg font-bold tracking-wider uppercase">
                ACKNOWLEDGMENT
              </h2>
            </div>
            <p className="text-xs sm:text-sm leading-relaxed text-foreground/80 max-w-3xl mx-auto">
              By participating in CodeBreakers or using any of its platforms, you acknowledge that you have read and understood this Privacy Policy and consent to the described data practices.
            </p>
          </section>
        </main>
      </div>
    </div>
  )
}