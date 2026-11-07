"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const commands = [
  "Junior Full Stack Developer @ PT. Rasi Solution Mandiri",
  "stack: Python · Kong Gateway · Ruby · Next.js 16 · Go",
  "status: ROOT_ACCESS_GRANTED // ZERO_VULNERABILITY",
  "architecting high-throughput, mission-critical systems",
  "encrypted database pipelines & distributed microservices",
];

export default function TypewriterText() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % commands.length);
    }, 3200);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative inline-flex items-center h-8 overflow-hidden font-mono text-xs sm:text-sm">
      <span className="text-emerald-400 mr-2 font-bold">[root@farhan:~]$</span>
      <AnimatePresence mode="wait">
        <motion.span
          key={commands[index]}
          initial={{ y: 15, opacity: 0, filter: "blur(4px)" }}
          animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
          exit={{ y: -15, opacity: 0, filter: "blur(4px)" }}
          transition={{ duration: 0.35, ease: "easeInOut" }}
          className="text-slate-200 tracking-tight"
        >
          {commands[index]}
        </motion.span>
      </AnimatePresence>
      <motion.span
        animate={{ opacity: [0, 1, 0] }}
        transition={{ repeat: Infinity, duration: 0.7 }}
        className="ml-1 inline-block w-2 h-4 bg-emerald-400 shadow-[0_0_8px_rgba(16,185,129,1)]"
      />
    </div>
  );
}
