"use client";

import { useEffect, useRef } from "react";

export default function ParticleBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let animationId;
    let particles = [];
    let width, height;

    function resize() {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
      const count = Math.floor((width * height) / 8000);
      particles = new Array(count).fill(null).map(() => ({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.8,
        vy: (Math.random() - 0.5) * 0.8,
        r: Math.random() * 2.5 + 1.2,
      }));
    }

    function getAccentColor() {
      const styles = getComputedStyle(document.documentElement);
      const rgb = styles.getPropertyValue("--accent-rgb").trim() || "37 99 235";
      return rgb.split(" ").join(",");
    }

    function step() {
      ctx.clearRect(0, 0, width, height);
      const accent = getAccentColor();
      const isDark = document.documentElement.classList.contains("dark");
      const dotColor = isDark ? `rgba(${accent},0.55)` : `rgba(${accent},0.45)`;
      const lineColor = isDark ? `rgba(${accent},` : `rgba(${accent},`;

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0 || p.x > width) p.vx *= -1;
        if (p.y < 0 || p.y > height) p.vy *= -1;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = dotColor;
        ctx.fill();

        for (let j = i + 1; j < particles.length; j++) {
          const q = particles[j];
          const dx = p.x - q.x;
          const dy = p.y - q.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 160) {
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(q.x, q.y);
            ctx.strokeStyle = `${lineColor}${0.2 * (1 - dist / 160)})`;
            ctx.lineWidth = 1;
            ctx.stroke();
          }
        }
      }
      animationId = requestAnimationFrame(step);
    }

    resize();
    step();
    window.addEventListener("resize", resize);
    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none fixed inset-0 -z-10 h-full w-full opacity-90"
      aria-hidden="true"
    />
  );
}
