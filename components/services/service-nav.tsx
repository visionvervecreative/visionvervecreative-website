'use client'

import { serviceDetails } from '@/lib/site-data'

export function ServiceNav() {
  return (
    <div className="sticky top-16 z-20 border-y border-border bg-background/80 backdrop-blur-lg">
      <div className="mx-auto flex max-w-7xl gap-2 overflow-x-auto px-4 py-4 sm:px-6">
        {serviceDetails.map((s) => {
          const Icon = s.icon
          return (
            <a
              key={s.id}
              href={`#${s.id}`}
              className="group inline-flex shrink-0 items-center gap-2 rounded-full border border-border bg-card px-4 py-2 text-sm font-medium transition-colors hover:border-primary/40 hover:text-primary"
            >
              <Icon className="size-4 text-secondary transition-colors group-hover:text-primary" />
              {s.title}
            </a>
          )
        })}
      </div>
    </div>
  )
}
