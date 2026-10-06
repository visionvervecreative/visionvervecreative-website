'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import { Magnetic } from './anim/magnetic'

export function SiteHeader() {
  return (
    <header className="pointer-events-none fixed inset-x-0 top-0 z-[100]">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6">
        <Link href="/" className="pointer-events-auto flex items-center gap-2" aria-label="VisionVerve Creative home">
          <motion.span whileHover={{ rotate: -8, scale: 1.08 }} transition={{ type: 'spring', stiffness: 300, damping: 15 }} className="inline-block">
            <Image src="/logos/favicon.png" alt="" width={40} height={40} className="h-9 w-9 object-contain" />
          </motion.span>
          <span className="hidden font-display text-base font-semibold tracking-tight sm:inline">VisionVerve Creative</span>
        </Link>
        <Magnetic className="pointer-events-auto hidden sm:block">
          <Link href="/contact" className="group inline-flex items-center gap-2 rounded-full border border-border bg-card/60 px-5 py-2.5 text-sm font-semibold shadow-lg shadow-black/10 backdrop-blur-xl transition-colors hover:border-primary/50 hover:bg-card">
            Start a Project
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </Magnetic>
      </div>
    </header>
  )
}
