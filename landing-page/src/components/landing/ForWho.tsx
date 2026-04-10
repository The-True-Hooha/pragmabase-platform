'use client'

import { motion } from 'framer-motion'

const individualFeatures = ['Free sandbox environment','x402 pay-per-action playground','Persistent memory namespace','Stellar testnet wallet','Roku default agent included','Community support + Discord']
const enterpriseFeatures = ['Self-hosted deployment','SSO / SAML authentication','Multi-agent team orchestration','Shared memory across organizations','Custom Soroban guardrails','Dedicated support + SLA','Compliance audit trails','Custom pricing models']

export function ForWho() {
  return (
    <section style={{ background: '#0A0A0F', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
      <div className="max-w-[1280px] mx-auto px-6 md:px-8 py-20 md:py-28">

        <div className="text-center mb-14">
          <div className="inline-block font-mono text-[10px] font-bold uppercase tracking-widest mb-4 px-2.5 py-1.5 rounded-full"
            style={{ background: 'rgba(168,255,62,0.08)', border: '1px solid rgba(168,255,62,0.2)', color: '#A8FF3E' }}>
            Built For Everyone
          </div>
          <h2 className="font-display font-bold text-4xl md:text-5xl leading-tight mb-4" style={{ color: '#EDECF4' }}>
            Whether you ship solo<br />or lead a team of teams.
          </h2>
          <p className="text-lg max-w-lg mx-auto" style={{ color: '#6B6B85' }}>
            Pragmabase scales from a single developer experimenting in the playground to enterprise infrastructure running hundreds of coordinated agents.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-5">

          {/* Individuals */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}
            className="rounded-2xl overflow-hidden"
            style={{ background: '#14141F', border: '1px solid rgba(168,255,62,0.15)' }}>
            <div className="p-8 md:p-10">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ background: 'rgba(168,255,62,0.1)' }}>
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><circle cx="10" cy="6.5" r="3.5" stroke="#A8FF3E" strokeWidth="1.4"/><path d="M3 17c0-3.314 3.134-6 7-6s7 2.686 7 6" stroke="#A8FF3E" strokeWidth="1.4" strokeLinecap="round"/></svg>
                </div>
                <div>
                  <div className="font-mono text-[10px] font-bold uppercase tracking-widest" style={{ color: '#A8FF3E' }}>For Individuals</div>
                  <div className="font-display font-bold text-xl" style={{ color: '#EDECF4' }}>Developers & Builders</div>
                </div>
              </div>
              <p className="text-sm leading-relaxed mb-7" style={{ color: '#6B6B85' }}>
                Build and experiment with autonomous agents that have real wallets and persistent memory. Start free, iterate fast, scale when ready.
              </p>
              <ul className="space-y-2.5 mb-7">
                {individualFeatures.map(f => (
                  <li key={f} className="flex items-center gap-3 text-sm" style={{ color: '#9E9EB8' }}>
                    <div className="w-5 h-5 rounded-full flex items-center justify-center shrink-0" style={{ background: 'rgba(168,255,62,0.1)' }}>
                      <svg width="10" height="10" viewBox="0 0 10 10" fill="none"><path d="M1.5 5l2.5 2.5 5-5" stroke="#A8FF3E" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/></svg>
                    </div>
                    {f}
                  </li>
                ))}
              </ul>
              <div className="rounded-xl p-4 mb-6 flex items-center gap-4" style={{ background: 'rgba(168,255,62,0.05)', border: '1px solid rgba(168,255,62,0.12)' }}>
                <div>
                  <div className="font-display font-bold text-3xl" style={{ color: '#A8FF3E' }}>Free</div>
                  <div className="font-mono text-xs" style={{ color: '#6B6B85' }}>No credit card required</div>
                </div>
                <div className="text-xs leading-snug flex-1" style={{ color: '#6B6B85' }}>
                  500 agent runs/mo · 1 sandbox · Stellar testnet · Community support
                </div>
              </div>
              <a href="/playground"
                className="flex items-center justify-center gap-2 w-full py-3 rounded-xl font-bold text-sm transition-all"
                style={{ background: '#A8FF3E', color: '#0A0A0F', boxShadow: '0 8px 24px rgba(168,255,62,0.2)' }}
                onMouseEnter={e => ((e.currentTarget as HTMLElement).style.background = '#BFFF66')}
                onMouseLeave={e => ((e.currentTarget as HTMLElement).style.background = '#A8FF3E')}
              >
                Launch Playground — Free
                <svg width="13" height="13" viewBox="0 0 13 13" fill="none"><path d="M2 6.5h9M6.5 2l4.5 4.5L6.5 11" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </a>
            </div>
          </motion.div>

          {/* Enterprise */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.1 }}
            className="rounded-2xl overflow-hidden relative"
            style={{ background: 'linear-gradient(145deg, #1A0A3E 0%, #2D1463 50%, #1A1040 100%)', border: '1px solid rgba(124,58,237,0.35)' }}>
            <div className="absolute inset-0 opacity-[0.05] pointer-events-none" style={{
              backgroundImage: 'linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)',
              backgroundSize: '28px 28px',
            }} />
            <div className="relative p-8 md:p-10">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ background: 'rgba(196,181,253,0.12)' }}>
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><rect x="2" y="8" width="16" height="10" rx="2" stroke="#C4B5FD" strokeWidth="1.4"/><path d="M6 8V6a4 4 0 018 0v2" stroke="#C4B5FD" strokeWidth="1.4"/><circle cx="10" cy="13" r="1.5" fill="#C4B5FD"/></svg>
                </div>
                <div>
                  <div className="font-mono text-[10px] font-bold uppercase tracking-widest" style={{ color: '#C4B5FD' }}>For Enterprise</div>
                  <div className="font-display font-bold text-xl text-white">Teams & Organizations</div>
                </div>
              </div>
              <p className="text-sm leading-relaxed mb-7" style={{ color: 'rgba(196,181,253,0.55)' }}>
                Deploy Pragmabase on your own infrastructure. Manage hundreds of coordinated agents with shared memory, custom guardrails, and enterprise-grade compliance.
              </p>
              <ul className="space-y-2.5 mb-7">
                {enterpriseFeatures.map(f => (
                  <li key={f} className="flex items-center gap-3 text-sm" style={{ color: 'rgba(196,181,253,0.7)' }}>
                    <div className="w-5 h-5 rounded-full flex items-center justify-center shrink-0" style={{ background: 'rgba(124,58,237,0.2)' }}>
                      <svg width="10" height="10" viewBox="0 0 10 10" fill="none"><path d="M1.5 5l2.5 2.5 5-5" stroke="#C4B5FD" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/></svg>
                    </div>
                    {f}
                  </li>
                ))}
              </ul>
              <div className="rounded-xl p-4 mb-6 flex items-center gap-4" style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)' }}>
                <div>
                  <div className="font-display font-bold text-2xl text-white">Custom</div>
                  <div className="font-mono text-xs" style={{ color: 'rgba(196,181,253,0.4)' }}>Tailored to your needs</div>
                </div>
                <div className="text-xs leading-snug flex-1" style={{ color: 'rgba(196,181,253,0.5)' }}>
                  Volume pricing · Self-host · Custom SLA · Dedicated support
                </div>
              </div>
              <a href="/enterprise/contact"
                className="flex items-center justify-center gap-2 w-full py-3 rounded-xl font-bold text-sm transition-all"
                style={{ background: 'rgba(255,255,255,0.1)', color: '#EDECF4', border: '1px solid rgba(255,255,255,0.15)' }}
                onMouseEnter={e => ((e.currentTarget as HTMLElement).style.background = 'rgba(255,255,255,0.16)')}
                onMouseLeave={e => ((e.currentTarget as HTMLElement).style.background = 'rgba(255,255,255,0.1)')}
              >
                Talk to Sales
                <svg width="13" height="13" viewBox="0 0 13 13" fill="none"><path d="M2 6.5h9M6.5 2l4.5 4.5L6.5 11" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </a>
            </div>
          </motion.div>
        </div>

        {/* Comparison table */}
        <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-6 rounded-2xl overflow-hidden" style={{ border: '1px solid rgba(255,255,255,0.07)' }}>
          <div className="grid grid-cols-3 font-mono text-[10px] font-bold uppercase tracking-widest" style={{ background: '#14141F', borderBottom: '1px solid rgba(255,255,255,0.07)' }}>
            <div className="px-5 py-3" style={{ color: '#6B6B85' }}>Feature</div>
            <div className="px-5 py-3" style={{ color: '#A8FF3E', borderLeft: '1px solid rgba(255,255,255,0.07)' }}>Individual</div>
            <div className="px-5 py-3" style={{ color: '#C4B5FD', borderLeft: '1px solid rgba(255,255,255,0.07)' }}>Enterprise</div>
          </div>
          {[
            ['Stellar wallet',      '✓ Testnet',       '✓ Mainnet + Testnet'],
            ['Agent runs / mo',     '500',              'Unlimited'],
            ['Persistent memory',   '✓ 1 namespace',   '✓ Multi-org namespaces'],
            ['Reliability lab',     '✓',               '✓ + Custom scenarios'],
            ['Team agents',         '—',               '✓ Shared memory + budget'],
            ['Self-hosted',         '—',               '✓'],
            ['SSO / SAML',          '—',               '✓'],
            ['SLA',                 '—',               '✓ 99.9% uptime'],
          ].map(([feat, ind, ent], i) => (
            <div key={feat} className="grid grid-cols-3 text-sm" style={{ background: i % 2 === 0 ? '#0F0F18' : '#14141F', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
              <div className="px-5 py-3 font-medium" style={{ color: '#9E9EB8' }}>{feat}</div>
              <div className="px-5 py-3 font-mono text-xs" style={{ color: '#A8FF3E', borderLeft: '1px solid rgba(255,255,255,0.05)' }}>{ind}</div>
              <div className="px-5 py-3 font-mono text-xs" style={{ color: '#C4B5FD', borderLeft: '1px solid rgba(255,255,255,0.05)' }}>{ent}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
