import { Nav } from '@/components/nav'
import { Footer } from '@/components/footer'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About — Aegis',
  description: 'The team and mission behind Aegis agent evaluation infrastructure.',
}

const team = [
  {
    name: 'Aryan Mehta',
    initials: 'AM',
    role: 'Co-founder & CEO',
    bio: 'Previously ML Platform at Stripe. Built agent eval systems for payment fraud detection at scale.',
    gradient: 'linear-gradient(135deg, #0F1F5C, #2563EB)',
  },
  {
    name: 'Priya Sundaram',
    initials: 'PS',
    role: 'Co-founder & CTO',
    bio: 'Ex-Google Brain. PhD in distributed systems. Designed the Firecracker sandbox runtime at the core of Aegis.',
    gradient: 'linear-gradient(135deg, #1740A6, #3B82F6)',
  },
  {
    name: 'Leo Hartmann',
    initials: 'LH',
    role: 'Head of Engineering',
    bio: 'Previously Staff Engineer at Vercel. Led edge runtime infrastructure serving 100M+ requests/day.',
    gradient: 'linear-gradient(135deg, #2563EB, #60A5FA)',
  },
  {
    name: 'Amara Osei',
    initials: 'AO',
    role: 'Head of Research',
    bio: 'Built LLM evaluation benchmarks at Cohere. Author of AgentBench, the industry standard eval suite.',
    gradient: 'linear-gradient(135deg, #1740A6, #7C3AED)',
  },
]

const values = [
  { title: 'Measure first', desc: "You can't improve what you can't measure. Every feature starts with a clear eval signal." },
  { title: 'Builders over buzzwords', desc: "We build tools for engineers. If it doesn't run in CI, we didn't ship it." },
  { title: 'Honest infrastructure', desc: 'No magic. No opaque scores. Every number in Aegis is reproducible and explainable.' },
  { title: 'Open by default', desc: 'Our eval specs are open, our benchmarks are published, and our SDK is MIT licensed.' },
]

const milestones = [
  { year: '2023', event: 'Founded in San Francisco. First eval sandbox prototype shipped in 6 weeks.' },
  { year: 'Q1 2024', event: 'Seed round closed. Joined 15 design partners building production agents.' },
  { year: 'Q3 2024', event: 'Launched public beta. Reached 1M evals run in the first month.' },
  { year: 'Q1 2025', event: '#1 on AgentBench. 2,400 GitHub stars. 10M+ evals run.' },
]

const investors = ['Sequoia Scout', 'YC W24', 'AIX Ventures', 'Quiet Capital']

