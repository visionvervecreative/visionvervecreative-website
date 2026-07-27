import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Inter, Sora } from 'next/font/google'
import './globals.css'
import { AppShell } from '@/components/app-shell'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter', display: 'swap' })
const sora = Sora({
  subsets: ['latin'],
  variable: '--font-sora',
  display: 'swap',
  weight: ['400', '500', '600', '700', '800'],
})

const siteUrl = 'https://visionverve.creative'

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'VisionVerve Creative — We Create Experiences',
    template: '%s | VisionVerve Creative',
  },
  description:
    'VisionVerve Creative is a Creative Technology Company crafting brands, websites, software, photography and film that move people.',
  keywords: [
    'creative technology company',
    'branding',
    'web development',
    'software development',
    'photography',
    'videography',
    'digital solutions',
  ],
  authors: [{ name: 'VisionVerve Creative' }],
  openGraph: {
    title: 'VisionVerve Creative — We Create Experiences',
    description:
      'A Creative Technology Company crafting brands, websites, software, photography and film.',
    url: siteUrl,
    siteName: 'VisionVerve Creative',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'VisionVerve Creative — We Create Experiences',
    description:
      'A Creative Technology Company crafting brands, websites, software, photography and film.',
  },
  icons: {
    icon: '/logos/favicon.png',
    shortcut: '/logos/favicon.png',
    apple: '/logos/favicon.png',
  },
  generator: 'v0.app',
}

export const viewport: Viewport = {
  themeColor: '#050505',
  colorScheme: 'dark light',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`dark ${inter.variable} ${sora.variable}`} suppressHydrationWarning>
      <body className="bg-background text-foreground antialiased">
        <AppShell>{children}</AppShell>
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
