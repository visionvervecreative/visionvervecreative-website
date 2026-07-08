'use client'

import { Fragment, useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ArrowRight, X } from 'lucide-react'
import { universeNodes, universeEdges, type UniverseNode } from '@/lib/site-data'
import { SectionHeading } from '@/components/section-heading'

// adjacency map built once from the edge list
const adjacency: Record<string, string[]> = universeNodes.reduce((acc, n) => {
  acc[n.id] = universeEdges
    .filter((e) => e.includes(n.id))
    .map((e) => (e[0] === n.id ? e[1] : e[0]))
  return acc
}, {} as Record<string, string[]>)

type Size = { w: number; h: number }

export function CreativeUniverse() {
  const stageRef = useRef<HTMLDivElement>(null)
  const [size, setSize] = useState<Size>({ w: 0, h: 0 })
  const [hover, setHover] = useState<string | null>(null)
  const [selected, setSelected] = useState<string | null>(null)

  useEffect(() => {
    const el = stageRef.current
    if (!el) return
    const ro = new ResizeObserver(([entry]) => {
      const { width, height } = entry.contentRect
      setSize({ w: width, h: height })
    })
    ro.observe(el)
    return () => ro.disconnect()
  }, [])

  // the node driving illumination — hover wins, otherwise the selected node
  const active = hover ?? selected
  const activeNeighbors = active ? adjacency[active] : []

  const pos = useCallback(
    (n: UniverseNode) => ({ x: n.fx * size.w, y: n.fy * size.h }),
    [size],
  )

  const nodeById = useMemo(
    () => Object.fromEntries(universeNodes.map((n) => [n.id, n])),
    [],
  )

  const selectedNode = selected ? nodeById[selected] : null

  return (
    <section id="services" className="relative overflow-hidden py-24 sm:py-32">
      {/* ambient background glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-1/2 h-[70%] w-[70%] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-60 blur-3xl"
        style={{
          background:
            'radial-gradient(circle, color-mix(in oklab, var(--brand-indigo) 22%, transparent), transparent 70%)',
        }}
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="The Creative Universe"
          title={
            <>
              Not six services. <span className="text-gradient">One connected ecosystem.</span>
            </>
          }
          description="Hover a discipline to see how it links to the others — then tap to explore how VisionVerve combines them into complete solutions."
        />

        <div
          ref={stageRef}
          className="relative mt-12 h-[560px] w-full select-none sm:h-[640px] lg:h-[720px]"
          onMouseLeave={() => setHover(null)}
        >
          {/* energy connections */}
          <svg
            className="absolute inset-0 h-full w-full overflow-visible"
            width={size.w}
            height={size.h}
          >
            <defs>
              <linearGradient id="uni-energy" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="var(--brand-indigo)" />
                <stop offset="50%" stopColor="var(--brand-pink)" />
                <stop offset="100%" stopColor="var(--brand-orange)" />
              </linearGradient>
              <filter id="uni-glow" x="-50%" y="-50%" width="200%" height="200%">
                <feGaussianBlur stdDeviation="4" result="blur" />
                <feMerge>
                  <feMergeNode in="blur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>

            {size.w > 0 &&
              universeEdges.map(([a, b]) => {
                const A = pos(nodeById[a])
                const B = pos(nodeById[b])
                const d = curvePath(A, B)
                const isActive = !!active && (a === active || b === active)
                const isDimmed = !!active && !isActive
                return (
                  <g key={`${a}-${b}`} style={{ transition: 'opacity 0.4s', opacity: isDimmed ? 0.15 : 1 }}>
                    {/* base rail */}
                    <path
                      d={d}
                      fill="none"
                      stroke="var(--border)"
                      strokeWidth={1.5}
                      opacity={0.5}
                    />
                    {/* flowing energy */}
                    <motion.path
                      d={d}
                      fill="none"
                      stroke="url(#uni-energy)"
                      strokeWidth={isActive ? 3 : 1.6}
                      strokeLinecap="round"
                      strokeDasharray="4 16"
                      filter={isActive ? 'url(#uni-glow)' : undefined}
                      animate={{ strokeDashoffset: [0, -40] }}
                      transition={{
                        duration: isActive ? 0.9 : 2.6,
                        repeat: Infinity,
                        ease: 'linear',
                      }}
                      style={{ opacity: isActive ? 1 : 0.35, transition: 'opacity 0.4s, stroke-width 0.3s' }}
                    />
                  </g>
                )
              })}
          </svg>

          {/* service spheres */}
          {size.w > 0 &&
            universeNodes.map((n) => {
              const p = pos(n)
              const isActive = active === n.id
              const isRelated = !!active && activeNeighbors.includes(n.id)
              const isDimmed = !!active && !isActive && !isRelated
              const isSelected = selected === n.id
              return (
                <Sphere
                  key={n.id}
                  node={n}
                  x={p.x}
                  y={p.y}
                  state={isActive ? 'active' : isRelated ? 'related' : isDimmed ? 'dimmed' : 'idle'}
                  selected={isSelected}
                  showTooltip={hover === n.id}
                  onEnter={() => setHover(n.id)}
                  onSelect={() => setSelected((cur) => (cur === n.id ? null : n.id))}
                />
              )
            })}
        </div>

        {/* interactive storytelling panel */}
        <AnimatePresence mode="wait">
          {selectedNode && (
            <StoryPanel
              key={selectedNode.id}
              node={selectedNode}
              onClose={() => setSelected(null)}
            />
          )}
        </AnimatePresence>

        {!selectedNode && (
          <p className="mt-8 text-center text-sm text-muted-foreground">
            Tap any sphere to see how it connects across the VisionVerve ecosystem.
          </p>
        )}
      </div>
    </section>
  )
}

