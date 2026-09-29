import { useState } from "react";
import { Plus } from "lucide-react";
import { useLang } from "@/i18n/LanguageProvider";
import { faqs } from "@/data/content";
import { Reveal } from "./Reveal";
import { cn } from "@/lib/utils";

export function Faq() {
  const { t, lang } = useLang();
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="bg-background py-20 lg:py-28">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <Reveal className="text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-primary">
            {t.faq.eyebrow}
          </p>
          <h2 className="mt-3 text-3xl font-semibold sm:text-4xl lg:text-[2.75rem]">{t.faq.title}</h2>
        </Reveal>

        <div className="mt-10 space-y-3">
          {faqs.map((item, i) => {
            const isOpen = open === i;
            return (
              <Reveal key={i} delay={i * 50}>
                <div
                  className={cn(
                    "overflow-hidden rounded-2xl border bg-card transition-colors",
                    isOpen ? "border-primary/40 shadow-soft" : "border-border",
                  )}
                >
                  <h3>
                    <button
                      type="button"
                      onClick={() => setOpen(isOpen ? null : i)}
                      aria-expanded={isOpen}
                      aria-controls={`faq-panel-${i}`}
                      className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left text-sm font-semibold transition-colors hover:bg-accent/60 sm:text-base"
                    >
                      {item.q[lang]}
                      <Plus
                        aria-hidden="true"
                        className={cn(
                          "h-5 w-5 shrink-0 text-primary transition-transform duration-300",
                          isOpen && "rotate-45",
                        )}
                      />
                    </button>
                  </h3>
                  <div
                    id={`faq-panel-${i}`}
                    className={cn(
                      "grid transition-all duration-300",
                      isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0",
                    )}
                  >
                    <div className="overflow-hidden">
                      <p className="px-5 pb-5 text-sm leading-relaxed text-muted-foreground">
                        {item.a[lang]}
                      </p>
                    </div>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
