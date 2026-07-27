'use client'

import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import { motion, useScroll, useTransform } from 'framer-motion'
import { ArrowUpRight, Play, Users, Award, Globe, Code2, HeartHandshake, type LucideIcon } from 'lucide-react'
import { heroServices, stats } from '@/lib/site-data'
import { Particles } from '@/components/anim/particles'
import { Magnetic } from '@/components/anim/magnetic'
import { CountUp } from '@/components/anim/count-up'

const headline = ['We', 'Don’t', 'Just', 'Build', 'Brands.']
const headline2 = ['We', 'Create', 'Experiences.']

// Subtle monochrome line icons, one per statistic (matches the stats data order)
const statIcons: LucideIcon[] = [Users, Award, Globe, Code2, HeartHandshake]

export function Hero() {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  // Gentle parallax that fully settles before the section leaves the viewport,
  // so the hero flows into the marquee with no jump or overlap.
  const y = useTransform(scrollYProgress, [0, 1], [0, 80])
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0])
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.06])

  const [index, setIndex] = useState(0)
  useEffect(() => {
    const id = setInterval(() => setIndex((i) => (i + 1) % heroServices.length), 2200)
    return () => clearInterval(id)
  }, [])

  return (
    <section id="home" ref={ref} className="relative flex min-h-[86svh] items-center overflow-hidden">
      {/* Cinematic animated background */}
      <motion.div style={{ scale }} className="absolute inset-0 -z-10 will-change-transform [transform:translateZ(0)]">
        <div className="absolute inset-0 bg-background" />
        <motion.div
          animate={{ x: [0, 60, 0], y: [0, -40, 0] }}
          transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute -left-32 top-10 h-[42rem] w-[42rem] rounded-full bg-primary/25 blur-[130px]"
        />
        <motion.div
          animate={{ x: [0, -50, 0], y: [0, 50, 0] }}
          transition={{ duration: 22, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute -right-24 top-1/3 h-[36rem] w-[36rem] rounded-full bg-accent/20 blur-[130px]"
        />
        <motion.div
          animate={{ x: [0, 40, 0] }}
          transition={{ duration: 16, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute bottom-0 left-1/3 h-[30rem] w-[30rem] rounded-full bg-secondary/15 blur-[130px]"
        />
        <Particles className="absolute inset-0" />
        <div className="absolute inset-0 bg-background/40" />
        <div className="noise absolute inset-0 opacity-[0.12]" />
      </motion.div>

      <motion.div style={{ y, opacity }} className="mx-auto w-full max-w-7xl px-4 pb-10 pt-28 will-change-transform [transform:translateZ(0)] sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-6 inline-flex items-center gap-2 rounded-full border border-border px-4 py-1.5 text-xs text-muted-foreground glass"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-secondary" />
          Creative Technology Company
        </motion.div>

        <h1 className="font-display text-[clamp(2.6rem,8vw,6.5rem)] font-bold leading-[0.95] tracking-tight text-balance">
          <span className="block">
            {headline.map((w, i) => (
              <Word key={w} word={w} delay={0.3 + i * 0.08} />
            ))}
          </span>
          <span className="block">
            {headline2.map((w, i) => (
              <Word key={w} word={w} delay={0.7 + i * 0.08} gradient={i > 0} />
            ))}
          </span>
        </h1>

        <div className="mt-6 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="max-w-md text-pretty text-base leading-relaxed text-muted-foreground"
          >
            A Creative Technology Company blending strategy, creativity, media and technology to build
            meaningful brands, engaging digital experiences and innovative solutions that drive growth.
          </motion.p>

          <div className="flex h-9 items-center gap-3 font-display text-lg font-semibold">
            <span className="text-muted-foreground">We craft</span>
            <span className="relative inline-block h-9 min-w-[13ch] overflow-hidden">
              {heroServices.map((s, i) => (
                <motion.span
                  key={s}
                  className="absolute left-0 text-gradient"
                  animate={{ y: index === i ? 0 : index > i ? -40 : 40, opacity: index === i ? 1 : 0 }}
                  transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                >
                  {s}
                </motion.span>
              ))}
            </span>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1 }}
          className="mt-8 flex flex-wrap items-center gap-4"
        >
          <Magnetic>
            <Link
              href="/portfolio"
              data-cursor="View"
              className="group inline-flex items-center gap-2 rounded-full bg-brand-gradient px-7 py-4 text-sm font-semibold text-white shadow-xl shadow-primary/25"
            >
              View Our Work
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </Magnetic>
          <Magnetic>
            <Link
              href="/contact"
              data-cursor="Book"
              className="group inline-flex items-center gap-2 rounded-full border border-foreground/20 bg-card/60 px-7 py-4 text-sm font-semibold text-foreground backdrop-blur-sm transition-all hover:border-foreground/40 hover:bg-card hover:shadow-lg"
            >
              <Play className="h-4 w-4 text-secondary transition-transform group-hover:scale-110" />
              Book Discovery Call
            </Link>
          </Magnetic>
        </motion.div>

        <motion.dl
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.3 }}
          className="mt-10 grid grid-cols-2 gap-3 border-t border-border pt-8 sm:grid-cols-3 sm:gap-4 lg:grid-cols-5"
        >
          {stats.map((s, i) => {
            const Icon = statIcons[i] ?? Users
            return (
              <div
                key={s.label}
                className="group rounded-2xl border border-transparent p-3 transition-colors duration-300 hover:border-border hover:bg-card/50"
              >
                <Icon className="h-4 w-4 text-muted-foreground/60 transition-colors group-hover:text-primary" strokeWidth={1.5} />
                <dd className="mt-3 font-display text-3xl font-bold leading-none sm:text-4xl">
                  <CountUp to={s.value} suffix={s.suffix} startOnMount />
                </dd>
                <dt className="mt-2 text-xs leading-snug text-muted-foreground">{s.label}</dt>
              </div>
            )
          })}
        </motion.dl>
      </motion.div>
    </section>
  )
}

function Word({ word, delay, gradient }: { word: string; delay: number; gradient?: boolean }) {
  return (
    <span className="mr-[0.25em] inline-block overflow-hidden align-bottom">
      <motion.span
        initial={{ y: '110%' }}
        animate={{ y: 0 }}
        transition={{ delay, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className={`inline-block ${gradient ? 'text-gradient' : ''}`}
      >
        {word}
      </motion.span>
    </span>
  )
}
