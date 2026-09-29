import { Leaf, Milk, Sparkles, Wheat } from "lucide-react";
import { useLang } from "@/i18n/LanguageProvider";
import { siteConfig } from "@/config/site";
import { Reveal } from "./Reveal";
import gallery3 from "@/assets/gallery-3.jpg";

const icons = [Leaf, Milk, Sparkles, Wheat];

export function Ingredients() {
  const { t } = useLang();

  return (
    <section className="bg-cream py-20 lg:py-28">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8">
        <Reveal variant="left">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-primary">
            {t.ingredients.eyebrow}
          </p>
          <h2 className="mt-3 text-3xl font-semibold sm:text-4xl lg:text-[2.75rem]">
            {t.ingredients.title}
          </h2>
          <p className="mt-4 text-muted-foreground">{t.ingredients.subtitle}</p>

          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {t.ingredients.items.map((item, i) => {
              const Icon = icons[i] ?? Leaf;
              return (
                <div
                  key={item}
                  className="flex items-center gap-3 rounded-2xl border border-border bg-card p-4 shadow-soft"
                >
                  <span className="grid h-10 w-10 place-items-center rounded-xl bg-primary-soft text-primary">
                    <Icon className="h-4.5 w-4.5" aria-hidden="true" />
                  </span>
                  <span className="text-sm font-semibold">{item}</span>
                </div>
              );
            })}
          </div>

          {/* Komposisi — mudah diganti lewat src/config/site.ts */}
          <div className="mt-6 rounded-2xl border border-dashed border-primary/40 bg-primary-soft/40 p-5">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-spice">
              {t.ingredients.compositionLabel}
            </p>
            <p className="mt-2 text-sm text-muted-foreground">{siteConfig.composition}</p>
          </div>
        </Reveal>

        <Reveal variant="right" className="overflow-hidden rounded-[2rem] shadow-lift">
          <img
            src={gallery3}
            alt="Jahe dan rempah pilihan di atas kain linen"
            width={928}
            height={720}
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
          />
        </Reveal>
      </div>
    </section>
  );
}
