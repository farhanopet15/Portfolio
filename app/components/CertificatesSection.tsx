"use client";

import { useState } from "react";
import Image from "next/image";

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
      "Certification demonstrating proficiency in Microsoft Office applications such as Word, Excel, and PowerPoint — covering document formatting, data processing, and presentation design for professional use.",
  },
  {
    title: "E-Wordpress",
    issuer: "PT. Darnawangsa Sangga Amerta",
    year: "2024",
    image: "/E-Wordpress.jpg",
    description:
      "Certificate of competence in creating and managing dynamic websites using WordPress CMS, including theme customization, plugin configuration, and SEO optimization.",
  },
  {
    title: "E-Dumbways",
    issuer: "Dumbways Indonesia",
    year: "2022",
    image: "/E-Dumbways.jpg",
    description:
      "Full-stack web development certification focusing on JavaScript, React, Node.js, and deployment workflows — emphasizing modern coding standards, Git collaboration, and scalable app development.",
  },
];

export default function CertificatesSection() {
  const [selected, setSelected] = useState<Certificate | null>(null);

  return (
    <>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {certificates.map((cert, index) => (
          <div
            key={index}
            onClick={() => setSelected(cert)}
            className="group relative cursor-pointer rounded-2xl border border-white/5 bg-white/2 p-5 hover:border-cyan-400/60 hover:shadow-[0_0_40px_rgba(34,211,238,0.25)] transition"
          >
            <div className="mb-3 flex items-center justify-between">
              <h3 className="text-sm font-semibold text-slate-100">
                {cert.title}
              </h3>
              <span className="text-[9px] text-cyan-400 uppercase tracking-[0.18em]">
                {cert.year}
              </span>
            </div>

            <p className="text-[11px] text-slate-400 mb-3">
              Issued by {cert.issuer}
            </p>

            <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition bg-gradient-to-br from-cyan-400/5 to-transparent rounded-2xl" />
          </div>
        ))}
      </div>

      {selected && (
        <div
          onClick={() => setSelected(null)}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative w-[90%] max-w-2xl rounded-2xl border border-white/10 bg-black/90 p-6 text-slate-100 shadow-[0_0_60px_rgba(34,211,238,0.3)]"
          >
            <button
              onClick={() => setSelected(null)}
              className="absolute right-4 top-4 text-slate-400 hover:text-cyan-300 text-lg"
            >
              ✕
            </button>

            <div className="flex flex-col items-center gap-4 text-center">
              <Image
                src={selected.image}
                alt={selected.title}
                width={600}
                height={400}
                className="rounded-lg border border-white/10 object-contain"
              />
              <h2 className="text-xl font-semibold text-slate-50">
                {selected.title}
              </h2>
              <p className="text-sm text-cyan-400 uppercase tracking-[0.18em]">
                {selected.issuer} · {selected.year}
              </p>
              <p className="text-[12px] text-slate-300 max-w-lg mt-2">
                {selected.description}
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
