import { Nav } from '@/components/nav'
import { Footer } from '@/components/footer'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Enterprise — Pragmabase',
  description: 'Self-hosted agent infrastructure with custom guardrails, SSO, audit trails, and multi-agent team support.',
}

const pillars = [
  {
    color: '#C4B5FD',
    title: 'Your infrastructure, your control',
    desc: 'Deploy Pragmabase on your own cloud — AWS, GCP, Azure, or bare metal. Docker and Kubernetes supported. Zero data leaves your perimeter.',
    href: '/enterprise/self-hosted',
    cta: 'Self-hosted docs →',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <rect x="2" y="7" width="20" height="14" rx="2.5" stroke="#C4B5FD" strokeWidth="1.4"/>
        <path d="M8 7V6a4 4 0 018 0v1" stroke="#C4B5FD" strokeWidth="1.4"/>
        <circle cx="12" cy="14" r="2" stroke="#C4B5FD" strokeWidth="1.4"/>
        <path d="M12 16v2" stroke="#C4B5FD" strokeWidth="1.4" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    color: '#818CF8',
    title: 'Multi-agent teams',
    desc: 'Shared memory namespaces and pooled budgets across agent teams. Agents collaborate, remember together, and coordinate spending within defined policies.',
    href: '/enterprise/teams',
    cta: 'Team architecture →',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <circle cx="6" cy="8" r="2.5" stroke="#818CF8" strokeWidth="1.4"/>
        <circle cx="18" cy="8" r="2.5" stroke="#818CF8" strokeWidth="1.4"/>
        <circle cx="12" cy="5" r="2.5" stroke="#818CF8" strokeWidth="1.4"/>
        <path d="M2 19c0-3 1.79-4 4-4m12 4c0-3-1.79-4-4-4m-6 4c0-3 1.79-4 4-4s4 1 4 4" stroke="#818CF8" strokeWidth="1.4" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    color: '#A8FF3E',
    title: 'Custom Soroban guardrails',
    desc: 'Encode your compliance requirements as Soroban smart contracts. Spending caps, counterparty whitelists, velocity limits — enforced at the protocol level.',
    href: '/enterprise/self-hosted',
    cta: 'Guardrail policies →',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M12 2L4 6v7c0 4.41 3.42 8.54 8 9.54 4.58-1 8-5.13 8-9.54V6L12 2z" stroke="#A8FF3E" strokeWidth="1.4" strokeLinejoin="round"/>
        <path d="M8.5 12l2.5 2.5 4.5-5" stroke="#A8FF3E" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    color: '#F59E0B',
    title: 'SSO + compliance exports',
    desc: 'SAML 2.0, OIDC, and SCIM provisioning. Full audit trails with immutable logs. Export to your SIEM, compliance tooling, or data warehouse.',
    href: '/enterprise/contact',
    cta: 'Talk to sales →',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <rect x="3" y="4" width="18" height="16" rx="2.5" stroke="#F59E0B" strokeWidth="1.4"/>
        <path d="M3 9h18" stroke="#F59E0B" strokeWidth="1.4" opacity="0.5"/>
        <path d="M8 14h8M8 17h5" stroke="#F59E0B" strokeWidth="1.4" strokeLinecap="round" opacity="0.7"/>
      </svg>
    ),
  },
  {
    color: '#34D399',
    title: 'Private Stellar network',
    desc: 'Run a private Stellar validator within your perimeter. Full x402 payment infrastructure with no external network dependency.',
    href: '/enterprise/contact',
    cta: 'Private network →',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="9" stroke="#34D399" strokeWidth="1.4" opacity="0.4"/>
        <ellipse cx="12" cy="12" rx="4" ry="9" stroke="#34D399" strokeWidth="1.4"/>
        <path d="M3 12h18" stroke="#34D399" strokeWidth="1.4" opacity="0.5"/>
      </svg>
    ),
  },
  {
    color: '#FB923C',
    title: 'Dedicated support + SLA',
    desc: 'Named support engineer, 99.9% SLA, dedicated Slack channel, and quarterly architecture reviews. We\'re on-call when your agents are.',
    href: '/enterprise/contact',
    cta: 'Contact sales →',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" stroke="#FB923C" strokeWidth="1.4" strokeLinejoin="round"/>
      </svg>
    ),
  },
]

const logos = ['FinAgent Labs', 'AgentStack', 'Korvus Infrastructure', 'NovaTrade Systems', 'Apex Protocol', 'Meridian AI']

