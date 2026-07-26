import { useEffect, useRef } from "react";
import { useReducedMotion } from "framer-motion";

interface Spark {
  x: number;
  y: number;
  vx: number;
  vy: number;
  r: number;
  color: string;
  twinkle: number;
  phase: number;
}

const COLORS = ["#E10600", "#FF6B35", "#FFD9A0", "#FFFFFF"];

/**
 * Campo de fagulhas em canvas (estética do deck) — custo mínimo, 60fps.
 * Com prefers-reduced-motion, desenha um sprinkle estático uma única vez.
 */
export default function SparkField({
  density = 55,
  className,
}: {
  density?: number;
  className?: string;
}) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const reduced = useReducedMotion();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let raf = 0;
    let running = true;
    let width = 0;
    let height = 0;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      width = rect.width;
      height = rect.height;
      canvas.width = Math.round(width * dpr);
      canvas.height = Math.round(height * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    resize();

    const spawn = (anywhere: boolean): Spark => ({
      x: Math.random() * width,
      y: anywhere ? Math.random() * height : height + 8,
      vx: (Math.random() - 0.35) * 0.3,
      vy: -(0.15 + Math.random() * 0.5),
      r: 0.6 + Math.random() * 1.5,
      color: COLORS[Math.floor(Math.random() * COLORS.length)],
      twinkle: 0.5 + Math.random(),
      phase: Math.random() * Math.PI * 2,
    });

    const sparks: Spark[] = Array.from({ length: density }, () => spawn(true));

    const drawStatic = () => {
      ctx.clearRect(0, 0, width, height);
      for (const s of sparks) {
        ctx.globalAlpha = 0.35;
        ctx.fillStyle = s.color;
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
        ctx.fill();
      }
      ctx.globalAlpha = 1;
    };

    const tick = (t: number) => {
      if (!running) return;
      ctx.clearRect(0, 0, width, height);
      for (let i = 0; i < sparks.length; i++) {
        const s = sparks[i];
        s.x += s.vx;
        s.y += s.vy;
        if (s.y < -8 || s.x < -8 || s.x > width + 8) sparks[i] = spawn(false);
        ctx.globalAlpha = 0.2 + 0.8 * Math.abs(Math.sin((t / 900) * s.twinkle + s.phase));
        ctx.fillStyle = s.color;
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
        ctx.fill();
      }
      ctx.globalAlpha = 1;
      raf = requestAnimationFrame(tick);
    };

    if (reduced) {
      drawStatic();
    } else {
      raf = requestAnimationFrame(tick);
    }

    const onResize = () => {
      resize();
      if (reduced) drawStatic();
    };
    const onVisibility = () => {
      running = !document.hidden;
      if (running && !reduced) raf = requestAnimationFrame(tick);
    };
    window.addEventListener("resize", onResize);
    document.addEventListener("visibilitychange", onVisibility);

    return () => {
      running = false;
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", onResize);
      document.removeEventListener("visibilitychange", onVisibility);
    };
  }, [density, reduced]);

  return <canvas ref={canvasRef} className={className} aria-hidden />;
}
