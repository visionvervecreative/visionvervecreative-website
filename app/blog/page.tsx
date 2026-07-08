import type { Metadata } from 'next'
import { PageHero } from '@/components/page-hero'
import { BlogList } from '@/components/blog/blog-list'
import { Newsletter } from '@/components/blog/newsletter'

export const metadata: Metadata = {
  title: 'Insights — The VisionVerve Journal',
  description:
    'Essays and field notes on branding, design, film, photography and technology from the VisionVerve Creative Tech team.',
}

export default function BlogPage() {
  return (
    <>
      <PageHero
        crumb="Blog"
        eyebrow="Journal"
        title={
          <>
            Ideas, craft & <span className="text-gradient">field notes</span>
          </>
        }
        description="Perspectives from our studio on the intersection of creativity and technology."
      />
      <BlogList />
      <Newsletter />
    </>
  )
}
