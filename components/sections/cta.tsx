'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import { Particles } from '@/components/anim/particles'
import { Magnetic } from '@/components/anim/magnetic'

export function CTA({
  eyebrow = 'Start a project',
  title = "Let's build something unforgettable",
  description = 'Tell us about your vision. We reply within one business day and turn ambitious ideas into experiences people remember.',
}: {
  eyebrow?: string
  title?: string
  description?: string
}) {
  return (
    <section className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="relative overflow-hidden rounded-[2rem] border border-border bg-card px-6 py-16 text-center sm:px-12 sm:py-24">
          <div aria-hidden className="pointer-events-none absolute inset-0">
            <div className="absolute left-1/2 top-1/2 h-[30rem] w-[30rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/20 blur-[120px]" />
            <div className="absolute bottom-0 right-10 h-64 w-64 rounded-full bg-secondary/20 blur-[100px]" />
            <Particles className="absolute inset-0" />
          </div>

          <div className="relative mx-auto max-w-3xl">
            <motion.span
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 rounded-full border border-border px-3 py-1 text-xs font-medium uppercase tracking-widest text-secondary"
            >
              {eyebrow}
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20, filter: 'blur(8px)' }}
              whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="mt-6 font-display text-[clamp(2rem,5vw,3.75rem)] font-bold leading-[1.03] tracking-tight text-balance"
            >
              {title}
            </motion.h2>
            <p className="mx-auto mt-5 max-w-xl text-pretty leading-relaxed text-muted-foreground">
              {description}
            </p>

            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Magnetic>
                <Link
                  href="/contact"
                  data-cursor="Let's talk"
                  className="group inline-flex items-center gap-2 rounded-full bg-brand-gradient px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-primary/20"
                >
                  Start your project
                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </Link>
              </Magnetic>
              <Link
                href="/portfolio"
                className="inline-flex items-center gap-2 rounded-full border border-border px-7 py-3.5 text-sm font-semibold transition-colors hover:bg-background"
              >
                See our work
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
