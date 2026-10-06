'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ArrowDownRight, ArrowUpRight, Mail, Plus } from 'lucide-react'
import { projects } from '@/lib/site-data'

const capabilities = [
  { number: '01', title: 'Creative', short: 'Branding · Design · Photography · Video', text: 'Ideas with a point of view — made to give brands a distinct presence.', signal: 'violet' },
  { number: '02', title: 'Digital & Technology', short: 'Web · Software · AI · Automation', text: 'Useful digital systems that make ambitious businesses easier to experience and operate.', signal: 'pink' },
  { number: '03', title: 'AV & Live Experiences', short: 'Sound · Visuals · Streaming · Technical Production', text: 'The technical and visual layer that turns a moment into an experience.', signal: 'orange' },
  { number: '04', title: 'Production', short: 'Events · Conferences · Live Experiences', text: 'From first cue to final delivery, we make the idea happen in the real world.', signal: 'blue' },
]

const process = [
  ['01', 'Discover', 'Understand the challenge.'],
  ['02', 'Create', 'Develop the concept.'],
  ['03', 'Build', 'Turn ideas into working solutions.'],
  ['04', 'Produce', 'Bring the experience to life.'],
  ['05', 'Deliver', 'Launch, support and evolve.'],
]

function SignalWorld({ active = -1, compact = false }: { active?: number; compact?: boolean }) {
  const signals = [
    { label: 'CREATIVE', color: 'bg-primary', path: 'M8 22 C80 4 135 44 205 24 S315 10 405 32' },
    { label: 'TECHNOLOGY', color: 'bg-secondary', path: 'M8 60 C90 80 145 24 220 52 S320 82 405 56' },
    { label: 'AV', color: 'bg-accent', path: 'M8 98 C90 72 140 122 230 88 S320 68 405 104' },
    { label: 'PRODUCTION', color: 'bg-blue-300', path: 'M8 136 C100 152 165 108 240 140 S330 154 405 126' },
  ]
  return (
    <div className={`relative overflow-hidden border border-border/80 bg-[#0c0a12] ${compact ? 'h-40' : 'h-[320px] sm:h-[410px]'}`}>
      <div className="absolute inset-0 opacity-40 [background-image:linear-gradient(rgba(255,255,255,.07)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.07)_1px,transparent_1px)] [background-size:44px_44px]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(187,99,255,.15),transparent_32%)]" />
      <svg viewBox="0 0 420 160" className="absolute inset-x-4 top-1/2 h-auto -translate-y-1/2 overflow-visible sm:inset-x-10">
        {signals.map((signal, index) => (
          <motion.path key={signal.label} d={signal.path} fill="none" stroke="currentColor" strokeWidth={active === index ? 2.4 : 1} className={`${signal.color.replace('bg-', 'text-')} ${active === -1 ? 'opacity-75' : active === index ? 'opacity-100' : 'opacity-20'}`} initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 1.6, delay: index * 0.12 }} />
        ))}
        <motion.circle cx="350" cy="80" r="28" fill="none" stroke="url(#signalGradient)" strokeWidth="1" animate={{ r: [26, 31, 26], opacity: [.45, .8, .45] }} transition={{ duration: 4, repeat: Infinity }} />
        <circle cx="350" cy="80" r="4" fill="white" />
        <defs><linearGradient id="signalGradient"><stop stopColor="#b765ff" /><stop offset=".5" stopColor="#ff4fb3" /><stop offset="1" stopColor="#ff9c4a" /></linearGradient></defs>
      </svg>
      <div className="absolute bottom-4 left-4 right-4 flex justify-between font-mono text-[9px] uppercase tracking-[.22em] text-muted-foreground/70 sm:bottom-6 sm:left-7 sm:right-7"><span>Signal system / 001</span><span>Converging → experience</span></div>
    </div>
  )
}

