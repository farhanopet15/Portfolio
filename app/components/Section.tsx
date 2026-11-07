"use client";

import { ReactNode } from "react";
import { motion } from "framer-motion";

interface SectionProps {
  id: string;
  label: string;
  title: string;
  children: ReactNode;
}

export default function Section({ id, label, title, children }: SectionProps) {
  return (
    <motion.section
      id={id}
      initial={{ opacity: 0, y: 35 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, ease: [0.21, 0.47, 0.32, 0.98] }}
      className="relative mx-auto mt-12 max-w-6xl px-6 py-14 border-t border-white/[0.07]"
    >
      <div className="mb-8 flex items-center justify-between gap-4">
        <div>
          {label && (
            <div className="inline-flex items-center gap-2 mb-1.5">
              <span className="h-1.5 w-1.5 rounded-full bg-cyan-400 animate-pulse shadow-[0_0_8px_rgba(34,211,238,0.8)]" />
              <p className="text-[10px] uppercase tracking-[0.25em] text-cyan-400 font-medium">
                {label}
              </p>
            </div>
          )}
          <h2 className="text-2xl sm:text-3xl font-bold tracking-[0.06em] text-slate-100">
            {title}
          </h2>
        </div>
        <div className="hidden text-[9px] uppercase tracking-[0.2em] text-slate-500 font-mono sm:block border border-white/5 rounded-full px-3 py-1 bg-white/[0.02]">
          THINK • BUILD • DEPLOY
        </div>
      </div>
      <div className="relative text-sm leading-relaxed">{children}</div>
    </motion.section>
  );
}
