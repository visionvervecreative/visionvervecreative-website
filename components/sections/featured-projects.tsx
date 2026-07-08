'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import { projects } from '@/lib/site-data'
import { SectionHeading } from '@/components/section-heading'

export function FeaturedProjects() {
  const featured = projects.slice(0, 3)

  return (
    <section className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
          <SectionHeading
            eyebrow="Featured Work"
            title={<>Projects we&apos;re <span className="text-gradient">proud of</span></>}
            description="A glimpse of the brands, products and stories we have shaped."
          />
          <Link
            href="/portfolio"
            className="group inline-flex shrink-0 items-center gap-2 rounded-full border border-border px-5 py-3 text-sm font-semibold transition-colors hover:bg-card"
          >
            View full portfolio
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {featured.map((project, i) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.55, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
              className={i === 0 ? 'lg:col-span-3' : ''}
            >
              <Link
                href="/case-studies"
                data-cursor="View"
                className="group relative block overflow-hidden rounded-3xl border border-border bg-card"
              >
                <div className={`relative overflow-hidden ${i === 0 ? 'aspect-[16/8]' : 'aspect-[16/11]'}`}>
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes={i === 0 ? '100vw' : '(max-width: 1024px) 100vw, 33vw'}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card via-card/30 to-transparent" />
                  <span className="absolute left-4 top-4 rounded-full border border-border bg-background/70 px-3 py-1 text-xs backdrop-blur">
                    {project.category}
                  </span>
                  <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 p-6">
                    <div>
                      <h3 className="font-display text-xl font-semibold sm:text-2xl">{project.title}</h3>
                      <p className="text-sm text-secondary">{project.client}</p>
                    </div>
                    <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-brand-gradient text-white transition-transform group-hover:scale-110">
                      <ArrowUpRight className="h-5 w-5" />
                    </span>
                  </div>
                </div>
              </Link>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
