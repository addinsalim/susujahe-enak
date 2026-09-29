import { MessageCircle } from "lucide-react";
import { useLang } from "@/i18n/LanguageProvider";
import { waLink } from "@/config/site";

/** Tombol WhatsApp mengambang di kanan bawah. */
export function FloatingWhatsApp() {
  const { t } = useLang();

  return (
    <a
      href={waLink(t.product.waMessage)}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={t.float.order}
      className="group fixed bottom-5 right-4 z-[60] inline-flex items-center gap-2 rounded-full bg-whatsapp px-4 py-3.5 font-semibold text-primary-foreground shadow-lift transition-transform duration-200 hover:-translate-y-0.5 sm:bottom-6 sm:right-6"
    >
      <MessageCircle className="h-5 w-5" aria-hidden="true" />
      <span className="max-w-0 overflow-hidden whitespace-nowrap text-sm transition-all duration-300 group-hover:max-w-[12rem] sm:max-w-[12rem]">
        {t.float.order}
      </span>
    </a>
  );
}
