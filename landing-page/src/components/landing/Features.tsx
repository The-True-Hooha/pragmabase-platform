'use client'

import { motion } from 'framer-motion'

const features = [
  {
    accent: '#C4B5FD', accentBg: 'rgba(196,181,253,0.08)', accentBorder: 'rgba(196,181,253,0.15)',
    number: '01', title: 'Persistent Memory Layer',
    body: 'Individual and team memory stored as vectors. Agents retrieve past decisions, patterns, and shared knowledge — evolving with every run.',
    tags: ['Qdrant', 'Semantic Search', 'Team Memory'],
    icon: <svg width="22" height="22" viewBox="0 0 22 22" fill="none"><ellipse cx="11" cy="7" rx="7" ry="3.5" stroke="#C4B5FD" strokeWidth="1.4"/><path d="M4 7v4c0 1.933 3.134 3.5 7 3.5s7-1.567 7-3.5V7" stroke="#C4B5FD" strokeWidth="1.4"/><path d="M4 11v4c0 1.933 3.134 3.5 7 3.5s7-1.567 7-3.5v-4" stroke="#C4B5FD" strokeWidth="1.4"/></svg>,
  },
  {
    accent: '#A8FF3E', accentBg: 'rgba(168,255,62,0.07)', accentBorder: 'rgba(168,255,62,0.15)',
    number: '02', title: 'Stellar-Native Payments',
    body: 'Automatic wallet provisioning per agent. Trustlines for USDC, real or simulated micropayments, and Soroban smart contract guardrails.',
    tags: ['Stellar', 'XLM', 'Soroban'],
    icon: <svg width="22" height="22" viewBox="0 0 22 22" fill="none"><circle cx="11" cy="11" r="8.5" stroke="#A8FF3E" strokeWidth="1.4"/><path d="M11 5.5v11M8 8l7 3-7 3" stroke="#A8FF3E" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/></svg>,
  },
  {
    accent: '#818CF8', accentBg: 'rgba(129,140,248,0.08)', accentBorder: 'rgba(129,140,248,0.15)',
    number: '03', title: 'x402 Pay-per-Action',
    body: 'APIs gated by micropayment instead of API keys. Agents unlock resources autonomously — enabling pay-per-call services and agent marketplaces.',
    tags: ['x402', 'Micropayments', 'No API Keys'],
    icon: <svg width="22" height="22" viewBox="0 0 22 22" fill="none"><rect x="3" y="6.5" width="16" height="11" rx="2" stroke="#818CF8" strokeWidth="1.4"/><path d="M3 10h16" stroke="#818CF8" strokeWidth="1.4"/><path d="M6.5 14h3.5M16 14h1.5" stroke="#818CF8" strokeWidth="1.4" strokeLinecap="round"/></svg>,
  },
  {
    accent: '#34D399', accentBg: 'rgba(52,211,153,0.07)', accentBorder: 'rgba(52,211,153,0.15)',
    number: '04', title: 'Team-Based Agent Systems',
    body: 'Create teams with shared budgets, memory, and objectives. Agents collaborate, delegate, and coordinate through value exchange.',
    tags: ['Multi-Agent', 'Shared Memory', 'Delegation'],
    icon: <svg width="22" height="22" viewBox="0 0 22 22" fill="none"><circle cx="8" cy="8" r="3.5" stroke="#34D399" strokeWidth="1.4"/><circle cx="16" cy="8" r="3.5" stroke="#34D399" strokeWidth="1.4"/><circle cx="12" cy="16" r="3.5" stroke="#34D399" strokeWidth="1.4"/><path d="M11.5 8h-3M13 13l2-5M10 13l-2 2" stroke="#34D399" strokeWidth="1" strokeDasharray="1.5 1.5"/></svg>,
  },
  {
    accent: '#FB923C', accentBg: 'rgba(251,146,60,0.07)', accentBorder: 'rgba(251,146,60,0.15)',
    number: '05', title: 'Reliability Lab',
    body: 'Simulate rogue transactions, hallucination tests, context failures, and economic decision testing before deploying to production.',
    tags: ['Simulation', 'Failure Testing', 'Explainability'],
    icon: <svg width="22" height="22" viewBox="0 0 22 22" fill="none"><path d="M8 3h6v8l3.5 7H4.5L8 11V3z" stroke="#FB923C" strokeWidth="1.4" strokeLinejoin="round"/><path d="M8 8h6" stroke="#FB923C" strokeWidth="1.4" strokeLinecap="round"/><path d="M11 13v2.5M11 17v.5" stroke="#FB923C" strokeWidth="1.4" strokeLinecap="round"/></svg>,
  },
  {
    accent: '#67E8F9', accentBg: 'rgba(103,232,249,0.07)', accentBorder: 'rgba(103,232,249,0.15)',
    number: '06', title: 'Agent Sandbox & Runtime',
    body: 'Create, configure, and run agents with defined goals, budgets, and constraints. Switch between simulation and live execution instantly.',
    tags: ['Sandbox', 'Simulation Mode', 'Live Execution'],
    icon: <svg width="22" height="22" viewBox="0 0 22 22" fill="none"><rect x="3" y="3" width="16" height="16" rx="2.5" stroke="#67E8F9" strokeWidth="1.4"/><path d="M7 10l3 3 5-5" stroke="#67E8F9" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/><path d="M3 7.5h16" stroke="#67E8F9" strokeWidth="1.4"/></svg>,
  },
]

