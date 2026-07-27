import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { ArrowUpRight, ArrowRight, Check } from 'lucide-react'
import { services } from '@/lib/site-data'
import { PageHero } from '@/components/page-hero'
import { CTA } from '@/components/sections/cta'

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const service = services.find((s) => s.slug === slug)
  if (!service) return { title: 'Service Not Found' }
  return {
    title: `${service.title} — VisionVerve Creative`,
    description: service.description,
  }
}

export default async function ServicePage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const service = services.find((s) => s.slug === slug)
  if (!service) notFound()

  const others = services.filter((s) => s.slug !== service.slug)
  const Icon = service.icon

  return (
    <>
      <PageHero
        crumb={service.title}
        eyebrow="Our Services"
        title={
          <>
            {service.title.split(' & ')[0]}{' '}
            {service.title.includes(' & ') && (
              <span className="text-gradient">&amp; {service.title.split(' & ')[1]}</span>
            )}
          </>
        }
        description={service.description}
      />

      <section className="relative py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr]">
            <div>
              <div className="flex items-center gap-4">
                <span className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl bg-brand-gradient text-white">
                  <Icon className="h-6 w-6" />
                </span>
                <h2 className="font-display text-2xl font-semibold sm:text-3xl">
                  What&apos;s included
                </h2>
              </div>

              <p className="mt-6 max-w-2xl text-pretty leading-relaxed text-muted-foreground">
                As a Creative Technology Company, VisionVerve approaches {service.title.toLowerCase()}{' '}
                as part of one connected system — strategy, creativity and technology working together to
                move your business forward. A detailed breakdown of this service is on its way. In the
                meantime, let&apos;s talk about what you&apos;re building.
              </p>

              <ul className="mt-8 grid gap-3 sm:grid-cols-2">
                {service.points.map((p) => (
                  <li
                    key={p}
                    className="flex items-center gap-3 rounded-2xl border border-border bg-card px-4 py-3"
                  >
                    <span className="grid h-6 w-6 shrink-0 place-items-center rounded-full bg-primary/15 text-primary">
                      <Check className="h-3.5 w-3.5" />
                    </span>
                    <span className="text-sm font-medium">{p}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-10 flex flex-wrap gap-3">
                <Link
                  href="/contact"
                  className="group inline-flex items-center gap-2 rounded-full bg-brand-gradient px-6 py-3 text-sm font-semibold text-white"
                >
                  Start a project
                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </Link>
                <Link
                  href="/services"
                  className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-semibold transition-colors hover:bg-card"
                >
                  All services
                </Link>
              </div>
            </div>

            <aside className="lg:pl-6">
              <div className="rounded-3xl border border-border bg-card p-6">
                <h3 className="font-display text-lg font-semibold">Explore other solutions</h3>
                <ul className="mt-4 divide-y divide-border">
                  {others.map((s) => (
                    <li key={s.slug}>
                      <Link
                        href={`/services/${s.slug}`}
                        className="group flex items-center gap-3 py-3 text-sm transition-colors hover:text-foreground"
                      >
                        <s.icon className="h-4 w-4 shrink-0 text-secondary" />
                        <span className="min-w-0 flex-1 truncate text-muted-foreground transition-colors group-hover:text-foreground">
                          {s.title}
                        </span>
                        <ArrowRight className="h-4 w-4 shrink-0 text-muted-foreground transition-transform group-hover:translate-x-0.5" />
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <CTA />
    </>
  )
}