const comparison = [
  { feature: 'Active agents',         sandbox: '1',         builder: '5',           team: '25',         enterprise: 'Unlimited' },
  { feature: 'Memory operations',     sandbox: '100/day',   builder: '50K/mo',      team: 'Unlimited',  enterprise: 'Unlimited' },
  { feature: 'Stellar network',       sandbox: 'Testnet',   builder: 'Main+Test',   team: 'Main+Test',  enterprise: 'Any + Private' },
  { feature: 'Reliability scenarios', sandbox: '5',         builder: 'Unlimited',   team: 'Unlimited',  enterprise: 'Custom' },
  { feature: 'Soroban guardrails',    sandbox: 'Standard',  builder: 'Standard',    team: 'Standard',   enterprise: 'Custom contracts' },
  { feature: 'Team memory',          sandbox: '—',         builder: '—',           team: '✓',          enterprise: '✓' },
  { feature: 'Self-hosted',           sandbox: '—',         builder: '—',           team: '—',          enterprise: '✓' },
  { feature: 'SSO + SAML',           sandbox: '—',         builder: '—',           team: '—',          enterprise: '✓' },
  { feature: 'SLA',                   sandbox: '—',         builder: 'Email',       team: 'Priority',   enterprise: '99.9% + dedicated' },
]

