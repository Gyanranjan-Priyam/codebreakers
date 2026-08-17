import type { Metadata } from 'next'
import { generateSEO } from '@/lib/seo'
import { Grid3D } from '@/components/thegridcn/grid'
import {
  ShieldCheck,
  AlertTriangle,
  Mail,
} from 'lucide-react'

export const metadata: Metadata = generateSEO({
  title: 'Constitution & Terms | CodeBreakers',
  description:
    'Official Constitution, Membership Policy, Code of Conduct and Terms for CodeBreakers - The official coding club of Government College of Engineering Kalahandi, Bhawanipatna',
  url: '/terms',
  keywords: [
    'CodeBreakers Constitution',
    'CodeBreakers Policy Document',
    'CodeBreakers Terms and Conditions',
    'GCEK coding club rules',
    'GCE Kalahandi club constitution',
  ],
})

export default function TermsPage() {
  return (
    <div className="relative min-h-screen bg-background text-foreground overflow-hidden scroll-smooth">
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
                Terms and Conditions
              </h1>
            </div>
            
            <p className="mt-10 font-mono text-sm tracking-wider text-foreground/70 sm:text-base">
              Rules and Guidelines for CodeBreakers
            </p>
          </div>


        {/* Content Body */}
        <main className="space-y-10 font-mono">
          {/* Section 1: Preamble */}
          <section id="section-1" className="relative overflow-hidden border border-primary/30 bg-panel/80 p-6 sm:p-8 backdrop-blur-md transition-all hover:border-primary/50">
            <div className="pointer-events-none absolute left-0 top-0 h-3 w-3 border-l-2 border-t-2 border-primary" />
            <div className="pointer-events-none absolute right-0 top-0 h-3 w-3 border-r-2 border-t-2 border-primary" />

            <div className="mb-4 flex items-center gap-3 border-b border-primary/20 pb-3">
              <h2 className="font-display text-xl font-bold tracking-wider text-primary sm:text-2xl">
                1. PREAMBLE
              </h2>
            </div>

            <div className="space-y-4 text-xs sm:text-sm leading-relaxed text-foreground/85">
              <p>
                <strong className="text-primary font-bold">CodeBreakers</strong> is the official coding club of Government College of Engineering Kalahandi (GCEK), established to nurture a culture of programming, problem-solving, innovation, and collaborative learning among students of all engineering disciplines.
              </p>
              <p>
                This document serves as the official Constitution and Policy Manual of CodeBreakers and is binding on every member, office-bearer, and committee of the club. All members, by joining CodeBreakers, agree to abide by the rules, responsibilities, and code of conduct laid out in this document.
              </p>
            </div>
          </section>

          {/* Section 2: Vision & Core Values */}
          <section id="section-2" className="relative overflow-hidden border border-primary/30 bg-panel/80 p-6 sm:p-8 backdrop-blur-md transition-all hover:border-primary/50">
            <div className="pointer-events-none absolute left-0 top-0 h-3 w-3 border-l-2 border-t-2 border-primary" />
            <div className="pointer-events-none absolute right-0 top-0 h-3 w-3 border-r-2 border-t-2 border-primary" />

            <div className="mb-4 flex items-center gap-3 border-b border-primary/20 pb-3">
              <h2 className="font-display text-xl font-bold tracking-wider text-primary sm:text-2xl">
                2. VISION &amp; CORE VALUES
              </h2>
            </div>

            <p className="mb-4 text-xs sm:text-sm text-foreground/80">
              CodeBreakers exists as a single unified family of coders. The following core values are non-negotiable and form the foundation of the club&apos;s culture:
            </p>

            <div className="space-y-6">
              {/* 2.1 */}
              <div className="border-l-2 border-primary/40 pl-4 bg-primary/5 p-4 rounded-r">
                <h3 className="text-sm sm:text-base font-bold text-primary mb-2">
                  2.1 No Branch Bias — &ldquo;One Club, One Family&rdquo;
                </h3>
                <p className="text-xs sm:text-sm leading-relaxed text-foreground/80 mb-2">
                  There shall be no branch-specific grouping, favouritism, or discrimination of any kind within the club. Membership, opportunities, roles, and recognition are open equally to students of every branch (CSE, ECE, EE, Mechanical, Civil).
                </p>
                <p className="text-xs text-foreground/85 font-semibold">
                  ▸ All members are considered part of one CodeBreakers family. No subgroup, event, or internal decision may be organized on the basis of a student&apos;s branch.
                </p>
              </div>

              {/* 2.2 */}
              <div className="border-l-2 border-primary/40 pl-4 bg-primary/5 p-4 rounded-r">
                <h3 className="text-sm sm:text-base font-bold text-primary mb-2">
                  2.2 Respect for Seniors
                </h3>
                <p className="text-xs sm:text-sm leading-relaxed text-foreground/80 mb-2">
                  Every member must show courtesy and respect toward senior members, in both behavior and communication, on and off club premises. Seniors are expected to reciprocate with mentorship, guidance, and fairness toward juniors — respect flows both ways, but hierarchy and experience must be acknowledged.
                </p>
                <p className="text-xs text-foreground/85 font-semibold">
                  ▸ Disagreements with a senior&apos;s decision should be raised respectfully through the Secretary or Assistant Secretary, never through public confrontation.
                </p>
              </div>

              {/* 2.3 */}
              <div className="border-l-2 border-primary/40 pl-4">
                <h3 className="text-sm sm:text-base font-bold text-primary mb-3">
                  2.3 Other Core Values
                </h3>
                <div className="grid gap-3 sm:grid-cols-2">
                  <div className="border border-primary/20 p-3 rounded">
                    <span className="font-bold text-primary text-xs">INTEGRITY:</span>
                    <p className="text-xs text-foreground/75 mt-1">Original work, honest credit-sharing, and zero tolerance for plagiarism in projects or hackathons.</p>
                  </div>
                  <div className="border border-primary/20 p-3 rounded">
                    <span className="font-bold text-primary text-xs">INCLUSIVITY:</span>
                    <p className="text-xs text-foreground/75 mt-1">Equal opportunity regardless of branch, year, gender, or skill level. Beginners are mentored, not mocked.</p>
                  </div>
                  <div className="border border-primary/20 p-3 rounded">
                    <span className="font-bold text-primary text-xs">DISCIPLINE:</span>
                    <p className="text-xs text-foreground/75 mt-1">Punctuality and professionalism in meetings, events, and official communication channels.</p>
                  </div>
                  <div className="border border-primary/20 p-3 rounded">
                    <span className="font-bold text-primary text-xs">COLLABORATION:</span>
                    <p className="text-xs text-foreground/75 mt-1">Members are encouraged to help each other grow rather than gate-keep knowledge.</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Section 3: Membership Policy */}
          <section id="section-3" className="relative overflow-hidden border border-primary/30 bg-panel/80 p-6 sm:p-8 backdrop-blur-md transition-all hover:border-primary/50">
            <div className="pointer-events-none absolute left-0 top-0 h-3 w-3 border-l-2 border-t-2 border-primary" />
            <div className="pointer-events-none absolute right-0 top-0 h-3 w-3 border-r-2 border-t-2 border-primary" />

            <div className="mb-4 flex items-center gap-3 border-b border-primary/20 pb-3">
              <h2 className="font-display text-xl font-bold tracking-wider text-primary sm:text-2xl">
                3. MEMBERSHIP POLICY
              </h2>
            </div>

            <div className="space-y-6">
              <div className="border-l-2 border-primary/40 pl-4">
                <h3 className="text-sm font-bold text-primary mb-1">3.1 Eligibility</h3>
                <p className="text-xs sm:text-sm text-foreground/85">
                  Open to all currently enrolled students of GCEK, from any year and any branch. No prior coding experience is required to join as a General Member.
                </p>
              </div>

              <div className="border-l-2 border-primary/40 pl-4">
                <h3 className="text-sm font-bold text-primary mb-1">3.2 Annual Membership &amp; Renewal</h3>
                <p className="text-xs sm:text-sm text-foreground/85 leading-relaxed mb-2">
                  Membership is renewed annually at the start of each academic year (first 3 weeks of semester). A nominal annual fee (decided jointly by Treasurer &amp; Secretary and approved by PIC) funds events, resources, and merchandise. Receipts are issued and logged in the financial register.
                </p>
                <p className="text-xs text-primary font-semibold">
                  ▸ Privileges: Grants access to workshops, internal hackathons, mentorship programs, private communication channels, and priority external registration. Final-year members automatically transition to &ldquo;Alumni Member&rdquo; status upon graduation.
                </p>
              </div>

              <div className="border-l-2 border-primary/40 pl-4">
                <h3 className="text-sm font-bold text-primary mb-1">3.3 Renewal &amp; Non-Renewal</h3>
                <p className="text-xs sm:text-sm text-foreground/85">
                  Members must actively renew membership each year; non-renewal by the deadline results in lapsed membership and loss of member privileges. Lapsed members may rejoin in a later cycle by completing renewal formalities.
                </p>
              </div>

              <div className="border-l-2 border-primary/40 pl-4">
                <h3 className="text-sm font-bold text-primary mb-1">3.4 Termination of Membership</h3>
                <p className="text-xs sm:text-sm text-foreground/85">
                  Membership may be revoked by a majority decision of the Secretary, Assistant Secretary, and Treasurer in cases of serious misconduct. A member facing termination has the right to explain their side before a final decision.
                </p>
              </div>
            </div>
          </section>

          {/* Section 4: Attendance Policy */}
          <section id="section-4" className="relative overflow-hidden border border-primary/30 bg-panel/80 p-6 sm:p-8 backdrop-blur-md transition-all hover:border-primary/50">
            <div className="pointer-events-none absolute left-0 top-0 h-3 w-3 border-l-2 border-t-2 border-primary" />
            <div className="pointer-events-none absolute right-0 top-0 h-3 w-3 border-r-2 border-t-2 border-primary" />

            <div className="mb-4 flex items-center gap-3 border-b border-primary/20 pb-3">
              <h2 className="font-display text-xl font-bold tracking-wider text-primary sm:text-2xl">
                4. ATTENDANCE POLICY
              </h2>
            </div>

            <div className="space-y-4 text-xs sm:text-sm leading-relaxed text-foreground/85">
              <div className="border border-primary/20 bg-primary/5 p-4 rounded">
                <h3 className="text-sm font-bold text-primary mb-2">4.1 General Meetings &amp; Attendance Threshold</h3>
                <ul className="space-y-1.5 text-xs text-foreground/85">
                  <li className="flex items-start gap-2"><span className="text-primary">▸</span> Attendance is recorded at every official club meeting.</li>
                  <li className="flex items-start gap-2"><span className="text-primary font-bold">▸ Minimum 75% attendance across all scheduled general meetings in a semester is mandatory.</span></li>
                  <li className="flex items-start gap-2"><span className="text-primary">▸</span> Arriving more than 15 minutes late without prior notice counts as a half-absence.</li>
                  <li className="flex items-start gap-2"><span className="text-primary">▸</span> A fine will be imposed on absentees if the reason is invalid (Maximum ₹10 Rupees).</li>
                  <li className="flex items-start gap-2"><span className="text-primary font-semibold">▸ All attendance registers are signed by the Secretary and submitted to the Professor in Charge (PIC) and respective Department HoDs.</span></li>
                </ul>
              </div>

              <div className="space-y-2">
                <h3 className="text-sm font-bold text-primary">4.2 Events, Workshops &amp; Committee Work</h3>
                <p className="text-xs text-foreground/80">
                  Committee members (Secretary, Assistant Secretary, Treasurer, and Group Heads) must attend all events they organize. Registered general members are expected to attend; repeated no-shows after confirmed registration affect future event priority.
                </p>
              </div>

              <div className="space-y-2">
                <h3 className="text-sm font-bold text-primary">4.3 Leave / Absence Procedure</h3>
                <p className="text-xs text-foreground/80">
                  Members unable to attend a meeting must inform the Secretary or Assistant Secretary at least 24 hours in advance, except in genuine emergencies. Unapproved absences are logged by the Assistant Secretary.
                </p>
              </div>

              <div className="space-y-2">
                <h3 className="text-sm font-bold text-primary">4.4 Consequences of Repeated Absence</h3>
                <p className="text-xs text-foreground/80">
                  Falling below 75% attendance for two consecutive semesters without valid reason leads to formal warning, loss of voting rights, or removal from held committee positions.
                </p>
              </div>
            </div>
          </section>

          {/* Section 5: Event Registration & Fee Policy */}
          <section id="section-5" className="relative overflow-hidden border border-primary/30 bg-panel/80 p-6 sm:p-8 backdrop-blur-md transition-all hover:border-primary/50">
            <div className="pointer-events-none absolute left-0 top-0 h-3 w-3 border-l-2 border-t-2 border-primary" />
            <div className="pointer-events-none absolute right-0 top-0 h-3 w-3 border-r-2 border-t-2 border-primary" />

            <div className="mb-4 flex items-center gap-3 border-b border-primary/20 pb-3">
              <h2 className="font-display text-xl font-bold tracking-wider text-primary sm:text-2xl">
                5. EVENT REGISTRATION &amp; FEE POLICY
              </h2>
            </div>

            <div className="space-y-6">
              {/* 5.1 */}
              <div className="border-l-2 border-primary/40 pl-4 bg-primary/5 p-4 rounded-r">
                <h3 className="text-sm sm:text-base font-bold text-primary mb-2">
                  5.1 CodeBreakers-Organized Events (College Techfest)
                </h3>
                <p className="text-xs sm:text-sm text-foreground/85 leading-relaxed mb-2">
                  All hackathons and ideathons organized by CodeBreakers as part of the college techfest will have <strong className="text-primary font-bold uppercase">FREE REGISTRATION</strong> for every member. No registration fee will be charged for flagship club-run events.
                </p>
                <p className="text-xs text-foreground/75">
                  ▸ Member/team must be a permanent part of CodeBreakers. Event costs (venue, prizes, logistics) are covered through annual membership funds and sponsorships.
                </p>
              </div>

              {/* 5.2 */}
              <div className="border-l-2 border-primary/40 pl-4 bg-primary/5 p-4 rounded-r">
                <h3 className="text-sm sm:text-base font-bold text-primary mb-2">
                  5.2 Hackathons at Other Colleges (Reimbursement)
                </h3>
                <p className="text-xs sm:text-sm text-foreground/85 leading-relaxed mb-2">
                  When a CodeBreakers team represents the club at a hackathon hosted by another college, the club will reimburse the team&apos;s registration fee, <strong className="text-primary font-bold uppercase">PROVIDED THE TEAM PERFORMS WELL AND WINS A PRIZE/AWARD</strong>.
                </p>
                <p className="text-xs text-foreground/75">
                  ▸ Teams must submit prior notice and proof to the Secretary/Treasurer before registering. Reimbursement is processed upon submitting valid prize proof (winners certificate/announcement).
                </p>
              </div>

              {/* 5.3 */}
              <div className="border-l-2 border-primary/40 pl-4 bg-primary/5 p-4 rounded-r">
                <h3 className="text-sm sm:text-base font-bold text-primary mb-2">
                  5.3 Small Internal Club Events
                </h3>
                <p className="text-xs sm:text-sm text-foreground/85 leading-relaxed">
                  For small internal events (workshops, practice sessions, internal contests), a nominal contribution of <strong className="text-primary font-bold">NOT MORE THAN ₹10 PER MEMBER</strong> and <strong className="text-primary font-bold">NOT MORE THAN ₹50 PER TEAM</strong> may be charged for minor logistics/refreshments.
                </p>
              </div>
            </div>
          </section>

          {/* Section 6: Organizational Structure & Roles */}
          <section id="section-6" className="relative overflow-hidden border border-primary/30 bg-panel/80 p-6 sm:p-8 backdrop-blur-md transition-all hover:border-primary/50">
            <div className="pointer-events-none absolute left-0 top-0 h-3 w-3 border-l-2 border-t-2 border-primary" />
            <div className="pointer-events-none absolute right-0 top-0 h-3 w-3 border-r-2 border-t-2 border-primary" />

            <div className="mb-4 flex items-center gap-3 border-b border-primary/20 pb-3">
              <h2 className="font-display text-xl font-bold tracking-wider text-primary sm:text-2xl">
                6. ORGANIZATIONAL STRUCTURE &amp; ROLES
              </h2>
            </div>

            <p className="mb-6 text-xs sm:text-sm text-foreground/80">
              CodeBreakers is governed by a core committee supported by three functional working groups. All positions are open to members of any branch and year:
            </p>

            <div className="grid gap-6 md:grid-cols-3">
              {/* Secretary */}
              <div className="border border-primary/30 bg-primary/5 p-5 rounded">
                <div className="font-bold text-base text-primary mb-3 pb-2 border-b border-primary/20">
                  6.1 SECRETARY
                </div>
                <ul className="space-y-2 text-xs text-foreground/80">
                  <li><span className="text-primary font-bold">Chief Leadership:</span> Overall administrative authority; oversees all committees.</li>
                  <li><span className="text-primary font-bold">Meetings:</span> Schedules and chairs general body &amp; core meetings.</li>
                  <li><span className="text-primary font-bold">External Rep:</span> Official liaison to PIC, HoDs, college admin &amp; sponsors.</li>
                  <li><span className="text-primary font-bold">Enforcement:</span> Responsible for enforcing policy &amp; disciplinary action.</li>
                </ul>
              </div>

              {/* Assistant Secretary */}
              <div className="border border-primary/30 bg-primary/5 p-5 rounded">
                <div className="font-bold text-base text-primary mb-3 pb-2 border-b border-primary/20">
                  6.2 ASST. SECRETARY
                </div>
                <ul className="space-y-2 text-xs text-foreground/80">
                  <li><span className="text-primary font-bold">Secretary Support:</span> Assumes Secretary duties during absence.</li>
                  <li><span className="text-primary font-bold">Records &amp; Attendance:</span> Maintains attendance &amp; membership database.</li>
                  <li><span className="text-primary font-bold">Coordination:</span> Primary liaison between core committee &amp; working groups.</li>
                  <li><span className="text-primary font-bold">Grievance Contact:</span> First point for complaints and leave requests.</li>
                </ul>
              </div>

              {/* Treasurer */}
              <div className="border border-primary/30 bg-primary/5 p-5 rounded">
                <div className="font-bold text-base text-primary mb-3 pb-2 border-b border-primary/20">
                  6.3 TREASURER
                </div>
                <ul className="space-y-2 text-xs text-foreground/80">
                  <li><span className="text-primary font-bold">Financial Management:</span> Manages membership fees, budgets &amp; sponsorships.</li>
                  <li><span className="text-primary font-bold">Transparency:</span> Publishes semester income-expense reports to members.</li>
                  <li><span className="text-primary font-bold">Receipt Log:</span> Issues and logs receipts for all transactions.</li>
                  <li><span className="text-primary font-bold">Audit Safety:</span> Backs all expenses with valid bills for PIC review.</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Section 7: Working Groups (Sub-Committees) */}
          <section id="section-7" className="relative overflow-hidden border border-primary/30 bg-panel/80 p-6 sm:p-8 backdrop-blur-md transition-all hover:border-primary/50">
            <div className="pointer-events-none absolute left-0 top-0 h-3 w-3 border-l-2 border-t-2 border-primary" />
            <div className="pointer-events-none absolute right-0 top-0 h-3 w-3 border-r-2 border-t-2 border-primary" />

            <div className="mb-4 flex items-center gap-3 border-b border-primary/20 pb-3">
              <h2 className="font-display text-xl font-bold tracking-wider text-primary sm:text-2xl">
                7. WORKING GROUPS (SUB-COMMITTEES)
              </h2>
            </div>

            <p className="mb-4 text-xs sm:text-sm text-foreground/80">
              Each working group is led by a Group Head reporting to the Assistant Secretary and Secretary:
            </p>

            <div className="space-y-4">
              <div className="border-l-2 border-primary/40 pl-4">
                <h3 className="text-sm font-bold text-primary mb-1">7.1 Social Media Management Group</h3>
                <p className="text-xs sm:text-sm text-foreground/80">
                  Manages official accounts (Instagram, LinkedIn, WhatsApp/Discord). Designs promotional posts, maintains brand voice, and documents events through media archives. All public posts must be approved by the Secretary before publishing.
                </p>
              </div>

              <div className="border-l-2 border-primary/40 pl-4">
                <h3 className="text-sm font-bold text-primary mb-1">7.2 Website Management Group</h3>
                <p className="text-xs sm:text-sm text-foreground/80">
                  Maintains and updates official CodeBreakers web platforms, events calendar, blogs, and member portals. Manages hosting, domain security, and technical infrastructure.
                </p>
              </div>

              <div className="border-l-2 border-primary/40 pl-4">
                <h3 className="text-sm font-bold text-primary mb-1">7.3 Events Management Group</h3>
                <p className="text-xs sm:text-sm text-foreground/80">
                  Plans and executes workshops, hackathons, coding contests, and orientation drives. Manages venue booking, timing, volunteers, and submits post-event reports to the Secretary within 1 week.
                </p>
              </div>
            </div>
          </section>

          {/* Section 8: Code of Conduct */}
          <section id="section-8" className="relative overflow-hidden border border-primary/30 bg-panel/80 p-6 sm:p-8 backdrop-blur-md transition-all hover:border-primary/50">
            <div className="pointer-events-none absolute left-0 top-0 h-3 w-3 border-l-2 border-t-2 border-primary" />
            <div className="pointer-events-none absolute right-0 top-0 h-3 w-3 border-r-2 border-t-2 border-primary" />

            <div className="mb-4 flex items-center gap-3 border-b border-primary/20 pb-3">
              <h2 className="font-display text-xl font-bold tracking-wider text-primary sm:text-2xl">
                8. CODE OF CONDUCT
              </h2>
            </div>

            <ul className="space-y-2 text-xs sm:text-sm leading-relaxed text-foreground/85 pl-2">
              <li className="flex items-start gap-2"><span className="text-primary">▸</span> Treat every member — junior, senior, or committee — with dignity and respect at all times.</li>
              <li className="flex items-start gap-2"><span className="text-primary">▸</span> No branch-based, gender-based, or year-based discrimination will be tolerated.</li>
              <li className="flex items-start gap-2"><span className="text-primary">▸</span> Use official communication channels responsibly; no spam or off-topic personal conflicts.</li>
              <li className="flex items-start gap-2"><span className="text-primary">▸</span> Give credit where due — plagiarism or claiming others&apos; work is strictly prohibited.</li>
              <li className="flex items-start gap-2"><span className="text-primary">▸</span> Maintain professionalism when representing CodeBreakers at external events.</li>
              <li className="flex items-start gap-2"><span className="text-primary">▸</span> Constructive criticism is welcome; personal attacks, ragging, or humiliation are strictly forbidden.</li>
            </ul>
          </section>

          {/* Section 9: Strict Rules & Disciplinary Action */}
          <section id="section-9" className="relative overflow-hidden border border-destructive/50 bg-destructive/10 p-6 sm:p-8 backdrop-blur-md shadow-[0_0_25px_rgba(239,68,68,0.2)]">
            <div className="pointer-events-none absolute left-0 top-0 h-3 w-3 border-l-2 border-t-2 border-destructive" />
            <div className="pointer-events-none absolute right-0 top-0 h-3 w-3 border-r-2 border-t-2 border-destructive" />

            <div className="mb-4 flex items-center gap-3 border-b border-destructive/30 pb-3">
              <AlertTriangle className="h-6 w-6 text-destructive shrink-0" />
              <h2 className="font-display text-xl font-bold tracking-wider text-destructive sm:text-2xl">
                9. STRICT RULES &amp; DISCIPLINARY ACTION
              </h2>
            </div>

            <p className="mb-4 text-xs sm:text-sm font-bold text-destructive">
              The following are treated as serious violations. Consequences range from formal written warning to permanent expulsion from the club and reporting to college administration:
            </p>

            <div className="space-y-3 text-xs sm:text-sm font-mono text-foreground/90">
              <div className="flex items-start gap-3 border-l-2 border-destructive/50 bg-destructive/5 p-3 rounded">
                <span className="font-bold text-destructive shrink-0">9.1</span>
                <p className="leading-relaxed">
                  <strong className="text-destructive font-bold">Zero Tolerance for Ragging/Harassment:</strong>{' '}
                  Zero tolerance for ragging, bullying, or harassment of any member on any basis.
                </p>
              </div>

              <div className="flex items-start gap-3 border-l-2 border-destructive/50 bg-destructive/5 p-3 rounded">
                <span className="font-bold text-destructive shrink-0">9.2</span>
                <p className="leading-relaxed">
                  <strong className="text-destructive font-bold">No Branch Cliques:</strong>{' '}
                  Any act of branch-based discrimination, favoritism, or branch-only sub-groups is strictly prohibited.
                </p>
              </div>

              <div className="flex items-start gap-3 border-l-2 border-destructive/50 bg-destructive/5 p-3 rounded">
                <span className="font-bold text-destructive shrink-0">9.3</span>
                <p className="leading-relaxed">
                  <strong className="text-destructive font-bold">Financial Dishonesty:</strong>{' '}
                  Misuse of club funds, forging receipts, or financial dishonesty leads to immediate removal &amp; reporting.
                </p>
              </div>

              <div className="flex items-start gap-3 border-l-2 border-destructive/50 bg-destructive/5 p-3 rounded">
                <span className="font-bold text-destructive shrink-0">9.4</span>
                <p className="leading-relaxed">
                  <strong className="text-destructive font-bold">Plagiarism:</strong>{' '}
                  Plagiarizing code/projects in hackathons leads to disqualification and formal warning on record.
                </p>
              </div>

              <div className="flex items-start gap-3 border-l-2 border-destructive/50 bg-destructive/5 p-3 rounded">
                <span className="font-bold text-destructive shrink-0">9.5</span>
                <p className="leading-relaxed">
                  <strong className="text-destructive font-bold">Brand Misuse:</strong>{' '}
                  Unauthorized use of CodeBreakers name, logo, or social credentials for personal gain is prohibited.
                </p>
              </div>

              <div className="flex items-start gap-3 border-l-2 border-destructive/50 bg-destructive/5 p-3 rounded">
                <span className="font-bold text-destructive shrink-0">9.6</span>
                <p className="leading-relaxed">
                  <strong className="text-destructive font-bold">Confidentiality Leaks:</strong>{' '}
                  Sharing confidential club information with outsiders without Secretary approval is a serious violation.
                </p>
              </div>

              <div className="flex items-start gap-3 border-l-2 border-destructive/50 bg-destructive/5 p-3 rounded">
                <span className="font-bold text-destructive shrink-0">9.7</span>
                <p className="leading-relaxed">
                  <strong className="text-destructive font-bold">Substance Abuse &amp; Misconduct:</strong>{' '}
                  Any substance abuse or illegal activity during events results in immediate expulsion and college escalation.
                </p>
              </div>
            </div>
          </section>

          {/* Section 10: Amendment of This Policy */}
          <section id="section-10" className="relative overflow-hidden border border-primary/30 bg-panel/80 p-6 sm:p-8 backdrop-blur-md transition-all hover:border-primary/50">
            <div className="pointer-events-none absolute left-0 top-0 h-3 w-3 border-l-2 border-t-2 border-primary" />
            <div className="pointer-events-none absolute right-0 top-0 h-3 w-3 border-r-2 border-t-2 border-primary" />

            <div className="mb-4 flex items-center gap-3 border-b border-primary/20 pb-3">
              <h2 className="font-display text-xl font-bold tracking-wider text-primary sm:text-2xl">
                10. AMENDMENT OF THIS POLICY
              </h2>
            </div>

            <p className="text-xs sm:text-sm text-foreground/85 leading-relaxed">
              This policy document may be reviewed and amended at the start of every academic year by the Secretary, Assistant Secretary, and Treasurer, in consultation with the faculty advisor and general body. Any amendment must be communicated to all members in writing at least one week before it takes effect.
            </p>
          </section>

          {/* Contact & Official Office Section */}
          <section className="relative overflow-hidden border border-primary/50 bg-primary/10 p-6 sm:p-8 backdrop-blur-md shadow-[0_0_25px_var(--primary)]">
            <div className="pointer-events-none absolute left-0 top-0 h-3 w-3 border-l-2 border-t-2 border-primary" />
            <div className="pointer-events-none absolute right-0 top-0 h-3 w-3 border-r-2 border-t-2 border-primary" />

            <div className="mb-4 flex items-center gap-3 border-b border-primary/30 pb-3">
              <Mail className="h-6 w-6 text-primary shrink-0" />
              <h2 className="font-display text-xl font-bold tracking-wider text-primary sm:text-2xl">
                OFFICIAL CLUB CONTACT &amp; ENQUIRIES
              </h2>
            </div>

            <p className="mb-4 text-xs sm:text-sm text-foreground/80">
              For constitution queries, committee grievances, or official communications:
            </p>

            <div className="border-l-4 border-primary bg-panel/80 p-4 rounded-r">
              <p className="font-bold text-sm text-foreground">CodeBreakers – Official Coding Club</p>
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

          {/* Acknowledgment Footer Card */}
          <section className="relative border border-primary/40 bg-panel/90 p-6 sm:p-8 rounded text-center">
            <div className="flex items-center justify-center gap-2 mb-3 text-primary">
              <ShieldCheck className="h-6 w-6 animate-pulse" />
              <h2 className="font-display text-lg font-bold tracking-wider uppercase">
                MEMBER ACKNOWLEDGMENT
              </h2>
            </div>
            <p className="text-xs sm:text-sm leading-relaxed text-foreground/80 max-w-3xl mx-auto">
              By joining CodeBreakers or participating in any club-organized events, you acknowledge that you have read, understood, and agreed to the official CodeBreakers Constitution &amp; Policy Document (Version 1.0).
            </p>
          </section>
        </main>
      </div>
    </div>
  )
}