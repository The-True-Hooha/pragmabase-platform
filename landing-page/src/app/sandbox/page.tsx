import { Nav } from '@/components/nav'
import { Footer } from '@/components/footer'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Free Sandbox — Pragmabase',
  description: 'Start building financially-aware autonomous agents at zero cost. No credit card required.',
}

const features = [
  {
    color: '#A8FF3E',
    title: '1 active agent',
    desc: 'Spawn a Roku agent on Stellar testnet. Full wallet, memory namespace, and policy guardrails included.',
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <circle cx="10" cy="7" r="3.5" stroke="#A8FF3E" strokeWidth="1.4"/>
        <path d="M3.5 17c0-3.59 2.91-6.5 6.5-6.5s6.5 2.91 6.5 6.5" stroke="#A8FF3E" strokeWidth="1.4" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    color: '#C4B5FD',
    title: '100 memory ops / day',
    desc: 'Read and write to your agent\'s Qdrant vector namespace. Memory persists across sessions.',
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <ellipse cx="10" cy="5.5" rx="6.5" ry="2.5" stroke="#C4B5FD" strokeWidth="1.4"/>
        <path d="M3.5 5.5v4c0 1.38 2.91 2.5 6.5 2.5s6.5-1.12 6.5-2.5v-4" stroke="#C4B5FD" strokeWidth="1.4" opacity="0.6"/>
        <path d="M3.5 9.5v4c0 1.38 2.91 2.5 6.5 2.5s6.5-1.12 6.5-2.5v-4" stroke="#C4B5FD" strokeWidth="1.4" opacity="0.3"/>
      </svg>
    ),
  },
  {
    color: '#818CF8',
    title: 'Stellar testnet only',
    desc: 'Full x402 pay-per-action flows on testnet. No real XLM required — funded automatically.',
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <rect x="2.5" y="5" width="15" height="11" rx="2" stroke="#818CF8" strokeWidth="1.4"/>
        <path d="M2.5 8.5h15" stroke="#818CF8" strokeWidth="1.4" opacity="0.5"/>
        <circle cx="6" cy="12.5" r="1.5" fill="#818CF8" opacity="0.7"/>
      </svg>
    ),
  },
  {
    color: '#FB923C',
    title: '5 reliability scenarios',
    desc: 'Test rogue transactions, hallucination under load, and context failure before any real deployment.',
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <path d="M10 2L2.5 17.5h15L10 2z" stroke="#FB923C" strokeWidth="1.4" strokeLinejoin="round"/>
        <path d="M10 8v4" stroke="#FB923C" strokeWidth="1.4" strokeLinecap="round"/>
        <circle cx="10" cy="14" r="0.9" fill="#FB923C"/>
      </svg>
    ),
  },
  {
    color: '#34D399',
    title: 'Public sandbox',
    desc: 'Shared environment — great for learning. Upgrade to Builder for private, isolated agent deployments.',
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <rect x="3" y="3" width="6" height="6" rx="1.5" stroke="#34D399" strokeWidth="1.4"/>
        <rect x="11" y="3" width="6" height="6" rx="1.5" stroke="#34D399" strokeWidth="1.4" opacity="0.5"/>
        <rect x="3" y="11" width="6" height="6" rx="1.5" stroke="#34D399" strokeWidth="1.4" opacity="0.5"/>
        <rect x="11" y="11" width="6" height="6" rx="1.5" stroke="#34D399" strokeWidth="1.4" opacity="0.25"/>
      </svg>
    ),
  },
  {
    color: '#F59E0B',
    title: 'Community support',
    desc: 'Access the Pragmabase Discord for help, examples, and feedback from other builders.',
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <path d="M17.5 10c0 4.14-3.36 7.5-7.5 7.5a7.47 7.47 0 01-4.5-1.5L2 17.5l1.5-3.5A7.47 7.47 0 012.5 10C2.5 5.86 5.86 2.5 10 2.5S17.5 5.86 17.5 10z" stroke="#F59E0B" strokeWidth="1.4" strokeLinejoin="round"/>
      </svg>
    ),
  },
]