export default function EnterprisePage() {
  return (
    <>
      <Nav />
      <main style={{ background: '#0A0A0F' }}>

        {/* Hero */}
        <section className="relative py-24 overflow-hidden" style={{ borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
          <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{
            backgroundImage: 'linear-gradient(white 1px, transparent 1px), linear-gradient(90deg, white 1px, transparent 1px)',
            backgroundSize: '48px 48px',
          }} />
          <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[800px] h-[600px] pointer-events-none"
            style={{ background: 'radial-gradient(ellipse, rgba(124,58,237,0.12) 0%, transparent 65%)' }} />

          <div className="relative max-w-[1280px] mx-auto px-6 md:px-8">
            <div className="flex justify-between text-xs uppercase tracking-widest mb-12 pb-4 font-mono"
              style={{ color: 'rgba(255,255,255,0.18)', borderBottom: '1px solid rgba(255,255,255,0.07)' }}>
              <span>Enterprise</span>
              <span>Pragmabase</span>
            </div>

            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <div className="inline-block font-mono text-[10px] font-bold uppercase tracking-widest mb-5 px-2.5 py-1.5 rounded-full"
                  style={{ background: 'rgba(196,181,253,0.1)', border: '1px solid rgba(196,181,253,0.2)', color: '#C4B5FD' }}>
                  Enterprise Grade
                </div>
                <h1 className="font-display font-bold text-white leading-tight mb-5"
                  style={{ fontSize: 'clamp(36px,5.5vw,72px)', letterSpacing: '-0.02em' }}>
                  Agentic infra built<br />for production<br />
                  <span style={{ color: '#C4B5FD' }}>at scale.</span>
                </h1>
                <p className="text-lg leading-relaxed mb-10 max-w-lg" style={{ color: '#6B6B85' }}>
                  Self-hosted deployment, custom Soroban guardrails, multi-agent team memory, SSO,
                  and dedicated support. Built for teams that can&apos;t compromise on security or control.
                </p>
                <div className="flex flex-wrap gap-3">
                  <a href="/enterprise/contact"
                    className="inline-flex items-center gap-2 font-bold text-base px-8 py-4 rounded-xl transition-all"
                    style={{ background: '#A8FF3E', color: '#0A0A0F', boxShadow: '0 12px 40px rgba(168,255,62,0.2)' }}>
                    Talk to sales
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <path d="M3 8h10M8 3l5 5-5 5" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </a>
                  <a href="/enterprise/self-hosted"
                    className="inline-flex items-center gap-2 font-medium text-base px-8 py-4 rounded-xl text-white transition-all"
                    style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.12)' }}>
                    Self-hosted docs
                  </a>
                </div>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 gap-4">
                {[
                  { val: 'Unlimited', label: 'Active agents', color: '#C4B5FD' },
                  { val: 'Self-hosted', label: 'Deployment option', color: '#A8FF3E' },
                  { val: '99.9%', label: 'Uptime SLA', color: '#818CF8' },
                  { val: 'Custom', label: 'Soroban guardrails', color: '#F59E0B' },
                ].map((s) => (
                  <div key={s.label} className="rounded-2xl p-6" style={{ background: '#14141F', border: '1px solid rgba(255,255,255,0.07)' }}>
                    <div className="font-display font-bold text-2xl mb-1" style={{ color: s.color }}>{s.val}</div>
                    <div className="text-xs font-mono" style={{ color: '#6B6B85' }}>{s.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Trusted by */}
        <section className="py-14" style={{ background: '#0F0F18', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
          <div className="max-w-[1280px] mx-auto px-6 md:px-8">
            <p className="text-center font-mono text-[10px] uppercase tracking-widest mb-8" style={{ color: 'rgba(255,255,255,0.15)' }}>
              Trusted by teams building agent-native products
            </p>
            <div className="flex flex-wrap items-center justify-center gap-8">
              {logos.map((logo) => (
                <span key={logo} className="font-mono text-sm font-bold" style={{ color: 'rgba(255,255,255,0.12)' }}>
                  {logo}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* Feature pillars */}
        <section className="py-20" style={{ background: '#0A0A0F' }}>
          <div className="max-w-[1280px] mx-auto px-6 md:px-8">
            <div className="flex justify-between text-xs uppercase tracking-widest mb-12 pb-4 font-mono"
              style={{ color: 'rgba(255,255,255,0.18)', borderBottom: '1px solid rgba(255,255,255,0.07)' }}>
              <span>Enterprise capabilities</span>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {pillars.map((p) => (
                <div key={p.title} className="rounded-2xl p-7 flex flex-col group transition-all duration-300 hover:-translate-y-0.5"
                  style={{ background: '#14141F', border: `1px solid ${p.color}18` }}>
                  <div className="w-11 h-11 rounded-xl flex items-center justify-center mb-5"
                    style={{ background: p.color + '12' }}>
                    {p.icon}
                  </div>
                  <h3 className="font-display font-bold text-base mb-2 leading-snug" style={{ color: '#EDECF4' }}>{p.title}</h3>
                  <p className="text-sm leading-relaxed flex-1 mb-5" style={{ color: '#6B6B85' }}>{p.desc}</p>
                  <a href={p.href} className="text-xs font-mono font-bold transition-colors hover:opacity-70" style={{ color: p.color }}>
                    {p.cta}
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Comparison table */}
        <section className="py-20" style={{ background: '#0F0F18', borderTop: '1px solid rgba(255,255,255,0.06)' }}>
          <div className="max-w-[1280px] mx-auto px-6 md:px-8">
            <div className="flex justify-between text-xs uppercase tracking-widest mb-12 pb-4 font-mono"
              style={{ color: 'rgba(255,255,255,0.18)', borderBottom: '1px solid rgba(255,255,255,0.07)' }}>
              <span>Plan comparison</span>
            </div>
            <h2 className="font-display font-bold leading-tight mb-10" style={{ fontSize: 'clamp(22px,3.5vw,36px)', color: '#EDECF4' }}>
              Find the right plan.
            </h2>

            <div className="rounded-2xl overflow-hidden" style={{ border: '1px solid rgba(255,255,255,0.07)' }}>
              {/* Header */}
              <div className="grid grid-cols-5 text-xs font-mono font-bold uppercase tracking-widest py-4 px-6"
                style={{ background: '#14141F', borderBottom: '1px solid rgba(255,255,255,0.07)', color: 'rgba(255,255,255,0.2)' }}>
                <div>Feature</div>
                <div className="text-center">Sandbox</div>
                <div className="text-center">Builder</div>
                <div className="text-center">Team</div>
                <div className="text-center" style={{ color: '#C4B5FD' }}>Enterprise</div>
              </div>
              {comparison.map((row, i) => (
                <div key={row.feature} className="grid grid-cols-5 py-4 px-6 text-sm"
                  style={{ borderBottom: i < comparison.length - 1 ? '1px solid rgba(255,255,255,0.04)' : undefined, background: i % 2 === 0 ? 'transparent' : 'rgba(255,255,255,0.01)' }}>
                  <div style={{ color: '#9E9EB8' }}>{row.feature}</div>
                  <div className="text-center font-mono text-xs" style={{ color: 'rgba(255,255,255,0.3)' }}>{row.sandbox}</div>
                  <div className="text-center font-mono text-xs" style={{ color: 'rgba(255,255,255,0.45)' }}>{row.builder}</div>
                  <div className="text-center font-mono text-xs" style={{ color: 'rgba(255,255,255,0.55)' }}>{row.team}</div>
                  <div className="text-center font-mono text-xs font-bold" style={{ color: '#C4B5FD' }}>{row.enterprise}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-24 relative overflow-hidden"
          style={{ background: 'linear-gradient(145deg, #0D0520 0%, #1A0A3E 40%, #0D0520 100%)', borderTop: '1px solid rgba(255,255,255,0.06)' }}>
          <div className="absolute inset-0 pointer-events-none"
            style={{ background: 'radial-gradient(ellipse at 50% 50%, rgba(124,58,237,0.25) 0%, transparent 65%)' }} />
          <div className="relative max-w-[800px] mx-auto px-6 md:px-8 text-center">
            <h2 className="font-display font-bold text-white leading-tight mb-4" style={{ fontSize: 'clamp(28px,4.5vw,52px)' }}>
              Ready to deploy at scale?
            </h2>
            <p className="text-base leading-relaxed mb-10" style={{ color: 'rgba(196,181,253,0.6)' }}>
              Talk to our team. We&apos;ll scope your deployment, advise on Soroban guardrail design,
              and get you running in your own infrastructure.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <a href="/enterprise/contact"
                className="font-bold text-base px-8 py-4 rounded-xl transition-all"
                style={{ background: '#A8FF3E', color: '#0A0A0F', boxShadow: '0 12px 40px rgba(168,255,62,0.2)' }}>
                Talk to sales →
              </a>
              <a href="/enterprise/teams"
                className="font-medium text-base px-8 py-4 rounded-xl text-white transition-all"
                style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.12)' }}>
                Explore team features
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
