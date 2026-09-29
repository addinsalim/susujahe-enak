import { Check } from "lucide-react";
import { useLang } from "@/i18n/LanguageProvider";
import { Reveal } from "./Reveal";
import ingredientsImg from "@/assets/ingredients.jpg";
import gallery1 from "@/assets/gallery-1.jpg";

export function About() {
  const { t } = useLang();

  return (
    <section id="tentang" className="bg-cream py-20 lg:py-28">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8">
        <Reveal variant="left" className="relative">
          <div className="overflow-hidden rounded-[2rem] shadow-lift">
            <img
              src={ingredientsImg}
              alt="Jahe segar, susu, dan rempah pilihan"
              width={1200}
              height={912}
              loading="lazy"
              className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
            />
          </div>
          <div className="float-slow absolute -bottom-8 -right-2 hidden w-40 overflow-hidden rounded-2xl border-4 border-background shadow-lift sm:block">
            <img
              src={gallery1}
              alt="Menikmati susu jahe hangat"
              width={912}
              height={1104}
              loading="lazy"
              className="h-full w-full object-cover"
            />
          </div>
        </Reveal>

        <Reveal variant="right">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-primary">
            {t.about.eyebrow}
          </p>
          <h2 className="mt-3 text-3xl font-semibold leading-tight sm:text-4xl lg:text-[2.75rem]">
            {t.about.title}
          </h2>
          <p className="mt-5 text-base leading-relaxed text-muted-foreground">{t.about.desc}</p>
          <ul className="mt-7 space-y-3">
            {t.about.points.map((p) => (
              <li key={p} className="flex items-center gap-3 text-sm font-medium">
                <span className="grid h-6 w-6 shrink-0 place-items-center rounded-full bg-primary-soft text-primary">
                  <Check className="h-3.5 w-3.5" aria-hidden="true" />
                </span>
                {p}
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
