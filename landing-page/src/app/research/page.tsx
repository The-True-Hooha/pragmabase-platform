import { Nav } from '@/components/nav'
import { Footer } from '@/components/footer'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Research — Aegis',
  description: 'Open benchmarks, eval methodologies, and findings from the Aegis research team.',
}

const papers = [
  {
    title: 'AgentBench v2: A Standardized Benchmark for Production Agent Evaluation',
    authors: ['Amara Osei', 'Priya Sundaram'],
    date: 'Feb 2025',
    tags: ['Benchmarking', 'Eval Methodology'],
    abstract:
      'We present AgentBench v2, a standardized eval suite of 47 tasks designed to measure agent reliability in production-like conditions. Unlike capability benchmarks, AgentBench v2 focuses on consistency, regression detection, and tool-call correctness.',
    link: '#',
  },
  {
    title: 'Sandbox Isolation for Agent Workloads: Performance vs. Security Trade-offs',
    authors: ['Leo Hartmann', 'Priya Sundaram'],
    date: 'Jan 2025',
    tags: ['Infrastructure', 'Security', 'Firecracker'],
    abstract:
      'We characterize the performance overhead of full VM isolation for AI agent eval workloads using Firecracker microVMs. We show that with targeted optimizations, cold start times can be reduced to under 2 seconds while maintaining complete memory and network isolation.',
    link: '#',
  },
  {
    title: 'Regression Detection in LLM-based Agent Systems',
    authors: ['Amara Osei', 'Aryan Mehta'],
    date: 'Dec 2024',
    tags: ['Eval Methodology', 'CI/CD'],
    abstract:
      'We study the problem of detecting behavioral regressions in language-model based agents across software releases. We propose a pass-rate delta threshold method and evaluate it on 6 real production agent codebases.',
    link: '#',
  },
]

const openSource = [
  {
    name: 'agentbench',
    desc: 'The AgentBench eval suite — 47 tasks, open spec, reproducible scoring.',
    stars: '2.4k',
    lang: 'Python',
  },
  {
    name: 'aegis-sdk',
    desc: 'Official TypeScript + Python SDK for the Aegis eval API.',
    stars: '1.1k',
    lang: 'TypeScript',
  },
  {
    name: 'sandbox-runner',
    desc: 'The open-source Firecracker sandbox runner used inside Aegis.',
    stars: '890',
    lang: 'Rust',
  },
  {
    name: 'eval-scorers',
    desc: 'Pluggable eval scorer library: exact match, LLM-as-judge, tool-call validators.',
    stars: '640',
    lang: 'Python',
  },
]

const langColor: Record<string, string> = {
  Python: '#3B82F6',
  TypeScript: '#2563EB',
  Rust: '#EA580C',
}

