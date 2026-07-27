'use client'

import { useEffect, useRef, useState } from 'react'
import { useInView } from 'framer-motion'

export function CountUp({
  to,
  suffix = '',
  duration = 1800,
  startOnMount = false,
}: {
  to: number
  suffix?: string
  duration?: number
  /** Start counting as soon as the component mounts, regardless of scroll position.
   *  Use for above-the-fold stats that may sit just below a short viewport's fold. */
  startOnMount?: boolean
}) {
  const ref = useRef<HTMLSpanElement>(null)
  const inViewOnly = useInView(ref, { once: true, margin: '-60px' })
  const inView = startOnMount || inViewOnly
  const [value, setValue] = useState(0)

  useEffect(() => {
    if (!inView) return
    let start: number | null = null
    let raf = 0
    const tick = (t: number) => {
      if (start === null) start = t
      const progress = Math.min(1, (t - start) / duration)
      const eased = 1 - Math.pow(1 - progress, 3)
      setValue(Math.round(eased * to))
      if (progress < 1) raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [inView, to, duration])

  return (
    <span ref={ref} className="tabular-nums">
      {value}
      {suffix}
    </span>
  )
}
