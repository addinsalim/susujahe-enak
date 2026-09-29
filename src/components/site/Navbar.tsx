import { useEffect, useState } from "react";
import { Menu, X, Globe } from "lucide-react";
import { Logo } from "./Logo";
import { useLang } from "@/i18n/LanguageProvider";
import { siteConfig, waLink } from "@/config/site";
import { cn } from "@/lib/utils";

export function Navbar() {
  const { t, lang, setLang } = useLang();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const links = [
    { href: "#beranda", label: t.nav.home },
    { href: "#tentang", label: t.nav.about },
    { href: "#manfaat", label: t.nav.benefits },
    { href: "#produk", label: t.nav.products },
    { href: "#galeri", label: t.nav.gallery },
    { href: "#faq", label: t.nav.faq },
    { href: "#kontak", label: t.nav.contact },
  ];

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled
          ? "border-b border-border bg-background/85 shadow-soft backdrop-blur-xl"
          : "bg-background/40 backdrop-blur-sm",
      )}
    >
      <nav
        aria-label="Navigasi utama"
        className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:h-20 lg:px-8"
      >
        <a href="#beranda" className="shrink-0" onClick={() => setOpen(false)}>
          <Logo />
        </a>

        <ul className="hidden items-center gap-1 lg:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="rounded-full px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-accent hover:text-accent-foreground"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <LangSwitch lang={lang} setLang={setLang} />
          <a
            href={waLink(t.product.waMessage)}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden rounded-full gradient-warm px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-soft transition-transform duration-200 hover:-translate-y-0.5 hover:shadow-glow sm:inline-flex"
          >
            {t.nav.order}
          </a>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-label={open ? "Tutup menu" : "Buka menu"}
            className="grid h-10 w-10 place-items-center rounded-full border border-border bg-card text-foreground transition-colors hover:bg-accent lg:hidden"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      {/* Menu mobile */}
      <div
        className={cn(
          "overflow-hidden border-t border-border bg-background transition-[max-height,opacity] duration-300 lg:hidden",
          open ? "max-h-[32rem] opacity-100" : "max-h-0 opacity-0",
        )}
      >
        <ul className="space-y-1 px-4 py-4 sm:px-6">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                onClick={() => setOpen(false)}
                className="block rounded-xl px-4 py-3 text-base font-medium text-foreground transition-colors hover:bg-accent"
              >
                {l.label}
              </a>
            </li>
          ))}
          <li className="pt-2">
            <a
              href={waLink(t.product.waMessage)}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setOpen(false)}
              className="block rounded-full gradient-warm px-5 py-3 text-center text-base font-semibold text-primary-foreground shadow-soft"
            >
              {t.nav.order}
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}

function LangSwitch({ lang, setLang }: { lang: "id" | "en"; setLang: (l: "id" | "en") => void }) {
  return (
    <div
      role="group"
      aria-label="Language switcher"
      className="flex items-center gap-0.5 rounded-full border border-border bg-card p-1"
    >
      <Globe aria-hidden="true" className="ml-1.5 mr-0.5 hidden h-3.5 w-3.5 text-muted-foreground sm:block" />
      {(["id", "en"] as const).map((code) => (
        <button
          key={code}
          type="button"
          onClick={() => setLang(code)}
          aria-pressed={lang === code}
          title={code === "id" ? "Bahasa Indonesia" : "English"}
          className={cn(
            "rounded-full px-2.5 py-1 text-xs font-semibold uppercase transition-colors",
            lang === code
              ? "bg-primary text-primary-foreground"
              : "text-muted-foreground hover:bg-accent hover:text-accent-foreground",
          )}
        >
          <span aria-hidden="true" className="mr-1">
            {code === "id" ? "🇮🇩" : "🇬🇧"}
          </span>
          {code}
        </button>
      ))}
    </div>
  );
}

export { siteConfig };