function Sphere({
  node,
  x,
  y,
  state,
  selected,
  showTooltip,
  onEnter,
  onSelect,
}: {
  node: UniverseNode
  x: number
  y: number
  state: 'idle' | 'active' | 'related' | 'dimmed'
  selected: boolean
  showTooltip: boolean
  onEnter: () => void
  onSelect: () => void
}) {
  const Icon = node.icon
  const lit = state === 'active' || state === 'related' || selected
  return (
    <motion.div
      className="absolute z-10 flex -translate-x-1/2 -translate-y-1/2 flex-col items-center"
      style={{ left: x, top: y }}
      animate={{
        opacity: state === 'dimmed' ? 0.4 : 1,
        scale: state === 'active' ? 1.08 : 1,
      }}
      transition={{ type: 'spring', stiffness: 200, damping: 18 }}
    >
      {/* tooltip */}
      <AnimatePresence>
        {showTooltip && (
          <motion.div
            initial={{ opacity: 0, y: 6, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 6, scale: 0.9 }}
            className="pointer-events-none absolute bottom-full mb-3 w-48 rounded-xl border border-border bg-card/95 px-3 py-2 text-center text-xs leading-snug text-foreground shadow-xl backdrop-blur"
          >
            {node.tooltip}
          </motion.div>
        )}
      </AnimatePresence>

      <button
        type="button"
        onMouseEnter={onEnter}
        onFocus={onEnter}
        onClick={onSelect}
        data-cursor={selected ? 'Close' : 'Connect'}
        aria-label={`${node.title}. ${node.tooltip}`}
        aria-pressed={selected}
        className="group relative grid h-16 w-16 place-items-center rounded-full outline-none sm:h-20 sm:w-20"
      >
        {/* pulsing halo */}
        <motion.span
          aria-hidden
          className="absolute inset-0 rounded-full"
          style={{ background: 'var(--brand-gradient)' }}
          animate={
            lit
              ? { opacity: [0.5, 0.2, 0.5], scale: [1, 1.35, 1] }
              : { opacity: 0.12, scale: 1 }
          }
          transition={{ duration: 2.4, repeat: Infinity, ease: 'easeInOut' }}
        />
        {/* gradient ring */}
        <span
          aria-hidden
          className="absolute inset-0 rounded-full p-[2px] transition-opacity"
          style={{ background: 'var(--brand-gradient)', opacity: lit ? 1 : 0.55 }}
        >
          <span className="block h-full w-full rounded-full bg-card" />
        </span>
        {/* core */}
        <span className="relative grid h-full w-full place-items-center rounded-full">
          <Icon
            className="h-6 w-6 transition-colors sm:h-7 sm:w-7"
            style={{ color: lit ? 'var(--brand-pink)' : 'var(--secondary)' }}
          />
        </span>
        {selected && (
          <motion.span
            layoutId="uni-selected-ring"
            className="absolute -inset-2 rounded-full ring-2 ring-[var(--brand-pink)]"
            transition={{ type: 'spring', stiffness: 300, damping: 25 }}
          />
        )}
      </button>

      <span
        className="mt-3 whitespace-nowrap text-center text-xs font-medium transition-colors sm:text-sm"
        style={{ color: lit ? 'var(--foreground)' : 'var(--muted-foreground)' }}
      >
        {node.short}
      </span>
    </motion.div>
  )
}

