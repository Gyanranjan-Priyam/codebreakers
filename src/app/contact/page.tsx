import { Metadata } from 'next'
import { Mail, Phone, MapPin, Github, Instagram, Linkedin, Twitter } from "lucide-react";
import { FaDiscord } from "react-icons/fa";
import { Grid3D } from "@/components/thegridcn/grid";
import { generateSEO, generateWebPageSchema } from '@/lib/seo'

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

          {/* Contact Content Grid */}
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 lg:gap-8">
            {/* Left Side - Address & Map */}
            <div className="space-y-6">
              {/* Address Card */}
              <div className="group relative overflow-hidden border border-primary/30 bg-panel p-6 transition-all hover:border-primary/50">
                {/* CRT scanlines */}
                <div className="crt-scanlines pointer-events-none absolute inset-0 opacity-[0.03]" />
                
                {/* Corner accents */}
                <div className="absolute left-0 top-0 h-3 w-3 border-l-2 border-t-2 border-primary" />
                <div className="absolute right-0 top-0 h-3 w-3 border-r-2 border-t-2 border-primary" />
                <div className="absolute bottom-0 left-0 h-3 w-3 border-b-2 border-l-2 border-primary" />
                <div className="absolute bottom-0 right-0 h-3 w-3 border-b-2 border-r-2 border-primary" />

                {/* Glow effect on hover */}
                <div className="absolute inset-0 bg-primary/5 opacity-0 transition-opacity group-hover:opacity-100" />

                <div className="relative">
                  <div className="mb-4 flex items-center gap-2">
                    <MapPin className="h-5 w-5 text-primary" />
                    <h2 className="font-mono text-lg font-bold tracking-wider text-primary">
                      OUR LOCATION
                    </h2>
                  </div>
                  
                  <p className="mb-2 font-mono text-xs tracking-wider text-foreground/50">
                    VISIT US AT OUR CAMPUS
                  </p>

                  <div className="mt-4 space-y-1 font-mono text-sm text-foreground">
                    <p className="text-base font-semibold text-primary">
                      Government College of Engineering Kalahandi
                    </p>
                    <p>Bhawanipatna, Kalahandi</p>
                    <p>Odisha - 766002</p>
                    <p>India</p>
                  </div>
                </div>
              </div>

              {/* Google Map */}
              <div className="group relative overflow-hidden border border-primary/30 bg-panel transition-all hover:border-primary/50">
                {/* Corner accents */}
                <div className="absolute left-0 top-0 z-10 h-3 w-3 border-l-2 border-t-2 border-primary" />
                <div className="absolute right-0 top-0 z-10 h-3 w-3 border-r-2 border-t-2 border-primary" />
                <div className="absolute bottom-0 left-0 z-10 h-3 w-3 border-b-2 border-l-2 border-primary" />
                <div className="absolute bottom-0 right-0 z-10 h-3 w-3 border-b-2 border-r-2 border-primary" />

                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3751.237795724791!2d83.10372987527153!3d19.914381681470527!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a24ef3382020aa3%3A0x6720328dfbfd451a!2sGovernment%20College%20Of%20Engineering%2CKalahandi(Autonomous)!5e0!3m2!1sen!2sin!4v1764689440519!5m2!1sen!2sin"
                  width="100%"
                  height="300"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="h-75 sm:h-87.5 lg:h-100"
                />
              </div>
            </div>

            {/* Right Side - Contact Information */}
            <div className="space-y-6">
              {/* Email Card */}
              <div className="group relative overflow-hidden border border-primary/30 bg-panel p-6 transition-all hover:border-primary/50">
                {/* CRT scanlines */}
                <div className="crt-scanlines pointer-events-none absolute inset-0 opacity-[0.03]" />
                
                {/* Corner accents */}
                <div className="absolute left-0 top-0 h-3 w-3 border-l-2 border-t-2 border-primary" />
                <div className="absolute right-0 top-0 h-3 w-3 border-r-2 border-t-2 border-primary" />
                <div className="absolute bottom-0 left-0 h-3 w-3 border-b-2 border-l-2 border-primary" />
                <div className="absolute bottom-0 right-0 h-3 w-3 border-b-2 border-r-2 border-primary" />

                {/* Glow effect on hover */}
                <div className="absolute inset-0 bg-primary/5 opacity-0 transition-opacity group-hover:opacity-100" />

                <div className="relative">
                  <div className="mb-4 flex items-center gap-2">
                    <Mail className="h-5 w-5 text-primary" />
                    <h2 className="font-mono text-lg font-bold tracking-wider text-primary">
                      EMAIL US
                    </h2>
                  </div>
                  
                  <p className="mb-2 font-mono text-xs tracking-wider text-foreground/50">
                    SEND US AN EMAIL ANYTIME
                  </p>

                  <div className="mt-4 space-y-2">
                    <a 
                      href="mailto:codebreakers@gcekbpatna.ac.in" 
                      className="block font-mono text-sm text-primary transition-all hover:text-primary/80 hover:underline"
                    >
                      codebreakers@gcekbpatna.ac.in
                    </a>
                    <a 
                      href="mailto:info@codebreakers.in" 
                      className="block font-mono text-sm text-primary transition-all hover:text-primary/80 hover:underline"
                    >
                      info@codebreakers.in
                    </a>
                  </div>
                </div>
              </div>

              {/* Phone Card */}
              <div className="group relative overflow-hidden border border-primary/30 bg-panel p-6 transition-all hover:border-primary/50">
                {/* CRT scanlines */}
                <div className="crt-scanlines pointer-events-none absolute inset-0 opacity-[0.03]" />
                
                {/* Corner accents */}
                <div className="absolute left-0 top-0 h-3 w-3 border-l-2 border-t-2 border-primary" />
                <div className="absolute right-0 top-0 h-3 w-3 border-r-2 border-t-2 border-primary" />
                <div className="absolute bottom-0 left-0 h-3 w-3 border-b-2 border-l-2 border-primary" />
                <div className="absolute bottom-0 right-0 h-3 w-3 border-b-2 border-r-2 border-primary" />

                {/* Glow effect on hover */}
                <div className="absolute inset-0 bg-primary/5 opacity-0 transition-opacity group-hover:opacity-100" />

                <div className="relative">
                  <div className="mb-4 flex items-center gap-2">
                    <Phone className="h-5 w-5 text-primary" />
                    <h2 className="font-mono text-lg font-bold tracking-wider text-primary">
                      CALL US
                    </h2>
                  </div>
                  
                  <p className="mb-2 font-mono text-xs tracking-wider text-foreground/50">
                    AVAILABLE DURING COLLEGE HOURS
                  </p>

                  <div className="mt-4 space-y-4">
                    <div>
                      <p className="mb-1 font-mono text-xs tracking-wider text-foreground/50">
                        SECRETARY
                      </p>
                      <a 
                        href="tel:+911234567890" 
                        className="font-mono text-base text-primary transition-all hover:text-primary/80 hover:underline"
                      >
                        +91 12345 67890
                      </a>
                    </div>
                    
                    <div className="h-px bg-linear-to-r from-transparent via-primary/30 to-transparent" />
                    
                    <div>
                      <p className="mb-1 font-mono text-xs tracking-wider text-foreground/50">
                        ASSISTANT SECRETARY
                      </p>
                      <a 
                        href="tel:+911234567891" 
                        className="font-mono text-base text-primary transition-all hover:text-primary/80 hover:underline"
                      >
                        +91 12345 67891
                      </a>
                    </div>
                    
                    <div className="h-px bg-linear-to-r from-transparent via-primary/30 to-transparent" />
                    
                    <div>
                      <p className="mb-1 font-mono text-xs tracking-wider text-foreground/50">
                        TREASURER
                      </p>
                      <a 
                        href="tel:+911234567892" 
                        className="font-mono text-base text-primary transition-all hover:text-primary/80 hover:underline"
                      >
                        +91 12345 67892
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Social Media Card */}
              <div className="group relative overflow-hidden border border-primary/30 bg-panel p-6 transition-all hover:border-primary/50">
                {/* CRT scanlines */}
                <div className="crt-scanlines pointer-events-none absolute inset-0 opacity-[0.03]" />
                
                {/* Corner accents */}
                <div className="absolute left-0 top-0 h-3 w-3 border-l-2 border-t-2 border-primary" />
                <div className="absolute right-0 top-0 h-3 w-3 border-r-2 border-t-2 border-primary" />
                <div className="absolute bottom-0 left-0 h-3 w-3 border-b-2 border-l-2 border-primary" />
                <div className="absolute bottom-0 right-0 h-3 w-3 border-b-2 border-r-2 border-primary" />

                {/* Glow effect on hover */}
                <div className="absolute inset-0 bg-primary/5 opacity-0 transition-opacity group-hover:opacity-100" />

                <div className="relative">
                  <h2 className="mb-4 font-mono text-lg font-bold tracking-wider text-primary">
                    CONNECT WITH US
                  </h2>
                  
                  <p className="mb-4 font-mono text-xs tracking-wider text-foreground/50">
                    FOLLOW US ON SOCIAL MEDIA
                  </p>

                  <div className="flex flex-wrap gap-3">
                    <a 
                      href="https://discord.gg/codebreakersgcek" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="group/icon relative flex h-12 w-12 items-center justify-center border border-primary/30 bg-primary/5 transition-all hover:border-primary hover:bg-primary/20"
                    >
                      <FaDiscord className="h-5 w-5 text-primary transition-transform group-hover/icon:scale-110" />
                    </a>
                    <a 
                      href="https://github.com/codebreakersgcek" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="group/icon relative flex h-12 w-12 items-center justify-center border border-primary/30 bg-primary/5 transition-all hover:border-primary hover:bg-primary/20"
                    >
                      <Github className="h-5 w-5 text-primary transition-transform group-hover/icon:scale-110" />
                    </a>
                    <a 
                      href="https://instagram.com/codebreakersgcek" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="group/icon relative flex h-12 w-12 items-center justify-center border border-primary/30 bg-primary/5 transition-all hover:border-primary hover:bg-primary/20"
                    >
                      <Instagram className="h-5 w-5 text-primary transition-transform group-hover/icon:scale-110" />
                    </a>
                    <a 
                      href="https://linkedin.com/company/codebreakersgcek" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="group/icon relative flex h-12 w-12 items-center justify-center border border-primary/30 bg-primary/5 transition-all hover:border-primary hover:bg-primary/20"
                    >
                      <Linkedin className="h-5 w-5 text-primary transition-transform group-hover/icon:scale-110" />
                    </a>
                    <a 
                      href="https://twitter.com/codebreakersgcek" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="group/icon relative flex h-12 w-12 items-center justify-center border border-primary/30 bg-primary/5 transition-all hover:border-primary hover:bg-primary/20"
                    >
                      <Twitter className="h-5 w-5 text-primary transition-transform group-hover/icon:scale-110" />
                    </a>
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
