'use client'

import Image from 'next/image'
import { Reveal } from '@/components/anim/reveal'
import { SectionHeading } from '@/components/section-heading'
import { BeforeAfter } from '@/components/before-after'
import { CountUp } from '@/components/anim/count-up'

const chapters = [
  { label: 'Challenge', text: 'Aurora’s legacy store was slow, off-brand and converting below industry benchmarks.' },
  { label: 'Research', text: 'We audited analytics, ran user interviews and mapped the full purchase journey.' },
  { label: 'Solution', text: 'A headless rebuild with a modular design system and a refreshed visual identity.' },
  { label: 'Design', text: 'A confident, editorial art direction balancing product focus with brand storytelling.' },
  { label: 'Development', text: 'Next.js, edge rendering and image optimization for sub-second loads.' },
]

const results = [
  { value: 312, suffix: '%', label: 'Revenue growth' },
  { value: 3, suffix: 'x', label: 'Faster load time' },
  { value: 64, suffix: '%', label: 'Higher conversion' },
]

export function CaseStudy() {
  return (
    <section id="case-studies" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
          <SectionHeading
            eyebrow="Case Study"
            title={<>Aurora Commerce, <span className="text-gradient">reimagined</span></>}
            description="How a full-stack rebrand and rebuild turned a struggling storefront into a category leader."
          />
          <Image
            src="/logos/sub.png"
            alt="VisionVerve Creative Tech"
            width={240}
            height={70}
            className="hidden h-12 w-auto object-contain opacity-90 lg:block"
          />
        </div>

        <div className="mt-14 grid gap-10 lg:grid-cols-2">
          <div className="space-y-6">
            {chapters.map((c, i) => (
              <Reveal key={c.label} delay={i}>
                <div className="flex gap-5">
                  <span className="font-display text-sm font-bold text-secondary">{String(i + 1).padStart(2, '0')}</span>
                  <div className="border-l border-border pl-5">
                    <h3 className="font-display text-lg font-semibold">{c.label}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{c.text}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          <div className="space-y-6">
            <Reveal>
              <BeforeAfter
                before="/images/project-web.png"
                after="/images/showcase-web.png"
                beforeLabel="Legacy site"
                afterLabel="Redesign"
              />
            </Reveal>
            <div className="grid grid-cols-3 gap-4">
              {results.map((r, i) => (
                <Reveal key={r.label} delay={i}>
                  <div className="rounded-2xl border border-border bg-card p-5 text-center">
                    <p className="font-display text-2xl font-bold text-gradient sm:text-3xl">
                      <CountUp to={r.value} suffix={r.suffix} />
                    </p>
                    <p className="mt-1 text-xs text-muted-foreground">{r.label}</p>
                  </div>
                </Reveal>
              ))}
            </div>
            <Reveal>
              <blockquote className="rounded-3xl border border-border bg-card p-6">
                <p className="text-pretty leading-relaxed">
                  &ldquo;VisionVerve delivered beyond the brief. Our store finally feels as premium as our products.&rdquo;
                </p>
                <footer className="mt-4 text-sm text-muted-foreground">
                  Elena Fischer — CMO, Aurora Retail Group
                </footer>
              </blockquote>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  )
}
