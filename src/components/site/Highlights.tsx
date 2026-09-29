import { Sparkles, CupSoda, Flame, Users } from "lucide-react";
import { useLang } from "@/i18n/LanguageProvider";
import { Reveal } from "./Reveal";

const icons = [Sparkles, CupSoda, Flame, Users];

export function Highlights() {
  const { t } = useLang();

  return (
    <section className="border-y border-border bg-background py-14 lg:py-20">
      <div className="mx-auto grid max-w-7xl gap-5 px-4 sm:grid-cols-2 sm:px-6 lg:grid-cols-4 lg:px-8">
        {t.highlights.items.map((item, i) => {
          const Icon = icons[i] ?? Sparkles;
          return (
            <Reveal key={item.title} delay={i * 90}>
              <article className="group h-full rounded-2xl border border-border bg-card p-6 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-lift">
                <span className="mb-4 grid h-12 w-12 place-items-center rounded-xl bg-primary-soft text-primary transition-colors group-hover:gradient-warm group-hover:text-primary-foreground">
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </span>
                <h3 className="text-lg font-semibold">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.desc}</p>
              </article>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
