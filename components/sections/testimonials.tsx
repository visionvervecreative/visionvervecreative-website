'use client'

import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Quote, ArrowLeft, ArrowRight, Play } from 'lucide-react'
import { testimonials } from '@/lib/site-data'
import { SectionHeading } from '@/components/section-heading'

export function Testimonials() {
  const [index, setIndex] = useState(0)
  const [dir, setDir] = useState(1)
  const t = testimonials[index]

  const go = (n: number) => {
    setDir(n)
    setIndex((i) => (i + n + testimonials.length) % testimonials.length)
  }

  return (
    <section id="testimonials" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Testimonials"
          title={<>Loved by the teams <span className="text-gradient">we build with</span></>}
          align="center"
        />

        <div className="relative mx-auto mt-14 max-w-3xl">
          <div className="pointer-events-none absolute -inset-10 -z-10 rounded-full bg-primary/10 blur-3xl" />
          <div className="gradient-border overflow-hidden p-8 sm:p-12">
            <Quote className="h-10 w-10 text-secondary" />
            <div className="relative min-h-[9rem]">
              <AnimatePresence mode="wait" custom={dir}>
                <motion.blockquote
                  key={index}
                  custom={dir}
                  initial={{ opacity: 0, x: dir * 40 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: dir * -40 }}
                  transition={{ duration: 0.4 }}
                  className="mt-4"
                >
                  <p className="font-display text-xl leading-relaxed text-balance sm:text-2xl">{t.quote}</p>
                  <footer className="mt-6 flex items-center gap-4">
                    <span className="grid h-12 w-12 place-items-center rounded-full bg-brand-gradient font-display text-sm font-bold text-white">
                      {t.name.split(' ').map((n) => n[0]).join('')}
                    </span>
                    <span>
                      <span className="block font-semibold">{t.name}</span>
                      <span className="block text-sm text-muted-foreground">{t.role}</span>
                    </span>
                    <button
                      aria-label="Play video testimonial"
                      className="ml-auto inline-flex items-center gap-2 rounded-full border border-border px-4 py-2 text-xs font-medium transition-colors hover:bg-card"
                    >
                      <Play className="h-3.5 w-3.5 text-secondary" /> Watch
                    </button>
                  </footer>
                </motion.blockquote>
              </AnimatePresence>
            </div>
          </div>

          <div className="mt-8 flex items-center justify-center gap-4">
            <button
              onClick={() => go(-1)}
              aria-label="Previous testimonial"
              className="grid h-11 w-11 place-items-center rounded-full border border-border transition-colors hover:bg-card"
            >
              <ArrowLeft className="h-4 w-4" />
            </button>
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => {
                    setDir(i > index ? 1 : -1)
                    setIndex(i)
                  }}
                  aria-label={`Go to testimonial ${i + 1}`}
                  className={`h-2 rounded-full transition-all ${i === index ? 'w-8 bg-brand-gradient' : 'w-2 bg-border'}`}
                />
              ))}
            </div>
            <button
              onClick={() => go(1)}
              aria-label="Next testimonial"
              className="grid h-11 w-11 place-items-center rounded-full border border-border transition-colors hover:bg-card"
            >
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
