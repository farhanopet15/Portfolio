"use client";

import { useEffect, useState } from "react";
import { motion, useSpring, useMotionValue } from "framer-motion";

export default function SpotlightGlow() {
  const [mounted, setMounted] = useState(false);
  const mouseX = useMotionValue(-500);
  const mouseY = useMotionValue(-500);

  const springConfig = { damping: 30, stiffness: 200 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  useEffect(() => {
    setMounted(true);
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  if (!mounted) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      {/* Primary Cyber Emerald Ambient Flashlight */}
      <motion.div
        className="absolute w-[520px] h-[520px] rounded-full blur-[140px] opacity-20 bg-gradient-to-r from-emerald-500/40 via-teal-500/30 to-cyan-500/20"
        style={{
          x: smoothX,
          y: smoothY,
          translateX: "-50%",
          translateY: "-50%",
        }}
      />

      {/* Secondary Cyan/Green Core */}
      <motion.div
        className="absolute w-[360px] h-[360px] rounded-full blur-[120px] opacity-15 bg-emerald-400/30"
        style={{
          x: smoothX,
          y: smoothY,
          translateX: "-40%",
          translateY: "-60%",
        }}
      />
    </div>
  );
}
