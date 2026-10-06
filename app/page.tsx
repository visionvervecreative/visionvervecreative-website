import { Hero } from '@/components/sections/hero'
import { ClientsMarquee } from '@/components/sections/clients-marquee'
import { About } from '@/components/sections/about'
import { WhyChoose } from '@/components/sections/why-choose'
import { ServicesPreview } from '@/components/sections/services-preview'
import { CreativeUniverse } from '@/components/sections/creative-universe'
import { Capabilities, ExperiencesInMotion, OnePartner, AVLiveVisualisation, Vision2030 } from '@/components/sections/capabilities'
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
      <Capabilities />
      <WhyChoose />
      <ServicesPreview />
      <ExperiencesInMotion />
      <AVLiveVisualisation />
      <CreativeUniverse />
      <OnePartner />
      <Vision2030 />
      <FeaturedProjects />
      <Testimonials />
      <Blog />
      <CTA />
    </main>
  )
}
