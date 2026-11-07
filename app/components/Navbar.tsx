"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const links = [
  { href: "#about", label: "01.ABOUT" },
  { href: "#skills", label: "02.EXPLOITS" },
  { href: "#experience", label: "03.MISSIONS" },
  { href: "#projects", label: "04.PROJECTS" },
  { href: "#certificate", label: "05.CERTS" },
  { href: "#contact", label: "06.UPLINK" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [activeHover, setActiveHover] = useState<string | null>(null);
  const [activeSection, setActiveSection] = useState<string>("");

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 25);

      const sectionIds = links.map((l) => l.href.substring(1));
      const scrollPosition = window.scrollY + 220;

      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const el = document.getElementById(sectionIds[i]);
        if (el && el.offsetTop <= scrollPosition) {
          setActiveSection("#" + sectionIds[i]);
          return;
        }
      }
      if (window.scrollY < 200) {
        setActiveSection("");
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 font-mono ${
        scrolled
          ? "bg-black/80 backdrop-blur-xl border-b border-emerald-500/20 shadow-[0_4px_30px_rgba(0,0,0,0.8)]"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        {/* Brand Terminal Identifier */}
        <a
          href="#top"
          className="group flex items-center gap-2.5 text-xs tracking-[0.16em] uppercase"
        >
          <div className="relative overflow-hidden rounded-md p-0.5 border border-emerald-500/40 shadow-[0_0_15px_rgba(16,185,129,0.3)] group-hover:border-emerald-400 transition-colors bg-black/60">
            <Image
              src="/Logo.png"
              alt="My Logo"
              width={28}
              height={28}
              className="object-contain rounded"
            />
          </div>
          <div className="flex items-center gap-1.5 text-slate-100 font-bold">
            <span className="text-emerald-400 font-bold">root@nxone:</span>
            <span className="text-slate-400">~#</span>
            <span className="inline-block h-2 w-2 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_8px_rgba(16,185,129,1)]" />
          </div>
        </a>

        {/* Desktop Nav Links with Cyber Hover Pill */}
        <div
          onMouseLeave={() => setActiveHover(null)}
          className="hidden items-center gap-1 rounded-lg border border-emerald-500/20 bg-black/60 px-3 py-1.5 backdrop-blur-lg md:flex"
        >
          {links.map((link) => {
            const isHovered = activeHover ? activeHover === link.href : activeSection === link.href;
            return (
              <a
                key={link.href}
                href={link.href}
                onMouseEnter={() => setActiveHover(link.href)}
                className={`relative px-3 py-1 text-xs font-mono transition-colors ${
                  isHovered ? "text-emerald-300 font-semibold" : "text-slate-400 hover:text-emerald-300"
                }`}
              >
                {isHovered && (
                  <motion.div
                    layoutId="navbar-hover"
                    className="absolute inset-0 rounded border border-emerald-400/40 bg-emerald-500/10 shadow-[0_0_12px_rgba(16,185,129,0.2)]"
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{link.label}</span>
              </a>
            );
          })}
        </div>

        {/* Mobile Hamburger Button */}
        <button
          className="md:hidden rounded-lg border border-emerald-500/30 bg-black/60 p-2 text-emerald-400 backdrop-blur-md hover:border-emerald-400 transition"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle navigation"
        >
          {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </nav>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="md:hidden overflow-hidden border-b border-emerald-500/20 bg-black/95 backdrop-blur-2xl px-6 py-4"
          >
            <div className="flex flex-col gap-2">
              {links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="rounded px-4 py-2 text-xs font-mono text-slate-300 hover:bg-emerald-500/10 hover:text-emerald-300 transition"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
