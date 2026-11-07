"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Award, Eye, X, Building, Calendar } from "lucide-react";
import TiltCard from "./interactive/TiltCard";

interface Certificate {
  title: string;
  issuer: string;
  year: string;
  image: string;
  description: string;
}

const certificates: Certificate[] = [
  {
    title: "E-MicrosoftOffice",
    issuer: "PT. Darnawangsa Sangga Amerta",
    year: "2024",
    image: "/E-MicrosoftOffice.jpg",
    description:
      "Demonstrating certified proficiency in Microsoft Office ecosystem (Word, Excel, PowerPoint) covering document formatting, advanced data processing, macro automation, and executive presentation design.",
  },
  {
    title: "E-Wordpress",
    issuer: "PT. Darnawangsa Sangga Amerta",
    year: "2024",
    image: "/E-Wordpress.jpg",
    description:
      "Certificate of competence in architecting dynamic web solutions using WordPress CMS, including bespoke theme custom code, plugin architecture, performance caching, and SEO optimization.",
  },
  {
    title: "E-Dumbways FullStack",
    issuer: "Dumbways Indonesia",
    year: "2025",
    image: "/E-Dumbways.jpg",
    description:
      "Full-stack software engineering certification focusing on modern JavaScript/TypeScript, React, Node.js, relational databases, Git collaboration, and automated CI/CD deployment pipelines.",
  },
  {
    title: "E-IBM Skill: GenAI for Devs",
    issuer: "IBM Corporation",
    year: "2025",
    image: "/E-IBM-SKill.png",
    description:
      "Specialized training in integrating Generative AI models into enterprise software development workflows, intelligent code generation, and agentic workflows.",
  },
  {
    title: "E-IBM Skill: Granite Models",
    issuer: "IBM Corporation",
    year: "2025",
    image: "/E-IBM-Skill1.png",
    description:
      "Practical deployment and fine-tuning of IBM Granite foundational models designed for enterprise software engineering, code reasoning, and system automation.",
  },
];

export default function CertificatesSection() {
  const [selected, setSelected] = useState<Certificate | null>(null);

  return (
    <>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {certificates.map((cert, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: index * 0.1 }}
            onClick={() => setSelected(cert)}
            className="cursor-pointer"
          >
            <TiltCard
              glowColor="rgba(34, 211, 238, 0.18)"
              className="group p-5 h-full flex flex-col justify-between border border-white/10 bg-black/40 backdrop-blur-xl hover:border-cyan-400/50 transition-colors"
            >
              <div>
                <div className="mb-3 flex items-center justify-between gap-2">
                  <div className="flex items-center gap-2 text-cyan-400">
                    <Award className="w-4 h-4" />
                    <span className="text-[10px] font-mono uppercase tracking-[0.18em]">
                      {cert.year}
                    </span>
                  </div>
                  <span className="inline-flex items-center gap-1 rounded-full border border-white/10 bg-white/[0.04] px-2 py-0.5 text-[9px] text-slate-400 group-hover:text-cyan-300 group-hover:border-cyan-400/40 transition-colors">
                    <Eye className="w-3 h-3" />
                    Preview
                  </span>
                </div>

                <h3 className="text-sm font-semibold text-slate-100 group-hover:text-cyan-300 transition-colors">
                  {cert.title}
                </h3>

                <p className="mt-1 text-[11px] text-slate-400 flex items-center gap-1.5">
                  <Building className="w-3 h-3 text-cyan-400/70" />
                  {cert.issuer}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-white/5 flex items-center justify-between">
                <span className="text-[9px] uppercase tracking-wider text-slate-500">
                  Verified Credential
                </span>
                <span className="text-[10px] font-medium text-cyan-400 group-hover:translate-x-1 transition-transform">
                  Inspect →
                </span>
              </div>
            </TiltCard>
          </motion.div>
        ))}
      </div>

      {/* Modal Preview with Glassmorphism */}
      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelected(null)}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 p-4 backdrop-blur-md"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              transition={{ type: "spring", stiffness: 350, damping: 25 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-2xl overflow-hidden rounded-2xl border border-cyan-400/30 bg-black/90 p-5 sm:p-6 text-slate-100 shadow-[0_0_80px_rgba(34,211,238,0.3)] backdrop-blur-2xl"
            >
              {/* Modal Top Header with distinct Close Button */}
              <div className="flex items-center justify-between pb-3 mb-3 border-b border-white/10 w-full">
                <div className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-cyan-400 animate-pulse shadow-[0_0_8px_rgba(34,211,238,0.8)]" />
                  <span className="text-[11px] font-mono uppercase tracking-[0.2em] text-cyan-400 font-semibold">
                    Credential Verification
                  </span>
                </div>

                <button
                  onClick={() => setSelected(null)}
                  aria-label="Close modal"
                  className="flex items-center gap-1.5 rounded-full border border-white/15 bg-white/5 px-3 py-1.5 text-xs text-slate-300 hover:border-cyan-400 hover:text-cyan-300 hover:bg-cyan-400/10 transition shadow-sm"
                >
                  <span className="text-[11px] font-mono">Close</span>
                  <X className="w-3.5 h-3.5" />
                </button>
              </div>

              <div className="flex flex-col items-center gap-4 text-center">
                <div className="relative w-full max-h-[380px] overflow-hidden rounded-xl border border-white/10 bg-black/50 p-2">
                  <Image
                    src={selected.image}
                    alt={selected.title}
                    width={800}
                    height={500}
                    className="max-h-[350px] w-full rounded-lg object-contain"
                  />
                </div>

                <div className="space-y-1 mt-2">
                  <h2 className="text-xl font-bold text-slate-50">
                    {selected.title}
                  </h2>
                  <div className="flex flex-wrap items-center justify-center gap-3 text-xs text-cyan-400">
                    <span className="flex items-center gap-1">
                      <Building className="w-3.5 h-3.5" />
                      {selected.issuer}
                    </span>
                    <span>•</span>
                    <span className="flex items-center gap-1 font-mono">
                      <Calendar className="w-3.5 h-3.5" />
                      {selected.year}
                    </span>
                  </div>
                </div>

                <p className="text-xs text-slate-300 max-w-lg leading-relaxed border-t border-white/10 pt-3">
                  {selected.description}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
