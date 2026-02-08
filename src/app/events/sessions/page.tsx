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
import { SessionImageLinks } from "@/data/galleryItems";

export default function SessionsPage() {
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
                    CODEBREAKERS - KNOWLEDGE SERIES
                  </span>
                </div>

                <h1 className="font-display text-5xl font-bold tracking-wider text-foreground lg:text-6xl">
                  TECH
                  <span className="text-primary [text-shadow:0_0_30px_oklch(from_var(--primary)_l_c_h/0.6)]">
                  {" "}
                    TALKS
                  </span>
                </h1>


                <div className="h-px w-32 bg-linear-to-r from-primary to-transparent" />
              </div>

              {/* Description */}
              <div className="space-y-4 mt-2">
                <p className="font-mono text-sm leading-relaxed text-foreground/80">
                  Join our interactive technical sessions designed to expand
                  your knowledge and skills. Learn from industry experts,
                  experienced developers, and thought leaders about the latest
                  technologies, best practices, and emerging trends in software
                  development.
                </p>

                <GlowContainer className="border-l-2 border-primary/50 bg-primary/5 pl-4 mt-2">
                  <p className="font-mono text-xs italic text-primary">
                    Regular sessions to keep you updated with the tech world!
                  </p>
                </GlowContainer>
              </div>

              {/* Status Stats */}
              <div className="grid grid-cols-3 gap-4">
                <Stat label="DURATION" value="1-2" unit="HRS" />
                <Stat label="FREQUENCY" value="MONTHLY" unit="" />
                <Stat label="FORMAT" value="HYBRID" unit="" />
              </div>
            </div>

            {/* Right Image */}
            <div className="relative min-h-[400px] lg:min-h-[500px]">
              <div className="relative h-full overflow-hidden rounded-sm border border-primary/30 bg-background/50 backdrop-blur-sm">
                <Image
                  src="https://res.cloudinary.com/dw47ib0sh/image/upload/v1764667955/dt7bwe0kntn3dzkk1t5z.jpg"
                  alt="Tech Sessions"
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
            leftText="SESSION OVERVIEW"
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
                  Government College of Engineering, KALAHANDI
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
                    TYPE
                  </h3>
                </div>
                <p className="font-mono text-2xl font-bold text-foreground">
                  KNOWLEDGE SERIES
                </p>
                <p className="font-mono text-xs text-foreground/70">
                  Regular Technical Sessions
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
                  ACTIVE
                </p>
                <p className="font-mono text-xs text-foreground/70">
                  Ongoing Initiative
                </p>
              </div>
            </GlowContainer>
          </div>
        </div>
      </section>

      {/* Why Attend Section */}
      <section className="relative border-b border-primary/30 bg-panel py-16">
        <div className="crt-scanlines pointer-events-none absolute inset-0 opacity-[0.03]" />

        <div className="container relative mx-auto px-4">
          <UplinkHeader
            leftText="WHY ATTEND"
            rightText="TACTICAL ADVANTAGES"
          />

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {[
              {
                title: "EXPERT KNOWLEDGE",
                description:
                  "Learn from industry professionals and experienced developers. Gain insights into real-world applications and best practices.",
                icon: (
                  <svg className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                ),
              },
              {
                title: "LATEST TECHNOLOGIES",
                description:
                  "Stay updated with emerging technologies and industry trends. Explore new frameworks, tools, and development methodologies.",
                icon: (
                  <svg className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                ),
              },
              {
                title: "INTERACTIVE LEARNING",
                description:
                  "Engage in hands-on demonstrations and Q&A sessions. Collaborate with peers and clarify your doubts directly with experts.",
                icon: (
                  <svg className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
                  </svg>
                ),
              },
              {
                title: "SKILL DEVELOPMENT",
                description:
                  "Enhance your technical skills and broaden your knowledge base. Build a strong foundation for your career growth in tech.",
                icon: (
                  <svg className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
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

      {/* Gallery Section - Placeholder */}
      {SessionImageLinks.length > 0 ? (
        <section className="relative border-b border-primary/30 bg-background py-16 overflow-hidden">
          <div className="container mx-auto px-4">
            <UplinkHeader
              leftText="PAST SESSIONS"
              rightText="MEMORY ARCHIVE"
            />

            <div className="mt-12 relative">
              {/* Marquee Container */}
              <div className="relative overflow-hidden">
                <div className="flex gap-4 animate-marquee">
                  {/* First set of images */}
                  {SessionImageLinks.map((imageUrl, index) => (
                    <div
                      key={`first-${index}`}
                      className="group relative flex-shrink-0 overflow-hidden"
                      style={{ width: '320px', height: '320px' }}
                    >
                      {/* Image Container */}
                      <div className="relative h-full w-full border border-primary/30 bg-background/50 backdrop-blur-sm transition-all duration-300 group-hover:border-primary/70 group-hover:shadow-[0_0_20px_var(--primary)]">
                        <Image
                          src={imageUrl}
                          alt={`Session Memory ${index + 1}`}
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
                  {SessionImageLinks.map((imageUrl, index) => (
                    <div
                      key={`second-${index}`}
                      className="group relative flex-shrink-0 overflow-hidden"
                      style={{ width: '320px', height: '320px' }}
                    >
                      {/* Image Container */}
                      <div className="relative h-full w-full border border-primary/30 bg-background/50 backdrop-blur-sm transition-all duration-300 group-hover:border-primary/70 group-hover:shadow-[0_0_20px_var(--primary)]">
                        <Image
                          src={imageUrl}
                          alt={`Session Memory ${index + 1}`}
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
                  ARCHIVE: {SessionImageLinks.length} MEMORIES LOADED
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
      ) : (
        <section className="relative border-b border-primary/30 bg-background py-16">
          <div className="container mx-auto px-4">
            <UplinkHeader
              leftText="PAST SESSIONS"
              rightText="MEMORY ARCHIVE"
            />

            <div className="mt-12">
              <GlowContainer className="border border-primary/30 bg-panel p-12 text-center">
                <div className="crt-scanlines pointer-events-none absolute inset-0 opacity-[0.03]" />
                <div className="relative space-y-4">
                  <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full border-2 border-primary/30 bg-primary/10">
                    <svg className="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <h3 className="font-mono text-lg tracking-wider text-primary">
                    ARCHIVE LOADING...
                  </h3>
                  <p className="font-mono text-xs text-foreground/70">
                    Session memories will be uploaded soon. Stay tuned for updates!
                  </p>
                  <div className="flex items-center justify-center gap-2 pt-4">
                    <div className="h-2 w-2 animate-pulse rounded-full bg-primary" />
                    <span className="font-mono text-xs tracking-wider text-primary">
                      SYSTEM STANDBY
                    </span>
                  </div>
                </div>
              </GlowContainer>
            </div>
          </div>
        </section>
      )}

      {/* Info Section */}
      <section className="relative bg-panel py-16">
        <div className="crt-scanlines pointer-events-none absolute inset-0 opacity-[0.03]" />
        
        <div className="container relative mx-auto px-4 text-center">
          <div className="mx-auto max-w-2xl space-y-8">
            <h2 className="font-display text-3xl font-bold tracking-wider text-foreground lg:text-4xl">
              JOIN THE{" "}
              <span className="text-primary [text-shadow:0_0_30px_oklch(from_var(--primary)_l_c_h/0.6)]">
                COMMUNITY
              </span>
            </h2>

            <p className="font-mono text-sm text-foreground/70">
              Stay connected with Codebreakers for upcoming tech sessions,
              workshops, and learning opportunities. Follow us on our social
              platforms for announcements!
            </p>

            <StatusBar
              leftContent={
                <>
                  <span className="text-primary">EVENT: TECH SESSIONS</span>
                  <span className="text-foreground/60">|</span>
                  <span>STATUS: ACTIVE</span>
                </>
              }
              rightContent={<span>OPEN TO ALL</span>}
            />
          </div>
        </div>
      </section>
    </div>
  );
}