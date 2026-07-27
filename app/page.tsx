import { Hero } from '@/components/sections/hero'
import { ClientsMarquee } from '@/components/sections/clients-marquee'
import { About } from '@/components/sections/about'
import { WhyChoose } from '@/components/sections/why-choose'
import { Future } from '@/components/sections/future'
import { ServicesPreview } from '@/components/sections/services-preview'
import { CreativeUniverse } from '@/components/sections/creative-universe'
import { FeaturedProjects } from '@/components/sections/featured-projects'
import { Testimonials } from '@/components/sections/testimonials'
import { Blog } from '@/components/sections/blog'
import { CTA } from '@/components/sections/cta'

export default function Home() {
  return (
    <main>
      <Hero />
      <ClientsMarquee />
      <About />
      <WhyChoose />
      <Future />
      <ServicesPreview />
      <CreativeUniverse />
      <FeaturedProjects />
      <Testimonials />
      <Blog />
      <CTA />
    </main>
  )
}
