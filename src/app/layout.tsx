import type { Metadata } from "next";
import { Geist_Mono, Orbitron, Rajdhani, Sekuya } from "next/font/google";
import { ThemeProvider } from "@/components/theme";
import { Toaster } from "@/components/ui/sonner";
import { TronHeader, TronSplashLoader, Footer } from "@/components/layout";
import "./globals.css";
import "@/styles/tron-style.css";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next"

// Optimize font loading with next/font — self-hosted, no external requests
const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

const sekuya = Sekuya({
  variable: "--font-sekuya",
  subsets: ["latin"],
  display: "swap",
  weight: ["400"],
});

const orbitron = Orbitron({
  variable: "--font-orbitron",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700", "800", "900"],
});

const rajdhani = Rajdhani({
  variable: "--font-rajdhani",
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.codebreakersgcek.tech"),
  title: {
    template: "%s | CodeBreakers GCEK",
    default:
      "CodeBreakers - Coding Club | Government College of Engineering Kalahandi",
  },
  description:
    "Join CodeBreakers, the premier coding club at Government College of Engineering Kalahandi (GCEK). Learn programming, participate in hackathons, compete in coding challenges, and build innovative projects with a community of 500+ passionate developers.",
  applicationName: "CodeBreakers GCEK",
  referrer: "origin-when-cross-origin",
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
    "best coding club Odisha",
  ],
  authors: [
    { name: "CodeBreakers GCEK", url: "https://www.codebreakersgcek.tech" },
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
    description:
      "Join 500+ developers at CodeBreakers, GCEK's leading coding club. Participate in hackathons, competitive programming, and innovative projects. Build your coding skills and network with passionate developers.",
  },
  twitter: {
    card: "summary_large_image",
    title: "CodeBreakers - Premier Coding Club at GCEK",
    description:
      "Join 500+ developers at CodeBreakers, GCEK's leading coding club. Hackathons, competitive programming, and innovative projects.",
    creator: "@codebreakers_gcek",
    site: "@codebreakers_gcek",
  },
  appleWebApp: {
    capable: true,
    title: "CodeBreakers GCEK",
    statusBarStyle: "black-translucent",
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/codebreakers-logo.png", sizes: "192x192", type: "image/png" },
    ],
    apple: [
      { url: "/codebreakers-logo.png", sizes: "180x180", type: "image/png" },
    ],
    shortcut: "/favicon.ico",
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
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
    "theme-color": "#00e5ff",
    "color-scheme": "dark light",
  },
};

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
`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${orbitron.variable} ${rajdhani.variable} ${geistMono.variable} ${sekuya.variable}`}
      suppressHydrationWarning
    >
      <head>
        <script
          id="theme-init"
          dangerouslySetInnerHTML={{ __html: themeInitScript }}
        />
        <meta
          name="theme-color"
          content="#00e5ff"
          media="(prefers-color-scheme: dark)"
        />
        <meta
          name="theme-color"
          content="#00e5ff"
          media="(prefers-color-scheme: light)"
        />
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
                  name: "CodeBreakers GCEK",
                  alternateName: [
                    "CodeBreakers",
                    "CodeBreakers GCE Kalahandi",
                    "Coding Club of GCE Kalahandi",
                  ],
                  url: "https://www.codebreakersgcek.tech",
                  logo: {
                    "@type": "ImageObject",
                    url: "https://www.codebreakersgcek.tech/codebreakers-logo.png",
                    width: 512,
                    height: 512,
                  },
                  description:
                    "Premier coding club at Government College of Engineering Kalahandi (GCEK) with 500+ members, organizing hackathons, coding competitions, and tech events.",
                  foundingDate: "2019",
                  foundingLocation: {
                    "@type": "Place",
                    address: {
                      "@type": "PostalAddress",
                      addressLocality: "Bhawanipatna",
                      addressRegion: "Kalahandi",
                      addressCountry: "India",
                      postalCode: "766002",
                    },
                  },
                  parentOrganization: {
                    "@type": "EducationalOrganization",
                    name: "Government College of Engineering Kalahandi",
                    url: "https://www.gcekbpatna.ac.in",
                  },
                  sameAs: [
                    "https://www.instagram.com/gcek.codebreakers",
                    "https://www.linkedin.com/company/codebreakers-gce-kalahandi",
                    "https://github.com/codebreakers-gcek",
                    "https://twitter.com/codebreakers_gcek",
                  ],
                  contactPoint: {
                    "@type": "ContactPoint",
                    email: "info@codebreakers.tech",
                    contactType: "General Inquiry",
                  },
                },
                {
                  "@type": "WebSite",
                  "@id": "https://www.codebreakersgcek.tech/#website",
                  url: "https://www.codebreakersgcek.tech",
                  name: "CodeBreakers GCEK",
                  description:
                    "Premier coding club at Government College of Engineering Kalahandi",
                  publisher: {
                    "@id": "https://www.codebreakersgcek.tech/#organization",
                  },
                  potentialAction: {
                    "@type": "SearchAction",
                    target: {
                      "@type": "EntryPoint",
                      urlTemplate:
                        "https://www.codebreakersgcek.tech/search?q={search_term_string}",
                    },
                    "query-input": "required name=search_term_string",
                  },
                  inLanguage: "en-US",
                },
                {
                  "@type": "ItemList",
                  itemListElement: [
                    {
                      "@type": "SiteNavigationElement",
                      position: 1,
                      name: "Home",
                      url: "https://www.codebreakersgcek.tech",
                    },
                    {
                      "@type": "SiteNavigationElement",
                      position: 2,
                      name: "Developers",
                      url: "https://www.codebreakersgcek.tech/developers/devs",
                    },
                    {
                      "@type": "SiteNavigationElement",
                      position: 3,
                      name: "Events",
                      url: "https://www.codebreakersgcek.tech/events",
                    },
                    {
                      "@type": "SiteNavigationElement",
                      position: 4,
                      name: "About Us",
                      url: "https://www.codebreakersgcek.tech/about-us",
                    },
                    {
                      "@type": "SiteNavigationElement",
                      position: 5,
                      name: "Contact",
                      url: "https://www.codebreakersgcek.tech/contact",
                    },
                  ],
                },
                {
                  "@type": "FAQPage",
                  mainEntity: [
                    {
                      "@type": "Question",
                      name: "What is CodeBreakers?",
                      acceptedAnswer: {
                        "@type": "Answer",
                        text: "CodeBreakers is the official coding club of Government College of Engineering Kalahandi. We are a community of passionate developers, designers, and tech enthusiasts dedicated to fostering innovation, collaboration, and technical excellence through various events, workshops, hackathons, and development projects.",
                      },
                    },
                    {
                      "@type": "Question",
                      name: "How can I join CodeBreakers?",
                      acceptedAnswer: {
                        "@type": "Answer",
                        text: "Students from Government College of Engineering Kalahandi can join CodeBreakers by attending our recruitment drives held at the beginning of each academic year. Keep an eye on our social media channels and college notice boards for announcements. You can also reach out to us via email at info@codebreakers.tech or codebreakerscse@gcekbpatna.ac.in.",
                      },
                    },
                    {
                      "@type": "Question",
                      name: "What events does CodeBreakers organize?",
                      acceptedAnswer: {
                        "@type": "Answer",
                        text: "CodeBreakers organizes a wide range of technical events including hackathons, ideathons, coding workshops, technical sessions, project showcases, and competitive programming challenges like 9-lock challenges and CodeCHEF. We also conduct regular skill development workshops on emerging technologies.",
                      },
                    },
                    {
                      "@type": "Question",
                      name: "Do I need coding experience to join CodeBreakers?",
                      acceptedAnswer: {
                        "@type": "Answer",
                        text: "No prior coding experience is required! CodeBreakers welcomes students of all skill levels, from complete beginners to advanced programmers. We provide mentorship, learning resources, and workshops to help members grow their technical skills regardless of their starting point.",
                      },
                    },
                    {
                      "@type": "Question",
                      name: "What are the benefits of joining CodeBreakers?",
                      acceptedAnswer: {
                        "@type": "Answer",
                        text: "Members gain hands-on experience through project development, access to mentorship from senior members and alumni, networking opportunities with industry professionals, participation in national-level hackathons, skill development through workshops, and a collaborative environment to build innovative solutions.",
                      },
                    },
                    {
                      "@type": "Question",
                      name: "Can I collaborate on projects with CodeBreakers?",
                      acceptedAnswer: {
                        "@type": "Answer",
                        text: "Absolutely! CodeBreakers encourages collaborative development. Members work together on various projects ranging from web and mobile applications to open-source contributions. You can propose your own project ideas or join existing teams working on innovative solutions.",
                      },
                    },
                    {
                      "@type": "Question",
                      name: "Does CodeBreakers organize hackathons?",
                      acceptedAnswer: {
                        "@type": "Answer",
                        text: "Yes, we regularly organize both internal and external hackathons. Our flagship events provide students with opportunities to showcase their problem-solving skills, build innovative solutions under time constraints, and compete for prizes while learning from peers and mentors.",
                      },
                    },
                    {
                      "@type": "Question",
                      name: "How can I contact CodeBreakers?",
                      acceptedAnswer: {
                        "@type": "Answer",
                        text: "You can reach us via email at info@codebreakers.tech or codebreakerscse@gcekbpatna.ac.in. Follow us on our social media channels (LinkedIn, Instagram, GitHub) for updates on events and activities. You can also visit our office at Government College of Engineering Kalahandi, Bhawanipatna, Odisha.",
                      },
                    },
                  ],
                },
              ],
            }),
          }}
        />
      </head>
      <body className="antialiased">
        <ThemeProvider>
          <TronSplashLoader />
          <TronHeader />
          <main>{children}</main>

          {/* Footer */}
          <Footer />

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
          <SpeedInsights />
        </ThemeProvider>
      </body>
    </html>
  );
}
