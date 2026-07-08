import { clients } from '@/lib/site-data'

export function ClientsMarquee() {
  const row = [...clients, ...clients]
  return (
    <section aria-label="Trusted by leading brands" className="border-y border-border py-10">
      <p className="mb-8 text-center text-xs uppercase tracking-[0.3em] text-muted-foreground">
        Trusted by ambitious brands worldwide
      </p>
      <div className="relative overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_12%,black_88%,transparent)]">
        <div className="flex w-max animate-marquee items-center gap-16 pr-16">
          {row.map((c, i) => (
            <span
              key={`${c}-${i}`}
              className="font-display text-2xl font-semibold text-muted-foreground/60 transition-colors hover:text-foreground sm:text-3xl"
            >
              {c}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
