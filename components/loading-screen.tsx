'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import { AnimatePresence, motion } from 'framer-motion'

export function LoadingScreen() {
  const [progress, setProgress] = useState(0)
  const [done, setDone] = useState(false)

  useEffect(() => {
    let value = 0
    const id = setInterval(() => {
      value += Math.random() * 16 + 6
      if (value >= 100) {
        value = 100
        clearInterval(id)
        setTimeout(() => setDone(true), 500)
      }
      setProgress(Math.min(100, Math.round(value)))
    }, 130)
    return () => clearInterval(id)
  }, [])

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          className="fixed inset-0 z-[10000] flex flex-col items-center justify-center bg-background"
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: 'easeInOut' }}
        >
          <motion.div
            animate={{ scale: [0.9, 1.05, 0.9], filter: ['brightness(1)', 'brightness(1.4)', 'brightness(1)'] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            className="relative"
          >
            <div className="absolute -inset-10 rounded-full bg-primary/25 blur-3xl" />
            <Image
              src="/logos/favicon.png"
              alt="VisionVerve Creative"
              width={96}
              height={96}
              priority
              className="relative h-20 w-20 object-contain"
            />
          </motion.div>

          <div className="mt-10 h-px w-56 overflow-hidden bg-border">
            <motion.div className="h-full bg-brand-gradient" style={{ width: `${progress}%` }} />
          </div>
          <div className="mt-4 font-display text-sm tabular-nums text-muted-foreground">
            {progress}%
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
