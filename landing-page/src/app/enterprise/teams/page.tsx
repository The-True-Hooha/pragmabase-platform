import { Nav } from '@/components/nav'
import { Footer } from '@/components/footer'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Multi-Agent Teams — Pragmabase Enterprise',
  description: 'Shared memory, pooled budgets, and coordinated autonomy across teams of AI agents.',
}

const capabilities = [
  {
    color: '#818CF8',
    title: 'Shared memory namespaces',
    desc: 'Agents in a team share a Qdrant namespace. Knowledge written by one agent is immediately retrievable by any other. The team\'s understanding compounds over time.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <ellipse cx="11" cy="5.5" rx="7" ry="2.5" stroke="#818CF8" strokeWidth="1.4"/>
        <path d="M4 5.5v5c0 1.38 3.13 2.5 7 2.5s7-1.12 7-2.5v-5" stroke="#818CF8" strokeWidth="1.4" opacity="0.5"/>
        <path d="M4 10.5v5c0 1.38 3.13 2.5 7 2.5s7-1.12 7-2.5v-5" stroke="#818CF8" strokeWidth="1.4" opacity="0.25"/>
      </svg>
    ),
  },
  {
    color: '#A8FF3E',
    title: 'Pooled + individual budgets',
    desc: 'Define a team-level XLM budget and per-agent spending caps. Soroban guardrails enforce both. Agents can\'t overspend — individually or collectively.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <rect x="2.5" y="5.5" width="17" height="12" rx="2" stroke="#A8FF3E" strokeWidth="1.4"/>
        <path d="M2.5 9.5h17" stroke="#A8FF3E" strokeWidth="1.4" opacity="0.5"/>
        <circle cx="6.5" cy="14" r="1.5" fill="#A8FF3E" opacity="0.7"/>
        <path d="M10.5 14h5" stroke="#A8FF3E" strokeWidth="1.4" strokeLinecap="round" opacity="0.4"/>
      </svg>
    ),
  },
  {
    color: '#C4B5FD',
    title: 'Role-based agent policies',
    desc: 'Assign roles to agents — coordinator, executor, auditor. Each role has distinct memory access permissions and budget authorities, enforced by Soroban.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <circle cx="7" cy="8" r="2.5" stroke="#C4B5FD" strokeWidth="1.4"/>
        <circle cx="15" cy="8" r="2.5" stroke="#C4B5FD" strokeWidth="1.4" opacity="0.5"/>
        <path d="M2.5 18c0-2.76 2.01-5 4.5-5m10 5c0-2.76-2.01-5-4.5-5m-2 5c0-2.76 1.12-4 2.5-4s2.5 1.24 2.5 4" stroke="#C4B5FD" strokeWidth="1.4" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    color: '#F59E0B',
    title: 'Cross-agent task handoff',
    desc: 'Agents pass context and partial work to teammates with full fidelity. The receiving agent picks up exactly where the previous one left off, memory and all.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <path d="M4 11h14M11 4l7 7-7 7" stroke="#F59E0B" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    color: '#34D399',
    title: 'Team audit trails',
    desc: 'Every inter-agent communication, memory write, and payment is logged. Replay any decision tree across the entire team for debugging or compliance.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <rect x="3" y="3.5" width="16" height="15" rx="2" stroke="#34D399" strokeWidth="1.4"/>
        <path d="M3 8.5h16" stroke="#34D399" strokeWidth="1.4" opacity="0.5"/>
        <path d="M7 13h8M7 16h5" stroke="#34D399" strokeWidth="1.4" strokeLinecap="round" opacity="0.7"/>
      </svg>
    ),
  },
  {
    color: '#FB923C',
    title: 'Parallel execution',
    desc: 'Spawn parallel agent branches for time-sensitive workloads. Results are reconciled back into the shared memory namespace automatically.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <path d="M4 11h5m4 0h5M9 6l-5 5 5 5M13 6l5 5-5 5" stroke="#FB923C" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
]

const architectureSteps = [
  { step: '01', color: '#C4B5FD', title: 'Team provisioned', desc: 'A team namespace is created with a shared Qdrant index, pooled Stellar wallet, and Soroban budget policy.' },
  { step: '02', color: '#818CF8', title: 'Agents spawned', desc: 'Individual agents are assigned roles. Each gets a memory view and budget authority derived from the team policy.' },
  { step: '03', color: '#A8FF3E', title: 'Parallel execution', desc: 'Agents run concurrently. Memory writes sync to the shared namespace in real time.' },
  { step: '04', color: '#F59E0B', title: 'Budget enforced', desc: 'Each x402 payment is validated against the agent\'s individual cap and the team\'s global budget by Soroban.' },
  { step: '05', color: '#34D399', title: 'Audit captured', desc: 'All decisions, payments, and memory mutations are logged immutably for replay and compliance.' },
]

