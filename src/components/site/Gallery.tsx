import { useCallback, useEffect, useState } from "react";
import { X, ChevronLeft, ChevronRight, ZoomIn } from "lucide-react";
import { useLang } from "@/i18n/LanguageProvider";
import { galleryItems } from "@/data/content";
import { Reveal } from "./Reveal";

export function Gallery() {
  const { t, lang } = useLang();
  const [index, setIndex] = useState<number | null>(null);

  const close = useCallback(() => setIndex(null), []);
  const prev = useCallback(
    () => setIndex((i) => (i === null ? i : (i - 1 + galleryItems.length) % galleryItems.length)),
    [],
  );
  const next = useCallback(
    () => setIndex((i) => (i === null ? i : (i + 1) % galleryItems.length)),
    [],
  );

  useEffect(() => {
    if (index === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [index, close, prev, next]);

  return (
    <section id="galeri" className="bg-cream py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-primary">
            {t.gallery.eyebrow}
          </p>
          <h2 className="mt-3 text-3xl font-semibold sm:text-4xl lg:text-[2.75rem]">
            {t.gallery.title}
          </h2>
          <p className="mt-4 text-muted-foreground">{t.gallery.subtitle}</p>
        </Reveal>

        {/* Masonry sederhana dengan CSS columns */}
        <div className="mt-12 columns-2 gap-4 sm:columns-2 lg:columns-3 [&>*]:mb-4">
          {galleryItems.map((item, i) => (
            <Reveal key={item.src + i} variant="zoom" delay={(i % 3) * 80} className="break-inside-avoid">
              <button
                type="button"
                onClick={() => setIndex(i)}
                className="group relative block w-full overflow-hidden rounded-2xl shadow-soft transition-shadow hover:shadow-lift focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
                aria-label={item.alt[lang]}
              >
                <img
                  src={item.src}
                  alt={item.alt[lang]}
                  loading="lazy"
                  className="w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <span className="absolute inset-0 grid place-items-center bg-foreground/0 opacity-0 transition-all duration-300 group-hover:bg-foreground/30 group-hover:opacity-100">
                  <ZoomIn className="h-7 w-7 text-background" aria-hidden="true" />
                </span>
              </button>
            </Reveal>
          ))}
        </div>
      </div>

      {index !== null && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={galleryItems[index].alt[lang]}
          className="fixed inset-0 z-[70] flex items-center justify-center bg-foreground/85 p-4 backdrop-blur-sm animate-in fade-in duration-200"
          onClick={close}
        >
          <button
            type="button"
            onClick={close}
            aria-label="Tutup"
            className="absolute right-4 top-4 grid h-11 w-11 place-items-center rounded-full bg-background/90 text-foreground transition-colors hover:bg-background"
          >
            <X className="h-5 w-5" />
          </button>
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              prev();
            }}
            aria-label="Sebelumnya"
            className="absolute left-3 grid h-11 w-11 place-items-center rounded-full bg-background/90 text-foreground transition-colors hover:bg-background sm:left-6"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <img
            src={galleryItems[index].src}
            alt={galleryItems[index].alt[lang]}
            onClick={(e) => e.stopPropagation()}
            className="max-h-[82vh] w-auto max-w-[92vw] rounded-2xl object-contain shadow-lift animate-in zoom-in-95 duration-200"
          />
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              next();
            }}
            aria-label="Berikutnya"
            className="absolute right-3 grid h-11 w-11 place-items-center rounded-full bg-background/90 text-foreground transition-colors hover:bg-background sm:right-6"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      )}
    </section>
  );
}
