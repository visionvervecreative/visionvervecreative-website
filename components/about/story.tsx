'use client'

import { Compass, Eye } from 'lucide-react'
import { SectionHeading } from '@/components/section-heading'
import { Reveal } from '@/components/anim/reveal'
import { BrandComposition } from '@/components/brand-composition'

export function AboutStory() {
  return (
    <section className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <SectionHeading
              eyebrow="Our Story"
              title={<>Where ideas become <span className="text-gradient">extraordinary experiences</span></>}
            />
            <div className="mt-6 space-y-4 text-pretty leading-relaxed text-muted-foreground">
              <p>
                VisionVerve was founded on a shared belief that businesses deserve more than fragmented
                services—they deserve a creative partner capable of bringing every aspect of their digital
                presence together.
              </p>
              <p>
                Too often, businesses are forced to work with multiple agencies for branding, websites, software,
                marketing, photography, and content creation. We saw an opportunity to simplify that experience by
                creating a company where creativity, technology, and strategy work together under one roof.
              </p>
              <p>
                Instead of offering isolated services, we envisioned a multidisciplinary Creative Technology
                Company where designers, developers, strategists, photographers, filmmakers, and creative thinkers
                collaborate to deliver complete, future-ready solutions.
              </p>
            </div>
          </div>

          <div className="relative aspect-[4/5] overflow-hidden rounded-3xl border border-border">
            <BrandComposition caption="Cape Town, South Africa • Est. 2024" />
          </div>
        </div>

        <Reveal>
          <div className="mt-16 rounded-3xl border border-border bg-card p-8 sm:p-10">
            <h3 className="font-display text-2xl font-semibold">Our name reflects who we are</h3>
            <div className="mt-6 grid gap-6 md:grid-cols-2">
              <div className="rounded-2xl border border-border bg-background p-6">
                <span className="font-display text-3xl font-bold text-gradient">Vision</span>
                <p className="mt-3 leading-relaxed text-muted-foreground">
                  Clarity, innovation, strategic thinking, and seeing opportunities before they become
                  possibilities.
                </p>
              </div>
              <div className="rounded-2xl border border-border bg-background p-6">
                <span className="font-display text-3xl font-bold text-gradient">Verve</span>
                <p className="mt-3 leading-relaxed text-muted-foreground">
                  Creativity, passion, energy, and the relentless pursuit of excellence.
                </p>
              </div>
            </div>
            <p className="mt-6 text-pretty leading-relaxed text-muted-foreground">
              Together, VisionVerve represents our commitment to transforming bold ideas into impactful digital
              experiences through creativity, technology, and innovation.
            </p>
          </div>
        </Reveal>

        <div className="mt-16 grid gap-6 md:grid-cols-2">
          {[
            {
              icon: Compass,
              label: 'Mission',
              text: 'To empower businesses with innovative creative and technology solutions that inspire growth, strengthen brands, and create lasting digital experiences.',
            },
            {
              icon: Eye,
              label: 'Vision',
              text: "To become one of Africa's leading Creative Technology Companies, recognized globally for delivering world-class branding, digital experiences, software solutions, and innovative technologies.",
            },
          ].map((p, i) => (
            <Reveal key={p.label} delay={i}>
              <div className="relative overflow-hidden rounded-3xl border border-border bg-card p-8">
                <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-primary/10 blur-3xl" />
                <div className="grid h-12 w-12 place-items-center rounded-2xl bg-brand-gradient text-white">
                  <p.icon className="h-5 w-5" />
                </div>
                <h3 className="mt-5 font-display text-2xl font-semibold">Our {p.label}</h3>
                <p className="mt-3 text-pretty leading-relaxed text-muted-foreground">{p.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
