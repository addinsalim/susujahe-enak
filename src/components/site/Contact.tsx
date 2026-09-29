import { MapPin, Clock, MessageCircle, Instagram, Facebook, Music2 } from "lucide-react";
import { useLang } from "@/i18n/LanguageProvider";
import { siteConfig, waLink } from "@/config/site";
import { Reveal } from "./Reveal";

export function Contact() {
  const { t } = useLang();

  const items = [
    { icon: MessageCircle, label: t.contact.whatsapp, value: siteConfig.whatsappDisplay },
    { icon: MapPin, label: t.contact.address, value: siteConfig.address },
    { icon: Clock, label: t.contact.hours, value: siteConfig.openHours },
  ];

  const socials = [
    { icon: Instagram, label: siteConfig.instagram, href: siteConfig.instagramUrl },
    { icon: Facebook, label: siteConfig.facebook, href: siteConfig.facebookUrl },
    { icon: Music2, label: siteConfig.tiktok, href: siteConfig.tiktokUrl },
  ];

  return (
    <section id="kontak" className="bg-cream py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-primary">
            {t.contact.eyebrow}
          </p>
          <h2 className="mt-3 text-3xl font-semibold sm:text-4xl lg:text-[2.75rem]">
            {t.contact.title}
          </h2>
          <p className="mt-4 text-muted-foreground">{t.contact.subtitle}</p>
        </Reveal>

        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          {items.map((item, i) => (
            <Reveal key={item.label} delay={i * 90}>
              <div className="h-full rounded-2xl border border-border bg-card p-6 shadow-soft">
                <span className="grid h-11 w-11 place-items-center rounded-xl bg-primary-soft text-primary">
                  <item.icon className="h-5 w-5" aria-hidden="true" />
                </span>
                <h3 className="mt-4 text-sm font-semibold uppercase tracking-wider text-muted-foreground">
                  {item.label}
                </h3>
                <p className="mt-1 text-base font-medium">{item.value}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={120} className="mt-6">
          <div className="flex flex-col items-center justify-between gap-5 rounded-2xl border border-border bg-card p-6 shadow-soft sm:flex-row">
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
                {t.contact.social}
              </h3>
              <ul className="mt-3 flex flex-wrap items-center gap-3">
                {socials.map((s) => (
                  <li key={s.label}>
                    <a
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-full border border-border px-4 py-2 text-sm font-medium transition-colors hover:bg-accent"
                    >
                      <s.icon className="h-4 w-4 text-primary" aria-hidden="true" />
                      {s.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <a
              href={waLink(t.cta.waMessage)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex shrink-0 items-center gap-2 rounded-full gradient-warm px-6 py-3 text-sm font-semibold text-primary-foreground shadow-soft transition-transform duration-200 hover:-translate-y-0.5"
            >
              <MessageCircle className="h-4 w-4" aria-hidden="true" />
              {t.contact.chat}
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
