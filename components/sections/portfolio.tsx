'use client'

import { useState } from 'react'
import Image from 'next/image'
import { AnimatePresence, motion } from 'framer-motion'
import { ArrowUpRight, FileText } from 'lucide-react'
import { projects, type Category } from '@/lib/site-data'
import { SectionHeading } from '@/components/section-heading'

const filters: ('All' | Category)[] = ['All', 'Websites', 'Photography', 'Videography', 'Branding', 'Software']

export function Portfolio() {
  const [active, setActive] = useState<'All' | Category>('All')
  const filtered = active === 'All' ? projects : projects.filter((p) => p.category === active)

  return (
    <section id="portfolio" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Portfolio"
          title={<>Selected work we&apos;re <span className="text-gradient">proud of</span></>}
          description="A cross-section of brands, products and stories we have shaped. Filter by discipline to explore."
        />

        <div className="mt-10 flex flex-wrap gap-2">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setActive(f)}
              className={`relative rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                active === f ? 'text-white' : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              {active === f && (
                <motion.span
                  layoutId="filter-pill"
                  className="absolute inset-0 -z-10 rounded-full bg-brand-gradient"
                  transition={{ type: 'spring', stiffness: 400, damping: 32 }}
                />
              )}
              {f}
            </button>
          ))}
        </div>

        <motion.div layout className="mt-10 grid gap-6 md:grid-cols-2">
          <AnimatePresence mode="popLayout">
            {filtered.map((project) => (
              <motion.article
                layout
                key={project.title}
                initial={{ opacity: 0, scale: 0.94 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.94 }}
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                data-cursor="View"
                className="group relative overflow-hidden rounded-3xl border border-border bg-card"
              >
                <div className="relative aspect-[16/11] overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card via-card/20 to-transparent" />
                  <span className="absolute left-4 top-4 rounded-full border border-border bg-background/70 px-3 py-1 text-xs backdrop-blur">
                    {project.category}
                  </span>
                </div>
                <div className="p-6">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h3 className="font-display text-xl font-semibold">{project.title}</h3>
                      <p className="text-sm text-secondary">{project.client}</p>
                    </div>
                  </div>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{project.description}</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.tech.map((t) => (
                      <span key={t} className="rounded-full border border-border px-2.5 py-1 text-xs text-muted-foreground">
                        {t}
                      </span>
                    ))}
                  </div>
                  <div className="mt-6 flex items-center gap-3">
                    <a
                      href="#contact"
                      className="inline-flex items-center gap-1.5 rounded-full bg-brand-gradient px-4 py-2 text-xs font-semibold text-white"
                    >
                      View Project <ArrowUpRight className="h-3.5 w-3.5" />
                    </a>
                    <a
                      href="#case-studies"
                      className="inline-flex items-center gap-1.5 rounded-full border border-border px-4 py-2 text-xs font-semibold transition-colors hover:bg-background"
                    >
                      <FileText className="h-3.5 w-3.5" /> Case Study
                    </a>
                  </div>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  )
}
