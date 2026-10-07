'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import { useEffect, useState } from 'react'
import { Magnetic } from './anim/magnetic'

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const updateScrollState = () => setScrolled(window.scrollY > 24)
    updateScrollState()
    window.addEventListener('scroll', updateScrollState, { passive: true })
    return () => window.removeEventListener('scroll', updateScrollState)
  }, [])

  return (
    <header className="pointer-events-none fixed inset-x-0 top-0 z-[100] px-8 pt-6 sm:px-10 sm:pt-8 lg:px-16">
      <div className={`pointer-events-auto mx-auto flex max-w-[1500px] items-center justify-between rounded-xl px-0 py-0 transition-all duration-300 ease-out ${scrolled ? 'rounded-xl border border-white/[0.08] bg-[rgba(10,8,15,0.68)] px-4 py-3 shadow-[0_10px_40px_rgba(0,0,0,0.20)] backdrop-blur-[20px] [-webkit-backdrop-filter:blur(20px)] sm:px-5' : 'border border-transparent bg-transparent'}`}>
        <Link href="/" className="pointer-events-auto flex items-center gap-2" aria-label="VisionVerve Creative home">
          <motion.span whileHover={{ rotate: -8, scale: 1.08 }} transition={{ type: 'spring', stiffness: 300, damping: 15 }} className="inline-block">
            <Image src="/logos/main.png" alt="VisionVerve Creative" width={150} height={42} className="h-8 w-auto object-contain sm:h-9" />
          </motion.span>
          <span className="hidden font-display text-base font-semibold tracking-tight sm:inline">VisionVerve Creative</span>
        </Link>
        <Magnetic className="pointer-events-auto hidden sm:block">
          <Link href="/contact" className="group inline-flex items-center gap-2 rounded-full border border-white/20 bg-transparent px-4 py-2 text-[11px] font-semibold uppercase tracking-[.14em] transition-all hover:border-primary/60 hover:bg-white/5 sm:px-5 sm:py-2.5 sm:text-xs">
            Start a Project
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </Magnetic>
      </div>
    </header>
  )
}
