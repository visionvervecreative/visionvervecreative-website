'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Check, Sparkles } from 'lucide-react'
import { pricing } from '@/lib/site-data'
import { SectionHeading } from '@/components/section-heading'
import { Reveal } from '@/components/anim/reveal'
import { Magnetic } from '@/components/anim/magnetic'

export function Pricing() {
  return (
    <section id="pricing" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
          <SectionHeading
            eyebrow="Pricing"
            title={<>Engagements that <span className="text-gradient">scale with you</span></>}
            description="Transparent starting points. Every partnership is tailored after a discovery call."
          />
          <Image
            src="/logos/sub.png"
            alt="VisionVerve Creative Tech"
            width={240}
            height={70}
            className="hidden h-12 w-auto object-contain opacity-90 lg:block"
          />
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {pricing.map((plan, i) => (
            <Reveal key={plan.name} delay={i}>
              <div
                className={`relative flex h-full flex-col rounded-3xl border p-8 ${
                  plan.featured ? 'gradient-border bg-card' : 'border-border bg-card'
                }`}
              >
                {plan.featured && (
                  <span className="absolute right-6 top-6 inline-flex items-center gap-1.5 rounded-full bg-brand-gradient px-3 py-1 text-xs font-semibold text-white">
                    <Sparkles className="h-3 w-3" /> Popular
                  </span>
                )}
                <h3 className="font-display text-lg font-semibold">{plan.name}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{plan.tagline}</p>
                <p className="mt-6 font-display text-4xl font-bold">
                  {plan.price}
                  {plan.price !== 'Custom' && <span className="text-base font-normal text-muted-foreground"> / project</span>}
                </p>
                <ul className="mt-6 flex-1 space-y-3">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-start gap-3 text-sm">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-secondary" />
                      <span className="text-muted-foreground">{f}</span>
                    </li>
                  ))}
                </ul>
                <Magnetic strength={0.25}>
                  <Link
                    href="/contact"
                    className={`mt-8 inline-flex w-full items-center justify-center rounded-full px-5 py-3.5 text-sm font-semibold transition-colors ${
                      plan.featured
                        ? 'bg-brand-gradient text-white'
                        : 'border border-border hover:bg-background'
                    }`}
                  >
                    Get Started
                  </Link>
                </Magnetic>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
