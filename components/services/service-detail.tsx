'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowUpRight, Check, Sparkles } from 'lucide-react'
import type { ServiceDetail } from '@/lib/site-data'

export function ServiceDetailSection({ service, index }: { service: ServiceDetail; index: number }) {
  const flip = index % 2 === 1
  const Icon = service.icon

  return (
    <section id={service.id} className="scroll-mt-28 border-t border-border py-20 first:border-t-0 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Media */}
          <motion.div
            initial={{ opacity: 0, x: flip ? 40 : -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className={`relative ${flip ? 'lg:order-2' : ''}`}
          >
            <div className="relative aspect-[4/3] overflow-hidden rounded-3xl border border-border">
              <Image
                src={service.image}
                alt={service.title}
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
            </div>
            <div className="absolute -bottom-5 left-6 flex items-center gap-3 rounded-2xl border border-border bg-card px-5 py-3 shadow-xl">
              <span className="text-xs text-muted-foreground">Starting from</span>
              <span className="font-display text-lg font-bold text-gradient">{service.startingFrom}</span>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6 }}
            className={flip ? 'lg:order-1' : ''}
          >
            <div className="flex items-center gap-3">
              <span
                className="grid size-11 place-items-center rounded-2xl text-white"
                style={{ background: 'var(--brand-gradient)' }}
              >
                <Icon className="size-5" />
              </span>
              <span className="text-sm font-semibold uppercase tracking-widest text-secondary">
                {service.tagline}
              </span>
            </div>

            <h3 className="mt-5 font-display text-3xl font-bold sm:text-4xl">{service.title}</h3>
            <p className="mt-4 leading-relaxed text-muted-foreground">{service.overview}</p>

            <div className="mt-8 grid gap-6 sm:grid-cols-2">
              <div>
                <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                  What you get
                </p>
                <ul className="mt-3 space-y-2">
                  {service.deliverables.map((d) => (
                    <li key={d} className="flex items-start gap-2 text-sm">
                      <Check className="mt-0.5 size-4 shrink-0 text-secondary" />
                      <span>{d}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                  Why it matters
                </p>
                <ul className="mt-3 space-y-2">
                  {service.benefits.map((b) => (
                    <li key={b} className="flex items-start gap-2 text-sm">
                      <Sparkles className="mt-0.5 size-4 shrink-0 text-primary" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Process chips */}
            <div className="mt-8">
              <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                How we work
              </p>
              <div className="mt-3 flex flex-wrap items-center gap-2">
                {service.process.map((step, i) => (
                  <span key={step} className="flex items-center gap-2">
                    <span className="rounded-full border border-border bg-card px-3 py-1.5 text-xs font-medium">
                      {step}
                    </span>
                    {i < service.process.length - 1 && (
                      <span className="text-muted-foreground">→</span>
                    )}
                  </span>
                ))}
              </div>
            </div>

            {/* Tools */}
            <div className="mt-6 flex flex-wrap gap-2">
              {service.tools.map((t) => (
                <span
                  key={t}
                  className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary"
                >
                  {t}
                </span>
              ))}
            </div>

            <Link
              href="/contact"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-brand-gradient px-6 py-3.5 text-sm font-semibold text-white"
            >
              Request {service.title}
              <ArrowUpRight className="size-4" />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
