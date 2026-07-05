"use client";

import { motion } from "framer-motion";

/**
 * Ambient "cold-air" background: layered animated aurora blobs in brand blues,
 * a faint grid, and drifting frost particles. Purely decorative.
 * Particle positions are deterministic to avoid hydration mismatch on export.
 */

const PARTICLES = [
  { x: 8, y: 22, s: 3, d: 7, delay: 0 },
  { x: 18, y: 68, s: 2, d: 9, delay: 1.2 },
  { x: 27, y: 14, s: 4, d: 8, delay: 0.5 },
  { x: 39, y: 82, s: 2, d: 11, delay: 2 },
  { x: 48, y: 34, s: 3, d: 7.5, delay: 0.8 },
  { x: 58, y: 72, s: 2, d: 10, delay: 1.6 },
  { x: 66, y: 20, s: 4, d: 8.5, delay: 0.3 },
  { x: 74, y: 58, s: 2, d: 9.5, delay: 2.4 },
  { x: 83, y: 30, s: 3, d: 7, delay: 1 },
  { x: 91, y: 76, s: 2, d: 12, delay: 0.6 },
  { x: 14, y: 46, s: 2, d: 10.5, delay: 1.9 },
  { x: 52, y: 12, s: 3, d: 8, delay: 1.3 },
  { x: 34, y: 52, s: 2, d: 9, delay: 0.2 },
  { x: 78, y: 88, s: 3, d: 11.5, delay: 2.1 },
  { x: 96, y: 44, s: 2, d: 7.8, delay: 0.9 },
];

export default function AuroraBackground({ dense = false }: { dense?: boolean }) {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {/* Base vertical gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(120%_80%_at_50%_-10%,#0c2b54_0%,#081123_45%,#050b18_100%)]" />

      {/* Aurora blobs */}
      <motion.div
        aria-hidden
        className="absolute -top-32 -left-24 h-[42rem] w-[42rem] rounded-full blur-[120px]"
        style={{
          background:
            "radial-gradient(circle at 30% 30%, rgba(10,108,212,0.55), transparent 60%)",
        }}
        animate={{ x: [0, 60, 0], y: [0, 40, 0], scale: [1, 1.15, 1] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        aria-hidden
        className="absolute top-10 right-[-6rem] h-[38rem] w-[38rem] rounded-full blur-[130px]"
        style={{
          background:
            "radial-gradient(circle at 60% 40%, rgba(72,168,240,0.45), transparent 62%)",
        }}
        animate={{ x: [0, -50, 0], y: [0, 60, 0], scale: [1.1, 1, 1.1] }}
        transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        aria-hidden
        className="absolute bottom-[-10rem] left-1/3 h-[34rem] w-[34rem] rounded-full blur-[140px]"
        style={{
          background:
            "radial-gradient(circle at 50% 50%, rgba(127,212,255,0.30), transparent 60%)",
        }}
        animate={{ x: [0, 40, 0], y: [0, -40, 0], scale: [1, 1.2, 1] }}
        transition={{ duration: 26, repeat: Infinity, ease: "easeInOut" }}
      />
      {/* Warm glow — the "meleg kint / hűvös bent" climate duality */}
      <motion.div
        aria-hidden
        className="absolute -bottom-24 right-[-4rem] h-[30rem] w-[30rem] rounded-full blur-[150px]"
        style={{
          background:
            "radial-gradient(circle at 50% 50%, rgba(249,115,22,0.26), transparent 62%)",
        }}
        animate={{ x: [0, -30, 0], y: [0, 30, 0], scale: [1.05, 1, 1.05] }}
        transition={{ duration: 24, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Subtle grid */}
      <div
        className="absolute inset-0 opacity-[0.15]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(116,178,247,0.25) 1px, transparent 1px), linear-gradient(90deg, rgba(116,178,247,0.25) 1px, transparent 1px)",
          backgroundSize: "56px 56px",
          maskImage:
            "radial-gradient(100% 70% at 50% 0%, #000 40%, transparent 100%)",
          WebkitMaskImage:
            "radial-gradient(100% 70% at 50% 0%, #000 40%, transparent 100%)",
        }}
      />

      {/* Frost particles */}
      {PARTICLES.map((p, i) => (
        <motion.span
          key={i}
          className="absolute rounded-full bg-ice"
          style={{
            left: `${p.x}%`,
            top: `${p.y}%`,
            width: p.s,
            height: p.s,
            boxShadow: "0 0 8px 2px rgba(127,212,255,0.6)",
            opacity: dense ? 0.7 : 0.5,
          }}
          animate={{ y: [0, -22, 0], opacity: [0.15, 0.8, 0.15] }}
          transition={{
            duration: p.d,
            delay: p.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}
