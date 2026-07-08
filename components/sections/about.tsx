'use client'

import Image from 'next/image'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { Compass, Eye, Heart } from 'lucide-react'
import { SectionHeading } from '@/components/section-heading'
import { Reveal } from '@/components/anim/reveal'

const pillars = [
  { icon: Compass, title: 'Mission', text: 'To fuse creativity and technology into experiences that move people and grow brands.' },
  { icon: Eye, title: 'Vision', text: 'A world where every brand we touch feels crafted, human and unforgettable.' },
  { icon: Heart, title: 'Values', text: 'Craft over shortcuts, honesty over hype, and partnership over transactions.' },
]

export function About() {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
  const imgY = useTransform(scrollYProgress, [0, 1], ['-8%', '8%'])

  return (
    <section id="about" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="About Us"
          title={<>A studio where <span className="text-gradient">craft meets code</span></>}
          description="VisionVerve Creative was founded on a simple belief: the best work happens when designers, storytellers and engineers build side by side. We are a collective of makers obsessed with detail and outcomes."
        />

        <div className="mt-14 grid items-stretch gap-8 lg:grid-cols-2">
          <div ref={ref} className="relative overflow-hidden rounded-3xl border border-border">
            <motion.div style={{ y: imgY }} className="relative h-full min-h-80">
              <Image
                src="/images/studio.png"
                alt="VisionVerve Creative studio at work"
                fill
                className="scale-110 object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </motion.div>
            <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
            <div className="absolute bottom-6 left-6 flex items-center gap-3">
              <Image src="/logos/favicon.png" alt="" width={36} height={36} className="h-9 w-9 object-contain" />
              <p className="font-display text-sm font-semibold">Est. 2024 · Cape Town · Remote-friendly</p>
            </div>
          </div>

          <div className="flex flex-col gap-4">
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
          </div>
        </div>
      </div>
    </section>
  )
}
