import { Nav } from '@/components/nav'
import { Footer } from '@/components/footer'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Pricing — Pragmabase',
  description: 'Simple, usage-based pricing for the Pragmabase agentic infrastructure platform.',
}

const plans = [
  {
    name: 'Sandbox',
    price: 'Free',
    period: '',
    desc: 'For developers exploring the platform. No credit card required.',
    color: '#818CF8',
    accent: 'rgba(129,140,248,0.12)',
    border: 'rgba(129,140,248,0.2)',
    cta: 'Start for free',
    ctaHref: '/playground',
    ghost: true,
    features: [
      '1 active agent',
      '100 memory operations / day',
      'Stellar testnet only',
      '5 reliability lab scenarios',
      'Community support',
      'Public sandbox',
    ],
  },
  {
    name: 'Builder',
    price: '$49',
    period: '/mo',
    desc: 'For indie developers and small teams shipping production agents.',
    color: '#A8FF3E',
    accent: 'rgba(168,255,62,0.1)',
    border: 'rgba(168,255,62,0.3)',
    cta: 'Get started',
    ctaHref: '/playground',
    featured: true,
    features: [
      '5 active agents',
      '50,000 memory operations / mo',
      'Stellar mainnet + testnet',
      'Unlimited reliability scenarios',
      'x402 payment triggers',
      'Email support',
      'Audit trails (30 days)',
    ],
  },
  {
    name: 'Team',
    price: '$199',
    period: '/mo',
    desc: 'For teams building multi-agent systems with shared memory and budgets.',
    color: '#C4B5FD',
    accent: 'rgba(196,181,253,0.08)',
    border: 'rgba(196,181,253,0.2)',
    cta: 'Start team trial',
    ctaHref: '/playground',
    ghost: true,
    features: [
      '25 active agents',
      'Unlimited memory operations',
      'Team memory + shared budgets',
      'Stellar mainnet + testnet',
      'x402 payment triggers',
      'Priority support',
      'Audit trails (90 days)',
      'Custom guardrail policies',
    ],
  },
]

const enterprise = [
  'Self-hosted deployment (any infra)',
  'Unlimited agents + memory',
  'Custom Soroban guardrail contracts',
  'SSO + RBAC + compliance exports',
  'Dedicated support + SLA',
  'Private Stellar network option',
  'Custom x402 payment routing',
  'Audit trails (unlimited)',
]

const faq = [
  {
    q: 'What counts as a "memory operation"?',
    a: 'Any read or write to the Qdrant memory layer — including context retrieval at the start of an agent run, memory updates after a task, and team memory syncs.',
  },
  {
    q: 'Do I need my own Stellar wallet?',
    a: 'No. Pragmabase provisions a custodial Stellar wallet for each agent automatically. For production deployments, you can connect your own wallet via the SDK.',
  },
  {
    q: 'What is x402?',
    a: 'x402 is an open HTTP-native payment protocol. Instead of API keys, agents use Stellar micropayments (via x402) to pay for resources. Think of it as pay-per-action infrastructure.',
  },
  {
    q: 'Is my data stored on-chain?',
    a: "No. Agent memory lives in Qdrant (self-hosted or managed). Stellar is used only for payment settlement and guardrail enforcement. Your data never touches the blockchain.",
  },
  {
    q: 'Can I self-host Pragmabase?',
    a: 'Yes — Enterprise plans include full self-hosted deployment with Docker + Kubernetes. You bring your own infra, Stellar node, and Qdrant instance.',
  },
]

