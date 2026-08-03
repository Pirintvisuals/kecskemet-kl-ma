import { focusFor } from "@/lib/photoFocus";

/**
 * Framed real photo — branded rounded frame, subtle bottom gradient and a
 * gentle zoom on hover. Drop-in replacement for ImagePlaceholder once real
 * reference photos are supplied. Uses a plain <img> (the site is a static
 * export with next/image optimization disabled).
 *
 * When no objectPosition is passed, the per-photo focal point from
 * photoFocus.ts is used so the AC unit stays in frame at any crop.
 */
export default function Photo({
  src,
  alt,
  className = "",
  imgClassName = "",
  priority = false,
  fit = "cover",
  objectPosition,
}: PhotoProps) {
  const position = objectPosition ?? focusFor(src);
  return (
    <div
      className={`group relative overflow-hidden rounded-2xl border border-white/10 bg-navy-800/40 shadow-[0_24px_60px_-30px_rgba(0,0,0,0.8)] ${className}`}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={src}
        alt={alt}
        loading={priority ? "eager" : "lazy"}
        style={fit === "cover" ? { objectPosition: position } : undefined}
        className={`h-full w-full ${fit === "contain" ? "object-contain" : "object-cover"} transition-transform duration-700 ease-out group-hover:scale-[1.04] ${imgClassName}`}
      />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-navy-950/35 via-transparent to-transparent" />
      <div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-inset ring-white/10" />
    </div>
  );
}

type PhotoProps = {
  src: string;
  alt: string;
  className?: string;
  imgClassName?: string;
  priority?: boolean;
  /** "cover" fills the frame (may crop); "contain" shows the entire image. */
  fit?: "cover" | "contain";
  /** Focal point for "cover" crops, e.g. "center 25%" — keeps the AC in view. */
  objectPosition?: string;
};
