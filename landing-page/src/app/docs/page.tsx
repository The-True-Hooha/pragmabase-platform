import { Nav } from '@/components/nav'
import { Footer } from '@/components/footer'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Docs — Aegis',
  description: 'Guides, API reference, and SDK documentation for Aegis eval infrastructure.',
}

const sections = [
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <rect x="3" y="3" width="8" height="8" rx="2" stroke="#2563EB" strokeWidth="1.5"/>
        <rect x="13" y="3" width="8" height="8" rx="2" stroke="#2563EB" strokeWidth="1.5" opacity="0.4"/>
        <rect x="3" y="13" width="8" height="8" rx="2" stroke="#2563EB" strokeWidth="1.5" opacity="0.4"/>
        <rect x="13" y="13" width="8" height="8" rx="2" stroke="#2563EB" strokeWidth="1.5" opacity="0.7"/>
      </svg>
    ),
    title: 'Getting Started',
    desc: 'Install the SDK, connect your repo, and run your first eval in under 5 minutes.',
    links: ['Quickstart', 'Installation', 'First eval run', 'CI integration'],
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M12 2L2 7l10 5 10-5-10-5z" stroke="#2563EB" strokeWidth="1.5" strokeLinejoin="round"/>
        <path d="M2 17l10 5 10-5" stroke="#2563EB" strokeWidth="1.5" strokeLinejoin="round" opacity="0.5"/>
        <path d="M2 12l10 5 10-5" stroke="#2563EB" strokeWidth="1.5" strokeLinejoin="round" opacity="0.75"/>
      </svg>
    ),
    title: 'Eval Stack',
    desc: 'Deep dives into sandbox isolation, LLM proxy, eval engine, telemetry, and transcripts.',
    links: ['Sandbox isolation', 'LLM proxy setup', 'Custom scorers', 'Transcript replay'],
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="9" stroke="#2563EB" strokeWidth="1.5" opacity="0.4"/>
        <path d="M12 8v4l3 3" stroke="#2563EB" strokeWidth="1.5" strokeLinecap="round"/>
        <circle cx="12" cy="12" r="2" fill="#2563EB"/>
      </svg>
    ),
    title: 'CI Integration',
    desc: 'Connect Aegis to GitHub Actions, GitLab CI, and any other CI provider.',
    links: ['GitHub Actions', 'GitLab CI', 'PR blocking rules', 'Status checks'],
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" stroke="#2563EB" strokeWidth="1.5" strokeLinejoin="round"/>
        <polyline points="14 2 14 8 20 8" stroke="#2563EB" strokeWidth="1.5" strokeLinejoin="round" opacity="0.5"/>
        <line x1="8" y1="13" x2="16" y2="13" stroke="#2563EB" strokeWidth="1.5" opacity="0.6"/>
        <line x1="8" y1="17" x2="12" y2="17" stroke="#2563EB" strokeWidth="1.5" opacity="0.4"/>
      </svg>
    ),
    title: 'API Reference',
    desc: 'Full REST API reference with request/response schemas and code examples.',
    links: ['Authentication', 'Eval runs', 'Suites', 'Webhooks'],
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <polygon points="12,2 22,8.5 22,15.5 12,22 2,15.5 2,8.5" stroke="#2563EB" strokeWidth="1.5" opacity="0.4"/>
        <polygon points="12,6 18,9.5 18,14.5 12,18 6,14.5 6,9.5" stroke="#2563EB" strokeWidth="1.5" opacity="0.7"/>
        <circle cx="12" cy="12" r="2.5" fill="#2563EB"/>
      </svg>
    ),
    title: 'SDK Reference',
    desc: 'TypeScript and Python SDK documentation, types, and advanced usage patterns.',
    links: ['TypeScript SDK', 'Python SDK', 'Aegis CLI', 'Configuration'],
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" stroke="#2563EB" strokeWidth="1.5" strokeLinejoin="round" opacity="0.5"/>
        <path d="M9 12l2 2 4-4" stroke="#2563EB" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: 'Self-hosting',
    desc: 'Deploy Aegis on your own infrastructure — Docker, Kubernetes, bare metal.',
    links: ['Docker setup', 'Kubernetes helm', 'Environment vars', 'Upgrading'],
  },
]

