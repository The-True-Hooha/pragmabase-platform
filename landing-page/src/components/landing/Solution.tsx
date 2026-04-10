'use client'

import { motion } from 'framer-motion'

export function Solution() {
  return (
    <section className="overflow-hidden" style={{ background: '#0A0A0F' }}>
      {/* Purple glow center */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] pointer-events-none"
        style={{ background: 'radial-gradient(ellipse, rgba(124,58,237,0.12) 0%, transparent 65%)' }} />

      <div className="relative max-w-[1280px] mx-auto px-6 md:px-8 py-20 md:py-28">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <div className="inline-block font-mono text-[10px] font-bold uppercase tracking-widest mb-4 px-2.5 py-1.5 rounded-full"
            style={{ background: 'rgba(124,58,237,0.12)', border: '1px solid rgba(124,58,237,0.25)', color: '#C4B5FD' }}>
            The Solution
          </div>
          <h2 className="font-display font-bold text-4xl md:text-5xl leading-tight" style={{ color: '#EDECF4' }}>
            Dual-state architecture
          </h2>
          <p className="text-lg mt-4 max-w-xl mx-auto" style={{ color: '#6B6B85' }}>
            Every Pragmabase agent carries two states simultaneously — one economic, one cognitive.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-5">

          {/* Economic — purple */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
            className="rounded-2xl overflow-hidden relative"
            style={{ background: 'linear-gradient(145deg, #1A0A3E 0%, #2D1463 50%, #3B1A7A 100%)', border: '1px solid rgba(124,58,237,0.3)' }}
          >
            <div className="absolute inset-0 opacity-[0.05] pointer-events-none" style={{
              backgroundImage: 'linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)',
              backgroundSize: '32px 32px',
            }} />
            <div className="relative p-8 md:p-10">
              <div className="inline-block font-mono text-[9px] font-bold uppercase tracking-widest mb-5 px-2.5 py-1.5 rounded-full"
                style={{ background: 'rgba(196,181,253,0.12)', color: '#C4B5FD', border: '1px solid rgba(196,181,253,0.2)' }}>
                Economic State
              </div>
              <h3 className="font-display font-bold text-3xl text-white mb-3">Wallet-first agents</h3>
              <p className="text-sm leading-relaxed mb-7" style={{ color: 'rgba(196,181,253,0.65)' }}>
                Each agent is provisioned with a real Stellar wallet. It earns, spends, and optimizes cost natively — making every action a financial decision.
              </p>

              {/* Wallet card */}
              <div className="rounded-xl p-5 mb-6 font-mono" style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.08)' }}>
                <div className="text-[10px] mb-2 uppercase tracking-widest" style={{ color: 'rgba(196,181,253,0.4)' }}>Roku Wallet · Testnet</div>
                <div className="text-xs mb-4 break-all" style={{ color: 'rgba(255,255,255,0.3)' }}>GCKFBEIYV2U22IO2BJ4KVJOIP7XPWQGQFKKWXR6DOSJBV7STMAQSMTG</div>
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div>
                    <div className="text-[10px] mb-1" style={{ color: 'rgba(196,181,253,0.4)' }}>BALANCE</div>
                    <div className="font-bold text-xl text-white">128.40 <span className="text-sm" style={{ color: 'rgba(255,255,255,0.35)' }}>XLM</span></div>
                  </div>
                  <div>
                    <div className="text-[10px] mb-1" style={{ color: 'rgba(196,181,253,0.4)' }}>STABLECOIN</div>
                    <div className="font-bold text-xl text-white">50.00 <span className="text-sm" style={{ color: 'rgba(255,255,255,0.35)' }}>USDC</span></div>
                  </div>
                </div>
                <div className="pt-3 space-y-1.5" style={{ borderTop: '1px solid rgba(255,255,255,0.07)' }}>
                  {[
                    { label: '→ api:weather', val: '−2.50 XLM', color: '#F59E0B' },
                    { label: '← task:report', val: '+0.80 XLM', color: '#A8FF3E' },
                    { label: '← delegation',  val: '+1.20 XLM', color: '#A8FF3E' },
                  ].map(t => (
                    <div key={t.label} className="flex justify-between text-[10px]">
                      <span style={{ color: 'rgba(255,255,255,0.3)' }}>{t.label}</span>
                      <span className="font-semibold" style={{ color: t.color }}>{t.val}</span>
                    </div>
                  ))}
                </div>
              </div>

              <ul className="space-y-2">
                {['Automatic wallet provisioning', 'Stellar trustlines (USDC, EURC)', 'x402 pay-per-action', 'Soroban guardrails'].map(item => (
                  <li key={item} className="flex items-center gap-2 text-sm" style={{ color: 'rgba(196,181,253,0.7)' }}>
                    <svg width="13" height="13" viewBox="0 0 13 13" fill="none">
                      <path d="M2 6.5l3 3 6-6" stroke="#A8FF3E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* Cognitive — dark surface */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.08 }}
            className="rounded-2xl overflow-hidden"
            style={{ background: '#14141F', border: '1px solid rgba(255,255,255,0.07)' }}
          >
            <div className="p-8 md:p-10 h-full">
              <div className="inline-block font-mono text-[9px] font-bold uppercase tracking-widest mb-5 px-2.5 py-1.5 rounded-full"
                style={{ background: 'rgba(129,140,248,0.1)', color: '#818CF8', border: '1px solid rgba(129,140,248,0.2)' }}>
                Cognitive State
              </div>
              <h3 className="font-display font-bold text-3xl mb-3" style={{ color: '#EDECF4' }}>Memory that evolves</h3>
              <p className="text-sm leading-relaxed mb-7" style={{ color: '#6B6B85' }}>
                Agents build persistent, semantic memory across every run. Individual recall or shared team intelligence — they don't just act, they evolve.
              </p>

              {/* Memory card */}
              <div className="rounded-xl p-5 mb-6 font-mono" style={{ background: '#0F0F18', border: '1px solid rgba(255,255,255,0.06)' }}>
                <div className="text-[10px] mb-3 uppercase tracking-widest" style={{ color: 'rgba(129,140,248,0.5)' }}>Vector Memory · Qdrant</div>
                <div className="space-y-2">
                  {[
                    { vec: '[0.82, -0.41, 0.67…]', tag: 'decision', label: 'Chose API-B over API-A (cost −40%)' },
                    { vec: '[0.13, 0.94, -0.28…]', tag: 'outcome',  label: 'Report task earned 0.80 XLM' },
                    { vec: '[0.55, 0.31, 0.89…]', tag: 'pattern',   label: 'Market data peaks at 09:00 UTC' },
                  ].map((m, i) => (
                    <div key={i} className="rounded-lg px-3 py-2" style={{ background: 'rgba(255,255,255,0.03)' }}>
                      <div className="text-[9px] mb-0.5" style={{ color: 'rgba(129,140,248,0.4)' }}>{m.vec}</div>
                      <div className="flex items-center gap-2">
                        <span className="text-[9px] font-bold px-1.5 py-0.5 rounded uppercase"
                          style={{ background: 'rgba(129,140,248,0.15)', color: '#818CF8' }}>{m.tag}</span>
                        <span className="text-xs" style={{ color: 'rgba(237,236,244,0.55)' }}>{m.label}</span>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-3 pt-3 flex justify-between text-[10px]" style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}>
                  <span style={{ color: '#6B6B85' }}>1,247 vectors stored</span>
                  <span className="font-bold" style={{ color: '#A8FF3E' }}>Semantic retrieval active</span>
                </div>
              </div>

              <ul className="space-y-2">
                {['Individual + team memory', 'Semantic vector retrieval', 'Long-term learning across runs', 'Context-aware reasoning'].map(item => (
                  <li key={item} className="flex items-center gap-2 text-sm" style={{ color: '#6B6B85' }}>
                    <svg width="13" height="13" viewBox="0 0 13 13" fill="none">
                      <path d="M2 6.5l3 3 6-6" stroke="#818CF8" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>

        {/* Equation */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-8 flex flex-wrap items-center justify-center gap-4"
        >
          <div className="px-6 py-3 rounded-xl font-display font-bold text-base text-white"
            style={{ background: 'linear-gradient(135deg,#2D1463,#3B1A7A)', border: '1px solid rgba(124,58,237,0.4)' }}>
            Economic State
          </div>
          <div className="font-display font-bold text-3xl" style={{ color: '#3B3B55' }}>+</div>
          <div className="px-6 py-3 rounded-xl font-display font-bold text-base"
            style={{ background: 'rgba(129,140,248,0.1)', border: '1px solid rgba(129,140,248,0.2)', color: '#818CF8' }}>
            Cognitive State
          </div>
          <div className="font-display font-bold text-3xl" style={{ color: '#3B3B55' }}>=</div>
          <div className="px-6 py-3 rounded-xl font-display font-bold text-base"
            style={{ border: '1px solid rgba(168,255,62,0.3)', color: '#A8FF3E', background: 'rgba(168,255,62,0.06)' }}>
            Autonomous Operator
          </div>
        </motion.div>
      </div>
    </section>
  )
}
