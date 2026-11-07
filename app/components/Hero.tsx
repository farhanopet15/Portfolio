"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight, Gauge, Zap, Flame, Terminal } from "lucide-react";
import TypewriterText from "./interactive/TypewriterText";
import MagneticButton from "./interactive/MagneticButton";
import TiltCard from "./interactive/TiltCard";

export default function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-[94vh] items-center justify-center pt-28 pb-16 overflow-hidden"
    >
      <div className="relative z-10 mx-auto flex max-w-6xl flex-col items-center gap-12 px-6 lg:flex-row lg:items-center lg:justify-between">
        
        {/* Left: Profile with Evo IX MR Racing Cockpit Vibe */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, x: -30 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative w-full max-w-sm sm:max-w-md"
        >
          {/* Top Floating Badge: Evo IX MR Heritage */}
          <motion.div
            animate={{ y: [-5, 5, -5] }}
            transition={{ repeat: Infinity, duration: 4.5, ease: "easeInOut" }}
            className="absolute -top-4 -left-3 z-20 flex items-center gap-2 rounded-xl border border-red-500/30 bg-black/70 px-3.5 py-1.5 backdrop-blur-xl shadow-[0_0_20px_rgba(239,68,68,0.3)]"
          >
            <Flame className="w-3.5 h-3.5 text-red-500 animate-pulse" />
            <span className="text-[10px] font-mono font-semibold text-slate-100 tracking-wider">
              EVO IX MR • 4G63 MIVEC
            </span>
          </motion.div>

          {/* Bottom Floating Badge: New Tech Stack */}
          <motion.div
            animate={{ y: [5, -5, 5] }}
            transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
            className="absolute -bottom-5 -right-3 z-20 flex items-center gap-2 rounded-xl border border-cyan-400/30 bg-black/70 px-3.5 py-1.5 backdrop-blur-xl shadow-[0_0_20px_rgba(34,211,238,0.3)]"
          >
            <Zap className="w-3.5 h-3.5 text-cyan-400" />
            <span className="text-[10px] font-mono font-semibold text-slate-100 tracking-wider">
              Python · Kong · Ruby · Go
            </span>
          </motion.div>

          {/* 3D Tilt Card containing Profile Image */}
          <TiltCard glowColor="rgba(239, 68, 68, 0.25)" className="p-2 border border-white/10 hover:border-red-500/50">
            <div className="relative overflow-hidden rounded-[26px] border border-white/10 bg-gradient-to-b from-white/10 via-black/40 to-black/95">
              <Image
                src="/profile.png"
                alt="Ahmad Farhan Walidain"
                width={550}
                height={750}
                priority
                className="w-full object-cover mix-blend-screen scale-[1.02] hover:scale-105 transition-transform duration-700"
              />
              {/* Dynamic Carbon gradient bottom vignette */}
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-transparent" />
            </div>
          </TiltCard>

          {/* Shift-Light Redline Pill */}
          <div className="absolute -bottom-3 left-6 z-20 flex items-center gap-2 rounded-full border border-red-500/40 bg-black/85 px-4 py-1 text-[9px] uppercase tracking-[0.2em] text-red-400 backdrop-blur-md shadow-[0_0_15px_rgba(239,68,68,0.3)] font-mono">
            <span className="h-1.5 w-1.5 rounded-full bg-red-500 animate-ping" />
            <span>8,500 RPM // JUNIOR FULL STACK DEV</span>
          </div>
        </motion.div>

        {/* Right: Telemetry Headline, Typewriter, & Magnetic CTAs */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, x: 30 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="flex max-w-xl flex-col items-center gap-6 text-center lg:items-start lg:text-left"
        >
          {/* Racing Shift Lights Bar + Company Status */}
          <div className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-black/50 px-4 py-1.5 text-[11px] backdrop-blur-md">
            {/* Shift lights: Green -> Amber -> Red (RPM Shift Indicator) */}
            <div className="flex items-center gap-1">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-[0_0_6px_rgba(52,211,153,0.8)]" />
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-[0_0_6px_rgba(52,211,153,0.8)]" />
              <span className="h-1.5 w-1.5 rounded-full bg-amber-400 shadow-[0_0_6px_rgba(251,191,36,0.8)]" />
              <span className="h-1.5 w-1.5 rounded-full bg-red-500 animate-pulse shadow-[0_0_8px_rgba(239,68,68,1)]" />
            </div>
            <span className="font-mono text-slate-300 text-[10px] tracking-wider uppercase">
              PT. Rasi Solution Mandiri
            </span>
          </div>

          <div className="space-y-3">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight">
              <span className="text-slate-100">Ahmad Farhan</span>{" "}
              <br />
              <span className="bg-gradient-to-r from-red-500 via-rose-400 to-cyan-400 bg-clip-text text-transparent">
                Walidain, S.H
              </span>
            </h1>

            {/* Dynamic Typewriter text */}
            <div className="flex items-center justify-center lg:justify-start">
              <TypewriterText />
            </div>
          </div>

          <p className="text-xs sm:text-sm text-slate-300 max-w-lg leading-relaxed">
            Where <span className="text-red-400 font-semibold font-mono">Automotive Precision Engineering</span> meets <span className="text-cyan-400 font-semibold font-mono">Modern Full-Stack Architecture</span>. Channeling the relentless boost, twin-scroll response, and zero-compromise tuning of the legendary <strong className="text-white">Lancer Evolution IX MR</strong> into lightning-fast, fault-tolerant web ecosystems.
          </p>

          {/* Magnetic CTA Buttons */}
          <div className="mt-2 flex flex-wrap items-center justify-center gap-4 lg:justify-start">
            <MagneticButton href="#projects">
              <div className="group relative flex items-center gap-2 rounded-full bg-gradient-to-r from-red-600 to-rose-500 px-6 py-3 text-xs font-semibold uppercase tracking-[0.16em] text-white shadow-[0_0_25px_rgba(239,68,68,0.5)] hover:from-red-500 hover:to-rose-400 transition-all">
                <Gauge className="w-4 h-4" />
                <span>Launch Telemetry</span>
                <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </div>
            </MagneticButton>

            <MagneticButton href="#contact">
              <div className="rounded-full border border-white/20 bg-black/50 px-6 py-3 text-xs font-semibold uppercase tracking-[0.14em] text-slate-200 backdrop-blur-md hover:border-red-500 hover:text-red-300 hover:shadow-[0_0_25px_rgba(239,68,68,0.25)] transition-all">
                Tune Transmission
              </div>
            </MagneticButton>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
