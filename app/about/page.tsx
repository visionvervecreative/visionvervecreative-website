import type { Metadata } from 'next'
import { PageHero } from '@/components/page-hero'
import { AboutStory } from '@/components/about/story'
import { CoreValues, Philosophy } from '@/components/about/values-philosophy'
import { Process } from '@/components/sections/process'
import { Timeline, Team } from '@/components/about/timeline-team'
import { CTA } from '@/components/sections/cta'

export const metadata: Metadata = {
  title: 'About Us',
  description:
    'Founded in 2024 in Cape Town, VisionVerve Creative is a creative technology studio uniting branding, design, film and software into one craft.',
}

export default function AboutPage() {
  return (
    <main>
      <PageHero
        crumb="About Us"
        eyebrow="About VisionVerve"
        title={<>We are a creative technology studio built for the <span className="text-gradient">next era of brands</span></>}
        description="Founded in 2024 in Cape Town, VisionVerve Creative unites strategy, design, film and engineering under one roof — so ambitious brands can move faster and feel unmistakably themselves."
      />
      <AboutStory />
      <CoreValues />
      <Philosophy />
      <Process />
      <Timeline />
      <Team />
      <CTA
        eyebrow="Join the journey"
        title="Let's create something that lasts"
        description="Whether you have a brief or just a bold idea, we would love to hear it. Let's explore what VisionVerve can build with you."
      />
    </main>
  )
}
