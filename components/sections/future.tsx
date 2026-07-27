'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import { futureRoadmap, futureStatement } from '@/lib/site-data'
import { SectionHeading } from '@/components/section-heading'
import { Reveal } from '@/components/anim/reveal'

export function Future() {
  return (
    <section className="relative overflow-hidden py-24 sm:py-32">
      {/* Decorative sub-logo watermark */}
      <Image
        src="/logos/sub.png"
        alt=""
        aria-hidden
        width={520}
        height={520}
        className="pointer-events-none absolute -right-24 top-10 h-[420px] w-[420px] object-contain opacity-[0.04]"
      />

      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeading
          align="center"
          eyebrow="The Future We're Building"
          title={<>Building more than a <span className="text-gradient">creative technology company</span></>}
          description="VisionVerve is building an ecosystem where creativity, innovation and technology compound over time. Here's where we're headed."
        />

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {futureRoadmap.map((item, i) => (
            <motion.div
              key={item}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: (i % 3) * 0.08 }}
              className="group relative flex items-center gap-4 overflow-hidden rounded-2xl border border-border bg-card p-5 transition-colors hover:border-primary/40"
            >
              <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl border border-border bg-background font-display text-sm font-bold text-transparent [-webkit-text-stroke:1px_var(--border)] transition-all group-hover:[-webkit-text-stroke:1px_transparent] group-hover:text-gradient">
                {String(i + 1).padStart(2, '0')}
              </span>
              <span className="font-display text-base font-semibold text-pretty">{item}</span>
              <ArrowUpRight className="ml-auto h-4 w-4 shrink-0 text-muted-foreground opacity-0 transition-opacity group-hover:opacity-100" />
            </motion.div>
          ))}
        </div>

        <Reveal>
          <div className="mt-12 rounded-3xl border border-border bg-brand-gradient p-px">
            <div className="rounded-[calc(1.5rem-1px)] bg-card px-8 py-10 text-center sm:px-14">
              <p className="mx-auto max-w-3xl text-balance font-display text-xl font-semibold leading-relaxed sm:text-2xl">
                {futureStatement}
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
