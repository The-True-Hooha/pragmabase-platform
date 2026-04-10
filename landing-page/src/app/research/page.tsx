import { Nav } from '@/components/nav'
import { Footer } from '@/components/footer'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Research — Pragmabase',
  description: 'Open research on agentic economics, memory architectures, and autonomous system reliability.',
}

const papers = [
  {
    title: 'Dual-State Agents: Economic + Cognitive Architecture for Autonomous Systems',
    authors: ['David Ogar', 'Rin Takahashi'],
    date: 'Mar 2025',
    tags: ['Agent Architecture', 'Economic Systems'],
    abstract:
      'We introduce the dual-state agent model — a framework where autonomous agents maintain both a cognitive state (vector memory) and an economic state (Stellar wallet). We show that economically-aware agents make measurably better resource allocation decisions under constrained budgets.',
    color: '#C4B5FD',
  },
  {
    title: 'x402: A Pay-Per-Action Protocol for Autonomous Agent Economies',
    authors: ['Priya Mehta', 'Lars Hoffmann'],
    date: 'Feb 2025',
    tags: ['x402 Protocol', 'Micropayments', 'Stellar'],
    abstract:
      'We present x402, an HTTP-native payment protocol that enables agents to pay for API calls, data access, and compute without API keys. Built on Stellar\'s fast settlement layer, x402 enables sub-second micropayments at fractions of a cent per action.',
    color: '#A8FF3E',
  },
  {
    title: 'Persistent Vector Memory in Multi-Agent Systems: Compounding Knowledge Over Time',
    authors: ['Adebayo Okafor', 'Rin Takahashi'],
    date: 'Jan 2025',
    tags: ['Memory Architecture', 'Qdrant', 'Multi-Agent'],
    abstract:
      'We study how persistent vector memory affects agent performance over extended operation periods. Our findings show that agents with access to team memory outperform stateless agents by 41% on complex multi-step tasks after 7 days of operation.',
    color: '#818CF8',
  },
  {
    title: 'Soroban Guardrails: Programmable Safety Constraints for Financial Agents',
    authors: ['Lars Hoffmann', 'Priya Mehta'],
    date: 'Dec 2024',
    tags: ['Soroban', 'Safety', 'Smart Contracts'],
    abstract:
      'We present a framework for encoding agent behavioral constraints as Soroban smart contracts on Stellar. Budget caps, spending velocity limits, and counterparty whitelists can be enforced at the protocol level, eliminating reliance on prompt-level guardrails.',
    color: '#F59E0B',
  },
]

const openSource = [
  {
    name: 'pragmabase-sdk',
    desc: 'Official TypeScript + Python SDK. Agent runtime, memory client, wallet integration.',
    stars: '1.8k',
    lang: 'TypeScript',
    color: '#A8FF3E',
  },
  {
    name: 'x402-protocol',
    desc: 'Reference implementation of the x402 pay-per-action HTTP protocol on Stellar.',
    stars: '2.1k',
    lang: 'TypeScript',
    color: '#A8FF3E',
  },
  {
    name: 'roku-agent',
    desc: 'The default Pragmabase agent — financially-aware, memory-augmented, open-source.',
    stars: '940',
    lang: 'Python',
    color: '#C4B5FD',
  },
  {
    name: 'reliability-lab',
    desc: 'Failure simulation engine. Inject adversarial prompts, test hallucinations, audit decisions.',
    stars: '720',
    lang: 'Rust',
    color: '#FB923C',
  },
]

const langColor: Record<string, string> = {
  TypeScript: '#A8FF3E',
  Python: '#818CF8',
  Rust: '#FB923C',
}

