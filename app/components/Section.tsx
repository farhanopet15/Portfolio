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
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="relative mx-auto mt-12 max-w-6xl px-6 py-14 border-t border-emerald-500/20"
    >
      <div className="mb-8 flex items-center justify-between gap-4 font-mono">
        <div>
          {label && (
            <div className="inline-flex items-center gap-2 mb-1.5">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_8px_rgba(16,185,129,1)]" />
              <p className="text-[10px] uppercase tracking-[0.25em] text-emerald-400 font-bold">
                [// {label}]
              </p>
            </div>
          )}
          <h2 className="text-2xl sm:text-3xl font-extrabold tracking-[0.04em] text-slate-100 flex items-center gap-2">
            <span className="text-emerald-500">&gt;</span>
            <span>{title}</span>
          </h2>
        </div>
        <div className="hidden text-[10px] uppercase tracking-[0.2em] text-emerald-500/60 font-mono sm:block border border-emerald-500/20 rounded px-3 py-1 bg-black/40">
          SEC_LEVEL: 0 // CLASSIFIED
        </div>
      </div>
      <div className="relative text-sm leading-relaxed">{children}</div>
    </motion.section>
  );
}