function StoryPanel({ node, onClose }: { node: UniverseNode; onClose: () => void }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 24 }}
      transition={{ type: 'spring', stiffness: 180, damping: 22 }}
      className="relative mx-auto mt-10 max-w-4xl overflow-hidden rounded-3xl border border-border bg-card/80 p-6 backdrop-blur sm:p-8"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-px"
        style={{ background: 'var(--brand-gradient)' }}
      />
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">How it connects</p>
          <h3 className="mt-1 font-display text-2xl font-semibold">{node.title}</h3>
        </div>
        <button
          type="button"
          onClick={onClose}
          data-cursor="Close"
          aria-label="Close story"
          className="grid h-9 w-9 shrink-0 place-items-center rounded-full border border-border text-muted-foreground transition-colors hover:text-foreground"
        >
          <X className="h-4 w-4" />
        </button>
      </div>

      {/* animated flow */}
      <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-stretch">
        {node.flow.map((step, i) => (
          <Fragment key={step}>
            <motion.div
              initial={{ opacity: 0, scale: 0.85 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.12 * i, type: 'spring', stiffness: 220, damping: 18 }}
              className="flex w-full items-center gap-3 rounded-2xl border border-border bg-background px-4 py-3 sm:flex-1 sm:flex-col sm:gap-2 sm:text-center"
            >
              <span
                className="grid h-7 w-7 shrink-0 place-items-center rounded-full text-xs font-semibold text-white"
                style={{ background: 'var(--brand-gradient)' }}
              >
                {i + 1}
              </span>
              <span className="text-sm font-medium">{step}</span>
            </motion.div>
            {i < node.flow.length - 1 && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.12 * i + 0.06 }}
                className="flex shrink-0 items-center justify-center text-muted-foreground"
              >
                <ArrowRight className="h-4 w-4 rotate-90 sm:rotate-0" />
              </motion.div>
            )}
          </Fragment>
        ))}
      </div>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.12 * node.flow.length + 0.1 }}
        className="mt-6 text-pretty text-sm leading-relaxed text-muted-foreground"
      >
        {node.message}
      </motion.p>
    </motion.div>
  )
}

// elegant curved connection using a quadratic bezier bowed perpendicular to the line
function curvePath(a: { x: number; y: number }, b: { x: number; y: number }) {
  const mx = (a.x + b.x) / 2
  const my = (a.y + b.y) / 2
  const dx = b.x - a.x
  const dy = b.y - a.y
  const len = Math.hypot(dx, dy) || 1
  const nx = -dy / len
  const ny = dx / len
  const k = 0.16 * len
  const cx = mx + nx * k
  const cy = my + ny * k
  return `M ${a.x} ${a.y} Q ${cx} ${cy} ${b.x} ${b.y}`
}
