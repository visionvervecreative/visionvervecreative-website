'use client'

import Image from 'next/image'
import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import { blogPosts } from '@/lib/site-data'
import { SectionHeading } from '@/components/section-heading'
import { Reveal } from '@/components/anim/reveal'

export function Blog() {
  const featured = blogPosts.find((p) => p.featured) ?? blogPosts[0]
  const rest = blogPosts.filter((p) => p !== featured)

  return (
    <section id="blog" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
          <SectionHeading
            eyebrow="Journal"
            title="Ideas, craft & field notes"
            description="Perspectives from our studio on brand, design and technology."
          />
          <Link
            href="/blog"
            className="group inline-flex shrink-0 items-center gap-2 rounded-full border border-border px-5 py-3 text-sm font-semibold transition-colors hover:bg-card"
          >
            View all insights
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-2">
          <Reveal>
            <article className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-border bg-card">
              <div className="relative aspect-[16/10] overflow-hidden">
                <Image
                  src={featured.image || '/placeholder.svg'}
                  alt={featured.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(min-width: 1024px) 40vw, 100vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                <span className="absolute left-5 top-5 rounded-full bg-primary px-3 py-1 text-xs font-medium text-primary-foreground">
                  {featured.category}
                </span>
              </div>
              <div className="flex flex-1 flex-col p-7">
                <p className="text-sm text-muted-foreground">{featured.date}</p>
                <h3 className="mt-2 font-serif text-2xl leading-tight text-balance sm:text-3xl">
                  {featured.title}
                </h3>
                <p className="mt-3 text-muted-foreground leading-relaxed">{featured.excerpt}</p>
                <span className="mt-6 inline-flex items-center gap-1 text-sm font-medium text-primary">
                  Read article <ArrowUpRight className="size-4" />
                </span>
              </div>
            </article>
          </Reveal>

          <div className="grid gap-6">
            {rest.map((post, i) => (
              <Reveal key={post.title} delay={i * 0.08}>
                <article className="group flex gap-5 overflow-hidden rounded-3xl border border-border bg-card p-4 transition-colors hover:border-primary/40">
                  <div className="relative aspect-square w-28 shrink-0 overflow-hidden rounded-2xl sm:w-36">
                    <Image
                      src={post.image || '/placeholder.svg'}
                      alt={post.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                      sizes="150px"
                    />
                  </div>
                  <div className="flex flex-col justify-center">
                    <div className="flex items-center gap-3 text-xs text-muted-foreground">
                      <span className="text-primary">{post.category}</span>
                      <span>{post.date}</span>
                    </div>
                    <h3 className="mt-2 font-serif text-lg leading-tight text-balance sm:text-xl">
                      {post.title}
                    </h3>
                    <p className="mt-2 line-clamp-2 text-sm text-muted-foreground leading-relaxed">
                      {post.excerpt}
                    </p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
