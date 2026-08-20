import { Metadata } from "next";
import Link from "next/link";
import { Grid3D } from "@/components/thegridcn/grid";
import { generateSEO } from "@/lib/seo";
import {
  FileText,
  ClipboardCheck,
  LayoutDashboard,
  ArrowRight,
  ExternalLink,
  Sparkles,
} from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

export const metadata: Metadata = generateSEO({
  title: "How To Join",
  description: "Official step-by-step guide to joining CodeBreakers GCEK. Information on registration, screening test, reference numbers & student dashboard access.",
  url: "/how-to-join",
  keywords: [
    "join CodeBreakers",
    "how to join CodeBreakers GCEK",
    "CodeBreakers registration process",
    "CodeBreakers screening test",
    "CodeBreakers student dashboard",
    "GCEK coding club admission",
  ],
});

const steps = [
  {
    stepNumber: "01",
    title: "ONLINE REGISTRATION",
    badge: "ACTION REQUIRED",
    description:
      "Register yourself using the official Registration Form. Provide accurate academic and contact details.",
    details: [
      "Complete all fields in the registration form before the deadline.",
      "Upon successful verification of your submitted details, a unique Reference Number will be sent to your registered email address.",
      "Keep your Reference Number saved for all future verification and screening steps.",
    ],
    actionText: "FILL REGISTRATION FORM",
    actionUrl: "https://app.codebreakersgcek.tech/forms/CB-FRM-200711",
    icon: FileText,
    accentColor: "border-primary/40 text-primary",
  },
  {
    stepNumber: "02",
    title: "SCREENING TEST & SELECTION",
    badge: "ASSESSMENT",
    description:
      "After the registration window closes, a screening test will be conducted for all registered applicants.",
    details: [
      "The screening test evaluates basic problem-solving, logic, and coding fundamentals.",
      "Top 50 students will be selected in the initial cohort.",
      "Seat capacity will be dynamically increased if total applicant participation increases.",
    ],
    icon: ClipboardCheck,
    accentColor: "border-primary/40 text-primary",
  },
  {
    stepNumber: "03",
    title: "STUDENT DASHBOARD ACCESS",
    badge: "ONBOARDING",
    description:
      "Selected students receive official access to the Codebreakers Student Platform & Member Dashboard.",
    details: [
      "Access personal tasks, domain roadmaps (Web Dev, App Dev, AI/ML, CP), and learning resources.",
      "Track your task progress, submit code reviews, and earn achievement badges.",
      "Collaborate directly with senior mentors and domain leads.",
    ],
    actionText: "ACCESS DASHBOARD",
    actionUrl: "https://app.codebreakersgcek.tech/login",
    icon: LayoutDashboard,
    accentColor: "border-primary/40 text-primary",
  },
  {
    stepNumber: "04",
    title: "STAY CONNECTED (WHATSAPP GROUP)",
    badge: "CRITICAL",
    description:
      "All updates, screening schedules, test guidelines, and results will be announced exclusively in the WhatsApp Group.",
    details: [
      "Join the official freshers WhatsApp Group immediately after registering.",
      "Never miss important schedule notices or live Q&A announcements.",
      "Interact with fellow freshers and club executives.",
    ],
    actionText: "JOIN WHATSAPP GROUP",
    actionUrl: "https://chat.whatsapp.com/E1Wq4g4qElyIxIfYDhVqri",
    icon: FaWhatsapp,
    accentColor: "border-green-500/40 text-green-400",
  },
];

