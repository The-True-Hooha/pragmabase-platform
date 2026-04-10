'use client'

import { motion } from 'framer-motion'

const problems = [
  {
    label: 'Problem 01',
    title: 'Economically blind',
    body: 'Agents today cannot earn, spend, or reason about cost. Every API call is free to them — creating no signal for quality, priority, or resource allocation.',
    stat: '0 XLM',
    statLabel: 'native economic capability',
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <rect x="3" y="7" width="22" height="16" rx="2.5" stroke="#F59E0B" strokeWidth="1.5"/>
        <path d="M9 13h10M9 17h7" stroke="#F59E0B" strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M3 11h22" stroke="#F59E0B" strokeWidth="1.5"/>
        <circle cx="21" cy="21" r="4" fill="rgba(245,158,11,0.15)" stroke="#F59E0B" strokeWidth="1.5"/>
        <path d="M21 19.5v2M21 22.5v.5" stroke="#F59E0B" strokeWidth="1.4" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    label: 'Problem 02',
    title: 'Cognitively amnesiac',
    body: 'Every session starts from zero. Agents cannot learn from past decisions, build institutional knowledge, or improve over time across tasks and teams.',
    stat: '∅',
    statLabel: 'persistent memory across runs',
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <ellipse cx="14" cy="14" rx="9" ry="6" stroke="#F59E0B" strokeWidth="1.5"/>
        <path d="M7 18c0 3.314 3.134 6 7 6s7-2.686 7-6" stroke="#F59E0B" strokeWidth="1.5"/>
        <circle cx="14" cy="14" r="3" fill="rgba(245,158,11,0.15)" stroke="#F59E0B" strokeWidth="1.5"/>
        <path d="M14 8V5M14 25v-3" stroke="#F59E0B" strokeWidth="1.4" strokeLinecap="round" strokeDasharray="1 2"/>
        <path d="M6 11L3 9M22 11l3-2" stroke="#F59E0B" strokeWidth="1.4" strokeLinecap="round" strokeDasharray="1 2"/>
      </svg>
    ),
  },
]

export function Problem() {
  return (
    <section className="overflow-hidden" style={{ background: '#0F0F18', borderTop: '1px solid rgba(255,255,255,0.06)', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
      {/* Amber glow */}
      <div className="absolute pointer-events-none w-[500px] h-[300px] left-1/2 -translate-x-1/2"
        style={{ background: 'radial-gradient(ellipse, rgba(245,158,11,0.07) 0%, transparent 70%)' }} />

      <div className="relative max-w-[1280px] mx-auto px-6 md:px-8 py-20 md:py-28">

        <div className="grid lg:grid-cols-2 gap-12 mb-14">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-block font-mono text-[10px] font-bold uppercase tracking-widest mb-4 px-2.5 py-1.5 rounded-full"
              style={{ background: 'rgba(245,158,11,0.1)', border: '1px solid rgba(245,158,11,0.2)', color: '#F59E0B' }}>
              The Problem
            </div>
            <h2 className="font-display font-bold text-4xl md:text-5xl leading-tight" style={{ color: '#EDECF4' }}>
              AI agents today are<br />
              <span style={{ color: '#F59E0B' }}>half-built.</span>
            </h2>
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-lg leading-relaxed self-end" style={{ color: '#6B6B85' }}
          >
            They can reason, plan, and execute — but they lack two critical dimensions
            that turn tools into autonomous operators. Without these, agents are permanently
            stateless and economically invisible.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 gap-5">
          {problems.map((p, i) => (
            <motion.div key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="rounded-2xl p-8 relative overflow-hidden"
              style={{ background: '#14141F', border: '1px solid rgba(245,158,11,0.12)' }}
            >
              <div className="absolute top-0 right-0 w-48 h-48 pointer-events-none"
                style={{ background: 'radial-gradient(ellipse, rgba(245,158,11,0.06) 0%, transparent 70%)' }} />
              <div className="relative">
                <div className="mb-5 w-12 h-12 rounded-xl flex items-center justify-center"
                  style={{ background: 'rgba(245,158,11,0.1)' }}>
                  {p.icon}
                </div>
                <div className="font-mono text-[10px] font-bold uppercase tracking-widest mb-2" style={{ color: 'rgba(245,158,11,0.5)' }}>{p.label}</div>
                <h3 className="font-display font-bold text-2xl mb-3" style={{ color: '#EDECF4' }}>{p.title}</h3>
                <p className="leading-relaxed text-sm mb-8" style={{ color: '#6B6B85' }}>{p.body}</p>
                <div className="flex items-end gap-3 pt-5" style={{ borderTop: '1px solid rgba(245,158,11,0.1)' }}>
                  <div className="font-mono font-bold text-4xl" style={{ color: '#F59E0B' }}>{p.stat}</div>
                  <div className="text-xs font-mono pb-1 font-medium" style={{ color: '#6B6B85' }}>{p.statLabel}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-5 flex items-center gap-4 rounded-xl px-6 py-4"
          style={{ background: 'rgba(245,158,11,0.06)', border: '1px solid rgba(245,158,11,0.15)' }}
        >
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none" className="shrink-0">
            <path d="M9 2L1.5 15.5h15L9 2z" stroke="#F59E0B" strokeWidth="1.4" strokeLinejoin="round"/>
            <path d="M9 7v4M9 12.5v.5" stroke="#F59E0B" strokeWidth="1.4" strokeLinecap="round"/>
          </svg>
          <p className="text-sm font-medium" style={{ color: '#9E9EB8' }}>
            Without economic capability and persistent memory, agents are permanently stateless tools — not autonomous operators.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
