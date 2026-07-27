'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { Particles } from '@/components/anim/particles'

/**
 * A premium, unmistakably-VisionVerve composition used in place of stock/AI photography.
 * Renders the main logo on a glass card over abstract gradient lighting, particles and
 * subtle floating logo accents. Fills its parent container (use inside a relative box).
 */
export function BrandComposition({ caption }: { caption?: string }) {
  return (
    <div className="absolute inset-0">
      {/* Base gradient wash */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,color-mix(in_oklch,var(--primary)_28%,transparent),transparent_60%),radial-gradient(circle_at_75%_75%,color-mix(in_oklch,var(--secondary)_26%,transparent),transparent_55%)]" />
      <div className="absolute inset-0 bg-gradient-to-br from-card/60 via-background/40 to-background/80" />

      {/* Drifting glow blobs */}
      <motion.div
        aria-hidden
        className="absolute -left-10 top-8 h-40 w-40 rounded-full bg-primary/30 blur-3xl"
        animate={{ x: [0, 24, 0], y: [0, -18, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        aria-hidden
        className="absolute -right-8 bottom-10 h-44 w-44 rounded-full bg-secondary/25 blur-3xl"
        animate={{ x: [0, -20, 0], y: [0, 16, 0] }}
        transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut' }}
      />

      {/* Particle field */}
      <Particles className="absolute inset-0 h-full w-full opacity-70" />

      {/* Fine grid overlay for a technology feel */}
      <div className="absolute inset-0 opacity-[0.12] [background-image:linear-gradient(var(--border)_1px,transparent_1px),linear-gradient(90deg,var(--border)_1px,transparent_1px)] [background-size:38px_38px]" />

      {/* Floating sub-logo accents */}
      <motion.div
        aria-hidden
        className="absolute left-6 top-6"
        animate={{ y: [0, -10, 0], rotate: [0, 6, 0] }}
        transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut' }}
      >
        <Image src="/logos/sub.png" alt="" width={44} height={44} className="h-11 w-11 object-contain opacity-40" />
      </motion.div>
      <motion.div
        aria-hidden
        className="absolute bottom-8 right-8"
        animate={{ y: [0, 12, 0], rotate: [0, -8, 0] }}
        transition={{ duration: 11, repeat: Infinity, ease: 'easeInOut' }}
      >
        <Image src="/logos/favicon.png" alt="" width={32} height={32} className="h-8 w-8 object-contain opacity-40" />
      </motion.div>

      {/* Center glass card with the main logo */}
      <div className="absolute inset-0 grid place-items-center p-8">
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 16 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="relative w-full max-w-xs rounded-3xl border border-white/15 bg-white/5 p-8 text-center shadow-2xl backdrop-blur-xl"
        >
          <div className="absolute inset-x-8 -top-px h-px bg-gradient-to-r from-transparent via-white/50 to-transparent" />
          <Image
            src="/logos/main.png"
            alt="VisionVerve Creative"
            width={280}
            height={96}
            className="mx-auto h-auto w-full max-w-[220px] object-contain"
            priority
          />
          <p className="mt-5 font-display text-sm font-semibold tracking-wide text-foreground/90">
            Creative Technology Company
          </p>
          <p className="mt-1 text-xs text-muted-foreground">We Create Experiences</p>
        </motion.div>
      </div>

      {caption ? (
        <div className="absolute bottom-6 left-6 flex items-center gap-3">
          <Image src="/logos/favicon.png" alt="" width={32} height={32} className="h-8 w-8 object-contain" />
          <p className="font-display text-sm font-semibold text-foreground">{caption}</p>
        </div>
      ) : null}
    </div>
  )
}
