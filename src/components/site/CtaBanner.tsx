import { MessageCircle, Leaf } from "lucide-react";
import { useLang } from "@/i18n/LanguageProvider";
import { waLink } from "@/config/site";
import { Reveal } from "./Reveal";

export function CtaBanner() {
  const { t } = useLang();

  return (
    <section className="bg-background px-4 pb-20 sm:px-6 lg:px-8 lg:pb-28">
      <Reveal variant="zoom" className="mx-auto max-w-6xl">
        <div className="relative overflow-hidden rounded-[2rem] gradient-warm px-6 py-14 text-center shadow-glow sm:px-12 lg:py-20">
          <div aria-hidden="true" className="pointer-events-none absolute inset-0">
            <Leaf className="float-slow absolute left-[6%] top-[18%] h-10 w-10 text-primary-foreground/20" />
            <Leaf className="float-slower absolute right-[8%] bottom-[16%] h-12 w-12 text-primary-foreground/15" />
            <span className="absolute -left-10 -top-16 h-48 w-48 rounded-full bg-primary-foreground/10 blur-2xl" />
            <span className="absolute -bottom-20 -right-10 h-56 w-56 rounded-full bg-primary-foreground/10 blur-2xl" />
          </div>

          <div className="relative mx-auto max-w-2xl">
            <h2 className="text-3xl font-semibold text-primary-foreground sm:text-4xl lg:text-[2.75rem]">
              {t.cta.title}
            </h2>
            <p className="mt-4 text-base text-primary-foreground/85">{t.cta.subtitle}</p>
            <a
              href={waLink(t.cta.waMessage)}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center justify-center gap-2 rounded-full bg-card px-8 py-4 text-base font-semibold text-foreground shadow-lift transition-transform duration-200 hover:-translate-y-0.5"
            >
              <MessageCircle className="h-5 w-5 text-primary" aria-hidden="true" />
              {t.cta.button}
            </a>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
