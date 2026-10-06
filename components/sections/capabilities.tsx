'use client'

import { useState } from 'react'
import Link from 'next/link'
import {
  ArrowUpRight,
  AudioLines,
  Camera,
  Code2,
  Layers3,
  MonitorPlay,
  Palette,
  Play,
  Radio,
  Sparkles,
  Video,
  Workflow,
} from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { Reveal } from '@/components/anim/reveal'

const capabilities = [
  {
    number: '01',
    title: 'Creative',
    description: 'We shape the identities, stories and visual worlds that make businesses memorable.',
    icon: Palette,
    services: ['Branding & Graphic Design', 'Photography', 'Videography', 'Visual Storytelling'],
    accent: 'from-primary/30 via-primary/5 to-transparent',
  },
  {
    number: '02',
    title: 'Digital & Technology',
    description: 'We turn ambitious ideas into useful digital products, platforms and intelligent systems.',
    icon: Code2,
    services: ['Web Development', 'Software Solutions', 'Digital Experiences', 'AI & Automation'],
    accent: 'from-accent/30 via-accent/5 to-transparent',
  },
  {
    number: '03',
    title: 'AV & Live Experiences',
    description: 'We bring sound, visuals and technology together to connect people in the real world.',
    icon: AudioLines,
    services: ['Sound & PA', 'LED & Video', 'Projection', 'Lighting', 'Livestreaming', 'Hybrid Events', 'Technical Production', 'Equipment Hire'],
    accent: 'from-secondary/30 via-secondary/5 to-transparent',
  },
  {
    number: '04',
    title: 'Production',
    description: 'We coordinate the moving parts and deliver complete experiences from brief to live.',
    icon: Workflow,
    services: ['Corporate Events', 'Conferences', 'Live Events', 'Technical Management', 'Production Services'],
    accent: 'from-primary/20 via-accent/5 to-transparent',
  },
]

export function Capabilities() {
  const [active, setActive] = useState(2)
  const current = capabilities[active]
  const Icon = current.icon

  return (
    <section id="capabilities" className="relative overflow-hidden border-y border-border py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <Reveal>
          <div className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <p className="mb-4 text-xs uppercase tracking-[0.3em] text-secondary">What we do</p>
              <h2 className="max-w-3xl font-display text-4xl font-bold tracking-tight sm:text-6xl">
                Creativity, technology and <span className="text-gradient">production in motion.</span>
              </h2>
            </div>
            <p className="max-w-sm text-pretty leading-relaxed text-muted-foreground">
              We bring creativity, technology and production together to build meaningful digital and physical experiences.
            </p>
          </div>
        </Reveal>

        <div className="grid gap-3 lg:grid-cols-[0.86fr_1.14fr]">
          <div className="space-y-3">
            {capabilities.map((capability, i) => {
              const CapabilityIcon = capability.icon
              const isActive = active === i
              return (
                <motion.button
                  key={capability.number}
                  type="button"
                  onClick={() => setActive(i)}
                  className={`group flex w-full items-center gap-4 rounded-2xl border p-5 text-left transition-all duration-500 ${isActive ? 'border-primary/50 bg-card shadow-lg shadow-primary/10' : 'border-border bg-card/30 hover:border-foreground/20 hover:bg-card/60'}`}
                  whileTap={{ scale: 0.99 }}
                  aria-expanded={isActive}
                >
                  <span className={`font-mono text-xs ${isActive ? 'text-secondary' : 'text-muted-foreground'}`}>{capability.number}</span>
                  <CapabilityIcon className={`h-5 w-5 ${isActive ? 'text-primary' : 'text-muted-foreground'} transition-colors`} strokeWidth={1.5} />
                  <span className={`font-display text-xl font-semibold ${isActive ? 'text-foreground' : 'text-muted-foreground'} transition-colors`}>{capability.title}</span>
                  <ArrowUpRight className={`ml-auto h-4 w-4 transition-all ${isActive ? 'rotate-45 text-secondary' : 'text-muted-foreground group-hover:-translate-y-0.5 group-hover:translate-x-0.5'}`} />
                </motion.button>
              )
            })}
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={current.number}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.35 }}
              className="relative min-h-[26rem] overflow-hidden rounded-3xl border border-border bg-card p-7 sm:p-10"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${current.accent}`} />
              <div className="absolute right-8 top-8 h-32 w-32 rounded-full border border-primary/20 bg-primary/5 blur-[1px]" />
              <div className="absolute right-20 top-20 h-16 w-16 rounded-full border border-secondary/30" />
              <div className="relative flex h-full flex-col">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs text-muted-foreground">CAPABILITY / {current.number}</span>
                  <Icon className="h-8 w-8 text-primary" strokeWidth={1.2} />
                </div>
                <div className="mt-auto">
                  <h3 className="font-display text-4xl font-bold sm:text-5xl">{current.title}</h3>
                  <p className="mt-4 max-w-lg leading-relaxed text-muted-foreground">{current.description}</p>
                  <div className="mt-7 flex flex-wrap gap-2">
                    {current.services.map((service) => (
                      <span key={service} className="rounded-full border border-border bg-background/40 px-3 py-1.5 text-xs text-muted-foreground">{service}</span>
                    ))}
                  </div>
                  <Link href={current.number === '03' ? '/contact?service=av-live-experiences' : '/services'} className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-foreground transition-colors hover:text-secondary">
                    Explore this capability <ArrowUpRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}

export const capabilityIconSet = [Camera, Video, MonitorPlay, Radio, Layers3, Sparkles, Play]
