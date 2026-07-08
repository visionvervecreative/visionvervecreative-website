'use client'

import { useMemo, useState } from 'react'
import Image from 'next/image'
import { AnimatePresence, motion } from 'framer-motion'
import { ArrowUpRight, Calendar } from 'lucide-react'
import { blogPosts } from '@/lib/site-data'

export function BlogList() {
  const categories = useMemo(
    () => ['All', ...Array.from(new Set(blogPosts.map((p) => p.category)))],
    [],
  )
  const [active, setActive] = useState('All')

  const featured = blogPosts.find((p) => p.featured) ?? blogPosts[0]
  const rest = blogPosts.filter((p) => p !== featured)
  const visible = active === 'All' ? rest : rest.filter((p) => p.category === active)

  return (
    <section className="relative py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        {/* Featured */}
        <article className="group grid overflow-hidden rounded-3xl border border-border bg-card lg:grid-cols-2">
          <div className="relative aspect-[16/10] overflow-hidden lg:aspect-auto">
            <Image
              src={featured.image}
              alt={featured.title}
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
          </div>
          <div className="flex flex-col justify-center gap-4 p-8 sm:p-12">
            <div className="flex items-center gap-3 text-xs">
              <span className="rounded-full bg-brand-gradient px-3 py-1 font-semibold text-white">Featured</span>
              <span className="text-secondary">{featured.category}</span>
            </div>
            <h2 className="font-display text-3xl font-bold text-balance sm:text-4xl">{featured.title}</h2>
            <p className="leading-relaxed text-muted-foreground">{featured.excerpt}</p>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Calendar className="size-4" />
              {featured.date}
            </div>
            <button
              type="button"
              className="mt-2 inline-flex w-fit items-center gap-2 rounded-full border border-border px-5 py-3 text-sm font-semibold transition-colors hover:bg-background"
            >
              Read article <ArrowUpRight className="size-4" />
            </button>
          </div>
        </article>

        {/* Filters */}
        <div className="mt-14 flex flex-wrap items-center justify-center gap-2">
          {categories.map((c) => {
            const on = active === c
            return (
              <button
                key={c}
                type="button"
                onClick={() => setActive(c)}
                className={`rounded-full px-5 py-2.5 text-sm font-medium transition-colors ${
                  on
                    ? 'bg-brand-gradient text-white'
                    : 'border border-border bg-card text-muted-foreground hover:text-foreground'
                }`}
              >
                {c}
              </button>
            )
          })}
        </div>

        {/* Grid */}
        <motion.div layout className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {visible.map((post) => (
              <motion.article
                key={post.title}
                layout
                initial={{ opacity: 0, scale: 0.94 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.94 }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                className="group flex flex-col overflow-hidden rounded-3xl border border-border bg-card"
              >
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <span className="absolute left-4 top-4 rounded-full bg-background/70 px-3 py-1 text-xs font-medium backdrop-blur">
                    {post.category}
                  </span>
                </div>
                <div className="flex flex-1 flex-col gap-3 p-6">
                  <div className="flex items-center gap-2 text-xs text-muted-foreground">
                    <Calendar className="size-3.5" />
                    {post.date}
                  </div>
                  <h3 className="font-display text-xl font-semibold text-balance">{post.title}</h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">{post.excerpt}</p>
                  <button
                    type="button"
                    className="mt-auto inline-flex w-fit items-center gap-1.5 pt-2 text-sm font-semibold text-foreground transition-colors hover:text-primary"
                  >
                    Read more <ArrowUpRight className="size-4" />
                  </button>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  )
}
