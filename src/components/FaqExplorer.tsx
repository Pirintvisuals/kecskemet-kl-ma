"use client";

import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Plus, Search, X, HelpCircle, Sparkles, ArrowRight } from "lucide-react";
import { faqs, faqCategories, site } from "@/lib/site";
import Reveal from "./Reveal";

/**
 * Interactive GYIK experience: live search + category filter chips over the
 * shared `faqs` data, with an animated accordion. Richer than the plain <Faq/>
 * used on the homepage — this is the dedicated /gyik page.
 */
export default function FaqExplorer() {
  const [query, setQuery] = useState("");
  const [cat, setCat] = useState<string | null>(null);
  const [open, setOpen] = useState<string | null>(faqs[0]?.q ?? null);

  // Count per category for the chips.
  const counts = useMemo(() => {
    const m: Record<string, number> = {};
    for (const f of faqs) m[f.category] = (m[f.category] ?? 0) + 1;
    return m;
  }, []);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return faqs.filter((f) => {
      const matchesCat = !cat || f.category === cat;
      const matchesQuery =
        !q || f.q.toLowerCase().includes(q) || f.a.toLowerCase().includes(q);
      return matchesCat && matchesQuery;
    });
  }, [query, cat]);

  const chip =
    "rounded-full border px-4 py-2 text-sm font-medium transition-all duration-200 cursor-pointer";

  return (
    <section className="relative pb-24 sm:pb-28">
      <div className="mx-auto max-w-3xl px-6">
        {/* Search */}
        <Reveal>
          <div className="relative">
            <Search className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-brand-300" />
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Keressen a kérdések között… (pl. garancia, szivárgás, ár)"
              className="w-full rounded-2xl border border-white/10 bg-navy-950/60 py-4 pl-12 pr-11 text-white placeholder:text-muted/60 outline-none transition-colors focus:border-brand-400 focus:ring-2 focus:ring-brand-500/30"
            />
            {query && (
              <button
                type="button"
                onClick={() => setQuery("")}
                aria-label="Keresés törlése"
                className="absolute right-3 top-1/2 grid h-8 w-8 -translate-y-1/2 place-items-center rounded-full text-muted transition-colors hover:bg-white/10 hover:text-white cursor-pointer"
              >
                <X className="h-4 w-4" />
              </button>
            )}
          </div>
        </Reveal>

        {/* Category chips */}
        <Reveal delay={0.05}>
          <div className="mt-4 flex flex-wrap justify-center gap-2">
            <button
              type="button"
              onClick={() => setCat(null)}
              className={`${chip} ${
                cat === null
                  ? "border-brand-400 bg-brand-500/20 text-white ring-1 ring-brand-400/40"
                  : "border-white/10 bg-navy-800/40 text-brand-100/80 hover:border-brand-400/40 hover:text-white"
              }`}
            >
              Összes
              <span className="ml-1.5 text-xs text-muted">{faqs.length}</span>
            </button>
            {faqCategories.map((c) => (
              <button
                key={c}
                type="button"
                onClick={() => setCat(c === cat ? null : c)}
                className={`${chip} ${
                  cat === c
                    ? "border-brand-400 bg-brand-500/20 text-white ring-1 ring-brand-400/40"
                    : "border-white/10 bg-navy-800/40 text-brand-100/80 hover:border-brand-400/40 hover:text-white"
                }`}
              >
                {c}
                <span className="ml-1.5 text-xs text-muted">{counts[c] ?? 0}</span>
              </button>
            ))}
          </div>
        </Reveal>

        {/* Result count */}
        <p className="mt-6 text-center text-sm text-muted">
          {filtered.length === 0
            ? "Nincs találat"
            : `${filtered.length} kérdés${cat ? ` · ${cat}` : ""}`}
        </p>

        {/* Accordion */}
        <div className="mt-4 space-y-3">
          {filtered.map((f, i) => {
            const isOpen = open === f.q;
            return (
              <motion.div
                key={f.q}
                layout
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.25, delay: Math.min(i * 0.03, 0.2) }}
                className={`overflow-hidden rounded-2xl border transition-colors duration-300 ${
                  isOpen
                    ? "border-brand-400/40 bg-navy-800/70"
                    : "border-white/8 bg-navy-800/40"
                }`}
              >
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? null : f.q)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left cursor-pointer"
                >
                  <span>
                    <span className="mb-1 block text-[11px] font-semibold uppercase tracking-wider text-brand-300">
                      {f.category}
                    </span>
                    <span className="font-display text-base font-semibold text-white sm:text-lg">
                      {f.q}
                    </span>
                  </span>
                  <span
                    className={`grid h-8 w-8 shrink-0 place-items-center rounded-full bg-brand-500/15 text-brand-200 transition-transform duration-300 ${
                      isOpen ? "rotate-45" : ""
                    }`}
                  >
                    <Plus className="h-4 w-4" />
                  </span>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                    >
                      <div className="px-5 pb-5">
                        <p className="text-[15px] leading-relaxed text-muted">
                          {f.a}
                        </p>
                        {f.link && (
                          <a
                            href={f.link.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="mt-4 inline-flex items-center gap-2 rounded-full bg-warm-500 px-5 py-2.5 text-sm font-semibold text-white transition-all duration-200 hover:-translate-y-0.5 hover:bg-warm-600 cursor-pointer"
                          >
                            <Sparkles className="h-4 w-4" />
                            {f.link.label}
                            <ArrowRight className="h-4 w-4" />
                          </a>
                        )}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

        {/* Empty state */}
        {filtered.length === 0 && (
          <div className="mt-6 flex flex-col items-center gap-3 rounded-2xl border border-white/8 bg-navy-800/40 p-8 text-center">
            <span className="grid h-12 w-12 place-items-center rounded-2xl bg-brand-500/15 text-brand-300">
              <HelpCircle className="h-6 w-6" />
            </span>
            <p className="text-muted">
              Nincs a keresésnek megfelelő kérdés. Törölje a szűrőt, vagy hívjon
              minket – szívesen segítünk telefonon.
            </p>
            <div className="mt-1 flex flex-wrap justify-center gap-3">
              <button
                type="button"
                onClick={() => {
                  setQuery("");
                  setCat(null);
                }}
                className="rounded-full border border-white/15 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-white/5 cursor-pointer"
              >
                Szűrők törlése
              </button>
              <a
                href={site.phoneHref}
                className="rounded-full bg-warm-500 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-warm-600 cursor-pointer"
              >
                {site.phone}
              </a>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