const useCases = [
  {
    title: 'Research & synthesis teams',
    desc: 'One agent gathers data, another synthesizes, a third writes the report — all sharing context and paying only for what they use.',
    color: '#818CF8',
  },
  {
    title: 'Financial monitoring fleets',
    desc: 'A coordinator agent dispatches market watchers. Any agent\'s finding is instantly available to the full team via shared memory.',
    color: '#A8FF3E',
  },
  {
    title: 'Customer service pipelines',
    desc: 'Triage agents classify requests and hand off to specialists, with full conversation memory transferred at handoff.',
    color: '#C4B5FD',
  },
  {
    title: 'Audit & compliance agents',
    desc: 'Dedicated auditor agents with read-only memory access monitor team activity and flag policy violations in real time.',
    color: '#F59E0B',
  },
]

export default function TeamsPage() {
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
          <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[600px] h-[500px] pointer-events-none"
            style={{ background: 'radial-gradient(ellipse, rgba(129,140,248,0.1) 0%, transparent 65%)' }} />

          <div className="relative max-w-[1280px] mx-auto px-6 md:px-8">
            <div className="flex justify-between text-xs uppercase tracking-widest mb-12 pb-4 font-mono"
              style={{ color: 'rgba(255,255,255,0.18)', borderBottom: '1px solid rgba(255,255,255,0.07)' }}>
              <a href="/enterprise" style={{ color: 'rgba(255,255,255,0.18)' }} className="hover:text-white/40 transition-colors">← Enterprise</a>
              <span>Multi-Agent Teams</span>
            </div>

            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <div className="inline-block font-mono text-[10px] font-bold uppercase tracking-widest mb-5 px-2.5 py-1.5 rounded-full"
                  style={{ background: 'rgba(129,140,248,0.1)', border: '1px solid rgba(129,140,248,0.25)', color: '#818CF8' }}>
                  Multi-Agent Teams
                </div>
                <h1 className="font-display font-bold text-white leading-tight mb-5"
                  style={{ fontSize: 'clamp(32px,5vw,64px)', letterSpacing: '-0.02em' }}>
                  Agents that<br />collaborate,<br />
                  <span style={{ color: '#818CF8' }}>not just coexist.</span>
                </h1>
                <p className="text-lg leading-relaxed mb-8 max-w-lg" style={{ color: '#6B6B85' }}>
                  Shared memory. Pooled budgets. Role-based policies. Pragmabase teams are not just
                  isolated agents running in parallel — they are coordinated systems with genuine
                  shared context and economic accountability.
                </p>
                <div className="flex gap-3">
                  <a href="/enterprise/contact"
                    className="font-bold text-sm px-6 py-3.5 rounded-xl transition-all"
                    style={{ background: '#818CF8', color: '#0A0A0F' }}>
                    Get started →
                  </a>
                  <a href="/enterprise"
                    className="font-medium text-sm px-6 py-3.5 rounded-xl text-white transition-all"
                    style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.12)' }}>
                    Enterprise overview
                  </a>
                </div>
              </div>

              {/* Team diagram */}
              <div className="hidden lg:flex items-center justify-center">
                <TeamDiagram />
              </div>
            </div>
          </div>
        </section>

        {/* Capabilities */}
        <section className="py-20" style={{ background: '#0F0F18' }}>
          <div className="max-w-[1280px] mx-auto px-6 md:px-8">
            <div className="flex justify-between text-xs uppercase tracking-widest mb-12 pb-4 font-mono"
              style={{ color: 'rgba(255,255,255,0.18)', borderBottom: '1px solid rgba(255,255,255,0.07)' }}>
              <span>Team capabilities</span>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {capabilities.map((c) => (
                <div key={c.title} className="rounded-2xl p-6 transition-all duration-300 hover:-translate-y-0.5"
                  style={{ background: '#14141F', border: `1px solid ${c.color}18` }}>
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-4"
                    style={{ background: c.color + '12' }}>
                    {c.icon}
                  </div>
                  <h3 className="font-display font-bold text-base mb-2" style={{ color: '#EDECF4' }}>{c.title}</h3>
                  <p className="text-sm leading-relaxed" style={{ color: '#6B6B85' }}>{c.desc}</p>
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
              <span>How it works</span>
            </div>
            <div className="grid lg:grid-cols-2 gap-12 items-start">
              <div className="space-y-6">
                {architectureSteps.map((s) => (
                  <div key={s.step} className="flex items-start gap-4">
                    <span className="font-mono text-[10px] font-bold shrink-0 mt-1 w-6" style={{ color: s.color }}>{s.step}</span>
                    <div>
                      <p className="font-bold text-sm mb-1" style={{ color: '#EDECF4' }}>{s.title}</p>
                      <p className="text-sm leading-relaxed" style={{ color: '#6B6B85' }}>{s.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="rounded-2xl p-7" style={{ background: '#14141F', border: '1px solid rgba(255,255,255,0.07)' }}>
                <p className="font-mono text-[9px] uppercase tracking-widest mb-5" style={{ color: 'rgba(255,255,255,0.2)' }}>
                  // team: research-alpha
                </p>
                {[
                  { color: '#C4B5FD', text: 'team.budget → 50 XLM' },
                  { color: '#A8FF3E',  text: 'team.memory.namespace → "research-alpha"' },
                  { color: 'rgba(255,255,255,0.12)', text: '' },
                  { color: '#818CF8',  text: 'agents:' },
                  { color: '#818CF8',  text: '  gatherer  → budget: 10 XLM, role: executor' },
                  { color: '#818CF8',  text: '  analyst   → budget: 20 XLM, role: executor' },
                  { color: '#C4B5FD', text: '  auditor   → budget: 0  XLM, role: auditor' },
                  { color: 'rgba(255,255,255,0.12)', text: '' },
                  { color: '#F59E0B',  text: '> gatherer.run("Fetch ETH/XLM data")' },
                  { color: '#A8FF3E',  text: '  ✓ wrote 3 memories to research-alpha' },
                  { color: '#F59E0B',  text: '> analyst.run("Synthesize findings")' },
                  { color: '#A8FF3E',  text: '  ✓ retrieved 3 memories from team ns' },
                  { color: '#A8FF3E',  text: '  ✓ task complete (12.4 XLM team budget used)' },
                ].map((line, i) => (
                  <div key={i} className="font-mono text-xs leading-relaxed" style={{ color: line.color }}>
                    {line.text || '\u00A0'}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Use cases */}
        <section className="py-20" style={{ background: '#0F0F18', borderTop: '1px solid rgba(255,255,255,0.06)' }}>
          <div className="max-w-[1280px] mx-auto px-6 md:px-8">
            <div className="flex justify-between text-xs uppercase tracking-widest mb-12 pb-4 font-mono"
              style={{ color: 'rgba(255,255,255,0.18)', borderBottom: '1px solid rgba(255,255,255,0.07)' }}>
              <span>Use cases</span>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              {useCases.map((uc) => (
                <div key={uc.title} className="rounded-2xl p-7 transition-all duration-300 hover:-translate-y-0.5"
                  style={{ background: '#14141F', border: `1px solid ${uc.color}18` }}>
                  <div className="w-1.5 h-10 rounded-full mb-4" style={{ background: uc.color }} />
                  <h3 className="font-display font-bold text-base mb-2" style={{ color: '#EDECF4' }}>{uc.title}</h3>
                  <p className="text-sm leading-relaxed" style={{ color: '#6B6B85' }}>{uc.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20" style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}>
          <div className="max-w-[700px] mx-auto px-6 md:px-8 text-center">
            <h2 className="font-display font-bold mb-4" style={{ fontSize: 'clamp(24px,4vw,44px)', color: '#EDECF4' }}>
              Ready to run your first team?
            </h2>
            <p className="text-base leading-relaxed mb-8" style={{ color: '#6B6B85' }}>
              Multi-agent teams are available on the Team plan and above.
              Enterprise customers get custom role policies and private memory isolation.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3">
              <a href="/enterprise/contact"
                className="font-bold text-base px-8 py-4 rounded-xl transition-all"
                style={{ background: '#818CF8', color: '#0A0A0F', boxShadow: '0 8px 32px rgba(129,140,248,0.2)' }}>
                Talk to sales →
              </a>
              <a href="/pricing"
                className="font-medium text-base px-8 py-4 rounded-xl text-white transition-all"
                style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.12)' }}>
                View plans
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}

function TeamDiagram() {
  return (
    <svg width="380" height="300" viewBox="0 0 380 300" fill="none" aria-hidden="true">
      {/* Shared memory pool */}
      <rect x="115" y="220" width="150" height="50" rx="10"
        fill="rgba(129,140,248,0.1)" stroke="rgba(129,140,248,0.3)" strokeWidth="1"/>
      <text x="190" y="241" textAnchor="middle" fill="#818CF8" fontSize="8" fontFamily="JetBrains Mono" fontWeight="700">SHARED MEMORY</text>
      <text x="190" y="254" textAnchor="middle" fill="rgba(129,140,248,0.5)" fontSize="7" fontFamily="JetBrains Mono">Qdrant · research-alpha</text>

      {/* Budget pool */}
      <rect x="295" y="220" width="75" height="50" rx="10"
        fill="rgba(168,255,62,0.08)" stroke="rgba(168,255,62,0.25)" strokeWidth="1"/>
      <text x="332" y="241" textAnchor="middle" fill="#A8FF3E" fontSize="7" fontFamily="JetBrains Mono" fontWeight="700">BUDGET</text>
      <text x="332" y="254" textAnchor="middle" fill="rgba(168,255,62,0.5)" fontSize="7" fontFamily="JetBrains Mono">50 XLM</text>

      {/* Agents */}
      {[
        { x: 60,  y: 120, label: 'gatherer',  role: 'executor', color: '#A8FF3E', budget: '10 XLM' },
        { x: 190, y: 100, label: 'analyst',   role: 'executor', color: '#C4B5FD', budget: '20 XLM' },
        { x: 320, y: 120, label: 'auditor',   role: 'auditor',  color: '#F59E0B', budget: '0 XLM' },
      ].map((agent) => (
        <g key={agent.label}>
          <rect x={agent.x - 44} y={agent.y - 28} width="88" height="56" rx="10"
            fill="#1A1A28" stroke={agent.color + '40'} strokeWidth="1.2"/>
          <text x={agent.x} y={agent.y - 10} textAnchor="middle" fill={agent.color} fontSize="8.5"
            fontFamily="JetBrains Mono" fontWeight="700">{agent.label}</text>
          <text x={agent.x} y={agent.y + 4} textAnchor="middle" fill="rgba(255,255,255,0.25)"
            fontSize="7" fontFamily="JetBrains Mono">{agent.role}</text>
          <text x={agent.x} y={agent.y + 17} textAnchor="middle" fill={agent.color + '80'}
            fontSize="7" fontFamily="JetBrains Mono">{agent.budget}</text>
        </g>
      ))}

      {/* Lines to shared memory */}
      <line x1="60" y1="148" x2="150" y2="220" stroke="rgba(168,255,62,0.2)" strokeWidth="1" strokeDasharray="3 3"/>
      <line x1="190" y1="128" x2="190" y2="220" stroke="rgba(196,181,253,0.2)" strokeWidth="1" strokeDasharray="3 3"/>
      <line x1="320" y1="148" x2="230" y2="220" stroke="rgba(245,158,11,0.2)" strokeWidth="1" strokeDasharray="3 3"/>

      {/* Task flow arrow */}
      <path d="M104 106 C130 90 150 90 146 106" stroke="rgba(255,255,255,0.1)" strokeWidth="1" fill="none" strokeDasharray="2 3"/>
      <text x="125" y="84" textAnchor="middle" fill="rgba(255,255,255,0.15)" fontSize="7" fontFamily="JetBrains Mono">handoff</text>

      {/* Coordinator label */}
      <rect x="115" y="30" width="150" height="36" rx="8"
        fill="rgba(124,58,237,0.12)" stroke="rgba(124,58,237,0.3)" strokeWidth="1"/>
      <text x="190" y="47" textAnchor="middle" fill="#C4B5FD" fontSize="8" fontFamily="JetBrains Mono" fontWeight="700">TEAM: research-alpha</text>
      <text x="190" y="58" textAnchor="middle" fill="rgba(196,181,253,0.4)" fontSize="7" fontFamily="JetBrains Mono">Soroban policy · 50 XLM pool</text>

      <line x1="190" y1="66" x2="190" y2="72" stroke="rgba(124,58,237,0.3)" strokeWidth="1"/>
    </svg>
  )
}
