"use client";

import * as React from "react";
import dynamic from "next/dynamic";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { themes, useTheme } from "@/components/theme";
import {
  Reticle,
  GridScanOverlay,
  Radar,
} from "@/components/thegridcn";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import {
  ThemeDossierSelector,
  StatusStrip,
  DerezCountdown,
  DossierCard,
  GridMap,
} from "@/components/website";
import { testimonials } from "@/data";

// Dynamic import for Three.js components (client-side only)
const Grid3D = dynamic(
  () => import("@/components/thegridcn/grid").then((mod) => mod.Grid3D),
  { ssr: false },
);

// Club activities and learning tracks
const clubActivities = [
  // Learning Tracks
  "web-development",
  "mobile-development",
  "machine-learning",
  "cloud-computing",
  "devops-practices",
  "ui-ux-design",
  // Events
  "hackathons",
  "coding-competitions",
  "tech-workshops",
  "guest-lectures",
  "project-showcases",
  // Community
  "mentorship-program",
  "peer-coding-sessions",
  "open-source-contributions",
  "interview-prep",
  // Specializations
  "data-structures-algorithms",
  "system-design",
  "full-stack-development",
  "game-development",
  "blockchain-web3",
  "cybersecurity",
];

// Club platforms
const clubPlatforms = [
  { id: "discord", command: "discord.gg/codebreakers", label: "Discord" },
  { id: "github", command: "github.com/codebreakers-gcek", label: "GitHub" },
  { id: "linkedin", command: "linkedin.com/company/codebreakers-gcek", label: "LinkedIn" },
  { id: "instagram", command: "@codebreakers.gcek", label: "Instagram" },
] as const;

// Map for O(1) platform lookups
const platformById = new Map(clubPlatforms.map((pm) => [pm.id, pm]));

// Map for O(1) theme lookups
const themeById = new Map(themes.map((t) => [t.id, t]));

// Static props extracted to avoid re-creation on every render
const RADAR_TARGETS = [
  { x: 30, y: 35 },
  { x: 70, y: 60 },
];

const STATUS_STRIP_FEATURES = [
  { label: "SECTION", value: "CAPABILITIES", highlighted: true },
  { label: "MODULES", value: "6 ACTIVE" },
  { label: "INTEGRITY", value: "100%" },
];

const STATUS_STRIP_ARCHITECTURE = [
  { label: "SECTION", value: "ARCHITECTURE", highlighted: true },
  { label: "FRAMEWORKS", value: "6 INTEGRATED" },
  { label: "BUILD", value: "OPTIMIZED" },
];

const STATUS_STRIP_FAQ = [
  { label: "SECTION", value: "INTEL", highlighted: true },
  { label: "QUERIES", value: "8 INDEXED" },
  { label: "STATUS", value: "DECLASSIFIED" },
];

