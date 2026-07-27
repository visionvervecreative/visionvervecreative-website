import { clients } from '@/lib/site-data'

export function ClientsMarquee() {
  // Duplicated once for a seamless, infinite loop (animation translates exactly -50%).
  const row = [...clients, ...clients]
  return (
    <section
      aria-label="Businesses we have proudly partnered with"
      className="marquee-pause relative border-y border-border pb-16 pt-20 sm:pb-20 sm:pt-24"
    >
      <p className="mb-10 text-center text-xs uppercase tracking-[0.3em] text-muted-foreground">
        Trusted by Businesses We&apos;ve Proudly Partnered With
      </p>

      <div className="relative overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_12%,black_88%,transparent)]">
        <ul className="flex w-max animate-marquee items-center gap-20 pr-20">
          {row.map((c, i) => (
            <li
              key={`${c.name}-${i}`}
              aria-hidden={i >= clients.length ? true : undefined}
              className="shrink-0 select-none"
            >
              <span className="block whitespace-nowrap font-display text-2xl font-semibold text-muted-foreground/50 sm:text-3xl">
                {c.name}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
