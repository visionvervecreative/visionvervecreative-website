'use client'

import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import { whyChoose, stats } from '@/lib/site-data'
import { SectionHeading } from '@/components/section-heading'
import { Reveal } from '@/components/anim/reveal'
import { CountUp } from '@/components/anim/count-up'
import { Magnetic } from '@/components/anim/magnetic'

export function WhyChoose() {
  return (
    <section className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div className="lg:sticky lg:top-28">
            <SectionHeading
              eyebrow="Why VisionVerve"
              title={<>Why businesses <span className="text-gradient">choose VisionVerve</span></>}
              description="We don't simply deliver creative services—we become a long-term creative and technology partner dedicated to helping businesses innovate, grow, and succeed. Every solution we create is built around your goals, your audience, and your future."
            />

            <div className="mt-10 grid grid-cols-2 gap-4">
              {stats.map((s, i) => (
                <Reveal
                  key={s.label}
                  delay={i}
                  className={i === stats.length - 1 && stats.length % 2 === 1 ? 'col-span-2' : undefined}
                >
                  <div className="h-full rounded-2xl border border-border bg-card p-5">
                    <p className="font-display text-3xl font-bold">
                      <CountUp to={s.value} suffix={s.suffix} />
                    </p>
                    <p className="mt-1 text-sm text-muted-foreground">{s.label}</p>
                  </div>
                </Reveal>
              ))}
            </div>

            <Magnetic className="mt-8 inline-block">
              <Link
                href="/about"
                className="group inline-flex items-center gap-2 rounded-full border border-border px-5 py-3 text-sm font-semibold transition-colors hover:bg-card"
              >
                Learn our story
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            </Magnetic>
          </div>

          <ol className="relative space-y-4 border-l border-border pl-6 sm:pl-8">
            {whyChoose.map((item, i) => (
              <Reveal as="li" key={item.title} delay={i}>
                <span className="absolute -left-[13px] mt-1.5 grid h-6 w-6 place-items-center rounded-full bg-brand-gradient font-display text-[11px] font-bold text-white">
                  {i + 1}
                </span>
                <div className="rounded-3xl border border-border bg-card p-6 transition-colors hover:border-primary/40 sm:p-8">
                  <h3 className="font-display text-xl font-semibold sm:text-2xl">{item.title}</h3>
                  <p className="mt-2 leading-relaxed text-muted-foreground">{item.text}</p>
                </div>
              </Reveal>
            ))}
          </ol>
        </div>
      </div>
    </section>
  )
}
