"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ShieldCheck, Eye, X, Building, Calendar, KeyRound } from "lucide-react";
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
      "Certified proficiency in Microsoft Office ecosystem (Word, Excel, PowerPoint) covering advanced document formatting, macro automation, data calculation, and executive reporting systems.",
  },
  {
    title: "E-Wordpress",
    issuer: "PT. Darnawangsa Sangga Amerta",
    year: "2024",
    image: "/E-Wordpress.jpg",
    description:
      "Certificate of competence in CMS systems architecture, custom themes development, secure plugin configurations, SEO optimization, and web application hardening.",
  },
  {
    title: "E-Dumbways FullStack",
    issuer: "Dumbways Indonesia",
    year: "2025",
    image: "/E-Dumbways.jpg",
    description:
      "Full-stack software engineering certification: Modern JavaScript/TypeScript, React, Node.js, relational database optimization, secure Git collaboration, and automated CI/CD pipelines.",
  },
  {
    title: "E-IBM Skill: GenAI for Devs",
    issuer: "IBM Corporation",
    year: "2025",
    image: "/E-IBM-SKill.png",
    description:
      "Specialized training in integrating Generative AI architectures into enterprise software development workflows, intelligent code reasoning, and autonomous agent systems.",
  },
  {
    title: "E-IBM Skill: Granite Models",
    issuer: "IBM Corporation",
    year: "2025",
    image: "/E-IBM-Skill1.png",
    description:
      "Practical deployment and fine-tuning of IBM Granite foundational enterprise models for secure software engineering, code refactoring, and automated diagnostics.",
  },
];

export default function CertificatesSection() {
  const [selected, setSelected] = useState<Certificate | null>(null);

  return (
    <div className="font-mono">
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
              glowColor="rgba(16, 185, 129, 0.18)"
              className="group p-5 h-full flex flex-col justify-between border border-emerald-500/20 bg-black/60 backdrop-blur-xl hover:border-emerald-400/60 transition-colors"
            >
              <div>
                <div className="mb-3 flex items-center justify-between gap-2">
                  <div className="flex items-center gap-2 text-emerald-400">
                    <ShieldCheck className="w-4 h-4" />
                    <span className="text-[10px] uppercase tracking-wider font-bold">
                      [{cert.year}]
                    </span>
                  </div>
                  <span className="inline-flex items-center gap-1 rounded border border-emerald-500/30 bg-emerald-500/10 px-2 py-0.5 text-[9px] text-emerald-300 group-hover:border-emerald-400/50 transition-colors">
                    <Eye className="w-3 h-3" />
                    INSPECT
                  </span>
                </div>

                <h3 className="text-sm font-bold text-slate-100 group-hover:text-emerald-300 transition-colors">
                  &gt; {cert.title}
                </h3>

                <p className="mt-1 text-[11px] text-slate-400 flex items-center gap-1.5 font-sans">
                  <Building className="w-3 h-3 text-emerald-400/70" />
                  {cert.issuer}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-emerald-500/15 flex items-center justify-between">
                <span className="text-[9px] uppercase tracking-wider text-slate-500 flex items-center gap-1">
                  <KeyRound className="w-3 h-3 text-emerald-500/60" />
                  CRYPT_VERIFIED
                </span>
                <span className="text-[10px] font-semibold text-emerald-400 group-hover:translate-x-1 transition-transform">
                  DECRYPT →
                </span>
              </div>
            </TiltCard>
          </motion.div>
        ))}
      </div>

      {/* Modal Preview with Cyber Security Frame */}
      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelected(null)}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 backdrop-blur-md"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              transition={{ type: "spring", stiffness: 350, damping: 25 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-2xl overflow-hidden rounded-xl border border-emerald-400/50 bg-black/95 p-5 sm:p-6 text-slate-100 shadow-[0_0_80px_rgba(16,185,129,0.3)] backdrop-blur-2xl"
            >
              {/* Modal Top Header Bar */}
              <div className="flex items-center justify-between pb-3 mb-3 border-b border-emerald-500/20 w-full font-mono">
                <div className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_8px_rgba(16,185,129,1)]" />
                  <span className="text-[11px] uppercase tracking-wider text-emerald-400 font-bold">
                    [CREDENTIAL_DECRYPTOR // ACCESS_GRANTED]
                  </span>
                </div>

                <button
                  onClick={() => setSelected(null)}
                  aria-label="Close modal"
                  className="flex items-center gap-1.5 rounded border border-emerald-500/30 bg-emerald-500/10 px-3 py-1.5 text-xs text-emerald-300 hover:border-emerald-400 hover:bg-emerald-500/20 transition shadow-sm"
                >
                  <span className="text-[11px]">EXIT</span>
                  <X className="w-3.5 h-3.5" />
                </button>
              </div>

              <div className="flex flex-col items-center gap-4 text-center">
                <div className="relative w-full max-h-[380px] overflow-hidden rounded-lg border border-emerald-500/20 bg-black/60 p-2">
                  <Image
                    src={selected.image}
                    alt={selected.title}
                    width={800}
                    height={500}
                    className="max-h-[350px] w-full rounded object-contain"
                  />
                </div>

                <div className="space-y-1 mt-2">
                  <h2 className="text-xl font-bold text-slate-50">
                    {selected.title}
                  </h2>
                  <div className="flex flex-wrap items-center justify-center gap-3 text-xs text-emerald-400">
                    <span className="flex items-center gap-1">
                      <Building className="w-3.5 h-3.5" />
                      {selected.issuer}
                    </span>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5" />
                      {selected.year}
                    </span>
                  </div>
                </div>

                <p className="text-xs text-slate-300 max-w-lg leading-relaxed border-t border-emerald-500/20 pt-3 font-sans">
                  {selected.description}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
