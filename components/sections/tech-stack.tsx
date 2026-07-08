'use client'

import { motion } from 'framer-motion'
import { techStack } from '@/lib/site-data'
import { SectionHeading } from '@/components/section-heading'

export function TechStack() {
  return (
    <section className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Tech Stack"
          title={<>Tools we&apos;ve <span className="text-gradient">mastered</span></>}
          description="A modern, battle-tested toolkit that lets us move fast without compromising on quality."
          align="center"
        />

        <div className="mx-auto mt-14 flex max-w-4xl flex-wrap justify-center gap-3">
          {techStack.map((tech, i) => (
            <motion.span
              key={tech}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.04, type: 'spring', stiffness: 260, damping: 20 }}
              whileHover={{ y: -4, scale: 1.05 }}
              data-cursor=""
              className="rounded-2xl border border-border bg-card px-6 py-3 font-display text-lg font-semibold text-muted-foreground transition-colors hover:border-primary/50 hover:text-foreground"
            >
              {tech}
            </motion.span>
          ))}
        </div>
      </div>
    </section>
  )
}
