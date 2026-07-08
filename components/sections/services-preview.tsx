'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import { services } from '@/lib/site-data'
import { SectionHeading } from '@/components/section-heading'

export function ServicesPreview() {
  return (
    <section className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
          <SectionHeading
            eyebrow="Services"
            title={<>Six disciplines, <span className="text-gradient">one seamless team</span></>}
            description="From first sketch to shipped product, every capability you need lives under one roof."
          />
          <Link
            href="/services"
            className="group inline-flex shrink-0 items-center gap-2 rounded-full border border-border px-5 py-3 text-sm font-semibold transition-colors hover:bg-card"
          >
            Explore all services
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>

        <div className="mt-12 divide-y divide-border border-y border-border">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
            >
              <Link
                href="/services"
                className="group flex items-center gap-4 py-6 sm:gap-8 sm:py-8"
              >
                <span className="font-display text-sm text-muted-foreground tabular-nums">
                  0{i + 1}
                </span>
                <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl border border-border bg-card text-primary transition-colors group-hover:bg-brand-gradient group-hover:text-white">
                  <s.icon className="h-5 w-5" />
                </span>
                <div className="min-w-0 flex-1">
                  <h3 className="font-display text-xl font-semibold transition-colors group-hover:text-gradient sm:text-2xl">
                    {s.title}
                  </h3>
                  <p className="mt-1 hidden max-w-xl text-sm leading-relaxed text-muted-foreground sm:block">
                    {s.description}
                  </p>
                </div>
                <div className="hidden gap-2 lg:flex">
                  {s.points.map((p) => (
                    <span key={p} className="rounded-full border border-border px-3 py-1 text-xs text-muted-foreground">
                      {p}
                    </span>
                  ))}
                </div>
                <ArrowUpRight className="h-5 w-5 shrink-0 text-muted-foreground transition-all group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-foreground" />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
