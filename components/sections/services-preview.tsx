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
            title={<>Creative technology solutions <span className="text-gradient">built for modern businesses</span></>}
            description="From brand strategy and design to websites, software, AI, content creation, and digital transformation, VisionVerve delivers integrated solutions that help businesses innovate, grow, and thrive."
          />
          <Link
            href="/services"
            className="group inline-flex shrink-0 items-center gap-2 rounded-full border border-border px-5 py-3 text-sm font-semibold transition-colors hover:bg-card"
          >
            View Our Services
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>

        <div className="mt-12 divide-y divide-border border-y border-border">
          {services.map((s, i) => (
            <motion.div
              key={s.slug}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
            >
              <Link
                href={`/services/${s.slug}`}
                data-cursor="Explore"
                className="group relative flex items-center gap-4 rounded-2xl px-3 py-6 transition-all duration-300 hover:bg-card sm:gap-8 sm:px-5 sm:py-8"
              >
                <span className="font-display text-sm text-muted-foreground transition-colors duration-300 group-hover:text-foreground tabular-nums">
                  0{i + 1}
                </span>
                <span className="relative grid h-12 w-12 shrink-0 place-items-center rounded-2xl border border-border bg-card text-primary transition-colors duration-300 group-hover:border-primary/50 group-hover:bg-brand-gradient group-hover:text-white">
                  <span
                    aria-hidden
                    className="pointer-events-none absolute inset-0 rounded-2xl bg-primary/40 opacity-0 blur-lg transition-opacity duration-300 group-hover:opacity-100"
                  />
                  <s.icon className="relative h-5 w-5" />
                </span>
                <div className="min-w-0 flex-1">
                  <h3 className="font-display text-xl font-semibold transition-colors duration-300 group-hover:text-gradient sm:text-2xl">
                    {s.title}
                  </h3>
                  <p className="mt-1 hidden max-w-xl text-sm leading-relaxed text-muted-foreground sm:block">
                    {s.description}
                  </p>
                </div>
                <div className="hidden flex-wrap justify-end gap-2 lg:flex lg:max-w-xs">
                  {s.points.map((p) => (
                    <span key={p} className="rounded-full border border-border px-3 py-1 text-xs text-muted-foreground transition-colors duration-300 group-hover:border-primary/30">
                      {p}
                    </span>
                  ))}
                </div>
                <ArrowUpRight className="h-5 w-5 shrink-0 text-muted-foreground transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-foreground" />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
