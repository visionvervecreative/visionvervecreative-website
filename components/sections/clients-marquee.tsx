import Image from 'next/image'
import Link from 'next/link'
import { clients } from '@/lib/site-data'

export function ClientsMarquee() {
  // Duplicated once for a seamless, infinite loop (animation translates -50%).
  const row = [...clients, ...clients]
  return (
    <section
      aria-label="Businesses we have proudly partnered with"
      className="marquee-pause border-y border-border py-10"
    >
      <p className="mb-8 text-center text-xs uppercase tracking-[0.3em] text-muted-foreground">
        Trusted by Businesses We&apos;ve Proudly Partnered With
      </p>
      <div className="relative overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_12%,black_88%,transparent)]">
        {/* Pauses on hover anywhere over the section while staying seamless + infinite */}
        <div className="flex w-max animate-marquee items-center gap-16 pr-16 group-hover:[animation-play-state:paused]">
          {row.map((c, i) => (
            <Link
              key={`${c.name}-${i}`}
              href={c.href}
              title={c.comingSoon ? `${c.name} — case study coming soon` : c.name}
              aria-label={`${c.name} — ${c.project}`}
              className="group/item relative flex shrink-0 items-center outline-none"
            >
              {c.logo ? (
                <Image
                  src={c.logo || '/placeholder.svg'}
                  alt={c.name}
                  width={160}
                  height={40}
                  className="h-8 w-auto opacity-60 grayscale transition-all duration-300 group-hover/item:scale-105 group-hover/item:opacity-100 group-hover/item:grayscale-0 sm:h-10"
                />
              ) : (
                <span className="whitespace-nowrap font-display text-2xl font-semibold text-muted-foreground/60 transition-all duration-300 group-hover/item:scale-105 group-hover/item:bg-brand-gradient group-hover/item:bg-clip-text group-hover/item:text-transparent group-hover/item:[filter:drop-shadow(0_0_18px_rgba(255,45,155,0.35))] group-focus-visible/item:text-foreground sm:text-3xl">
                  {c.name}
                </span>
              )}

              {/* Subtle "Coming Soon" interaction — absolutely positioned so spacing never shifts */}
              {c.comingSoon && (
                <span className="pointer-events-none absolute -bottom-4 left-0 whitespace-nowrap text-[10px] uppercase tracking-[0.25em] text-secondary opacity-0 transition-opacity duration-300 group-hover/item:opacity-100">
                  Case study coming soon
                </span>
              )}
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
