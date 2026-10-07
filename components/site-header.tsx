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
    <header className="pointer-events-none fixed inset-x-0 top-0 z-[100] px-2 pt-2 sm:px-4 sm:pt-3">
      <div className={`pointer-events-auto mx-auto flex max-w-[1500px] items-center justify-between rounded-xl px-3 py-2.5 transition-all duration-300 ease-out sm:px-5 sm:py-3 ${scrolled ? 'border border-white/10 bg-[#0c0b10]/75 shadow-xl shadow-black/20 backdrop-blur-[18px] [-webkit-backdrop-filter:blur(18px)]' : 'border border-transparent bg-transparent'}`}>
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
