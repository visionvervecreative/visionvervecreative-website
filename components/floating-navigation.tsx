'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { AnimatePresence, motion } from 'framer-motion'
import { Compass, Layers3, Menu, X } from 'lucide-react'
import { ThemeToggle } from './theme-toggle'

const items = [
  { id: 'home', label: 'Home', icon: Compass },
  { id: 'divisions', label: 'Divisions', icon: Layers3 },
  { id: 'capabilities', label: 'Capabilities', icon: Layers3 },
  { id: 'work', label: 'Work', icon: Compass },
  { id: 'about', label: 'About', icon: Compass },
  { id: 'contact', label: 'Contact', icon: Compass },
]

export function FloatingNavigation() {
  const [active, setActive] = useState('home')
  const [expanded, setExpanded] = useState(false)

  useEffect(() => {
    const sections = items.map(({ id }) => document.getElementById(id)).filter(Boolean) as HTMLElement[]
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]
        if (visible) setActive(visible.target.id)
      },
      { rootMargin: '-35% 0px -50% 0px', threshold: [0.1, 0.3, 0.6] },
    )
    sections.forEach((section) => observer.observe(section))
    return () => observer.disconnect()
  }, [])

  const jump = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    setExpanded(false)
  }

  return (
    <>
      <aside className="fixed right-5 top-1/2 z-[90] hidden -translate-y-1/2 lg:block" aria-label="Section navigation">
        <motion.div
          layout
          className="flex flex-col items-center gap-1 rounded-xl border border-white/[0.08] bg-[rgba(10,8,15,0.60)] p-1.5 shadow-xl shadow-black/20 backdrop-blur-[18px] [-webkit-backdrop-filter:blur(18px)]"
          onMouseEnter={() => setExpanded(true)}
          onMouseLeave={() => setExpanded(false)}
        >
          {items.map(({ id, label, icon: Icon }) => (
            <button
              key={id}
              type="button"
              onClick={() => jump(id)}
              className={`group flex items-center gap-2 rounded-xl p-2 text-xs transition-colors ${active === id ? 'bg-primary/15 text-foreground' : 'text-muted-foreground hover:bg-card hover:text-foreground'}`}
              aria-label={`Go to ${label}`}
            >
              <Icon className="h-4 w-4" strokeWidth={1.5} />
              <AnimatePresence initial={false}>
                {expanded && (
                  <motion.span initial={{ width: 0, opacity: 0 }} animate={{ width: 'auto', opacity: 1 }} exit={{ width: 0, opacity: 0 }} className="overflow-hidden whitespace-nowrap pr-1">
                    {label}
                  </motion.span>
                )}
              </AnimatePresence>
              {active === id && <span className="absolute right-0 h-4 w-0.5 rounded-full bg-brand-gradient" />}
            </button>
          ))}
          <div className="my-1 h-px w-6 bg-border" />
          <ThemeToggle />
        </motion.div>
      </aside>

      <div className="fixed bottom-5 right-5 z-[90] lg:hidden">
        <AnimatePresence>
          {expanded && (
            <motion.div initial={{ opacity: 0, y: 12, scale: 0.96 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0, y: 12, scale: 0.96 }} className="mb-3 flex flex-col gap-1 rounded-xl border border-border/60 bg-background/90 p-2 shadow-xl backdrop-blur-xl">
              {items.map(({ id, label }) => (
                <button key={id} type="button" onClick={() => jump(id)} className={`rounded-xl px-4 py-2 text-left text-sm ${active === id ? 'bg-primary/15 text-foreground' : 'text-muted-foreground'}`}>
                  {label}
                </button>
              ))}
              <ThemeToggle />
            </motion.div>
          )}
        </AnimatePresence>
        <button type="button" aria-label={expanded ? 'Close section navigation' : 'Open section navigation'} onClick={() => setExpanded((value) => !value)} className="grid h-12 w-12 place-items-center rounded-full border border-border bg-card/90 shadow-xl backdrop-blur-xl">
          {expanded ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>
    </>
  )
}
