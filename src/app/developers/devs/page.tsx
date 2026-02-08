"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { Grid3D } from "@/components/thegridcn/grid";
import { coreMembers, coordinators } from "@/data/devData";
import { ExternalLink, Github, Linkedin, Instagram } from "lucide-react";

// Note: metadata export cannot be used in client components
// This metadata should be moved to layout.tsx or a server component wrapper

interface DeveloperCardProps {
image: string;
  title: string;
  subtitle: string;
  handle: string;
  borderColor: string;
  gradient: string;
  url: string;
}


function DeveloperCard({ image, title, subtitle, handle, borderColor, gradient, url }: DeveloperCardProps) {
  return (
    <Link
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="group block"
    >
      <div
        className="relative h-full overflow-hidden border border-primary/30 bg-panel transition-all duration-300 hover:border-primary/70 hover:shadow-[0_0_30px_var(--primary)]"
      >
        {/* CRT scanlines */}
        <div className="crt-scanlines pointer-events-none absolute inset-0 opacity-[0.03]" />
        
        {/* Corner accents */}
        <div className="absolute left-0 top-0 z-10 h-4 w-4 border-l-2 border-t-2 border-primary transition-all duration-300 group-hover:h-6 group-hover:w-6" />
        <div className="absolute right-0 top-0 z-10 h-4 w-4 border-r-2 border-t-2 border-primary transition-all duration-300 group-hover:h-6 group-hover:w-6" />
        <div className="absolute bottom-0 left-0 z-10 h-4 w-4 border-b-2 border-l-2 border-primary transition-all duration-300 group-hover:h-6 group-hover:w-6" />
        <div className="absolute bottom-0 right-0 z-10 h-4 w-4 border-b-2 border-r-2 border-primary transition-all duration-300 group-hover:h-6 group-hover:w-6" />

        {/* Glow effect on hover */}
        <div 
          className="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-10"
          style={{
            background: gradient,
          }}
        />

        {/* Image container */}
        <div className="relative aspect-square overflow-hidden">
          <div className="absolute inset-0 bg-linear-to-b from-transparent to-background/80 z-10" />
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover transition-all duration-500 group-hover:blur-sm"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          
          {/* Hover overlay with button */}
          <div className="absolute inset-0 z-20 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
            <div className="flex items-center gap-2 rounded border border-primary bg-primary/20 px-4 py-2 font-mono text-sm text-primary backdrop-blur-sm hover:bg-primary hover:text-primary-foreground transition-colors">
              VIEW PROFILE
              <ExternalLink className="h-4 w-4" />
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="relative p-6">
          <div className="space-y-3">
            <div>
              <h3 className="font-mono text-xl font-bold tracking-wider text-primary">
                {title}
              </h3>
              <p className="mt-1 font-mono text-sm text-foreground/70">
                {subtitle}
              </p>
            </div>

            <div className="flex items-center gap-2 border-t border-primary/20 pt-3">
              <div className="font-mono text-xs text-foreground/50">ID:</div>
              <div className="font-mono text-xs text-primary">{handle}</div>
            </div>

            {/* Social icons hint */}
            <div className="flex items-center gap-3 border-t border-primary/20 pt-3 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              {url.includes('github') && <Github className="h-4 w-4 text-foreground/50" />}
              {url.includes('linkedin') && <Linkedin className="h-4 w-4 text-foreground/50" />}
              {url.includes('instagram') && <Instagram className="h-4 w-4 text-foreground/50" />}
            </div>
          </div>
        </div>

        {/* Animated border on hover */}
        <div 
          className="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          style={{
            boxShadow: `inset 0 0 20px ${borderColor}40`,
          }}
        />
      </div>
    </Link>
  );
}

