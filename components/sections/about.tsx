'use client'

import { motion } from 'framer-motion'
import { Compass, Eye, Heart } from 'lucide-react'
import { SectionHeading } from '@/components/section-heading'
import { Reveal } from '@/components/anim/reveal'
import { BrandComposition } from '@/components/brand-composition'
import { valueKeywords } from '@/lib/site-data'

const pillars = [
  {
    icon: Compass,
    title: 'Mission',
    text: 'To empower businesses with innovative creative and technology solutions that inspire growth, strengthen brands, and create lasting digital experiences. We believe every business deserves a strong identity, a compelling online presence, and technology that works beautifully.',
  },
  {
    icon: Eye,
    title: 'Vision',
    text: "To become one of Africa's leading Creative Technology Companies, recognized globally for delivering world-class branding, digital experiences, software solutions, and innovative technologies that help businesses thrive.",
  },
]

export function About() {
  return (
    <section id="about" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="About Us"
          title={<>Where Vision Meets <span className="text-gradient">Creativity &amp; Technology</span></>}
          description="VisionVerve Creative (Pty) Ltd is a Creative Technology Company founded in 2024 in Cape Town, South Africa, on a shared belief that businesses deserve more than fragmented creative services—they deserve one trusted partner capable of bringing branding, design, technology, strategy, media, and innovation together."
        />

        <div className="mt-14 grid items-stretch gap-8 lg:grid-cols-2">
          <div className="relative min-h-96 overflow-hidden rounded-3xl border border-border">
            <BrandComposition caption="Founded 2024 • Cape Town, South Africa • Creating Experiences Worldwide" />
          </div>

          <div className="flex flex-col gap-4">
            <p className="text-pretty leading-relaxed text-muted-foreground">
              Too often, businesses are forced to work with multiple companies to build their digital presence.
              We created VisionVerve to simplify that journey by combining creativity, technology, and strategic
              thinking under one roof. Every project is designed to help businesses grow, connect with their
              audiences, and stand out through meaningful digital experiences.
            </p>

            {pillars.map((p, i) => (
              <Reveal key={p.title} delay={i}>
                <div className="group flex gap-5 rounded-3xl border border-border bg-card p-6 transition-colors hover:border-primary/40">
                  <div className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-brand-gradient text-white">
                    <p.icon className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-display text-lg font-semibold">{p.title}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{p.text}</p>
                  </div>
                </div>
              </Reveal>
            ))}

            <Reveal delay={2}>
              <div className="group rounded-3xl border border-border bg-card p-6 transition-colors hover:border-primary/40">
                <div className="flex gap-5">
                  <div className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-brand-gradient text-white">
                    <Heart className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-display text-lg font-semibold">Our Values</h3>
                    <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                      These values shape every decision we make and every experience we create.
                    </p>
                  </div>
                </div>
                <div className="mt-4 flex flex-wrap gap-2">
                  {valueKeywords.map((v) => (
                    <span
                      key={v}
                      className="rounded-full border border-border bg-background px-3 py-1 text-xs font-medium text-foreground/80"
                    >
                      {v}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  )
}
