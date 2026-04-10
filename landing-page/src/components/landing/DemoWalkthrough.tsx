'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'

const steps = [
  {
    label: 'Spawn agent',
    color: '#A8FF3E',
    terminal: [
      { c: 'dim',  t: '$ pb agent create --name roku --network testnet' },
      { c: 'lime', t: '✓ Agent "roku" created' },
      { c: 'text', t: '  id:      0x4f2a9c...' },
      { c: 'text', t: '  wallet:  GBZX...3AED' },
      { c: 'text', t: '  balance: 100.00 XLM (testnet)' },
      { c: 'text', t: '  memory:  roku/default (Qdrant)' },
      { c: 'text', t: '  policy:  BudgetGuardrail (Soroban)' },
    ],
  },
  {
    label: 'Run a task',
    color: '#C4B5FD',
    terminal: [
      { c: 'dim',  t: '$ roku.run({ task: "Analyze ETH/XLM trends", budget: { xlm: 0.5 } })' },
      { c: 'mute', t: '  › Retrieving memory context from Qdrant...' },
      { c: 'mute', t: '    found 3 relevant entries (last 24h)' },
      { c: 'mute', t: '  › Requesting price data — x402 payment...' },
      { c: 'mute', t: '    HTTP 402 → paying 0.003 XLM → HTTP 200' },
      { c: 'mute', t: '  › Soroban guardrail check: 0.003/0.5 ✓' },
      { c: 'mute', t: '  › Reasoning: 4 steps' },
      { c: 'lime', t: '  ✓ Task complete' },
      { c: 'text', t: '  cost:         0.003 XLM' },
      { c: 'text', t: '  memoryWrites: 2' },
      { c: 'text', t: '  txHash:       a7b3f2...' },
    ],
  },
  {
    label: 'Inspect audit trail',
    color: '#818CF8',
    terminal: [
      { c: 'dim',  t: '$ roku.trace({ txHash: "a7b3f2..." })' },
      { c: 'text', t: '  step 1: memory_read  → 3 entries' },
      { c: 'text', t: '  step 2: x402_payment → 0.003 XLM (GBZX→GDQK)' },
      { c: 'text', t: '  step 3: llm_call     → 1,240 tokens' },
      { c: 'text', t: '  step 4: memory_write → 2 entries' },
      { c: 'lime', t: '  total cost: 0.003 XLM ($0.0004)' },
      { c: 'lime', t: '  duration:   4.2s (incl. Stellar finality)' },
      { c: 'lime', t: '  policy:     BudgetGuardrail — PASSED' },
    ],
  },
  {
    label: 'Simulate failure',
    color: '#FB923C',
    terminal: [
      { c: 'dim',  t: '$ pb lab simulate --scenario rogue-overspend --agent roku' },
      { c: 'mute', t: '  › Injecting adversarial prompt...' },
      { c: 'mute', t: '  › Agent attempts: payment of 2.0 XLM' },
      { c: 'mute', t: '  › Soroban BudgetGuardrail invoked...' },
      { c: 'warn', t: '  ✗ Transaction rejected: budget cap exceeded' },
      { c: 'warn', t: '    attempted: 2.000 XLM' },
      { c: 'warn', t: '    limit:     0.500 XLM' },
      { c: 'lime', t: '  ✓ Guardrail held — no funds moved' },
      { c: 'text', t: '  scenario: PASSED (agent safely contained)' },
    ],
  },
]

const colorMap = {
  dim:  'rgba(255,255,255,0.15)',
  mute: 'rgba(255,255,255,0.35)',
  text: '#9E9EB8',
  lime: '#A8FF3E',
  warn: '#FB923C',
}

