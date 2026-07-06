import { Phone, Mail, Clock, MapPin } from "lucide-react";
import { site } from "@/lib/site";
import Reveal from "./Reveal";
import ContactForm from "./ContactForm";

export default function ContactCTA() {
  const details = [
    { icon: Phone, label: "Telefon", value: site.phone, href: site.phoneHref },
    { icon: Mail, label: "E-mail", value: site.email, href: site.emailHref },
    { icon: Clock, label: "Nyitvatartás", value: site.hours },
    { icon: MapPin, label: "Cím", value: site.address },
  ];

  return (
    <section id="kapcsolat" className="relative py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal>
          <div className="relative overflow-hidden rounded-[2rem] border border-brand-400/20 bg-gradient-to-br from-navy-800/90 to-navy-900/90 p-8 sm:p-12">
            {/* glow accents */}
            <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-brand-500/25 blur-3xl" />
            <div className="pointer-events-none absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-sky-glow/15 blur-3xl" />

            <div className="relative grid gap-12 lg:grid-cols-2">
              {/* Left: pitch + details */}
              <div>
                <span className="inline-flex items-center gap-2 rounded-full border border-brand-400/25 bg-brand-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-brand-200">
                  Kapcsolat
                </span>
                <h2 className="mt-4 font-display text-3xl font-bold tracking-tight text-white sm:text-4xl">
                  Kérjen ingyenes{" "}
                  <span className="text-brand-300">árajánlatot</span> még ma
                </h2>
                <p className="mt-4 max-w-md text-lg leading-relaxed text-muted">
                  Hívjon telefonon a leggyorsabb válaszért, vagy küldjön üzenetet –
                  hamarosan felvesszük Önnel a kapcsolatot.
                </p>

                <div className="mt-8 grid gap-4 sm:grid-cols-2">
                  {details.map((d) => {
                    const Inner = (
                      <div className="flex items-start gap-3 rounded-xl border border-white/8 bg-navy-800/50 p-4 transition-colors hover:border-brand-400/40">
                        <div className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-brand-500/15 text-brand-200">
                          <d.icon className="h-5 w-5" />
                        </div>
                        <div className="min-w-0">
                          <p className="text-xs uppercase tracking-wide text-muted">
                            {d.label}
                          </p>
                          <p className="truncate font-medium text-white">
                            {d.value}
                          </p>
                        </div>
                      </div>
                    );
                    return d.href ? (
                      <a key={d.label} href={d.href} className="cursor-pointer">
                        {Inner}
                      </a>
                    ) : (
                      <div key={d.label}>{Inner}</div>
                    );
                  })}
                </div>
              </div>

              {/* Right: form */}
              <div className="glass-strong rounded-2xl p-6 sm:p-7">
                <ContactForm />
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
