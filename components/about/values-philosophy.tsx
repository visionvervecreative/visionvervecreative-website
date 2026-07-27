'use client'

import { motion } from 'framer-motion'
import { Sparkles } from 'lucide-react'
import { coreValues, philosophy, beliefs } from '@/lib/site-data'
import { SectionHeading } from '@/components/section-heading'
import { Reveal } from '@/components/anim/reveal'

export function CoreValues() {
  return (
    <section className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeading
          align="center"
          eyebrow="Our Values"
          title={<>The principles that <span className="text-gradient">guide every decision</span></>}
          description="These values shape every decision we make and every experience we create."
        />

        <div className="mt-14 grid gap-px overflow-hidden rounded-3xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
          {coreValues.map((v, i) => (
            <motion.div
              key={v.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: (i % 3) * 0.08 }}
              className="group relative bg-card p-8 transition-colors hover:bg-background"
            >
              <span className="font-display text-4xl font-bold text-transparent [-webkit-text-stroke:1px_var(--border)] transition-all group-hover:[-webkit-text-stroke:1px_transparent] group-hover:text-gradient">
                0{i + 1}
              </span>
              <h3 className="mt-4 font-display text-lg font-semibold">{v.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{v.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export function WhatWeBelieve() {
  return (
    <section className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeading
          align="center"
          eyebrow="What We Believe"
          title={<>The convictions <span className="text-gradient">behind our work</span></>}
          description="We don't just build brands. We create experiences—guided by a set of beliefs that shape everything we do."
        />

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {beliefs.map((b, i) => (
            <motion.div
              key={b}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: (i % 3) * 0.08 }}
              className="group relative overflow-hidden rounded-3xl border border-border bg-card p-8 transition-colors hover:border-primary/40"
            >
              <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-primary/10 blur-3xl opacity-0 transition-opacity group-hover:opacity-100" />
              <span className="grid h-11 w-11 place-items-center rounded-2xl bg-brand-gradient text-white">
                <Sparkles className="h-5 w-5" />
              </span>
              <p className="mt-5 text-pretty font-display text-lg font-medium leading-relaxed">{b}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export function Philosophy() {
  return (
    <section className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
          <SectionHeading
            eyebrow="Creative Philosophy"
            title={<>Why we <span className="text-gradient">exist</span></>}
            description="We exist to prove that brands do not have to choose between beautiful and functional, between art and engineering. When they come together, something rare happens — work that people remember and businesses that grow."
          />

          <div className="grid gap-4">
            {philosophy.map((p, i) => (
              <Reveal key={p.title} delay={i}>
                <div className="flex items-start gap-5 rounded-3xl border border-border bg-card p-6 transition-colors hover:border-primary/40 sm:p-8">
                  <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-brand-gradient font-display text-sm font-bold text-white">
                    {i + 1}
                  </span>
                  <div>
                    <h3 className="font-display text-xl font-semibold">{p.title}</h3>
                    <p className="mt-1 leading-relaxed text-muted-foreground">{p.text}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
