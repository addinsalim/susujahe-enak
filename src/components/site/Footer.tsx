import { Instagram, Facebook, Music2, MessageCircle } from "lucide-react";
import { Logo } from "./Logo";
import { useLang } from "@/i18n/LanguageProvider";
import { siteConfig, waLink } from "@/config/site";
import { cn } from "@/lib/utils";

export function Footer() {
  const { t, lang, setLang } = useLang();

  const links = [
    { href: "#beranda", label: t.nav.home },
    { href: "#tentang", label: t.nav.about },
    { href: "#manfaat", label: t.nav.benefits },
    { href: "#produk", label: t.nav.products },
    { href: "#galeri", label: t.nav.gallery },
    { href: "#faq", label: t.nav.faq },
    { href: "#kontak", label: t.nav.contact },
  ];

  const socials = [
    { icon: Instagram, href: siteConfig.instagramUrl, label: "Instagram" },
    { icon: Facebook, href: siteConfig.facebookUrl, label: "Facebook" },
    { icon: Music2, href: siteConfig.tiktokUrl, label: "TikTok" },
    { icon: MessageCircle, href: waLink(t.cta.waMessage), label: "WhatsApp" },
  ];

  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 lg:grid-cols-4 lg:px-8">
        <div className="lg:col-span-2">
          <Logo />
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted-foreground">
            {t.footer.desc}
          </p>
          <ul className="mt-5 flex items-center gap-2">
            {socials.map((s) => (
              <li key={s.label}>
                <a
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="grid h-10 w-10 place-items-center rounded-full border border-border text-muted-foreground transition-colors hover:bg-primary hover:text-primary-foreground"
                >
                  <s.icon className="h-4 w-4" aria-hidden="true" />
                </a>
              </li>
            ))}
          </ul>
        </div>

        <nav aria-label="Footer">
          <h2 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
            {t.footer.menu}
          </h2>
          <ul className="mt-4 space-y-2">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className="text-sm text-foreground/80 transition-colors hover:text-primary"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h2 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
            {t.footer.contact}
          </h2>
          <ul className="mt-4 space-y-2 text-sm text-foreground/80">
            <li>{siteConfig.whatsappDisplay}</li>
            <li>{siteConfig.address}</li>
            <li>{siteConfig.email}</li>
            <li>{siteConfig.openHours}</li>
          </ul>

          <h2 className="mt-6 text-sm font-semibold uppercase tracking-wider text-muted-foreground">
            {t.footer.language}
          </h2>
          <div className="mt-3 flex gap-2">
            {(["id", "en"] as const).map((code) => (
              <button
                key={code}
                type="button"
                onClick={() => setLang(code)}
                aria-pressed={lang === code}
                className={cn(
                  "rounded-full border px-3 py-1.5 text-xs font-semibold transition-colors",
                  lang === code
                    ? "border-primary bg-primary text-primary-foreground"
                    : "border-border text-muted-foreground hover:bg-accent",
                )}
              >
                {code === "id" ? "🇮🇩 Indonesia" : "🇬🇧 English"}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="border-t border-border py-6">
        <p className="px-4 text-center text-xs text-muted-foreground">
          © {new Date().getFullYear()} {siteConfig.brandFullName}. {t.footer.rights}
        </p>
      </div>
    </footer>
  );
}
