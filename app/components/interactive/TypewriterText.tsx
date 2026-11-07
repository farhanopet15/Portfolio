"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const roles = [
  "Junior Full Stack Developer @ PT Rasi Solution Mandiri",
  "High-RPM Web Architect // Evo IX MR Spirit",
  "Python · Next.js · Kong Gateway · Ruby",
  "Zero-Lag Code // Twin-Scroll Precision",
];

export default function TypewriterText() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % roles.length);
    }, 3200);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative inline-flex items-center h-8 overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.span
          key={roles[index]}
          initial={{ y: 20, opacity: 0, filter: "blur(4px)" }}
          animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
          exit={{ y: -20, opacity: 0, filter: "blur(4px)" }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
          className="text-red-400 font-mono font-medium tracking-wide text-xs sm:text-sm flex items-center gap-1.5"
        >
          <span className="text-cyan-400">⚡</span>
          <span>{roles[index]}</span>
        </motion.span>
      </AnimatePresence>
      <motion.span
        animate={{ opacity: [0, 1, 0] }}
        transition={{ repeat: Infinity, duration: 0.8 }}
        className="ml-1 inline-block w-1.5 h-4 bg-red-500 shadow-[0_0_8px_rgba(239,68,68,1)]"
      />
    </div>
  );
}
