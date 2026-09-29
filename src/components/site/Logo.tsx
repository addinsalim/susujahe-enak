import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";

/**
 * Komponen logo tunggal — dipakai di navbar & footer.
 * Ganti logo cukup lewat siteConfig.logoSrc.
 */
export function Logo({ className, compact = false }: { className?: string; compact?: boolean }) {
  return (
    <span className={cn("flex items-center gap-2.5", className)}>
      {siteConfig.logoSrc ? (
        <img
          src={siteConfig.logoSrc}
          alt={`Logo ${siteConfig.brandFullName}`}
          width={40}
          height={40}
          className="h-10 w-10 object-contain"
        />
      ) : (
        <span
          aria-hidden="true"
          className="grid h-10 w-10 shrink-0 place-items-center rounded-xl gradient-warm shadow-soft"
        >
          <GingerCupMark />
        </span>
      )}
      <span className="leading-tight">
        <span className="block font-display text-base font-semibold tracking-tight">
          Seribu Rempah
        </span>
        {!compact && (
          <span className="block text-[0.68rem] font-medium uppercase tracking-[0.18em] text-muted-foreground">
            Seribu Manfaat
          </span>
        )}
      </span>
    </span>
  );
}

/** Mark sementara: cangkir + uap + irisan jahe. */
function GingerCupMark() {
  return (
    <svg viewBox="0 0 32 32" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.8">
      <g className="text-primary-foreground" strokeLinecap="round">
        <path d="M12 4c-1.2 1.4-1.2 2.6 0 4M16 3c-1.2 1.6-1.2 2.8 0 4.4M20 4c-1.2 1.4-1.2 2.6 0 4" />
        <path d="M7 12h16v5a8 8 0 0 1-8 8h0a8 8 0 0 1-8-8v-5Z" />
        <path d="M23 14h2.5a2.5 2.5 0 0 1 0 5H23" />
      </g>
    </svg>
  );
}
