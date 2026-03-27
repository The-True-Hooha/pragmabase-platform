'use client'

import { useEffect, useState, useRef } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import { SectionLabel } from '@/components/ui/section-label'

// ─── Eval Dashboard Visual ─────────────────────────────────────────────────────

type Run = { id: string; suite: string; passed: number; total: number; time: string; status: 'pass' | 'fail' | 'running' }

const RUNS_INIT: Run[] = [
  { id: 'run_a91f', suite: 'production-v2', passed: 46, total: 47, time: '1.8s', status: 'fail' },
  { id: 'run_b82e', suite: 'regression-set', passed: 32, total: 32, time: '2.1s', status: 'pass' },
  { id: 'run_c74d', suite: 'tool-calls', passed: 18, total: 20, time: '1.4s', status: 'fail' },
]

const SPARKLINE = [62, 71, 68, 79, 74, 83, 80, 88, 85, 92, 89, 97]

function sparklinePath(data: number[]): string {
  const w = 120
  const h = 36
  const max = Math.max(...data)
  const min = Math.min(...data)
  const range = max - min || 1
  const pts = data.map((v, i) => {
    const x = (i / (data.length - 1)) * w
    const y = h - ((v - min) / range) * h
    return `${x},${y}`
  })
  return `M ${pts.join(' L ')}`
}

