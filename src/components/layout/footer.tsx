/* eslint-disable react/jsx-no-comment-textnodes */
"use client";

import Image from "next/image";
import Link from "next/link";
import { UplinkHeader } from "@/components/thegridcn";
import { Github, Linkedin, Instagram, Mail, Twitter } from "lucide-react";

export function Footer() {
  return (
    <footer className="relative z-10 overflow-hidden border-t border-primary/30 bg-panel/90 backdrop-blur-md text-foreground">
      {/* CRT scanline effect */}
      <div className="crt-scanlines pointer-events-none absolute inset-0 opacity-[0.03]" />

      {/* Footer uplink status bar */}
      <UplinkHeader
        leftText="SYSTEM: CODEBREAKERS v1.0.0"
        rightText="UPTIME: 99.9% - END OF LINE"
      />

      <div className="container mx-auto px-6 pt-12 pb-4 md:pt-16 lg:pt-20">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-12 lg:gap-12">
          {/* Left Column: Brand & Socials */}
          <div className="space-y-6 md:col-span-5 lg:col-span-4">
            {/* Brand Logo & Title */}
            <Link href="/" className="group inline-flex items-center gap-3">
              <div className="relative h-10 w-10 overflow-hidden rounded-md ">
                <Image
                  src="/codebreakers-logo.png"
                  alt="CodeBreakers Logo"
                  fill
                  className="object-contain"
                />
              </div>
              <div>
                <span className="text-2xl font-bold tracking-wider text-primary">
                  Codebreakers
                </span>
                <span className="block font-mono text-[10px] tracking-widest text-foreground/60">
                  Govt. College of Engineering Kalahandi
                </span>
              </div>
            </Link>

            <p className="max-w-sm font-mono text-xs leading-relaxed text-foreground/70">
              Premier coding club at Government College of Engineering
              Kalahandi. Empowering developers, building innovative projects,
              and fostering tech excellence.
            </p>

            {/* Social Icons (matching the reference image layout & cyber style) */}
            <div className="flex flex-col items-start space-y-4">
              <div className="relative inline-block border border-primary/30 bg-primary/5 px-3 py-1">
                <div className="absolute -left-px -top-px h-2 w-2 border-l-2 border-t-2 border-primary" />
                <div className="absolute -right-px -top-px h-2 w-2 border-r-2 border-t-2 border-primary" />
                <h3 className="font-display text-sm font-bold tracking-[0.3em] text-primary">
                  FOLLOW
                </h3>
              </div>

              <div className="flex gap-4">
                {/* LinkedIn */}
                <a
                  href="https://linkedin.com/company/codebreakers-gce-kalahandi"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative flex h-12 w-12 items-center justify-center border border-primary/30 bg-card/30 backdrop-blur-sm transition-all hover:border-primary hover:bg-primary/10 hover:shadow-[0_0_20px_var(--primary)]"
                >
                  <div className="absolute -left-px -top-px h-3 w-3 border-l-2 border-t-2 border-primary/40 transition-colors group-hover:border-primary" />
                  <div className="absolute -right-px -bottom-px h-3 w-3 border-b-2 border-r-2 border-primary/40 transition-colors group-hover:border-primary" />
                  <svg
                    className="h-5 w-5 text-foreground/80 transition-colors group-hover:text-primary"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                </a>

                {/* Instagram */}
                <a
                  href="https://www.instagram.com/gcek.codebreakers"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative flex h-12 w-12 items-center justify-center border border-primary/30 bg-card/30 backdrop-blur-sm transition-all hover:border-primary hover:bg-primary/10 hover:shadow-[0_0_20px_var(--primary)]"
                >
                  <div className="absolute -left-px -top-px h-3 w-3 border-l-2 border-t-2 border-primary/40 transition-colors group-hover:border-primary" />
                  <div className="absolute -right-px -bottom-px h-3 w-3 border-b-2 border-r-2 border-primary/40 transition-colors group-hover:border-primary" />
                  <svg
                    className="h-5 w-5 text-foreground/80 transition-colors group-hover:text-primary"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </a>

                {/* GitHub */}
                <a
                  href="https://github.com/codebreakers-gcek"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative flex h-12 w-12 items-center justify-center border border-primary/30 bg-card/30 backdrop-blur-sm transition-all hover:border-primary hover:bg-primary/10 hover:shadow-[0_0_20px_var(--primary)]"
                >
                  <div className="absolute -left-px -top-px h-3 w-3 border-l-2 border-t-2 border-primary/40 transition-colors group-hover:border-primary" />
                  <div className="absolute -right-px -bottom-px h-3 w-3 border-b-2 border-r-2 border-primary/40 transition-colors group-hover:border-primary" />
                  <svg
                    className="h-5 w-5 text-foreground/80 transition-colors group-hover:text-primary"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                </a>

                {/* Mail */}
                <a
                  href="mailto:codebreakersgcek@gmail.com"
                  className="group relative flex h-12 w-12 items-center justify-center border border-primary/30 bg-card/30 backdrop-blur-sm transition-all hover:border-primary hover:bg-primary/10 hover:shadow-[0_0_20px_var(--primary)]"
                >
                  <div className="absolute -left-px -top-px h-3 w-3 border-l-2 border-t-2 border-primary/40 transition-colors group-hover:border-primary" />
                  <div className="absolute -right-px -bottom-px h-3 w-3 border-b-2 border-r-2 border-primary/40 transition-colors group-hover:border-primary" />
                  <svg
                    className="h-5 w-5 text-foreground/80 transition-colors group-hover:text-primary"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Right Columns: Navigation Links */}
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 md:col-span-7 lg:col-span-8">
            {/* Column 1: NAVIGATION */}
            <div className="space-y-4">
              <div className="relative inline-block border border-primary/30 bg-primary/5 px-3 py-1">
                <div className="absolute -left-px -top-px h-2 w-2 border-l-2 border-t-2 border-primary" />
                <div className="absolute -right-px -top-px h-2 w-2 border-r-2 border-t-2 border-primary" />
                <h3 className="font-display text-sm font-bold tracking-[0.3em] text-primary">
                  NAVIGATION
                </h3>
              </div>
              <ul className="space-y-2.5 font-mono text-xs text-foreground/75">
                <li>
                  <Link
                    href="/"
                    className="transition-colors hover:text-primary"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    href="/events"
                    className="transition-colors hover:text-primary"
                  >
                    Events
                  </Link>
                </li>
                <li>
                  <Link
                    href="/about-us"
                    className="transition-colors hover:text-primary"
                  >
                    About us
                  </Link>
                </li>
                <li>
                  <Link
                    href="/developers/leads"
                    className="transition-colors hover:text-primary"
                  >
                    Executive Council
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contact"
                    className="transition-colors hover:text-primary"
                  >
                    Contact Us
                  </Link>
                </li>
                <li>
                  <a
                    href="/faq"
                    className="transition-colors hover:text-primary"
                  >
                    FAQs
                  </a>
                </li>
              </ul>
            </div>

            {/* Column 2: EVENTS */}
            <div className="space-y-4">
              <div className="relative inline-block border border-primary/30 bg-primary/5 px-3 py-1">
                <div className="absolute -left-px -top-px h-2 w-2 border-l-2 border-t-2 border-primary" />
                <div className="absolute -right-px -top-px h-2 w-2 border-r-2 border-t-2 border-primary" />
                <h3 className="font-display text-sm font-bold tracking-[0.3em] text-primary">
                  EVENTS
                </h3>
              </div>
              <ul className="space-y-2.5 font-mono text-xs text-foreground/75">
                <li>
                  <Link
                    href="/events/hackathon/hack-nova"
                    className="transition-colors hover:text-primary"
                  >
                    Hack Nova
                  </Link>
                </li>
                <li>
                  <Link
                    href="/events/ideathon"
                    className="transition-colors hover:text-primary"
                  >
                    Ideathons
                  </Link>
                </li>
                <li>
                  <Link
                    href="/events/9-lock-challenges"
                    className="transition-colors hover:text-primary"
                  >
                    9-Lock Challenges
                  </Link>
                </li>
                <li>
                  <Link
                    href="/events/codechef"
                    className="transition-colors hover:text-primary"
                  >
                    CodeCHEF
                  </Link>
                </li>
              </ul>
            </div>

            {/* Column 3: COMMUNITY */}
            <div className="space-y-4 col-span-2 sm:col-span-1">
              <div className="relative inline-block border border-primary/30 bg-primary/5 px-3 py-1">
                <div className="absolute -left-px -top-px h-2 w-2 border-l-2 border-t-2 border-primary" />
                <div className="absolute -right-px -top-px h-2 w-2 border-r-2 border-t-2 border-primary" />
                <h3 className="font-display text-sm font-bold tracking-[0.3em] text-primary">
                  IMPORTANT LINKS
                </h3>
              </div>
              <ul className="space-y-2.5 font-mono text-xs text-foreground/75">
                <li>
                  <a
                    href="https://www.gcekbpatna.ac.in"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transition-colors hover:text-primary"
                  >
                    GCE Kalahandi
                  </a>
                </li>
                <li>
                  <Link
                    href="https://blogs.codebreakersgcek.tech/"
                    className="transition-colors hover:text-primary"
                  >
                    CodeBreakers Blogs
                  </Link>
                </li>
                <li>
                  <a
                    href="mailto:gcek.codebreakers@gmail.com"
                    className="transition-colors hover:text-primary"
                  >
                    College Inquiries
                  </a>
                </li>
                <li>
                  <a
                    href="/terms"
                    className="transition-colors hover:text-primary"
                  >
                    Terms and Conditions
                  </a>
                </li>
                <li>
                  <a
                    href="/privacy"
                    className="transition-colors hover:text-primary"
                  >
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a
                    href="mailto:gcek.codebreakers@gmail.com"
                    className="transition-colors hover:text-primary"
                  >
                    Report A Bug
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom copyright line */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-primary/20 pt-6 sm:flex-row font-mono text-[10px] tracking-wider text-foreground/50">
          <div>
            © {new Date().getFullYear()} CodeBreakers GCEK. All Rights Reserved.
          </div>
          <div>Government College of Engineering Kalahandi, Odisha, India</div>
        </div>

        <div className="relative mt-6 -mb-6 w-full overflow-hidden select-none pointer-events-none text-center">
          <h1 className="font-sekuya font-black text-[6.6vw] leading-none text-primary/10 uppercase whitespace-nowrap ]">
            codebreakers
          </h1>
        </div>
      </div>
    </footer>
  );
}