const container = { hidden: {}, show: { transition: { staggerChildren: 0.07 } } }
const item = { hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0, transition: { duration: 0.45, ease: [0.25,0.1,0.25,1] } } }

export function Features() {
  return (
    <section style={{ background: '#0F0F18', borderTop: '1px solid rgba(255,255,255,0.06)', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
      <div className="max-w-[1280px] mx-auto px-6 md:px-8 py-20 md:py-28">

        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div>
            <div className="inline-block font-mono text-[10px] font-bold uppercase tracking-widest mb-4 px-2.5 py-1.5 rounded-full"
              style={{ background: 'rgba(124,58,237,0.12)', border: '1px solid rgba(124,58,237,0.25)', color: '#C4B5FD' }}>
              Core Capabilities
            </div>
            <h2 className="font-display font-bold text-4xl md:text-5xl leading-tight" style={{ color: '#EDECF4' }}>
              Everything agents need<br />to operate autonomously.
            </h2>
          </div>
          <p className="text-base max-w-sm" style={{ color: '#6B6B85' }}>
            Six infrastructure primitives that transform agents from stateless tools into stateful economic entities.
          </p>
        </div>

        <motion.div variants={container} initial="hidden" whileInView="show" viewport={{ once: true, margin: '-80px' }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {features.map(f => (
            <motion.div key={f.number} variants={item}
              className="rounded-2xl p-6 cursor-default transition-all duration-300 hover:-translate-y-0.5"
              style={{ background: '#14141F', border: `1px solid ${f.accentBorder}` }}
              onMouseEnter={e => ((e.currentTarget as HTMLElement).style.boxShadow = `0 8px 32px ${f.accent}14`)}
              onMouseLeave={e => ((e.currentTarget as HTMLElement).style.boxShadow = 'none')}
            >
              <div className="flex items-start justify-between mb-5">
                <div className="w-11 h-11 rounded-xl flex items-center justify-center" style={{ background: f.accentBg }}>
                  {f.icon}
                </div>
                <span className="font-mono text-xs font-bold" style={{ color: f.accent + '50' }}>{f.number}</span>
              </div>
              <h3 className="font-display font-bold text-lg mb-2" style={{ color: '#EDECF4' }}>{f.title}</h3>
              <p className="text-sm leading-relaxed mb-5" style={{ color: '#6B6B85' }}>{f.body}</p>
              <div className="flex flex-wrap gap-1.5">
                {f.tags.map(tag => (
                  <span key={tag} className="font-mono text-[10px] font-bold px-2 py-0.5 rounded-full"
                    style={{ background: f.accentBg, color: f.accent, border: `1px solid ${f.accentBorder}` }}>
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
