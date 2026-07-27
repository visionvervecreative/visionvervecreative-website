'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { Brain, Boxes, Rocket, Globe, Building2, FlaskConical, Clapperboard, Sprout, GraduationCap, Layers } from 'lucide-react'
import { ecosystemPillars, futureIntro, futureStatement } from '@/lib/site-data'
import { Reveal } from '@/components/anim/reveal'

const icons = [Brain, Boxes, Rocket, Globe, Building2, FlaskConical, Clapperboard, Sprout, GraduationCap, Layers]

const tierLabel: Record<string, string> = {
  now: 'Live Now',
  building: 'In Progress',
  vision: 'On the Horizon',
}

const tierDot: Record<string, string> = {
  now: 'bg-secondary',
  building: 'bg-accent',
  vision: 'bg-primary',
}

// Roadmap reads as a progression: what we run today → what we're building → what's next.
const tierOrder: Record<string, number> = { now: 0, building: 1, vision: 2 }
const phases = [
  { tier: 'now', label: 'Live Now', text: 'Solutions delivering value today' },
  { tier: 'building', label: 'In Progress', text: 'Actively building and scaling' },
  { tier: 'vision', label: 'On the Horizon', text: "The ecosystem we're growing toward" },
] as const

export function Future() {
  return (
    <section className="relative overflow-hidden py-24 sm:py-32">
      {/* Layered ambient depth */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-1/3 h-[36rem] w-[36rem] -translate-x-1/2 rounded-full bg-primary/10 blur-[140px]" />
        <div className="absolute right-0 top-0 h-[28rem] w-[28rem] rounded-full bg-accent/10 blur-[140px]" />
        <div className="absolute bottom-0 left-0 h-[26rem] w-[26rem] rounded-full bg-secondary/10 blur-[140px]" />
        <Image
          src="/logos/sub.png"
          alt=""
          aria-hidden
          width={640}
          height={640}
          className="absolute left-1/2 top-1/2 h-[560px] w-[560px] -translate-x-1/2 -translate-y-1/2 object-contain opacity-[0.03]"
        />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        {/* Heading */}
        <div className="mx-auto max-w-3xl text-center">
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full border border-border px-4 py-1.5 text-xs uppercase tracking-[0.25em] text-muted-foreground glass">
              <span className="h-1.5 w-1.5 rounded-full bg-brand-gradient" />
              The Ecosystem
            </span>
          </Reveal>
          <Reveal delay={1}>
            <h2 className="mt-6 text-balance font-display text-[clamp(2rem,5vw,3.5rem)] font-bold leading-[1.05] tracking-tight">
              {'Building '}
              <span className="text-gradient">Africa&apos;s Next</span>
              {' Creative Technology Ecosystem'}
            </h2>
          </Reveal>
          <Reveal delay={2}>
            <p className="mx-auto mt-6 max-w-2xl text-pretty leading-relaxed text-muted-foreground">
              {futureIntro}
            </p>
          </Reveal>
        </div>

        {/* Ecosystem constellation */}
        <div className="relative mt-16">
          {/* Central hub */}
          <Reveal>
            <div className="relative mx-auto mb-12 flex max-w-md flex-col items-center">
              <div className="relative grid h-24 w-24 place-items-center rounded-3xl bg-brand-gradient p-px shadow-2xl shadow-primary/30">
                <div className="grid h-full w-full place-items-center rounded-[calc(1.5rem-1px)] bg-card">
                  <Image src="/logos/favicon.png" alt="VisionVerve" width={52} height={52} className="h-12 w-12 object-contain" />
                </div>
                <span className="absolute inset-0 -z-10 animate-ping rounded-3xl bg-primary/20" style={{ animationDuration: '3s' }} />
              </div>
              <p className="mt-4 text-center font-display text-sm font-semibold">One connected vision</p>
              {/* connecting stem */}
              <div className="mt-4 h-10 w-px bg-gradient-to-b from-primary/60 to-transparent" />
            </div>
          </Reveal>

          {/* Roadmap phase legend */}
          <Reveal>
            <div className="mb-10 grid gap-3 sm:grid-cols-3">
              {phases.map((phase, i) => (
                <div
                  key={phase.tier}
                  className="relative flex items-center gap-3 rounded-2xl border border-border bg-card/40 px-4 py-3 backdrop-blur-sm"
                >
                  <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full border border-border font-display text-xs font-bold text-muted-foreground">
                    {i + 1}
                  </span>
                  <span className={`h-2 w-2 shrink-0 rounded-full ${tierDot[phase.tier]}`} />
                  <div className="min-w-0">
                    <p className="font-display text-sm font-semibold leading-none">{phase.label}</p>
                    <p className="mt-1 truncate text-xs text-muted-foreground">{phase.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>

          {/* Pillar grid — layered glass panels, ordered as a roadmap progression */}
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {[...ecosystemPillars]
              .map((pillar, i) => ({ pillar, Icon: icons[i] }))
              .sort((a, b) => tierOrder[a.pillar.tier] - tierOrder[b.pillar.tier])
              .map(({ pillar, Icon }, i) => {
              const spanClass = i % 5 === 0 ? 'lg:col-span-2' : ''
              return (
                <motion.article
                  key={pillar.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-60px' }}
                  transition={{ duration: 0.55, delay: (i % 3) * 0.08, ease: [0.22, 1, 0.36, 1] }}
                  className={`group relative overflow-hidden rounded-3xl border border-border bg-card/60 p-6 backdrop-blur-xl transition-all duration-500 hover:-translate-y-1 hover:border-primary/40 hover:shadow-2xl hover:shadow-primary/10 ${spanClass}`}
                >
                  {/* animated gradient glow on hover */}
                  <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-brand-gradient opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-20" />

                  <div className="relative flex items-start justify-between gap-4">
                    <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl border border-border bg-background text-primary transition-colors duration-500 group-hover:border-primary/40">
                      <Icon className="h-6 w-6 transition-transform duration-500 group-hover:scale-110" />
                    </span>
                    <span className="inline-flex items-center gap-1.5 rounded-full border border-border px-2.5 py-1 text-[10px] uppercase tracking-[0.15em] text-muted-foreground">
                      <span className={`h-1.5 w-1.5 rounded-full ${tierDot[pillar.tier]}`} />
                      {tierLabel[pillar.tier]}
                    </span>
                  </div>

                  <h3 className="relative mt-5 text-pretty font-display text-lg font-semibold leading-snug">
                    {pillar.title}
                  </h3>
                  <p className="relative mt-2 text-sm leading-relaxed text-muted-foreground">{pillar.text}</p>

                  {/* bottom connecting line */}
                  <span className="absolute bottom-0 left-6 right-6 h-px scale-x-0 bg-brand-gradient transition-transform duration-500 group-hover:scale-x-100" />
                </motion.article>
              )
            })}
          </div>
        </div>

        {/* Closing statement */}
        <Reveal>
          <div className="relative mt-16 overflow-hidden rounded-[2rem] border border-border bg-brand-gradient p-px">
            <div className="relative rounded-[calc(2rem-1px)] bg-card px-8 py-14 text-center sm:px-16">
              <div className="pointer-events-none absolute left-1/2 top-0 h-40 w-40 -translate-x-1/2 rounded-full bg-primary/15 blur-3xl" />
              <p className="relative mx-auto max-w-3xl text-balance font-display text-2xl font-bold leading-tight sm:text-3xl">
                {futureStatement}
              </p>
              <p className="relative mx-auto mt-4 max-w-xl text-pretty text-sm leading-relaxed text-muted-foreground">
                VisionVerve is a Creative Technology Company — building brands, software, AI solutions and the future of
                innovation in Africa.
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