export default function DevelopersPage() {
  return (
    <div className="relative min-h-screen bg-background">
      {/* 3D Grid background */}
      <div className="pointer-events-none fixed inset-0 z-0">
        <Grid3D
          className="h-full w-full"
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
                OUR DEVELOPERS
              </h1>
            </div>
            
            <p className="mt-6 font-mono text-sm tracking-wider text-foreground/70 sm:text-base">
              MEET THE MINDS BEHIND THE CODE
            </p>

            {/* Stats bar */}
            <div className="mx-auto mt-8 flex max-w-2xl items-center justify-center gap-8 border border-primary/30 bg-panel/50 p-4 backdrop-blur-sm">
              <div className="text-center">
                <div className="font-mono text-2xl font-bold text-primary">{coreMembers.length}</div>
                <div className="font-mono text-xs text-foreground/50">CORE MEMBERS</div>
              </div>
              <div className="h-8 w-px bg-primary/30" />
              <div className="text-center">
                <div className="font-mono text-2xl font-bold text-primary">{coordinators.length}</div>
                <div className="font-mono text-xs text-foreground/50">COORDINATORS</div>
              </div>
              <div className="h-8 w-px bg-primary/30" />
              <div className="text-center">
                <div className="font-mono text-2xl font-bold text-primary">{coreMembers.length + coordinators.length}</div>
                <div className="font-mono text-xs text-foreground/50">TOTAL TEAM</div>
              </div>
            </div>
          </div>

          {/* Core Members Section */}
          <section className="mb-20">
            <div className="mb-8 flex items-center gap-4">
              <div className="h-px flex-1 bg-linear-to-r from-transparent to-primary/30" />
              <h2 className="font-mono text-2xl font-bold tracking-wider text-primary">
                CORE TEAM
              </h2>
              <div className="h-px flex-1 bg-linear-to-l from-transparent to-primary/30" />
            </div>

            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
              {coreMembers.map((member, index) => (
                <div
                  key={index}
                  className="animate-fade-in"
                  style={{
                    animationDelay: `${index * 0.1}s`,
                  }}
                >
                  <DeveloperCard {...member} />
                </div>
              ))}
            </div>
          </section>

          {/* Coordinators Section */}
          <section>
            <div className="mb-8 flex items-center gap-4">
              <div className="h-px flex-1 bg-linear-to-r from-transparent to-primary/30" />
              <h2 className="font-mono text-2xl font-bold tracking-wider text-primary">
                COORDINATORS
              </h2>
              <div className="h-px flex-1 bg-linear-to-l from-transparent to-primary/30" />
            </div>

            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
              {coordinators.map((member, index) => (
                <div
                  key={index}
                  className="animate-fade-in"
                  style={{
                    animationDelay: `${(coreMembers.length + index) * 0.1}s`,
                  }}
                >
                  <DeveloperCard {...member} />
                </div>
              ))}
            </div>
          </section>

          {/* Join CTA */}
          <section className="mt-20">
            <div className="relative overflow-hidden border border-primary/30 bg-panel p-8 text-center md:p-12">
              {/* CRT scanlines */}
              <div className="crt-scanlines pointer-events-none absolute inset-0 opacity-[0.03]" />
              
              {/* Corner accents */}
              <div className="absolute left-0 top-0 h-6 w-6 border-l-2 border-t-2 border-primary" />
              <div className="absolute right-0 top-0 h-6 w-6 border-r-2 border-t-2 border-primary" />
              <div className="absolute bottom-0 left-0 h-6 w-6 border-b-2 border-l-2 border-primary" />
              <div className="absolute bottom-0 right-0 h-6 w-6 border-b-2 border-r-2 border-primary" />

              <div className="relative">
                <h3 className="mb-4 font-mono text-2xl font-bold tracking-wider text-primary">
                  WANT TO JOIN OUR TEAM?
                </h3>
                <p className="mb-6 font-mono text-sm text-foreground/70">
                  We&apos;re always looking for talented developers to join CodeBreakers
                </p>
                <Link
                  href="https://app.codebreakersgcek.tech/login"
                  className="inline-flex items-center gap-2 rounded border-2 border-primary bg-primary/20 px-6 py-3 font-mono text-sm font-bold tracking-wider text-primary transition-all hover:bg-primary hover:text-primary-foreground hover:shadow-[0_0_20px_var(--primary)]"
                >
                  GET STARTED
                  <ExternalLink className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </section>
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in {
          animation: fade-in 0.6s ease-out forwards;
          opacity: 0;
        }
      `}</style>
    </div>
  );
}
