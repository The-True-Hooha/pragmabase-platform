'use client'

import { motion } from 'framer-motion'
import { SectionLabel } from '@/components/ui/section-label'

const variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
}

const companies = ['Apex AI', 'NeuralOps', 'Stackform', 'Loopback', 'Synth Labs', 'Orbital']

const trustBadges = [
  { title: 'Self-host', desc: 'Deploy on your infra. Bring your own cloud.' },
  { title: 'SOC 2 Ready', desc: 'Security controls audited and documented.' },
  { title: 'You own your data', desc: 'Zero vendor lock-in. Export anytime.' },
]

const testimonials = [
  {
    handle: '@prakash_ml',
    name: 'Prakash Iyer',
    role: 'ML Platform Lead',
    text: 'Aegis caught a regression in our tool-calling logic 30 minutes before it would have hit prod. Saved us a bad Friday.',
  },
  {
    handle: '@sara_builds',
    name: 'Sara Voss',
    role: 'AI Engineer',
    text: "The sandbox isolation is the real deal. We run 200+ evals per PR and they're all fully isolated. Zero flakiness.",
  },
  {
    handle: '@devesh_infra',
    name: 'Devesh Kapoor',
    role: 'Platform Engineer',
    text: "We replaced three internal eval scripts with Aegis in a week. The CI integration just works. PR comments, pass/fail, the whole thing.",
  },
  {
    handle: '@lena_ai',
    name: 'Lena Marchetti',
    role: 'AI Product Lead',
    text: 'Transcript storage + replay changed how we debug agents. We can step through exactly what happened in any run.',
  },
  {
    handle: '@tomas_llm',
    name: 'Tomás Rivera',
    role: 'LLM Engineer',
    text: 'The LLM proxy alone is worth it. Token-level logging across all our model calls. Finally have visibility.',
  },
  {
    handle: '@jan_dev',
    name: 'Jan Kowalski',
    role: 'Backend Engineer',
    text: "Setup took 8 minutes. I'm not kidding. `npx aegis init`, pushed a PR, and had eval results the same day.",
  },
]

export function SocialProof() {
  return (
    <>
      {/* Accent section */}
      <section
        className="relative py-28 overflow-hidden"
        style={{
          background: 'linear-gradient(160deg, #0F1F5C 0%, #1740A6 50%, #2563EB 100%)',
        }}
      >
        {/* Grid lines */}
        <svg className="absolute inset-0 w-full h-full opacity-[0.12]" aria-hidden="true">
          <defs>
            <pattern id="sp-grid" x="0" y="0" width="48" height="48" patternUnits="userSpaceOnUse">
              <path d="M 48 0 L 0 0 0 48" fill="none" stroke="white" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#sp-grid)" />
        </svg>

        <div className="relative max-w-[1280px] mx-auto px-8">
          <div className="flex justify-between text-xs uppercase tracking-widest mb-12 pb-4 border-b font-mono"
            style={{ color: 'rgba(255,255,255,0.3)', borderColor: 'rgba(255,255,255,0.1)' }}>
            <span>SOCIAL PROOF</span>
            <span>[6/8]</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-14 items-end">
            <motion.h2
              variants={variants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.4, ease: 'easeOut' }}
              className="font-display font-bold text-[32px] md:text-[48px] text-white leading-tight"
            >
              Teams trust Aegis<br />in production.
            </motion.h2>

            {/* Logo strip */}
            <motion.div
              variants={variants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.4, ease: 'easeOut', delay: 0.1 }}
              className="flex flex-wrap gap-6 items-center self-end pb-1"
            >
              {companies.map((name) => (
                <span key={name} className="font-mono text-xs uppercase tracking-widest" style={{ color: 'rgba(255,255,255,0.35)' }}>
                  {name}
                </span>
              ))}
            </motion.div>
          </div>

          {/* Trust callouts */}
          <motion.div
            variants={variants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.4, ease: 'easeOut', delay: 0.16 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-0 rounded-2xl overflow-hidden"
            style={{ border: '1px solid rgba(255,255,255,0.12)' }}
          >
            {trustBadges.map((b, i) => (
              <div
                key={b.title}
                className="p-7"
                style={{
                  background: 'rgba(255,255,255,0.06)',
                  borderRight: i < trustBadges.length - 1 ? '1px solid rgba(255,255,255,0.1)' : 'none',
                }}
              >
                <p className="text-sm font-semibold text-white mb-1.5">{b.title}</p>
                <p className="text-xs leading-relaxed" style={{ color: 'rgba(255,255,255,0.5)' }}>{b.desc}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-28 bg-bg">
        <div className="max-w-[1280px] mx-auto px-8">
          <SectionLabel name="LOVED BY BUILDERS" index={6} />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-14">
            <motion.h2
              variants={variants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.4, ease: 'easeOut' }}
              className="font-display font-bold text-[32px] md:text-[40px] text-ink leading-tight"
            >
              Loved by teams<br />of every scale.
            </motion.h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0 border border-border rounded-2xl overflow-hidden">
            {testimonials.map((t, i) => (
              <motion.div
                key={t.handle}
                variants={variants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ duration: 0.4, ease: 'easeOut', delay: 0.06 * (i % 3) }}
                className={`p-7 bg-white flex flex-col justify-between ${
                  i % 3 !== 2 ? 'border-r border-border' : ''
                } ${i < 3 ? 'border-b border-border' : ''}`}
              >
                <p className="text-sm text-ink leading-relaxed mb-6">&ldquo;{t.text}&rdquo;</p>
                <div className="border-t border-border pt-4">
                  <p className="text-xs font-semibold text-ink">{t.name}</p>
                  <p className="text-xs text-muted">{t.role}</p>
                  <p className="text-xs font-mono text-accent mt-0.5">{t.handle}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
