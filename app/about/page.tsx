import type { Metadata } from 'next'
import { PageHero } from '@/components/page-hero'
import { AboutStory } from '@/components/about/story'
import { CoreValues, WhatWeBelieve } from '@/components/about/values-philosophy'
import { Process } from '@/components/sections/process'
import { Timeline, Team } from '@/components/about/timeline-team'
import { Future } from '@/components/sections/future'
import { CTA } from '@/components/sections/cta'

export const metadata: Metadata = {
  title: 'About Us',
  description:
    'Founded in 2024 in Cape Town, VisionVerve Creative is a Creative Technology Company uniting branding, design, film and software into one craft.',
}

export default function AboutPage() {
  return (
    <main>
      <PageHero
        crumb="About Us"
        eyebrow="About VisionVerve"
        title={<>A Creative Technology Company built for the <span className="text-gradient">next era of brands</span></>}
        description="Founded in 2024 in Cape Town, VisionVerve Creative unites strategy, design, film and engineering under one roof — because we don't just build brands, we create experiences."
      />
      <AboutStory />
      <CoreValues />
      <WhatWeBelieve />
      <Process />
      <Team />
      <Timeline />
      <Future />
      <CTA
        eyebrow="Join the journey"
        title="Let's create something that lasts"
        description="Whether you have a brief or just a bold idea, we would love to hear it. Let's explore what VisionVerve can build with you."
      />
    </main>
  )
}
