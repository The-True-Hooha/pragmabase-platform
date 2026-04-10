'use client'

import { motion } from 'framer-motion'

const steps = [
  {
    num: '01', color: '#A8FF3E', bg: 'rgba(168,255,62,0.07)', border: 'rgba(168,255,62,0.2)',
    title: 'Build in Sandbox',
    body: "Define your agent's goals, budget, and constraints. Configure memory policies and economic guardrails. No real money at risk.",
    details: ['Set spending limits','Connect memory namespace','Define allowed counterparties','Attach Soroban policies'],
    code: `const roku = await pragmabase.agents.create({\n  name: "roku",\n  budget: { max: 100, currency: "XLM" },\n  memory: { namespace: "finance-team" },\n  mode: "sandbox"\n})`,
  },
  {
    num: '02', color: '#C4B5FD', bg: 'rgba(196,181,253,0.07)', border: 'rgba(196,181,253,0.2)',
    title: 'Simulate & Test',
    body: 'Run your agent through failure scenarios — rogue transactions, hallucination stress tests, context failures. Validate before it costs anything.',
    details: ['Rogue transaction injection','Hallucination stress testing','Replay decision history','Compare strategies'],
    code: `await roku.simulate({\n  scenario: "rogue_transaction",\n  inject: { maliciousPrompt: true },\n  observe: ["spending", "guardrails"]\n})`,
  },
  {
    num: '03', color: '#818CF8', bg: 'rgba(129,140,248,0.07)', border: 'rgba(129,140,248,0.2)',
    title: 'Deploy to Production',
    body: 'Same agent, real rails. Switch to live mode and your agent operates with a real Stellar wallet, earning and spending autonomously.',
    details: ['Real Stellar wallet provisioned','x402 payments active','Memory persisted across runs','Full observability live'],
    code: `await roku.deploy({\n  mode: "live",\n  network: "stellar:mainnet",\n  trustlines: ["USDC", "EURC"]\n})`,
  },
]

export function HowItWorks() {
  return (
    <section style={{ background: '#0F0F18', borderTop: '1px solid rgba(255,255,255,0.06)', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
      <div className="max-w-[1280px] mx-auto px-6 md:px-8 py-20 md:py-28">
        <div className="text-center mb-14">
          <div className="inline-block font-mono text-[10px] font-bold uppercase tracking-widest mb-4 px-2.5 py-1.5 rounded-full"
            style={{ background: 'rgba(124,58,237,0.12)', border: '1px solid rgba(124,58,237,0.25)', color: '#C4B5FD' }}>
            How It Works
          </div>
          <h2 className="font-display font-bold text-4xl md:text-5xl leading-tight mb-4" style={{ color: '#EDECF4' }}>
            Sandbox → Simulation → Production.
          </h2>
          <p className="text-lg max-w-lg mx-auto" style={{ color: '#6B6B85' }}>
            The same system takes you from first deploy to live autonomous operations.
          </p>
        </div>

        <div className="space-y-5">
          {steps.map((step, i) => (
            <motion.div key={step.num}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: i * 0.09 }}
              className="rounded-2xl overflow-hidden"
              style={{ background: '#14141F', border: `1px solid ${step.border}` }}
            >
              <div className="grid lg:grid-cols-2">
                {/* Left */}
                <div className="p-7 md:p-9">
                  <div className="flex items-center gap-3 mb-5">
                    <span className="font-mono font-bold text-3xl leading-none" style={{ color: step.color + '40' }}>{step.num}</span>
                    <div className="h-px flex-1" style={{ background: step.color + '20' }} />
                  </div>
                  <h3 className="font-display font-bold text-2xl mb-3" style={{ color: '#EDECF4' }}>{step.title}</h3>
                  <p className="text-sm leading-relaxed mb-6" style={{ color: '#6B6B85' }}>{step.body}</p>
                  <ul className="space-y-2">
                    {step.details.map(d => (
                      <li key={d} className="flex items-center gap-2 text-sm" style={{ color: '#9E9EB8' }}>
                        <svg width="13" height="13" viewBox="0 0 13 13" fill="none">
                          <path d="M2 6.5l3 3 6-6" stroke={step.color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                        {d}
                      </li>
                    ))}
                  </ul>
                </div>
                {/* Right — code */}
                <div className="flex items-center p-6 md:p-8" style={{ background: '#06060B', borderLeft: '1px solid rgba(255,255,255,0.06)' }}>
                  <div className="w-full">
                    <div className="flex items-center gap-1.5 mb-4">
                      <div className="w-2.5 h-2.5 rounded-full" style={{ background: 'rgba(255,255,255,0.1)' }} />
                      <div className="w-2.5 h-2.5 rounded-full" style={{ background: 'rgba(255,255,255,0.1)' }} />
                      <div className="w-2.5 h-2.5 rounded-full" style={{ background: 'rgba(255,255,255,0.1)' }} />
                      <span className="ml-2 font-mono text-xs" style={{ color: 'rgba(255,255,255,0.15)' }}>pragmabase.ts</span>
                    </div>
                    <pre className="font-mono text-xs leading-6 overflow-x-auto whitespace-pre-wrap" style={{ color: '#A8FF3E' }}>
                      {step.code}
                    </pre>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
