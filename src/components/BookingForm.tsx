"use client";

import { useMemo, useState } from "react";
import {
  CalendarCheck,
  User,
  Phone,
  Mail,
  MapPin,
  Wrench,
  Loader2,
  CheckCircle2,
  AlertTriangle,
  ArrowRight,
} from "lucide-react";
import {
  BOOKING_ENDPOINT,
  MAX_LEAD_DAYS,
  MIN_LEAD_DAYS,
  timeSlots,
} from "@/lib/booking";
import { services, site } from "@/lib/site";

type Status = "idle" | "loading" | "success" | "error";

/** Local YYYY-MM-DD (avoids UTC off-by-one from toISOString). */
function toISODate(d: Date) {
  const y = d.getFullYear();
  const m = String(d.getMonth() + 1).padStart(2, "0");
  const day = String(d.getDate()).padStart(2, "0");
  return `${y}-${m}-${day}`;
}

function addDays(base: Date, days: number) {
  const d = new Date(base);
  d.setDate(d.getDate() + days);
  return d;
}

const HU_DATE = new Intl.DateTimeFormat("hu-HU", {
  year: "numeric",
  month: "long",
  day: "numeric",
  weekday: "long",
});

export default function BookingForm() {
  const today = useMemo(() => new Date(), []);
  const minDate = useMemo(() => toISODate(addDays(today, MIN_LEAD_DAYS)), [today]);
  const maxDate = useMemo(() => toISODate(addDays(today, MAX_LEAD_DAYS)), [today]);

  const [service, setService] = useState("");
  const [date, setDate] = useState("");
  const [slot, setSlot] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [message, setMessage] = useState("");
  const [company, setCompany] = useState(""); // honeypot

  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const prettyDate = useMemo(() => {
    if (!date) return "";
    const [y, m, d] = date.split("-").map(Number);
    return HU_DATE.format(new Date(y, m - 1, d));
  }, [date]);

  const slotLabel = timeSlots.find((s) => s.id === slot)?.label ?? "";

  /** Prefilled mailto as a graceful fallback if the PHP endpoint is down. */
  const mailtoFallback = useMemo(() => {
    const subject = encodeURIComponent(`Időpontfoglalás – ${name || "weboldal"}`);
    const body = encodeURIComponent(
      [
        `Név: ${name}`,
        `Telefon: ${phone}`,
        email ? `E-mail: ${email}` : "",
        service ? `Szolgáltatás: ${service}` : "",
        `Kért dátum: ${date}${prettyDate ? ` (${prettyDate})` : ""}`,
        slotLabel ? `Idősáv: ${slotLabel}` : "",
        address ? `Helyszín: ${address}` : "",
        "",
        "Üzenet:",
        message,
      ]
        .filter(Boolean)
        .join("\n")
    );
    return `${site.emailHref}?subject=${subject}&body=${body}`;
  }, [name, phone, email, service, date, prettyDate, slotLabel, address, message]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");

    try {
      const res = await fetch(BOOKING_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          phone,
          email,
          service,
          date,
          slot: slotLabel || slot,
          address,
          message,
          company,
        }),
      });

      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      const data = await res.json().catch(() => ({ ok: res.ok }));
      if (!data.ok) throw new Error(data.error || "unknown");

      setStatus("success");
      window.scrollTo({ top: 0, behavior: "smooth" });
    } catch {
      setStatus("error");
      setErrorMsg(
        "Az automatikus küldés most nem sikerült. Kérjük, küldje el a foglalást e-mailben az alábbi gombbal, vagy hívjon minket telefonon."
      );
    }
  };

  const field =
    "w-full rounded-xl border border-white/10 bg-navy-950/60 px-4 py-3 text-white placeholder:text-muted/60 outline-none transition-colors focus:border-brand-400 focus:ring-2 focus:ring-brand-500/30";

  // ---------------- SUCCESS STATE ----------------
  if (status === "success") {
    return (
      <div className="glass-strong rounded-3xl p-8 text-center sm:p-10">
        <div className="mx-auto grid h-16 w-16 place-items-center rounded-2xl bg-mint/15 text-mint ring-1 ring-mint/30">
          <CheckCircle2 className="h-9 w-9" />
        </div>
        <h3 className="mt-6 font-display text-2xl font-bold text-white">
          Köszönjük, megkaptuk a foglalását!
        </h3>
        <p className="mx-auto mt-3 max-w-md text-muted">
          Hamarosan felvesszük Önnel a kapcsolatot a megadott telefonszámon, és
          véglegesítjük a pontos időpontot.
        </p>

        <dl className="mx-auto mt-7 grid max-w-sm gap-2 rounded-2xl border border-white/8 bg-navy-800/50 p-5 text-left text-sm">
          {service && (
            <div className="flex justify-between gap-4">
              <dt className="text-muted">Szolgáltatás</dt>
              <dd className="text-right font-medium text-white">{service}</dd>
            </div>
          )}
          <div className="flex justify-between gap-4">
            <dt className="text-muted">Kért dátum</dt>
            <dd className="text-right font-medium text-white">{prettyDate || date}</dd>
          </div>
          {slotLabel && (
            <div className="flex justify-between gap-4">
              <dt className="text-muted">Idősáv</dt>
              <dd className="text-right font-medium text-white">{slotLabel}</dd>
            </div>
          )}
        </dl>

        <a
          href={site.phoneHref}
          className="mt-7 inline-flex items-center justify-center gap-2 rounded-full bg-warm-500 px-6 py-3 font-semibold text-white transition-all duration-200 hover:-translate-y-0.5 hover:bg-warm-600 cursor-pointer"
        >
          <Phone className="h-4 w-4" />
          Azonnali egyeztetés telefonon
        </a>
      </div>
    );
  }

  // ---------------- FORM ----------------
  return (
    <form onSubmit={handleSubmit} className="space-y-7">
      {/* Step 1 – service */}
      <fieldset>
        <legend className="mb-3 flex items-center gap-2 font-display text-sm font-semibold uppercase tracking-wider text-brand-200">
          <Wrench className="h-4 w-4" />
          1. Melyik szolgáltatásra?
        </legend>
        <div className="grid gap-2.5 sm:grid-cols-2">
          {services.map((s) => {
            const active = service === s.title;
            return (
              <button
                key={s.id}
                type="button"
                onClick={() => setService(s.title)}
                className={`rounded-xl border px-4 py-3 text-left transition-all duration-200 cursor-pointer ${
                  active
                    ? "border-brand-400 bg-brand-500/15 ring-1 ring-brand-400/40"
                    : "border-white/10 bg-navy-950/50 hover:border-brand-400/40"
                }`}
              >
                <span className="block font-semibold text-white">{s.title}</span>
                <span className="mt-0.5 block text-xs text-muted">{s.short}</span>
              </button>
            );
          })}
        </div>
      </fieldset>

      {/* Step 2 – date + slot */}
      <fieldset>
        <legend className="mb-3 flex items-center gap-2 font-display text-sm font-semibold uppercase tracking-wider text-brand-200">
          <CalendarCheck className="h-4 w-4" />
          2. Mikorra kéri?
        </legend>
        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <label htmlFor="bk-date" className="mb-1.5 block text-sm font-medium text-brand-100">
              Kért dátum
            </label>
            <input
              id="bk-date"
              type="date"
              required
              min={minDate}
              max={maxDate}
              value={date}
              onChange={(e) => setDate(e.target.value)}
              className={`${field} [color-scheme:dark] cursor-pointer`}
            />
            {prettyDate && (
              <p className="mt-1.5 text-xs text-brand-300">{prettyDate}</p>
            )}
          </div>
          <div>
            <span className="mb-1.5 block text-sm font-medium text-brand-100">
              Melyik idősáv a legjobb?
            </span>
            <div className="flex flex-wrap gap-2">
              {timeSlots.map((t) => {
                const active = slot === t.id;
                return (
                  <button
                    key={t.id}
                    type="button"
                    onClick={() => setSlot(t.id)}
                    title={t.hint}
                    className={`rounded-full border px-3.5 py-2 text-sm font-medium transition-all duration-200 cursor-pointer ${
                      active
                        ? "border-brand-400 bg-brand-500/20 text-white ring-1 ring-brand-400/40"
                        : "border-white/10 bg-navy-950/50 text-brand-100/80 hover:border-brand-400/40 hover:text-white"
                    }`}
                  >
                    {t.label}
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </fieldset>

      {/* Step 3 – details */}
      <fieldset>
        <legend className="mb-3 flex items-center gap-2 font-display text-sm font-semibold uppercase tracking-wider text-brand-200">
          <User className="h-4 w-4" />
          3. Az Ön adatai
        </legend>
        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <label htmlFor="bk-name" className="mb-1.5 block text-sm font-medium text-brand-100">
              Név
            </label>
            <input
              id="bk-name"
              type="text"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Az Ön neve"
              className={field}
            />
          </div>
          <div>
            <label htmlFor="bk-phone" className="mb-1.5 block text-sm font-medium text-brand-100">
              Telefonszám
            </label>
            <input
              id="bk-phone"
              type="tel"
              required
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="+36 30 000 0000"
              className={field}
            />
          </div>
          <div>
            <label htmlFor="bk-email" className="mb-1.5 block text-sm font-medium text-brand-100">
              E-mail <span className="text-muted">(nem kötelező)</span>
            </label>
            <input
              id="bk-email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="pelda@email.hu"
              className={field}
            />
          </div>
          <div>
            <label htmlFor="bk-address" className="mb-1.5 block text-sm font-medium text-brand-100">
              Helyszín <span className="text-muted">(cím / település)</span>
            </label>
            <input
              id="bk-address"
              type="text"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              placeholder="Pl. Kecskemét, Fő tér 1."
              className={field}
            />
          </div>
        </div>

        <div className="mt-4">
          <label htmlFor="bk-message" className="mb-1.5 block text-sm font-medium text-brand-100">
            Megjegyzés <span className="text-muted">(nem kötelező)</span>
          </label>
          <textarea
            id="bk-message"
            rows={3}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Pl. 2 db klíma telepítése egy 3 szobás lakásba, a kültéri egység az erkélyre kerülne…"
            className={`${field} resize-none`}
          />
        </div>

        {/* Honeypot — hidden from users, catches bots */}
        <div className="absolute left-[-9999px] top-0" aria-hidden="true">
          <label htmlFor="bk-company">Cég (ne töltse ki)</label>
          <input
            id="bk-company"
            type="text"
            tabIndex={-1}
            autoComplete="off"
            value={company}
            onChange={(e) => setCompany(e.target.value)}
          />
        </div>
      </fieldset>

      {status === "error" && (
        <div className="flex items-start gap-3 rounded-xl border border-warm-400/40 bg-warm-500/10 p-4 text-sm text-warm-300">
          <AlertTriangle className="mt-0.5 h-5 w-5 shrink-0" />
          <div>
            <p>{errorMsg}</p>
            <div className="mt-3 flex flex-wrap gap-3">
              <a
                href={mailtoFallback}
                className="inline-flex items-center gap-2 rounded-lg bg-warm-500 px-4 py-2 font-semibold text-white transition-colors hover:bg-warm-600 cursor-pointer"
              >
                <Mail className="h-4 w-4" />
                Küldés e-mailben
              </a>
              <a
                href={site.phoneHref}
                className="inline-flex items-center gap-2 rounded-lg border border-white/15 px-4 py-2 font-semibold text-white transition-colors hover:bg-white/5 cursor-pointer"
              >
                <Phone className="h-4 w-4" />
                {site.phone}
              </a>
            </div>
          </div>
        </div>
      )}

      <div>
        <button
          type="submit"
          disabled={status === "loading"}
          className="group flex w-full items-center justify-center gap-2 rounded-xl bg-warm-500 px-6 py-4 font-semibold text-white shadow-[0_16px_40px_-14px_rgba(249,115,22,0.9)] transition-all duration-200 hover:-translate-y-0.5 hover:bg-warm-600 disabled:cursor-not-allowed disabled:opacity-70 cursor-pointer"
        >
          {status === "loading" ? (
            <>
              <Loader2 className="h-5 w-5 animate-spin" />
              Foglalás küldése…
            </>
          ) : (
            <>
              <CalendarCheck className="h-5 w-5" />
              Időpont foglalása
              <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
            </>
          )}
        </button>
        <p className="mt-3 flex items-center justify-center gap-1.5 text-center text-xs text-muted">
          <MapPin className="h-3.5 w-3.5" />
          Ingyenes, kötelezettségmentes foglalás · visszaigazolás telefonon
        </p>
      </div>
    </form>
  );
}