function EvalDashboard() {
  const [runs, setRuns] = useState<Run[]>(RUNS_INIT)
  const [tick, setTick] = useState(0)
  const [activeRun, setActiveRun] = useState<string | null>(null)

  // Simulate a new run appearing every 3.5s
  useEffect(() => {
    const t = setInterval(() => {
      setTick((n) => n + 1)
      const newRun: Run = {
        id: `run_${Math.random().toString(36).slice(2, 6)}`,
        suite: ['production-v2', 'regression-set', 'tool-calls', 'e2e-suite'][Math.floor(Math.random() * 4)],
        passed: 0,
        total: Math.floor(Math.random() * 20) + 28,
        time: '—',
        status: 'running',
      }
      setRuns((prev) => {
        const updated = [newRun, ...prev.slice(0, 3)]
        return updated
      })
      // Complete after 1.4s
      setTimeout(() => {
        const passed = newRun.total - (Math.random() > 0.75 ? 1 : 0)
        setRuns((prev) =>
          prev.map((r) =>
            r.id === newRun.id
              ? { ...r, passed, time: `${(Math.random() * 1.5 + 1).toFixed(1)}s`, status: passed === r.total ? 'pass' : 'fail' }
              : r
          )
        )
      }, 1400)
    }, 3500)
    return () => clearInterval(t)
  }, [])

  const passRate = 97.4

  return (
    <div
      className="rounded-2xl overflow-hidden w-full"
      style={{
        background: 'rgba(8,12,28,0.92)',
        border: '1px solid rgba(255,255,255,0.08)',
        boxShadow: '0 40px 100px rgba(0,0,0,0.55), inset 0 1px 0 rgba(255,255,255,0.05)',
        backdropFilter: 'blur(20px)',
      }}
    >
      {/* Toolbar */}
      <div
        className="flex items-center gap-2 px-4 py-3"
        style={{ borderBottom: '1px solid rgba(255,255,255,0.06)' }}
      >
        <span className="w-3 h-3 rounded-full" style={{ background: '#FF5F57' }} />
        <span className="w-3 h-3 rounded-full" style={{ background: '#FEBC2E' }} />
        <span className="w-3 h-3 rounded-full" style={{ background: '#28C840' }} />
        <div className="ml-3 flex items-center gap-2">
          <span
            className="font-mono text-[10px] px-2 py-0.5 rounded"
            style={{ background: 'rgba(37,99,235,0.2)', color: '#93C5FD' }}
          >
            aegis dashboard
          </span>
        </div>
        <div className="ml-auto flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
          <span className="font-mono text-[10px]" style={{ color: 'rgba(255,255,255,0.2)' }}>live</span>
        </div>
      </div>

      {/* Metrics strip */}
      <div
        className="grid grid-cols-3 text-center"
        style={{ borderBottom: '1px solid rgba(255,255,255,0.06)' }}
      >
        {[
          { val: `${passRate}%`, lbl: 'pass rate', color: '#34D399' },
          { val: '10M+', lbl: 'evals run', color: '#93C5FD' },
          { val: '<2s', lbl: 'cold start', color: '#FCD34D' },
        ].map((m, i) => (
          <div
            key={m.lbl}
            className="py-3 px-3"
            style={{ borderRight: i < 2 ? '1px solid rgba(255,255,255,0.06)' : 'none' }}
          >
            <div className="font-mono text-base font-bold" style={{ color: m.color }}>{m.val}</div>
            <div className="font-mono text-[9px] uppercase tracking-wider mt-0.5" style={{ color: 'rgba(255,255,255,0.25)' }}>{m.lbl}</div>
          </div>
        ))}
      </div>

      {/* Sparkline */}
      <div className="px-4 pt-3 pb-1 flex items-center justify-between">
        <span className="font-mono text-[9px] uppercase tracking-wider" style={{ color: 'rgba(255,255,255,0.2)' }}>
          pass rate · 12h
        </span>
        <svg width="120" height="36" viewBox="0 0 120 36" fill="none">
          <defs>
            <linearGradient id="spark-fill" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#2563EB" stopOpacity="0.3" />
              <stop offset="100%" stopColor="#2563EB" stopOpacity="0" />
            </linearGradient>
          </defs>
          <path
            d={`${sparklinePath(SPARKLINE)} L 120,36 L 0,36 Z`}
            fill="url(#spark-fill)"
          />
          <path
            d={sparklinePath(SPARKLINE)}
            stroke="#3B82F6"
            strokeWidth="1.5"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          {/* Latest dot */}
          <circle cx="120" cy={36 - ((SPARKLINE[SPARKLINE.length - 1] - Math.min(...SPARKLINE)) / (Math.max(...SPARKLINE) - Math.min(...SPARKLINE))) * 36} r="3" fill="#60A5FA" />
        </svg>
      </div>

      {/* Run list */}
      <div className="px-4 pb-4 space-y-1.5">
        <AnimatePresence initial={false} mode="popLayout">
          {runs.map((run) => (
            <motion.div
              key={run.id}
              layout
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.22 }}
              className="flex items-center gap-3 rounded-lg px-3 py-2.5 cursor-pointer transition-colors"
              style={{
                background: 'rgba(255,255,255,0.04)',
                border: '1px solid rgba(255,255,255,0.05)',
              }}
              onMouseEnter={(e) => { e.currentTarget.style.background = 'rgba(255,255,255,0.07)' }}
              onMouseLeave={(e) => { e.currentTarget.style.background = 'rgba(255,255,255,0.04)' }}
            >
              {/* Status dot */}
              <span
                className={`w-1.5 h-1.5 rounded-full shrink-0 ${run.status === 'running' ? 'animate-pulse' : ''}`}
                style={{
                  background: run.status === 'pass' ? '#34D399' : run.status === 'fail' ? '#F87171' : '#FCD34D',
                }}
              />

              {/* Suite */}
              <span className="font-mono text-xs flex-1 truncate" style={{ color: 'rgba(255,255,255,0.55)' }}>
                {run.suite}
              </span>

              {/* Pass count */}
              {run.status !== 'running' && (
                <span className="font-mono text-[10px]" style={{ color: 'rgba(255,255,255,0.3)' }}>
                  {run.passed}/{run.total}
                </span>
              )}

              {/* Time */}
              <span className="font-mono text-[10px] shrink-0" style={{ color: 'rgba(255,255,255,0.25)' }}>
                {run.status === 'running' ? '···' : run.time}
              </span>

              {/* Status badge */}
              <span
                className="font-mono text-[9px] uppercase tracking-wider px-1.5 py-0.5 rounded"
                style={{
                  background:
                    run.status === 'pass'
                      ? 'rgba(52,211,153,0.12)'
                      : run.status === 'fail'
                      ? 'rgba(248,113,113,0.12)'
                      : 'rgba(252,211,77,0.12)',
                  color:
                    run.status === 'pass' ? '#34D399' : run.status === 'fail' ? '#F87171' : '#FCD34D',
                }}
              >
                {run.status}
              </span>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </div>
  )
}

// ─── Floating metric chips ────────────────────────────────────────────────────

type Badge = { label: string; value: string; pos: React.CSSProperties; delay: number }

const BADGES: Badge[] = [
  { label: 'cold start', value: '<2s', pos: { top: '-18px', right: '28px' }, delay: 0.75 },
  { label: 'AgentBench', value: '#1', pos: { top: '50%', right: '-24px', transform: 'translateY(-50%)' }, delay: 0.95 },
  { label: 'uptime SLA', value: '99.9%', pos: { bottom: '32px', left: '-20px' }, delay: 1.1 },
]

// ─── Grid background ──────────────────────────────────────────────────────────

function HeroGrid() {
  return (
    <svg
      className="absolute inset-0 w-full h-full pointer-events-none"
      aria-hidden="true"
      style={{ opacity: 0.15 }}
    >
      <defs>
        <pattern id="hero-grid" x="0" y="0" width="48" height="48" patternUnits="userSpaceOnUse">
          <path d="M 48 0 L 0 0 0 48" fill="none" stroke="rgba(255,255,255,0.7)" strokeWidth="0.4" />
        </pattern>
        <radialGradient id="grid-fade" cx="50%" cy="30%" r="65%">
          <stop offset="0%" stopColor="white" stopOpacity="1" />
          <stop offset="100%" stopColor="white" stopOpacity="0" />
        </radialGradient>
        <mask id="grid-mask">
          <rect width="100%" height="100%" fill="url(#grid-fade)" />
        </mask>
      </defs>
      <rect width="100%" height="100%" fill="url(#hero-grid)" mask="url(#grid-mask)" />
    </svg>
  )
}

// ─── Hero ─────────────────────────────────────────────────────────────────────

const words1 = ['Your', 'agent', 'works', 'in', 'demos.']
const words2 = ['Does', 'it', 'work', 'in', 'production?']

export function Hero() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-40px' })

  return (
    <section
      ref={ref}
      className="relative overflow-hidden"
      style={{
        background: 'linear-gradient(160deg, #0F1F5C 0%, #1740A6 40%, #2563EB 75%, #3B82F6 100%)',
        paddingTop: '72px',
      }}
    >
      <HeroGrid />

      {/* Top-right radial glow */}
      <div
        className="absolute pointer-events-none"
        style={{
          top: '-15%', right: '-8%',
          width: '560px', height: '560px',
          background: 'radial-gradient(circle, rgba(96,165,250,0.14) 0%, transparent 65%)',
        }}
        aria-hidden="true"
      />

      <div className="relative max-w-[1280px] mx-auto px-8">
        {/* Section label */}
        <div
          className="flex justify-between text-xs uppercase tracking-widest mb-12 pb-4 font-mono"
          style={{ color: 'rgba(255,255,255,0.3)', borderBottom: '1px solid rgba(255,255,255,0.1)' }}
        >
          <span>HERO</span>
          <span>[1/8]</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.15fr] gap-12 xl:gap-24 items-center pb-20">
          {/* ── Left ── */}
          <div>
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, ease: 'easeOut' }}
              className="inline-flex items-center gap-2 rounded-full px-3.5 py-1.5 text-xs font-mono mb-8"
              style={{
                background: 'rgba(255,255,255,0.09)',
                border: '1px solid rgba(255,255,255,0.14)',
                color: 'rgba(255,255,255,0.75)',
                backdropFilter: 'blur(8px)',
              }}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              Now in Beta — #1 on AgentBench →
            </motion.div>

            {/* Headline */}
            <h1
              className="font-display font-extrabold text-white leading-[1.04] tracking-tight mb-6"
              style={{ fontSize: 'clamp(40px, 5.2vw, 68px)' }}
            >
              {words1.map((word, i) => (
                <motion.span
                  key={`w1-${i}`}
                  initial={{ opacity: 0, y: 22 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.42, ease: 'easeOut', delay: 0.1 + i * 0.055 }}
                  className="inline-block mr-[0.22em]"
                >
                  {word}
                </motion.span>
              ))}
              <br />
              {words2.map((word, i) => (
                <motion.span
                  key={`w2-${i}`}
                  initial={{ opacity: 0, y: 22 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.42, ease: 'easeOut', delay: 0.38 + i * 0.055 }}
                  className="inline-block mr-[0.22em]"
                  style={
                    word === 'production?'
                      ? {
                          background: 'linear-gradient(120deg, #BAE6FD 0%, #FFFFFF 70%)',
                          WebkitBackgroundClip: 'text',
                          WebkitTextFillColor: 'transparent',
                          backgroundClip: 'text',
                        }
                      : {}
                  }
                >
                  {word}
                </motion.span>
              ))}
            </h1>

            {/* Sub */}
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, ease: 'easeOut', delay: 0.6 }}
              className="text-base leading-relaxed mb-8 max-w-[460px]"
              style={{ color: 'rgba(255,255,255,0.6)' }}
            >
              Eval infrastructure for AI teams — sandbox execution, regression
              detection, LLM proxy, and CI integration.{' '}
              <span style={{ color: 'rgba(255,255,255,0.88)', fontWeight: 500 }}>
                Not just scoring. Complete reliability.
              </span>
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.35, ease: 'easeOut', delay: 0.72 }}
              className="flex flex-wrap gap-3 mb-7"
            >
              <button
                className="font-semibold text-sm px-7 py-3.5 rounded-xl text-accent transition-all duration-200"
                style={{ background: '#FFFFFF', boxShadow: '0 4px 20px rgba(0,0,0,0.22)' }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow = '0 8px 32px rgba(0,0,0,0.35)'
                  e.currentTarget.style.transform = 'translateY(-1px)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow = '0 4px 20px rgba(0,0,0,0.22)'
                  e.currentTarget.style.transform = 'translateY(0)'
                }}
              >
                Start Building →
              </button>
              <button
                className="font-medium text-sm px-7 py-3.5 rounded-xl text-white transition-all duration-200"
                style={{
                  background: 'rgba(255,255,255,0.08)',
                  border: '1px solid rgba(255,255,255,0.18)',
                }}
                onMouseEnter={(e) => { e.currentTarget.style.background = 'rgba(255,255,255,0.15)' }}
                onMouseLeave={(e) => { e.currentTarget.style.background = 'rgba(255,255,255,0.08)' }}
              >
                Talk to Founder
              </button>
            </motion.div>

            {/* Sub CTAs */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ duration: 0.35, delay: 0.86 }}
              className="flex flex-wrap items-center gap-5 text-sm"
            >
              <a
                href="#"
                className="transition-colors"
                style={{ color: 'rgba(255,255,255,0.5)' }}
                onMouseEnter={(e) => (e.currentTarget.style.color = 'rgba(255,255,255,0.85)')}
                onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(255,255,255,0.5)')}
              >
                Get a hosted dashboard →
              </a>
              <code
                className="font-mono text-xs px-3 py-1.5 rounded-lg select-all"
                style={{
                  background: 'rgba(0,0,0,0.28)',
                  border: '1px solid rgba(255,255,255,0.1)',
                  color: '#BAE6FD',
                }}
              >
                npx aegis init
              </code>
            </motion.div>
          </div>

          {/* ── Right — Eval Dashboard ── */}
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease: 'easeOut', delay: 0.25 }}
            className="relative hidden lg:block"
          >
            <EvalDashboard />

            {/* Floating badges */}
            {BADGES.map((b) => (
              <motion.div
                key={b.label}
                initial={{ opacity: 0, scale: 0.82, y: 6 }}
                animate={inView ? { opacity: 1, scale: 1, y: 0 } : {}}
                transition={{ duration: 0.3, ease: 'easeOut', delay: b.delay }}
                className="absolute pointer-events-none select-none rounded-xl px-3.5 py-2.5"
                style={{
                  ...b.pos,
                  background: 'rgba(255,255,255,0.97)',
                  border: '1px solid rgba(255,255,255,0.2)',
                  boxShadow: '0 8px 32px rgba(0,0,0,0.2)',
                }}
              >
                <span className="block font-mono text-xl font-bold leading-none mb-0.5 text-accent">
                  {b.value}
                </span>
                <span className="block text-[9px] font-mono uppercase tracking-wider text-muted">
                  {b.label}
                </span>
              </motion.div>
            ))}

            {/* Glow behind dashboard */}
            <div
              className="absolute -inset-8 -z-10 rounded-3xl blur-3xl opacity-30"
              style={{ background: 'radial-gradient(ellipse, rgba(37,99,235,0.5), transparent 70%)' }}
              aria-hidden="true"
            />
          </motion.div>
        </div>
      </div>

      {/* SVG wave divider */}
      <div aria-hidden="true" style={{ lineHeight: 0, marginTop: '-2px' }}>
        <svg viewBox="0 0 1440 72" preserveAspectRatio="none" className="w-full block" style={{ height: '72px' }}>
          <path d="M0,36 C320,72 640,0 960,36 C1120,54 1280,18 1440,36 L1440,72 L0,72 Z" fill="#F4F7FF" />
        </svg>
      </div>
    </section>
  )
}