export default function ResearchPage() {
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
          <div className="absolute top-0 right-1/4 w-[500px] h-[400px] pointer-events-none"
            style={{ background: 'radial-gradient(ellipse, rgba(168,255,62,0.06) 0%, transparent 65%)' }} />

          <div className="relative max-w-[1280px] mx-auto px-6 md:px-8">
            <div className="flex justify-between text-xs uppercase tracking-widest mb-12 pb-4 font-mono"
              style={{ color: 'rgba(255,255,255,0.18)', borderBottom: '1px solid rgba(255,255,255,0.07)' }}>
              <span>Research</span>
              <span>Pragmabase</span>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-block font-mono text-[10px] font-bold uppercase tracking-widest mb-5 px-2.5 py-1.5 rounded-full"
                  style={{ background: 'rgba(196,181,253,0.1)', border: '1px solid rgba(196,181,253,0.2)', color: '#C4B5FD' }}>
                  Open Research
                </div>
                <h1 className="font-display font-bold text-white leading-tight mb-5" style={{ fontSize: 'clamp(32px,4.5vw,58px)' }}>
                  The science behind<br />agentic economics.
                </h1>
                <p className="text-base leading-relaxed mb-8 max-w-md" style={{ color: '#6B6B85' }}>
                  We publish our architecture papers, protocol specs, and benchmark findings openly.
                  Good infrastructure is built on reproducible science.
                </p>
                <div className="flex gap-8">
                  {[
                    { val: '4', lbl: 'Papers' },
                    { val: '4', lbl: 'Open repos' },
                    { val: '5.5k+', lbl: 'GitHub stars' },
                  ].map((s) => (
                    <div key={s.lbl}>
                      <div className="font-mono font-bold text-2xl text-white">{s.val}</div>
                      <div className="text-xs font-mono uppercase tracking-wider mt-0.5" style={{ color: 'rgba(255,255,255,0.25)' }}>{s.lbl}</div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="hidden lg:flex items-center justify-center">
                <ResearchIllustration />
              </div>
            </div>
          </div>
        </section>

        {/* Papers */}
        <section className="py-20" style={{ background: '#0F0F18' }}>
          <div className="max-w-[1280px] mx-auto px-6 md:px-8">
            <div className="flex justify-between text-xs uppercase tracking-widest mb-12 pb-4 font-mono"
              style={{ color: 'rgba(255,255,255,0.18)', borderBottom: '1px solid rgba(255,255,255,0.07)' }}>
              <span>Publications</span>
              <span>{papers.length} papers</span>
            </div>
            <div className="space-y-4">
              {papers.map((paper, i) => (
                <div key={i} className="rounded-2xl p-7 group transition-all duration-300"
                  style={{ background: '#14141F', border: `1px solid ${paper.color}18` }}>
                  <div className="flex flex-wrap items-start justify-between gap-4">
                    <div className="flex-1 min-w-0">
                      <div className="flex flex-wrap items-center gap-2 mb-4">
                        {paper.tags.map((tag) => (
                          <span key={tag} className="text-[10px] font-mono uppercase tracking-wider px-2.5 py-1 rounded-full"
                            style={{ background: paper.color + '12', color: paper.color }}>
                            {tag}
                          </span>
                        ))}
                        <span className="text-xs font-mono" style={{ color: 'rgba(255,255,255,0.25)' }}>{paper.date}</span>
                      </div>
                      <h3 className="font-display font-bold text-lg leading-snug mb-3" style={{ color: '#EDECF4' }}>
                        {paper.title}
                      </h3>
                      <p className="text-sm leading-relaxed mb-4" style={{ color: '#6B6B85' }}>{paper.abstract}</p>
                      <div className="flex items-center gap-2">
                        <span className="text-xs" style={{ color: 'rgba(255,255,255,0.2)' }}>By</span>
                        {paper.authors.map((a, j) => (
                          <span key={a} className="text-xs font-medium" style={{ color: '#9E9EB8' }}>
                            {a}{j < paper.authors.length - 1 ? ',' : ''}
                          </span>
                        ))}
                      </div>
                    </div>
                    <a href="#" className="shrink-0 text-sm font-medium px-5 py-2.5 rounded-xl transition-all"
                      style={{ border: `1px solid ${paper.color}30`, color: paper.color }}>
                      Read paper →
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Open source */}
        <section className="py-20" style={{ background: '#0A0A0F', borderTop: '1px solid rgba(255,255,255,0.06)' }}>
          <div className="max-w-[1280px] mx-auto px-6 md:px-8">
            <div className="flex justify-between text-xs uppercase tracking-widest mb-12 pb-4 font-mono"
              style={{ color: 'rgba(255,255,255,0.18)', borderBottom: '1px solid rgba(255,255,255,0.07)' }}>
              <span>Open Source</span>
            </div>
            <h2 className="font-display font-bold leading-tight mb-12" style={{ fontSize: 'clamp(24px,3.5vw,40px)', color: '#EDECF4' }}>
              Everything we build,<br />
              <span style={{ color: '#A8FF3E' }}>open by default.</span>
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              {openSource.map((repo) => (
                <a key={repo.name} href="#" className="block rounded-2xl p-6 group transition-all duration-300 hover:-translate-y-0.5"
                  style={{ background: '#14141F', border: `1px solid ${repo.color}18` }}>
                  <div className="flex items-start justify-between mb-3">
                    <span className="font-mono text-sm font-semibold" style={{ color: repo.color }}>
                      pragmabase / {repo.name}
                    </span>
                    <div className="flex items-center gap-1 text-xs font-mono" style={{ color: 'rgba(255,255,255,0.25)' }}>
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                      </svg>
                      {repo.stars}
                    </div>
                  </div>
                  <p className="text-sm leading-relaxed mb-4" style={{ color: '#6B6B85' }}>{repo.desc}</p>
                  <span className="inline-flex items-center gap-1.5 text-[10px] font-mono" style={{ color: langColor[repo.lang] }}>
                    <span className="w-2 h-2 rounded-full" style={{ background: langColor[repo.lang] }} />
                    {repo.lang}
                  </span>
                </a>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}

function ResearchIllustration() {
  const bars = [55, 62, 68, 71, 74, 78, 81, 85, 83, 88, 91, 94]
  const maxH = 80
  return (
    <svg width="320" height="200" viewBox="0 0 320 200" fill="none" aria-hidden="true">
      <rect x="20" y="10" width="280" height="130" rx="12"
        fill="rgba(255,255,255,0.04)" stroke="rgba(255,255,255,0.08)" strokeWidth="1" />
      <text x="36" y="34" fill="rgba(255,255,255,0.3)" fontSize="8" fontFamily="JetBrains Mono">Agent performance · dual-state model</text>
      {bars.map((v, i) => {
        const h = (v / 100) * maxH
        const x = 36 + i * 21
        const y = 110 - h
        const isLast = i === bars.length - 1
        return (
          <g key={i}>
            <rect x={x} y={y} width="14" height={h} rx="3"
              fill={isLast ? '#A8FF3E' : `rgba(124,58,237,${0.2 + i * 0.06})`} />
            {isLast && (
              <text x={x + 7} y={y - 5} textAnchor="middle" fill="#A8FF3E" fontSize="7" fontFamily="JetBrains Mono" fontWeight="600">
                {v}%
              </text>
            )}
          </g>
        )
      })}
      {[25, 50, 75, 100].map((pct) => (
        <line key={pct} x1="36" x2="284"
          y1={110 - (pct / 100) * maxH} y2={110 - (pct / 100) * maxH}
          stroke="rgba(255,255,255,0.05)" strokeWidth="1" />
      ))}
      {[
        { x: 30, y: 155, val: '+41%', label: 'vs stateless', color: '#A8FF3E' },
        { x: 120, y: 155, val: '< 100ms', label: 'settlement', color: '#C4B5FD' },
        { x: 220, y: 155, val: '99.9%', label: 'uptime', color: '#818CF8' },
      ].map((m) => (
        <g key={m.label}>
          <rect x={m.x} y={m.y} width="85" height="38" rx="8"
            fill="rgba(255,255,255,0.04)" stroke="rgba(255,255,255,0.08)" strokeWidth="0.8" />
          <text x={m.x + 42.5} y={m.y + 16} textAnchor="middle" fill={m.color} fontSize="12" fontFamily="JetBrains Mono" fontWeight="700">{m.val}</text>
          <text x={m.x + 42.5} y={m.y + 28} textAnchor="middle" fill="rgba(255,255,255,0.25)" fontSize="7" fontFamily="JetBrains Mono">{m.label}</text>
        </g>
      ))}
    </svg>
  )
}
