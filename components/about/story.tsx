'use client'

import Image from 'next/image'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { Compass, Eye } from 'lucide-react'
import { SectionHeading } from '@/components/section-heading'
import { Reveal } from '@/components/anim/reveal'

export function AboutStory() {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
  const imgY = useTransform(scrollYProgress, [0, 1], ['-10%', '10%'])

  return (
    <section className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <SectionHeading
              eyebrow="Our Story"
              title={<>Founded in 2024 to make <span className="text-gradient">creativity and code</span> one craft</>}
            />
            <div className="mt-6 space-y-4 text-pretty leading-relaxed text-muted-foreground">
              <p>
                VisionVerve Creative began in Cape Town with a single conviction: the most memorable brands
                are built where design, storytelling and engineering meet — not in separate rooms, but at one table.
              </p>
              <p>
                What started as a small studio quickly grew into a full-service creative technology partner,
                spanning branding, graphic design, photography, videography, websites and software. Every
                discipline sharpens the others, and every project is stronger for it.
              </p>
              <p>
                Today, VisionVerve is a collective of makers obsessed with detail and outcomes — helping
                ambitious brands look, feel and perform unmistakably like themselves.
              </p>
            </div>
          </div>

          <div ref={ref} className="relative aspect-[4/5] overflow-hidden rounded-3xl border border-border">
            <motion.div style={{ y: imgY }} className="absolute inset-0">
              <Image
                src="/images/studio.png"
                alt="The VisionVerve Creative studio"
                fill
                className="scale-110 object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </motion.div>
            <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 flex items-center gap-3">
              <Image src="/logos/favicon.png" alt="" width={36} height={36} className="h-9 w-9 object-contain" />
              <p className="font-display text-sm font-semibold">Cape Town, South Africa · Est. 2024</p>
            </div>
          </div>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-2">
          {[
            {
              icon: Compass,
              label: 'Mission',
              text: 'To fuse creativity and technology into experiences that move people and grow brands.',
            },
            {
              icon: Eye,
              label: 'Vision',
              text: 'A world where every brand we touch feels crafted, human and unforgettable.',
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
