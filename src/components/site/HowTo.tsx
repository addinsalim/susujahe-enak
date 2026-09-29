import { useLang } from "@/i18n/LanguageProvider";
import { Reveal } from "./Reveal";

export function HowTo() {
  const { t } = useLang();

  return (
    <section className="bg-background py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-primary">
            {t.howto.eyebrow}
          </p>
          <h2 className="mt-3 text-3xl font-semibold sm:text-4xl lg:text-[2.75rem]">
            {t.howto.title}
          </h2>
        </Reveal>

        <ol className="relative mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {/* Garis timeline pada layar besar */}
          <span
            aria-hidden="true"
            className="absolute left-0 right-0 top-7 hidden h-px bg-gradient-to-r from-transparent via-border to-transparent lg:block"
          />
          {t.howto.steps.map((step, i) => (
            <Reveal key={step.title} delay={i * 110} className="relative">
              <li className="h-full rounded-2xl border border-border bg-card p-6 pt-8 text-center shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-lift">
                <span className="mx-auto -mt-14 mb-4 grid h-14 w-14 place-items-center rounded-full gradient-warm font-display text-lg font-semibold text-primary-foreground shadow-glow">
                  {i + 1}
                </span>
                <h3 className="text-base font-semibold">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{step.desc}</p>
              </li>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
