'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Check, Send } from 'lucide-react'

export function Newsletter() {
  const [email, setEmail] = useState('')
  const [sent, setSent] = useState(false)

  return (
    <section className="relative py-20 sm:py-24">
      <div className="mx-auto max-w-4xl px-4 sm:px-6">
        <div className="gradient-border relative overflow-hidden rounded-3xl bg-card p-8 text-center sm:p-14">
          <div aria-hidden className="pointer-events-none absolute inset-0">
            <div className="absolute -top-24 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-primary/20 blur-[100px]" />
          </div>
          <div className="relative">
            <h2 className="font-display text-3xl font-bold text-balance sm:text-4xl">
              Get creative field notes in your inbox
            </h2>
            <p className="mx-auto mt-4 max-w-xl leading-relaxed text-muted-foreground">
              Occasional essays on brand, design and technology. No spam, unsubscribe anytime.
            </p>

            {sent ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="mx-auto mt-8 inline-flex items-center gap-2 rounded-full bg-brand-gradient px-6 py-3 text-sm font-semibold text-white"
              >
                <Check className="size-4" /> You are on the list
              </motion.div>
            ) : (
              <form
                onSubmit={(e) => {
                  e.preventDefault()
                  if (email.trim()) setSent(true)
                }}
                className="mx-auto mt-8 flex max-w-md flex-col gap-3 sm:flex-row"
              >
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@company.com"
                  className="flex-1 rounded-full border border-border bg-background px-5 py-3.5 text-sm outline-none transition-colors focus:border-primary"
                />
                <button
                  type="submit"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-brand-gradient px-6 py-3.5 text-sm font-semibold text-white"
                >
                  Subscribe <Send className="size-4" />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
