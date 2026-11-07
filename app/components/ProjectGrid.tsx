"use client";

import { motion } from "framer-motion";
import { ExternalLink, Sparkles } from "lucide-react";
import TiltCard from "./interactive/TiltCard";

const projects = [
  {
    title: "AutoVerse",
    tag: "STREAM: REAL_TIME_INTEL",
    tech: ["Next.js", "TypeScript", "TailwindCSS", "REST Streams"],
    desc: "An intelligent, high-throughput command dashboard designed for live data visualization, analytics ingestion, and real-time event telemetry.",
    link: "https://autoverse-fe.vercel.app/",
  },
  {
    title: "Digital Business Card",
    tag: "MODULE: ENCRYPTED_IDENTITY",
    tech: ["Next.js", "Express.js", "Node.js", "JWT Cryptography"],
    desc: "A cyber-minimal platform engineered for generating and validating cryptographically verified digital credentials with instant QR pairing.",
    link: "https://digital-business-card-fe.vercel.app/",
  },
  {
    title: "NetWorkers",
    tag: "NODE: AUTOMATED_NETWORK",
    tech: ["Next.js", "N8N Engine", "Docker Containers", "PostgreSQL"],
    desc: "A decentralized ecosystem bridging authenticated professionals through automated asynchronous webhooks and automated workflow bots.",
    link: "https://net-workers.netlify.app/",
  },
];

export default function ProjectGrid() {
  return (
    <div className="grid gap-6 md:grid-cols-3 font-mono">
      {projects.map((p, index) => (
        <motion.div
          key={p.title}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: index * 0.15 }}
        >
          <TiltCard
            glowColor="rgba(16, 185, 129, 0.2)"
            className="group flex flex-col justify-between p-6 h-full border border-emerald-500/20 bg-black/60 backdrop-blur-xl hover:border-emerald-400/60 transition-all duration-300"
          >
            <div>
              {/* Header: Tag + Live Icon */}
              <div className="mb-4 flex items-center justify-between gap-2">
                <span className="inline-flex items-center gap-1.5 rounded border border-emerald-500/30 bg-emerald-500/10 px-2 py-0.5 text-[9px] uppercase tracking-wider text-emerald-300">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  {p.tag}
                </span>

                <a
                  href={p.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Execute ${p.title}`}
                  className="rounded border border-emerald-500/20 p-2 text-slate-400 group-hover:border-emerald-400/50 group-hover:text-emerald-300 group-hover:bg-emerald-500/10 transition-colors"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>

              {/* Title & Description */}
              <h3 className="text-base font-bold text-slate-100 group-hover:text-emerald-300 transition-colors flex items-center gap-2">
                <span>&gt; {p.title}</span>
                <Sparkles className="w-3 h-3 text-emerald-400 opacity-0 group-hover:opacity-100 transition-opacity" />
              </h3>

              <p className="mt-2 text-xs text-slate-300 leading-relaxed font-sans">
                {p.desc}
              </p>
            </div>

            {/* Tech Tags & CTA Link */}
            <div className="mt-6 pt-4 border-t border-emerald-500/15">
              <div className="flex flex-wrap gap-1.5 mb-4">
                {p.tech.map((t) => (
                  <span
                    key={t}
                    className="rounded border border-emerald-500/15 bg-white/[0.02] px-2 py-0.5 text-[9px] text-emerald-300/80"
                  >
                    {t}
                  </span>
                ))}
              </div>

              <a
                href={p.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-[11px] font-semibold text-emerald-400 group-hover:underline"
              >
                <span>[ INITIALIZE_SYSTEM ]</span>
                <span className="transition-transform group-hover:translate-x-1">→</span>
              </a>
            </div>
          </TiltCard>
        </motion.div>
      ))}
    </div>
  );
}
