import { Metadata } from 'next'
import Link from 'next/link'
import { Mail, Phone, MapPin, Github, Instagram, Linkedin, Twitter, ExternalLink, Clock, Globe, Send } from "lucide-react";
import { FaDiscord } from "react-icons/fa";
import { Grid3D } from "@/components/thegridcn/grid";
import { generateSEO } from '@/lib/seo'

export const metadata: Metadata = generateSEO({
  title: 'Contact Us',
  description: 'Get in touch with CodeBreakers GCEK. Reach out for collaborations, queries, or to join our coding community. Contact us via email, social media, or visit us at Government College of Engineering Kalahandi.',
  url: '/contact',
  keywords: [
    'contact CodeBreakers',
    'CodeBreakers GCEK contact',
    'reach CodeBreakers',
    'coding club contact',
    'GCEK coding club email',
    'join CodeBreakers',
    'CodeBreakers collaboration',
    'tech club contact Kalahandi',
  ],
})

export default function ContactPage() {
  return (
    <div className="relative min-h-screen bg-background">
      {/* 3D Grid background */}
      <div className="pointer-events-none fixed inset-0 z-0">
        <Grid3D
          className= "h-full w-full"
          enableParticles={true}
          enableBeams={true}
          cameraAnimation={true}
        />
        <div className="absolute inset-0 bg-linear-to-b from-background/20 via-background/50 to-background" />
      </div>

      {/* CRT scanlines overlay */}
      <div className="crt-scanlines pointer-events-none fixed inset-0 z-10 opacity-[0.03]" />

      <div className="relative z-20 px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
        <div className="mx-auto max-w-7xl">
          {/* Header */}
          <div className="mb-12 text-center sm:mb-16">
            <div className="relative inline-block">
              {/* Scanning frame effect */}
              <div className="absolute -inset-4 border border-primary/30">
                <div className="absolute left-0 top-0 h-2 w-2 border-l-2 border-t-2 border-primary" />
                <div className="absolute right-0 top-0 h-2 w-2 border-r-2 border-t-2 border-primary" />
                <div className="absolute bottom-0 left-0 h-2 w-2 border-b-2 border-l-2 border-primary" />
                <div className="absolute bottom-0 right-0 h-2 w-2 border-b-2 border-r-2 border-primary" />
              </div>
              
              <h1 className="relative px-8 py-4 font-mono text-4xl font-bold tracking-wider text-primary sm:text-5xl md:text-6xl">
                GET IN TOUCH
              </h1>
            </div>
            
            <p className="mt-6 font-mono text-sm tracking-wider text-foreground/70 sm:text-base">
              REACH OUT TO US ANYTIME — WE&apos;RE HERE TO HELP
            </p>
          </div>

          {/* Quick Contact Bar */}
          <div className="mb-10 grid grid-cols-1 gap-4 sm:grid-cols-3">
            {/* Email Quick */}
            <a
              href="mailto:codebreakers@gcekbpatna.ac.in"
              className="group relative flex items-center gap-4 overflow-hidden border border-primary/30 bg-panel/80 p-4 backdrop-blur-sm transition-all duration-300 hover:border-primary hover:shadow-[0_0_20px_var(--primary)]"
            >
              <div className="absolute left-0 top-0 h-2 w-2 border-l-2 border-t-2 border-primary/50 transition-colors group-hover:border-primary" />
              <div className="absolute bottom-0 right-0 h-2 w-2 border-b-2 border-r-2 border-primary/50 transition-colors group-hover:border-primary" />
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-md border border-primary/30 bg-primary/10 transition-colors group-hover:bg-primary/20">
                <Mail className="h-5 w-5 text-primary" />
              </div>
              <div className="min-w-0">
                <p className="font-mono text-[10px] tracking-widest text-foreground/50">EMAIL</p>
                <p className="truncate font-mono text-sm text-primary">gcek.codebreakers@gmail.com</p>
              </div>
            </a>

            {/* Location Quick */}
            <a
              href="https://maps.app.goo.gl/GCEKalahandi"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative flex items-center gap-4 overflow-hidden border border-primary/30 bg-panel/80 p-4 backdrop-blur-sm transition-all duration-300 hover:border-primary hover:shadow-[0_0_20px_var(--primary)]"
            >
              <div className="absolute left-0 top-0 h-2 w-2 border-l-2 border-t-2 border-primary/50 transition-colors group-hover:border-primary" />
              <div className="absolute bottom-0 right-0 h-2 w-2 border-b-2 border-r-2 border-primary/50 transition-colors group-hover:border-primary" />
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-md border border-primary/30 bg-primary/10 transition-colors group-hover:bg-primary/20">
                <MapPin className="h-5 w-5 text-primary" />
              </div>
              <div className="min-w-0">
                <p className="font-mono text-[10px] tracking-widest text-foreground/50">LOCATION</p>
                <p className="truncate font-mono text-sm text-primary">GCE Kalahandi, Odisha</p>
              </div>
            </a>

            {/* Hours Quick */}
            <div className="group relative flex items-center gap-4 overflow-hidden border border-primary/30 bg-panel/80 p-4 backdrop-blur-sm transition-all duration-300 hover:border-primary/50">
              <div className="absolute left-0 top-0 h-2 w-2 border-l-2 border-t-2 border-primary/50 transition-colors group-hover:border-primary" />
              <div className="absolute bottom-0 right-0 h-2 w-2 border-b-2 border-r-2 border-primary/50 transition-colors group-hover:border-primary" />
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-md border border-primary/30 bg-primary/10 transition-colors group-hover:bg-primary/20">
                <Clock className="h-5 w-5 text-primary" />
              </div>
              <div className="min-w-0">
                <p className="font-mono text-[10px] tracking-widest text-foreground/50">AVAILABILITY</p>
                <p className="truncate font-mono text-sm text-primary">Mon – Sat, 9 AM – 5 PM</p>
              </div>
            </div>
          </div>

          {/* Main Content Grid */}
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-5">
            {/* Left Column - Contact Info & Map (3/5) */}
            <div className="space-y-8 lg:col-span-3">

              {/* Contact Details Card */}
              <div className="group relative overflow-hidden border border-primary/30 bg-panel/80 backdrop-blur-sm transition-all duration-300 hover:border-primary/50">
                {/* CRT scanlines */}
                <div className="crt-scanlines pointer-events-none absolute inset-0 opacity-[0.03]" />
                {/* Corner accents */}
                <div className="absolute left-0 top-0 h-4 w-4 border-l-2 border-t-2 border-primary" />
                <div className="absolute right-0 top-0 h-4 w-4 border-r-2 border-t-2 border-primary" />
                <div className="absolute bottom-0 left-0 h-4 w-4 border-b-2 border-l-2 border-primary" />
                <div className="absolute bottom-0 right-0 h-4 w-4 border-b-2 border-r-2 border-primary" />
                {/* Glow effect on hover */}
                <div className="pointer-events-none absolute inset-0 bg-primary/5 opacity-0 transition-opacity group-hover:opacity-100" />

                {/* Card Header */}
                <div className="flex items-center gap-3 border-b border-primary/20 px-6 py-4">
                  <div className="flex h-8 w-8 items-center justify-center rounded border border-primary/30 bg-primary/10">
                    <Globe className="h-4 w-4 text-primary" />
                  </div>
                  <div>
                    <h2 className="font-mono text-base font-bold tracking-wider text-primary">CONTACT DETAILS</h2>
                    <p className="font-mono text-[10px] tracking-widest text-foreground/50">ALL THE WAYS TO REACH US</p>
                  </div>
                </div>

                <div className="relative grid gap-0 divide-y divide-primary/10 sm:grid-cols-2 sm:divide-x sm:divide-y-0">
                  {/* Email Section */}
                  <div className="space-y-4 p-6">
                    <div className="flex items-center gap-2">
                      <Mail className="h-4 w-4 text-primary/70" />
                      <h3 className="font-mono text-xs font-semibold tracking-widest text-foreground/60">EMAIL ADDRESSES</h3>
                    </div>
                    <div className="space-y-3">
                      <a
                        href="mailto:codebreakers@gcekbpatna.ac.in"
                        className="group/link flex items-center gap-2 font-mono text-sm text-foreground/90 transition-colors hover:text-primary"
                      >
                        <Send className="h-3 w-3 shrink-0 text-primary/50 transition-colors group-hover/link:text-primary" />
                        <span className="truncate">codebreakers@gcekbpatna.ac.in</span>
                      </a>
                      <a
                        href="mailto:info@codebreakersgcek.tech"
                        className="group/link flex items-center gap-2 font-mono text-sm text-foreground/90 transition-colors hover:text-primary"
                      >
                        <Send className="h-3 w-3 shrink-0 text-primary/50 transition-colors group-hover/link:text-primary" />
                        <span className="truncate">info@codebreakersgcek.tech</span>
                      </a>
                      <a
                        href="mailto:gcek.codebreakers@gmail.com"
                        className="group/link flex items-center gap-2 font-mono text-sm text-foreground/90 transition-colors hover:text-primary"
                      >
                        <Send className="h-3 w-3 shrink-0 text-primary/50 transition-colors group-hover/link:text-primary" />
                        <span className="truncate">gcek.codebreakers@gmail.com</span>
                      </a>
                    </div>
                  </div>

                  {/* Address Section */}
                  <div className="space-y-4 p-6">
                    <div className="flex items-center gap-2">
                      <MapPin className="h-4 w-4 text-primary/70" />
                      <h3 className="font-mono text-xs font-semibold tracking-widest text-foreground/60">CAMPUS ADDRESS</h3>
                    </div>
                    <div className="space-y-1 font-mono text-sm text-foreground/90">
                      <p className="font-semibold text-primary">Government College of Engineering Kalahandi</p>
                      <p>Bhawanipatna, Kalahandi</p>
                      <p>Odisha — 766002</p>
                      <p>India</p>
                    </div>
                    <a
                      href="https://www.gcekbpatna.ac.in"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 font-mono text-xs text-primary/70 transition-colors hover:text-primary"
                    >
                      <ExternalLink className="h-3 w-3" />
                      gcekbpatna.ac.in
                    </a>
                  </div>
                </div>
              </div>

              {/* Google Map */}
              <div className="group relative overflow-hidden border border-primary/30 bg-panel/80 backdrop-blur-sm transition-all duration-300 hover:border-primary/50">
                {/* Corner accents */}
                <div className="absolute left-0 top-0 z-10 h-4 w-4 border-l-2 border-t-2 border-primary" />
                <div className="absolute right-0 top-0 z-10 h-4 w-4 border-r-2 border-t-2 border-primary" />
                <div className="absolute bottom-0 left-0 z-10 h-4 w-4 border-b-2 border-l-2 border-primary" />
                <div className="absolute bottom-0 right-0 z-10 h-4 w-4 border-b-2 border-r-2 border-primary" />

                {/* Map Header */}
                <div className="flex items-center gap-3 border-b border-primary/20 px-6 py-3">
                  <MapPin className="h-4 w-4 text-primary" />
                  <h3 className="font-mono text-xs font-bold tracking-widest text-primary">LOCATE US ON MAP</h3>
                </div>

                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3751.237795724791!2d83.10372987527153!3d19.914381681470527!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a24ef3382020aa3%3A0x6720328dfbfd451a!2sGovernment%20College%20Of%20Engineering%2CKalahandi(Autonomous)!5e0!3m2!1sen!2sin!4v1764689440519!5m2!1sen!2sin"
                  width="100%"
                  height="350"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="h-[300px] sm:h-[350px] lg:h-[600px]"
                />
              </div>
            </div>

            {/* Right Column - Social & CTA (2/5) */}
            <div className="space-y-8 lg:col-span-2">

              {/* Social Media Card */}
              <div className="group relative overflow-hidden border border-primary/30 bg-panel/80 backdrop-blur-sm transition-all duration-300 hover:border-primary/50">
                {/* CRT scanlines */}
                <div className="crt-scanlines pointer-events-none absolute inset-0 opacity-[0.03]" />
                {/* Corner accents */}
                <div className="absolute left-0 top-0 h-4 w-4 border-l-2 border-t-2 border-primary" />
                <div className="absolute right-0 top-0 h-4 w-4 border-r-2 border-t-2 border-primary" />
                <div className="absolute bottom-0 left-0 h-4 w-4 border-b-2 border-l-2 border-primary" />
                <div className="absolute bottom-0 right-0 h-4 w-4 border-b-2 border-r-2 border-primary" />
                {/* Glow effect on hover */}
                <div className="pointer-events-none absolute inset-0 bg-primary/5 opacity-0 transition-opacity group-hover:opacity-100" />

                {/* Card Header */}
                <div className="flex items-center gap-3 border-b border-primary/20 px-6 py-4">
                  <div className="flex h-8 w-8 items-center justify-center rounded border border-primary/30 bg-primary/10">
                    <Globe className="h-4 w-4 text-primary" />
                  </div>
                  <div>
                    <h2 className="font-mono text-base font-bold tracking-wider text-primary">CONNECT WITH US</h2>
                    <p className="font-mono text-[10px] tracking-widest text-foreground/50">FOLLOW ON SOCIAL MEDIA</p>
                  </div>
                </div>

                <div className="relative space-y-3 p-6">
                  {/* Social links as list items */}
                  <a
                    href="https://github.com/codebreakers-gcek"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group/social flex items-center gap-4 rounded-md border border-primary/20 bg-primary/5 px-4 py-3 transition-all duration-300 hover:border-primary hover:bg-primary/15 hover:shadow-[0_0_15px_var(--primary)]"
                  >
                    <Github className="h-5 w-5 text-primary" />
                    <div className="flex-1 min-w-0">
                      <p className="font-mono text-sm font-medium text-foreground/90">GitHub</p>
                      <p className="truncate font-mono text-[10px] text-foreground/50">@codebreakers-gcek</p>
                    </div>
                    <ExternalLink className="h-3.5 w-3.5 text-foreground/30 transition-colors group-hover/social:text-primary" />
                  </a>

                  <a
                    href="https://linkedin.com/company/codebreakers-gce-kalahandi"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group/social flex items-center gap-4 rounded-md border border-primary/20 bg-primary/5 px-4 py-3 transition-all duration-300 hover:border-primary hover:bg-primary/15 hover:shadow-[0_0_15px_var(--primary)]"
                  >
                    <Linkedin className="h-5 w-5 text-primary" />
                    <div className="flex-1 min-w-0">
                      <p className="font-mono text-sm font-medium text-foreground/90">LinkedIn</p>
                      <p className="truncate font-mono text-[10px] text-foreground/50">CodeBreakers GCE Kalahandi</p>
                    </div>
                    <ExternalLink className="h-3.5 w-3.5 text-foreground/30 transition-colors group-hover/social:text-primary" />
                  </a>

                  <a
                    href="https://instagram.com/gcek.codebreakers"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group/social flex items-center gap-4 rounded-md border border-primary/20 bg-primary/5 px-4 py-3 transition-all duration-300 hover:border-primary hover:bg-primary/15 hover:shadow-[0_0_15px_var(--primary)]"
                  >
                    <Instagram className="h-5 w-5 text-primary" />
                    <div className="flex-1 min-w-0">
                      <p className="font-mono text-sm font-medium text-foreground/90">Instagram</p>
                      <p className="truncate font-mono text-[10px] text-foreground/50">@gcek.codebreakers</p>
                    </div>
                    <ExternalLink className="h-3.5 w-3.5 text-foreground/30 transition-colors group-hover/social:text-primary" />
                  </a>

                  <a
                    href="https://discord.gg/codebreakersgcek"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group/social flex items-center gap-4 rounded-md border border-primary/20 bg-primary/5 px-4 py-3 transition-all duration-300 hover:border-primary hover:bg-primary/15 hover:shadow-[0_0_15px_var(--primary)]"
                  >
                    <FaDiscord className="h-5 w-5 text-primary" />
                    <div className="flex-1 min-w-0">
                      <p className="font-mono text-sm font-medium text-foreground/90">Discord</p>
                      <p className="truncate font-mono text-[10px] text-foreground/50">CodeBreakers Server</p>
                    </div>
                    <ExternalLink className="h-3.5 w-3.5 text-foreground/30 transition-colors group-hover/social:text-primary" />
                  </a>

                  <a
                    href="https://twitter.com/codebreakersgcek"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group/social flex items-center gap-4 rounded-md border border-primary/20 bg-primary/5 px-4 py-3 transition-all duration-300 hover:border-primary hover:bg-primary/15 hover:shadow-[0_0_15px_var(--primary)]"
                  >
                    <Twitter className="h-5 w-5 text-primary" />
                    <div className="flex-1 min-w-0">
                      <p className="font-mono text-sm font-medium text-foreground/90">Twitter / X</p>
                      <p className="truncate font-mono text-[10px] text-foreground/50">@codebreakersgcek</p>
                    </div>
                    <ExternalLink className="h-3.5 w-3.5 text-foreground/30 transition-colors group-hover/social:text-primary" />
                  </a>
                </div>
              </div>

              {/* Join CTA Card */}
              <div className="group relative overflow-hidden border border-primary/30 bg-panel/80 backdrop-blur-sm transition-all duration-300 hover:border-primary hover:shadow-[0_0_30px_var(--primary)]">
                {/* CRT scanlines */}
                <div className="crt-scanlines pointer-events-none absolute inset-0 opacity-[0.03]" />
                {/* Corner accents */}
                <div className="absolute left-0 top-0 h-4 w-4 border-l-2 border-t-2 border-primary transition-all duration-300 group-hover:h-6 group-hover:w-6" />
                <div className="absolute right-0 top-0 h-4 w-4 border-r-2 border-t-2 border-primary transition-all duration-300 group-hover:h-6 group-hover:w-6" />
                <div className="absolute bottom-0 left-0 h-4 w-4 border-b-2 border-l-2 border-primary transition-all duration-300 group-hover:h-6 group-hover:w-6" />
                <div className="absolute bottom-0 right-0 h-4 w-4 border-b-2 border-r-2 border-primary transition-all duration-300 group-hover:h-6 group-hover:w-6" />
                {/* Glow */}
                <div className="pointer-events-none absolute inset-0 bg-primary/5 opacity-0 transition-opacity group-hover:opacity-100" />

                <div className="relative p-6 text-center">
                  <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full border-2 border-primary/30 bg-primary/10">
                    <Send className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="mb-2 font-mono text-lg font-bold tracking-wider text-primary">
                    WANT TO JOIN US?
                  </h3>
                  <p className="mb-5 font-mono text-xs leading-relaxed text-foreground/60">
                    We&apos;re always looking for passionate developers to join CodeBreakers. Start your journey today.
                  </p>
                  <Link
                    href="https://app.codebreakersgcek.tech/login"
                    className="inline-flex items-center gap-2 rounded border-2 border-primary bg-primary/20 px-6 py-3 font-mono text-sm font-bold tracking-wider text-primary transition-all duration-300 hover:bg-primary hover:text-primary-foreground hover:shadow-[0_0_20px_var(--primary)]"
                  >
                    GET STARTED
                    <ExternalLink className="h-4 w-4" />
                  </Link>
                </div>
              </div>

              {/* Club Registration Info */}
              <div className="group relative overflow-hidden border border-primary/30 bg-panel/80 backdrop-blur-sm transition-all duration-300 hover:border-primary/50">
                {/* Corner accents */}
                <div className="absolute left-0 top-0 h-3 w-3 border-l-2 border-t-2 border-primary" />
                <div className="absolute right-0 top-0 h-3 w-3 border-r-2 border-t-2 border-primary" />
                <div className="absolute bottom-0 left-0 h-3 w-3 border-b-2 border-l-2 border-primary" />
                <div className="absolute bottom-0 right-0 h-3 w-3 border-b-2 border-r-2 border-primary" />

                <div className="relative p-6">
                  <div className="mb-3 flex items-center gap-2">
                    <Clock className="h-4 w-4 text-primary/70" />
                    <h3 className="font-mono text-xs font-bold tracking-widest text-primary">QUICK INFO</h3>
                  </div>
                  <div className="space-y-3 font-mono text-xs text-foreground/70">
                    <div className="flex items-start gap-2">
                      <span className="mt-0.5 block h-1.5 w-1.5 shrink-0 rounded-full bg-primary/60" />
                      <p>Recruitment happens at the beginning of each academic year.</p>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="mt-0.5 block h-1.5 w-1.5 shrink-0 rounded-full bg-primary/60" />
                      <p>Open to all branches of GCE Kalahandi students.</p>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="mt-0.5 block h-1.5 w-1.5 shrink-0 rounded-full bg-primary/60" />
                      <p>No prior coding experience required to join.</p>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="mt-0.5 block h-1.5 w-1.5 shrink-0 rounded-full bg-primary/60" />
                      <p>Follow us on socials for event updates and announcements.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
