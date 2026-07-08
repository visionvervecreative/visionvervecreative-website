import { AppShell } from '@/components/app-shell'
import { Hero } from '@/components/sections/hero'
import { ClientsMarquee } from '@/components/sections/clients-marquee'
import { About } from '@/components/sections/about'
import { CreativeUniverse } from '@/components/sections/creative-universe'
import { Process } from '@/components/sections/process'
import { Portfolio } from '@/components/sections/portfolio'
import { CaseStudy } from '@/components/sections/case-study'
import { Showcase } from '@/components/sections/showcase'
import { Testimonials } from '@/components/sections/testimonials'
import { TechStack } from '@/components/sections/tech-stack'
import { Pricing } from '@/components/sections/pricing'
import { Blog } from '@/components/sections/blog'
import { Faq } from '@/components/sections/faq'
import { Contact } from '@/components/sections/contact'
import { SiteFooter } from '@/components/site-footer'

export default function Home() {
  return (
    <AppShell>
      <main>
        <Hero />
        <ClientsMarquee />
        <About />
        <CreativeUniverse />
        <Process />
        <Portfolio />
        <CaseStudy />
        <Showcase />
        <Testimonials />
        <TechStack />
        <Pricing />
        <Blog />
        <Faq />
        <Contact />
      </main>
      <SiteFooter />
    </AppShell>
  )
}
