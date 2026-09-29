import { ArrowRight, Leaf, Star } from "lucide-react";
import { useLang } from "@/i18n/LanguageProvider";
import { siteConfig, waLink } from "@/config/site";
import heroProduct from "@/assets/hero-product.jpg";

export function Hero() {
  const { t } = useLang();

  return (
    <section id="beranda" className="relative overflow-hidden gradient-cream pt-28 lg:pt-32">
      {/* Ornamen rempah lembut */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -left-24 top-10 h-72 w-72 rounded-full bg-primary-soft blur-3xl opacity-60" />
        <div className="absolute -right-20 bottom-0 h-80 w-80 rounded-full bg-accent blur-3xl opacity-70" />
        <Leaf className="float-slow absolute left-[8%] top-[28%] h-8 w-8 text-primary/25" />
        <Leaf className="float-slower absolute right-[12%] top-[18%] h-6 w-6 text-spice/25" />
        <Leaf className="float-slow absolute left-[46%] bottom-[10%] h-5 w-5 text-primary/20" />
      </div>

      <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-4 pb-16 sm:px-6 lg:grid-cols-2 lg:gap-8 lg:pb-24 lg:px-8">
        <div className="reveal-left is-visible text-center lg:text-left">
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.14em] text-spice shadow-soft">
            <Leaf className="h-3.5 w-3.5" aria-hidden="true" />
            {t.hero.badge}
          </span>

          <h1 className="mt-6 text-4xl font-semibold leading-[1.08] sm:text-5xl lg:text-6xl">
            {t.hero.title.split(",")[0]},
            <span className="block text-gradient-warm">{t.hero.title.split(",").slice(1).join(",").trim()}</span>
          </h1>

          <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg lg:mx-0">
            {t.hero.subtitle}
          </p>

          <div className="mt-8 flex flex-col items-stretch gap-3 sm:flex-row sm:items-center sm:justify-center lg:justify-start">
            <a
              href={waLink(t.product.waMessage)}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-center gap-2 rounded-full gradient-warm px-7 py-3.5 text-base font-semibold text-primary-foreground shadow-glow transition-transform duration-200 hover:-translate-y-0.5"
            >
              {t.hero.cta1}
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
            </a>
            <a
              href="#produk"
              className="inline-flex items-center justify-center rounded-full border border-border bg-card px-7 py-3.5 text-base font-semibold text-foreground shadow-soft transition-colors hover:bg-accent"
            >
              {t.hero.cta2}
            </a>
          </div>

          <div className="mt-8 flex items-center justify-center gap-6 lg:justify-start">
            <div>
              <p className="font-display text-2xl font-semibold text-foreground">
                {siteConfig.priceLabel}
              </p>
              <p className="text-xs uppercase tracking-widest text-muted-foreground">{t.hero.priceNote}</p>
            </div>
            <span aria-hidden="true" className="h-10 w-px bg-border" />
            <div className="flex items-center gap-1 text-primary" aria-hidden="true">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="h-4 w-4 fill-current" />
              ))}
            </div>
          </div>
        </div>

        <div className="reveal-right is-visible relative">
          <div className="relative mx-auto max-w-md lg:max-w-lg">
            <div
              aria-hidden="true"
              className="spin-slow absolute -inset-6 rounded-[40%] border border-dashed border-primary/25"
            />
            <div className="float-slow overflow-hidden rounded-[2rem] shadow-lift">
              <img
                src={heroProduct}
                alt="Segelas susu jahe hangat dengan jahe segar dan rempah"
                width={1200}
                height={1200}
                fetchPriority="high"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="absolute -bottom-5 left-2 rounded-2xl border border-border bg-card px-4 py-3 shadow-lift sm:left-0">
              <p className="text-xs uppercase tracking-widest text-muted-foreground">
                {siteConfig.productName}
              </p>
              <p className="font-display text-lg font-semibold">
                {siteConfig.priceLabel}
                <span className="ml-1 text-xs font-medium text-muted-foreground">
                  {siteConfig.priceUnit}
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
