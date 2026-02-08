"use client";

import * as React from "react";
import Image from "next/image";
import {
  GlowContainer,
  CRTEffect,
  GridScanOverlay,
  UplinkHeader,
  Stat,
  StatusBar,
} from "@/components/thegridcn";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { NineLockChallengeImageLinks } from "@/data/galleryItems";

export default function NineLockChallengesPage() {
  return (
    <div className="relative min-h-screen bg-background">
      {/* CRT Effect Overlay */}
      <CRTEffect />

      {/* Grid Scan Overlay */}
      <GridScanOverlay />

      {/* Hero Section */}
      <section className="relative overflow-hidden border-b border-primary/30 bg-panel">
        {/* Scanline effect */}
        <div className="crt-scanlines pointer-events-none absolute inset-0 opacity-[0.03]" />

        <div className="container relative z-10 mx-auto px-4 py-20">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            {/* Left Content */}
            <div className="flex flex-col justify-center space-y-8">
              {/* Header */}
              <div className="space-y-4 mt-2">
                <div className="flex items-center gap-3">
                  <div className="h-2 w-2 animate-pulse rounded-full bg-primary" />
                  <span className="font-mono text-xs tracking-widest text-primary">
                    INSPRANO TECHFEST {new Date().getFullYear()}-{String(new Date().getFullYear() + 1).slice(-2)} - EDITION
                  </span>
                </div>

                <h1 className="font-display text-5xl font-bold tracking-wider text-foreground lg:text-6xl">
                  9 LOCK
                  <span className="text-primary [text-shadow:0_0_30px_oklch(from_var(--primary)_l_c_h/0.6)]">
                  {" "}
                    CHALLENGE
                  </span>
                </h1>

                <div className="h-px w-32 bg-linear-to-r from-primary to-transparent" />
              </div>

              {/* Description */}
              <div className="space-y-4 mt-2">
                <p className="font-mono text-sm leading-relaxed text-foreground/80">
                  A progressive cryptography and problem-solving event built
                  around nine digital puzzles. Each lock challenges you with
                  logic, ciphers, algorithms or light coding. Solving one puzzle
                  unlocks a clue that guides you to the next. As challenges
                  become more layered and interconnected, only the sharpest
                  minds will crack all nine locks.
                </p>

                <GlowContainer className="border-l-2 border-primary/50 bg-primary/5 pl-4 mt-2">
                  <p className="font-mono text-xs italic text-primary">
                    Nine locks. One ultimate solution. Are you ready?
                  </p>
                </GlowContainer>
              </div>

              {/* Status Stats */}
              <div className="grid grid-cols-3 gap-4">
                <Stat label="LOCKS" value="9" unit="STAGES" />
                <Stat label="DURATION" value="4-6" unit="HRS" />
                <Stat label="TEAMS" value="30+" unit="MAX" />
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-wrap gap-4">
                <Link href="#register" className="group relative inline-block">
                  <Button
                    size="lg"
                    className="cursor-pointer group relative overflow-hidden border-2 border-primary bg-primary/20 font-mono text-sm font-bold tracking-wider text-primary transition-all hover:bg-primary hover:text-primary-foreground hover:shadow-[0_0_30px_var(--primary)]"
                  >
                    <span className="relative z-10 text-white">REGISTER NOW</span>
                    <div className="absolute inset-0 z-0 -translate-x-full bg-primary transition-transform group-hover:translate-x-0" />
                  </Button>
                </Link>

                <Button
                  size="lg"
                  variant="outline"
                  className="border-primary/50 font-mono text-sm tracking-wider text-foreground hover:border-primary hover:bg-primary/10"
                >
                  VIEW DETAILS
                </Button>
              </div>
            </div>

            {/* Right Image */}
            <div className="relative min-h-[400px] lg:min-h-[500px]">
              <div className="relative h-full overflow-hidden rounded-sm border border-primary/30 bg-background/50 backdrop-blur-sm">
                <Image
                  src="https://res.cloudinary.com/dw47ib0sh/image/upload/v1764667954/kdop1bmze4utoxr3es09.jpg"
                  alt="9 Lock Challenge"
                  fill
                  className="object-cover"
                  priority
                  sizes="(max-width: 768px) 100vw, 50vw"
                  unoptimized
                />
                {/* Image overlay gradient */}
                <div className="absolute inset-0 bg-linear-to-t from-background/80 via-background/20 to-transparent" />

                {/* HUD Corner markers */}
                <div className="absolute -left-px -top-px h-4 w-4 border-l-2 border-t-2 border-primary" />
                <div className="absolute -right-px -top-px h-4 w-4 border-r-2 border-t-2 border-primary" />
                <div className="absolute -bottom-px -left-px h-4 w-4 border-b-2 border-l-2 border-primary" />
                <div className="absolute -bottom-px -right-px h-4 w-4 border-b-2 border-r-2 border-primary" />
                
                {/* Inner corner accents */}
                <div className="absolute left-2 top-2 h-4 w-4 border-l-2 border-t-2 border-primary" />
                <div className="absolute right-2 top-2 h-4 w-4 border-r-2 border-t-2 border-primary" />
                <div className="absolute bottom-2 left-2 h-4 w-4 border-b-2 border-l-2 border-primary" />
                <div className="absolute bottom-2 right-2 h-4 w-4 border-b-2 border-r-2 border-primary" />
              </div>
            </div>
          </div>
        </div>

        {/* Bottom accent line */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-primary to-transparent" />
      </section>

      {/* Event Info Section */}
      <section className="relative border-b border-primary/30 bg-background py-16">
        <div className="container mx-auto px-4">
          <UplinkHeader
            leftText="EVENT OVERVIEW"
            rightText="MISSION PARAMETERS"
          />

          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {/* Info Card 1 */}
            <GlowContainer className="group relative border border-primary/30 bg-panel p-6 transition-all hover:border-primary/50 hover:bg-primary/5">
              <div className="crt-scanlines pointer-events-none absolute inset-0 opacity-[0.03]" />
              <div className="relative space-y-3">
                <div className="flex items-center gap-2">
                  <div className="h-2 w-2 animate-pulse rounded-full bg-primary" />
                  <h3 className="font-mono text-sm tracking-widest text-primary">
                    ORGANIZED BY
                  </h3>
                </div>
                <p className="font-mono text-2xl font-bold text-foreground">
                  CSE DEPT
                </p>
                <p className="font-mono text-xs text-foreground/70">
                  In collaboration with CODEBREAKERS
                </p>
              </div>
            </GlowContainer>

            {/* Info Card 2 */}
            <GlowContainer className="group relative border border-primary/30 bg-panel p-6 transition-all hover:border-primary/50 hover:bg-primary/5">
              <div className="crt-scanlines pointer-events-none absolute inset-0 opacity-[0.03]" />
              <div className="relative space-y-3">
                <div className="flex items-center gap-2">
                  <div className="h-2 w-2 animate-pulse rounded-full bg-primary" />
                  <h3 className="font-mono text-sm tracking-widest text-primary">
                    PART OF
                  </h3>
                </div>
                <p className="font-mono text-2xl font-bold text-foreground">
                  INSPRANO
                </p>
                <p className="font-mono text-xs text-foreground/70">
                  Annual Technical Festival
                </p>
              </div>
            </GlowContainer>

            {/* Info Card 3 */}
            <GlowContainer className="group relative border border-primary/30 bg-panel p-6 transition-all hover:border-primary/50 hover:bg-primary/5">
              <div className="crt-scanlines pointer-events-none absolute inset-0 opacity-[0.03]" />
              <div className="relative space-y-3">
                <div className="flex items-center gap-2">
                  <div className="h-2 w-2 animate-pulse rounded-full bg-primary" />
                  <h3 className="font-mono text-sm tracking-widest text-primary">
                    STATUS
                  </h3>
                </div>
                <p className="font-mono text-2xl font-bold text-primary">
                  UPCOMING
                </p>
                <p className="font-mono text-xs text-foreground/70">
                  Registration Opens Soon
                </p>
              </div>
            </GlowContainer>
          </div>
        </div>
      </section>

      {/* Why Participate Section */}
      <section className="relative border-b border-primary/30 bg-panel py-16">
        <div className="crt-scanlines pointer-events-none absolute inset-0 opacity-[0.03]" />

        <div className="container relative mx-auto px-4">
          <UplinkHeader
            leftText="WHY PARTICIPATE"
            rightText="TACTICAL ADVANTAGES"
          />

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {[
              {
                title: "CRYPTOGRAPHIC MASTERY",
                description:
                  "Sharpen your skills in cryptography, ciphers, and encoding techniques. Develop expertise in breaking complex digital puzzles and encryption methods.",
                icon: (
                  <svg className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                ),
              },
              {
                title: "PROGRESSIVE CHALLENGES",
                description:
                  "Experience escalating difficulty levels that test your limits. Each lock builds on the previous, creating an interconnected puzzle network.",
                icon: (
                  <svg className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                ),
              },
              {
                title: "LOGICAL THINKING",
                description:
                  "Enhance analytical and critical thinking abilities. Train your mind to recognize patterns, decode messages, and solve multi-layered problems.",
                icon: (
                  <svg className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                ),
              },
              {
                title: "REWARDS & GLORY",
                description:
                  "Win exciting prizes for unlocking all nine stages. Gain recognition as a master puzzle solver and cryptography enthusiast.",
                icon: (
                  <svg className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                  </svg>
                ),
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="group relative border border-primary/30 bg-background p-6 transition-all hover:border-primary/50 hover:bg-primary/5"
              >
                {/* Corner accents */}
                <span className="absolute left-0 top-0 h-3 w-3 border-l-2 border-t-2 border-primary/50" />
                <span className="absolute right-0 top-0 h-3 w-3 border-r-2 border-t-2 border-primary/50" />

                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded border border-primary/30 bg-primary/10">
                      {feature.icon}
                    </div>
                    <h3 className="font-mono text-sm tracking-widest text-primary">
                      {feature.title}
                    </h3>
                  </div>
                  <p className="font-mono text-xs leading-relaxed text-foreground/70">
                    {feature.description}
                  </p>
                </div>

                {/* Bottom corner accents */}
                <span className="absolute bottom-0 left-0 h-3 w-3 border-b-2 border-l-2 border-primary/50" />
                <span className="absolute bottom-0 right-0 h-3 w-3 border-b-2 border-r-2 border-primary/50" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section - Marquee */}
      <section className="relative border-b border-primary/30 bg-background py-16 overflow-hidden">
        <div className="container mx-auto px-4">
          <UplinkHeader
            leftText="PAST EDITIONS"
            rightText="MEMORY ARCHIVE"
          />

          <div className="mt-12 relative">
            {/* Marquee Container */}
            <div className="relative overflow-hidden">
              <div className="flex gap-4 animate-marquee">
                {/* First set of images */}
                {NineLockChallengeImageLinks.map((imageUrl, index) => (
                  <div
                    key={`first-${index}`}
                    className="group relative flex-shrink-0 overflow-hidden"
                    style={{ width: '320px', height: '320px' }}
                  >
                    {/* Image Container */}
                    <div className="relative h-full w-full border border-primary/30 bg-background/50 backdrop-blur-sm transition-all duration-300 group-hover:border-primary/70 group-hover:shadow-[0_0_20px_var(--primary)]">
                      <Image
                        src={imageUrl}
                        alt={`9 Lock Challenge Memory ${index + 1}`}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                        sizes="320px"
                        unoptimized
                      />
                      
                      {/* Gradient Overlay */}
                      <div className="absolute inset-0 bg-linear-to-t from-background/90 via-background/20 to-transparent opacity-60 transition-opacity duration-300 group-hover:opacity-30" />
                      
                      {/* HUD Corner Markers */}
                      <div className="absolute -left-px -top-px h-3 w-3 border-l-2 border-t-2 border-primary opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                      <div className="absolute -right-px -top-px h-3 w-3 border-r-2 border-t-2 border-primary opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                      <div className="absolute -bottom-px -left-px h-3 w-3 border-b-2 border-l-2 border-primary opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                      <div className="absolute -bottom-px -right-px h-3 w-3 border-b-2 border-r-2 border-primary opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                      
                      {/* Scanline Effect on Hover */}
                      <div className="crt-scanlines pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-[0.05]" />
                      
                      {/* Index Number */}
                      <div className="absolute bottom-2 left-2 font-mono text-xs tracking-wider text-primary opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                        #{String(index + 1).padStart(2, "0")}
                      </div>
                    </div>
                  </div>
                ))}
                {/* Duplicate set for seamless loop */}
                {NineLockChallengeImageLinks.map((imageUrl, index) => (
                  <div
                    key={`second-${index}`}
                    className="group relative flex-shrink-0 overflow-hidden"
                    style={{ width: '320px', height: '320px' }}
                  >
                    {/* Image Container */}
                    <div className="relative h-full w-full border border-primary/30 bg-background/50 backdrop-blur-sm transition-all duration-300 group-hover:border-primary/70 group-hover:shadow-[0_0_20px_var(--primary)]">
                      <Image
                        src={imageUrl}
                        alt={`9 Lock Challenge Memory ${index + 1}`}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                        sizes="320px"
                        unoptimized
                      />
                      
                      {/* Gradient Overlay */}
                      <div className="absolute inset-0 bg-linear-to-t from-background/90 via-background/20 to-transparent opacity-60 transition-opacity duration-300 group-hover:opacity-30" />
                      
                      {/* HUD Corner Markers */}
                      <div className="absolute -left-px -top-px h-3 w-3 border-l-2 border-t-2 border-primary opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                      <div className="absolute -right-px -top-px h-3 w-3 border-r-2 border-t-2 border-primary opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                      <div className="absolute -bottom-px -left-px h-3 w-3 border-b-2 border-l-2 border-primary opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                      <div className="absolute -bottom-px -right-px h-3 w-3 border-b-2 border-r-2 border-primary opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                      
                      {/* Scanline Effect on Hover */}
                      <div className="crt-scanlines pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-[0.05]" />
                      
                      {/* Index Number */}
                      <div className="absolute bottom-2 left-2 font-mono text-xs tracking-wider text-primary opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                        #{String(index + 1).padStart(2, "0")}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Gradient fade edges */}
            <div className="pointer-events-none absolute left-0 top-0 h-full w-32 bg-linear-to-r from-background to-transparent" />
            <div className="pointer-events-none absolute right-0 top-0 h-full w-32 bg-linear-to-l from-background to-transparent" />
          </div>

          {/* Bottom Info Bar */}
          <div className="mt-8 border border-primary/30 bg-primary/5 p-4">
            <div className="flex items-center justify-between">
              <span className="font-mono text-xs tracking-widest text-foreground/70">
                ARCHIVE: {NineLockChallengeImageLinks.length} MEMORIES LOADED
              </span>
              <div className="flex items-center gap-2">
                <div className="h-2 w-2 animate-pulse rounded-full bg-primary" />
                <span className="font-mono text-xs tracking-wider text-primary">
                  SYSTEM ACTIVE
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Add marquee animation keyframes */}
        <style jsx>{`
          @keyframes marquee {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(-50%);
            }
          }

          .animate-marquee {
            animation: marquee 35s linear infinite;
          }

          .animate-marquee:hover {
            animation-play-state: paused;
          }
        `}</style>
      </section>

      {/* CTA Section */}
      <section className="relative bg-background py-16">
        <div className="container mx-auto px-4 text-center">
          <div className="mx-auto max-w-2xl space-y-8">
            <h2 className="font-display text-3xl font-bold tracking-wider text-foreground lg:text-4xl">
              READY TO{" "}
              <span className="text-primary [text-shadow:0_0_30px_oklch(from_var(--primary)_l_c_h/0.6)]">
                UNLOCK?
              </span>
            </h2>

            <p className="font-mono text-sm text-foreground/70">
              Gear up for the ultimate cryptography challenge. Can you crack all
              nine locks and reveal the final answer?
            </p>

            <StatusBar
              leftContent={
                <>
                  <span className="text-primary">EVENT: 9 LOCK CHALLENGE</span>
                  <span className="text-foreground/60">|</span>
                  <span>STATUS: UPCOMING</span>
                </>
              }
              rightContent={<span>SLOTS: LIMITED</span>}
            />

            <Button
              size="lg"
              className="cursor-pointer group relative overflow-hidden border-2 border-primary bg-primary/20 px-8 py-6 font-mono text-base font-bold tracking-wider text-primary transition-all hover:bg-primary hover:text-primary-foreground hover:shadow-[0_0_40px_var(--primary)]"
            >
              <span className="relative z-10">NOTIFY ME</span>
              <div className="absolute inset-0 z-0 translate-y-full bg-primary transition-transform group-hover:translate-y-0" />
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}