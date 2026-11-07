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
      {/* Primary cyan ambient light following mouse */}
      <motion.div
        className="absolute w-[500px] h-[500px] rounded-full blur-[140px] opacity-25 bg-gradient-to-r from-cyan-500/40 via-sky-500/30 to-blue-600/20"
        style={{
          x: smoothX,
          y: smoothY,
          translateX: "-50%",
          translateY: "-50%",
        }}
      />

      {/* Secondary purple ambient light offset */}
      <motion.div
        className="absolute w-[400px] h-[400px] rounded-full blur-[160px] opacity-20 bg-purple-600/30"
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