const steps = [
  { step: '01', color: '#A8FF3E', title: 'Install the SDK', code: 'npm install @pragmabase/sdk' },
  { step: '02', color: '#C4B5FD', title: 'Connect your sandbox', code: `import { Pragmabase } from '@pragmabase/sdk'
const pb = new Pragmabase({ apiKey: 'sb_...' })` },
  { step: '03', color: '#818CF8', title: 'Spawn your agent', code: `const agent = await pb.agent.create({
  name: 'roku',
  network: 'testnet',
})` },
  { step: '04', color: '#34D399', title: 'Run your first task', code: `const result = await agent.run({
  task: 'Fetch ETH price and summarize',
  budget: { xlm: 0.1 },
})
// result.cost.xlm → 0.003` },
]

export default function SandboxPage() {
  return (
    <>
      <Nav />
      <main style={{ background: '#0A0A0F' }}>

        {/* Hero */}
        <section className="relative overflow-hidden py-24" style={{ borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
          <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{
            backgroundImage: 'linear-gradient(white 1px, transparent 1px), linear-gradient(90deg, white 1px, transparent 1px)',
            backgroundSize: '48px 48px',
          }} />
          <div className="absolute top-0 left-1/4 w-[700px] h-[500px] pointer-events-none"
            style={{ background: 'radial-gradient(ellipse, rgba(168,255,62,0.08) 0%, transparent 65%)' }} />
          <div className="absolute top-0 right-0 w-[400px] h-[400px] pointer-events-none"
            style={{ background: 'radial-gradient(ellipse, rgba(124,58,237,0.1) 0%, transparent 65%)' }} />

          <div className="relative max-w-[1280px] mx-auto px-6 md:px-8 text-center">
            <div className="inline-flex items-center gap-2 font-mono text-[10px] font-bold uppercase tracking-widest mb-6 px-3 py-2 rounded-full"
              style={{ background: 'rgba(168,255,62,0.08)', border: '1px solid rgba(168,255,62,0.25)', color: '#A8FF3E' }}>
              <span className="w-1.5 h-1.5 rounded-full" style={{ background: '#A8FF3E' }} />
              Free — No credit card required
            </div>

            <h1 className="font-display font-bold text-white leading-[1.02] mb-5"
              style={{ fontSize: 'clamp(36px,6vw,76px)', letterSpacing: '-0.02em' }}>
              Build for free.<br />
              <span style={{ color: '#A8FF3E' }}>Ship when ready.</span>
            </h1>
            <p className="text-lg leading-relaxed max-w-xl mx-auto mb-10" style={{ color: '#6B6B85' }}>
              The Pragmabase sandbox gives you a full agent runtime on Stellar testnet — wallet, memory,
              x402 payments, and the reliability lab — at zero cost.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4 mb-16">
              <a href="/playground"
                className="inline-flex items-center gap-2 font-bold text-base px-8 py-4 rounded-xl transition-all"
                style={{ background: '#A8FF3E', color: '#0A0A0F', boxShadow: '0 12px 40px rgba(168,255,62,0.25)' }}>
                Start building free
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M3 8h10M8 3l5 5-5 5" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
              <a href="/docs"
                className="inline-flex items-center gap-2 font-medium text-base px-8 py-4 rounded-xl text-white transition-all"
                style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.12)' }}>
                Read the docs
              </a>
            </div>

            {/* Stats strip */}
            <div className="flex flex-wrap items-center justify-center gap-8">
              {[
                { val: '< 2 min', label: 'to first agent run' },
                { val: 'Testnet XLM', label: 'auto-funded' },
                { val: '0 billing info', label: 'required' },
              ].map((s) => (
                <div key={s.label} className="text-center">
                  <div className="font-mono font-bold text-lg text-white">{s.val}</div>
                  <div className="text-xs font-mono mt-0.5" style={{ color: 'rgba(255,255,255,0.25)' }}>{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* What's included */}
        <section className="py-20" style={{ background: '#0F0F18' }}>
          <div className="max-w-[1280px] mx-auto px-6 md:px-8">
            <div className="flex justify-between text-xs uppercase tracking-widest mb-12 pb-4 font-mono"
              style={{ color: 'rgba(255,255,255,0.18)', borderBottom: '1px solid rgba(255,255,255,0.07)' }}>
              <span>What&apos;s included</span>
              <span>Free tier</span>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {features.map((f) => (
                <div key={f.title} className="rounded-2xl p-6 transition-all duration-300 hover:-translate-y-0.5"
                  style={{ background: '#14141F', border: `1px solid ${f.color}18` }}>
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-4"
                    style={{ background: f.color + '12' }}>
                    {f.icon}
                  </div>
                  <h3 className="font-display font-bold text-base mb-2" style={{ color: '#EDECF4' }}>{f.title}</h3>
                  <p className="text-sm leading-relaxed" style={{ color: '#6B6B85' }}>{f.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Quickstart */}
        <section className="py-20" style={{ background: '#0A0A0F', borderTop: '1px solid rgba(255,255,255,0.06)' }}>
          <div className="max-w-[1280px] mx-auto px-6 md:px-8">
            <div className="flex justify-between text-xs uppercase tracking-widest mb-12 pb-4 font-mono"
              style={{ color: 'rgba(255,255,255,0.18)', borderBottom: '1px solid rgba(255,255,255,0.07)' }}>
              <span>Quickstart</span>
              <span>~2 minutes</span>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 items-start">
              <div>
                <h2 className="font-display font-bold leading-tight mb-5"
                  style={{ fontSize: 'clamp(24px,3.5vw,42px)', color: '#EDECF4' }}>
                  From install to<br />
                  <span style={{ color: '#A8FF3E' }}>first transaction.</span>
                </h2>
                <p className="text-sm leading-relaxed mb-8" style={{ color: '#6B6B85' }}>
                  The sandbox SDK gives you everything you need to spawn an agent, fund its testnet wallet,
                  and run x402 pay-per-action flows in minutes. No infrastructure setup required.
                </p>
                <div className="space-y-4">
                  {steps.map((s) => (
                    <div key={s.step} className="flex items-start gap-4">
                      <span className="font-mono text-[10px] font-bold shrink-0 mt-1" style={{ color: s.color }}>{s.step}</span>
                      <div>
                        <p className="text-sm font-bold mb-1" style={{ color: '#EDECF4' }}>{s.title}</p>
                        <pre className="font-mono text-xs leading-relaxed" style={{ color: s.color + 'CC' }}>
                          <code>{s.code}</code>
                        </pre>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Terminal mock */}
              <div className="rounded-2xl overflow-hidden sticky top-24"
                style={{ background: '#060609', border: '1px solid rgba(255,255,255,0.07)', boxShadow: '0 32px 80px rgba(0,0,0,0.4)' }}>
                <div className="flex items-center gap-1.5 px-4 py-3" style={{ borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
                  <span className="w-3 h-3 rounded-full" style={{ background: '#FF5F57' }} />
                  <span className="w-3 h-3 rounded-full" style={{ background: '#FEBC2E' }} />
                  <span className="w-3 h-3 rounded-full" style={{ background: '#28C840' }} />
                  <span className="ml-3 font-mono text-[10px]" style={{ color: 'rgba(255,255,255,0.2)' }}>sandbox · testnet</span>
                </div>
                <div className="p-5 space-y-1 font-mono text-xs" style={{ color: '#A8FF3E' }}>
                  {[
                    { t: 'dim',   v: '$ pb sandbox init' },
                    { t: 'text',  v: '✓ Sandbox initialized (testnet)' },
                    { t: 'text',  v: '✓ Agent "roku" spawned → 0x4f2a' },
                    { t: 'text',  v: '✓ Wallet funded → 100 testnet XLM' },
                    { t: 'dim',   v: '' },
                    { t: 'dim',   v: '$ agent.run("Analyze ETH/XLM pair")' },
                    { t: 'muted', v: '  › Retrieving memory context...' },
                    { t: 'muted', v: '  › x402: paying 0.003 XLM for data' },
                    { t: 'muted', v: '  › Reasoning: 3 steps' },
                    { t: 'text',  v: '  ✓ Task complete (0.003 XLM spent)' },
                    { t: 'dim',   v: '' },
                    { t: 'lime',  v: '  result.summary → "ETH/XLM at..."' },
                    { t: 'lime',  v: '  result.memoryWrites → 2' },
                    { t: 'lime',  v: '  result.cost.xlm → 0.003' },
                  ].map((line, i) => (
                    <div key={i} style={{
                      color: line.t === 'dim' ? 'rgba(255,255,255,0.15)'
                           : line.t === 'muted' ? 'rgba(255,255,255,0.35)'
                           : line.t === 'lime' ? '#A8FF3E'
                           : '#C4B5FD',
                    }}>
                      {line.v || '\u00A0'}
                    </div>
                  ))}
                  <div className="flex items-center gap-1 pt-2">
                    <span style={{ color: 'rgba(255,255,255,0.15)' }}>$</span>
                    <span className="inline-block w-2 h-4 ml-1 animate-pulse" style={{ background: '#A8FF3E', opacity: 0.7 }} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Upgrade prompt */}
        <section className="py-20" style={{ background: '#0F0F18', borderTop: '1px solid rgba(255,255,255,0.06)' }}>
          <div className="max-w-[1280px] mx-auto px-6 md:px-8">
            <div className="grid md:grid-cols-2 gap-4">
              {/* Stay on sandbox */}
              <div className="rounded-2xl p-8" style={{ background: '#14141F', border: '1px solid rgba(168,255,62,0.15)' }}>
                <div className="font-mono text-[10px] font-bold uppercase tracking-widest mb-4" style={{ color: '#A8FF3E' }}>Sandbox — Free</div>
                <h3 className="font-display font-bold text-xl mb-3" style={{ color: '#EDECF4' }}>Perfect for exploring.</h3>
                <p className="text-sm leading-relaxed mb-6" style={{ color: '#6B6B85' }}>
                  Build your first agent, test x402 flows, run failure scenarios — completely free on Stellar testnet.
                </p>
                <a href="/playground"
                  className="inline-block font-bold text-sm px-6 py-3 rounded-xl transition-all"
                  style={{ background: 'rgba(168,255,62,0.1)', color: '#A8FF3E', border: '1px solid rgba(168,255,62,0.25)' }}>
                  Open playground →
                </a>
              </div>

              {/* Upgrade */}
              <div className="rounded-2xl p-8 relative overflow-hidden"
                style={{ background: 'linear-gradient(135deg, #1A0A3E, #0D0520)', border: '1px solid rgba(196,181,253,0.2)' }}>
                <div className="absolute top-0 right-0 w-[200px] h-[200px] pointer-events-none"
                  style={{ background: 'radial-gradient(ellipse, rgba(196,181,253,0.1) 0%, transparent 65%)' }} />
                <div className="relative">
                  <div className="font-mono text-[10px] font-bold uppercase tracking-widest mb-4" style={{ color: '#C4B5FD' }}>Builder — $49/mo</div>
                  <h3 className="font-display font-bold text-xl mb-3" style={{ color: '#EDECF4' }}>Ready for mainnet.</h3>
                  <p className="text-sm leading-relaxed mb-6" style={{ color: 'rgba(196,181,253,0.6)' }}>
                    5 agents, Stellar mainnet, unlimited reliability scenarios, x402 payment triggers, and private deployments.
                  </p>
                  <a href="/pricing"
                    className="inline-block font-bold text-sm px-6 py-3 rounded-xl transition-all"
                    style={{ background: '#A8FF3E', color: '#0A0A0F' }}>
                    Upgrade to Builder →
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
