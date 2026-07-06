import { ImagePlus } from "lucide-react";

/**
 * Obvious, intentional photo slot. Makes it unmistakable that a real photo
 * belongs here (the client will supply photos later). Looks branded, not broken.
 */
export default function ImagePlaceholder({
  label,
  hint,
  className = "",
  minH = "min-h-[220px]",
  align = "center",
}: {
  label: string;
  hint?: string;
  className?: string;
  minH?: string;
  align?: "center" | "top";
}) {
  return (
    <div
      className={`group relative flex ${minH} ${
        align === "top" ? "items-start pt-12" : "items-center"
      } justify-center overflow-hidden rounded-2xl border-2 border-dashed border-brand-400/30 bg-[repeating-linear-gradient(135deg,rgba(116,178,247,0.05)_0px,rgba(116,178,247,0.05)_12px,transparent_12px,transparent_24px)] p-6 text-center transition-colors duration-300 hover:border-brand-400/60 ${className}`}
    >
      {/* corner tag */}
      <span className="absolute left-3 top-3 rounded-md bg-brand-500/20 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-brand-200">
        Fotó helye
      </span>

      <div className="flex flex-col items-center gap-3">
        <span className="grid h-14 w-14 place-items-center rounded-full bg-brand-500/15 text-brand-300 ring-1 ring-brand-400/25 transition-transform duration-300 group-hover:scale-105">
          <ImagePlus className="h-7 w-7" />
        </span>
        <div>
          <p className="font-display text-sm font-bold text-brand-100">{label}</p>
          {hint && <p className="mt-1 text-xs text-muted">{hint}</p>}
        </div>
        <p className="text-[11px] text-muted/70">
          (ide kerül a saját fénykép)
        </p>
      </div>
    </div>
  );
}
