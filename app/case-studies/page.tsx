import type { Metadata } from 'next'
import { PageHero } from '@/components/page-hero'
import { CaseStudy } from '@/components/sections/case-study'
import { Testimonials } from '@/components/sections/testimonials'
import { CTA } from '@/components/sections/cta'

export const metadata: Metadata = {
  title: 'Case Studies — Results & Impact',
  description:
    'Deep dives into how VisionVerve Creative Tech turns strategy, design and technology into measurable business results.',
}

export default function CaseStudiesPage() {
  return (
    <>
      <PageHero
        crumb="Case Studies"
        eyebrow="Impact"
        title={
          <>
            Strategy, design & code that <span className="text-gradient">move the numbers</span>
          </>
        }
        description="We measure our work by the outcomes it creates. Here is a closer look at the thinking and craft behind a flagship engagement."
      />
      <CaseStudy />
      <Testimonials />
      <CTA />
    </>
  )
}
