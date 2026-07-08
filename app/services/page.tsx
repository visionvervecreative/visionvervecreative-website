import type { Metadata } from 'next'
import { serviceDetails } from '@/lib/site-data'
import { PageHero } from '@/components/page-hero'
import { ServiceNav } from '@/components/services/service-nav'
import { ServiceDetailSection } from '@/components/services/service-detail'
import { Pricing } from '@/components/sections/pricing'
import { Faq } from '@/components/sections/faq'
import { Cta } from '@/components/sections/cta'

export const metadata: Metadata = {
  title: 'Services — Branding, Web, Software, Film & Photography',
  description:
    'Explore VisionVerve Creative Tech services: branding, graphic design, website and software development, photography and videography — one team, end to end.',
}

export default function ServicesPage() {
  return (
    <>
      <PageHero
        crumb="Services"
        eyebrow="What we do"
        title={
          <>
            Creative & technical services, <span className="text-gradient">under one roof</span>
          </>
        }
        description="From the first idea to the final line of code, we cover every discipline your brand needs to look, feel and perform at its best."
      />

      <ServiceNav />

      <div>
        {serviceDetails.map((service, i) => (
          <ServiceDetailSection key={service.id} service={service} index={i} />
        ))}
      </div>

      <Pricing />
      <Faq />
      <Cta />
    </>
  )
}