export default function PricingPage() {
  return (
    <>
      <Nav />
      <main style={{ background: '#0A0A0F' }}>

        {/* Header */}
        <section className="relative py-20 overflow-hidden" style={{ borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
          <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{
            backgroundImage: 'linear-gradient(white 1px, transparent 1px), linear-gradient(90deg, white 1px, transparent 1px)',
            backgroundSize: '48px 48px',
          }} />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] pointer-events-none"
            style={{ background: 'radial-gradient(ellipse, rgba(124,58,237,0.1) 0%, transparent 65%)' }} />

          <div className="relative max-w-[1280px] mx-auto px-6 md:px-8 text-center">
            <div className="inline-block font-mono text-[10px] font-bold uppercase tracking-widest mb-5 px-2.5 py-1.5 rounded-full"
              style={{ background: 'rgba(168,255,62,0.1)', border: '1px solid rgba(168,255,62,0.2)', color: '#A8FF3E' }}>
              Simple Pricing
            </div>
            <h1 className="font-display font-bold text-white leading-tight mb-4" style={{ fontSize: 'clamp(32px,5vw,64px)' }}>
              Pay for what your<br />agents actually use.
            </h1>
            <p className="text-base leading-relaxed max-w-xl mx-auto" style={{ color: '#6B6B85' }}>
              Start free on testnet. Scale to mainnet when your agents are ready.
              No lock-in, no surprises — built on open protocols.
            </p>
          </div>
        </section>

        {/* Plans */}
        <section className="py-20" style={{ background: '#0F0F18' }}>
          <div className="max-w-[1280px] mx-auto px-6 md:px-8">
            <div className="grid md:grid-cols-3 gap-4 items-start">
              {plans.map((plan) => (
                <div key={plan.name} className="rounded-2xl p-7 relative"
                  style={{
                    background: plan.featured ? 'rgba(168,255,62,0.04)' : '#14141F',
                    border: `1px solid ${plan.border}`,
                    boxShadow: plan.featured ? '0 0 60px rgba(168,255,62,0.08)' : undefined,
                  }}>
                  {plan.featured && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                      <span className="font-mono text-[9px] font-bold uppercase tracking-widest px-3 py-1 rounded-full"
                        style={{ background: '#A8FF3E', color: '#0A0A0F' }}>
                        Most Popular
                      </span>
                    </div>
                  )}

                  <div className="mb-6">
                    <p className="font-mono text-[10px] font-bold uppercase tracking-widest mb-3" style={{ color: plan.color }}>{plan.name}</p>
                    <div className="flex items-baseline gap-1 mb-2">
                      <span className="font-display font-bold text-4xl" style={{ color: '#EDECF4' }}>{plan.price}</span>
                      {plan.period && <span className="text-sm font-mono" style={{ color: '#6B6B85' }}>{plan.period}</span>}
                    </div>
                    <p className="text-sm leading-relaxed" style={{ color: '#6B6B85' }}>{plan.desc}</p>
                  </div>

                  <a href={plan.ctaHref}
                    className="block w-full text-center font-bold text-sm px-5 py-3 rounded-xl mb-7 transition-all"
                    style={plan.featured
                      ? { background: '#A8FF3E', color: '#0A0A0F' }
                      : { background: plan.accent, color: plan.color, border: `1px solid ${plan.border}` }
                    }>
                    {plan.cta}
                  </a>

                  <div style={{ borderTop: '1px solid rgba(255,255,255,0.06)', paddingTop: '24px' }}>
                    <p className="font-mono text-[9px] font-bold uppercase tracking-widest mb-4" style={{ color: 'rgba(255,255,255,0.2)' }}>
                      Includes
                    </p>
                    <ul className="space-y-2.5">
                      {plan.features.map((f) => (
                        <li key={f} className="flex items-start gap-2.5 text-sm" style={{ color: '#9E9EB8' }}>
                          <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="shrink-0 mt-0.5">
                            <path d="M2.5 7l3.5 3.5 5.5-6" stroke={plan.color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                          {f}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Enterprise */}
        <section className="py-20" style={{ background: 'linear-gradient(145deg, #0D0520 0%, #1A0A3E 50%, #0D0520 100%)', borderTop: '1px solid rgba(255,255,255,0.06)' }}>
          <div className="max-w-[1280px] mx-auto px-6 md:px-8">
            <div className="rounded-2xl p-10 md:p-14 relative overflow-hidden"
              style={{ background: 'rgba(124,58,237,0.08)', border: '1px solid rgba(124,58,237,0.2)' }}>
              <div className="absolute top-0 right-0 w-[400px] h-[300px] pointer-events-none"
                style={{ background: 'radial-gradient(ellipse, rgba(168,255,62,0.06) 0%, transparent 65%)' }} />

              <div className="relative grid lg:grid-cols-2 gap-12 items-center">
                <div>
                  <div className="inline-block font-mono text-[10px] font-bold uppercase tracking-widest mb-5 px-2.5 py-1.5 rounded-full"
                    style={{ background: 'rgba(196,181,253,0.1)', border: '1px solid rgba(196,181,253,0.2)', color: '#C4B5FD' }}>
                    Enterprise
                  </div>
                  <h2 className="font-display font-bold text-white leading-tight mb-4" style={{ fontSize: 'clamp(24px,3.5vw,44px)' }}>
                    Your infra,<br />your rules.
                  </h2>
                  <p className="text-base leading-relaxed mb-8 max-w-md" style={{ color: 'rgba(196,181,253,0.6)' }}>
                    Self-hosted deployment, custom Soroban guardrails, SSO, compliance exports,
                    and a dedicated support channel. Built for teams that can&apos;t compromise on control.
                  </p>
                  <div className="flex gap-3">
                    <a href="/enterprise/contact" className="font-bold text-sm px-7 py-3.5 rounded-xl transition-all"
                      style={{ background: '#A8FF3E', color: '#0A0A0F', boxShadow: '0 8px 32px rgba(168,255,62,0.2)' }}>
                      Talk to sales →
                    </a>
                    <a href="/enterprise/self-hosted" className="font-medium text-sm px-7 py-3.5 rounded-xl text-white transition-all"
                      style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.12)' }}>
                      Self-hosted docs
                    </a>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  {enterprise.map((f) => (
                    <div key={f} className="flex items-start gap-2.5 text-sm" style={{ color: 'rgba(196,181,253,0.7)' }}>
                      <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="shrink-0 mt-0.5">
                        <path d="M2.5 7l3.5 3.5 5.5-6" stroke="#C4B5FD" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                      {f}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-20" style={{ background: '#0A0A0F', borderTop: '1px solid rgba(255,255,255,0.06)' }}>
          <div className="max-w-[800px] mx-auto px-6 md:px-8">
            <div className="text-center mb-14">
              <p className="font-mono text-[10px] font-bold uppercase tracking-widest mb-3" style={{ color: 'rgba(255,255,255,0.2)' }}>FAQ</p>
              <h2 className="font-display font-bold" style={{ fontSize: 'clamp(22px,3vw,36px)', color: '#EDECF4' }}>
                Common questions.
              </h2>
            </div>
            <div className="space-y-4">
              {faq.map((item) => (
                <div key={item.q} className="rounded-2xl p-6" style={{ background: '#14141F', border: '1px solid rgba(255,255,255,0.07)' }}>
                  <p className="font-bold text-sm mb-2" style={{ color: '#EDECF4' }}>{item.q}</p>
                  <p className="text-sm leading-relaxed" style={{ color: '#6B6B85' }}>{item.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
