import { Check, MessageCircle } from "lucide-react";
import { useLang } from "@/i18n/LanguageProvider";
import { siteConfig, waLink } from "@/config/site";
import { Reveal } from "./Reveal";
import productPack from "@/assets/product-pack.jpg";

export function Product() {
  const { t } = useLang();

  return (
    <section id="produk" className="bg-background py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-primary">
            {t.product.eyebrow}
          </p>
          <h2 className="mt-3 text-3xl font-semibold sm:text-4xl lg:text-[2.75rem]">
            {t.product.title}
          </h2>
        </Reveal>

        <Reveal variant="zoom" className="mx-auto mt-12 max-w-4xl">
          <article
            itemScope
            itemType="https://schema.org/Product"
            className="grid overflow-hidden rounded-[2rem] border border-border bg-card shadow-lift md:grid-cols-2"
          >
            <div className="relative overflow-hidden bg-cream">
              <img
                itemProp="image"
                src={productPack}
                alt="Kemasan pack Susu Jahe Seribu Rempah"
                width={1008}
                height={1008}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
              />
              <span className="absolute left-5 top-5 rounded-full gradient-warm px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wider text-primary-foreground shadow-soft">
                Best Seller
              </span>
            </div>

            <div className="flex flex-col justify-center p-7 sm:p-10">
              <h3 itemProp="name" className="text-2xl font-semibold sm:text-3xl">
                {siteConfig.productName}
              </h3>
              <p itemProp="description" className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {t.product.desc}
              </p>

              <ul className="mt-5 space-y-2">
                {t.product.features.map((f) => (
                  <li key={f} className="flex items-center gap-2 text-sm">
                    <Check className="h-4 w-4 text-primary" aria-hidden="true" />
                    {f}
                  </li>
                ))}
              </ul>

              <p
                itemProp="offers"
                itemScope
                itemType="https://schema.org/Offer"
                className="mt-7 flex items-baseline gap-2"
              >
                <meta itemProp="priceCurrency" content="IDR" />
                <meta itemProp="price" content={String(siteConfig.price)} />
                <span className="font-display text-4xl font-semibold text-gradient-warm">
                  {siteConfig.priceLabel}
                </span>
                <span className="text-sm text-muted-foreground">{siteConfig.priceUnit}</span>
              </p>

              <a
                href={waLink(t.product.waMessage)}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-7 inline-flex items-center justify-center gap-2 rounded-full gradient-warm px-7 py-3.5 text-base font-semibold text-primary-foreground shadow-glow transition-transform duration-200 hover:-translate-y-0.5"
              >
                <MessageCircle className="h-4.5 w-4.5" aria-hidden="true" />
                {t.product.order}
              </a>
            </div>
          </article>
        </Reveal>
      </div>
    </section>
  );
}
