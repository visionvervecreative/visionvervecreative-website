'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowUpRight, Mail, MapPin, Phone, Check, Clock, MessageCircle } from 'lucide-react'
import { SectionHeading } from '@/components/section-heading'
import { Reveal } from '@/components/anim/reveal'
import { Magnetic } from '@/components/anim/magnetic'
import { company } from '@/lib/site-data'

const services = [
  'Website Development',
  'Software Development',
  'Branding',
  'Graphic Design',
  'Photography',
  'Videography',
]

const waNumber = company.whatsapp.replace(/[^0-9]/g, '')

export function Contact() {
  const [submitted, setSubmitted] = useState(false)
  const [selected, setSelected] = useState<string[]>([])

  function toggle(s: string) {
    setSelected((prev) => (prev.includes(s) ? prev.filter((x) => x !== s) : [...prev, s]))
  }

  function onSubmit(e: React.FormEvent) {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <section id="contact" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-14 lg:grid-cols-2">
          <div>
            <SectionHeading
              align="left"
              eyebrow="Get in touch"
              title="Reach us directly"
              description="Prefer to talk? Use any of the channels below, or send the brief and we'll reply within one business day."
            />

            <div className="mt-10 space-y-5">
              {[
                { icon: Mail, label: 'Email', value: company.email, href: `mailto:${company.email}` },
                { icon: Phone, label: 'Call us', value: company.phones.join('  ·  '), href: `tel:${company.phones[0].replace(/\s/g, '')}` },
                { icon: MessageCircle, label: 'WhatsApp', value: company.whatsapp, href: `https://wa.me/${waNumber}` },
                { icon: MapPin, label: 'Studio', value: company.location, href: undefined },
              ].map((c) => {
                const Inner = (
                  <div className="flex items-center gap-4">
                    <span className="grid size-11 place-items-center rounded-2xl border border-border bg-card text-primary">
                      <c.icon className="size-5" />
                    </span>
                    <div>
                      <p className="text-sm text-muted-foreground">{c.label}</p>
                      <p className="font-medium">{c.value}</p>
                    </div>
                  </div>
                )
                return (
                  <Reveal key={c.label}>
                    {c.href ? (
                      <a href={c.href} className="block transition-opacity hover:opacity-80">
                        {Inner}
                      </a>
                    ) : (
                      Inner
                    )}
                  </Reveal>
                )
              })}

              <Reveal>
                <div className="rounded-3xl border border-border bg-card p-6">
                  <div className="flex items-center gap-2 text-sm font-semibold">
                    <Clock className="size-4 text-secondary" />
                    Business hours
                  </div>
                  <dl className="mt-4 space-y-2 text-sm">
                    {company.hours.map((h) => (
                      <div key={h.day} className="flex items-center justify-between gap-4">
                        <dt className="text-muted-foreground">{h.day}</dt>
                        <dd className="font-medium">{h.time}</dd>
                      </div>
                    ))}
                  </dl>
                </div>
              </Reveal>
            </div>
          </div>

          <Reveal>
            <div className="rounded-3xl border border-border bg-card p-6 sm:p-8">
              {submitted ? (
                <div className="flex min-h-[420px] flex-col items-center justify-center text-center">
                  <motion.span
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="grid size-16 place-items-center rounded-full bg-primary text-primary-foreground"
                  >
                    <Check className="size-8" />
                  </motion.span>
                  <h3 className="mt-6 font-serif text-2xl">Message received</h3>
                  <p className="mt-2 max-w-sm text-muted-foreground">
                    Thank you for reaching out. Our team will be in touch shortly to explore your project.
                  </p>
                </div>
              ) : (
                <form onSubmit={onSubmit} className="space-y-5">
                  <div className="grid gap-5 sm:grid-cols-2">
                    <Field label="Name" name="name" placeholder="Jane Doe" />
                    <Field label="Email" name="email" type="email" placeholder="jane@brand.com" />
                  </div>
                  <Field label="Company" name="company" placeholder="Your company" required={false} />

                  <div>
                    <label className="mb-2 block text-sm text-muted-foreground">
                      What do you need?
                    </label>
                    <div className="flex flex-wrap gap-2">
                      {services.map((s) => {
                        const active = selected.includes(s)
                        return (
                          <button
                            type="button"
                            key={s}
                            onClick={() => toggle(s)}
                            className={`rounded-full border px-4 py-2 text-sm transition-colors ${
                              active
                                ? 'border-primary bg-primary text-primary-foreground'
                                : 'border-border text-muted-foreground hover:border-primary/40'
                            }`}
                          >
                            {s}
                          </button>
                        )
                      })}
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="mb-2 block text-sm text-muted-foreground">
                      Project details
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      required
                      placeholder="Tell us about your goals, timeline and budget."
                      className="w-full resize-none rounded-2xl border border-border bg-background px-4 py-3 text-sm outline-none transition-colors focus:border-primary"
                    />
                  </div>

                  <Magnetic>
                    <button
                      type="submit"
                      className="group flex w-full items-center justify-center gap-2 rounded-full bg-primary px-6 py-4 font-medium text-primary-foreground transition-transform hover:scale-[1.01]"
                    >
                      Send message
                      <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </button>
                  </Magnetic>
                </form>
              )}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

function Field({
  label,
  name,
  type = 'text',
  placeholder,
  required = true,
}: {
  label: string
  name: string
  type?: string
  placeholder?: string
  required?: boolean
}) {
  return (
    <div>
      <label htmlFor={name} className="mb-2 block text-sm text-muted-foreground">
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        className="w-full rounded-2xl border border-border bg-background px-4 py-3 text-sm outline-none transition-colors focus:border-primary"
      />
    </div>
  )
}
