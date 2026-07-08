'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { AnimatePresence, motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import { projects, type Category } from '@/lib/site-data'

const filters: ('All' | Category)[] = ['All', 'Websites', 'Branding', 'Photography', 'Videography', 'Software']

export function PortfolioGallery() {
  const [active, setActive] = useState<'All' | Category>('All')
  const visible = active === 'All' ? projects : projects.filter((p) => p.category === active)

  return (
    <section className="relative py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        {/* Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2">
          {filters.map((f) => {
            const on = active === f
            return (
              <button
                key={f}
                type="button"
                onClick={() => setActive(f)}
                className={`rounded-full px-5 py-2.5 text-sm font-medium transition-colors ${
                  on
                    ? 'bg-brand-gradient text-white'
                    : 'border border-border bg-card text-muted-foreground hover:text-foreground'
                }`}
              >
                {f}
              </button>
            )
          })}
        </div>

        {/* Grid */}
        <motion.div layout className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {visible.map((p) => (
              <motion.article
                key={p.title}
                layout
                initial={{ opacity: 0, scale: 0.94 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.94 }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                className="group relative overflow-hidden rounded-3xl border border-border bg-card"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={p.image}
                    alt={p.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/10 to-transparent opacity-80" />
                  <span className="absolute left-4 top-4 rounded-full bg-background/70 px-3 py-1 text-xs font-medium backdrop-blur">
                    {p.category}
                  </span>
                </div>

                <div className="p-6">
                  <p className="text-xs uppercase tracking-widest text-secondary">{p.client}</p>
                  <h3 className="mt-1 font-display text-xl font-semibold">{p.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.description}</p>

                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {p.services.map((s) => (
                      <span key={s} className="rounded-full bg-primary/10 px-2.5 py-1 text-xs text-primary">
                        {s}
                      </span>
                    ))}
                  </div>

                  <Link
                    href="/case-studies"
                    className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-foreground transition-colors hover:text-primary"
                  >
                    View case study
                    <ArrowUpRight className="size-4" />
                  </Link>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  )
}