export default function ResearchPage() {
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
              <pattern id="research-grid" x="0" y="0" width="48" height="48" patternUnits="userSpaceOnUse">
                <path d="M 48 0 L 0 0 0 48" fill="none" stroke="white" strokeWidth="0.5" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#research-grid)" />
          </svg>

          <div className="relative max-w-[1280px] mx-auto px-8">
            <div className="flex justify-between text-xs uppercase tracking-widest mb-10 pb-4 font-mono"
              style={{ color: 'rgba(255,255,255,0.3)', borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
              <span>RESEARCH</span>
              <span>AEGIS</span>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h1
                  className="font-display font-extrabold text-white leading-tight mb-4"
                  style={{ fontSize: 'clamp(32px, 4.5vw, 60px)' }}
                >
                  Open research on<br />agent reliability.
                </h1>
                <p className="text-base" style={{ color: 'rgba(255,255,255,0.55)', maxWidth: '460px' }}>
                  We publish our benchmarks, eval methodologies, and infrastructure findings openly.
                  Good science requires reproducibility.
                </p>
                <div className="flex gap-6 mt-6">
                  {[{ val: '3', lbl: 'Papers' }, { val: '4', lbl: 'Open repos' }, { val: '47', lbl: 'Benchmark tasks' }].map((s) => (
                    <div key={s.lbl}>
                      <div className="font-mono font-bold text-2xl text-white">{s.val}</div>
                      <div className="text-xs font-mono uppercase tracking-wider" style={{ color: 'rgba(255,255,255,0.35)' }}>{s.lbl}</div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="hidden lg:flex items-center justify-center">
                <ResearchIllustration />
              </div>
            </div>
          </div>

          <div aria-hidden="true" style={{ lineHeight: 0, marginTop: '48px' }}>
            <svg viewBox="0 0 1440 56" preserveAspectRatio="none" className="w-full block" style={{ height: '56px' }}>
              <path d="M0,28 C360,56 720,0 1080,28 C1260,42 1380,14 1440,28 L1440,56 L0,56 Z" fill="#F4F7FF" />
            </svg>
          </div>
        </section>

        {/* Papers */}
        <section className="py-20 bg-bg-alt">
          <div className="max-w-[1280px] mx-auto px-8">
            <div className="flex justify-between text-xs uppercase tracking-widest text-muted mb-12 pb-4 border-b border-border font-mono">
              <span>Publications</span>
            </div>
            <div className="space-y-4">
              {papers.map((paper, i) => (
                <div
                  key={i}
                  className="bg-white border border-border rounded-2xl p-8 hover:border-accent transition-colors group"
                >
                  <div className="flex flex-wrap items-start justify-between gap-4">
                    <div className="flex-1 min-w-0">
                      <div className="flex flex-wrap items-center gap-2 mb-4">
                        {paper.tags.map((tag) => (
                          <span
                            key={tag}
                            className="text-[10px] font-mono uppercase tracking-wider px-2.5 py-1 rounded"
                            style={{ background: 'rgba(37,99,235,0.08)', color: '#2563EB' }}
                          >
                            {tag}
                          </span>
                        ))}
                        <span className="text-xs text-muted font-mono">{paper.date}</span>
                      </div>
                      <h3 className="font-display font-bold text-lg text-ink leading-snug mb-3 group-hover:text-accent transition-colors">
                        {paper.title}
                      </h3>
                      <p className="text-sm text-muted leading-relaxed mb-4">{paper.abstract}</p>
                      <div className="flex items-center gap-2">
                        <span className="text-xs text-muted">By</span>
                        {paper.authors.map((a, j) => (
                          <span key={a} className="text-xs font-medium text-ink">
                            {a}{j < paper.authors.length - 1 ? ',' : ''}
                          </span>
                        ))}
                      </div>
                    </div>
                    <a
                      href={paper.link}
                      className="shrink-0 border border-border text-ink text-sm font-medium px-5 py-2.5 rounded-xl hover:bg-bg-alt hover:border-accent hover:text-accent transition-colors"
                    >
                      Read paper →
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Open source */}
        <section className="py-20 bg-bg">
          <div className="max-w-[1280px] mx-auto px-8">
            <div className="flex justify-between text-xs uppercase tracking-widest text-muted mb-12 pb-4 border-b border-border font-mono">
              <span>Open Source</span>
            </div>
            <h2 className="font-display font-bold text-[28px] md:text-[40px] text-ink leading-tight mb-12">
              Everything we build,<br />
              <span className="text-accent">open by default.</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-0 border border-border rounded-2xl overflow-hidden">
              {openSource.map((repo, i) => (
                <a
                  key={repo.name}
                  href="#"
                  className={`block p-7 bg-white hover:bg-bg-alt transition-colors group ${
                    i % 2 === 0 ? 'border-r border-border' : ''
                  } ${i < 2 ? 'border-b border-border' : ''}`}
                >
                  <div className="flex items-start justify-between mb-3">
                    <span className="font-mono text-sm font-semibold text-accent group-hover:underline">
                      aegis / {repo.name}
                    </span>
                    <div className="flex items-center gap-1 text-xs text-muted font-mono">
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                      </svg>
                      {repo.stars}
                    </div>
                  </div>
                  <p className="text-sm text-muted leading-relaxed mb-4">{repo.desc}</p>
                  <span
                    className="inline-flex items-center gap-1.5 text-[10px] font-mono"
                    style={{ color: langColor[repo.lang] ?? '#6B7280' }}
                  >
                    <span className="w-2 h-2 rounded-full" style={{ background: langColor[repo.lang] ?? '#6B7280' }} />
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
  const bars = [62, 71, 75, 79, 82, 88, 85, 91, 89, 95, 93, 97]
  const maxH = 80
  return (
    <svg width="320" height="200" viewBox="0 0 320 200" fill="none" aria-hidden="true">
      {/* Chart card */}
      <rect x="20" y="10" width="280" height="130" rx="12"
        fill="rgba(255,255,255,0.07)" stroke="rgba(255,255,255,0.14)" strokeWidth="1" />

      {/* Chart title */}
      <text x="36" y="34" fill="rgba(255,255,255,0.5)" fontSize="8" fontFamily="JetBrains Mono">AgentBench pass rate · v1 → v2</text>

      {/* Bars */}
      {bars.map((v, i) => {
        const h = (v / 100) * maxH
        const x = 36 + i * 21
        const y = 110 - h
        const isLast = i === bars.length - 1
        return (
          <g key={i}>
            <rect x={x} y={y} width="14" height={h} rx="3"
              fill={isLast ? '#34D399' : `rgba(37,99,235,${0.3 + i * 0.055})`} />
            {isLast && (
              <>
                <text x={x + 7} y={y - 5} textAnchor="middle" fill="#34D399" fontSize="7" fontFamily="JetBrains Mono" fontWeight="600">
                  {v}%
                </text>
              </>
            )}
          </g>
        )
      })}

      {/* Horizontal grid lines */}
      {[25, 50, 75, 100].map((pct) => (
        <line key={pct}
          x1="36" x2="284"
          y1={110 - (pct / 100) * maxH}
          y2={110 - (pct / 100) * maxH}
          stroke="rgba(255,255,255,0.06)" strokeWidth="1" />
      ))}

      {/* Metric badges */}
      <rect x="20" y="155" width="88" height="38" rx="8"
        fill="rgba(255,255,255,0.07)" stroke="rgba(255,255,255,0.14)" strokeWidth="0.8" />
      <text x="64" y="170" textAnchor="middle" fill="#34D399" fontSize="13" fontFamily="JetBrains Mono" fontWeight="700">#1</text>
      <text x="64" y="183" textAnchor="middle" fill="rgba(255,255,255,0.35)" fontSize="7" fontFamily="JetBrains Mono">AgentBench</text>

      <rect x="116" y="155" width="88" height="38" rx="8"
        fill="rgba(255,255,255,0.07)" stroke="rgba(255,255,255,0.14)" strokeWidth="0.8" />
      <text x="160" y="170" textAnchor="middle" fill="#93C5FD" fontSize="13" fontFamily="JetBrains Mono" fontWeight="700">47</text>
      <text x="160" y="183" textAnchor="middle" fill="rgba(255,255,255,0.35)" fontSize="7" fontFamily="JetBrains Mono">eval tasks</text>

      <rect x="212" y="155" width="88" height="38" rx="8"
        fill="rgba(255,255,255,0.07)" stroke="rgba(255,255,255,0.14)" strokeWidth="0.8" />
      <text x="256" y="170" textAnchor="middle" fill="#FCD34D" fontSize="13" fontFamily="JetBrains Mono" fontWeight="700">10M+</text>
      <text x="256" y="183" textAnchor="middle" fill="rgba(255,255,255,0.35)" fontSize="7" fontFamily="JetBrains Mono">runs logged</text>
    </svg>
  )
}
