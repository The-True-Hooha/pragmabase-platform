import { Nav } from '@/components/nav'
import { Footer } from '@/components/footer'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Self-Hosted Deployment — Pragmabase Enterprise',
  description: 'Deploy Pragmabase on your own infrastructure. Full control, zero data egress, Docker and Kubernetes supported.',
}

const deployOptions = [
  {
    color: '#A8FF3E',
    title: 'Docker Compose',
    desc: 'Single-server or small cluster. Quickest path to a running deployment. Ideal for evaluation and staging.',
    badge: 'Quickest setup',
    steps: [
      'docker pull pragmabase/platform:latest',
      'Configure .env (Stellar node, Qdrant, Postgres)',
      'docker compose up -d',
      'pb admin init --domain your.host',
    ],
  },
  {
    color: '#C4B5FD',
    title: 'Kubernetes (Helm)',
    desc: 'Production-grade deployment with horizontal scaling, rolling updates, and native secret management.',
    badge: 'Recommended',
    steps: [
      'helm repo add pragmabase https://charts.pragmabase.io',
      'helm install pb pragmabase/platform \\',
      '  --set stellar.network=mainnet \\',
      '  --set qdrant.endpoint=qdrant.svc',
    ],
  },
  {
    color: '#818CF8',
    title: 'Bare Metal',
    desc: 'Full control over the host layer. Suitable for air-gapped environments and maximum-security deployments.',
    badge: 'Max isolation',
    steps: [
      'Download the platform binary bundle',
      'Run pb-server with systemd / supervisord',
      'Configure private Stellar validator (optional)',
      'Point to your Qdrant + Postgres instances',
    ],
  },
]

const components = [
  { name: 'PB Platform', desc: 'Core agent runtime, API layer, wallet manager', color: '#C4B5FD' },
  { name: 'Stellar Node', desc: 'Payment settlement (managed or private validator)', color: '#A8FF3E' },
  { name: 'Qdrant', desc: 'Vector memory store — self-hosted or managed', color: '#818CF8' },
  { name: 'PostgreSQL', desc: 'Agent metadata, audit logs, policy store', color: '#F59E0B' },
  { name: 'Soroban RPC', desc: 'Smart contract guardrail execution layer', color: '#34D399' },
  { name: 'Identity Provider', desc: 'SAML / OIDC — your existing IdP, plugged in', color: '#FB923C' },
]