export default function HowToJoinPage() {
  return (
    <div className="relative min-h-screen bg-background text-foreground">
      {/* 3D Grid background */}
      <div className="pointer-events-none fixed inset-0 z-0">
        <Grid3D
          className="h-full w-full"
          enableParticles={true}
          enableBeams={true}
          cameraAnimation={true}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/30 via-background/60 to-background" />
      </div>

      {/* CRT scanlines overlay */}
      <div className="crt-scanlines pointer-events-none fixed inset-0 z-10 opacity-[0.03]" />

      <div className="relative z-20 px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        <div className="mx-auto max-w-5xl">
          {/* Header Banner */}
          <div className="mb-14 text-center">


            {/* Title Frame */}
            <div className="relative inline-block">
              <div className="absolute -inset-4 border border-primary/30">
                <div className="absolute left-0 top-0 h-2 w-2 border-l-2 border-t-2 border-primary" />
                <div className="absolute right-0 top-0 h-2 w-2 border-r-2 border-t-2 border-primary" />
                <div className="absolute bottom-0 left-0 h-2 w-2 border-b-2 border-l-2 border-primary" />
                <div className="absolute bottom-0 right-0 h-2 w-2 border-b-2 border-r-2 border-primary" />
              </div>
              <h1 className="relative px-6 py-3 font-mono text-3xl font-bold tracking-wider text-primary sm:text-5xl">
                HOW TO JOIN
              </h1>
            </div>

            <p className="mt-6 font-mono text-xs tracking-widest text-foreground/70 sm:text-sm">
              STEP-BY-STEP ADMISSION & RECRUITMENT PROCESS &bull; CODEBREAKERS GCEK
            </p>
          </div>

          {/* Steps Timeline Grid */}
          <div className="space-y-6">
            {steps.map((step) => {
              const IconComp = step.icon;
              return (
                <div
                  key={step.stepNumber}
                  className="relative overflow-hidden border border-primary/30 bg-panel/90 p-6 backdrop-blur-md transition-all duration-300 hover:border-primary sm:p-8"
                >
                  {/* Corner Accent Boxes */}
                  <div className="absolute left-0 top-0 h-3 w-3 border-l-2 border-t-2 border-primary" />
                  <div className="absolute right-0 top-0 h-3 w-3 border-r-2 border-t-2 border-primary" />
                  <div className="absolute bottom-0 left-0 h-3 w-3 border-b-2 border-l-2 border-primary" />
                  <div className="absolute bottom-0 right-0 h-3 w-3 border-b-2 border-r-2 border-primary" />

                  <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
                    {/* Left: Step Badge & Title */}
                    <div className="flex items-start gap-4">
                      {/* Step Number Badge */}
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center border border-primary/40 bg-primary/10 font-mono text-lg font-bold text-primary">
                        {step.stepNumber}
                      </div>

                      <div>
                        <div className="flex flex-wrap items-center gap-2">
                          <h2 className="font-mono text-lg font-bold tracking-wide text-foreground sm:text-xl">
                            {step.title}
                          </h2>
                          <span className="border border-primary/30 bg-primary/10 px-2 py-0.5 font-mono text-[10px] text-primary">
                            {step.badge}
                          </span>
                        </div>
                        <p className="mt-1 font-mono text-xs text-foreground/80 leading-relaxed sm:text-sm">
                          {step.description}
                        </p>
                      </div>
                    </div>

                    {/* Right: Direct Action Button (If any) */}
                    {step.actionUrl && (
                      <div className="shrink-0 pt-2 md:pt-0">
                        <a
                          href={step.actionUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 border border-primary/40 bg-primary/10 px-4 py-2 font-mono text-xs text-primary transition-all hover:bg-primary hover:text-primary-foreground"
                        >
                          <span>{step.actionText}</span>
                          <ExternalLink className="h-3.5 w-3.5" />
                        </a>
                      </div>
                    )}
                  </div>

                  {/* Bullet Details */}
                  <div className="mt-6 border-t border-primary/20 pt-4">
                    <ul className="space-y-2 font-mono text-xs text-foreground/75">
                      {step.details.map((detail, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <span className="text-primary mt-0.5">▸</span>
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Quick Action Banner */}
          <div className="mt-12 border border-primary/40 bg-panel/90 p-8 text-center backdrop-blur-md">
            <h3 className="font-mono text-lg font-bold text-primary tracking-wide">
              HAVE QUESTIONS OR NEED ASSISTANCE?
            </h3>
            <p className="mt-2 font-mono text-xs text-foreground/70 sm:text-sm">
              Reach out to our team or follow our official social channels for live updates.
            </p>

            <div className="mt-6 flex flex-wrap justify-center gap-4">
              <a
                href="https://chat.whatsapp.com/E1Wq4g4qElyIxIfYDhVqri"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 border border-green-500/40 bg-green-500/10 px-5 py-2.5 font-mono text-xs text-green-400 transition-all hover:bg-green-500 hover:text-white"
              >
                <FaWhatsapp className="h-4 w-4" />
                <span>JOIN WHATSAPP GROUP</span>
              </a>

              <a
                href="https://app.codebreakersgcek.tech/forms/CB-FRM-200711"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 border border-primary/40 bg-primary/20 px-5 py-2.5 font-mono text-xs text-primary transition-all hover:bg-primary hover:text-primary-foreground"
              >
                <FileText className="h-4 w-4" />
                <span>OPEN REGISTRATION FORM</span>
              </a>

              <Link
                href="/contact"
                className="inline-flex items-center gap-2 border border-primary/30 bg-panel px-5 py-2.5 font-mono text-xs text-foreground transition-all hover:border-primary hover:text-primary"
              >
                <span>CONTACT US</span>
                <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