export function HomeHero() {
  return (
    <section id="home" className="relative min-h-[86svh] overflow-hidden border-b border-border px-4 pb-10 pt-24 sm:px-8 sm:pb-14 sm:pt-28 lg:px-12">
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10 bg-[#09080e]">
        <div className="absolute inset-0 opacity-[.08] [background-image:linear-gradient(rgba(255,255,255,.6)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.6)_1px,transparent_1px)] [background-size:64px_64px] [mask-image:linear-gradient(to_bottom,black,transparent_80%)]" />
        <div className="absolute right-[-10%] top-[8%] h-[38rem] w-[38rem] rounded-full bg-primary/15 blur-[150px]" />
        <div className="absolute bottom-[-20%] left-[35%] h-80 w-80 rounded-full bg-accent/10 blur-[130px]" />
      </div>
      <div className="mx-auto grid max-w-[1500px] gap-10 md:grid-cols-[1.05fr_.95fr] md:items-end md:gap-10 lg:gap-16">
        <div>
          <div className="mb-10 flex items-center gap-4 sm:mb-14"><span className="h-px w-14 bg-gradient-to-r from-primary to-accent" /><span className="font-mono text-[10px] uppercase tracking-[.24em] text-muted-foreground">01 / Creative technology &amp; experiences</span></div>
          <h1 className="max-w-4xl font-display text-[clamp(3.1rem,7.7vw,8.2rem)] font-semibold leading-[.91] tracking-[-.065em] text-white">We don&apos;t just<br />build brands.<br /><span className="text-white/45">We create</span><br /><span className="text-gradient">experiences.</span></h1>
          <div className="mt-10 flex flex-wrap items-center gap-7 border-t border-white/10 pt-6"><Link href="#divisions" className="group inline-flex items-center gap-3 text-sm font-semibold text-white">Start a project <ArrowDownRight className="h-4 w-4 text-primary transition-transform group-hover:translate-x-1 group-hover:translate-y-1" /></Link><Link href="#experience" className="group inline-flex items-center gap-3 text-sm text-white/55 transition-colors hover:text-white">Explore the experience <span className="text-primary transition-transform group-hover:translate-y-1">↓</span></Link></div>
        </div>
        <div className="lg:pb-3"><SignalWorld /><div className="mt-5 flex items-center justify-between font-mono text-[10px] uppercase tracking-[.2em] text-muted-foreground"><span>Creative / Technology / AV / Production</span><span className="hidden sm:inline">VV—SYSTEM 01</span></div></div>
      </div>
    </section>
  )
}

export function CapabilityExperience() {
  const [open, setOpen] = useState(0)
  return <section id="divisions" className="relative border-b border-border py-24 sm:py-36"><div id="capabilities" className="mx-auto max-w-[1500px] scroll-mt-20 px-4 sm:px-8 lg:px-12"><div className="mb-16 max-w-3xl"><p className="mb-5 font-mono text-[10px] uppercase tracking-[.3em] text-primary">02 / The VisionVerve system</p><h2 className="font-display text-5xl font-semibold leading-[.94] tracking-[-.04em] sm:text-8xl">One company.<br /><span className="text-foreground/45">Four disciplines.</span></h2><p className="mt-7 max-w-md text-sm leading-7 text-muted-foreground">Creative, technology, AV and production are not separate services here. They are connected signals in one experience.</p></div><div className="grid gap-8 lg:grid-cols-[.85fr_1.15fr] lg:items-start"><div className="divide-y divide-border border-y border-border">{capabilities.map((item, i) => { const active = open === i; return <div key={item.number}><button type="button" aria-expanded={active} onClick={() => setOpen(active ? -1 : i)} className="group grid w-full grid-cols-[2.5rem_1fr_auto] items-center gap-3 py-7 text-left sm:grid-cols-[4rem_1fr_auto] sm:py-9"><span className="font-mono text-xs text-primary">{item.number}</span><span className="font-display text-2xl font-semibold tracking-tight transition-colors group-hover:text-primary sm:text-4xl">{item.title}</span><span className={`grid h-9 w-9 place-items-center border border-border transition-all ${active ? 'rotate-45 border-primary bg-primary text-primary-foreground' : 'group-hover:border-foreground'}`}><Plus className="h-4 w-4" /></span></button><AnimatePresence initial={false}><motion.div initial={{ height: 0, opacity: 0 }} animate={active ? { height: 'auto', opacity: 1 } : { height: 0, opacity: 0 }} className="overflow-hidden"><div className="pb-7 pl-10 sm:pl-16"><p className="text-xs uppercase tracking-[.18em] text-muted-foreground">{item.short}</p><p className="mt-3 max-w-md text-sm leading-7 text-muted-foreground">{item.text}</p></div></motion.div></AnimatePresence></div> })}</div><div className="lg:sticky lg:top-24"><SignalWorld active={open} /><div className="mt-4 flex justify-between font-mono text-[10px] uppercase tracking-[.2em] text-muted-foreground"><span>Signal {String(open + 1).padStart(2, '0')} / 04</span><span>System output: experience</span></div></div></div></div></section>
}

export function AVExperience() {
  const rows = ['AUDIO', 'VIDEO', 'CAMERAS', 'STREAM', 'LED', 'PROJECTION', 'TECHNICAL']
  return <section id="experience" className="relative overflow-hidden bg-[#08070b] py-24 text-white sm:py-40"><div className="absolute inset-0 opacity-30 [background-image:linear-gradient(rgba(255,255,255,.07)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.07)_1px,transparent_1px)] [background-size:56px_56px]" /><div className="relative mx-auto max-w-[1500px] px-4 sm:px-8 lg:px-12"><div className="mb-16 max-w-2xl"><p className="mb-5 font-mono text-[10px] uppercase tracking-[.3em] text-orange-300">03 / AV &amp; live experiences</p><h2 className="font-display text-5xl font-semibold leading-[.92] tracking-[-.045em] sm:text-8xl">VisionVerve<br /><span className="text-orange-300">Live.</span></h2><p className="mt-7 max-w-md text-sm leading-7 text-white/55">A visualisation of the production systems behind moments that need to be felt, not just seen.</p></div><div className="grid gap-10 lg:grid-cols-[.75fr_1.25fr] lg:items-center"><div className="border-y border-white/10">{rows.map((row, i) => <div key={row} className="flex items-center justify-between border-b border-white/10 py-4 last:border-b-0"><span className="font-mono text-xs tracking-[.2em] text-white/65">{row}</span><span className="flex items-center gap-2 font-mono text-[9px] tracking-[.18em] text-orange-200"><i className="h-1.5 w-1.5 rounded-full bg-orange-300" />{i % 2 ? 'LIVE' : 'ACTIVE'}</span></div>)}</div><div className="relative border border-white/15 bg-white/[.025] p-5 sm:p-8"><div className="mb-10 flex items-center justify-between border-b border-white/10 pb-4 font-mono text-[9px] uppercase tracking-[.22em] text-white/45"><span>VisionVerve Live / visualisation</span><span className="text-emerald-300">System active</span></div><div className="relative h-56 overflow-hidden border border-white/10 bg-[#0d0b11] sm:h-72"><div className="absolute inset-0 opacity-50 [background-image:linear-gradient(rgba(255,255,255,.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.08)_1px,transparent_1px)] [background-size:38px_38px]" /><motion.div className="absolute left-0 top-1/2 h-px w-full bg-gradient-to-r from-transparent via-orange-300 to-transparent" animate={{ x: ['-30%', '30%', '-30%'], opacity: [.2, .9, .2] }} transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }} /><motion.div className="absolute left-1/2 top-1/2 h-20 w-20 -translate-x-1/2 -translate-y-1/2 rounded-full border border-orange-300/70" animate={{ scale: [1, 1.2, 1], opacity: [.45, .8, .45] }} transition={{ duration: 3.5, repeat: Infinity }} /><span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 font-mono text-[9px] uppercase tracking-[.2em] text-orange-200">Live signal</span></div><p className="mt-5 font-mono text-[9px] uppercase tracking-[.2em] text-white/40">Simulation / not a proprietary product · technical direction, visual control &amp; live delivery</p></div></div></div></section>
}