const codeExamples = [
  {
    label: 'Install',
    code: 'npm install @aegis/sdk\n# or\npip install aegis-sdk',
  },
  {
    label: 'Initialize',
    code: `import { Aegis } from '@aegis/sdk'

const aegis = new Aegis({
  apiKey: process.env.AEGIS_API_KEY,
})`,
  },
  {
    label: 'Run evals',
    code: `const result = await aegis.eval.run({
  suite: 'production-v2',
  agent: myAgentFn,
  sandbox: true,
})

console.log(result.passRate) // 97.4`,
  },
]

export default function DocsPage() {
  return (
    <>
      <Nav />
      <main>
        {/* Header */}
        <section
          className="relative py-20 overflow-hidden"
          style={{ background: 'linear-gradient(160deg, #0F1F5C 0%, #1740A6 45%, #2563EB 100%)' }}
        >
          <svg className="absolute inset-0 w-full h-full opacity-[0.12]" aria-hidden="true">
            <defs>
              <pattern id="docs-grid" x="0" y="0" width="48" height="48" patternUnits="userSpaceOnUse">
                <path d="M 48 0 L 0 0 0 48" fill="none" stroke="white" strokeWidth="0.5" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#docs-grid)" />
          </svg>

          <div className="relative max-w-[1280px] mx-auto px-8">
            <div className="flex justify-between text-xs uppercase tracking-widest mb-10 pb-4 font-mono"
              style={{ color: 'rgba(255,255,255,0.3)', borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
              <span>DOCUMENTATION</span>
              <span>AEGIS</span>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h1
                  className="font-display font-extrabold text-white leading-tight mb-4"
                  style={{ fontSize: 'clamp(32px, 4.5vw, 58px)' }}
                >
                  Everything you need<br />to ship reliable agents.
                </h1>
                <p className="text-base mb-6" style={{ color: 'rgba(255,255,255,0.55)', maxWidth: '440px' }}>
                  Guides, API reference, SDK docs, and self-hosting instructions.
                  Start in 5 minutes or go deep on the architecture.
                </p>
                <div className="flex gap-3">
                  <button
                    className="font-semibold text-sm px-6 py-3 rounded-xl text-accent"
                    style={{ background: '#fff' }}
                  >
                    Quickstart →
                  </button>
                  <button
                    className="font-medium text-sm px-6 py-3 rounded-xl text-white"
                    style={{ background: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.18)' }}
                  >
                    API Reference
                  </button>
                </div>
              </div>

              {/* Terminal quick example */}
              <div
                className="rounded-2xl overflow-hidden"
                style={{
                  background: 'rgba(8,12,28,0.9)',
                  border: '1px solid rgba(255,255,255,0.08)',
                  boxShadow: '0 32px 80px rgba(0,0,0,0.4)',
                }}
              >
                <div className="flex gap-1.5 px-4 py-3" style={{ borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
                  <span className="w-3 h-3 rounded-full" style={{ background: '#FF5F57' }} />
                  <span className="w-3 h-3 rounded-full" style={{ background: '#FEBC2E' }} />
                  <span className="w-3 h-3 rounded-full" style={{ background: '#28C840' }} />
                </div>
                <div className="p-5 space-y-5">
                  {codeExamples.map((ex) => (
                    <div key={ex.label}>
                      <p className="font-mono text-[10px] uppercase tracking-widest mb-2" style={{ color: 'rgba(255,255,255,0.25)' }}>
                        {ex.label}
                      </p>
                      <pre className="font-mono text-xs leading-relaxed" style={{ color: '#93C5FD' }}>
                        <code>{ex.code}</code>
                      </pre>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div aria-hidden="true" style={{ lineHeight: 0, marginTop: '48px' }}>
            <svg viewBox="0 0 1440 56" preserveAspectRatio="none" className="w-full block" style={{ height: '56px' }}>
              <path d="M0,28 C360,56 720,0 1080,28 C1260,42 1380,14 1440,28 L1440,56 L0,56 Z" fill="#F4F7FF" />
            </svg>
          </div>
        </section>

        {/* Doc sections grid */}
        <section className="py-20 bg-bg-alt">
          <div className="max-w-[1280px] mx-auto px-8">
            <div className="flex justify-between text-xs uppercase tracking-widest text-muted mb-12 pb-4 border-b border-border font-mono">
              <span>All sections</span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0 border border-border rounded-2xl overflow-hidden">
              {sections.map((s, i) => (
                <div
                  key={s.title}
                  className={`p-7 bg-white hover:bg-bg-alt transition-colors group cursor-pointer ${
                    i % 3 !== 2 ? 'border-r border-border' : ''
                  } ${i < 3 ? 'border-b border-border' : ''}`}
                >
                  <div className="mb-4">{s.icon}</div>
                  <h3 className="font-display font-bold text-base text-ink mb-2 group-hover:text-accent transition-colors">
                    {s.title}
                  </h3>
                  <p className="text-xs text-muted leading-relaxed mb-4">{s.desc}</p>
                  <ul className="space-y-1.5">
                    {s.links.map((link) => (
                      <li key={link}>
                        <a href="#" className="text-xs font-mono text-accent hover:underline">
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

        {/* Architecture diagram section */}
        <section className="py-20 bg-bg">
          <div className="max-w-[1280px] mx-auto px-8">
            <div className="flex justify-between text-xs uppercase tracking-widest text-muted mb-12 pb-4 border-b border-border font-mono">
              <span>Architecture</span>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="font-display font-bold text-[28px] md:text-[40px] text-ink leading-tight mb-4">
                  How Aegis fits into<br />
                  <span className="text-accent">your stack.</span>
                </h2>
                <p className="text-muted text-sm leading-relaxed mb-6">
                  Aegis sits between your agent code and your CI pipeline. It wraps each eval run in an
                  isolated sandbox, routes LLM calls through its proxy, runs your eval suite, and
                  reports results back to your PR as a status check.
                </p>
                <div className="space-y-3">
                  {[
                    { step: '01', label: 'Your agent code calls the Aegis SDK' },
                    { step: '02', label: 'Aegis spins up a Firecracker microVM sandbox' },
                    { step: '03', label: 'All LLM calls route through the Aegis proxy' },
                    { step: '04', label: 'Eval suite runs and scores responses' },
                    { step: '05', label: 'Pass/fail result posted to your PR' },
                  ].map((item) => (
                    <div key={item.step} className="flex items-center gap-4">
                      <span className="font-mono text-xs text-muted shrink-0 w-6">{item.step}</span>
                      <span className="text-sm text-ink">{item.label}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Architecture SVG */}
              <div
                className="rounded-2xl p-8 border border-border"
                style={{ background: '#F4F7FF' }}
              >
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
    { x: 160, y: 40, label: 'Your Agent', sub: 'aegis.eval.run()', color: '#2563EB' },
    { x: 160, y: 120, label: 'Aegis SDK', sub: '@aegis/sdk', color: '#1740A6' },
    { x: 60, y: 210, label: 'Sandbox', sub: 'Firecracker VM', color: '#059669' },
    { x: 160, y: 210, label: 'LLM Proxy', sub: 'Token logging', color: '#2563EB' },
    { x: 260, y: 210, label: 'Eval Engine', sub: 'Scorers', color: '#7C3AED' },
    { x: 160, y: 300, label: 'Results', sub: 'PR status check', color: '#10B981' },
  ]

  const edges = [
    [160, 60, 160, 110],
    [160, 140, 60, 200],
    [160, 140, 160, 200],
    [160, 140, 260, 200],
    [60, 230, 160, 290],
    [160, 230, 160, 290],
    [260, 230, 160, 290],
  ]

  return (
    <svg viewBox="0 0 320 340" className="w-full" aria-hidden="true">
      {/* Edges */}
      {edges.map(([x1, y1, x2, y2], i) => (
        <line
          key={i}
          x1={x1} y1={y1} x2={x2} y2={y2}
          stroke="#E5E9F2" strokeWidth="1.5" strokeDasharray="4 3"
        />
      ))}

      {/* Nodes */}
      {nodes.map((node) => (
        <g key={node.label}>
          <rect
            x={node.x - 52} y={node.y - 20}
            width="104" height="40" rx="8"
            fill="white" stroke={node.color} strokeWidth="1.2"
            style={{ filter: 'drop-shadow(0 2px 8px rgba(0,0,0,0.06))' }}
          />
          <text x={node.x} y={node.y - 5} textAnchor="middle" fill={node.color} fontSize="9" fontFamily="DM Sans, sans-serif" fontWeight="600">
            {node.label}
          </text>
          <text x={node.x} y={node.y + 8} textAnchor="middle" fill="#9CA3AF" fontSize="7.5" fontFamily="JetBrains Mono, monospace">
            {node.sub}
          </text>
        </g>
      ))}
    </svg>
  )
}
