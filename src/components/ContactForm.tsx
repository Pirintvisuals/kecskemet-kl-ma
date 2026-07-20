"use client";

import { useState } from "react";
import { Send } from "lucide-react";
import { services, site } from "@/lib/site";

/**
 * Reusable contact form. Builds a prefilled mailto: on submit so it works
 * on static hosting (no server needed).
 *  - `withService` adds a service dropdown.
 *  - `detailed` adds e-mail, address, property type and preferred-callback
 *    fields (used on the Kapcsolat page for a fuller enquiry).
 */
export default function ContactForm({
  withService = false,
  detailed = false,
}: {
  withService?: boolean;
  detailed?: boolean;
}) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [service, setService] = useState("");
  const [address, setAddress] = useState("");
  const [propertyType, setPropertyType] = useState("");
  const [preferred, setPreferred] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const svc = service ? ` – ${service}` : "";
    const subject = encodeURIComponent(
      `Klíma árajánlatkérés${svc} – ${name || "weboldal"}`
    );
    const body = encodeURIComponent(
      [
        `Név: ${name}`,
        `Telefon: ${phone}`,
        detailed && email ? `E-mail: ${email}` : "",
        service ? `Szolgáltatás: ${service}` : "",
        detailed && address ? `Helyszín: ${address}` : "",
        detailed && propertyType ? `Ingatlan típusa: ${propertyType}` : "",
        detailed && preferred ? `Mikor hívjuk: ${preferred}` : "",
        "",
        "Üzenet:",
        message,
      ]
        .filter((l) => l !== "")
        .join("\n")
    );
    window.location.href = `${site.emailHref}?subject=${subject}&body=${body}`;
  };

  const field =
    "w-full rounded-xl border border-white/10 bg-navy-950/60 px-4 py-3 text-white placeholder:text-muted/60 outline-none transition-colors focus:border-brand-400 focus:ring-2 focus:ring-brand-500/30";
  const labelCls = "mb-1.5 block text-sm font-medium text-brand-100";

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className={detailed ? "grid gap-4 sm:grid-cols-2" : ""}>
        <div>
          <label htmlFor="cf-name" className={labelCls}>Név</label>
          <input
            id="cf-name"
            type="text"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Az Ön neve"
            className={field}
          />
        </div>

        <div className={detailed ? "" : "mt-4"}>
          <label htmlFor="cf-phone" className={labelCls}>Telefonszám</label>
          <input
            id="cf-phone"
            type="tel"
            required
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="+36 30 000 0000"
            className={field}
          />
        </div>
      </div>

      {detailed && (
        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <label htmlFor="cf-email" className={labelCls}>
              E-mail <span className="text-muted">(nem kötelező)</span>
            </label>
            <input
              id="cf-email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="pelda@email.hu"
              className={field}
            />
          </div>
          <div>
            <label htmlFor="cf-address" className={labelCls}>
              Helyszín <span className="text-muted">(település / cím)</span>
            </label>
            <input
              id="cf-address"
              type="text"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              placeholder="Pl. Kecskemét, Fő tér 1."
              className={field}
            />
          </div>
        </div>
      )}

      {withService && (
        <div className={detailed ? "grid gap-4 sm:grid-cols-2" : ""}>
          <div>
            <label htmlFor="cf-service" className={labelCls}>
              Melyik szolgáltatás érdekli?
            </label>
            <select
              id="cf-service"
              value={service}
              onChange={(e) => setService(e.target.value)}
              className={`${field} cursor-pointer`}
            >
              <option value="">Válasszon…</option>
              {services.map((s) => (
                <option key={s.id} value={s.title}>
                  {s.title}
                </option>
              ))}
              <option value="Egyéb / nem tudom">Egyéb / nem tudom</option>
            </select>
          </div>

          {detailed && (
            <div>
              <label htmlFor="cf-property" className={labelCls}>
                Ingatlan típusa
              </label>
              <select
                id="cf-property"
                value={propertyType}
                onChange={(e) => setPropertyType(e.target.value)}
                className={`${field} cursor-pointer`}
              >
                <option value="">Válasszon…</option>
                <option value="Lakás">Lakás</option>
                <option value="Családi ház">Családi ház</option>
                <option value="Iroda / üzlethelyiség">Iroda / üzlethelyiség</option>
                <option value="Egyéb">Egyéb</option>
              </select>
            </div>
          )}
        </div>
      )}

      {detailed && (
        <div>
          <label htmlFor="cf-preferred" className={labelCls}>
            Mikor hívjuk vissza a legszívesebben?
          </label>
          <select
            id="cf-preferred"
            value={preferred}
            onChange={(e) => setPreferred(e.target.value)}
            className={`${field} cursor-pointer`}
          >
            <option value="">Mindegy / bármikor</option>
            <option value="Reggel (8–10)">Reggel (8–10)</option>
            <option value="Délelőtt (10–12)">Délelőtt (10–12)</option>
            <option value="Kora délután (12–14)">Kora délután (12–14)</option>
            <option value="Délután (14–16)">Délután (14–16)</option>
          </select>
        </div>
      )}

      <div>
        <label htmlFor="cf-message" className={labelCls}>Miben segíthetünk?</label>
        <textarea
          id="cf-message"
          rows={detailed ? 5 : 4}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Pl. 2 db klíma telepítése egy 3 szobás lakásba…"
          className={`${field} resize-none`}
        />
      </div>

      <button
        type="submit"
        className="group flex w-full items-center justify-center gap-2 rounded-xl bg-warm-500 px-6 py-3.5 font-semibold text-white shadow-[0_16px_40px_-14px_rgba(249,115,22,0.9)] transition-all duration-200 hover:-translate-y-0.5 hover:bg-warm-600 cursor-pointer"
      >
        <Send className="h-4 w-4" />
        Üzenet küldése
      </button>
      <p className="text-center text-xs text-muted">
        A gomb megnyitja levelezőjét az előre kitöltött üzenettel.
      </p>
    </form>
  );
}
