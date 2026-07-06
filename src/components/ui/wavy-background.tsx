"use client";
/**
 * Wavy Background — from 21st.dev (Aceternity), heavily perf-optimised:
 *  - renders at half internal resolution (¼ the pixels)
 *  - GPU CSS blur on the <canvas> instead of per-frame ctx.filter (CPU)
 *  - throttled to ~30fps, paused when offscreen or tab hidden
 *  - respects prefers-reduced-motion (draws a single static frame)
 */
import { cn } from "@/lib/utils";
import React, { useEffect, useRef } from "react";
import { createNoise3D } from "simplex-noise";

export const WavyBackground = ({
  children,
  className,
  containerClassName,
  colors,
  waveWidth,
  backgroundFill,
  blur = 8,
  speed = "slow",
  waveOpacity = 0.5,
}: {
  children?: React.ReactNode;
  className?: string;
  containerClassName?: string;
  colors?: string[];
  waveWidth?: number;
  backgroundFill?: string;
  blur?: number;
  speed?: "slow" | "fast";
  waveOpacity?: number;
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const SCALE = 0.5; // internal resolution factor (¼ the pixel work)
    const waveColors = colors ?? ["#0a6cd4", "#38bdf8", "#7fd4ff"];
    const step = speed === "fast" ? 0.0018 : 0.0009;
    const lineW = (waveWidth || 34) * SCALE;
    const amp = 90 * SCALE;

    let w = 0,
      h = 0,
      nt = 0,
      raf = 0,
      last = 0;
    let running = true;
    const noise = createNoise3D();

    const resize = () => {
      w = canvas.width = Math.max(1, Math.floor(container.offsetWidth * SCALE));
      h = canvas.height = Math.max(1, Math.floor(container.offsetHeight * SCALE));
    };

    const draw = () => {
      nt += step;
      ctx.globalAlpha = 1;
      ctx.fillStyle = backgroundFill || "#050b18";
      ctx.fillRect(0, 0, w, h);
      ctx.globalAlpha = waveOpacity;
      ctx.lineWidth = lineW;
      for (let i = 0; i < waveColors.length; i++) {
        ctx.beginPath();
        ctx.strokeStyle = waveColors[i];
        for (let x = 0; x <= w; x += 14 * SCALE) {
          const y = noise(x / (800 * SCALE), 0.3 * i, nt) * amp;
          if (x === 0) ctx.moveTo(x, y + h * 0.5);
          else ctx.lineTo(x, y + h * 0.5);
        }
        ctx.stroke();
      }
    };

    resize();

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) {
      draw();
      window.addEventListener("resize", resize);
      return () => window.removeEventListener("resize", resize);
    }

    const loop = (t: number) => {
      raf = requestAnimationFrame(loop);
      if (!running) return;
      if (t - last < 33) return; // ~30fps cap
      last = t;
      draw();
    };
    raf = requestAnimationFrame(loop);

    const io = new IntersectionObserver(
      (entries) => {
        running = entries[0].isIntersecting && !document.hidden;
      },
      { threshold: 0 }
    );
    io.observe(container);
    const onVis = () => {
      running = !document.hidden;
    };
    document.addEventListener("visibilitychange", onVis);
    window.addEventListener("resize", resize);

    return () => {
      cancelAnimationFrame(raf);
      io.disconnect();
      document.removeEventListener("visibilitychange", onVis);
      window.removeEventListener("resize", resize);
    };
  }, [colors, waveWidth, backgroundFill, speed, waveOpacity]);

  return (
    <div
      ref={containerRef}
      className={cn("relative h-full w-full", containerClassName)}
    >
      <canvas
        ref={canvasRef}
        className="absolute inset-0 h-full w-full"
        style={{ filter: `blur(${blur}px)` }}
      />
      {children ? <div className={cn("relative z-10", className)}>{children}</div> : null}
    </div>
  );
};