export default function AboutPage() {
  return (
    <>
      <Nav />
      <main>

        {/* Hero */}
        <section
          className="relative py-24 overflow-hidden"
          style={{ background: 'linear-gradient(160deg, #0F1F5C 0%, #1740A6 45%, #2563EB 100%)' }}
        >
          <svg className="absolute inset-0 w-full h-full opacity-[0.12]" aria-hidden="true">
            <defs>
              <pattern id="about-grid" x="0" y="0" width="48" height="48" patternUnits="userSpaceOnUse">
                <path d="M 48 0 L 0 0 0 48" fill="none" stroke="white" strokeWidth="0.5" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#about-grid)" />
          </svg>

          {/* Decorative hexagons */}
          {[{ x: '88%', y: '12%', s: 80 }, { x: '6%', y: '65%', s: 48 }, { x: '92%', y: '70%', s: 36 }].map((h, i) => (
            <svg key={i} width={h.s} height={h.s} viewBox="0 0 20 20" className="absolute pointer-events-none opacity-10"
              style={{ left: h.x, top: h.y }} aria-hidden="true">
              <polygon points="10,1 18.5,5.5 18.5,14.5 10,19 1.5,14.5 1.5,5.5" stroke="white" strokeWidth="1" fill="none" />
            </svg>
          ))}

          <div className="relative max-w-[1280px] mx-auto px-8">
            <div className="flex justify-between text-xs uppercase tracking-widest mb-12 pb-4 font-mono"
              style={{ color: 'rgba(255,255,255,0.3)', borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
              <span>ABOUT</span>
              <span>AEGIS</span>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <h1
                  className="font-display font-extrabold text-white leading-tight mb-5"
                  style={{ fontSize: 'clamp(36px, 5vw, 64px)' }}
                >
                  We build the<br />reliability layer for<br />production agents.
                </h1>
                <p className="text-base leading-relaxed mb-6 max-w-md" style={{ color: 'rgba(255,255,255,0.6)' }}>
                  Aegis started from a frustration: every team building agents was reinventing the same
                  eval infrastructure. We&apos;re here to make that a solved problem.
                </p>
                <div className="flex flex-wrap gap-4">
                  {investors.map((inv) => (
                    <span key={inv} className="text-xs font-mono px-3 py-1.5 rounded-full"
                      style={{ background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.14)', color: 'rgba(255,255,255,0.6)' }}>
                      {inv}
                    </span>
                  ))}
                </div>
              </div>

              {/* Mission illustration */}
              <div className="hidden lg:flex items-center justify-center">
                <MissionIllustration />
              </div>
            </div>
          </div>

          <div aria-hidden="true" style={{ lineHeight: 0, marginTop: '48px' }}>
            <svg viewBox="0 0 1440 56" preserveAspectRatio="none" className="w-full block" style={{ height: '56px' }}>
              <path d="M0,28 C360,56 720,0 1080,28 C1260,42 1380,14 1440,28 L1440,56 L0,56 Z" fill="#F4F7FF" />
            </svg>
          </div>
        </section>

        {/* Numbers */}
        <section className="py-16 bg-bg-alt border-b border-border">
          <div className="max-w-[1280px] mx-auto px-8">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-0 border border-border rounded-2xl overflow-hidden">
              {[
                { val: '10M+', label: 'Evals run' },
                { val: '2,400+', label: 'GitHub stars' },
                { val: '15+', label: 'Design partners' },
                { val: '<2s', label: 'Sandbox cold start' },
              ].map((s, i) => (
                <div key={s.label}
                  className={`py-8 px-8 bg-white text-center ${i < 3 ? 'border-r border-border' : ''}`}>
                  <div className="font-mono font-bold text-[36px] text-accent leading-none mb-1">{s.val}</div>
                  <div className="text-xs uppercase tracking-widest text-muted font-mono">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Mission + values */}
        <section className="py-24 bg-bg-alt">
          <div className="max-w-[1280px] mx-auto px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
              <div>
                <p className="text-xs uppercase tracking-widest text-muted font-mono mb-4">Our Mission</p>
                <h2 className="font-display font-bold text-[32px] md:text-[44px] text-ink leading-tight mb-6">
                  Make agent reliability<br />
                  <span className="text-accent">a first-class concern.</span>
                </h2>
                <p className="text-muted leading-relaxed mb-4 text-sm">
                  The AI industry has invested billions in making agents more capable — but almost nothing
                  in making them reliably correct in production. That gap is what Aegis fills.
                </p>
                <p className="text-muted leading-relaxed text-sm">
                  We believe every agent team deserves the same observability, testing infrastructure, and
                  regression protection that software teams take for granted.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-0 border border-border rounded-2xl overflow-hidden">
                {values.map((v, i) => (
                  <div key={v.title}
                    className={`p-6 bg-white ${i % 2 === 0 ? 'border-r border-border' : ''} ${i < 2 ? 'border-b border-border' : ''}`}>
                    <div className="w-6 h-6 rounded-md bg-accent/10 flex items-center justify-center mb-3">
                      <div className="w-2 h-2 rounded-full bg-accent" />
                    </div>
                    <p className="text-sm font-semibold text-ink mb-1.5">{v.title}</p>
                    <p className="text-xs text-muted leading-relaxed">{v.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Team */}
        <section className="py-24 bg-bg">
          <div className="max-w-[1280px] mx-auto px-8">
            <div className="flex justify-between text-xs uppercase tracking-widest text-muted mb-12 pb-4 border-b border-border font-mono">
              <span>TEAM</span>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
              <h2 className="font-display font-bold text-[32px] md:text-[44px] text-ink leading-tight">
                Built by people who&apos;ve<br />felt the pain.
              </h2>
              <p className="text-muted text-sm leading-relaxed self-end pb-1">
                We&apos;ve all worked on teams that shipped broken agents to production. We built Aegis
                because we wanted a better answer than &ldquo;we&apos;ll add more tests.&rdquo;
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0 border border-border rounded-2xl overflow-hidden">
              {team.map((member, i) => (
                <div key={member.name}
                  className={`p-7 bg-white ${i < team.length - 1 ? 'border-r border-border' : ''}`}>
                  <div className="w-12 h-12 rounded-xl mb-5 flex items-center justify-center font-display font-bold text-lg text-white"
                    style={{ background: member.gradient }}>
                    {member.initials}
                  </div>
                  <p className="text-sm font-semibold text-ink mb-0.5">{member.name}</p>
                  <p className="text-xs text-accent font-mono mb-3">{member.role}</p>
                  <p className="text-xs text-muted leading-relaxed">{member.bio}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Timeline */}
        <section className="py-24 bg-bg-alt">
          <div className="max-w-[1280px] mx-auto px-8">
            <div className="flex justify-between text-xs uppercase tracking-widest text-muted mb-12 pb-4 border-b border-border font-mono">
              <span>TIMELINE</span>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              <h2 className="font-display font-bold text-[32px] md:text-[44px] text-ink leading-tight">
                The story so far.
              </h2>
              <div className="space-y-0 border border-border rounded-2xl overflow-hidden">
                {milestones.map((m, i) => (
                  <div key={m.year}
                    className={`flex items-start gap-6 p-6 bg-white ${i < milestones.length - 1 ? 'border-b border-border' : ''}`}>
                    <span className="font-mono text-xs text-accent font-semibold shrink-0 pt-0.5 w-16">{m.year}</span>
                    <p className="text-sm text-ink leading-relaxed">{m.event}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Hiring CTA */}
        <section
          className="relative py-24 overflow-hidden"
          style={{ background: 'linear-gradient(160deg, #0F1F5C 0%, #1740A6 50%, #2563EB 100%)' }}
        >
          <svg className="absolute inset-0 w-full h-full opacity-[0.1]" aria-hidden="true">
            <defs>
              <pattern id="about-cta-grid" x="0" y="0" width="48" height="48" patternUnits="userSpaceOnUse">
                <path d="M 48 0 L 0 0 0 48" fill="none" stroke="white" strokeWidth="0.5" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#about-cta-grid)" />
          </svg>
          <div className="relative max-w-[1280px] mx-auto px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="font-display font-extrabold text-white leading-tight mb-4"
                  style={{ fontSize: 'clamp(28px, 4vw, 52px)' }}>
                  We&apos;re hiring builders<br />who care about<br />reliability.
                </h2>
                <p className="text-base mb-8 max-w-md" style={{ color: 'rgba(255,255,255,0.55)' }}>
                  If you want to build the infrastructure layer for the next wave of AI systems, come work with us.
                  Remote-first, well-funded, small team.
                </p>
                <div className="flex gap-3">
                  <button className="font-semibold text-sm px-7 py-3.5 rounded-xl text-accent"
                    style={{ background: '#fff', boxShadow: '0 8px 32px rgba(0,0,0,0.25)' }}>
                    See open roles →
                  </button>
                  <button className="font-medium text-sm px-7 py-3.5 rounded-xl text-white"
                    style={{ background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.18)' }}>
                    Contact us
                  </button>
                </div>
              </div>
              <div className="hidden lg:flex items-center justify-center">
                <OpenRolesIllustration />
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}

function MissionIllustration() {
  return (
    <svg width="340" height="260" viewBox="0 0 340 260" fill="none" aria-hidden="true">
      {/* Central hexagon */}
      <polygon points="170,30 220,58 220,114 170,142 120,114 120,58"
        fill="rgba(255,255,255,0.08)" stroke="rgba(255,255,255,0.3)" strokeWidth="1" />
      <text x="170" y="88" textAnchor="middle" fill="white" fontSize="10" fontFamily="DM Sans" fontWeight="600">AEGIS</text>
      <text x="170" y="103" textAnchor="middle" fill="rgba(255,255,255,0.5)" fontSize="7" fontFamily="JetBrains Mono">eval infra</text>

      {/* Orbiting nodes */}
      {[
        { cx: 60, cy: 65, label: 'Sandbox', sub: 'Firecracker' },
        { cx: 280, cy: 65, label: 'LLM Proxy', sub: 'token log' },
        { cx: 42, cy: 175, label: 'Eval Engine', sub: 'scorers' },
        { cx: 298, cy: 175, label: 'Telemetry', sub: 'OTel' },
        { cx: 170, cy: 220, label: 'Transcripts', sub: '90 days' },
      ].map((node) => (
        <g key={node.label}>
          <line x1={node.cx} y1={node.cy} x2="170" y2="86"
            stroke="rgba(255,255,255,0.12)" strokeWidth="1" strokeDasharray="3 3" />
          <rect x={node.cx - 38} y={node.cy - 18} width="76" height="36" rx="8"
            fill="rgba(255,255,255,0.1)" stroke="rgba(255,255,255,0.2)" strokeWidth="0.8" />
          <text x={node.cx} y={node.cy - 4} textAnchor="middle" fill="rgba(255,255,255,0.85)"
            fontSize="8" fontFamily="DM Sans" fontWeight="600">{node.label}</text>
          <text x={node.cx} y={node.cy + 8} textAnchor="middle" fill="rgba(255,255,255,0.4)"
            fontSize="7" fontFamily="JetBrains Mono">{node.sub}</text>
        </g>
      ))}

      {/* Pass rate arc */}
      <path d="M 140,86 A 30,30 0 0 1 200,86" stroke="#34D399" strokeWidth="2" fill="none" />
      <circle cx="200" cy="86" r="2.5" fill="#34D399" />
    </svg>
  )
}

function OpenRolesIllustration() {
  const roles = ['Infra Engineer', 'ML Research', 'Product Design', 'Developer Rel.']
  return (
    <svg width="320" height="220" viewBox="0 0 320 220" fill="none" aria-hidden="true">
      {roles.map((role, i) => (
        <g key={role}>
          <rect x="20" y={20 + i * 48} width="280" height="38" rx="8"
            fill="rgba(255,255,255,0.07)" stroke="rgba(255,255,255,0.14)" strokeWidth="0.8" />
          <rect x="28" y={28 + i * 48} width="22" height="22" rx="6"
            fill="rgba(255,255,255,0.12)" />
          <text x="64" y={42 + i * 48} fill="rgba(255,255,255,0.85)"
            fontSize="9.5" fontFamily="DM Sans" fontWeight="600">{role}</text>
          <text x="64" y={54 + i * 48} fill="rgba(255,255,255,0.35)"
            fontSize="8" fontFamily="JetBrains Mono">Remote · Full-time</text>
          <rect x="240" y={29 + i * 48} width="48" height="20" rx="6"
            fill="rgba(52,211,153,0.15)" />
          <text x="264" y={43 + i * 48} textAnchor="middle" fill="#34D399"
            fontSize="8" fontFamily="JetBrains Mono">Open</text>
        </g>
      ))}
    </svg>
  )
}
