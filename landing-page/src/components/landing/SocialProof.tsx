'use client'

import { motion } from 'framer-motion'

const testimonials = [
  { quote: "The reliability lab is what sold us. We could simulate our trading agent overspending before it touched real XLM. That's not possible anywhere else.", name: 'Adebayo Okafor', role: 'Lead Engineer, FinAgent Labs', color: '#A8FF3E' },
  { quote: "Persistent memory changed how we think about agent teams. They actually remember decisions from last week. The knowledge compounds.", name: 'Rin Takahashi', role: 'AI Systems Architect', color: '#C4B5FD' },
  { quote: "x402 is a paradigm shift. Our agents buy the data they need, sell their outputs, and run an autonomous micro-economy. No API keys anywhere.", name: 'Priya Mehta', role: 'Founder, AgentStack', color: '#818CF8' },
  { quote: "Self-hosted deployment with SSO was non-negotiable for our compliance team. Pragmabase was the only platform that checked every box.", name: 'Lars Hoffmann', role: 'CTO, Korvus Infrastructure', color: '#F59E0B' },
]

const stats = [
  { val: '500K+', label: 'Agent transactions simulated' },
  { val: '< 100ms', label: 'Avg wallet settlement' },
  { val: '99.9%', label: 'Platform uptime' },
  { val: 'x402', label: 'Emerging payment standard' },
]

export function SocialProof() {
  return (
    <section style={{ background: '#0A0A0F', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
      <div className="max-w-[1280px] mx-auto px-6 md:px-8 py-20 md:py-24">

        {/* Stats */}
        <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16 pb-16"
          style={{ borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
          {stats.map(s => (
            <div key={s.val} className="text-center">
              <div className="font-display font-bold text-3xl md:text-4xl mb-1" style={{ color: '#EDECF4' }}>{s.val}</div>
              <div className="text-xs font-mono" style={{ color: '#6B6B85' }}>{s.label}</div>
            </div>
          ))}
        </motion.div>

        <div className="text-center mb-12">
          <div className="inline-block font-mono text-[10px] font-bold uppercase tracking-widest mb-3 px-2.5 py-1.5 rounded-full"
            style={{ background: 'rgba(124,58,237,0.12)', border: '1px solid rgba(124,58,237,0.25)', color: '#C4B5FD' }}>
            Early Access Feedback
          </div>
          <h2 className="font-display font-bold text-3xl md:text-4xl" style={{ color: '#EDECF4' }}>
            What builders are saying.
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          {testimonials.map((t, i) => (
            <motion.div key={t.name}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: i * 0.08 }}
              className="rounded-2xl p-7 relative overflow-hidden"
              style={{ background: '#14141F', border: '1px solid rgba(255,255,255,0.07)' }}
            >
              <div className="absolute top-0 left-0 right-0 h-px" style={{ background: t.color + '60' }} />
              <div className="font-display font-bold text-5xl leading-none mb-3 -mt-1" style={{ color: t.color + '15' }}>"</div>
              <p className="text-[15px] leading-relaxed mb-6 -mt-3" style={{ color: '#9E9EB8' }}>{t.quote}</p>
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full flex items-center justify-center font-display font-bold text-sm text-[#0A0A0F] shrink-0"
                  style={{ background: t.color }}>
                  {t.name.charAt(0)}
                </div>
                <div>
                  <div className="font-semibold text-sm" style={{ color: '#EDECF4' }}>{t.name}</div>
                  <div className="text-xs" style={{ color: '#6B6B85' }}>{t.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Trust badges */}
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-wrap items-center justify-center gap-4 mt-12 pt-10"
          style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}>
          {[
            { icon: '🔐', label: 'Soroban Guardrails' },
            { icon: '🏦', label: 'Stellar Mainnet' },
            { icon: '🧠', label: 'Qdrant Memory' },
            { icon: '📋', label: 'Full Audit Trails' },
            { icon: '🔁', label: 'x402 Protocol' },
          ].map(b => (
            <div key={b.label} className="flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium"
              style={{ background: '#14141F', border: '1px solid rgba(255,255,255,0.08)', color: '#9E9EB8' }}>
              <span>{b.icon}</span><span>{b.label}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
