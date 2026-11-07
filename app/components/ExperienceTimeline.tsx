"use client";

import { motion } from "framer-motion";
import { Terminal, Calendar, Building2, Cpu } from "lucide-react";
import TiltCard from "./interactive/TiltCard";

const experience = [
  {
    period: "2026 — PRESENT",
    role: "Junior Full Stack Developer",
    company: "PT. Rasi Solution Mandiri",
    detail:
      "Engineering enterprise web architectures, developing robust high-speed microservices, Kong API Gateway traffic management, and encrypted database pipelines utilizing Python, modern JavaScript/TypeScript, and containerized Docker environments.",
    badge: "[STATUS: ACTIVE_MISSION]",
    accent: "border-emerald-400/40 text-emerald-300 bg-emerald-500/10",
    dotColor: "bg-emerald-400 shadow-[0_0_12px_rgba(16,185,129,1)]",
  },
  {
    period: "2025 — 2026",
    role: "FullStack Developer",
    company: "PT. Dumbways Indonesia",
    detail:
      "Engineered secure, high-throughput web applications with Next.js, Node.js, PostgreSQL, and TailwindCSS. Optimized backend latency, automated Git CI/CD deployment routines, and enforced strict code audit standards.",
    badge: "[MISSION_RESOLVED: 100%]",
    accent: "border-cyan-400/30 text-cyan-300 bg-cyan-400/5",
    dotColor: "bg-cyan-400 shadow-[0_0_12px_rgba(6,182,212,1)]",
  },
  {
    period: "2024 — 2025",
    role: "PIC (Person in Charge)",
    company: "PT. Artdeco Sejahtera Abadi",
    detail:
      "Directed technical workflow execution, project deliverables coordination, cross-department incident reporting, and operational team leadership with mission-critical precision.",
    badge: "[OPS_COORDINATION]",
    accent: "border-slate-500/30 text-slate-300 bg-white/5",
    dotColor: "bg-slate-400 shadow-[0_0_10px_rgba(148,163,184,0.8)]",
  },
  {
    period: "2021 — 2022",
    role: "Assistant Legal",
    company: "Government of West Java Province",
    detail:
      "Audited legal documentation, statutory frameworks, conducted comprehensive regulatory diagnostics, and handled legal communications with absolute compliance and institutional rigor.",
    badge: "[LEGAL_COMPLIANCE]",
    accent: "border-slate-600/30 text-slate-400 bg-white/5",
    dotColor: "bg-slate-500 shadow-[0_0_10px_rgba(100,116,139,0.8)]",
  },
];

export default function ExperienceTimeline() {
  return (
    <div className="relative font-mono">
      {/* Animated Glowing Cyber Matrix Timeline Line */}
      <div className="absolute left-[15px] top-4 bottom-4 w-px bg-gradient-to-b from-emerald-400 via-teal-500/50 to-transparent shadow-[0_0_8px_rgba(16,185,129,0.8)]" />

      <div className="space-y-8 pl-10">
        {experience.map((item, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.12 }}
            className="relative"
          >
            {/* Glowing Hacker Node Dot */}
            <div className="absolute -left-[31px] top-5 flex items-center justify-center">
              <span className="relative flex h-3 w-3">
                <span className={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 ${item.dotColor.split(" ")[0]}`} />
                <span className={`relative inline-flex rounded-full h-3 w-3 ${item.dotColor}`} />
              </span>
            </div>

            {/* Cyber Terminal Experience Card */}
            <TiltCard glowColor="rgba(16, 185, 129, 0.15)" className="p-5 border border-emerald-500/20 bg-black/60 backdrop-blur-xl hover:border-emerald-400/50 transition-colors">
              <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                <div className="flex items-center gap-2 text-emerald-400">
                  <Calendar className="w-3.5 h-3.5" />
                  <span className="text-[11px] font-mono tracking-wider font-semibold">
                    {item.period}
                  </span>
                </div>

                <span className={`rounded border px-2 py-0.5 text-[9px] font-mono tracking-wider flex items-center gap-1 ${item.accent}`}>
                  <Terminal className="w-3 h-3" />
                  {item.badge}
                </span>
              </div>

              <div className="flex items-center gap-2 mb-1">
                <Cpu className="w-4 h-4 text-emerald-400" />
                <h3 className="text-base font-bold text-slate-100">
                  {item.role}
                </h3>
              </div>

              <div className="flex items-center gap-1.5 text-xs text-slate-400 mb-3 font-mono">
                <Building2 className="w-3.5 h-3.5 text-emerald-400/70" />
                <span>{item.company}</span>
              </div>

              <p className="text-xs text-slate-300 leading-relaxed max-w-3xl font-mono">
                {item.detail}
              </p>
            </TiltCard>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
