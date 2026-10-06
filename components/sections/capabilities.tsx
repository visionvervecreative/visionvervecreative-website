'use client'

import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ArrowUpRight, ChevronDown, Code2, Cpu, Megaphone, Palette, Video, WandSparkles } from 'lucide-react'
import Link from 'next/link'
import { SectionHeading } from '@/components/section-heading'

const capabilities = [
  { title: 'Branding & Strategy', text: 'Positioning, identity systems and strategic direction that make ambitious businesses impossible to overlook.', icon: WandSparkles, href: '/services/brand-identity' },
  { title: 'Web & Software', text: 'Fast websites, products, business systems and applications designed around the people who use them.', icon: Code2, href: '/services/software-development' },
  { title: 'AI & Emerging Technology', text: 'Practical AI integrations and intelligent workflows that turn complexity into momentum.', icon: Cpu, href: '/services/ai-solutions' },
  { title: 'Creative Media & Production', text: 'Photography, film, motion and content production that gives every story a distinctive point of view.', icon: Video, href: '/services/creative-media' },
  { title: 'Marketing & Growth', text: 'Campaigns and marketing assets that connect your offer with the people ready to act.', icon: Megaphone, href: '/services/graphic-design' },
  { title: 'Digital Transformation', text: 'Connected systems, processes and experiences that help organisations operate at their next level.', icon: Palette, href: '/services/digital-transformation' },
]

