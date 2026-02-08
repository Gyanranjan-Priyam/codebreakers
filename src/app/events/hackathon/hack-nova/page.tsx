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
import { HackathonImageLinks } from "@/data/galleryItems";

export default function HackNovaPage() {
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
                    INSPRANO TECHFEST {new Date().getFullYear()}-{String(new Date().getFullYear() + 1).slice(-2)} EDITION
                  </span>
                </div>

                <h1 className="font-display text-5xl font-bold tracking-wider text-foreground lg:text-6xl">
                  HACK
                  <span className="text-primary [text-shadow:0_0_30px_oklch(from_var(--primary)_l_c_h/0.6)]">
                    NOVA
                  </span>
                </h1>

                <div className="h-px w-32 bg-linear-to-r from-primary to-transparent" />
              </div>

              {/* Description */}
              <div className="space-y-4 mt-2">
                <p className="font-mono text-sm leading-relaxed text-foreground/80">
                  Join our thrilling hackathon where creativity meets
                  technology. Collaborate with fellow enthusiasts to build
                  innovative solutions in a competitive yet fun environment.
                  Whether you&apos;re a beginner or a seasoned coder, Hack Nova
                  offers a platform to learn, network, and showcase your skills.
                </p>

                <GlowContainer className="border-l-2 border-primary/50 bg-primary/5 pl-4 mt-2">
                  <p className="font-mono text-xs italic text-primary">
                    Prizes and recognition await the most inventive projects!
                  </p>
                </GlowContainer>
              </div>

              {/* Status Stats */}
              <div className="grid grid-cols-3 gap-4">
                <Stat label="DURATION" value="12-18" unit="HRS" />
                <Stat label="TEAMS" value="50+" unit="MAX" />
                <Stat label="PRIZES" value="30K+" unit="POOL" />
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
                  src="https://res.cloudinary.com/dw47ib0sh/image/upload/v1764666629/s7sly7mokgzxphzz8i5b.avif"
                  alt="Hack Nova Hackathon"
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
                  CODEBREAKERS
                </p>
                <p className="font-mono text-xs text-foreground/70">
                  Government College of Engineering, Kannur
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
                title: "SKILL ENHANCEMENT",
                description:
                  "Push your coding abilities to the limit. Learn new technologies and frameworks through hands-on experience.",
                icon: (
                  <svg className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                ),
              },
              {
                title: "NETWORKING",
                description:
                  "Connect with like-minded developers, mentors, and industry professionals. Build relationships that last beyond the event.",
                icon: (
                  <svg className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                  </svg>
                ),
              },
              {
                title: "PRIZES & RECOGNITION",
                description:
                  "Win exciting prizes, certificates, and gain recognition for your innovative solutions and hard work.",
                icon: (
                  <svg className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                  </svg>
                ),
              },
              {
                title: "REAL-WORLD PROBLEMS",
                description:
                  "Work on challenging problem statements that mirror industry scenarios. Make a real impact with your solutions.",
                icon: (
                  <svg className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
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
                {HackathonImageLinks.map((imageUrl, index) => (
                  <div
                    key={`first-${index}`}
                    className="group relative flex-shrink-0 overflow-hidden"
                    style={{ width: '320px', height: '320px' }}
                  >
                    {/* Image Container */}
                    <div className="relative h-full w-full border border-primary/30 bg-background/50 backdrop-blur-sm transition-all duration-300 group-hover:border-primary/70 group-hover:shadow-[0_0_20px_var(--primary)]">
                      <Image
                        src={imageUrl}
                        alt={`Hackathon Memory ${index + 1}`}
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
                {HackathonImageLinks.map((imageUrl, index) => (
                  <div
                    key={`second-${index}`}
                    className="group relative flex-shrink-0 overflow-hidden"
                    style={{ width: '320px', height: '320px' }}
                  >
                    {/* Image Container */}
                    <div className="relative h-full w-full border border-primary/30 bg-background/50 backdrop-blur-sm transition-all duration-300 group-hover:border-primary/70 group-hover:shadow-[0_0_20px_var(--primary)]">
                      <Image
                        src={imageUrl}
                        alt={`Hackathon Memory ${index + 1}`}
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
                ARCHIVE: {HackathonImageLinks.length} MEMORIES LOADED
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
            animation: marquee 40s linear infinite;
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
                INNOVATE?
              </span>
            </h2>

            <p className="font-mono text-sm text-foreground/70">
              Secure your spot in Hack Nova and be part of something
              extraordinary. Registration opens soon!
            </p>

            <StatusBar
              leftContent={
                <>
                  <span className="text-primary">EVENT: HACK NOVA</span>
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
