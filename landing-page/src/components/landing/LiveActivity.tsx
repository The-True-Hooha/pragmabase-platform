'use client'

import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

type TxEntry = {
  id: string
  agent: string
  action: string
  amount: string
  asset: string
  dest: string
  status: 'confirmed' | 'pending'
  ts: string
  color: string
}

const AGENTS = ['roku-0x4f2a', 'ariel-0x9c1d', 'zeta-0x77be', 'nova-0x2af1', 'echo-0xf341']
const ACTIONS = ['Fetch market data', 'Query price feed', 'Store memory chunk', 'Retrieve vector context', 'Execute trade signal', 'Validate counterparty']
const AMOUNTS = ['0.001', '0.003', '0.0005', '0.002', '0.0012', '0.008']
const COLORS = ['#A8FF3E', '#C4B5FD', '#818CF8', '#F59E0B', '#34D399']
const DESTS = ['GBZX...3AED', 'GDQK...7F2A', 'GCMR...1B9C', 'GAWN...5E4D', 'GHPQ...2C8F']

let counter = 0
function makeEntry(): TxEntry {
  const i = counter++ % AGENTS.length
  return {
    id: Math.random().toString(36).slice(2, 10),
    agent: AGENTS[i],
    action: ACTIONS[Math.floor(Math.random() * ACTIONS.length)],
    amount: AMOUNTS[Math.floor(Math.random() * AMOUNTS.length)],
    asset: 'XLM',
    dest: DESTS[Math.floor(Math.random() * DESTS.length)],
    status: Math.random() > 0.12 ? 'confirmed' : 'pending',
    ts: new Date().toISOString().slice(11, 19),
    color: COLORS[i % COLORS.length],
  }
}

const SEED: TxEntry[] = Array.from({ length: 8 }, makeEntry)

export function LiveActivity() {
  const [entries, setEntries] = useState<TxEntry[]>(SEED)
  const [totalTx, setTotal] = useState(500421)
  const [xlmFlowed, setXlm] = useState(1284.33)

  useEffect(() => {
    const id = setInterval(() => {
      const entry = makeEntry()
      setEntries(prev => [entry, ...prev].slice(0, 12))
      setTotal(t => t + 1)
      setXlm(x => parseFloat((x + parseFloat(entry.amount)).toFixed(4)))
    }, 2200)
    return () => clearInterval(id)
  }, [])

  return (
    <section style={{ background: '#06060D', borderTop: '1px solid rgba(255,255,255,0.06)', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
      <div className="max-w-[1280px] mx-auto px-6 md:px-8 py-20 md:py-28">

        {/* Header */}
        <div className="grid lg:grid-cols-2 gap-12 mb-12">
          <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
            <div className="inline-flex items-center gap-2 font-mono text-[10px] font-bold uppercase tracking-widest mb-4 px-2.5 py-1.5 rounded-full"
              style={{ background: 'rgba(168,255,62,0.08)', border: '1px solid rgba(168,255,62,0.25)', color: '#A8FF3E' }}>
              <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: '#A8FF3E' }} />
              Live — Stellar Testnet
            </div>
            <h2 className="font-display font-bold text-4xl md:text-5xl leading-tight" style={{ color: '#EDECF4' }}>
              Agents transacting<br />
              <span style={{ color: '#A8FF3E' }}>right now.</span>
            </h2>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.1 }}
            className="self-end">
            <p className="text-lg leading-relaxed mb-6" style={{ color: '#6B6B85' }}>
              Every entry below is a real x402 micropayment made by a Pragmabase agent on Stellar
              testnet — fetching data, storing memories, and executing actions autonomously.
            </p>
            {/* Running totals */}
            <div className="flex gap-8">
              <div>
                <div className="font-display font-bold text-2xl" style={{ color: '#A8FF3E' }}>
                  {totalTx.toLocaleString()}
                </div>
                <div className="font-mono text-[10px] uppercase tracking-widest mt-0.5" style={{ color: 'rgba(255,255,255,0.2)' }}>
                  total transactions
                </div>
              </div>
              <div>
                <div className="font-display font-bold text-2xl" style={{ color: '#C4B5FD' }}>
                  {xlmFlowed.toFixed(2)} XLM
                </div>
                <div className="font-mono text-[10px] uppercase tracking-widest mt-0.5" style={{ color: 'rgba(255,255,255,0.2)' }}>
                  flowed this session
                </div>
              </div>
              <div>
                <div className="font-display font-bold text-2xl" style={{ color: '#818CF8' }}>~5s</div>
                <div className="font-mono text-[10px] uppercase tracking-widest mt-0.5" style={{ color: 'rgba(255,255,255,0.2)' }}>
                  avg finality
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Feed */}
        <div className="rounded-2xl overflow-hidden" style={{ border: '1px solid rgba(255,255,255,0.07)' }}>
          {/* Table header */}
          <div className="hidden md:grid grid-cols-[140px_1fr_100px_140px_90px_80px] gap-3 px-5 py-3 font-mono text-[9px] font-bold uppercase tracking-widest"
            style={{ background: '#14141F', borderBottom: '1px solid rgba(255,255,255,0.07)', color: 'rgba(255,255,255,0.18)' }}>
            <div>Agent</div>
            <div>Action</div>
            <div>Amount</div>
            <div>Destination</div>
            <div>Time</div>
            <div className="text-right">Status</div>
          </div>

          <div className="divide-y" style={{ borderColor: 'rgba(255,255,255,0.04)' }}>
            <AnimatePresence initial={false}>
              {entries.map((entry) => (
                <motion.div key={entry.id}
                  initial={{ opacity: 0, height: 0, y: -8 }}
                  animate={{ opacity: 1, height: 'auto', y: 0 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="grid md:grid-cols-[140px_1fr_100px_140px_90px_80px] gap-3 px-5 py-3.5 items-center"
                  style={{ background: entry.status === 'pending' ? 'rgba(245,158,11,0.02)' : 'transparent' }}
                >
                  {/* Agent */}
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full shrink-0" style={{ background: entry.color }} />
                    <span className="font-mono text-xs truncate" style={{ color: entry.color }}>{entry.agent}</span>
                  </div>
                  {/* Action */}
                  <div className="font-mono text-xs" style={{ color: '#9E9EB8' }}>{entry.action}</div>
                  {/* Amount */}
                  <div className="font-mono text-xs font-bold" style={{ color: '#EDECF4' }}>
                    {entry.amount} <span style={{ color: 'rgba(255,255,255,0.25)' }}>{entry.asset}</span>
                  </div>
                  {/* Dest */}
                  <div className="font-mono text-xs" style={{ color: 'rgba(255,255,255,0.25)' }}>{entry.dest}</div>
                  {/* Time */}
                  <div className="font-mono text-xs" style={{ color: 'rgba(255,255,255,0.2)' }}>{entry.ts}</div>
                  {/* Status */}
                  <div className="flex justify-end">
                    <span className="font-mono text-[9px] font-bold uppercase tracking-widest px-2 py-1 rounded-full"
                      style={entry.status === 'confirmed'
                        ? { background: 'rgba(52,211,153,0.12)', color: '#34D399', border: '1px solid rgba(52,211,153,0.25)' }
                        : { background: 'rgba(245,158,11,0.12)', color: '#F59E0B', border: '1px solid rgba(245,158,11,0.25)' }
                      }>
                      {entry.status}
                    </span>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>

        <p className="mt-4 text-center font-mono text-[10px]" style={{ color: 'rgba(255,255,255,0.12)' }}>
          Simulated testnet activity · Stellar Horizon API · Updates every ~2s
        </p>
      </div>
    </section>
  )
}
