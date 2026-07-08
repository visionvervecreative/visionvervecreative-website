'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import { AnimatePresence, motion } from 'framer-motion'
import { Laptop, Tablet, Smartphone } from 'lucide-react'
import { SectionHeading } from '@/components/section-heading'

const devices = [
  { id: 'laptop', label: 'Desktop', icon: Laptop, frame: 'w-full max-w-3xl aspect-[16/10]', screen: 'rounded-t-xl' },
  { id: 'tablet', label: 'Tablet', icon: Tablet, frame: 'w-full max-w-md aspect-[3/4]', screen: 'rounded-xl' },
  { id: 'phone', label: 'Mobile', icon: Smartphone, frame: 'w-full max-w-[220px] aspect-[9/19]', screen: 'rounded-[1.75rem]' },
] as const

export function Showcase() {
  const [index, setIndex] = useState(0)
  useEffect(() => {
    const id = setInterval(() => setIndex((i) => (i + 1) % devices.length), 3500)
    return () => clearInterval(id)
  }, [])
  const device = devices[index]

  return (
    <section className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Website Showcase"
          title={<>Pixel-perfect on <span className="text-gradient">every screen</span></>}
          description="We engineer experiences that feel intentional from ultrawide desktops down to the smallest phone."
          align="center"
        />

        <div className="mt-6 flex justify-center gap-2">
          {devices.map((d, i) => (
            <button
              key={d.id}
              onClick={() => setIndex(i)}
              className={`inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm transition-colors ${
                index === i ? 'border-primary/60 bg-card text-foreground' : 'border-border text-muted-foreground'
              }`}
            >
              <d.icon className="h-4 w-4" /> {d.label}
            </button>
          ))}
        </div>

        <div className="mt-12 flex min-h-[26rem] items-center justify-center sm:min-h-[34rem]">
          <AnimatePresence mode="wait">
            <motion.div
              key={device.id}
              initial={{ opacity: 0, y: 30, rotateX: 12 }}
              animate={{ opacity: 1, y: 0, rotateX: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              style={{ transformPerspective: 1200 }}
              className={`relative ${device.frame}`}
            >
              <div className="absolute -inset-8 -z-10 rounded-full bg-primary/20 blur-3xl" />
              <div className="h-full rounded-2xl border-2 border-white/10 bg-neutral-900 p-2 shadow-2xl">
                <div className={`relative h-full w-full overflow-hidden bg-black ${device.screen}`}>
                  <Image
                    src="/images/showcase-web.png"
                    alt="VisionVerve website showcase"
                    fill
                    className="object-cover object-top"
                    sizes="(max-width: 768px) 90vw, 768px"
                  />
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}
