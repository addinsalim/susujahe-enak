import { Flame, HeartHandshake, Coffee, Soup, Sun, Milk } from "lucide-react";
import { useLang } from "@/i18n/LanguageProvider";
import { Reveal } from "./Reveal";

const icons = [Flame, HeartHandshake, Coffee, Soup, Sun, Milk];

export function Benefits() {
  const { t } = useLang();

  return (
    <section id="manfaat" className="bg-background py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-primary">
            {t.benefits.eyebrow}
          </p>
          <h2 className="mt-3 text-3xl font-semibold sm:text-4xl lg:text-[2.75rem]">
            {t.benefits.title}
          </h2>
          <p className="mt-4 text-muted-foreground">{t.benefits.subtitle}</p>
        </Reveal>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {t.benefits.items.map((item, i) => {
            const Icon = icons[i] ?? Flame;
            return (
              <Reveal key={item} delay={i * 70} variant="zoom">
                <article className="group flex h-full items-start gap-4 rounded-2xl border border-border bg-card p-6 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-lift">
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-primary-soft text-primary transition-transform duration-300 group-hover:scale-110">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <p className="pt-2 text-sm font-medium leading-relaxed">{item}</p>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
