import type { Metadata } from "next"
import Image from "next/image"
import { Geist_Mono, Orbitron, Rajdhani } from "next/font/google"
import { ThemeProvider } from "@/components/theme"
import { Toaster } from "@/components/ui/sonner"
import { TronHeader } from "@/components/layout"
import { UplinkHeader } from "@/components/thegridcn"
import "./globals.css"
import "@/styles/tron-style.css"
import { Analytics } from '@vercel/analytics/next';

// Optimize font loading with next/font — self-hosted, no external requests
const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
})

const orbitron = Orbitron({
  variable: "--font-orbitron",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700", "800", "900"],
})

const rajdhani = Rajdhani({
  variable: "--font-rajdhani",
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
})

export const metadata: Metadata = {
  metadataBase: new URL('https://www.codebreakersgcek.tech'),
  title: {
    template: "%s | CodeBreakers GCEK",
    default: "CodeBreakers - Coding Club | Government College of Engineering Kalahandi"
  },
  description: "Join CodeBreakers, the premier coding club at Government College of Engineering Kalahandi (GCEK). Learn programming, participate in hackathons, compete in coding challenges, and build innovative projects with a community of 500+ passionate developers.",
  applicationName: "CodeBreakers GCEK",
  referrer: 'origin-when-cross-origin',
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
  authors: [
    { name: "CodeBreakers GCEK", url: "https://www.codebreakersgcek.tech" }
  ],
  creator: "CodeBreakers GCEK",
  publisher: "Government College of Engineering Kalahandi",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.codebreakersgcek.tech",
    siteName: "CodeBreakers GCEK",
    title: "CodeBreakers - Premier Coding Club at GCEK",
    description: "Join 500+ developers at CodeBreakers, GCEK's leading coding club. Participate in hackathons, competitive programming, and innovative projects. Build your coding skills and network with passionate developers.",
  },
  twitter: {
    card: "summary_large_image",
    title: "CodeBreakers - Premier Coding Club at GCEK",
    description: "Join 500+ developers at CodeBreakers, GCEK's leading coding club. Hackathons, competitive programming, and innovative projects.",
    creator: "@codebreakers_gcek",
    site: "@codebreakers_gcek",
  },
  appleWebApp: {
    capable: true,
    title: "CodeBreakers GCEK",
    statusBarStyle: "black-translucent",
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: "google4606fd743fa15671",
  },
  alternates: {
    canonical: "https://www.codebreakersgcek.tech",
  },
  manifest: "/manifest.json",
  category: "Education",
  other: {
    'theme-color': '#00e5ff',
    'color-scheme': 'dark light',
  },
}

