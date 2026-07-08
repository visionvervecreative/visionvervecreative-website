'use client'

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
          title={<>A young studio with <span className="text-gradient">big ambition</span></>}
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
          eyebrow="The Team"
          title={<>The people behind <span className="text-gradient">the vision</span></>}
          description="We are growing a collective of strategists, designers, filmmakers and engineers. These seats are filling fast."
        />

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {team.map((m, i) => (
            <Reveal key={m.role} delay={i}>
              <div className="group relative overflow-hidden rounded-3xl border border-border bg-card p-8 text-center">
                <div className="mx-auto grid h-20 w-20 place-items-center rounded-full border border-dashed border-border bg-background font-display text-lg font-bold text-muted-foreground transition-colors group-hover:border-primary/50">
                  {m.initials}
                </div>
                <h3 className="mt-5 font-display text-lg font-semibold">{m.name}</h3>
                <p className="mt-1 text-sm text-secondary">{m.role}</p>
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
