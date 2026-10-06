'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ArrowDownRight, ArrowUpRight, Mail, Plus } from 'lucide-react'
import { projects } from '@/lib/site-data'

const capabilities = [
  { number: '01', title: 'Creative', services: 'Branding · Design · Photography · Video', text: 'Ideas with a point of view — made to give brands a distinct presence.' },
  { number: '02', title: 'Digital & Technology', services: 'Web · Software · Digital Experiences · AI & Automation', text: 'Useful digital systems that make ambitious businesses easier to experience and operate.' },
  { number: '03', title: 'AV & Live Experiences', services: 'Sound · Visuals · Streaming · Hybrid Events · Technical Production', text: 'The technical and visual layer that turns a moment into an experience.' },
  { number: '04', title: 'Production', services: 'Events · Conferences · Live Experiences · Event Technical Management', text: 'From first cue to final delivery, we make the idea happen in the real world.' },
]

const process = [
  ['01', 'Discover', 'Understand the challenge.'],
  ['02', 'Create', 'Develop the concept.'],
  ['03', 'Build', 'Turn ideas into working solutions.'],
  ['04', 'Produce', 'Bring the experience to life.'],
  ['05', 'Deliver', 'Launch, support and evolve.'],
]

export function HomeHero() {
  return (
    <section id="home" className="relative flex min-h-[92svh] items-end overflow-hidden border-b border-border px-4 pb-14 pt-32 sm:px-6 sm:pb-20">
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute left-[12%] top-[14%] h-72 w-72 rounded-full bg-primary/25 blur-[120px]" />
        <div className="absolute right-[4%] top-[35%] h-96 w-96 rounded-full bg-secondary/20 blur-[150px]" />
        <div className="absolute bottom-[-15%] left-[40%] h-72 w-72 rounded-full bg-accent/15 blur-[130px]" />
        <div className="absolute inset-0 opacity-[0.08] [background-image:linear-gradient(hsl(var(--foreground))_1px,transparent_1px),linear-gradient(90deg,hsl(var(--foreground))_1px,transparent_1px)] [background-size:72px_72px] [mask-image:linear-gradient(to_bottom,black,transparent_75%)]" />
      </div>
      <div className="mx-auto w-full max-w-7xl">
        <p className="mb-6 text-xs font-medium uppercase tracking-[0.32em] text-primary">VisionVerve Creative · Cape Town</p>
        <h1 className="max-w-6xl font-display text-[clamp(3.25rem,9.5vw,9.5rem)] font-semibold leading-[0.87] tracking-[-0.07em]">
          We don&apos;t just build brands.<br /><span className="text-gradient">We create experiences.</span>
        </h1>
        <div className="mt-10 flex flex-col gap-7 border-t border-border pt-6 sm:flex-row sm:items-end sm:justify-between">
          <p className="max-w-md text-base leading-7 text-muted-foreground">A Creative Technology &amp; Experiences Company combining creativity, technology, audiovisual production and live experiences.</p>
          <div className="flex flex-wrap gap-3">
            <Link href="#capabilities" className="group inline-flex items-center gap-2 rounded-full bg-brand-gradient px-6 py-3.5 text-sm font-semibold text-white">Explore capabilities <ArrowDownRight className="h-4 w-4 transition-transform group-hover:translate-y-1 group-hover:translate-x-1" /></Link>
            <Link href="/contact" className="inline-flex items-center gap-2 rounded-full border border-foreground/20 bg-card/50 px-6 py-3.5 text-sm font-semibold transition-colors hover:border-foreground/40 hover:bg-card">Start a project <ArrowUpRight className="h-4 w-4" /></Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export function CapabilityExperience() {
  const [open, setOpen] = useState(0)
  return (
    <section id="divisions" className="relative py-24 sm:py-36">
      <div id="capabilities" className="mx-auto max-w-7xl scroll-mt-20 px-4 sm:px-6">
        <div className="mb-14 flex flex-col justify-between gap-5 border-b border-border pb-8 sm:flex-row sm:items-end">
          <div><p className="mb-4 text-xs uppercase tracking-[0.3em] text-primary">02 / Capabilities</p><h2 className="font-display text-5xl font-semibold tracking-tight sm:text-7xl">What we do.</h2></div>
          <p className="max-w-sm text-sm leading-7 text-muted-foreground">Four connected disciplines. One team capable of taking an idea from concept to execution.</p>
        </div>
        <div className="divide-y divide-border border-y border-border">
          {capabilities.map((item, i) => {
            const active = open === i
            return <div key={item.number} className="group">
              <button type="button" aria-expanded={active} onClick={() => setOpen(active ? -1 : i)} className="grid w-full grid-cols-[3rem_1fr_auto] items-center gap-4 py-7 text-left sm:grid-cols-[5rem_1fr_auto] sm:py-9">
                <span className="font-mono text-sm text-primary">{item.number}</span><span className="font-display text-3xl font-semibold tracking-tight transition-colors group-hover:text-primary sm:text-5xl">{item.title}</span><span className={`grid h-10 w-10 place-items-center rounded-full border border-border transition-all ${active ? 'rotate-45 border-primary bg-primary text-primary-foreground' : 'group-hover:border-foreground'}`}><Plus className="h-4 w-4" /></span>
              </button>
              <AnimatePresence initial={false}><motion.div initial={{ height: 0, opacity: 0 }} animate={active ? { height: 'auto', opacity: 1 } : { height: 0, opacity: 0 }} className="overflow-hidden"><div className="grid gap-5 pb-8 pl-12 sm:grid-cols-[5rem_1fr] sm:pl-20"><span /><div><p className="text-sm font-medium text-foreground">{item.services}</p><p className="mt-3 max-w-lg text-sm leading-7 text-muted-foreground">{item.text}</p><Link href="/services" className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-primary">Explore <ArrowUpRight className="h-4 w-4" /></Link></div></div></motion.div></AnimatePresence>
            </div>
          })}
        </div>
      </div>
    </section>
  )
}

export function AVExperience() {
  return <section className="relative overflow-hidden bg-[#09070d] py-24 text-white sm:py-36"><div className="absolute inset-0 opacity-30 [background-image:linear-gradient(rgba(255,255,255,.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.08)_1px,transparent_1px)] [background-size:56px_56px]" /><div className="relative mx-auto max-w-7xl px-4 sm:px-6"><div className="grid gap-14 lg:grid-cols-[.85fr_1.15fr] lg:items-center"><div><p className="mb-5 text-xs uppercase tracking-[0.3em] text-orange-300">03 / AV &amp; Live Experiences</p><h2 className="max-w-xl font-display text-5xl font-semibold leading-[0.95] tracking-tight sm:text-7xl">Sound. Visuals. <span className="text-orange-300">Impact.</span></h2><p className="mt-7 max-w-md leading-7 text-white/60">Audiovisual production and technical direction for moments that need to be felt, not just seen.</p></div><div className="rounded-[2rem] border border-white/15 bg-white/[0.04] p-5 sm:p-8"><div className="mb-7 flex items-center justify-between border-b border-white/10 pb-4"><span className="text-xs uppercase tracking-[0.25em] text-white/50">VisionVerve Live / experience preview</span><span className="flex items-center gap-2 text-xs text-emerald-300"><i className="h-2 w-2 rounded-full bg-emerald-300" /> System active</span></div><div className="grid gap-4 sm:grid-cols-2">{[['Audio', 'ACTIVE'], ['Video', 'LIVE'], ['Stream', 'LIVE'], ['Projection', 'ACTIVE'], ['Technical', 'MONITORING'], ['Audience', 'CONNECTED']].map(([label, status], i) => <div key={label} className="rounded-2xl border border-white/10 bg-white/[0.035] p-4"><div className="flex items-center justify-between text-xs uppercase tracking-widest text-white/50"><span>{label}</span><span className="text-orange-200">{status}</span></div><div className="mt-5 flex h-8 items-end gap-1">{Array.from({ length: 14 }, (_, j) => <span key={j} className="w-full rounded-t-sm bg-gradient-to-t from-orange-400/50 to-pink-300" style={{ height: `${24 + ((i * 13 + j * 17) % 70)}%` }} />)}</div></div>)}</div></div></div></div></section>
}

export function FormulaExperience() {
  return <section className="border-b border-border py-24 sm:py-36"><div className="mx-auto max-w-7xl px-4 sm:px-6"><p className="mb-10 text-xs uppercase tracking-[0.3em] text-primary">04 / The VisionVerve formula</p><div className="flex flex-wrap items-baseline gap-x-5 gap-y-2 font-display text-5xl font-semibold tracking-[-0.05em] sm:text-8xl"><span>Creative</span><span className="text-primary">+</span><span>Technology</span><span className="text-primary">+</span><span>AV</span><span className="text-primary">+</span><span>Production</span><span className="w-full text-gradient sm:w-auto">= Experience</span></div></div></section>
}

export function WorkExperience() {
  const names = ['Realeboga Auto Mobile Detailers', 'SD Construction Company', 'Spencer Auto Mechanical Works', 'Edinah Chagwedera Studio', 'P & I Legal Consultancy']
  return <section id="work" className="py-24 sm:py-36"><div className="mx-auto max-w-7xl px-4 sm:px-6"><div className="mb-14 flex items-end justify-between gap-5"><div><p className="mb-4 text-xs uppercase tracking-[0.3em] text-primary">05 / Selected work</p><h2 className="font-display text-5xl font-semibold tracking-tight sm:text-7xl">Made real.</h2></div><Link href="/portfolio" className="hidden items-center gap-2 text-sm font-semibold sm:flex">View all work <ArrowUpRight className="h-4 w-4" /></Link></div><div className="grid gap-5 lg:grid-cols-2">{names.slice(0, 3).map((name, i) => <Link href="/case-studies" key={name} className={`group relative overflow-hidden rounded-[1.5rem] border border-border bg-card ${i === 0 ? 'lg:col-span-2' : ''}`}><div className={`relative ${i === 0 ? 'aspect-[16/7]' : 'aspect-[16/10]'}`}><Image src={projects[i]?.image ?? '/images/project-web.png'} alt="" fill className="object-cover opacity-75 transition duration-700 group-hover:scale-105 group-hover:opacity-100" sizes="(max-width: 1024px) 100vw, 50vw" /><div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" /><div className="absolute inset-x-0 bottom-0 flex items-end justify-between p-5 sm:p-7"><div><span className="text-xs uppercase tracking-widest text-primary">Project {String(i + 1).padStart(2, '0')}</span><h3 className="mt-2 max-w-xl font-display text-2xl font-semibold sm:text-4xl">{name}</h3></div><ArrowUpRight className="h-6 w-6 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" /></div></div></Link>)}</div></div></section>
}

export function ProcessExperience() {
  return <section className="border-y border-border py-24 sm:py-32"><div className="mx-auto max-w-7xl px-4 sm:px-6"><div className="grid gap-12 lg:grid-cols-[.7fr_1.3fr] lg:items-start"><div><p className="mb-4 text-xs uppercase tracking-[0.3em] text-primary">06 / How we work</p><h2 className="font-display text-5xl font-semibold tracking-tight sm:text-7xl">From idea<br /><span className="text-gradient">to experience.</span></h2></div><div className="divide-y divide-border border-y border-border">{process.map(([number, title, text]) => <div key={number} className="grid grid-cols-[3rem_1fr] gap-4 py-5 sm:grid-cols-[5rem_1fr]"><span className="font-mono text-sm text-primary">{number}</span><div><h3 className="font-display text-2xl font-semibold">{title}</h3><p className="mt-1 text-sm text-muted-foreground">{text}</p></div></div>)}</div></div></div></section>
}

export function AboutVision() {
  return <section id="about" className="py-24 sm:py-36"><div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[1.1fr_.9fr] lg:items-end"><div><p className="mb-5 text-xs uppercase tracking-[0.3em] text-primary">07 / About VisionVerve</p><h2 className="max-w-4xl font-display text-5xl font-semibold leading-[.95] tracking-tight sm:text-8xl">Where vision meets <span className="text-gradient">creativity &amp; technology.</span></h2></div><div><p className="leading-7 text-muted-foreground">Founded in 2024 and based in Cape Town, VisionVerve Creative brings creative thinking, technology, audiovisual production and live experiences together under one roof.</p><Link href="/about" className="mt-6 inline-flex items-center gap-2 text-sm font-semibold">More about VisionVerve <ArrowUpRight className="h-4 w-4" /></Link></div></div></section>
}

export function ContactExperience() {
  return <section id="contact" className="relative overflow-hidden border-t border-border py-24 sm:py-36"><div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,hsl(var(--primary)/0.18),transparent_35%)]" /><div className="relative mx-auto flex max-w-7xl flex-col justify-between gap-10 px-4 sm:flex-row sm:items-end sm:px-6"><div><p className="mb-5 text-xs uppercase tracking-[0.3em] text-primary">Start a project</p><h2 className="max-w-3xl font-display text-5xl font-semibold leading-[.95] tracking-tight sm:text-8xl">Have an idea?<br /><span className="text-gradient">Let&apos;s create the experience.</span></h2></div><div className="shrink-0"><Link href="/contact" className="group inline-flex items-center gap-2 rounded-full bg-brand-gradient px-7 py-4 text-sm font-semibold text-white">Start a project <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" /></Link><a href="mailto:visionvervetech@gmail.com" className="mt-5 flex items-center gap-2 text-sm text-muted-foreground"><Mail className="h-4 w-4" /> visionvervetech@gmail.com</a></div></div></section>
}

export function HomeExperience() {
  return <main><HomeHero /><CapabilityExperience /><AVExperience /><FormulaExperience /><WorkExperience /><ProcessExperience /><AboutVision /><ContactExperience /></main>
}
