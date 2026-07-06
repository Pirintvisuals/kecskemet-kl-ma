/**
 * Ambient "cold-air" background: static blurred aurora blobs + CSS-animated
 * frost particles. Pure CSS (no JS/Framer) so it costs ~nothing to run —
 * the large blurred layers are painted once, not re-composited every frame.
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
];

export default function AuroraBackground({ dense = false }: { dense?: boolean }) {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {/* Base vertical gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(120%_80%_at_50%_-10%,#0c2b54_0%,#081123_45%,#050b18_100%)]" />

      {/* Aurora blobs — static (painted once) */}
      <div
        className="absolute -top-32 -left-24 h-[42rem] w-[42rem] rounded-full blur-[120px]"
        style={{
          background:
            "radial-gradient(circle at 30% 30%, rgba(10,108,212,0.5), transparent 60%)",
        }}
      />
      <div
        className="absolute top-10 right-[-6rem] h-[38rem] w-[38rem] rounded-full blur-[130px]"
        style={{
          background:
            "radial-gradient(circle at 60% 40%, rgba(72,168,240,0.4), transparent 62%)",
        }}
      />
      <div
        className="absolute bottom-[-10rem] left-1/3 h-[34rem] w-[34rem] rounded-full blur-[140px]"
        style={{
          background:
            "radial-gradient(circle at 50% 50%, rgba(127,212,255,0.28), transparent 60%)",
        }}
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

      {/* Frost particles — cheap CSS animations */}
      {(dense ? PARTICLES : PARTICLES.slice(0, 6)).map((p, i) => (
        <span
          key={i}
          className="absolute rounded-full bg-ice motion-reduce:animate-none"
          style={{
            left: `${p.x}%`,
            top: `${p.y}%`,
            width: p.s,
            height: p.s,
            boxShadow: "0 0 8px 2px rgba(127,212,255,0.55)",
            animation: `floatSlow ${p.d}s ease-in-out ${p.delay}s infinite, pulseGlow ${
              p.d * 0.8
            }s ease-in-out ${p.delay}s infinite`,
          }}
        />
      ))}
    </div>
  );
}