export default function SelfHostedPage() {
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
          <div className="absolute top-0 left-1/3 w-[600px] h-[500px] pointer-events-none"
            style={{ background: 'radial-gradient(ellipse, rgba(124,58,237,0.1) 0%, transparent 65%)' }} />

          <div className="relative max-w-[1280px] mx-auto px-6 md:px-8">
            <div className="flex justify-between text-xs uppercase tracking-widest mb-12 pb-4 font-mono"
              style={{ color: 'rgba(255,255,255,0.18)', borderBottom: '1px solid rgba(255,255,255,0.07)' }}>
              <a href="/enterprise" style={{ color: 'rgba(255,255,255,0.18)' }} className="hover:text-white/40 transition-colors">← Enterprise</a>
              <span>Self-Hosted</span>
            </div>

            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <div className="inline-block font-mono text-[10px] font-bold uppercase tracking-widest mb-5 px-2.5 py-1.5 rounded-full"
                  style={{ background: 'rgba(196,181,253,0.1)', border: '1px solid rgba(196,181,253,0.2)', color: '#C4B5FD' }}>
                  Your Infrastructure
                </div>
                <h1 className="font-display font-bold text-white leading-tight mb-5"
                  style={{ fontSize: 'clamp(32px,5vw,64px)', letterSpacing: '-0.02em' }}>
                  Deploy on your terms.<br />
                  <span style={{ color: '#C4B5FD' }}>Zero data egress.</span>
                </h1>
                <p className="text-lg leading-relaxed mb-8 max-w-lg" style={{ color: '#6B6B85' }}>
                  Run the full Pragmabase platform — agent runtime, Qdrant memory, x402 payments,
                  Soroban guardrails — entirely within your perimeter. Your cloud, your Stellar node,
                  your compliance.
                </p>
                <div className="flex gap-3">
                  <a href="/enterprise/contact"
                    className="font-bold text-sm px-6 py-3.5 rounded-xl transition-all"
                    style={{ background: '#A8FF3E', color: '#0A0A0F' }}>
                    Get deployment kit →
                  </a>
                  <a href="/docs"
                    className="font-medium text-sm px-6 py-3.5 rounded-xl text-white transition-all"
                    style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.12)' }}>
                    View docs
                  </a>
                </div>
              </div>

              {/* Architecture mini-diagram */}
              <div className="hidden lg:block rounded-2xl p-8"
                style={{ background: '#0D0D16', border: '1px solid rgba(255,255,255,0.07)', boxShadow: '0 32px 80px rgba(0,0,0,0.4)' }}>
                <p className="font-mono text-[9px] uppercase tracking-widest mb-6" style={{ color: 'rgba(255,255,255,0.2)' }}>
                  // your-cluster.internal
                </p>
                <div className="space-y-2">
                  {[
                    { label: 'pb-runtime', color: '#C4B5FD', indent: 0 },
                    { label: '├─ stellar-node (private)', color: '#A8FF3E', indent: 1 },
                    { label: '├─ qdrant (vector store)', color: '#818CF8', indent: 1 },
                    { label: '├─ postgres (audit + meta)', color: '#F59E0B', indent: 1 },
                    { label: '└─ soroban-rpc', color: '#34D399', indent: 1 },
                    { label: 'identity-provider (SAML)', color: '#FB923C', indent: 0 },
                  ].map((item, i) => (
                    <div key={i} className="font-mono text-xs flex items-center gap-2"
                      style={{ paddingLeft: item.indent * 16, color: item.color }}>
                      <span className="w-1.5 h-1.5 rounded-full shrink-0" style={{ background: item.color }} />
                      {item.label}
                    </div>
                  ))}
                </div>
                <div className="mt-6 pt-5 flex items-center gap-2 font-mono text-[10px]"
                  style={{ borderTop: '1px solid rgba(255,255,255,0.06)', color: 'rgba(255,255,255,0.2)' }}>
                  <span className="w-1.5 h-1.5 rounded-full" style={{ background: '#A8FF3E' }} />
                  All traffic stays within your perimeter
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Deployment options */}
        <section className="py-20" style={{ background: '#0F0F18' }}>
          <div className="max-w-[1280px] mx-auto px-6 md:px-8">
            <div className="flex justify-between text-xs uppercase tracking-widest mb-12 pb-4 font-mono"
              style={{ color: 'rgba(255,255,255,0.18)', borderBottom: '1px solid rgba(255,255,255,0.07)' }}>
              <span>Deployment options</span>
              <span>3 paths</span>
            </div>
            <div className="grid md:grid-cols-3 gap-4">
              {deployOptions.map((opt) => (
                <div key={opt.title} className="rounded-2xl p-7 flex flex-col"
                  style={{ background: '#14141F', border: `1px solid ${opt.color}20` }}>
                  <div className="flex items-start justify-between mb-5">
                    <h3 className="font-display font-bold text-base" style={{ color: '#EDECF4' }}>{opt.title}</h3>
                    <span className="font-mono text-[9px] font-bold uppercase tracking-widest px-2 py-1 rounded-full shrink-0 ml-2"
                      style={{ background: opt.color + '15', color: opt.color, border: `1px solid ${opt.color}30` }}>
                      {opt.badge}
                    </span>
                  </div>
                  <p className="text-sm leading-relaxed mb-6 flex-1" style={{ color: '#6B6B85' }}>{opt.desc}</p>
                  <div className="rounded-xl overflow-hidden" style={{ background: '#060609', border: '1px solid rgba(255,255,255,0.06)' }}>
                    <div className="px-3 py-2" style={{ borderBottom: '1px solid rgba(255,255,255,0.04)' }}>
                      <span className="font-mono text-[9px]" style={{ color: 'rgba(255,255,255,0.15)' }}>terminal</span>
                    </div>
                    <div className="p-3 space-y-1">
                      {opt.steps.map((step, i) => (
                        <div key={i} className="font-mono text-[11px] leading-relaxed" style={{ color: opt.color + 'CC' }}>
                          {step}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Components */}
        <section className="py-20" style={{ background: '#0A0A0F', borderTop: '1px solid rgba(255,255,255,0.06)' }}>
          <div className="max-w-[1280px] mx-auto px-6 md:px-8">
            <div className="flex justify-between text-xs uppercase tracking-widest mb-12 pb-4 font-mono"
              style={{ color: 'rgba(255,255,255,0.18)', borderBottom: '1px solid rgba(255,255,255,0.07)' }}>
              <span>Stack components</span>
            </div>
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="font-display font-bold leading-tight mb-5"
                  style={{ fontSize: 'clamp(24px,3.5vw,40px)', color: '#EDECF4' }}>
                  Every component you<br />
                  <span style={{ color: '#A8FF3E' }}>own and control.</span>
                </h2>
                <p className="text-sm leading-relaxed" style={{ color: '#6B6B85' }}>
                  Pragmabase is fully modular. Bring your existing Qdrant, Postgres, and identity provider.
                  Run a managed Stellar node or connect your own private validator. Every layer is swappable.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-3">
                {components.map((c) => (
                  <div key={c.name} className="rounded-xl p-4"
                    style={{ background: '#14141F', border: `1px solid ${c.color}15` }}>
                    <div className="flex items-center gap-2 mb-1.5">
                      <span className="w-2 h-2 rounded-full" style={{ background: c.color }} />
                      <span className="font-mono text-xs font-bold" style={{ color: c.color }}>{c.name}</span>
                    </div>
                    <p className="text-xs leading-relaxed" style={{ color: '#6B6B85' }}>{c.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Requirements */}
        <section className="py-20" style={{ background: '#0F0F18', borderTop: '1px solid rgba(255,255,255,0.06)' }}>
          <div className="max-w-[1280px] mx-auto px-6 md:px-8">
            <div className="flex justify-between text-xs uppercase tracking-widest mb-12 pb-4 font-mono"
              style={{ color: 'rgba(255,255,255,0.18)', borderBottom: '1px solid rgba(255,255,255,0.07)' }}>
              <span>Minimum requirements</span>
            </div>
            <div className="grid md:grid-cols-3 gap-4">
              {[
                { label: 'Starter (Docker)', specs: ['4 vCPU / 16 GB RAM', '100 GB SSD', 'Ubuntu 22.04+', '5 agents max'] },
                { label: 'Production (K8s)', specs: ['16+ vCPU / 64 GB RAM', '500 GB SSD (Qdrant)', 'Kubernetes 1.27+', '25+ agents'] },
                { label: 'Air-gapped', specs: ['Private Stellar validator', 'No external DNS required', 'HSM support (optional)', 'FIPS-compliant builds'] },
              ].map((tier) => (
                <div key={tier.label} className="rounded-2xl p-6" style={{ background: '#14141F', border: '1px solid rgba(255,255,255,0.07)' }}>
                  <p className="font-mono text-[10px] font-bold uppercase tracking-widest mb-4" style={{ color: 'rgba(255,255,255,0.25)' }}>{tier.label}</p>
                  <ul className="space-y-2">
                    {tier.specs.map((s) => (
                      <li key={s} className="flex items-center gap-2 text-sm" style={{ color: '#9E9EB8' }}>
                        <span className="w-1 h-1 rounded-full shrink-0" style={{ background: '#C4B5FD' }} />
                        {s}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20" style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}>
          <div className="max-w-[700px] mx-auto px-6 md:px-8 text-center">
            <h2 className="font-display font-bold mb-4" style={{ fontSize: 'clamp(24px,4vw,44px)', color: '#EDECF4' }}>
              Get your deployment kit.
            </h2>
            <p className="text-base leading-relaxed mb-8" style={{ color: '#6B6B85' }}>
              Enterprise customers get a pre-configured Helm chart, Terraform modules, architecture review session,
              and a dedicated support engineer for the first 30 days.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3">
              <a href="/enterprise/contact"
                className="font-bold text-base px-8 py-4 rounded-xl transition-all"
                style={{ background: '#A8FF3E', color: '#0A0A0F', boxShadow: '0 8px 32px rgba(168,255,62,0.2)' }}>
                Talk to the team →
              </a>
              <a href="/docs"
                className="font-medium text-base px-8 py-4 rounded-xl text-white transition-all"
                style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.12)' }}>
                Open documentation
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
