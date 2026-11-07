"use client";

import { useEffect, useRef } from "react";

export default function MatrixBackground() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    // Matrix characters: Binary, hex, and cyber runes
    const chars = "0101010101ABCDEF0123456789<>/*{}[]=+#~";
    const fontSize = 14;
    let columns = Math.floor(width / fontSize);
    let drops: number[] = [];

    const initDrops = () => {
      columns = Math.floor(width / fontSize);
      drops = [];
      for (let i = 0; i < columns; i++) {
        drops[i] = Math.floor(Math.random() * -100);
      }
    };

    initDrops();

    const mouse = {
      x: -1000,
      y: -1000,
      radius: 120,
    };

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
      initDrops();
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };

    window.addEventListener("resize", handleResize);
    window.addEventListener("mousemove", handleMouseMove, { passive: true });

    let lastDraw = 0;
    const fps = 33; // ~30 fps for authentic matrix terminal feel

    const render = (time: number) => {
      animationFrameId = requestAnimationFrame(render);

      if (time - lastDraw < 1000 / fps) return;
      lastDraw = time;

      // Dark translucent black overlay to create falling trail
      ctx.fillStyle = "rgba(3, 5, 8, 0.12)";
      ctx.fillRect(0, 0, width, height);

      ctx.font = `${fontSize}px monospace`;

      for (let i = 0; i < drops.length; i++) {
        const char = chars[Math.floor(Math.random() * chars.length)];
        const xPos = i * fontSize;
        const yPos = drops[i] * fontSize;

        // Interaction with mouse: bright neon flash around cursor
        const dx = mouse.x - xPos;
        const dy = mouse.y - yPos;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < mouse.radius) {
          ctx.fillStyle = "#00ffcc";
          ctx.shadowBlur = 10;
          ctx.shadowColor = "#00ffcc";
        } else if (Math.random() > 0.96) {
          // Occasional bright leading white/green drop
          ctx.fillStyle = "#ffffff";
          ctx.shadowBlur = 8;
          ctx.shadowColor = "#00ff66";
        } else {
          ctx.fillStyle = "rgba(0, 255, 102, 0.45)";
          ctx.shadowBlur = 0;
        }

        ctx.fillText(char, xPos, yPos);

        // Reset drop when hitting bottom or randomly
        if (yPos > height && Math.random() > 0.975) {
          drops[i] = 0;
        }

        drops[i]++;
      }
    };

    animationFrameId = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none fixed inset-0 z-0 opacity-40 mix-blend-screen"
    />
  );
}
