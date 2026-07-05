"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Phone, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { navLinks, site } from "@/lib/site";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-3 pt-3 sm:px-4 sm:pt-4">
      <nav
        className={`mx-auto flex max-w-7xl items-center justify-between rounded-2xl px-4 py-3 transition-all duration-300 sm:px-5 ${
          scrolled
            ? "glass-strong shadow-[0_10px_40px_-20px_rgba(0,0,0,0.9)]"
            : "border border-transparent"
        }`}
      >
        {/* Brand */}
        <a href="/" className="flex items-center gap-2.5 cursor-pointer">
          <Image
            src="/logo.png"
            alt="Kecskemét Klíma logó"
            width={38}
            height={38}
            className="h-9 w-9 object-contain"
            priority
          />
          <span className="font-display text-lg font-bold tracking-tight text-white">
            Kecskemét <span className="text-brand-300">Klíma</span>
          </span>
        </a>

        {/* Desktop links */}
        <ul className="hidden items-center gap-1 lg:flex">
          {navLinks.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="rounded-lg px-3 py-2 text-sm font-medium text-brand-100/80 transition-colors duration-200 hover:bg-white/5 hover:text-white cursor-pointer"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Desktop CTA */}
        <a
          href={site.phoneHref}
          className="hidden items-center gap-2 rounded-full bg-brand-500 px-5 py-2.5 text-sm font-semibold text-white shadow-[0_12px_30px_-12px_rgba(10,108,212,0.9)] transition-transform duration-200 hover:-translate-y-0.5 lg:inline-flex cursor-pointer"
        >
          <Phone className="h-4 w-4" />
          {site.phone}
        </a>

        {/* Mobile toggle */}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Menü bezárása" : "Menü megnyitása"}
          aria-expanded={open}
          className="grid h-10 w-10 place-items-center rounded-xl text-white transition-colors hover:bg-white/10 lg:hidden cursor-pointer"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.2 }}
            className="glass-strong mx-auto mt-2 max-w-7xl rounded-2xl p-3 lg:hidden"
          >
            <ul className="flex flex-col">
              {navLinks.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="block rounded-xl px-4 py-3 text-base font-medium text-brand-100 transition-colors hover:bg-white/5 hover:text-white cursor-pointer"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
            <a
              href={site.phoneHref}
              onClick={() => setOpen(false)}
              className="mt-2 flex items-center justify-center gap-2 rounded-xl bg-brand-500 px-5 py-3 font-semibold text-white cursor-pointer"
            >
              <Phone className="h-5 w-5" />
              {site.phone}
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
