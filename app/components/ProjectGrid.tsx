"use client";

import { motion } from "framer-motion";
import { ExternalLink, Layers, Sparkles } from "lucide-react";
import TiltCard from "./interactive/TiltCard";

const projects = [
  {
    title: "AutoVerse",
    tag: "Real-Time Data Intelligence",
    tech: ["Next.js", "TypeScript", "TailwindCSS", "REST API"],
    desc: "An interactive analytics dashboard delivering real-time intelligent data visualization with high-throughput streams.",
    link: "https://autoverse-fe.vercel.app/",
    accent: "from-cyan-500/20 to-blue-500/10",
  },
  {
    title: "Digital Business Card",
    tag: "Identity & Networking Platform",
    tech: ["Next.js", "Express", "Node.js", "JWT Auth"],
    desc: "A sleek, minimal platform designed for instantly forging and sharing encrypted digital identities with seamless QR integration.",
    link: "https://digital-business-card-fe.vercel.app/",
    accent: "from-sky-500/20 to-indigo-500/10",
  },
  {
    title: "NetWorkers",
    tag: "Community Network System",
    tech: ["Next.js", "N8N", "Docker", "PostgreSQL"],
    desc: "A digital ecosystem linking users with verified local industry professionals through an automated workflow pipeline.",
    link: "https://net-workers.netlify.app/",
    accent: "from-purple-500/20 to-cyan-500/10",
  },
];

export default function ProjectGrid() {
  return (
    <div className="grid gap-6 md:grid-cols-3">
      {projects.map((p, index) => (
        <motion.div
          key={p.title}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: index * 0.15 }}
        >
          <TiltCard
            glowColor="rgba(34, 211, 238, 0.2)"
            className="group flex flex-col justify-between p-6 h-full border border-white/10 bg-black/40 backdrop-blur-xl hover:border-cyan-400/50 transition-all duration-300"
          >
            <div>
              {/* Header: Tag + Live Icon */}
              <div className="mb-4 flex items-center justify-between gap-2">
                <span className="inline-flex items-center gap-1.5 rounded-full border border-cyan-400/30 bg-cyan-400/10 px-2.5 py-0.5 text-[9px] uppercase tracking-[0.16em] text-cyan-300">
                  <span className="h-1.5 w-1.5 rounded-full bg-cyan-400 animate-pulse" />
                  {p.tag}
                </span>

                <a
                  href={p.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Visit ${p.title}`}
                  className="rounded-full border border-white/10 p-2 text-slate-400 group-hover:border-cyan-400/50 group-hover:text-cyan-300 group-hover:bg-cyan-400/10 transition-colors"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>

              {/* Title & Description */}
              <h3 className="text-base font-semibold text-slate-100 group-hover:text-cyan-300 transition-colors flex items-center gap-2">
                {p.title}
                <Sparkles className="w-3 h-3 text-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity" />
              </h3>

              <p className="mt-2 text-xs text-slate-300 leading-relaxed">
                {p.desc}
              </p>
            </div>

            {/* Tech Tags & CTA Link */}
            <div className="mt-6 pt-4 border-t border-white/5">
              <div className="flex flex-wrap gap-1.5 mb-4">
                {p.tech.map((t) => (
                  <span
                    key={t}
                    className="rounded-md border border-white/5 bg-white/[0.03] px-2 py-0.5 text-[9px] font-mono text-slate-400"
                  >
                    {t}
                  </span>
                ))}
              </div>

              <a
                href={p.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-[11px] font-medium text-cyan-400 group-hover:underline"
              >
                <span>Launch Application</span>
                <span className="transition-transform group-hover:translate-x-1">→</span>
              </a>
            </div>
          </TiltCard>
        </motion.div>
      ))}
    </div>
  );
}