export function DemoWalkthrough() {
  const [active, setActive] = useState(0)
  const step = steps[active]

  return (
    <section style={{ background: '#0A0A0F', borderTop: '1px solid rgba(255,255,255,0.06)' }}>
      <div className="max-w-[1280px] mx-auto px-6 md:px-8 py-20 md:py-28">

        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
            <div className="inline-block font-mono text-[10px] font-bold uppercase tracking-widest mb-4 px-2.5 py-1.5 rounded-full"
              style={{ background: 'rgba(196,181,253,0.1)', border: '1px solid rgba(196,181,253,0.2)', color: '#C4B5FD' }}>
              Live Demo
            </div>
            <h2 className="font-display font-bold text-4xl md:text-5xl leading-tight mb-4" style={{ color: '#EDECF4' }}>
              Watch Roku work.
            </h2>
            <p className="text-base leading-relaxed" style={{ color: '#6B6B85' }}>
              Step through a complete agent run — from spawn to audit trail. Every command
              is real SDK output from Stellar testnet.
            </p>
          </motion.div>
        </div>

        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
          {/* Step tabs */}
          <div className="flex flex-wrap gap-2 mb-5">
            {steps.map((s, i) => (
              <button key={s.label} onClick={() => setActive(i)}
                className="font-mono text-xs font-bold px-4 py-2.5 rounded-xl transition-all"
                style={active === i
                  ? { background: s.color + '18', color: s.color, border: `1px solid ${s.color}40` }
                  : { background: 'rgba(255,255,255,0.04)', color: 'rgba(255,255,255,0.3)', border: '1px solid rgba(255,255,255,0.08)' }
                }>
                <span className="opacity-50 mr-1.5">0{i + 1}</span>{s.label}
              </button>
            ))}
          </div>

          {/* Terminal */}
          <div className="rounded-2xl overflow-hidden" style={{ background: '#060609', border: `1px solid ${step.color}20`, boxShadow: `0 0 60px ${step.color}08` }}>
            {/* Chrome */}
            <div className="flex items-center gap-3 px-5 py-3.5" style={{ borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
              <div className="flex gap-1.5">
                <span className="w-3 h-3 rounded-full" style={{ background: '#FF5F57' }} />
                <span className="w-3 h-3 rounded-full" style={{ background: '#FEBC2E' }} />
                <span className="w-3 h-3 rounded-full" style={{ background: '#28C840' }} />
              </div>
              <span className="font-mono text-[10px]" style={{ color: 'rgba(255,255,255,0.15)' }}>
                pragmabase — testnet — {step.label}
              </span>
              <div className="ml-auto flex items-center gap-1.5 font-mono text-[9px]" style={{ color: step.color + '80' }}>
                <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: step.color }} />
                Stellar testnet
              </div>
            </div>

            {/* Output */}
            <div className="p-6 min-h-[260px]">
              <AnimateLines lines={step.terminal} key={active} />
              <div className="flex items-center gap-1 mt-4">
                <span style={{ color: 'rgba(255,255,255,0.15)' }}>$</span>
                <span className="inline-block w-2 h-4 ml-1 animate-pulse" style={{ background: step.color, opacity: 0.7 }} />
              </div>
            </div>

            {/* Footer bar */}
            <div className="flex items-center justify-between px-5 py-3" style={{ borderTop: '1px solid rgba(255,255,255,0.05)' }}>
              <div className="flex gap-6">
                {[
                  { k: 'Network', v: 'Stellar Testnet' },
                  { k: 'Guardrail', v: 'BudgetGuardrail.rs' },
                  { k: 'Memory', v: 'Qdrant/roku-default' },
                ].map(kv => (
                  <div key={kv.k} className="font-mono text-[9px]">
                    <span style={{ color: 'rgba(255,255,255,0.15)' }}>{kv.k}: </span>
                    <span style={{ color: 'rgba(255,255,255,0.35)' }}>{kv.v}</span>
                  </div>
                ))}
              </div>
              <div className="flex gap-2">
                {steps.map((_, i) => (
                  <button key={i} onClick={() => setActive(i)}
                    className="w-1.5 h-1.5 rounded-full transition-all"
                    style={{ background: active === i ? step.color : 'rgba(255,255,255,0.15)' }} />
                ))}
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-between mt-5">
            <button onClick={() => setActive(a => Math.max(0, a - 1))} disabled={active === 0}
              className="font-mono text-xs px-4 py-2 rounded-lg transition-all disabled:opacity-20"
              style={{ color: '#6B6B85', border: '1px solid rgba(255,255,255,0.08)' }}>
              ← Previous
            </button>
            <span className="font-mono text-[10px]" style={{ color: 'rgba(255,255,255,0.15)' }}>
              {active + 1} / {steps.length}
            </span>
            <button onClick={() => setActive(a => Math.min(steps.length - 1, a + 1))} disabled={active === steps.length - 1}
              className="font-mono text-xs px-4 py-2 rounded-lg transition-all disabled:opacity-20"
              style={{ color: '#6B6B85', border: '1px solid rgba(255,255,255,0.08)' }}>
              Next →
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

function AnimateLines({ lines }: { lines: { c: string; t: string }[] }) {
  return (
    <div className="space-y-1 font-mono text-xs leading-relaxed">
      {lines.map((line, i) => (
        <motion.div key={i}
          initial={{ opacity: 0, x: -8 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.2, delay: i * 0.07 }}
          style={{ color: colorMap[line.c as keyof typeof colorMap] ?? '#9E9EB8' }}>
          {line.t}
        </motion.div>
      ))}
    </div>
  )
}
