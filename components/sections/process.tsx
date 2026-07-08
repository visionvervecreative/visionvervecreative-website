'use client'

import { useRef } from 'react'
import Image from 'next/image'
import { motion, useScroll, useTransform } from 'framer-motion'
import { processSteps } from '@/lib/site-data'
import { SectionHeading } from '@/components/section-heading'

export function Process() {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start 60%', 'end 60%'] })
  const height = useTransform(scrollYProgress, [0, 1], ['0%', '100%'])

  return (
    <section id="process" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
          <SectionHeading
            eyebrow="Process"
            title={<>A proven path from <span className="text-gradient">idea to impact</span></>}
            description="Eight deliberate stages that keep momentum high and surprises low, so the work stays on-brief, on-brand and on-time."
          />
          <Image
            src="/logos/sub.png"
            alt="VisionVerve Creative Tech"
            width={260}
            height={80}
            className="hidden h-14 w-auto object-contain opacity-90 lg:block"
          />
        </div>

        <div ref={ref} className="relative mt-16 pl-8 sm:pl-0">
          {/* Center line */}
          <div className="absolute left-[11px] top-0 h-full w-px bg-border sm:left-1/2 sm:-translate-x-1/2">
            <motion.div style={{ height }} className="w-full bg-brand-gradient" />
          </div>

          <div className="space-y-10">
            {processSteps.map((s, i) => (
              <Step key={s.step} step={s} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function Step({ step, index }: { step: (typeof processSteps)[number]; index: number }) {
  const left = index % 2 === 0
  return (
    <div className={`relative flex ${left ? 'sm:justify-start' : 'sm:justify-end'}`}>
      <span className="absolute left-[11px] top-2 z-10 h-3.5 w-3.5 -translate-x-1/2 rounded-full bg-brand-gradient ring-4 ring-background sm:left-1/2" />
      <motion.div
        initial={{ opacity: 0, x: left ? -40 : 40, filter: 'blur(6px)' }}
        whileInView={{ opacity: 1, x: 0, filter: 'blur(0px)' }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className={`ml-8 w-full rounded-3xl border border-border bg-card p-6 sm:ml-0 sm:w-[46%] ${
          left ? '' : 'sm:text-right'
        }`}
      >
        <span className="font-display text-sm font-bold text-secondary">{step.step}</span>
        <h3 className="mt-1 font-display text-xl font-semibold">{step.title}</h3>
        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{step.text}</p>
      </motion.div>
    </div>
  )
}
