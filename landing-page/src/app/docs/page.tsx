import { Nav } from '@/components/nav'
import { Footer } from '@/components/footer'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Docs — Pragmabase',
  description: 'Guides, API reference, and SDK documentation for the Pragmabase agentic infrastructure platform.',
}

const sections = [
  {
    color: '#A8FF3E',
    title: 'Getting Started',
    desc: 'Install the SDK, connect your Stellar wallet, and deploy your first autonomous agent in minutes.',
    links: ['Quickstart guide', 'SDK installation', 'Agent runtime setup', 'First transaction'],
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <path d="M11 2L2 6.5v9L11 20l9-4.5v-9L11 2z" stroke="#A8FF3E" strokeWidth="1.4" strokeLinejoin="round"/>
        <path d="M11 2v18M2 6.5l9 4.5 9-4.5" stroke="#A8FF3E" strokeWidth="1.4" strokeLinejoin="round" opacity="0.5"/>
      </svg>
    ),
  },
  {
    color: '#C4B5FD',
    title: 'Agent Runtime',
    desc: 'Deep dive into the execution environment, lifecycle hooks, guardrail policies, and sandboxed simulation.',
    links: ['Runtime lifecycle', 'Guardrail policies', 'Simulation mode', 'Production deploy'],
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <circle cx="11" cy="11" r="9" stroke="#C4B5FD" strokeWidth="1.4" opacity="0.4"/>
        <circle cx="11" cy="11" r="5.5" stroke="#C4B5FD" strokeWidth="1.4"/>
        <circle cx="11" cy="11" r="2" fill="#C4B5FD"/>
      </svg>
    ),
  },
  {
    color: '#818CF8',
    title: 'Memory Layer',
    desc: 'Persistent vector memory powered by Qdrant. Store, retrieve, and evolve agent knowledge across runs.',
    links: ['Memory architecture', 'Qdrant integration', 'Team memory', 'Memory policies'],
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <ellipse cx="11" cy="6" rx="8" ry="3" stroke="#818CF8" strokeWidth="1.4"/>
        <path d="M3 6v5c0 1.66 3.58 3 8 3s8-1.34 8-3V6" stroke="#818CF8" strokeWidth="1.4" opacity="0.6"/>
        <path d="M3 11v5c0 1.66 3.58 3 8 3s8-1.34 8-3v-5" stroke="#818CF8" strokeWidth="1.4" opacity="0.3"/>
      </svg>
    ),
  },
  {
    color: '#F59E0B',
    title: 'Payments (x402)',
    desc: 'x402 pay-per-action protocol on Stellar. Agents buy data, sell outputs, and run micro-economies.',
    links: ['x402 overview', 'Wallet setup', 'Trustlines & assets', 'Payment triggers'],
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <rect x="2" y="5" width="18" height="13" rx="2.5" stroke="#F59E0B" strokeWidth="1.4"/>
        <path d="M2 9h18" stroke="#F59E0B" strokeWidth="1.4" opacity="0.5"/>
        <circle cx="6.5" cy="14" r="1.5" fill="#F59E0B" opacity="0.7"/>
      </svg>
    ),
  },
  {
    color: '#FB923C',
    title: 'Reliability Lab',
    desc: 'Simulate failure scenarios before they have real consequences. Test, break, validate, then deploy.',
    links: ['Failure simulation', 'Hallucination testing', 'Explainability mode', 'Audit trails'],
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <path d="M11 2L2.5 19.5h17L11 2z" stroke="#FB923C" strokeWidth="1.4" strokeLinejoin="round"/>
        <path d="M11 9v5" stroke="#FB923C" strokeWidth="1.4" strokeLinecap="round"/>
        <circle cx="11" cy="16.5" r="1" fill="#FB923C"/>
      </svg>
    ),
  },
  {
    color: '#34D399',
    title: 'API Reference',
    desc: 'Complete REST API reference with request/response schemas, webhooks, and SDK code examples.',
    links: ['Authentication', 'Agents API', 'Memory API', 'Payments API'],
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <rect x="3" y="3" width="16" height="16" rx="2.5" stroke="#34D399" strokeWidth="1.4"/>
        <path d="M7 8h8M7 11h5M7 14h6" stroke="#34D399" strokeWidth="1.4" strokeLinecap="round" opacity="0.7"/>
      </svg>
    ),
  },
]