// Terminal activity browser component
function TerminalInstall() {
  const router = useRouter();
  const [selectedPlatform, setSelectedPlatform] =
    React.useState<(typeof clubPlatforms)[number]["id"]>("discord");
  const [isOpen, setIsOpen] = React.useState(false);
  const [copied, setCopied] = React.useState(false);
  const [selectedIndex, setSelectedIndex] = React.useState(0);
  const [scrollOffset, setScrollOffset] = React.useState(0);
  const listRef = React.useRef<HTMLDivElement>(null);
  const pmSelectorRef = React.useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  React.useEffect(() => {
    if (!isOpen) return;

    const handleClickOutside = (e: MouseEvent) => {
      if (
        pmSelectorRef.current &&
        !pmSelectorRef.current.contains(e.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen]);

  const VISIBLE_ITEMS = 5;

  const currentPlatform = platformById.get(selectedPlatform) || clubPlatforms[0];
  const command = `Join us: ${currentPlatform.command}`;

  const copyCommand = () => {
    navigator.clipboard.writeText(command);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  // Navigate to selected activity
  const navigateToActivity = React.useCallback(() => {
    const activity = clubActivities[selectedIndex];
    router.push(`/events#${activity}`);
  }, [selectedIndex, router]);

  // Handle keyboard navigation
  const handleKeyDown = React.useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "ArrowDown" || e.key === "j") {
        e.preventDefault();
        setSelectedIndex((prev) => {
          const next = Math.min(prev + 1, clubActivities.length - 1);
          // Adjust scroll offset if needed
          if (next >= scrollOffset + VISIBLE_ITEMS) {
            setScrollOffset(next - VISIBLE_ITEMS + 1);
          }
          return next;
        });
      } else if (e.key === "ArrowUp" || e.key === "k") {
        e.preventDefault();
        setSelectedIndex((prev) => {
          const next = Math.max(prev - 1, 0);
          // Adjust scroll offset if needed
          if (next < scrollOffset) {
            setScrollOffset(next);
          }
          return next;
        });
      } else if (e.key === "Enter") {
        e.preventDefault();
        navigateToActivity();
      }
    },
    [scrollOffset, navigateToActivity],
  );

  // Handle wheel scroll on list - prevent page scroll completely
  const handleWheel = React.useCallback((e: WheelEvent) => {
    e.preventDefault();
    e.stopPropagation();
    const direction = e.deltaY > 0 ? 1 : -1;
    setScrollOffset((prev) => {
      const next = Math.max(
        0,
        Math.min(prev + direction, clubActivities.length - VISIBLE_ITEMS),
      );
      return next;
    });
  }, []);

  React.useEffect(() => {
    const listElement = listRef.current;
    if (listElement) {
      // Use passive: false to allow preventDefault
      listElement.addEventListener("wheel", handleWheel, { passive: false });
      listElement.addEventListener(
        "keydown",
        handleKeyDown as unknown as EventListener,
      );
      return () => {
        listElement.removeEventListener("wheel", handleWheel);
        listElement.removeEventListener(
          "keydown",
          handleKeyDown as unknown as EventListener,
        );
      };
    }
  }, [handleKeyDown, handleWheel]);

  const visibleActivities = clubActivities.slice(
    scrollOffset,
    scrollOffset + VISIBLE_ITEMS,
  );
  const hasMoreAbove = scrollOffset > 0;
  const hasMoreBelow =
    scrollOffset + VISIBLE_ITEMS < clubActivities.length;

  return (
    <div className="relative w-full max-w-2xl">
      <div className="relative overflow-hidden border border-primary/30 bg-panel">
        {/* Corner brackets - Tron style */}
        <div className="absolute -left-px -top-px h-4 w-4 border-l-2 border-t-2 border-primary" />
        <div className="absolute -right-px -top-px h-4 w-4 border-r-2 border-t-2 border-primary" />
        <div className="absolute -bottom-px -left-px h-4 w-4 border-b-2 border-l-2 border-primary" />
        <div className="absolute -bottom-px -right-px h-4 w-4 border-b-2 border-r-2 border-primary" />

        {/* Scanline effect */}
        <div className="crt-scanlines pointer-events-none absolute inset-0 opacity-[0.03]" />

        {/* Header - Tron Ares style */}
        <div className="relative border-b border-primary/30 bg-primary/5 px-4 py-2">
          {/* Top accent line */}
          <div className="absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-primary via-primary/50 to-transparent" />

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              {/* Status indicator */}
              <div className="flex items-center gap-1">
                <div className="h-1.5 w-1.5 animate-pulse bg-primary" />
                <div className="h-1.5 w-3 bg-primary/60" />
              </div>
              <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-primary">
                CODEBREAKERS.GCEK.SYS
              </span>
            </div>

            <div className="flex items-center gap-4 font-mono text-[9px] tracking-wider">
              <span className="text-foreground/50">SEC:0</span>
              <span className="text-primary">[ ACTIVE ]</span>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="relative space-y-3 p-4">
          {/* Command line with platform selector */}
          <div className="flex flex-wrap items-center gap-2 font-mono text-sm">
            <span className="text-primary glow-text">$</span>

            {/* Platform selector */}
            <div ref={pmSelectorRef} className="relative">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="flex items-center gap-1 border-b border-dashed border-primary/50 text-primary transition-colors hover:border-primary"
              >
                <span>{currentPlatform.label}</span>
                <svg
                  className={`h-3 w-3 transition-transform ${isOpen ? "rotate-180" : ""}`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>

              {isOpen && (
                <div className="absolute left-0 top-full z-50 mt-1 min-w-[140px] border border-primary/30 bg-panel">
                  {clubPlatforms.map((platform) => (
                    <button
                      key={platform.id}
                      onClick={() => {
                        setSelectedPlatform(platform.id);
                        setIsOpen(false);
                      }}
                      className={`block w-full px-3 py-1.5 text-left text-xs transition-colors hover:bg-primary/10 ${
                        selectedPlatform === platform.id
                          ? "bg-primary/10 text-primary"
                          : "text-foreground"
                      }`}
                    >
                      {platform.label}
                    </button>
                  ))}
                </div>
              )}
            </div>

            <code className="text-foreground">
              visit{" "}
              <span className="text-primary">{currentPlatform.command}</span>
            </code>

            {/* Copy button */}
            <button
              onClick={copyCommand}
              className="ml-auto text-foreground/80 transition-colors hover:text-primary"
              title="Copy command"
            >
              {copied ? (
                <svg
                  className="h-4 w-4 text-primary"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              ) : (
                <svg
                  className="h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
                  />
                </svg>
              )}
            </button>
          </div>

          {/* Interactive activity selector */}
          <div className="border-l-2 border-primary/20 pl-3">
            <div className="mb-2 flex items-center justify-between">
              <span className="font-mono text-[10px] uppercase tracking-wider text-primary">
                ◆ Explore our programs{" "}
                <span className="text-foreground/60">(scroll to navigate)</span>
              </span>
              <span className="font-mono text-[10px] text-foreground/60">
                {selectedIndex + 1}/{clubActivities.length}
              </span>
            </div>

            {/* Scrollable list */}
            <div
              ref={listRef}
              className="relative select-none outline-none"
              tabIndex={0}
              onMouseEnter={() => listRef.current?.focus()}
              onMouseLeave={() => listRef.current?.blur()}
            >
              {/* Scroll up indicator - always reserve space */}
              <div
                className={`flex items-center gap-2 py-1 font-mono text-[11px] ${hasMoreAbove ? "text-foreground/40" : "invisible"}`}
              >
                <span>↑</span>
                <span>{scrollOffset} more</span>
              </div>

              {/* Visible items */}
              <div className="space-y-0.5">
                {visibleActivities.map((activity, idx) => {
                  const actualIndex = scrollOffset + idx;
                  const isSelected = actualIndex === selectedIndex;
                  return (
                    <Link
                      key={activity}
                      href={`/events#${activity}`}
                      onClick={() => setSelectedIndex(actualIndex)}
                      onMouseEnter={() => setSelectedIndex(actualIndex)}
                      className={`flex items-center gap-2 py-1 font-mono text-sm transition-colors ${
                        isSelected
                          ? "text-primary"
                          : "text-foreground/70 hover:text-foreground"
                      }`}
                    >
                      <span
                        className={
                          isSelected ? "text-primary" : "text-foreground/40"
                        }
                      >
                        {isSelected ? "◆" : "◇"}
                      </span>
                      <span
                        className={
                          isSelected ? "underline underline-offset-2" : ""
                        }
                      >
                        {activity}
                      </span>
                      {isSelected && (
                        <span className="ml-auto text-[9px] text-primary/50">
                          [ENTER]
                        </span>
                      )}
                    </Link>
                  );
                })}
              </div>

              {/* Scroll down indicator - always reserve space */}
              <div
                className={`flex items-center gap-2 py-1 font-mono text-[11px] ${hasMoreBelow ? "text-foreground/40" : "invisible"}`}
              >
                <span>↓</span>
                <span>
                  {clubActivities.length - scrollOffset - VISIBLE_ITEMS}{" "}
                  more
                </span>
              </div>
            </div>
          </div>

          {/* Status line */}
          <div className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-wider">
            <span className="inline-block h-1.5 w-1.5 animate-pulse bg-primary" />
            <span className="text-primary">
              {clubActivities.length} PROGRAMS ACTIVE
            </span>
            <span className="text-foreground/60">JOIN ANYTIME</span>
          </div>
        </div>
      </div>

      {/* Glow effect - Tron style */}
      <div className="absolute -inset-1 -z-10 bg-primary/10 blur-xl" />
    </div>
  );
}

// Feature card component
function FeatureCard({
  title,
  description,
  icon,
}: {
  title: string;
  description: string;
  icon: React.ReactNode;
}) {
  return (
    <div className="group relative overflow-hidden rounded border border-border/50 bg-card/30 p-6 backdrop-blur-sm transition-all duration-300 hover:border-primary/50 hover:bg-card/50">
      {/* Corner decorations */}
      <div className="absolute -left-px -top-px h-4 w-4 border-l-2 border-t-2 border-primary/40 transition-colors group-hover:border-primary" />
      <div className="absolute -right-px -top-px h-4 w-4 border-r-2 border-t-2 border-primary/40 transition-colors group-hover:border-primary" />
      <div className="absolute -bottom-px -left-px h-4 w-4 border-b-2 border-l-2 border-primary/40 transition-colors group-hover:border-primary" />
      <div className="absolute -bottom-px -right-px h-4 w-4 border-b-2 border-r-2 border-primary/40 transition-colors group-hover:border-primary" />

      {/* Hover glow */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-primary/5 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />

      <div className="mb-4 text-primary">{icon}</div>
      <h3 className="mb-2 font-display text-sm font-bold tracking-wider text-foreground">
        {title}
      </h3>
      <p className="text-xs leading-relaxed text-foreground/80">
        {description}
      </p>
    </div>
  );
}

export default function Home() {
  const { theme } = useTheme();
  const currentTheme = themeById.get(theme);

  return (
    <div className="relative min-h-screen bg-background">
      {/* 3D Background */}
      <div className="pointer-events-none fixed inset-0 z-0">
        <Grid3D
          className="h-full w-full"
          enableParticles
          enableBeams
          cameraAnimation
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-background/50 to-background" />
      </div>

      {/* Main Content */}

      {/* Main content */}
      <main className="relative z-10">
        {/* Hero section */}
        <section className="relative min-h-[100vh] overflow-hidden">
          {/* Grid map overlay */}
          <GridMap />
          <GridScanOverlay />

          {/* HUD corner frames */}
          <div className="pointer-events-none absolute left-4 right-4 top-10 bottom-4 z-20 hidden lg:block">
            <div className="absolute left-0 top-0 h-24 w-24 border-l-2 border-t-2 border-primary/50" />
            <div className="absolute right-0 top-0 h-24 w-24 border-r-2 border-t-2 border-primary/50" />
            <div className="absolute bottom-0 left-0 h-24 w-24 border-b-2 border-l-2 border-primary/50" />
            <div className="absolute bottom-0 right-0 h-24 w-24 border-b-2 border-r-2 border-primary/50" />
          </div>

          {/* Main hero content */}
          <div className="container relative mx-auto px-4 py-12 md:py-20">
            {/* Central content with HUD frame */}
            <div className="relative mx-auto max-w-4xl">
              {/* Outer scanning frame */}
              <div className="absolute -inset-2 sm:-inset-4 md:-inset-8">
                <div className="absolute inset-0 border border-primary/20" />
                <div className="absolute -left-1 -top-1 h-6 w-6 border-l-2 border-t-2 border-primary sm:h-8 sm:w-8 md:h-10 md:w-10" />
                <div className="absolute -right-1 -top-1 h-6 w-6 border-r-2 border-t-2 border-primary sm:h-8 sm:w-8 md:h-10 md:w-10" />
                <div className="absolute -bottom-1 -left-1 h-6 w-6 border-b-2 border-l-2 border-primary sm:h-8 sm:w-8 md:h-10 md:w-10" />
                <div className="absolute -bottom-1 -right-1 h-6 w-6 border-b-2 border-r-2 border-primary sm:h-8 sm:w-8 md:h-10 md:w-10" />
                <div className="absolute -top-2 left-1/2 -translate-x-1/2 bg-background px-2 font-mono text-[8px] tracking-[0.3em] text-primary sm:px-3 sm:text-[9px] sm:tracking-[0.4em] md:-top-3 md:px-4 md:text-[10px] md:tracking-[0.5em]">
                  <span className="hidden sm:inline">[ TARGET ACQUIRED ]</span>
                  <span className="sm:hidden">[ TARGET ]</span>
                </div>
              </div>

              {/* Scanning reticle */}
              <div className="absolute left-1/2 top-1/2 -z-10 -translate-x-1/2 -translate-y-1/2 opacity-20">
                <Reticle size={500} variant="scanning" />
              </div>

              {/* Title content */}
              <div className="relative z-10 py-12 text-center md:py-16">
                <div className="mb-3 font-mono text-[10px] tracking-[0.5em] text-foreground/80">
                  WELCOME TO
                </div>
                <h1 className="font-display text-4xl font-black tracking-[0.1em] text-primary md:text-6xl lg:text-[6rem] [text-shadow:0_0_80px_oklch(from_var(--primary)_l_c_h/0.5),0_0_160px_oklch(from_var(--primary)_l_c_h/0.3)]">
                  Code Breakers
                </h1>
                <div className="mt-4 font-mono text-sm tracking-[0.4em] text-primary md:text-base">
                  THE PREMIER CODING CLUB OF GCE KALAHANDI
                </div>
              </div>
            </div>

            {/* Subtitle */}
            <p className="mx-auto mb-8 mt-18 max-w-2xl text-center text-lg text-foreground/80">
                An authentic, community-driven coding space focused on building together, learning together, and shipping real projects.
            </p>

            {/* CTA Buttons */}
            <div className="mb-10 flex flex-wrap justify-center gap-4">
              <Link
                href="#join"
                className="group relative overflow-hidden rounded border-2 border-primary bg-primary/20 px-10 py-4 font-mono text-sm font-bold tracking-wider text-primary transition-all hover:bg-primary hover:text-primary-foreground hover:shadow-[0_0_40px_var(--primary)]"
              >
                <span className="relative z-10">JOIN THE COMMUNITY</span>
                <div className="absolute inset-0 -z-10 translate-y-full bg-primary transition-transform group-hover:translate-y-0" />
              </Link>
            </div>

            {/* Install command */}
            <div className="mx-auto w-full max-w-2xl">
              <div className="mb-3 text-center font-mono text-[10px] tracking-widest text-foreground/80">
                [ QUICK INSTALL ]
              </div>
              <TerminalInstall />
            </div>
          </div>

          {/* Bottom scroll indicator */}
          <div className="absolute bottom-0 left-0 right-0">
            <div className="h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
            <div className="flex items-center justify-center gap-8 py-3">
              <div className="h-px w-24 bg-gradient-to-r from-transparent to-primary/50" />
              <div className="animate-bounce font-mono text-[9px] tracking-widest text-foreground/80">
                ↓ SCROLL ↓
              </div>
              <div className="h-px w-24 bg-gradient-to-l from-transparent to-primary/50" />
            </div>
          </div>
        </section>

        {/* What We Do Section */}
        <section className="relative border-t border-primary/20 py-16 sm:py-20 md:py-24">
          <div className="absolute inset-0 bg-gradient-to-b from-background via-card/20 to-background" />
          <GridScanOverlay />

          <div className="container relative mx-auto px-4">
            {/* Section Label */}
            <div className="mb-8 text-center sm:mb-12">
              <div className="mb-4 inline-block border border-primary/30 bg-primary/5 px-4 py-2 font-mono text-[10px] tracking-[0.3em] text-primary sm:text-xs">
                WHAT WE DO
              </div>
            </div>

            {/* Main Heading */}
            <div className="mb-8 text-center sm:mb-12 md:mb-16">
              <h2 className="font-display text-3xl font-black leading-tight tracking-wider text-foreground sm:text-4xl md:text-5xl lg:text-6xl">
                BUILD<span className="text-primary">_</span> CODE
                <span className="text-primary">_</span> DEPLOY
                <span className="text-primary">_</span>
              </h2>
              <h3 className="mt-2 font-display text-2xl font-black tracking-wider sm:text-3xl md:mt-4 md:text-4xl lg:text-5xl">
                WEBSITES. APPLICATIONS.{" "}
                <span className="text-primary">GAMES.</span>
              </h3>
            </div>

            {/* Description */}
            <div className="mx-auto mb-8 max-w-4xl space-y-4 text-center text-sm leading-relaxed text-foreground/80 sm:mb-12 sm:text-base md:mb-16">
              <p>
                At Code Breakers, we bridge the gaps between ideas and reality.
                We combine our expertise in cutting-edge technologies to craft
                powerful and user-friendly solutions. Our club fosters a culture
                of continuous learning and exploration, ensuring we stay at the
                forefront of the ever-evolving computer science landscape. By
                prioritizing rigorous testing and scalable architecture, we
                build what we envision.
              </p>
              <p>
                As the official programming club of GCE Kalahandi, we manage the
                institute&apos;s website and the digital front of the college
                fests like INSPRANO, UDAAN, and GeeksForGeeks Campus Body.
              </p>
            </div>

            {/* Cards Grid */}
            <div className="grid gap-4 sm:gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {/* Card 1 - Software Development */}
              <div className="group relative overflow-hidden border border-primary/30 bg-card/30 backdrop-blur-sm transition-all hover:border-primary/50 hover:bg-card/50">
                {/* Corner brackets */}
                <div className="absolute -left-px -top-px h-6 w-6 border-l-2 border-t-2 border-primary/40 transition-colors group-hover:border-primary" />
                <div className="absolute -right-px -top-px h-6 w-6 border-r-2 border-t-2 border-primary/40 transition-colors group-hover:border-primary" />
                <div className="absolute -bottom-px -left-px h-6 w-6 border-b-2 border-l-2 border-primary/40 transition-colors group-hover:border-primary" />
                <div className="absolute -bottom-px -right-px h-6 w-6 border-b-2 border-r-2 border-primary/40 transition-colors group-hover:border-primary" />

                {/* Card Number */}
                <div className="border-b border-primary/20 bg-primary/5 px-4 py-2 sm:px-6 sm:py-3">
                  <span className="font-mono text-[10px] tracking-widest text-primary/80">
                    00
                  </span>
                </div>

                {/* Card Content */}
                <div className="p-6 sm:p-8 md:p-10">
                  {/* Icon */}
                  <div className="mb-6 flex justify-center sm:mb-8">
                    <div className="font-display text-5xl font-black tracking-wider text-primary/40 sm:text-6xl md:text-7xl">
                      10101
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="mb-3 text-center font-display text-lg font-bold tracking-wider text-foreground sm:mb-4 sm:text-xl">
                    Software Development
                  </h3>

                  {/* Description */}
                  <p className="text-center text-xs leading-relaxed text-foreground/70 sm:text-sm">
                    From mobile applications and websites to games, we&apos;re
                    fluent in development in all platforms. Crafting engaging
                    digital experiences is our forte.
                  </p>
                </div>
              </div>

              {/* Card 2 - System Administration */}
              <div className="group relative overflow-hidden border border-primary/30 bg-card/30 backdrop-blur-sm transition-all hover:border-primary/50 hover:bg-card/50">
                {/* Corner brackets */}
                <div className="absolute -left-px -top-px h-6 w-6 border-l-2 border-t-2 border-primary/40 transition-colors group-hover:border-primary" />
                <div className="absolute -right-px -top-px h-6 w-6 border-r-2 border-t-2 border-primary/40 transition-colors group-hover:border-primary" />
                <div className="absolute -bottom-px -left-px h-6 w-6 border-b-2 border-l-2 border-primary/40 transition-colors group-hover:border-primary" />
                <div className="absolute -bottom-px -right-px h-6 w-6 border-b-2 border-r-2 border-primary/40 transition-colors group-hover:border-primary" />

                {/* Card Number */}
                <div className="border-b border-primary/20 bg-primary/5 px-4 py-2 sm:px-6 sm:py-3">
                  <span className="font-mono text-[10px] tracking-widest text-primary/80">
                    01
                  </span>
                </div>

                {/* Card Content */}
                <div className="p-6 sm:p-8 md:p-10">
                  {/* Icon */}
                  <div className="mb-6 flex justify-center sm:mb-8">
                    <div className="font-display text-5xl font-black tracking-wider text-primary/40 sm:text-6xl md:text-7xl">
                      {">$"}
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="mb-3 text-center font-display text-lg font-bold tracking-wider text-foreground sm:mb-4 sm:text-xl">
                    System Administration
                  </h3>

                  {/* Description */}
                  <p className="text-center text-xs leading-relaxed text-foreground/70 sm:text-sm">
                    From servers to networks and everything in between - we
                    testify, optimize, and manage infrastructure to ensure peak
                    performance and stability.
                  </p>
                </div>
              </div>

              {/* Card 3 - AI & Machine Learning */}
              <div className="group relative overflow-hidden border border-primary/30 bg-card/30 backdrop-blur-sm transition-all hover:border-primary/50 hover:bg-card/50">
                {/* Corner brackets */}
                <div className="absolute -left-px -top-px h-6 w-6 border-l-2 border-t-2 border-primary/40 transition-colors group-hover:border-primary" />
                <div className="absolute -right-px -top-px h-6 w-6 border-r-2 border-t-2 border-primary/40 transition-colors group-hover:border-primary" />
                <div className="absolute -bottom-px -left-px h-6 w-6 border-b-2 border-l-2 border-primary/40 transition-colors group-hover:border-primary" />
                <div className="absolute -bottom-px -right-px h-6 w-6 border-b-2 border-r-2 border-primary/40 transition-colors group-hover:border-primary" />

                {/* Card Number */}
                <div className="border-b border-primary/20 bg-primary/5 px-4 py-2 sm:px-6 sm:py-3">
                  <span className="font-mono text-[10px] tracking-widest text-primary/80">
                    02
                  </span>
                </div>

                {/* Card Content */}
                <div className="p-6 sm:p-8 md:p-10">
                  {/* Icon */}
                  <div className="mb-6 flex justify-center sm:mb-8">
                    <div className="font-display text-5xl font-black tracking-wider text-primary/40 sm:text-6xl md:text-7xl">
                      AI
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="mb-3 text-center font-display text-lg font-bold tracking-wider text-foreground sm:mb-4 sm:text-xl">
                    AI & Machine Learning
                  </h3>

                  {/* Description */}
                  <p className="text-center text-xs leading-relaxed text-foreground/70 sm:text-sm">
                    With expertise spanning from AI algorithms and ML models to
                    reinforcement learning, we&apos;re well-equipped to tackle
                    the future.
                  </p>
                </div>
              </div>

              {/* Card 4 - DevOps */}
              <div className="group relative overflow-hidden border border-primary/30 bg-card/30 backdrop-blur-sm transition-all hover:border-primary/50 hover:bg-card/50">
                <div className="absolute -left-px -top-px h-6 w-6 border-l-2 border-t-2 border-primary/40 transition-colors group-hover:border-primary" />
                <div className="absolute -right-px -top-px h-6 w-6 border-r-2 border-t-2 border-primary/40 transition-colors group-hover:border-primary" />
                <div className="absolute -bottom-px -left-px h-6 w-6 border-b-2 border-l-2 border-primary/40 transition-colors group-hover:border-primary" />
                <div className="absolute -bottom-px -right-px h-6 w-6 border-b-2 border-r-2 border-primary/40 transition-colors group-hover:border-primary" />
                <div className="border-b border-primary/20 bg-primary/5 px-4 py-2 sm:px-6 sm:py-3">
                  <span className="font-mono text-[10px] tracking-widest text-primary/80">
                    03
                  </span>
                </div>
                <div className="p-6 sm:p-8 md:p-10">
                  <div className="mb-6 flex justify-center sm:mb-8">
                    <div className="font-display text-5xl font-black tracking-wider text-primary/40 sm:text-6xl md:text-7xl">
                      ∞
                    </div>
                  </div>
                  <h3 className="mb-3 text-center font-display text-lg font-bold tracking-wider text-foreground sm:mb-4 sm:text-xl">
                    DevOps
                  </h3>
                  <p className="text-center text-xs leading-relaxed text-foreground/70 sm:text-sm">
                    Streamlining development and operations through CI/CD
                    pipelines, automation, and container orchestration for
                    continuous delivery.
                  </p>
                </div>
              </div>

              {/* Card 5 - Web Development */}
              <div className="group relative overflow-hidden border border-primary/30 bg-card/30 backdrop-blur-sm transition-all hover:border-primary/50 hover:bg-card/50">
                <div className="absolute -left-px -top-px h-6 w-6 border-l-2 border-t-2 border-primary/40 transition-colors group-hover:border-primary" />
                <div className="absolute -right-px -top-px h-6 w-6 border-r-2 border-t-2 border-primary/40 transition-colors group-hover:border-primary" />
                <div className="absolute -bottom-px -left-px h-6 w-6 border-b-2 border-l-2 border-primary/40 transition-colors group-hover:border-primary" />
                <div className="absolute -bottom-px -right-px h-6 w-6 border-b-2 border-r-2 border-primary/40 transition-colors group-hover:border-primary" />
                <div className="border-b border-primary/20 bg-primary/5 px-4 py-2 sm:px-6 sm:py-3">
                  <span className="font-mono text-[10px] tracking-widest text-primary/80">
                    04
                  </span>
                </div>
                <div className="p-6 sm:p-8 md:p-10">
                  <div className="mb-6 flex justify-center sm:mb-8">
                    <div className="font-display text-5xl font-black tracking-wider text-primary/40 sm:text-6xl md:text-7xl">
                      {"</>"}
                    </div>
                  </div>
                  <h3 className="mb-3 text-center font-display text-lg font-bold tracking-wider text-foreground sm:mb-4 sm:text-xl">
                    Web Development
                  </h3>
                  <p className="text-center text-xs leading-relaxed text-foreground/70 sm:text-sm">
                    Building responsive, modern web applications with
                    cutting-edge frameworks and best practices for optimal user
                    experiences.
                  </p>
                </div>
              </div>

              {/* Card 6 - Cloud Computing */}
              <div className="group relative overflow-hidden border border-primary/30 bg-card/30 backdrop-blur-sm transition-all hover:border-primary/50 hover:bg-card/50">
                <div className="absolute -left-px -top-px h-6 w-6 border-l-2 border-t-2 border-primary/40 transition-colors group-hover:border-primary" />
                <div className="absolute -right-px -top-px h-6 w-6 border-r-2 border-t-2 border-primary/40 transition-colors group-hover:border-primary" />
                <div className="absolute -bottom-px -left-px h-6 w-6 border-b-2 border-l-2 border-primary/40 transition-colors group-hover:border-primary" />
                <div className="absolute -bottom-px -right-px h-6 w-6 border-b-2 border-r-2 border-primary/40 transition-colors group-hover:border-primary" />
                <div className="border-b border-primary/20 bg-primary/5 px-4 py-2 sm:px-6 sm:py-3">
                  <span className="font-mono text-[10px] tracking-widest text-primary/80">
                    05
                  </span>
                </div>
                <div className="p-6 sm:p-8 md:p-10">
                  <div className="mb-6 flex justify-center sm:mb-8">
                    <div className="font-display text-5xl font-black tracking-wider text-primary/40 sm:text-6xl md:text-7xl">
                      ☁
                    </div>
                  </div>
                  <h3 className="mb-3 text-center font-display text-lg font-bold tracking-wider text-foreground sm:mb-4 sm:text-xl">
                    Cloud Computing
                  </h3>
                  <p className="text-center text-xs leading-relaxed text-foreground/70 sm:text-sm">
                    Leveraging AWS, Azure, and GCP to build scalable,
                    distributed systems with serverless architectures and
                    microservices.
                  </p>
                </div>
              </div>

              {/* Card 9 - UI/UX Design */}
              <div className="group relative overflow-hidden border border-primary/30 bg-card/30 backdrop-blur-sm transition-all hover:border-primary/50 hover:bg-card/50">
                <div className="absolute -left-px -top-px h-6 w-6 border-l-2 border-t-2 border-primary/40 transition-colors group-hover:border-primary" />
                <div className="absolute -right-px -top-px h-6 w-6 border-r-2 border-t-2 border-primary/40 transition-colors group-hover:border-primary" />
                <div className="absolute -bottom-px -left-px h-6 w-6 border-b-2 border-l-2 border-primary/40 transition-colors group-hover:border-primary" />
                <div className="absolute -bottom-px -right-px h-6 w-6 border-b-2 border-r-2 border-primary/40 transition-colors group-hover:border-primary" />
                <div className="border-b border-primary/20 bg-primary/5 px-4 py-2 sm:px-6 sm:py-3">
                  <span className="font-mono text-[10px] tracking-widest text-primary/80">
                    06
                  </span>
                </div>
                <div className="p-6 sm:p-8 md:p-10">
                  <div className="mb-6 flex justify-center sm:mb-8">
                    <div className="font-display text-5xl font-black tracking-wider text-primary/40 sm:text-6xl md:text-7xl">
                      ✦
                    </div>
                  </div>
                  <h3 className="mb-3 text-center font-display text-lg font-bold tracking-wider text-foreground sm:mb-4 sm:text-xl">
                    UI/UX Design
                  </h3>
                  <p className="text-center text-xs leading-relaxed text-foreground/70 sm:text-sm">
                    Creating intuitive, beautiful interfaces that prioritize
                    user experience through research-driven design and
                    prototyping.
                  </p>
                </div>
              </div>

              {/* Card 10 - Mobile Development */}
              <div className="group relative overflow-hidden border border-primary/30 bg-card/30 backdrop-blur-sm transition-all hover:border-primary/50 hover:bg-card/50">
                <div className="absolute -left-px -top-px h-6 w-6 border-l-2 border-t-2 border-primary/40 transition-colors group-hover:border-primary" />
                <div className="absolute -right-px -top-px h-6 w-6 border-r-2 border-t-2 border-primary/40 transition-colors group-hover:border-primary" />
                <div className="absolute -bottom-px -left-px h-6 w-6 border-b-2 border-l-2 border-primary/40 transition-colors group-hover:border-primary" />
                <div className="absolute -bottom-px -right-px h-6 w-6 border-b-2 border-r-2 border-primary/40 transition-colors group-hover:border-primary" />
                <div className="border-b border-primary/20 bg-primary/5 px-4 py-2 sm:px-6 sm:py-3">
                  <span className="font-mono text-[10px] tracking-widest text-primary/80">
                    07
                  </span>
                </div>
                <div className="p-6 sm:p-8 md:p-10">
                  <div className="mb-6 flex justify-center sm:mb-8">
                    <div className="font-display text-5xl font-black tracking-wider text-primary/40 sm:text-6xl md:text-7xl">
                      📱
                    </div>
                  </div>
                  <h3 className="mb-3 text-center font-display text-lg font-bold tracking-wider text-foreground sm:mb-4 sm:text-xl">
                    Mobile Development
                  </h3>
                  <p className="text-center text-xs leading-relaxed text-foreground/70 sm:text-sm">
                    Developing native and cross-platform mobile applications for
                    iOS and Android with seamless performance and engaging UX.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Learning Path */}
        <section
          id="features"
          className="relative border-t border-primary/20 py-24"
        >
          {/* Section background */}
          <div className="absolute inset-0 bg-gradient-to-b from-background via-card/20 to-background" />
          <GridScanOverlay />

          {/* Status bar */}
          <StatusStrip variant="default" items={STATUS_STRIP_FEATURES} />

          <div className="container relative mx-auto px-4 pt-8">
            {/* Section header */}
            <div className="mb-16 text-center">
              <div className="mb-4 font-mono text-[10px] tracking-widest text-foreground/80">
                [ LEARNING PATH ]
              </div>
              <h2 className="font-display text-3xl font-bold tracking-wider text-primary md:text-4xl lg:text-5xl [text-shadow:0_0_40px_oklch(from_var(--primary)_l_c_h/0.4)]">
                HOW WE LEVEL UP
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-foreground/80">
                √ THE CODE. √ THE KNOWLEDGE. √ THE EXPERIENCE.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              <FeatureCard
                title="FOUNDATIONS"
                description="Master the fundamentals of programming, data structures, algorithms, and computer science principles."
                icon={
                  <svg
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                    />
                  </svg>
                }
              />
              <FeatureCard
                title="BUILD PROJECTS"
                description="Hands-on experience building real-world applications, from web apps to mobile solutions and games."
                icon={
                  <svg
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
                    />
                  </svg>
                }
              />
              <FeatureCard
                title="CODE REVIEWS"
                description="Learn best practices through peer reviews, constructive feedback, and collaborative code improvement."
                icon={
                  <svg
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                    />
                  </svg>
                }
              />
              <FeatureCard
                title="TEAM SPRINTS"
                description="Collaborate in agile teams, participate in hackathons, and work on projects with fellow CodeBreakers."
                icon={
                  <svg
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                }
              />
              <FeatureCard
                title="SHIP & DEMO"
                description="Deploy your projects, present to the community, and showcase your work at college events and fests."
                icon={
                  <svg
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    />
                  </svg>
                }
              />
              <FeatureCard
                title="MENTORSHIP"
                description="Get guidance from senior students, alumni, and industry professionals to accelerate your growth."
                icon={
                  <svg
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
                    />
                  </svg>
                }
              />
            </div>
          </div>
        </section>

        {/* Feedback */}
        <section className="relative border-t border-primary/20 py-24">
          {/* Status bar */}
          <StatusStrip variant="default" items={STATUS_STRIP_ARCHITECTURE} />

          <div className="container mx-auto px-4 pt-8">
            <div className="mb-12 text-center">
              <div className="mb-4 font-mono text-[10px] tracking-widest text-foreground/80">
                [ TESTIMONIALS ]
              </div>
              <h2 className="font-display text-3xl font-bold tracking-wider text-primary md:text-4xl lg:text-5xl [text-shadow:0_0_40px_oklch(from_var(--primary)_l_c_h/0.4)]">
                WHAT OUR MEMBERS SAY
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-foreground/80">
                Real experiences from CodeBreakers who leveled up their skills and careers
              </p>
            </div>

            {/* Testimonials Marquee */}
            <div className="relative mb-16 overflow-hidden">
              {/* Gradient overlays */}
              <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-32 bg-gradient-to-r from-background to-transparent" />
              <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-32 bg-gradient-to-l from-background to-transparent" />
              
              {/* Marquee container */}
              <div className="flex animate-marquee gap-6">
                {[...testimonials, ...testimonials].map((testimonial, index) => (
                  <div
                    key={`${testimonial.id}-${index}`}
                    className="group relative min-w-[400px] flex-shrink-0 overflow-hidden border border-primary/30 bg-card/30 backdrop-blur-sm transition-all hover:border-primary/50 hover:bg-card/50"
                  >
                    {/* Corner brackets */}
                    <div className="absolute -left-px -top-px h-4 w-4 border-l-2 border-t-2 border-primary/40 transition-colors group-hover:border-primary" />
                    <div className="absolute -right-px -top-px h-4 w-4 border-r-2 border-t-2 border-primary/40 transition-colors group-hover:border-primary" />
                    <div className="absolute -bottom-px -left-px h-4 w-4 border-b-2 border-l-2 border-primary/40 transition-colors group-hover:border-primary" />
                    <div className="absolute -bottom-px -right-px h-4 w-4 border-b-2 border-r-2 border-primary/40 transition-colors group-hover:border-primary" />

                    {/* Header */}
                    <div className="border-b border-primary/20 bg-primary/5 px-4 py-2">
                      <div className="flex items-center justify-between">
                        <span className="font-mono text-[9px] tracking-widest text-primary/80">
                          BATCH {testimonial.batch}
                        </span>
                        <div className="flex items-center gap-1">
                          <div className="h-1 w-1 animate-pulse bg-primary" />
                          <div className="h-1 w-2 bg-primary/60" />
                        </div>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6">
                      <p className="mb-4 text-sm leading-relaxed text-foreground/80 italic">
                        &quot;{testimonial.message}&quot;
                      </p>
                      <div className="border-t border-primary/20 pt-4">
                        <div className="font-display text-base font-bold tracking-wider text-primary">
                          {testimonial.name}
                        </div>
                        <div className="mt-1 font-mono text-xs tracking-wider text-foreground/60">
                          {testimonial.role}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mx-auto max-w-4xl">
              <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-5">
                {[
                  { name: "Foundations", status: "START HERE" },
                  { name: "Build Projects", status: "HANDS ON" },
                  { name: "Code Reviews", status: "FEEDBACK" },
                  { name: "Team Sprints", status: "COLLAB" },
                  { name: "Ship & Demo", status: "RESULTS" },
                ].map((tech) => (
                  <div
                    key={tech.name}
                    className="group relative overflow-hidden border border-border/50 bg-card/30 p-4 backdrop-blur-sm transition-all hover:border-primary/50 hover:bg-card/50"
                  >
                    {/* Corner decorations */}
                    <div className="absolute -left-px -top-px h-3 w-3 border-l-2 border-t-2 border-primary/40 transition-colors group-hover:border-primary" />
                    <div className="absolute -bottom-px -right-px h-3 w-3 border-b-2 border-r-2 border-primary/40 transition-colors group-hover:border-primary" />

                    <div className="text-center">
                      <div className="font-mono text-[8px] tracking-widest text-foreground/80">
                        {tech.status}
                      </div>
                      <div className="font-display text-sm font-bold tracking-wider text-primary">
                        {tech.name}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="relative border-t border-primary/20 py-24">
          <div className="absolute inset-0 bg-gradient-to-b from-background via-card/20 to-background" />

          <StatusStrip variant="default" items={STATUS_STRIP_FAQ} />

          <div className="container relative mx-auto px-4 pt-8">
            <div className="mb-16 text-center">
              <div className="mb-4 font-mono text-[10px] tracking-widest text-foreground/80">
                [ KNOWLEDGE BASE ]
              </div>
              <h2 className="font-display text-3xl font-bold tracking-wider text-primary md:text-4xl lg:text-5xl [text-shadow:0_0_40px_oklch(from_var(--primary)_l_c_h/0.4)]">
                FREQUENTLY ASKED
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-foreground/80">
                Common questions about The CodeBreakers GCE Kalahandi and our
                activities
              </p>
            </div>

            <div className="relative mx-auto max-w-3xl overflow-hidden border border-primary/30 bg-panel">
              {/* Corner brackets */}
              <div className="absolute -left-px -top-px h-4 w-4 border-l-2 border-t-2 border-primary" />
              <div className="absolute -right-px -top-px h-4 w-4 border-r-2 border-t-2 border-primary" />
              <div className="absolute -bottom-px -left-px h-4 w-4 border-b-2 border-l-2 border-primary" />
              <div className="absolute -bottom-px -right-px h-4 w-4 border-b-2 border-r-2 border-primary" />

              {/* Scanline effect */}
              <div className="crt-scanlines pointer-events-none absolute inset-0 opacity-[0.03]" />

              {/* Header bar */}
              <div className="relative border-b border-primary/30 bg-primary/5 px-4 py-2">
                <div className="absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-primary via-primary/50 to-transparent" />
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="flex items-center gap-1">
                      <div className="h-1.5 w-1.5 animate-pulse bg-primary" />
                      <div className="h-1.5 w-3 bg-primary/60" />
                    </div>
                    <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-primary">
                      FAQ-DATABASE.SYS
                    </span>
                  </div>
                  <div className="font-mono text-[9px] tracking-wider">
                    <span className="text-foreground/50">RECORDS:8</span>
                    <span className="ml-3 text-primary">[ ONLINE ]</span>
                  </div>
                </div>
              </div>

              {/* FAQ Content */}
              <div className="relative p-4 md:p-6">
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="what-is" className="border-primary/20">
                    <AccordionTrigger className="font-display text-sm tracking-wider text-foreground hover:text-primary hover:no-underline">
                      What is CodeBreakers?
                    </AccordionTrigger>
                    <AccordionContent className="text-foreground/80">
                      CodeBreakers is the official coding club of Government
                      College of Engineering Kalahandi, Bhawanipatna. We are a
                      community of passionate programmers, developers, and tech
                      enthusiasts dedicated to fostering coding culture,
                      organizing workshops, hackathons, and competitive
                      programming events to help students enhance their
                      technical skills.
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="join" className="border-primary/20">
                    <AccordionTrigger className="font-display text-sm tracking-wider text-foreground hover:text-primary hover:no-underline">
                      How can I join CodeBreakers?
                    </AccordionTrigger>
                    <AccordionContent className="text-foreground/80">
                      Any student enrolled at Government College of Engineering
                      Kalahandi can join CodeBreakers. Keep an eye on our social
                      media handles and college notice boards for announcements
                      about recruitment drives and membership registration. We
                      typically hold orientation sessions at the beginning of
                      each academic year.
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem
                    value="prerequisites"
                    className="border-primary/20"
                  >
                    <AccordionTrigger className="font-display text-sm tracking-wider text-foreground hover:text-primary hover:no-underline">
                      Do I need prior coding experience to join?
                    </AccordionTrigger>
                    <AccordionContent className="text-foreground/80">
                      Not at all! CodeBreakers welcomes students of all skill
                      levels — from complete beginners to advanced programmers.
                      We organize beginner-friendly workshops and mentorship
                      programs to help you get started. Our goal is to create an
                      inclusive environment where everyone can learn and grow
                      together.
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="events" className="border-primary/20">
                    <AccordionTrigger className="font-display text-sm tracking-wider text-foreground hover:text-primary hover:no-underline">
                      What kind of events does CodeBreakers organize?
                    </AccordionTrigger>
                    <AccordionContent className="text-foreground/80">
                      We organize a variety of events including{" "}
                      <strong className="text-foreground">
                        coding competitions
                      </strong>
                      , <strong className="text-foreground">hackathons</strong>,{" "}
                      <strong className="text-foreground">
                        technical workshops
                      </strong>
                      ,{" "}
                      <strong className="text-foreground">
                        guest lectures
                      </strong>
                      ,{" "}
                      <strong className="text-foreground">
                        project showcases
                      </strong>
                      , and{" "}
                      <strong className="text-foreground">
                        collaborative coding sessions
                      </strong>
                      . We also participate in inter-college competitions and
                      help students prepare for coding interviews and
                      placements.
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="benefits" className="border-primary/20">
                    <AccordionTrigger className="font-display text-sm tracking-wider text-foreground hover:text-primary hover:no-underline">
                      What are the benefits of being a CodeBreakers member?
                    </AccordionTrigger>
                    <AccordionContent className="text-foreground/80">
                      Members get exclusive access to workshops, mentorship from
                      senior students and alumni, networking opportunities with
                      industry professionals, early notifications about
                      competitions and internships, collaborative project
                      opportunities, and a chance to enhance their
                      problem-solving and teamwork skills in a supportive
                      community.
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="projects" className="border-primary/20">
                    <AccordionTrigger className="font-display text-sm tracking-wider text-foreground hover:text-primary hover:no-underline">
                      Can I work on projects through CodeBreakers?
                    </AccordionTrigger>
                    <AccordionContent className="text-foreground/80">
                      Yes! CodeBreakers encourages collaborative project
                      development. We facilitate team formation for hackathons,
                      organize project showcase events, and provide guidance on
                      open-source contributions. Members can propose project
                      ideas, find teammates with complementary skills, and
                      receive mentorship from experienced developers in the
                      club.
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="contact" className="border-primary/20">
                    <AccordionTrigger className="font-display text-sm tracking-wider text-foreground hover:text-primary hover:no-underline">
                      How can I stay updated with CodeBreakers activities?
                    </AccordionTrigger>
                    <AccordionContent className="text-foreground/80">
                      Follow us on our official social media platforms including
                      Instagram, LinkedIn, and Discord. We regularly post
                      updates about upcoming events, workshop schedules,
                      achievement highlights, and important announcements. You
                      can also check our website and join our WhatsApp community
                      for instant notifications.
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="free" className="border-primary/20">
                    <AccordionTrigger className="font-display text-sm tracking-wider text-foreground hover:text-primary hover:no-underline">
                      Is there any membership fee for CodeBreakers?
                    </AccordionTrigger>
                    <AccordionContent className="text-foreground/80">
                      No, CodeBreakers membership is completely free for all
                      students of Government College of Engineering Kalahandi.
                      We believe in making quality technical education and
                      resources accessible to everyone. Some special events or
                      workshops may have nominal participation fees to cover
                      logistics, but regular club activities are always free.
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section id="join" className="relative border-t border-primary/20 py-24">
          <GridScanOverlay />

          <div className="container relative mx-auto px-4 text-center">
            {/* Terminal-style CTA box */}
            <div className="relative mx-auto max-w-2xl overflow-hidden border border-primary/30 bg-panel">
              {/* Corner brackets - Tron style */}
              <div className="absolute -left-px -top-px h-4 w-4 border-l-2 border-t-2 border-primary" />
              <div className="absolute -right-px -top-px h-4 w-4 border-r-2 border-t-2 border-primary" />
              <div className="absolute -bottom-px -left-px h-4 w-4 border-b-2 border-l-2 border-primary" />
              <div className="absolute -bottom-px -right-px h-4 w-4 border-b-2 border-r-2 border-primary" />

              {/* Scanline effect */}
              <div className="crt-scanlines pointer-events-none absolute inset-0 opacity-[0.03]" />

              {/* Header bar */}
              <div className="relative border-b border-primary/30 bg-primary/5 px-4 py-2">
                <div className="absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-primary via-primary/50 to-transparent" />
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="flex items-center gap-1">
                      <div className="h-1.5 w-1.5 animate-pulse bg-primary" />
                      <div className="h-1.5 w-3 bg-primary/60" />
                    </div>
                    <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-primary">
                      AWAITING USER INPUT
                    </span>
                  </div>
                  <div className="font-mono text-[9px] tracking-wider">
                    <span className="text-primary">[ READY ]</span>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="relative px-8 py-12 md:px-16">
                <h2 className="mb-6 font-display text-4xl font-bold tracking-wider text-primary md:text-5xl [text-shadow:0_0_40px_oklch(from_var(--primary)_l_c_h/0.4)]">
                  READY TO ENTER?
                </h2>
                <p className="mx-auto mb-8 max-w-xl text-foreground/80">
                  To a community of builders writing real code and shipping real
                  projects.
                </p>
                <Link
                  href="/"
                  className="group relative inline-flex overflow-hidden rounded border-2 border-primary bg-primary px-12 py-4 font-mono text-sm font-bold tracking-wider text-primary-foreground transition-all hover:shadow-[0_0_40px_var(--primary)]"
                >
                  <span className="relative z-10">JOIN NOW</span>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
