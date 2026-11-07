"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Sparkles } from "lucide-react";

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
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? "bg-black/60 backdrop-blur-xl border-b border-white/10 shadow-[0_4px_30px_rgba(0,0,0,0.5)]"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        {/* Brand Logo */}
        <a
          href="#top"
          className="group flex items-center gap-2.5 text-xs tracking-[0.2em] uppercase"
        >
          <div className="relative overflow-hidden rounded-lg p-0.5 border border-cyan-400/40 shadow-[0_0_15px_rgba(34,211,238,0.3)] group-hover:border-cyan-400 transition-colors">
            <Image
              src="/Logo.png"
              alt="My Logo"
              width={30}
              height={30}
              className="object-contain rounded-md"
            />
          </div>
          <span className="font-bold text-slate-100 flex items-center gap-1.5">
            <span className="text-red-500 font-mono font-black">EVO</span>
            <span className="text-slate-400 font-mono text-[10px]">//</span>
            <span>NX<span className="text-cyan-400">ONE</span></span>
            <span className="rounded bg-red-600/20 px-1 py-0.2 text-[8px] font-mono font-bold text-red-400 border border-red-500/30">
              MR
            </span>
          </span>
        </a>

        {/* Desktop Nav Links with Hover Pill */}
        <div
          onMouseLeave={() => setActiveHover(null)}
          className="hidden items-center gap-1 rounded-full border border-white/10 bg-black/40 px-3 py-1.5 backdrop-blur-lg md:flex"
        >
          {links.map((link) => {
            const isHovered = activeHover ? activeHover === link.href : activeSection === link.href;
            return (
              <a
                key={link.href}
                href={link.href}
                onMouseEnter={() => setActiveHover(link.href)}
                className={`relative px-3.5 py-1.5 text-xs font-medium transition-colors ${
                  isHovered ? "text-cyan-300" : "text-slate-300 hover:text-cyan-300"
                }`}
              >
                {isHovered && (
                  <motion.div
                    layoutId="navbar-hover"
                    className="absolute inset-0 rounded-full bg-cyan-400/10 border border-cyan-400/30 shadow-[0_0_12px_rgba(34,211,238,0.2)]"
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
          className="md:hidden rounded-lg border border-white/10 bg-black/40 p-2 text-cyan-400 backdrop-blur-md hover:border-cyan-400/50 transition"
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
            transition={{ duration: 0.3 }}
            className="md:hidden overflow-hidden border-b border-white/10 bg-black/90 backdrop-blur-2xl px-6 py-4"
          >
            <div className="flex flex-col gap-2">
              {links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="rounded-lg px-4 py-2.5 text-xs font-medium text-slate-200 hover:bg-cyan-400/10 hover:text-cyan-300 transition"
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
