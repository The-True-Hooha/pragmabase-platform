'use client'

import { motion } from 'framer-motion'

const scenarios = [
  { id: '01', color: '#FB923C', title: 'Rogue Transaction Simulation', body: 'Inject malicious prompts and faulty data. Observe overspending, policy violations, and unauthorized transfers. Validate your guardrails before they matter.', icon: <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M10 2L1.5 17.5h17L10 2z" stroke="#FB923C" strokeWidth="1.4" strokeLinejoin="round"/><path d="M10 8v5" stroke="#FB923C" strokeWidth="1.4" strokeLinecap="round"/><circle cx="10" cy="15" r="1" fill="#FB923C"/></svg> },
  { id: '02', color: '#C4B5FD', title: 'Hallucination Stress Testing', body: 'Introduce conflicting or false data. Measure confidence versus correctness. Compare multiple agent strategies under identical adversarial conditions.', icon: <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><circle cx="10" cy="10" r="7.5" stroke="#C4B5FD" strokeWidth="1.4"/><path d="M7.5 8.5c0-1.38 1.12-2.5 2.5-2.5s2.5 1.12 2.5 2.5c0 1.5-1.5 2-1.5 3.5" stroke="#C4B5FD" strokeWidth="1.4" strokeLinecap="round"/><circle cx="10" cy="14.5" r="1" fill="#C4B5FD"/></svg> },
  { id: '03', color: '#818CF8', title: 'Explainability Mode', body: 'Replay any decision. Inspect inputs, retrieved memory, reasoning steps, and payment triggers. Turn your agent\'s black box into a transparent audit trail.', icon: <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><rect x="2.5" y="4" width="15" height="13" rx="2" stroke="#818CF8" strokeWidth="1.4"/><path d="M2.5 8h15" stroke="#818CF8" strokeWidth="1.4"/><path d="M6 12h8M6 15h5" stroke="#818CF8" strokeWidth="1.4" strokeLinecap="round"/></svg> },
  { id: '04', color: '#F59E0B', title: 'Context Failure Simulation', body: 'Test ambiguous or under-specified tasks. Observe how agents misinterpret goals. Improve agent reasoning via memory feedback loops before production.', icon: <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><rect x="2.5" y="2.5" width="15" height="15" rx="2.5" stroke="#F59E0B" strokeWidth="1.4"/><path d="M6.5 6.5l7 7M13.5 6.5l-7 7" stroke="#F59E0B" strokeWidth="1.4" strokeLinecap="round"/></svg> },
  { id: '05', color: '#34D399', title: 'Economic Decision Testing', body: 'Run the same task under different budget constraints. Analyze how agents prioritize, cut costs, and make trade-offs when economic pressure changes.', icon: <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M3.5 15l4-5 4 3.5 5-7 2.5 3" stroke="#34D399" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/><rect x="2.5" y="2.5" width="15" height="15" rx="2" stroke="#34D399" strokeWidth="1.4"/></svg> },
]

export function ReliabilityLab() {
  return (
    <section style={{ background: '#0F0F18', borderTop: '1px solid rgba(255,255,255,0.06)', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
      <div className="max-w-[1280px] mx-auto px-6 md:px-8 py-20 md:py-28">

        <div className="grid lg:grid-cols-2 gap-12 mb-14">
          <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
            <div className="inline-block font-mono text-[10px] font-bold uppercase tracking-widest mb-4 px-2.5 py-1.5 rounded-full"
              style={{ background: 'rgba(251,146,60,0.1)', border: '1px solid rgba(251,146,60,0.2)', color: '#FB923C' }}>
              Reliability Lab — Key Differentiator
            </div>
            <h2 className="font-display font-bold text-4xl md:text-5xl leading-tight" style={{ color: '#EDECF4' }}>
              Simulate failure<br />
              <span style={{ color: '#FB923C' }}>before it happens.</span>
            </h2>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.1 }}
            className="self-end">
            <p className="text-lg leading-relaxed mb-5" style={{ color: '#6B6B85' }}>
              Pragmabase is not just an execution platform — it is a reliability lab for autonomous agents.
              The only platform that lets you validate agent behavior before it has financial consequences.
            </p>
            <div className="flex items-center gap-2 font-mono text-sm font-bold" style={{ color: '#FB923C' }}>
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M7 1.5L1 12.5h12L7 1.5z" stroke="#FB923C" strokeWidth="1.2" strokeLinejoin="round"/><path d="M7 5.5v3.5" stroke="#FB923C" strokeWidth="1.2" strokeLinecap="round"/><circle cx="7" cy="10.5" r="0.75" fill="#FB923C"/></svg>
              5 simulatable failure scenarios
            </div>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {scenarios.map((s, i) => (
            <motion.div key={s.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.45, delay: i * 0.08 }}
              className="rounded-2xl p-6 cursor-default transition-all duration-300 hover:-translate-y-0.5"
              style={{ background: '#14141F', border: `1px solid ${s.color}18` }}
              onMouseEnter={e => ((e.currentTarget as HTMLElement).style.boxShadow = `0 8px 32px ${s.color}12`)}
              onMouseLeave={e => ((e.currentTarget as HTMLElement).style.boxShadow = 'none')}
            >
              <div className="flex items-start justify-between mb-4">
                <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ background: s.color + '12' }}>
                  {s.icon}
                </div>
                <span className="font-mono text-[10px] font-bold" style={{ color: s.color + '60' }}>SCENARIO {s.id}</span>
              </div>
              <h3 className="font-display font-bold text-base mb-2 leading-snug" style={{ color: '#EDECF4' }}>{s.title}</h3>
              <p className="text-sm leading-relaxed" style={{ color: '#6B6B85' }}>{s.body}</p>
            </motion.div>
          ))}

          {/* CTA card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.45, delay: 0.4 }}
            className="rounded-2xl p-6 flex flex-col items-center justify-center text-center gap-4 cursor-pointer transition-all duration-300"
            style={{ border: '1px dashed rgba(168,255,62,0.25)', background: 'rgba(168,255,62,0.03)' }}
            onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = 'rgba(168,255,62,0.45)'; (e.currentTarget as HTMLElement).style.background = 'rgba(168,255,62,0.06)' }}
            onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = 'rgba(168,255,62,0.25)'; (e.currentTarget as HTMLElement).style.background = 'rgba(168,255,62,0.03)' }}
          >
            <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ background: 'rgba(168,255,62,0.1)' }}>
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none"><path d="M9 3.5v11M3.5 9h11" stroke="#A8FF3E" strokeWidth="1.75" strokeLinecap="round"/></svg>
            </div>
            <div>
              <div className="font-display font-bold text-base mb-1" style={{ color: '#EDECF4' }}>Run your own scenario</div>
              <div className="text-xs" style={{ color: '#6B6B85' }}>Open the playground to simulate agent behavior</div>
            </div>
            <a href="/playground" className="text-xs font-bold transition-opacity hover:opacity-70" style={{ color: '#A8FF3E' }}>
              Launch Playground →
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
