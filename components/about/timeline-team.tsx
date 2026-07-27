'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { UserPlus } from 'lucide-react'
import { timeline, team } from '@/lib/site-data'
import { SectionHeading } from '@/components/section-heading'
import { Reveal } from '@/components/anim/reveal'

export function Timeline() {
  return (
    <section className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Our Journey"
          title={<>A young company with <span className="text-gradient">big ambition</span></>}
          description="The VisionVerve story is just beginning — here is how it has unfolded so far."
        />

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {timeline.map((t, i) => (
            <motion.div
              key={t.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="relative rounded-3xl border border-border bg-card p-6"
            >
              <span className="inline-block rounded-full bg-brand-gradient px-3 py-1 font-display text-xs font-bold text-white">
                {t.year}
              </span>
              <span className="mt-4 block h-px w-full bg-gradient-to-r from-primary/40 to-transparent" />
              <h3 className="mt-4 font-display text-lg font-semibold">{t.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{t.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export function Team() {
  return (
    <section className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeading
          align="center"
          eyebrow="Leadership Team"
          title={<>The people behind <span className="text-gradient">the vision</span></>}
          description="A multidisciplinary team of founders leading VisionVerve's creativity, technology and growth."
        />

        <div className="mx-auto mt-14 grid max-w-5xl gap-6 md:grid-cols-3">
          {team.map((m, i) => (
            <Reveal key={m.name} delay={i}>
              <div className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-border bg-card p-8 text-center transition-colors hover:border-primary/40">
                <div className="absolute -right-12 -top-12 h-40 w-40 rounded-full bg-primary/10 blur-3xl opacity-0 transition-opacity group-hover:opacity-100" />
                <div className="relative mx-auto grid h-24 w-24 place-items-center rounded-full border border-border bg-background">
                  <div className="absolute inset-0 rounded-full bg-brand-gradient opacity-10" />
                  <Image
                    src="/logos/favicon.png"
                    alt=""
                    width={48}
                    height={48}
                    className="relative h-12 w-12 object-contain"
                  />
                </div>
                <h3 className="mt-6 font-display text-lg font-semibold">{m.name}</h3>
                <p className="mt-1 text-sm font-medium text-secondary">{m.role}</p>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{m.bio}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 rounded-3xl border border-dashed border-border bg-card p-8 text-center sm:flex-row sm:text-left">
            <span className="grid h-12 w-12 place-items-center rounded-2xl bg-brand-gradient text-white">
              <UserPlus className="h-5 w-5" />
            </span>
            <div>
              <h3 className="font-display text-lg font-semibold">Want to join VisionVerve?</h3>
              <p className="text-sm text-muted-foreground">
                We are always looking for exceptional creative and technical talent. Reach out and introduce yourself.
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
