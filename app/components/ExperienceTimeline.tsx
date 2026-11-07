"use client";

import { motion } from "framer-motion";
import { Briefcase, Calendar, Building2, Gauge } from "lucide-react";
import TiltCard from "./interactive/TiltCard";

const experience = [
  {
    period: "2026 — Present",
    role: "Junior Full Stack Developer",
    company: "PT. Rasi Solution Mandiri",
    detail:
      "Engineering modern full-stack web architectures, building high-throughput microservices, API integrations (Kong Gateway), and scalable database pipelines with Python and modern JS/TS frameworks.",
    badge: "Active Mission // 8,000+ RPM",
    accent: "border-red-500/30 text-red-400 bg-red-500/10",
    dotColor: "bg-red-500 shadow-[0_0_12px_rgba(239,68,68,1)]",
  },
  {
    period: "2025 — 2026",
    role: "FullStack Developer",
    company: "PT. Dumbways Indonesia",
    detail:
      "Engineered high-performance web applications utilizing Next.js, TailwindCSS, PostgreSQL, and Node.js. Focused on performance optimization, twin-scroll architecture patterns, clean code, and automated CI/CD workflows.",
    badge: "Stage 2 Tuning Completed",
    accent: "border-cyan-400/30 text-cyan-300 bg-cyan-400/5",
    dotColor: "bg-cyan-400 shadow-[0_0_12px_rgba(34,211,238,1)]",
  },
  {
    period: "2024 — 2025",
    role: "PIC (Person in Charge)",
    company: "PT. Artdeco Sejahtera Abadi",
    detail:
      "Spearheaded project planning, technical workflow coordination, cross-team telemetry communication, and supervision of deliverables ensuring strict deadlines and quality thresholds.",
    badge: "Leadership & Ops Telemetry",
    accent: "border-slate-500/30 text-slate-300 bg-white/5",
    dotColor: "bg-slate-400 shadow-[0_0_10px_rgba(148,163,184,0.8)]",
  },
  {
    period: "2021 — 2022",
    role: "Assistant Legal",
    company: "Government of West Java Province",
    detail:
      "Handled legal documentation, regulatory frameworks, conducted comprehensive analysis, and assisted in inter-departmental legal coordination with precision and strict compliance.",
    badge: "Compliance & Diagnostics",
    accent: "border-slate-600/30 text-slate-400 bg-white/5",
    dotColor: "bg-slate-500 shadow-[0_0_10px_rgba(100,116,139,0.8)]",
  },
];

export default function ExperienceTimeline() {
  return (
    <div className="relative">
      {/* Animated glowing vertical timeline line (Tachometer Redline to Cyan Turbo) */}
      <div className="absolute left-[15px] top-4 bottom-4 w-px bg-gradient-to-b from-red-500 via-cyan-400 to-transparent shadow-[0_0_8px_rgba(239,68,68,0.5)]" />

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
            {/* Glowing Node Dot on Timeline */}
            <div className="absolute -left-[31px] top-5 flex items-center justify-center">
              <span className="relative flex h-3 w-3">
                <span className={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 ${item.dotColor.split(" ")[0]}`} />
                <span className={`relative inline-flex rounded-full h-3 w-3 ${item.dotColor}`} />
              </span>
            </div>

            {/* Frosted Glass Experience Card */}
            <TiltCard glowColor="rgba(239, 68, 68, 0.12)" className="p-5 border border-white/10 bg-black/40 backdrop-blur-xl hover:border-red-500/40 transition-colors">
              <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                <div className="flex items-center gap-2 text-slate-200">
                  <Calendar className="w-3.5 h-3.5 text-red-400" />
                  <span className="text-[10px] font-mono uppercase tracking-[0.18em]">
                    {item.period}
                  </span>
                </div>

                <span className={`rounded-full border px-2.5 py-0.5 text-[9px] uppercase tracking-wider font-mono flex items-center gap-1 ${item.accent}`}>
                  <Gauge className="w-3 h-3" />
                  {item.badge}
                </span>
              </div>

              <div className="flex items-center gap-2 mb-1">
                <Briefcase className="w-4 h-4 text-red-400" />
                <h3 className="text-base font-semibold text-slate-100">
                  {item.role}
                </h3>
              </div>

              <div className="flex items-center gap-1.5 text-xs text-slate-400 mb-3 font-mono">
                <Building2 className="w-3.5 h-3.5 text-cyan-400" />
                <span>{item.company}</span>
              </div>

              <p className="text-xs text-slate-300 leading-relaxed max-w-3xl">
                {item.detail}
              </p>
            </TiltCard>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
