"use client"

import { useEffect, useRef, useState, useMemo } from "react"
import gsap from "gsap"

function generateGridPoints(cols: number, rows: number) {
  const points: { x: number; y: number }[] = []
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      points.push({
        x: (c / (cols - 1)) * 100,
        y: (r / (rows - 1)) * 100,
      })
    }
  }
  return points
}

export function TronSplashLoader() {
  // Single state: "pending" (SSR/pre-mount), "animating", "done"
  const [phase, setPhase] = useState<"pending" | "animating" | "done">("pending")
  const wrapperRef = useRef<HTMLDivElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const scanlineRef = useRef<HTMLDivElement>(null)
  const progressRef = useRef<HTMLDivElement>(null)
  const progressTextRef = useRef<HTMLSpanElement>(null)

  // Grid data
  const gridPoints = useMemo(() => generateGridPoints(12, 8), [])
  const horizontalLines = useMemo(() => Array.from({ length: 8 }, (_, i) => i), [])
  const verticalLines = useMemo(() => Array.from({ length: 12 }, (_, i) => i), [])

  // Particles — deterministic pseudo-random
  const particles = useMemo(() => {
    const seed = (n: number) => {
      const x = Math.sin(n * 127.1 + 311.7) * 43758.5453
      return x - Math.floor(x)
    }
    return Array.from({ length: 30 }, (_, i) => ({
      id: i,
      x: 50 + (seed(i) - 0.5) * 40,
      y: 50 + (seed(i + 100) - 0.5) * 30,
      size: seed(i + 200) * 4 + 1,
    }))
  }, [])

  // Single effect handles mount check + animation launch
  useEffect(() => {
    const rafIds: number[] = []

    // Already shown this session? Skip entirely.
    try {
      if (sessionStorage.getItem("cb-splash-shown") === "true") {
        // Defer state update to next frame to satisfy React compiler
        rafIds.push(requestAnimationFrame(() => setPhase("done")))
        return () => rafIds.forEach(cancelAnimationFrame)
      }
    } catch {}

    // If user prefers reduced motion, skip animation entirely
    try {
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        rafIds.push(requestAnimationFrame(() => {
          setPhase("done")
          try {
            sessionStorage.setItem("cb-splash-shown", "true")
          } catch {}
        }))
        return () => rafIds.forEach(cancelAnimationFrame)
      }
    } catch {}

    // Transition to animating phase after a frame to ensure DOM elements are painted
    rafIds.push(requestAnimationFrame(() => setPhase("animating")))

    return () => rafIds.forEach(cancelAnimationFrame)
  }, [])

  // Run GSAP animation when phase transitions to "animating"
  useEffect(() => {
    if (phase !== "animating" || !containerRef.current) return

    // Use gsap.context for proper scoping and cleanup
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        onComplete: () => {
          // Slide the entire wrapper up from bottom to top, then unmount
          gsap.to(wrapperRef.current, {
            yPercent: -100,
            duration: 0.8,
            ease: "power3.inOut",
            onComplete: () => {
              setPhase("done")
              try {
                sessionStorage.setItem("cb-splash-shown", "true")
              } catch {}
            },
          })
        },
      })

      // ===== Phase 0: Initial setup =====
      tl.set("[data-splash-grid]", { strokeDashoffset: 1000, opacity: 0 })
      tl.set("[data-splash-ring]", { strokeDashoffset: 600, opacity: 0 })
      tl.set("[data-splash-char]", { opacity: 0, y: 20 })
      tl.set("[data-splash-particle]", { scale: 0, opacity: 0 })

      // ===== Phase 1: Grid lines draw in (0 – 0.8s) =====
      tl.to(
        "[data-splash-grid]",
        {
          strokeDashoffset: 0,
          opacity: 0.3,
          duration: 0.8,
          stagger: { each: 0.03, from: "center" },
          ease: "power2.out",
        },
        0
      )

      // ===== Phase 2: Identity disc forms (0.3 – 1.5s) =====
      tl.to(
        "[data-splash-ring]",
        {
          strokeDashoffset: 0,
          opacity: 1,
          duration: 1,
          stagger: 0.15,
          ease: "power3.out",
        },
        0.3
      )

      // Disc glow
      tl.to(
        "[data-splash-glow]",
        { opacity: 0.8, scale: 1.1, duration: 0.6, ease: "power2.out" },
        1.0
      )
      tl.to(
        "[data-splash-glow]",
        { opacity: 0.4, scale: 1, duration: 0.4, ease: "power2.in" },
        1.6
      )

      // Disc rotations — run as standalone tweens (not on the timeline)
      // because repeat:-1 would prevent the timeline from ever completing
      gsap.to("[data-splash-outer]", {
        rotation: 360,
        duration: 6,
        ease: "none",
        repeat: -1,
        transformOrigin: "center center",
        delay: 0.5,
      })
      gsap.to("[data-splash-inner]", {
        rotation: -360,
        duration: 4,
        ease: "none",
        repeat: -1,
        transformOrigin: "center center",
        delay: 0.5,
      })

      // ===== Phase 3: Title types in (1.2 – 2.2s) =====
      tl.to(
        "[data-splash-char]",
        { opacity: 1, y: 0, duration: 0.05, stagger: 0.04, ease: "power2.out" },
        1.2
      )
      tl.to(
        "[data-splash-subtitle]",
        { opacity: 1, y: 0, duration: 0.5, ease: "power2.out" },
        1.8
      )

      // ===== Phase 4: Progress bar (1.5 – 3.8s) =====
      tl.to(
        progressRef.current,
        { width: "100%", duration: 2.3, ease: "power1.inOut" },
        1.5
      )

      const counter = { value: 0 }
      tl.to(
        counter,
        {
          value: 100,
          duration: 2.3,
          ease: "power1.inOut",
          onUpdate: () => {
            if (progressTextRef.current) {
              progressTextRef.current.textContent = `${Math.round(counter.value)}%`
            }
          },
        },
        1.5
      )

      // ===== Phase 6: Particles (2.5s) =====
      tl.to(
        "[data-splash-particle]",
        { scale: 1, opacity: 0.8, duration: 0.4, stagger: { each: 0.02, from: "random" }, ease: "back.out(2)" },
        2.5
      )
      tl.to(
        "[data-splash-particle]",
        { y: "random(-200, 200)", x: "random(-200, 200)", opacity: 0, scale: 0, duration: 1.2, stagger: { each: 0.02, from: "random" }, ease: "power2.in" },
        3.0
      )

      // ===== Phase 7: Scanline sweep (3.2s) =====
      tl.fromTo(
        scanlineRef.current,
        { top: "0%", opacity: 0.8 },
        { top: "100%", opacity: 0, duration: 0.6, ease: "power2.in" },
        3.2
      )

      // ===== Phase 8: Flash + collapse (3.8 – 4.5s) =====
      tl.to("[data-splash-flash]", { opacity: 1, duration: 0.1, ease: "power4.in" }, 3.8)
      tl.to("[data-splash-flash]", { opacity: 0, duration: 0.3, ease: "power4.out" }, 3.9)
      tl.to(containerRef.current, { scale: 1.05, duration: 0.5, ease: "power3.in" }, 4.0)
    }, wrapperRef) // scope all GSAP selectors to wrapperRef

    return () => {
      ctx.revert() // kills all GSAP tweens/timelines within context
    }
  }, [phase])

  // Don't render anything after animation completes or was already shown
  if (phase === "done") return null

  // Server render + pending (before mount): render a dark overlay to prevent flash of content
  if (phase === "pending") {
    return (
      <div
        style={{
          position: "fixed",
          inset: 0,
          zIndex: 9999,
          background: "oklch(0.04 0.02 250)",
        }}
      />
    )
  }

  return (
    <div
      ref={wrapperRef}
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 9999,
        background: "oklch(0.04 0.02 250)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
      }}
    >
      <div ref={containerRef} className="relative flex h-full w-full flex-col items-center justify-center">
        {/* ===== Background Grid ===== */}
        <svg
          className="pointer-events-none absolute inset-0 h-full w-full"
          preserveAspectRatio="none"
          viewBox="0 0 100 100"
        >
          {horizontalLines.map((i) => (
            <line
              key={`h-${i}`}
              data-splash-grid=""
              x1="0"
              y1={`${(i / (horizontalLines.length - 1)) * 100}`}
              x2="100"
              y2={`${(i / (horizontalLines.length - 1)) * 100}`}
              stroke="var(--glow, #00e5ff)"
              strokeWidth="0.1"
              strokeDasharray="1000"
              strokeDashoffset="1000"
            />
          ))}
          {verticalLines.map((i) => (
            <line
              key={`v-${i}`}
              data-splash-grid=""
              x1={`${(i / (verticalLines.length - 1)) * 100}`}
              y1="0"
              x2={`${(i / (verticalLines.length - 1)) * 100}`}
              y2="100"
              stroke="var(--glow, #00e5ff)"
              strokeWidth="0.1"
              strokeDasharray="1000"
              strokeDashoffset="1000"
            />
          ))}
          {gridPoints.map((p, i) => (
            <circle
              key={`gp-${i}`}
              data-splash-grid=""
              cx={p.x}
              cy={p.y}
              r="0.3"
              fill="var(--glow, #00e5ff)"
              opacity="0"
            />
          ))}
        </svg>

        {/* ===== CRT Scanlines ===== */}
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            backgroundImage: "repeating-linear-gradient(0deg, rgba(0,0,0,0.15) 0px, rgba(0,0,0,0.15) 1px, transparent 1px, transparent 3px)",
            zIndex: 50,
          }}
        />

        {/* ===== Vignette ===== */}
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background: "radial-gradient(ellipse at center, transparent 40%, rgba(0,0,0,0.7) 100%)",
            zIndex: 45,
          }}
        />

        {/* ===== Identity Disc ===== */}
        <svg className="relative z-10 mb-4 h-28 w-28 xs:h-36 xs:w-36 sm:mb-6 sm:h-48 sm:w-48 md:h-56 md:w-56 lg:h-60 lg:w-60" viewBox="0 0 200 200">
          <defs>
            <filter id="splash-glow">
              <feGaussianBlur stdDeviation="4" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
            <filter id="splash-glow-strong">
              <feGaussianBlur stdDeviation="8" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          {/* Outer glow */}
          <circle
            data-splash-glow=""
            cx="100" cy="100" r="90"
            fill="none" stroke="var(--glow, #00e5ff)" strokeWidth="0.5"
            opacity="0" filter="url(#splash-glow-strong)"
          />

          {/* Outer ring group */}
          <g data-splash-outer="" filter="url(#splash-glow)">
            <circle
              data-splash-ring="" cx="100" cy="100" r="88"
              fill="none" stroke="var(--glow, #00e5ff)" strokeWidth="2"
              strokeDasharray="600" strokeDashoffset="600"
            />
            <circle
              data-splash-ring="" cx="100" cy="100" r="82"
              fill="none" stroke="var(--glow, #00e5ff)" strokeWidth="0.5"
              strokeDasharray="600" strokeDashoffset="600" opacity="0.6"
            />
            {Array.from({ length: 36 }, (_, i) => {
              const angle = (i * 10 * Math.PI) / 180
              const x1 = 100 + Math.cos(angle) * 84
              const y1 = 100 + Math.sin(angle) * 84
              const x2 = 100 + Math.cos(angle) * (i % 3 === 0 ? 78 : 81)
              const y2 = 100 + Math.sin(angle) * (i % 3 === 0 ? 78 : 81)
              return (
                <line
                  key={`tick-${i}`}
                  data-splash-ring=""
                  x1={x1} y1={y1} x2={x2} y2={y2}
                  stroke="var(--glow, #00e5ff)"
                  strokeWidth={i % 3 === 0 ? "1.5" : "0.5"}
                  opacity="0" strokeDasharray="600" strokeDashoffset="600"
                />
              )
            })}
          </g>

          {/* Inner ring group */}
          <g data-splash-inner="" filter="url(#splash-glow)">
            <circle
              data-splash-ring="" cx="100" cy="100" r="65"
              fill="none" stroke="var(--glow, #00e5ff)" strokeWidth="1.5"
              strokeDasharray="600" strokeDashoffset="600"
            />
            <circle
              data-splash-ring="" cx="100" cy="100" r="60"
              fill="none" stroke="var(--glow, #00e5ff)" strokeWidth="0.5"
              strokeDasharray="600" strokeDashoffset="600" opacity="0.4"
            />
            {[0, 90, 180, 270].map((a) => (
              <path
                key={`arc-${a}`}
                data-splash-ring=""
                d={`M ${100 + Math.cos((a * Math.PI) / 180) * 55} ${100 + Math.sin((a * Math.PI) / 180) * 55} A 55 55 0 0 1 ${100 + Math.cos(((a + 60) * Math.PI) / 180) * 55} ${100 + Math.sin(((a + 60) * Math.PI) / 180) * 55}`}
                fill="none" stroke="var(--glow, #00e5ff)" strokeWidth="2"
                strokeDasharray="600" strokeDashoffset="600" opacity="0.8"
              />
            ))}
          </g>

          {/* Inner core */}
          <circle
            data-splash-ring="" cx="100" cy="100" r="35"
            fill="none" stroke="var(--glow, #00e5ff)" strokeWidth="1"
            strokeDasharray="600" strokeDashoffset="600"
            filter="url(#splash-glow)"
          />
          {/* Center dot */}
          <circle
            data-splash-ring="" cx="100" cy="100" r="4"
            fill="var(--glow, #00e5ff)" opacity="0"
            filter="url(#splash-glow-strong)"
          />
          {/* CB text */}
          <image
            data-splash-ring=""
            href="/assets/logo.png"
            x="65" y="65" width="70" height="70"
            opacity="0" filter="url(#splash-glow)"
          />
        </svg>

        {/* ===== Title ===== */}
        <div className="relative z-10 px-4 text-center sm:px-6">
          <h1
            aria-label="CODEBREAKERS"
            className="font-display text-xl font-black tracking-[0.15em] xs:text-2xl xs:tracking-[0.2em] sm:text-3xl sm:tracking-[0.25em] md:text-4xl lg:text-5xl lg:tracking-[0.3em]"
            style={{
              color: "var(--glow, #00e5ff)",
              textShadow: "0 0 20px var(--glow, #00e5ff), 0 0 40px color-mix(in oklch, var(--glow, #00e5ff) 50%, transparent), 0 0 80px color-mix(in oklch, var(--glow, #00e5ff) 25%, transparent)",
            }}
          >
            {"CODEBREAKERS".split("").map((char, i) => (
              <span key={i} data-splash-char="" aria-hidden="true" className="inline-block" style={{ opacity: 0 }}>
                {char}
              </span>
            ))}
          </h1>
          <p
            data-splash-subtitle=""
            className="mt-2 font-mono text-[8px] leading-relaxed tracking-[0.15em] xs:text-[9px] xs:tracking-[0.25em] sm:mt-3 sm:text-xs sm:tracking-[0.35em] md:text-sm md:tracking-[0.5em]"
            style={{
              color: "color-mix(in oklch, var(--glow, #00e5ff) 70%, white)",
              opacity: 0,
              transform: "translateY(10px)",
            }}
          >
            GOVERNMENT COLLEGE OF ENGINEERING KALAHANDI
          </p>
        </div>

        {/* ===== Progress Bar ===== */}
        <div className="relative z-10 mt-4 w-full max-w-xs px-6 sm:mt-6 sm:max-w-sm sm:px-4 md:mt-8 md:max-w-md">
          <div className="mb-1.5 flex items-center justify-between font-mono text-[8px] tracking-wider sm:mb-2 sm:text-[10px] sm:tracking-widest">
            <span style={{ color: "color-mix(in oklch, var(--glow, #00e5ff) 60%, transparent)" }}>
              SYSTEM INITIALIZATION
            </span>
            <span ref={progressTextRef} style={{ color: "var(--glow, #00e5ff)" }}>
              0%
            </span>
          </div>
          <div
            className="relative h-0.5 w-full overflow-hidden"
            style={{ background: "color-mix(in oklch, var(--glow, #00e5ff) 15%, transparent)" }}
          >
            <div
              ref={progressRef}
              className="absolute left-0 top-0 h-full"
              style={{
                width: "0%",
                background: "linear-gradient(90deg, transparent, var(--glow, #00e5ff))",
                boxShadow: "0 0 10px var(--glow, #00e5ff), 0 0 20px color-mix(in oklch, var(--glow, #00e5ff) 50%, transparent)",
              }}
            />
          </div>
          <div className="pointer-events-none absolute -left-1 -top-1 h-3 w-3 border-l border-t" style={{ borderColor: "var(--glow, #00e5ff)" }} />
          <div className="pointer-events-none absolute -right-1 -top-1 h-3 w-3 border-r border-t" style={{ borderColor: "var(--glow, #00e5ff)" }} />
          <div className="pointer-events-none absolute -bottom-1 -left-1 h-3 w-3 border-b border-l" style={{ borderColor: "var(--glow, #00e5ff)" }} />
          <div className="pointer-events-none absolute -bottom-1 -right-1 h-3 w-3 border-b border-r" style={{ borderColor: "var(--glow, #00e5ff)" }} />
        </div>

        {/* ===== Particles ===== */}
        <div className="pointer-events-none absolute inset-0" style={{ zIndex: 5 }}>
          {particles.map((p) => (
            <div
              key={p.id}
              data-splash-particle=""
              className="absolute rounded-full"
              style={{
                left: `${p.x}%`,
                top: `${p.y}%`,
                width: `${p.size}px`,
                height: `${p.size}px`,
                background: "var(--glow, #00e5ff)",
                boxShadow: `0 0 ${p.size * 3}px var(--glow, #00e5ff)`,
                transform: "scale(0)",
                opacity: 0,
              }}
            />
          ))}
        </div>

        {/* ===== Scanline ===== */}
        <div
          ref={scanlineRef}
          className="pointer-events-none absolute left-0 h-0.5 w-full"
          style={{
            zIndex: 40,
            top: "0%",
            opacity: 0,
            background: "linear-gradient(90deg, transparent, var(--glow, #00e5ff), transparent)",
            boxShadow: "0 0 20px var(--glow, #00e5ff), 0 0 40px color-mix(in oklch, var(--glow, #00e5ff) 40%, transparent)",
          }}
        />

        {/* ===== Flash ===== */}
        <div
          data-splash-flash=""
          className="pointer-events-none absolute inset-0"
          style={{
            zIndex: 50,
            background: "var(--glow, #00e5ff)",
            opacity: 0,
            mixBlendMode: "screen",
          }}
        />

        {/* ===== Bottom HUD ===== */}
        <div className="absolute bottom-3 left-0 right-0 z-10 flex items-center justify-center gap-2 px-4 font-mono text-[6px] tracking-[0.2em] xs:gap-3 xs:text-[7px] sm:bottom-6 sm:gap-6 sm:text-[10px] sm:tracking-[0.4em]">
          <span style={{ color: "color-mix(in oklch, var(--glow, #00e5ff) 40%, transparent)" }}>SECTOR 7G</span>
          <span className="h-0.5 w-0.5 rounded-full sm:h-1 sm:w-1" style={{ background: "var(--glow, #00e5ff)", boxShadow: "0 0 6px var(--glow, #00e5ff)" }} />
          <span style={{ color: "color-mix(in oklch, var(--glow, #00e5ff) 40%, transparent)" }}>GRID ONLINE</span>
          <span className="h-0.5 w-0.5 rounded-full sm:h-1 sm:w-1" style={{ background: "var(--glow, #00e5ff)", boxShadow: "0 0 6px var(--glow, #00e5ff)" }} />
          <span style={{ color: "color-mix(in oklch, var(--glow, #00e5ff) 40%, transparent)" }}>v2.0.26</span>
        </div>

        {/* ===== HUD Corners ===== */}
        <div className="pointer-events-none absolute left-2 top-2 z-10 h-5 w-5 border-l border-t xs:left-3 xs:top-3 xs:h-6 xs:w-6 sm:left-6 sm:top-6 sm:h-12 sm:w-12 sm:border-l-2 sm:border-t-2" style={{ borderColor: "color-mix(in oklch, var(--glow, #00e5ff) 40%, transparent)" }} />
        <div className="pointer-events-none absolute right-2 top-2 z-10 h-5 w-5 border-r border-t xs:right-3 xs:top-3 xs:h-6 xs:w-6 sm:right-6 sm:top-6 sm:h-12 sm:w-12 sm:border-r-2 sm:border-t-2" style={{ borderColor: "color-mix(in oklch, var(--glow, #00e5ff) 40%, transparent)" }} />
        <div className="pointer-events-none absolute bottom-2 left-2 z-10 h-5 w-5 border-b border-l xs:bottom-3 xs:left-3 xs:h-6 xs:w-6 sm:bottom-6 sm:left-6 sm:h-12 sm:w-12 sm:border-b-2 sm:border-l-2" style={{ borderColor: "color-mix(in oklch, var(--glow, #00e5ff) 40%, transparent)" }} />
        <div className="pointer-events-none absolute bottom-2 right-2 z-10 h-5 w-5 border-b border-r xs:bottom-3 xs:right-3 xs:h-6 xs:w-6 sm:bottom-6 sm:right-6 sm:h-12 sm:w-12 sm:border-b-2 sm:border-r-2" style={{ borderColor: "color-mix(in oklch, var(--glow, #00e5ff) 40%, transparent)" }} />
      </div>
    </div>
  )
}