export function Capabilities() {
  const [open, setOpen] = useState(0)
  return (
    <section className="relative overflow-hidden py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="What We Do"
          title={<>One partner. <span className="text-gradient">Every capability.</span></>}
          description="We bring creative, technology, AV and production disciplines together so the work feels coherent from first idea to final frame."
        />
        <div className="mt-12 grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
          <div className="rounded-[2rem] border border-border bg-card/40 p-6 sm:p-8">
            <p className="text-sm leading-7 text-muted-foreground">Not a collection of disconnected services. A connected team that can think in systems, make with intent and deliver at production quality.</p>
            <div className="mt-8 flex flex-wrap gap-2">
              {['Creative', 'Technology', 'AV', 'Production'].map((item) => <span key={item} className="rounded-full border border-border px-3 py-1.5 text-xs text-muted-foreground">{item}</span>)}
            </div>
          </div>
          <div className="divide-y divide-border rounded-[2rem] border border-border bg-card/30">
            {capabilities.map((item, index) => {
              const Icon = item.icon
              const active = open === index
              return (
                <div key={item.title} className="px-5 sm:px-7">
                  <button type="button" onClick={() => setOpen(active ? -1 : index)} aria-expanded={active} className="flex w-full items-center gap-4 py-5 text-left">
                    <span className={`grid h-10 w-10 shrink-0 place-items-center rounded-xl border transition-colors ${active ? 'border-primary/50 bg-brand-gradient text-white' : 'border-border bg-background text-primary'}`}><Icon className="h-4 w-4" /></span>
                    <span className="flex-1 font-display text-lg font-semibold">{item.title}</span>
                    <ChevronDown className={`h-4 w-4 text-muted-foreground transition-transform ${active ? 'rotate-180' : ''}`} />
                  </button>
                  <AnimatePresence initial={false}>
                    {active && <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="overflow-hidden"><div className="pb-5 pl-14 pr-5 text-sm leading-7 text-muted-foreground"><p>{item.text}</p><Link href={item.href} className="group mt-3 inline-flex items-center gap-2 text-xs font-semibold text-foreground">Explore capability <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" /></Link></div></motion.div>}
                  </AnimatePresence>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

export function ExperiencesInMotion() {
  return (
    <section className="relative overflow-hidden border-y border-border py-24 sm:py-32">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_45%,hsl(var(--primary)/0.18),transparent_35%),radial-gradient(circle_at_85%_55%,hsl(var(--secondary)/0.12),transparent_32%)]" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid gap-12 lg:grid-cols-[1fr_1fr] lg:items-center">
          <div>
            <p className="mb-4 text-xs uppercase tracking-[0.3em] text-primary">Experiences in Motion</p>
            <h2 className="max-w-2xl font-display text-4xl font-bold tracking-tight sm:text-6xl">Ideas should not sit still.</h2>
            <p className="mt-6 max-w-xl text-base leading-8 text-muted-foreground">From a brand system to a launch film, from an interface to an installation, we turn strategy into experiences people can see, feel and remember.</p>
            <Link href="/portfolio" className="group mt-8 inline-flex items-center gap-2 rounded-full bg-brand-gradient px-6 py-3 text-sm font-semibold text-white">See the work <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" /></Link>
          </div>
          <div className="relative aspect-[4/3] overflow-hidden rounded-[2rem] border border-white/10 bg-black/30 p-4 shadow-2xl">
            <div className="absolute inset-8 rounded-[1.5rem] border border-white/10 bg-[linear-gradient(135deg,rgba(108,99,255,.28),rgba(255,88,166,.18),rgba(255,153,73,.22))]" />
            <div className="absolute left-[16%] top-[28%] h-24 w-24 rounded-full bg-primary/60 blur-2xl" />
            <div className="absolute right-[16%] top-[42%] h-32 w-32 rounded-full bg-secondary/40 blur-3xl" />
            <div className="absolute bottom-[18%] left-[32%] h-20 w-20 rounded-full bg-accent/40 blur-2xl" />
            <motion.div animate={{ rotate: 360 }} transition={{ duration: 24, repeat: Infinity, ease: 'linear' }} className="absolute inset-[18%] rounded-full border border-dashed border-white/30" />
            <div className="absolute inset-0 grid place-items-center"><div className="rounded-full border border-white/20 bg-background/60 px-5 py-3 text-center text-xs uppercase tracking-[0.25em] text-white backdrop-blur-xl">VisionVerve<br /><span className="text-white/50">in motion</span></div></div>
          </div>
        </div>
      </div>
    </section>
  )
}

export function OnePartner() {
  return (
    <section className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-5xl px-4 text-center sm:px-6">
        <p className="mb-4 text-xs uppercase tracking-[0.3em] text-primary">One Partner</p>
        <h2 className="font-display text-4xl font-bold tracking-tight sm:text-6xl">Creative, technology, AV and production — <span className="text-gradient">working as one.</span></h2>
        <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-muted-foreground">No fragmented handoffs. No separate vendors fighting for the same idea. One connected partner from strategic thinking to final delivery.</p>
        <Link href="/contact" className="group mt-8 inline-flex items-center gap-2 rounded-full border border-foreground/20 bg-card/60 px-6 py-3 text-sm font-semibold backdrop-blur-sm transition-all hover:border-foreground/40 hover:bg-card">Start a conversation <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" /></Link>
      </div>
    </section>
  )
}

export function AVLiveVisualisation() {
  return (
    <section className="relative overflow-hidden bg-black py-24 text-white sm:py-32">
      <div className="absolute inset-0 opacity-50 [background-image:linear-gradient(rgba(255,255,255,.06)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.06)_1px,transparent_1px)] [background-size:42px_42px]" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid gap-12 lg:grid-cols-[.85fr_1.15fr] lg:items-center">
          <div><p className="mb-4 text-xs uppercase tracking-[0.3em] text-orange-300">AV & Live Visualisation</p><h2 className="font-display text-4xl font-bold tracking-tight sm:text-6xl">Make the moment <span className="text-orange-300">unmissable.</span></h2><p className="mt-6 max-w-xl leading-8 text-white/60">Visual systems for launches, events, spaces and screens — designed to make audiences feel part of the story.</p></div>
          <div className="relative aspect-video overflow-hidden rounded-3xl border border-white/15 bg-white/[.03] p-5"><div className="grid h-full grid-cols-12 grid-rows-6 gap-2 opacity-80">{Array.from({ length: 72 }, (_, i) => <span key={i} className={`rounded-sm ${i % 11 === 0 ? 'bg-orange-300' : i % 7 === 0 ? 'bg-pink-400' : 'bg-white/10'}`} />)}</div><div className="absolute inset-0 grid place-items-center"><div className="rounded-full border border-orange-200/40 bg-black/50 px-5 py-3 text-xs uppercase tracking-[0.28em] text-orange-100 backdrop-blur">Live visual systems</div></div></div>
        </div>
      </div>
    </section>
  )
}

export function Vision2030() {
  const milestones = [['2026', 'Build the connected core', 'Grow the team, deepen our capabilities and partner with ambitious businesses.'], ['2028', 'Scale the ecosystem', 'Launch products, expand production and connect more African talent to opportunity.'], ['2030', 'Shape what comes next', 'A creative technology ecosystem that helps thousands of businesses move forward.']]
  return <section className="relative py-24 sm:py-32"><div className="mx-auto max-w-7xl px-4 sm:px-6"><SectionHeading eyebrow="Vision 2030" title={<>The future is <span className="text-gradient">built together.</span></>} description="A long-term view of the ecosystem we are building — one partnership, product and experience at a time." /><div className="mt-14 grid gap-4 md:grid-cols-3">{milestones.map(([year, title, text], i) => <motion.div key={year} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * .1 }} className="relative rounded-3xl border border-border bg-card/50 p-7"><span className="text-sm font-semibold text-primary">{year}</span><h3 className="mt-8 font-display text-2xl font-semibold">{title}</h3><p className="mt-3 text-sm leading-7 text-muted-foreground">{text}</p>{i < 2 && <span aria-hidden className="absolute -right-2 top-1/2 hidden h-px w-4 bg-gradient-to-r from-primary to-secondary md:block" />}</motion.div>)}</div></div></section>
}