export function FormulaExperience() { return <section className="border-b border-border py-24 sm:py-36"><div className="mx-auto max-w-[1500px] px-4 sm:px-8 lg:px-12"><p className="mb-10 font-mono text-[10px] uppercase tracking-[.3em] text-primary">04 / The formula</p><div className="font-display text-4xl font-semibold leading-[1.05] tracking-[-.045em] sm:text-7xl lg:text-8xl"><span>Creative</span> <span className="text-primary">+</span> <span>Technology</span> <span className="text-primary">+</span> <span>AV</span> <span className="text-primary">+</span> <span>Production</span> <span className="block text-gradient">= Experience</span></div></div></section> }

export function WorkExperience() { const names = ['Realeboga Auto Mobile Detailers', 'SD Construction Company', 'Spencer Auto Mechanical Works']; return <section id="work" className="py-24 sm:py-36"><div className="mx-auto max-w-[1500px] px-4 sm:px-8 lg:px-12"><div className="mb-14 flex items-end justify-between"><div><p className="mb-4 font-mono text-[10px] uppercase tracking-[.3em] text-primary">05 / Selected work</p><h2 className="font-display text-5xl font-semibold tracking-tight sm:text-7xl">Made real.</h2></div><Link href="/portfolio" className="hidden items-center gap-2 text-sm font-semibold sm:flex">View all work <ArrowUpRight className="h-4 w-4" /></Link></div><div className="grid gap-5 lg:grid-cols-2">{names.map((name, i) => <Link href="/case-studies" key={name} className={`group relative overflow-hidden border border-border bg-card ${i === 0 ? 'lg:col-span-2' : ''}`}><div className={`relative ${i === 0 ? 'aspect-[16/7]' : 'aspect-[16/10]'}`}><Image src={projects[i]?.image ?? '/images/project-web.png'} alt="" fill className="object-cover opacity-70 transition duration-700 group-hover:scale-105 group-hover:opacity-100" sizes="(max-width: 1024px) 100vw, 50vw" /><div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" /><div className="absolute inset-x-0 bottom-0 flex items-end justify-between p-5 sm:p-7"><div><span className="font-mono text-[10px] uppercase tracking-widest text-primary">Project {String(i + 1).padStart(2, '0')}</span><h3 className="mt-2 max-w-xl font-display text-2xl font-semibold sm:text-4xl">{name}</h3></div><ArrowUpRight className="h-6 w-6 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" /></div></div></Link>)}</div></div></section> }

export function ProcessExperience() { return <section className="border-y border-border py-24 sm:py-32"><div className="mx-auto grid max-w-[1500px] gap-12 px-4 sm:grid-cols-[.7fr_1.3fr] sm:px-8 lg:px-12"><div><p className="mb-4 font-mono text-[10px] uppercase tracking-[.3em] text-primary">06 / How we work</p><h2 className="font-display text-5xl font-semibold tracking-tight sm:text-7xl">From idea<br /><span className="text-gradient">to experience.</span></h2></div><div className="divide-y divide-border border-y border-border">{process.map(([number, title, text]) => <div key={number} className="grid grid-cols-[3rem_1fr] gap-4 py-5 sm:grid-cols-[5rem_1fr]"><span className="font-mono text-xs text-primary">{number}</span><div><h3 className="font-display text-2xl font-semibold">{title}</h3><p className="mt-1 text-sm text-muted-foreground">{text}</p></div></div>)}</div></div></section> }

export function AboutVision() { return <section id="about" className="py-24 sm:py-36"><div className="mx-auto grid max-w-[1500px] gap-10 px-4 sm:grid-cols-[1.1fr_.9fr] sm:px-8 lg:px-12"><div><p className="mb-5 font-mono text-[10px] uppercase tracking-[.3em] text-primary">07 / About VisionVerve</p><h2 className="font-display text-5xl font-semibold leading-[.95] tracking-tight sm:text-8xl">Where vision meets <span className="text-gradient">creativity &amp; technology.</span></h2></div><div><p className="leading-7 text-muted-foreground">Founded in 2024 and based in Cape Town, VisionVerve Creative brings creative thinking, technology, audiovisual production and live experiences together under one roof.</p><Link href="/about" className="mt-6 inline-flex items-center gap-2 text-sm font-semibold">More about VisionVerve <ArrowUpRight className="h-4 w-4" /></Link></div></div></section> }

export function ContactExperience() { return <section id="contact" className="relative overflow-hidden border-t border-border py-24 sm:py-36"><div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,hsl(var(--primary)/0.12),transparent_35%)]" /><div className="relative mx-auto flex max-w-[1500px] flex-col justify-between gap-10 px-4 sm:flex-row sm:items-end sm:px-8 lg:px-12"><div><p className="mb-5 font-mono text-[10px] uppercase tracking-[.3em] text-primary">Start a project</p><h2 className="max-w-3xl font-display text-5xl font-semibold leading-[.95] tracking-tight sm:text-8xl">Have an idea?<br /><span className="text-gradient">Let&apos;s create the experience.</span></h2></div><div className="shrink-0"><Link href="/contact" className="group inline-flex items-center gap-3 border-b border-foreground/50 pb-3 text-sm font-semibold text-foreground transition-colors hover:border-primary hover:text-primary">Start a project <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" /></Link><a href="mailto:visionvervetech@gmail.com" className="mt-6 flex items-center gap-2 text-sm text-muted-foreground"><Mail className="h-4 w-4" /> visionvervetech@gmail.com</a></div></div></section> }

export function HomeExperience() { return <main><HomeHero /><CapabilityExperience /><AVExperience /><FormulaExperience /><WorkExperience /><ProcessExperience /><AboutVision /><ContactExperience /></main> }