const codeExamples = [
  {
    label: 'Install',
    code: `npm install @pragmabase/sdk`,
  },
  {
    label: 'Initialize agent',
    code: `import { Pragmabase } from '@pragmabase/sdk'

const pb = new Pragmabase({
  apiKey: process.env.PRAGMABASE_KEY,
  network: 'testnet', // or 'mainnet'
})`,
  },
  {
    label: 'Deploy with memory + wallet',
    code: `const agent = await pb.agent.create({
  name: 'roku',
  memory: { enabled: true, team: 'research' },
  wallet: { budget: '10 XLM', guardrail: 'soroban' },
})

// agent.id → 0x4f2a...
console.log(await agent.run('Analyze market trends'))`,
  },
]

export default function DocsPage() {
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
          <div className="absolute top-0 left-1/4 w-[600px] h-[400px] pointer-events-none"
            style={{ background: 'radial-gradient(ellipse, rgba(124,58,237,0.12) 0%, transparent 65%)' }} />

          <div className="relative max-w-[1280px] mx-auto px-6 md:px-8">
            <div className="flex justify-between text-xs uppercase tracking-widest mb-12 pb-4 font-mono"
              style={{ color: 'rgba(255,255,255,0.18)', borderBottom: '1px solid rgba(255,255,255,0.07)' }}>
              <span>Documentation</span>
              <span>Pragmabase</span>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-block font-mono text-[10px] font-bold uppercase tracking-widest mb-5 px-2.5 py-1.5 rounded-full"
                  style={{ background: 'rgba(168,255,62,0.1)', border: '1px solid rgba(168,255,62,0.2)', color: '#A8FF3E' }}>
                  v0.9 — Public Beta
                </div>
                <h1 className="font-display font-bold text-white leading-tight mb-5" style={{ fontSize: 'clamp(32px,4.5vw,58px)' }}>
                  Build agents that<br />think, remember, and pay.
                </h1>
                <p className="text-base leading-relaxed mb-8 max-w-md" style={{ color: '#6B6B85' }}>
                  SDK guides, runtime docs, memory architecture, x402 payment flows, and the Reliability Lab.
                  Everything you need to deploy production-grade autonomous agents.
                </p>
                <div className="flex gap-3">
                  <a href="#quickstart" className="font-bold text-sm px-6 py-3 rounded-xl transition-all"
                    style={{ background: '#A8FF3E', color: '#0A0A0F' }}>
                    Quickstart →
                  </a>
                  <a href="#api" className="font-medium text-sm px-6 py-3 rounded-xl text-white transition-all"
                    style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.12)' }}>
                    API Reference
                  </a>
                </div>
              </div>

              {/* Code terminal */}
              <div className="rounded-2xl overflow-hidden" style={{
                background: '#0D0D16',
                border: '1px solid rgba(255,255,255,0.08)',
                boxShadow: '0 32px 80px rgba(0,0,0,0.5)',
              }}>
                <div className="flex items-center gap-1.5 px-4 py-3" style={{ borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
                  <span className="w-3 h-3 rounded-full" style={{ background: '#FF5F57' }} />
                  <span className="w-3 h-3 rounded-full" style={{ background: '#FEBC2E' }} />
                  <span className="w-3 h-3 rounded-full" style={{ background: '#28C840' }} />
                  <span className="ml-3 font-mono text-[10px]" style={{ color: 'rgba(255,255,255,0.2)' }}>pragmabase SDK</span>
                </div>
                <div className="p-5 space-y-5">
                  {codeExamples.map((ex) => (
                    <div key={ex.label}>
                      <p className="font-mono text-[9px] uppercase tracking-widest mb-2" style={{ color: 'rgba(255,255,255,0.2)' }}>
                        // {ex.label}
                      </p>
                      <pre className="font-mono text-xs leading-relaxed" style={{ color: '#A8FF3E' }}>
                        <code>{ex.code}</code>
                      </pre>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Doc sections grid */}
        <section className="py-20" style={{ background: '#0F0F18' }}>
          <div className="max-w-[1280px] mx-auto px-6 md:px-8">
            <div className="flex justify-between text-xs uppercase tracking-widest mb-12 pb-4 font-mono"
              style={{ color: 'rgba(255,255,255,0.18)', borderBottom: '1px solid rgba(255,255,255,0.07)' }}>
              <span>All sections</span>
              <span>6 modules</span>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {sections.map((s) => (
                <div key={s.title} className="rounded-2xl p-6 cursor-pointer group transition-all duration-300 hover:-translate-y-0.5"
                  style={{ background: '#14141F', border: `1px solid ${s.color}18` }}>
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-4"
                    style={{ background: s.color + '12' }}>
                    {s.icon}
                  </div>
                  <h3 className="font-display font-bold text-base mb-2" style={{ color: '#EDECF4' }}>{s.title}</h3>
                  <p className="text-xs leading-relaxed mb-4" style={{ color: '#6B6B85' }}>{s.desc}</p>
                  <ul className="space-y-1.5">
                    {s.links.map((link) => (
                      <li key={link}>
                        <a href="#" className="text-xs font-mono transition-colors hover:opacity-80" style={{ color: s.color }}>
                          → {link}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Architecture */}
        <section className="py-20" style={{ background: '#0A0A0F', borderTop: '1px solid rgba(255,255,255,0.06)' }}>
          <div className="max-w-[1280px] mx-auto px-6 md:px-8">
            <div className="flex justify-between text-xs uppercase tracking-widest mb-12 pb-4 font-mono"
              style={{ color: 'rgba(255,255,255,0.18)', borderBottom: '1px solid rgba(255,255,255,0.07)' }}>
              <span>Architecture</span>
            </div>
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="font-display font-bold leading-tight mb-5" style={{ fontSize: 'clamp(24px,3.5vw,40px)', color: '#EDECF4' }}>
                  How Pragmabase fits<br />
                  <span style={{ color: '#C4B5FD' }}>into your stack.</span>
                </h2>
                <p className="text-sm leading-relaxed mb-8" style={{ color: '#6B6B85' }}>
                  Pragmabase sits between your agent logic and the real world. It wraps each agent run in a
                  sandboxed environment, manages wallet state, routes memory reads/writes to Qdrant, and
                  enforces Soroban-based guardrails before any funds move.
                </p>
                <div className="space-y-3">
                  {[
                    { step: '01', color: '#A8FF3E', label: 'Your agent logic calls the Pragmabase SDK' },
                    { step: '02', color: '#C4B5FD', label: 'Runtime injects memory context from Qdrant' },
                    { step: '03', color: '#818CF8', label: 'Soroban guardrail validates the action budget' },
                    { step: '04', color: '#F59E0B', label: 'x402 payment executes on Stellar network' },
                    { step: '05', color: '#34D399', label: 'Memory updated, audit trail recorded' },
                  ].map((item) => (
                    <div key={item.step} className="flex items-center gap-4">
                      <span className="font-mono text-[10px] font-bold shrink-0 w-6" style={{ color: item.color }}>{item.step}</span>
                      <span className="text-sm" style={{ color: '#9E9EB8' }}>{item.label}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-2xl p-8" style={{ background: '#14141F', border: '1px solid rgba(255,255,255,0.07)' }}>
                <ArchitectureDiagram />
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}

function ArchitectureDiagram() {
  const nodes = [
    { x: 160, y: 40,  label: 'Your Agent', sub: 'pb.agent.run()',  color: '#EDECF4' },
    { x: 160, y: 110, label: 'SDK Runtime', sub: '@pragmabase/sdk', color: '#C4B5FD' },
    { x: 60,  y: 200, label: 'Memory',      sub: 'Qdrant vectors',  color: '#818CF8' },
    { x: 160, y: 200, label: 'Guardrail',   sub: 'Soroban policy',  color: '#A8FF3E' },
    { x: 260, y: 200, label: 'Payment',     sub: 'x402 / Stellar',  color: '#F59E0B' },
    { x: 160, y: 290, label: 'Audit Trail', sub: 'Immutable log',   color: '#34D399' },
  ]
  const edges: [number, number, number, number][] = [
    [160, 58, 160, 100],
    [160, 122, 60, 188],
    [160, 122, 160, 188],
    [160, 122, 260, 188],
    [60, 214, 160, 278],
    [160, 214, 160, 278],
    [260, 214, 160, 278],
  ]
  return (
    <svg viewBox="0 0 320 330" className="w-full" aria-hidden="true">
      {edges.map(([x1, y1, x2, y2], i) => (
        <line key={i} x1={x1} y1={y1} x2={x2} y2={y2}
          stroke="rgba(255,255,255,0.07)" strokeWidth="1.5" strokeDasharray="4 3" />
      ))}
      {nodes.map((node) => (
        <g key={node.label}>
          <rect x={node.x - 52} y={node.y - 20} width="104" height="40" rx="8"
            fill="#1A1A28" stroke={node.color + '40'} strokeWidth="1.2" />
          <text x={node.x} y={node.y - 5} textAnchor="middle" fill={node.color} fontSize="9" fontFamily="DM Sans, sans-serif" fontWeight="600">
            {node.label}
          </text>
          <text x={node.x} y={node.y + 8} textAnchor="middle" fill="rgba(255,255,255,0.25)" fontSize="7.5" fontFamily="JetBrains Mono, monospace">
            {node.sub}
          </text>
        </g>
      ))}
    </svg>
  )
}
