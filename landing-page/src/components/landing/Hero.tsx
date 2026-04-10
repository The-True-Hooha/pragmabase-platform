'use client'

import { motion } from 'framer-motion'

const terminalLines = [
  { label: 'THINKING',    text: 'Analyzing market data feed...',       color: '#C4B5FD' },
  { label: 'MEMORY',      text: 'Retrieved 47 past decisions',         color: '#818CF8' },
  { label: 'TRANSACTING', text: 'Sending 2.50 XLM → api:weather',      color: '#F59E0B' },
  { label: 'EARNING',     text: 'Received 0.80 XLM ← task:report',     color: '#A8FF3E' },
  { label: 'STORING',     text: 'Saving outcome to long-term memory',  color: '#818CF8' },
]

export function Hero() {
  return (
    <section className="relative overflow-hidden min-h-[calc(100vh-4.5rem)] flex flex-col" style={{ background: '#0A0A0F' }}>

      {/* Purple glow — center left */}
      <div className="absolute top-0 left-1/4 w-[600px] h-[600px] pointer-events-none"
        style={{ background: 'radial-gradient(ellipse, rgba(124,58,237,0.18) 0%, transparent 65%)' }} />
      {/* Lime glow — top right */}
      <div className="absolute top-[-80px] right-[15%] w-[400px] h-[400px] pointer-events-none"
        style={{ background: 'radial-gradient(ellipse, rgba(168,255,62,0.08) 0%, transparent 65%)' }} />

      {/* Dot grid */}
      <div className="absolute inset-0 dot-grid opacity-100 pointer-events-none" />

      {/* Full-bleed right purple gradient — desktop only */}
      <div className="absolute inset-y-0 right-0 hidden lg:block pointer-events-none" style={{
        width: '50%',
        background: 'linear-gradient(145deg, #1A0A3E 0%, #2D1463 35%, #3B1A7A 65%, #4C2A8F 100%)',
        borderLeft: '1px solid rgba(124,58,237,0.25)',
      }} />

      <div className="relative max-w-[1280px] mx-auto px-6 md:px-8 flex-1 w-full flex flex-col lg:grid lg:grid-cols-2">

        {/* ── LEFT ── */}
        <div className="flex flex-col justify-center py-20 lg:py-28 lg:pr-14">

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full w-fit mb-7"
            style={{ background: 'rgba(168,255,62,0.1)', border: '1px solid rgba(168,255,62,0.2)' }}
          >
            <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: '#A8FF3E' }} />
            <span className="text-xs font-mono font-semibold tracking-wide" style={{ color: '#A8FF3E' }}>POWERED BY STELLAR</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.07 }}
            className="font-display font-bold text-[52px] md:text-[62px] lg:text-[64px] leading-[1.04] tracking-tight mb-6"
            style={{ color: '#EDECF4' }}
          >
            Agents that{' '}
            <span style={{ color: '#C4B5FD' }} className="relative inline-block">
              remember
              <svg className="absolute -bottom-1 left-0 w-full" height="5" viewBox="0 0 200 5" preserveAspectRatio="none">
                <path d="M0 4 Q50 0 100 3 Q150 6 200 2" stroke="#7C3AED" strokeWidth="2" fill="none" strokeLinecap="round"/>
              </svg>
            </span>
            ,{' '}
            <span style={{ color: '#A8FF3E' }}>pay</span>
            ,<br className="hidden sm:block" />{' '}
            and coordinate.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.17 }}
            className="text-[17px] leading-relaxed mb-10 max-w-[460px]"
            style={{ color: '#9E9EB8' }}
          >
            Pragmabase is the economic + cognitive operating system for autonomous agents —
            real wallets, persistent memory, and programmable guardrails on Stellar.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.25 }}
            className="flex flex-wrap gap-3 mb-12"
          >
            <a href="/playground"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-sm transition-all"
              style={{ background: '#A8FF3E', color: '#0A0A0F', boxShadow: '0 8px 32px rgba(168,255,62,0.25)' }}
              onMouseEnter={e => ((e.currentTarget as HTMLElement).style.background = '#BFFF66')}
              onMouseLeave={e => ((e.currentTarget as HTMLElement).style.background = '#A8FF3E')}
            >
              Launch Playground
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M2.5 7h9M7 2.5l4.5 4.5L7 11.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
            <a href="/docs"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm transition-all"
              style={{ border: '1px solid rgba(255,255,255,0.12)', color: '#EDECF4' }}
              onMouseEnter={e => ((e.currentTarget as HTMLElement).style.background = 'rgba(255,255,255,0.05)')}
              onMouseLeave={e => ((e.currentTarget as HTMLElement).style.background = 'transparent')}
            >
              Read the docs
            </a>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.38 }}
            className="flex items-center gap-8 pt-8"
            style={{ borderTop: '1px solid rgba(255,255,255,0.07)' }}
          >
            {[
              { val: 'Stellar', label: 'Economic Layer', color: '#C4B5FD' },
              { val: 'x402',    label: 'Pay-per-Action', color: '#A8FF3E' },
              { val: 'Qdrant',  label: 'Vector Memory',  color: '#818CF8' },
            ].map(s => (
              <div key={s.val}>
                <div className="font-display font-bold text-lg" style={{ color: s.color }}>{s.val}</div>
                <div className="text-xs font-mono mt-0.5" style={{ color: '#6B6B85' }}>{s.label}</div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* ── RIGHT — Terminal ── */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.12, ease: [0.25, 0.1, 0.25, 1] }}
          className="flex flex-col justify-center py-12 lg:py-28 lg:pl-10"
        >
          <div className="relative rounded-2xl overflow-hidden lg:rounded-none lg:bg-transparent"
            style={{ background: 'linear-gradient(145deg, #1A0A3E 0%, #2D1463 35%, #3B1A7A 100%)' }}>

            {/* Grid lines */}
            <div className="absolute inset-0 opacity-[0.06] pointer-events-none" style={{
              backgroundImage: 'linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)',
              backgroundSize: '36px 36px',
            }} />
            {/* Lime glow */}
            <div className="absolute top-0 right-0 w-64 h-64 pointer-events-none"
              style={{ background: 'radial-gradient(ellipse, rgba(168,255,62,0.06) 0%, transparent 70%)' }} />

            <div className="relative p-7 md:p-9 lg:p-10">
              {/* Header */}
              <div className="flex items-center justify-between mb-6">
                <div>
                  <div className="font-mono text-[10px] uppercase tracking-widest mb-1" style={{ color: 'rgba(196,181,253,0.4)' }}>AGENT RUNTIME</div>
                  <div className="font-display font-bold text-[18px] leading-tight text-white">Roku #0x4f2a…e91b</div>
                </div>
                <div className="flex items-center gap-2 px-3 py-1.5 rounded-full"
                  style={{ background: 'rgba(168,255,62,0.1)', border: '1px solid rgba(168,255,62,0.2)' }}>
                  <span className="w-2 h-2 rounded-full animate-pulse" style={{ background: '#A8FF3E' }} />
                  <span className="text-xs font-mono font-bold" style={{ color: '#A8FF3E' }}>LIVE</span>
                </div>
              </div>

              {/* Log lines */}
              <div className="space-y-2.5 mb-6">
                {terminalLines.map((line, i) => (
                  <motion.div key={i}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5 + i * 0.14, duration: 0.3 }}
                    className="flex items-center gap-3 rounded-lg px-3.5 py-2.5"
                    style={{ background: 'rgba(255,255,255,0.05)' }}
                  >
                    <span className="font-mono text-[9px] font-bold px-1.5 py-0.5 rounded shrink-0 uppercase"
                      style={{ background: line.color + '22', color: line.color }}>
                      {line.label}
                    </span>
                    <span className="font-mono text-xs" style={{ color: 'rgba(237,236,244,0.65)' }}>{line.text}</span>
                  </motion.div>
                ))}
              </div>

              {/* Wallet footer */}
              <div className="grid grid-cols-2 gap-4 pt-5" style={{ borderTop: '1px solid rgba(255,255,255,0.1)' }}>
                <div>
                  <div className="font-mono text-[10px] uppercase tracking-widest mb-1.5" style={{ color: 'rgba(196,181,253,0.4)' }}>WALLET BALANCE</div>
                  <div className="font-display font-bold text-white text-2xl leading-none">
                    128.40 <span className="text-sm font-mono" style={{ color: 'rgba(255,255,255,0.4)' }}>XLM</span>
                  </div>
                </div>
                <div>
                  <div className="font-mono text-[10px] uppercase tracking-widest mb-1.5" style={{ color: 'rgba(196,181,253,0.4)' }}>MEMORY VECTORS</div>
                  <div className="font-display font-bold text-white text-2xl leading-none">
                    1,247 <span className="text-sm font-mono" style={{ color: 'rgba(255,255,255,0.4)' }}>stored</span>
                  </div>
                </div>
              </div>

              {/* Transactions */}
              <div className="mt-4 pt-4 space-y-1.5" style={{ borderTop: '1px solid rgba(255,255,255,0.07)' }}>
                <div className="flex justify-between font-mono text-[11px]">
                  <span style={{ color: 'rgba(255,255,255,0.35)' }}>→ api:weather</span>
                  <span className="font-semibold" style={{ color: '#F59E0B' }}>−2.50 XLM</span>
                </div>
                <div className="flex justify-between font-mono text-[11px]">
                  <span style={{ color: 'rgba(255,255,255,0.35)' }}>← task:report</span>
                  <span className="font-semibold" style={{ color: '#A8FF3E' }}>+0.80 XLM</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
