"use client";
import Image from "next/image";

import { useState, useEffect } from "react";

const links = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#certificate", label: "Certificate" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? "bg-black/70 backdrop-blur-xl border-b border-white/5"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a
          href="#top"
          className="flex items-center gap-2 text-xs tracking-[0.2em] uppercase"
        >
          <Image
            src="/Logo.png"
            alt="My Logo"
            width={32}
            height={32}
            className="object-contain rounded-md"
          />
          <span className="font-semibold text-slate-100">
            NX<span className="text-cyan-400">ONE</span>
          </span>
        </a>
        <div className="hidden gap-8 text-[11px] font-medium text-slate-300 md:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="hover:text-cyan-400 transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>

        <button
          className="md:hidden flex flex-col gap-1.5"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle navigation"
        >
          <span className="h-0.5 w-6 bg-cyan-400" />
          <span className="h-0.5 w-6 bg-cyan-400" />
        </button>
      </nav>

      {open && (
        <div className="md:hidden bg-black/90 backdrop-blur-xl border-t border-white/5">
          <div className="mx-auto flex max-w-6xl flex-col px-6 py-4 gap-3 text-xs text-slate-200">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="hover:text-cyan-400 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
