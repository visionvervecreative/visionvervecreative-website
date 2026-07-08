'use client'

import { useRef } from 'react'
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import { services, type Service } from '@/lib/site-data'
import { SectionHeading } from '@/components/section-heading'
import { Reveal } from '@/components/anim/reveal'

export function Services() {
  return (
    <section id="services" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Services"
          title={<>Everything you need, <span className="text-gradient">under one roof</span></>}
          description="Six disciplines, one integrated team. We move between brand, product, film and engineering without the handoffs and gaps that slow most agencies down."
        />

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => (
            <Reveal key={service.title} delay={i % 3}>
              <ServiceCard service={service} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

function ServiceCard({ service }: { service: Service }) {
  const ref = useRef<HTMLDivElement>(null)
  const mx = useMotionValue(0.5)
  const my = useMotionValue(0.5)
  const rotateX = useSpring(useTransform(my, [0, 1], [8, -8]), { stiffness: 200, damping: 20 })
  const rotateY = useSpring(useTransform(mx, [0, 1], [-8, 8]), { stiffness: 200, damping: 20 })
  const glowX = useTransform(mx, (v) => `${v * 100}%`)
  const glowY = useTransform(my, (v) => `${v * 100}%`)

  const onMove = (e: React.MouseEvent) => {
    const rect = ref.current?.getBoundingClientRect()
    if (!rect) return
    mx.set((e.clientX - rect.left) / rect.width)
    my.set((e.clientY - rect.top) / rect.height)
  }
  const reset = () => {
    mx.set(0.5)
    my.set(0.5)
  }

  const Icon = service.icon

  return (
    <motion.div
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={reset}
      data-cursor="Explore"
      style={{ rotateX, rotateY, transformPerspective: 1000 }}
      whileHover={{ y: -6 }}
      className="group relative h-full overflow-hidden rounded-3xl border border-border bg-card p-7"
    >
      <motion.div
        className="pointer-events-none absolute -inset-px opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background: useTransform(
            [glowX, glowY],
            ([gx, gy]) => `radial-gradient(300px circle at ${gx} ${gy}, color-mix(in oklab, var(--brand-indigo) 22%, transparent), transparent 70%)`,
          ),
        }}
      />
      <div className="relative">
        <div className="mb-6 grid h-14 w-14 place-items-center rounded-2xl border border-border bg-background transition-colors group-hover:border-primary/50">
          <Icon className="h-6 w-6 text-secondary" />
        </div>
        <h3 className="font-display text-xl font-semibold">{service.title}</h3>
        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{service.description}</p>
        <ul className="mt-5 flex flex-wrap gap-2">
          {service.points.map((p) => (
            <li key={p} className="rounded-full border border-border px-3 py-1 text-xs text-muted-foreground">
              {p}
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  )
}
