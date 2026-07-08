'use client'

import { useEffect, useRef, useState } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'

export function CustomCursor() {
  const [enabled, setEnabled] = useState(false)
  const [label, setLabel] = useState('')
  const [active, setActive] = useState(false)
  const x = useMotionValue(-100)
  const y = useMotionValue(-100)
  const sx = useSpring(x, { stiffness: 500, damping: 40, mass: 0.6 })
  const sy = useSpring(y, { stiffness: 500, damping: 40, mass: 0.6 })
  const raf = useRef<number | null>(null)

  useEffect(() => {
    // Only enable on devices with a fine pointer (desktop)
    if (!window.matchMedia('(pointer: fine)').matches) return
    setEnabled(true)

    const move = (e: MouseEvent) => {
      x.set(e.clientX)
      y.set(e.clientY)
      const el = (e.target as HTMLElement)?.closest('[data-cursor]') as HTMLElement | null
      if (el) {
        setActive(true)
        setLabel(el.dataset.cursor || '')
      } else {
        const interactive = (e.target as HTMLElement)?.closest('a, button, input, textarea, [role="button"]')
        setActive(Boolean(interactive))
        setLabel('')
      }
    }
    window.addEventListener('mousemove', move)
    return () => {
      window.removeEventListener('mousemove', move)
      if (raf.current) cancelAnimationFrame(raf.current)
    }
  }, [x, y])

  if (!enabled) return null

  return (
    <motion.div
      aria-hidden
      className="pointer-events-none fixed left-0 top-0 z-[9999] hidden mix-blend-difference md:block"
      style={{ x: sx, y: sy }}
    >
      <motion.div
        className="flex -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white text-[10px] font-semibold uppercase tracking-wide text-black"
        animate={{
          width: label ? 64 : active ? 44 : 14,
          height: label ? 64 : active ? 44 : 14,
        }}
        transition={{ type: 'spring', stiffness: 400, damping: 28 }}
      >
        {label}
      </motion.div>
    </motion.div>
  )
}
