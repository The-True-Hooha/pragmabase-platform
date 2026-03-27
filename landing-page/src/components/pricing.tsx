'use client'

import { motion } from 'framer-motion'
import { SectionLabel } from '@/components/ui/section-label'
import { Check } from 'lucide-react'
import { cn } from '@/lib/utils'

const variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
}

const tiers = [
  {
    name: 'FREE',
    price: '$0',
    period: 'forever',
    description: 'For individuals and experiments.',
    features: ['500 eval runs/mo', '1 sandbox environment', 'Community support', '7-day transcript storage'],
    cta: 'Get started',
    highlight: false,
  },
  {
    name: 'PRO',
    price: '$49',
    period: 'per month',
    description: 'For teams shipping agents to production.',
    features: [
      '20,000 eval runs/mo',
      'Unlimited sandboxes',
      'CI integration (GitHub + GitLab)',
      'LLM proxy included',
      '90-day transcript storage',
      'Priority support',
    ],
    cta: 'Start free trial',
    highlight: true,
  },
  {
    name: 'SCALE',
    price: '$399',
    period: 'per month',
    description: 'For ML platform teams at scale.',
    features: [
      '500,000 eval runs/mo',
      'Self-hosting option',
      'SSO + SAML',
      'Custom eval scorers',
      'Dedicated Slack support',
      'SLA guarantee',
    ],
    cta: 'Contact sales',
    highlight: false,
  },
]

const overages = [
  { item: 'Eval run (over limit)', price: '$0.001 / run' },
  { item: 'LLM proxy (over limit)', price: '$0.01 / 1k tokens' },
]

export function Pricing() {
  return (
    <section id="pricing" className="py-28 bg-bg-alt">
      <div className="max-w-[1280px] mx-auto px-8">
        <SectionLabel name="PRICING" index={7} />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-14 items-end">
          <motion.h2
            variants={variants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.4, ease: 'easeOut' }}
            className="font-display font-bold text-[32px] md:text-[48px] text-ink leading-tight"
          >
            Simple, transparent<br />
            <span className="text-accent">pricing.</span>
          </motion.h2>
          <motion.p
            variants={variants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.4, ease: 'easeOut', delay: 0.1 }}
            className="text-muted text-base leading-relaxed"
          >
            Start free. No credit card required. Upgrade when you need scale,
            not when you exceed arbitrary free tier limits.
          </motion.p>
        </div>

        {/* Tiers */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border border-border rounded-2xl overflow-hidden mb-6">
          {tiers.map((tier, i) => (
            <motion.div
              key={tier.name}
              variants={variants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.4, ease: 'easeOut', delay: 0.08 * i }}
              className={cn(
                'p-8 flex flex-col relative',
                tier.highlight ? 'text-white' : 'bg-white',
                i < tiers.length - 1 ? 'border-b md:border-b-0 md:border-r border-border' : ''
              )}
              style={
                tier.highlight
                  ? { background: 'linear-gradient(160deg, #1740A6 0%, #2563EB 100%)' }
                  : {}
              }
            >
              {tier.highlight && (
                <span
                  className="absolute top-4 right-4 text-[10px] font-mono uppercase tracking-wider px-2 py-1 rounded-md"
                  style={{ background: 'rgba(255,255,255,0.15)', color: 'rgba(255,255,255,0.8)' }}
                >
                  Most Popular
                </span>
              )}

              <p className={cn('text-xs uppercase tracking-widest font-mono mb-5', tier.highlight ? 'text-white/50' : 'text-muted')}>
                {tier.name}
              </p>
              <div className="mb-1">
                <span className={cn('font-mono text-[42px] font-bold leading-none', tier.highlight ? 'text-white' : 'text-ink')}>
                  {tier.price}
                </span>
                <span className={cn('text-sm ml-2', tier.highlight ? 'text-white/50' : 'text-muted')}>{tier.period}</span>
              </div>
              <p className={cn('text-sm mb-7', tier.highlight ? 'text-white/60' : 'text-muted')}>{tier.description}</p>

              <ul className="space-y-3 mb-8 flex-1">
                {tier.features.map((f) => (
                  <li key={f} className="flex items-start gap-2.5 text-sm">
                    <Check size={14} className={cn('mt-0.5 shrink-0', tier.highlight ? 'text-white/80' : 'text-pass')} />
                    <span className={tier.highlight ? 'text-white/80' : 'text-ink'}>{f}</span>
                  </li>
                ))}
              </ul>

              <button
                className={cn(
                  'w-full py-3.5 rounded-xl text-sm font-semibold transition-all duration-150',
                  tier.highlight
                    ? 'bg-white text-accent hover:bg-white/90'
                    : 'bg-accent text-white hover:bg-accent-hover'
                )}
              >
                {tier.cta}
              </button>
            </motion.div>
          ))}
        </div>

        {/* Enterprise + overages row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <motion.div
            variants={variants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.4, ease: 'easeOut', delay: 0.24 }}
            className="border border-border rounded-2xl bg-white px-8 py-6 flex items-center justify-between"
          >
            <div>
              <p className="text-sm font-semibold text-ink mb-0.5">Enterprise</p>
              <p className="text-xs text-muted">Custom volume, dedicated infra, enterprise security.</p>
            </div>
            <button className="border border-ink/20 text-ink text-sm px-5 py-2.5 rounded-xl hover:bg-bg-alt transition-colors shrink-0 ml-6 font-medium">
              Contact us →
            </button>
          </motion.div>

          <motion.div
            variants={variants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.4, ease: 'easeOut', delay: 0.3 }}
            className="border border-border rounded-2xl overflow-hidden bg-white"
          >
            <div className="px-6 py-3 border-b border-border bg-bg-alt">
              <p className="text-xs uppercase tracking-widest text-muted font-mono">Over-limit pricing</p>
            </div>
            {overages.map((row, i) => (
              <div key={row.item} className={`flex justify-between px-6 py-3.5 ${i < overages.length - 1 ? 'border-b border-border' : ''}`}>
                <span className="text-sm text-ink">{row.item}</span>
                <span className="text-sm font-mono text-muted">{row.price}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
