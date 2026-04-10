'use client'

import { motion } from 'framer-motion'

const pillars = [
  { word: 'Balance',   color: '#C4B5FD', bg: 'rgba(196,181,253,0.07)', border: 'rgba(196,181,253,0.12)', desc: 'Decision-making under economic constraints. Roku weighs cost, quality, and outcome before every action.' },
  { word: 'Awareness', color: '#A8FF3E', bg: 'rgba(168,255,62,0.07)',  border: 'rgba(168,255,62,0.12)',  desc: 'Combines real-time data with deep memory. Roku knows what happened before and what it costs to know more.' },
  { word: 'Autonomy',  color: '#818CF8', bg: 'rgba(129,140,248,0.07)', border: 'rgba(129,140,248,0.12)', desc: 'Acts independently within defined policies. Roku operates without hand-holding — within guardrails you define.' },
]

export function Roku() {
  return (
    <section className="overflow-hidden relative" style={{ background: '#0A0A0F', borderTop: '1px solid rgba(255,255,255,0.06)', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
      {/* Grid */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{
        backgroundImage: 'linear-gradient(white 1px, transparent 1px), linear-gradient(90deg, white 1px, transparent 1px)',
        backgroundSize: '48px 48px',
      }} />
      {/* Purple glow */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[700px] h-[500px] pointer-events-none"
        style={{ background: 'radial-gradient(ellipse, rgba(124,58,237,0.15) 0%, transparent 65%)' }} />
      {/* Lime glow */}
      <div className="absolute top-0 right-1/4 w-[400px] h-[400px] pointer-events-none"
        style={{ background: 'radial-gradient(ellipse, rgba(168,255,62,0.06) 0%, transparent 65%)' }} />

      <div className="relative max-w-[1280px] mx-auto px-6 md:px-8 py-20 md:py-28">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Orbital illustration */}
          <motion.div initial={{ opacity: 0, scale: 0.96 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
            className="flex justify-center">
            <div className="relative w-72 h-72 md:w-96 md:h-96">
              <svg className="absolute inset-0 w-full h-full" viewBox="0 0 320 320" fill="none">
                <circle cx="160" cy="160" r="150" stroke="#7C3AED" strokeWidth="0.6" strokeDasharray="6 6" opacity="0.25"/>
                <circle cx="160" cy="160" r="105" stroke="#A8FF3E" strokeWidth="0.6" strokeDasharray="4 8" opacity="0.2"/>
                <circle cx="160" cy="160" r="60" stroke="#818CF8" strokeWidth="0.8" opacity="0.2"/>

                {/* Core */}
                <circle cx="160" cy="160" r="36" fill="rgba(124,58,237,0.15)" stroke="#7C3AED" strokeWidth="1.5"/>
                <text x="160" y="154" textAnchor="middle" fill="#C4B5FD" fontSize="11" fontFamily="JetBrains Mono" fontWeight="600">ROKU</text>
                <text x="160" y="170" textAnchor="middle" fill="rgba(196,181,253,0.5)" fontSize="8" fontFamily="JetBrains Mono">#0x4f2a</text>

                {/* Balance node — top */}
                <circle cx="160" cy="10" r="11" fill="#1A0A3E" stroke="#C4B5FD" strokeWidth="1.4"/>
                <text x="160" y="14" textAnchor="middle" fill="#C4B5FD" fontSize="6.5" fontFamily="JetBrains Mono" fontWeight="700">BAL</text>
                <line x1="160" y1="21" x2="160" y2="100" stroke="#C4B5FD" strokeWidth="0.5" strokeDasharray="3 3"/>

                {/* Awareness node — right */}
                <circle cx="310" cy="160" r="11" fill="#0D1A06" stroke="#A8FF3E" strokeWidth="1.4"/>
                <text x="310" y="164" textAnchor="middle" fill="#A8FF3E" fontSize="6" fontFamily="JetBrains Mono" fontWeight="700">MEM</text>
                <line x1="299" y1="160" x2="220" y2="160" stroke="#A8FF3E" strokeWidth="0.5" strokeDasharray="3 3"/>

                {/* Autonomy node — bottom-left */}
                <circle cx="50" cy="270" r="11" fill="#0A0A20" stroke="#818CF8" strokeWidth="1.4"/>
                <text x="50" y="274" textAnchor="middle" fill="#818CF8" fontSize="6.5" fontFamily="JetBrains Mono" fontWeight="700">ACT</text>
                <line x1="58" y1="261" x2="130" y2="210" stroke="#818CF8" strokeWidth="0.5" strokeDasharray="3 3"/>

                {/* XLM node — bottom-right */}
                <circle cx="270" cy="270" r="9" fill="#1A0A3E" stroke="#7C3AED" strokeWidth="1.4"/>
                <text x="270" y="274" textAnchor="middle" fill="#C4B5FD" fontSize="6" fontFamily="JetBrains Mono" fontWeight="700">XLM</text>
                <line x1="262" y1="262" x2="192" y2="210" stroke="#7C3AED" strokeWidth="0.5" strokeDasharray="3 3"/>

                {/* Particles */}
                <circle cx="160" cy="55" r="3" fill="#C4B5FD" opacity="0.7"/>
                <circle cx="265" cy="160" r="2.5" fill="#A8FF3E" opacity="0.6"/>
                <circle cx="100" cy="235" r="2" fill="#818CF8" opacity="0.5"/>
              </svg>
            </div>
          </motion.div>

          {/* Copy */}
          <div>
            <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
              <div className="inline-block font-mono text-[10px] font-bold uppercase tracking-widest mb-4 px-2.5 py-1.5 rounded-full"
                style={{ background: 'rgba(196,181,253,0.1)', border: '1px solid rgba(196,181,253,0.2)', color: '#C4B5FD' }}>
                Meet Roku
              </div>
              <h2 className="font-display font-bold text-4xl md:text-5xl text-white leading-tight mb-5">
                The default<br />agent of<br />
                <span style={{ color: '#C4B5FD' }}>Pragmabase.</span>
              </h2>
              <p className="text-base leading-relaxed mb-9 max-w-sm" style={{ color: '#6B6B85' }}>
                Inspired by Avatar Roku — balance, memory, and principled action.
                Roku is a financially-aware, memory-augmented autonomous operator.
              </p>
            </motion.div>

            <div className="space-y-3">
              {pillars.map((p, i) => (
                <motion.div key={p.word}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: i * 0.1 }}
                  className="flex items-start gap-4 rounded-xl p-4"
                  style={{ background: p.bg, border: `1px solid ${p.border}` }}
                >
                  <div className="w-1.5 h-10 rounded-full shrink-0 mt-0.5" style={{ background: p.color }} />
                  <div>
                    <div className="font-display font-bold text-white text-lg mb-1">{p.word}</div>
                    <div className="text-sm leading-relaxed" style={{ color: '#6B6B85' }}>{p.desc}</div>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.4 }}
              className="mt-8 font-mono text-xs pt-6" style={{ color: 'rgba(255,255,255,0.2)', borderTop: '1px solid rgba(255,255,255,0.06)' }}>
              &gt; A financially-aware, memory-augmented autonomous operator
            </motion.p>
          </div>
        </div>
      </div>
    </section>
  )
}
