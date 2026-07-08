import Image from 'next/image'
import Link from 'next/link'
import { Mail, Phone, MapPin, ArrowUpRight } from 'lucide-react'
import { navLinks, services, company } from '@/lib/site-data'

export function SiteFooter() {
  return (
    <footer className="relative border-t border-border bg-card">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-12 lg:grid-cols-[1.5fr_1fr_1fr_1.2fr]">
          <div>
            <Image
              src="/logos/main.png"
              alt="VisionVerve Creative"
              width={140}
              height={140}
              className="h-24 w-auto"
            />
            <p className="mt-4 max-w-xs text-sm text-muted-foreground leading-relaxed">
              A creative technology studio in Cape Town crafting brands, films and software that move people.
            </p>
            <div className="mt-5 flex flex-wrap gap-2">
              {company.socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  className="rounded-full border border-border px-3 py-1.5 text-xs text-muted-foreground transition-colors hover:border-primary/40 hover:text-foreground"
                >
                  {s.label}
                </a>
              ))}
            </div>
          </div>

          <FooterCol title="Navigate" links={navLinks} />
          <FooterCol
            title="Services"
            links={services.map((s) => ({ label: s.title, href: '/services' }))}
          />

          <div>
            <h4 className="text-sm font-semibold">Get in touch</h4>
            <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                <span>{company.location}</span>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                <a href={`mailto:${company.email}`} className="transition-colors hover:text-foreground">
                  {company.email}
                </a>
              </li>
              {company.phones.map((p) => (
                <li key={p} className="flex items-start gap-3">
                  <Phone className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                  <a href={`tel:${p.replace(/\s/g, '')}`} className="transition-colors hover:text-foreground">
                    {p}
                  </a>
                </li>
              ))}
            </ul>
            <Link
              href="/contact"
              className="mt-5 inline-flex items-center gap-2 rounded-full bg-brand-gradient px-4 py-2 text-sm font-semibold text-white"
            >
              Start a project
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-border pt-8 text-sm text-muted-foreground sm:flex-row">
          <p>© {new Date().getFullYear()} {company.name}. All rights reserved.</p>
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

function FooterCol({ title, links }: { title: string; links: { label: string; href: string }[] }) {
  return (
    <div>
      <h4 className="text-sm font-semibold">{title}</h4>
      <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
        {links.map((item) => (
          <li key={item.label}>
            <Link href={item.href} className="transition-colors hover:text-foreground">
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
