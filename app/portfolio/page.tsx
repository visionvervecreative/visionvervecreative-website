import type { Metadata } from 'next'
import { PageHero } from '@/components/page-hero'
import { PortfolioGallery } from '@/components/portfolio/gallery'
import { ClientsMarquee } from '@/components/sections/clients-marquee'
import { CTA } from '@/components/sections/cta'

export const metadata: Metadata = {
  title: 'Portfolio — Selected Work',
  description:
    'A selection of branding, web, software, photography and film projects from VisionVerve Creative, a Creative Technology Company.',
}

export default function PortfolioPage() {
  return (
    <>
      <PageHero
        crumb="Portfolio"
        eyebrow="Our work"
        title={
          <>
            Work we are <span className="text-gradient">proud to sign</span>
          </>
        }
        description="Every project is a partnership. Explore a selection of the brands, products and stories we have helped bring to life."
      />
      <PortfolioGallery />
      <ClientsMarquee />
      <CTA />
    </>
  )
}
