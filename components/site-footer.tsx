import Image from 'next/image'
import { navLinks, services } from '@/lib/site-data'

const socials = ['Instagram', 'Dribbble', 'LinkedIn', 'Behance', 'YouTube']

export function SiteFooter() {
  return (
    <footer className="relative border-t border-border bg-card">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <Image
              src="/logos/main.png"
              alt="VisionVerve Creative"
              width={140}
              height={140}
              className="h-24 w-auto"
            />
            <p className="mt-4 max-w-xs text-sm text-muted-foreground leading-relaxed">
              A creative technology studio crafting brands, films and software that move people.
            </p>
          </div>

          <FooterCol title="Navigate" items={navLinks.map((l) => l.label)} hrefs={navLinks.map((l) => l.href)} />
          <FooterCol title="Services" items={services.map((s) => s.title)} />
          <FooterCol title="Social" items={socials} />
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-border pt-8 text-sm text-muted-foreground sm:flex-row">
          <p>© {new Date().getFullYear()} VisionVerve Creative Tech. All rights reserved.</p>
          <div className="flex gap-6">
            <span>Privacy</span>
            <span>Terms</span>
            <span>Cookies</span>
          </div>
        </div>
      </div>
    </footer>
  )
}

function FooterCol({
  title,
  items,
  hrefs,
}: {
  title: string
  items: string[]
  hrefs?: string[]
}) {
  return (
    <div>
      <h4 className="text-sm font-semibold">{title}</h4>
      <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
        {items.map((item, i) => (
          <li key={item}>
            <a
              href={hrefs?.[i] ?? '#'}
              className="transition-colors hover:text-foreground"
            >
              {item}
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}
