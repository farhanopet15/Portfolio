"use client";

import React, { useRef, useState } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

interface TiltCardProps {
  children: React.ReactNode;
  className?: string;
  glowColor?: string;
}

export default function TiltCard({
  children,
  className = "",
  glowColor = "rgba(16, 185, 129, 0.15)",
}: TiltCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseX = useSpring(x, { stiffness: 300, damping: 25 });
  const mouseY = useSpring(y, { stiffness: 300, damping: 25 });

  const rotateX = useTransform(mouseY, [-0.5, 0.5], ["8deg", "-8deg"]);
  const rotateY = useTransform(mouseX, [-0.5, 0.5], ["-8deg", "8deg"]);

  const [glarePos, setGlarePos] = useState({ x: 50, y: 50 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;

    const mouseFromCenterX = (e.clientX - rect.left) / width - 0.5;
    const mouseFromCenterY = (e.clientY - rect.top) / height - 0.5;

    x.set(mouseFromCenterX);
    y.set(mouseFromCenterY);

    setGlarePos({
      x: ((e.clientX - rect.left) / width) * 100,
      y: ((e.clientY - rect.top) / height) * 100,
    });
  };

  const handleMouseEnter = () => setIsHovered(true);

  const handleMouseLeave = () => {
    setIsHovered(false);
    x.set(0);
    y.set(0);
  };

  return (
    <div style={{ perspective: 1000 }} className="relative h-full">
      <motion.div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
        }}
        className={`relative overflow-hidden rounded-xl border border-emerald-500/15 bg-black/60 backdrop-blur-xl transition-all duration-300 ${className} ${
          isHovered
            ? "border-emerald-400/60 shadow-[0_0_35px_rgba(16,185,129,0.25)]"
            : ""
        }`}
      >
        {/* Cyber corner tech accents */}
        <div className="pointer-events-none absolute top-1.5 left-1.5 text-[8px] font-mono text-emerald-500/40 select-none">
          +
        </div>
        <div className="pointer-events-none absolute top-1.5 right-1.5 text-[8px] font-mono text-emerald-500/40 select-none">
          +
        </div>
        <div className="pointer-events-none absolute bottom-1.5 left-1.5 text-[8px] font-mono text-emerald-500/40 select-none">
          +
        </div>
        <div className="pointer-events-none absolute bottom-1.5 right-1.5 text-[8px] font-mono text-emerald-500/40 select-none">
          +
        </div>

        {/* Dynamic Glare Spotlight on mouse movement */}
        <div
          className="pointer-events-none absolute inset-0 transition-opacity duration-300"
          style={{
            opacity: isHovered ? 1 : 0,
            background: `radial-gradient(circle 240px at ${glarePos.x}% ${glarePos.y}%, ${glowColor}, transparent 70%)`,
          }}
        />

        {/* Content with 3D Pop */}
        <div style={{ transform: "translateZ(18px)" }} className="relative z-10 h-full">
          {children}
        </div>
      </motion.div>
    </div>
  );
}
