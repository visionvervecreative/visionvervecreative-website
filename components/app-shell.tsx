'use client'

import { ThemeProvider } from '@/components/theme-provider'
import { SmoothScroll } from '@/components/smooth-scroll'
import { CustomCursor } from '@/components/custom-cursor'
import { LoadingScreen } from '@/components/loading-screen'
import { ScrollProgress, BackToTop } from '@/components/scroll-utils'
import { SiteHeader } from '@/components/site-header'
import { FloatingNavigation } from '@/components/floating-navigation'
import { SiteFooter } from '@/components/site-footer'
import { PageTransition } from '@/components/page-transition'

export function AppShell({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider>
      <LoadingScreen />
      <SmoothScroll />
      <CustomCursor />
      <ScrollProgress />
      <SiteHeader />
      <FloatingNavigation />
      <PageTransition>{children}</PageTransition>
      <SiteFooter />
      <BackToTop />
    </ThemeProvider>
  )
}
