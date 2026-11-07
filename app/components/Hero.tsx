"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight, Terminal, Shield, Binary } from "lucide-react";
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
        
        {/* Left: Cyber Operative Avatar with HUD Frame */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, x: -30 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative w-full max-w-sm sm:max-w-md"
        >
          {/* Top Floating Cyber Tag */}
          <motion.div
            animate={{ y: [-5, 5, -5] }}
            transition={{ repeat: Infinity, duration: 4.5, ease: "easeInOut" }}
            className="absolute -top-4 -left-3 z-20 flex items-center gap-2 rounded-lg border border-emerald-500/40 bg-black/80 px-3.5 py-1.5 backdrop-blur-xl shadow-[0_0_20px_rgba(16,185,129,0.3)] font-mono"
          >
            <Shield className="w-3.5 h-3.5 text-emerald-400 animate-pulse" />
            <span className="text-[10px] font-semibold text-emerald-300 tracking-wider">
              [SYS_OPERATIVE: AFW-01]
            </span>
          </motion.div>

          {/* Top-Right Floating Stack Tag */}
          <motion.div
            animate={{ y: [5, -5, 5] }}
            transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
            className="absolute -top-4 -right-3 z-20 flex items-center gap-2 rounded-lg border border-cyan-400/40 bg-black/80 px-3.5 py-1.5 backdrop-blur-xl shadow-[0_0_20px_rgba(6,182,212,0.3)] font-mono"
          >
            <Binary className="w-3.5 h-3.5 text-cyan-400" />
            <span className="text-[10px] font-semibold text-cyan-300 tracking-wider">
              Python · Kong · Ruby · Go
            </span>
          </motion.div>

          {/* 3D Tilt Card containing Masked Hacker Avatar */}
          <TiltCard glowColor="rgba(16, 185, 129, 0.25)" className="p-2 border border-emerald-500/30 hover:border-emerald-400/70">
            <div className="relative overflow-hidden rounded-xl border border-emerald-500/20 bg-gradient-to-b from-emerald-950/20 via-black/60 to-black/95">
              {/* Scanline Effect Overlay */}
              <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(16,185,129,0.04)_1px,transparent_1px)] bg-[size:100%_4px] z-10" />

              <Image
                src="/profile.png"
                alt="Ahmad Farhan Walidain // Cyber Operative"
                width={550}
                height={750}
                priority
                className="w-full object-cover mix-blend-screen scale-[1.02] hover:scale-105 transition-transform duration-700"
              />

              {/* Bottom Cyber Vignette */}
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent z-10" />
            </div>
          </TiltCard>

          {/* Status Root Badge Centered at Bottom */}
          <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 z-20 whitespace-nowrap flex items-center gap-2 rounded-full border border-emerald-400/50 bg-black/95 px-4 py-1.5 text-[9px] uppercase tracking-[0.2em] text-emerald-400 backdrop-blur-md shadow-[0_0_15px_rgba(16,185,129,0.35)] font-mono">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-ping" />
            <span>[ACCESS: ROOT] // JR. FULL STACK DEV</span>
          </div>
        </motion.div>

        {/* Right: Terminal Headline, Typewriter, & Interactive Buttons */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, x: 30 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="flex max-w-xl flex-col items-center gap-6 text-center lg:items-start lg:text-left"
        >
          {/* Terminal Protocol Badge */}
          <div className="inline-flex items-center gap-2.5 rounded-md border border-emerald-500/30 bg-black/70 px-3.5 py-1.5 text-[11px] font-mono text-emerald-400 backdrop-blur-md">
            <Terminal className="w-3.5 h-3.5 text-emerald-400" />
            <span className="text-[10px] text-emerald-300">TARGET:</span>
            <span className="text-[10px] text-slate-300">PT. Rasi Solution Mandiri (2026—Present)</span>
          </div>

          <div className="space-y-3">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight font-mono">
              <span className="text-slate-100">Ahmad Farhan</span>{" "}
              <br />
              <span className="bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400 bg-clip-text text-transparent">
                Walidain, S.H
              </span>
            </h1>

            {/* Dynamic Hacker Typewriter Prompt */}
            <div className="flex items-center justify-center lg:justify-start">
              <TypewriterText />
            </div>
          </div>

          <p className="text-xs sm:text-sm text-slate-300 max-w-lg leading-relaxed font-mono">
            Full-stack engineer crafting high-throughput, encrypted digital architectures. Specializing in bulletproof APIs via <span className="text-emerald-400">Kong Gateway</span>, distributed microservices in <span className="text-cyan-400">Python</span>, <span className="text-rose-400">Ruby</span> & <span className="text-sky-400">Golang</span>, and ultra-fast frontend ecosystems with <span className="text-emerald-300">Next.js 16</span>.
          </p>

          {/* Terminal Styled Magnetic Buttons */}
          <div className="mt-2 flex flex-wrap items-center justify-center gap-4 lg:justify-start font-mono">
            <MagneticButton href="#projects">
              <div className="group relative flex items-center gap-2 rounded-lg bg-emerald-500 px-6 py-3 text-xs font-bold uppercase tracking-[0.16em] text-black shadow-[0_0_25px_rgba(16,185,129,0.5)] hover:bg-emerald-400 transition-all">
                <span>&gt; EXECUTE_PROJECTS</span>
                <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </div>
            </MagneticButton>

            <MagneticButton href="#contact">
              <div className="rounded-lg border border-emerald-500/40 bg-black/60 px-6 py-3 text-xs font-semibold uppercase tracking-[0.14em] text-emerald-300 backdrop-blur-md hover:border-emerald-400 hover:text-white hover:shadow-[0_0_25px_rgba(16,185,129,0.3)] transition-all">
                [ TRANSMIT_SIGNAL ]
              </div>
            </MagneticButton>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