// Inline script to prevent theme flash - runs before React hydrates
const themeInitScript = `
(function() {
  try {
    var themes = ['tron','ares','clu','athena','aphrodite','poseidon'];
    var intensities = ['none','light','medium','heavy'];

    var theme = localStorage.getItem('project-ares-theme');
    var intensity = localStorage.getItem('project-ares-theme-intensity');

    theme = themes.indexOf(theme) > -1 ? theme : 'tron';
    intensity = intensities.indexOf(intensity) > -1 ? intensity : 'medium';

    document.documentElement.setAttribute('data-theme', theme);
    if (intensity !== 'none') {
      document.documentElement.setAttribute('data-tron-intensity', intensity);
    }
  } catch(e) {}
})();
`

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${orbitron.variable} ${rajdhani.variable} ${geistMono.variable}`} suppressHydrationWarning>
      <head>
        <script id="theme-init" dangerouslySetInnerHTML={{ __html: themeInitScript }} />
        <meta name="theme-color" content="#00e5ff" media="(prefers-color-scheme: dark)" />
        <meta name="theme-color" content="#00e5ff" media="(prefers-color-scheme: light)" />
        <script
          id="schema-org"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "Organization",
                  "@id": "https://www.codebreakersgcek.tech/#organization",
                  "name": "CodeBreakers GCEK",
                  "alternateName": ["CodeBreakers", "CodeBreakers GCE Kalahandi", "Coding Club of GCE Kalahandi"],
                  "url": "https://www.codebreakersgcek.tech",
                  "logo": {
                    "@type": "ImageObject",
                    "url": "https://www.codebreakersgcek.tech/assets/logo.png",
                    "width": 512,
                    "height": 512,
                  },
                  "description": "Premier coding club at Government College of Engineering Kalahandi (GCEK) with 500+ members, organizing hackathons, coding competitions, and tech events.",
                  "foundingDate": "2019",
                  "foundingLocation": {
                    "@type": "Place",
                    "address": {
                      "@type": "PostalAddress",
                      "addressLocality": "Bhawanipatna",
                      "addressRegion": "Kalahandi",
                      "addressCountry": "India",
                      "postalCode": "766002",
                    }
                  },
                  "parentOrganization": {
                    "@type": "EducationalOrganization",
                    "name": "Government College of Engineering Kalahandi",
                    "url": "https://www.gcekbpatna.ac.in",
                  },
                  "sameAs": [
                    "https://www.instagram.com/gcek.codebreakers",
                    "https://www.linkedin.com/company/codebreakers-gce-kalahandi",
                    "https://github.com/codebreakersgcek",
                    "https://twitter.com/codebreakers_gcek",
                  ],
                  "contactPoint": {
                    "@type": "ContactPoint",
                    "email": "info@codebreakers.tech",
                    "contactType": "General Inquiry",
                  },
                },
                {
                  "@type": "WebSite",
                  "@id": "https://www.codebreakersgcek.tech/#website",
                  "url": "https://www.codebreakersgcek.tech",
                  "name": "CodeBreakers GCEK",
                  "description": "Premier coding club at Government College of Engineering Kalahandi",
                  "publisher": {
                    "@id": "https://www.codebreakersgcek.tech/#organization"
                  },
                  "potentialAction": {
                    "@type": "SearchAction",
                    "target": {
                      "@type": "EntryPoint",
                      "urlTemplate": "https://www.codebreakersgcek.tech/search?q={search_term_string}"
                    },
                    "query-input": "required name=search_term_string"
                  },
                  "inLanguage": "en-US",
                },
                {
                  "@type": "ItemList",
                  "itemListElement": [
                    {
                      "@type": "SiteNavigationElement",
                      "position": 1,
                      "name": "Home",
                      "url": "https://www.codebreakersgcek.tech"
                    },
                    {
                      "@type": "SiteNavigationElement",
                      "position": 2,
                      "name": "Developers",
                      "url": "https://www.codebreakersgcek.tech/developers/devs"
                    },
                    {
                      "@type": "SiteNavigationElement",
                      "position": 3,
                      "name": "Events",
                      "url": "https://www.codebreakersgcek.tech/events"
                    },
                    {
                      "@type": "SiteNavigationElement",
                      "position": 4,
                      "name": "Projects",
                      "url": "https://www.codebreakersgcek.tech/projects"
                    },
                    {
                      "@type": "SiteNavigationElement",
                      "position": 5,
                      "name": "Contact",
                      "url": "https://www.codebreakersgcek.tech/contact"
                    },
                  ]
                },
                {
                  "@type": "FAQPage",
                  "mainEntity": [
                    {
                      "@type": "Question",
                      "name": "What is CodeBreakers?",
                      "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "CodeBreakers is the official coding club of Government College of Engineering Kalahandi. We are a community of passionate developers, designers, and tech enthusiasts dedicated to fostering innovation, collaboration, and technical excellence through various events, workshops, hackathons, and development projects."
                      }
                    },
                    {
                      "@type": "Question",
                      "name": "How can I join CodeBreakers?",
                      "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Students from Government College of Engineering Kalahandi can join CodeBreakers by attending our recruitment drives held at the beginning of each academic year. Keep an eye on our social media channels and college notice boards for announcements. You can also reach out to us via email at info@codebreakers.tech or codebreakerscse@gcekbpatna.ac.in."
                      }
                    },
                    {
                      "@type": "Question",
                      "name": "What events does CodeBreakers organize?",
                      "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "CodeBreakers organizes a wide range of technical events including hackathons, ideathons, coding workshops, technical sessions, project showcases, and competitive programming challenges like 9-lock challenges and CodeCheaf. We also conduct regular skill development workshops on emerging technologies."
                      }
                    },
                    {
                      "@type": "Question",
                      "name": "Do I need coding experience to join CodeBreakers?",
                      "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "No prior coding experience is required! CodeBreakers welcomes students of all skill levels, from complete beginners to advanced programmers. We provide mentorship, learning resources, and workshops to help members grow their technical skills regardless of their starting point."
                      }
                    },
                    {
                      "@type": "Question",
                      "name": "What are the benefits of joining CodeBreakers?",
                      "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Members gain hands-on experience through project development, access to mentorship from senior members and alumni, networking opportunities with industry professionals, participation in national-level hackathons, skill development through workshops, and a collaborative environment to build innovative solutions."
                      }
                    },
                    {
                      "@type": "Question",
                      "name": "Can I collaborate on projects with CodeBreakers?",
                      "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Absolutely! CodeBreakers encourages collaborative development. Members work together on various projects ranging from web and mobile applications to open-source contributions. You can propose your own project ideas or join existing teams working on innovative solutions."
                      }
                    },
                    {
                      "@type": "Question",
                      "name": "Does CodeBreakers organize hackathons?",
                      "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Yes, we regularly organize both internal and external hackathons. Our flagship events provide students with opportunities to showcase their problem-solving skills, build innovative solutions under time constraints, and compete for prizes while learning from peers and mentors."
                      }
                    },
                    {
                      "@type": "Question",
                      "name": "How can I contact CodeBreakers?",
                      "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "You can reach us via email at info@codebreakers.tech or codebreakerscse@gcekbpatna.ac.in. Follow us on our social media channels (LinkedIn, Instagram, GitHub) for updates on events and activities. You can also visit our office at Government College of Engineering Kalahandi, Bhawanipatna, Odisha."
                      }
                    }
                  ]
                }
              ]
            })
          }}
        />
      </head>
      <body className="antialiased">
        <ThemeProvider>
          <TronHeader />
          <main>
            {children}
          </main>
          
          {/* Footer */}
          <footer className="relative z-10 border-t border-primary/30 bg-panel">
            {/* CRT scanline effect */}
            <div className="crt-scanlines pointer-events-none absolute inset-0 opacity-[0.03]" />

            {/* Footer uplink bar */}
            <UplinkHeader
              leftText="SYSTEM: CODEBREAKERS v1.0.0"
              rightText="UPTIME: 99.9% - END OF LINE"
            />

            <div className="container mx-auto px-4 py-8 md:py-12 lg:py-16">
              <div className="grid gap-8 md:grid-cols-3 md:gap-12 lg:gap-16">
                {/* Left - Connect Section */}
                <div className="space-y-4 flex flex-col items-center md:items-start">
                  <div className="relative inline-block border border-primary/30 bg-primary/5 px-3 py-1">
                    <div className="absolute -left-px -top-px h-2 w-2 border-l-2 border-t-2 border-primary" />
                    <div className="absolute -right-px -top-px h-2 w-2 border-r-2 border-t-2 border-primary" />
                    <h3 className="font-display text-sm font-bold tracking-[0.3em] text-primary">
                      CONNECT
                    </h3>
                  </div>

                  <div className="space-y-2 font-mono text-xs text-foreground/80">
                    <p className="leading-relaxed">
                      Government College of Engineering Kalahandi,
                      <br />
                      Bhawanipatna, Odisha,
                      <br />
                      India
                    </p>
                    <div className="space-y-1 pt-2">
                      <a
                        href="mailto:info@codebreakers.tech"
                        className="block transition-colors hover:text-primary"
                      >
                        info@codebreakers.tech
                      </a>
                      <a
                        href="mailto:codebreakerscse@gcekbpatna.ac.in"
                        className="block transition-colors hover:text-primary"
                      >
                        codebreakerscse@gcekbpatna.ac.in
                      </a>
                    </div>
                  </div>
                </div>

                {/* Center - Logo */}
                <div className="flex flex-col md:mt-50 lg:mt-50 items-center justify-center space-y-4">
                  <div className="text-center font-mono text-[10px] tracking-[0.3em] text-foreground/60">
                    MADE WITH <span className="text-primary">♥</span> BY
                  </div>

                  {/* Logo and Text */}
                  <div className="relative flex flex-col items-center gap-4">
                    <Image
                      src="/assets/codebreakers-logo-main.png"
                      alt="CodeBreakers GCEK Logo"
                      width={80}
                      height={80}
                      className="h-20 w-20"
                    />
                    <h2 className="font-display text-4xl font-black tracking-tight text-primary sm:text-5xl md:text-6xl lg:text-7xl [text-shadow:0_0_40px_oklch(from_var(--primary)_l_c_h/0.6)]">
                      CODEBREAKERS
                    </h2>
                    <div className="absolute inset-0 -z-10 bg-primary/10 blur-2xl" />
                  </div>
                </div>

                {/* Right - Social Links */}
                <div className="flex flex-col items-center space-y-4 md:items-end">
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
                      href="https://github.com/codebreakersgcek"
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

              {/* Bottom copyright line */}
              <div className="mt-8 border-t border-primary/20 pt-6 md:mt-12 md:pt-8">
                <div className="flex flex-col items-center justify-center gap-4 sm:flex-row sm:justify-between">
                  <div className="h-px hidden flex-1 bg-linear-to-r from-transparent to-primary/30 sm:block" />
                  <span className="font-mono text-[9px] tracking-widest text-foreground/60">
                    © {new Date().getFullYear()} CodeBreakers. All Rights Reserved.
                  </span>
                  <div className="h-px hidden flex-1 bg-linear-to-l from-transparent to-primary/30 sm:block" />
                </div>
              </div>
            </div>
          </footer>

          <Toaster
            position="bottom-right"
            toastOptions={{
              style: {
                background: "var(--card)",
                border: "1px solid var(--border)",
                color: "var(--foreground)",
              },
            }}
          />
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  )
}
