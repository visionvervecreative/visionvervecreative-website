import type { Metadata } from 'next'
import { PageHero } from '@/components/page-hero'
import { Contact } from '@/components/sections/contact'
import { Faq } from '@/components/sections/faq'

export const metadata: Metadata = {
  title: 'Contact — Start a Project',
  description:
    'Get in touch with VisionVerve Creative Tech in Cape Town. Tell us about your branding, web, software, photography or video project.',
}

export default function ContactPage() {
  return (
    <>
      <PageHero
        crumb="Contact"
        eyebrow="Say hello"
        title={
          <>
            Let&apos;s build something <span className="text-gradient">unforgettable</span>
          </>
        }
        description="Whether you have a detailed brief or just a spark of an idea, we would love to hear from you."
      />
      <Contact />
      <Faq />
    </>
  )
}
