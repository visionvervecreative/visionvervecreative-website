'use client'

import { useRef, useState } from 'react'
import Image from 'next/image'
import { MoveHorizontal } from 'lucide-react'

export function BeforeAfter({
  before,
  after,
  beforeLabel = 'Before',
  afterLabel = 'After',
}: {
  before: string
  after: string
  beforeLabel?: string
  afterLabel?: string
}) {
  const [pos, setPos] = useState(50)
  const ref = useRef<HTMLDivElement>(null)
  const dragging = useRef(false)

  const update = (clientX: number) => {
    const rect = ref.current?.getBoundingClientRect()
    if (!rect) return
    const p = ((clientX - rect.left) / rect.width) * 100
    setPos(Math.max(0, Math.min(100, p)))
  }

  return (
    <div
      ref={ref}
      className="relative aspect-[16/10] w-full cursor-ew-resize select-none overflow-hidden rounded-3xl border border-border"
      onMouseDown={(e) => {
        dragging.current = true
        update(e.clientX)
      }}
      onMouseMove={(e) => dragging.current && update(e.clientX)}
      onMouseUp={() => (dragging.current = false)}
      onMouseLeave={() => (dragging.current = false)}
      onTouchStart={(e) => update(e.touches[0].clientX)}
      onTouchMove={(e) => update(e.touches[0].clientX)}
    >
      <Image src={after} alt={afterLabel} fill className="object-cover" sizes="100vw" />
      <span className="absolute right-4 top-4 rounded-full bg-background/70 px-3 py-1 text-xs backdrop-blur">
        {afterLabel}
      </span>

      <div className="absolute inset-0" style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}>
        <Image src={before} alt={beforeLabel} fill className="object-cover grayscale" sizes="100vw" />
        <span className="absolute left-4 top-4 rounded-full bg-background/70 px-3 py-1 text-xs backdrop-blur">
          {beforeLabel}
        </span>
      </div>

      <div className="absolute inset-y-0 w-0.5 bg-white" style={{ left: `${pos}%` }}>
        <div className="absolute top-1/2 left-1/2 grid h-10 w-10 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-brand-gradient text-white shadow-lg">
          <MoveHorizontal className="h-4 w-4" />
        </div>
      </div>
    </div>
  )
}
