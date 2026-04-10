'use client'

import { motion } from 'framer-motion'

const reasons = [
  {
    color: '#A8FF3E',
    title: '3–5 second finality',
    sub: 'Real settlement, not optimistic',
    desc: 'Stellar closes a ledger every 3–5 seconds with full finality. No rollbacks, no reorgs. When an agent pays for a resource, the payment is done — not pending.',
    stat: '~5s',
    statLabel: 'avg finality',
  },
  {
    color: '#C4B5FD',
    title: 'Sub-cent transaction fees',
    sub: 'Economics that work at agent scale',
    desc: 'A Stellar transaction costs 0.00001 XLM — fractions of a cent. Agents can make thousands of micropayments per day without fees eating the value they create.',
    stat: '$0.0001',
    statLabel: 'per tx (avg)',
  },
  {
    color: '#818CF8',
    title: 'Soroban smart contracts',
    sub: 'Programmable guardrails, on-chain',
    desc: 'Soroban is Stellar\'s WASM-based smart contract layer. We use it to enforce agent budget caps, spending velocity limits, and counterparty whitelists — at the protocol level, not the prompt level.',
    stat: 'WASM',
    statLabel: 'native VM',
  },
  {
    color: '#F59E0B',
    title: 'USDC + stablecoin native',
    sub: 'Agents transact in stable value',
    desc: 'Stellar is one of the primary settlement rails for Circle\'s USDC. Agents can hold, pay, and receive stable-value assets natively — critical for financial agent applications.',
    stat: 'USDC',
    statLabel: 'natively settled',
  },
  {
    color: '#34D399',
    title: 'Horizon REST API',
    sub: 'No RPC complexity',
    desc: 'Stellar\'s Horizon API makes it straightforward to query wallet balances, submit transactions, and stream ledger events. The SDK surface is clean enough for agents to reason about programmatically.',
    stat: 'REST',
    statLabel: 'no custom RPC',
  },
  {
    color: '#FB923C',
    title: 'x402 protocol alignment',
    sub: 'Stellar is the natural settlement layer',
    desc: 'The x402 HTTP payment protocol was designed with Stellar in mind — fast settlement, low fees, and programmable assets make it the only chain where pay-per-action is economically viable at agent scale.',
    stat: 'x402',
    statLabel: 'native fit',
  },
]

export function WhyStellar() {
  return (
    <section style={{ background: '#060610', borderTop: '1px solid rgba(255,255,255,0.06)', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
      {/* Stellar-esque radial */}
      <div className="absolute pointer-events-none" style={{ left: '50%', transform: 'translateX(-50%)', width: '900px', height: '500px', background: 'radial-gradient(ellipse, rgba(30,60,200,0.12) 0%, transparent 65%)' }} />

      <div className="relative max-w-[1280px] mx-auto px-6 md:px-8 py-20 md:py-28">

        {/* Header */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
            <div className="inline-block font-mono text-[10px] font-bold uppercase tracking-widest mb-4 px-2.5 py-1.5 rounded-full"
              style={{ background: 'rgba(30,60,200,0.15)', border: '1px solid rgba(100,140,255,0.3)', color: '#818CF8' }}>
              Built on Stellar
            </div>
            <h2 className="font-display font-bold text-4xl md:text-5xl leading-tight" style={{ color: '#EDECF4' }}>
              Why Stellar is the<br />
              <span style={{ color: '#818CF8' }}>only viable choice.</span>
            </h2>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.1 }}
            className="self-end">
            <p className="text-lg leading-relaxed mb-4" style={{ color: '#6B6B85' }}>
              Autonomous agents making thousands of micropayments per day need a chain
              that is fast, cheap, and programmable without being complicated. No other
              L1 checks all three boxes at agent scale.
            </p>
            <div className="flex items-center gap-3 font-mono text-sm font-bold" style={{ color: '#818CF8' }}>
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <circle cx="8" cy="8" r="6.5" stroke="#818CF8" strokeWidth="1.2"/>
                <path d="M5.5 8l2 2 3-3.5" stroke="#818CF8" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              Stellar Mainnet + Testnet · Soroban · Horizon API · x402
            </div>
          </motion.div>
        </div>

        {/* Reason cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mb-16">
          {reasons.map((r, i) => (
            <motion.div key={r.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.45, delay: i * 0.07 }}
              className="rounded-2xl p-6"
              style={{ background: '#12121E', border: `1px solid ${r.color}18` }}
            >
              <div className="flex items-start justify-between mb-4">
                <div>
                  <div className="font-display font-bold text-2xl mb-0.5" style={{ color: r.color }}>{r.stat}</div>
                  <div className="font-mono text-[9px] uppercase tracking-widest" style={{ color: r.color + '70' }}>{r.statLabel}</div>
                </div>
                <div className="w-2 h-2 rounded-full mt-1.5" style={{ background: r.color }} />
              </div>
              <h3 className="font-display font-bold text-base mb-1" style={{ color: '#EDECF4' }}>{r.title}</h3>
              <p className="text-xs font-mono mb-3" style={{ color: r.color + '90' }}>{r.sub}</p>
              <p className="text-sm leading-relaxed" style={{ color: '#6B6B85' }}>{r.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Comparison strip */}
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
          <p className="font-mono text-[10px] font-bold uppercase tracking-widest mb-6 text-center" style={{ color: 'rgba(255,255,255,0.18)' }}>
            Traditional API keys vs x402 on Stellar
          </p>
          <div className="rounded-2xl overflow-hidden" style={{ border: '1px solid rgba(255,255,255,0.07)' }}>
            <div className="grid grid-cols-3 py-3 px-6 font-mono text-[10px] font-bold uppercase tracking-widest"
              style={{ background: '#14141F', borderBottom: '1px solid rgba(255,255,255,0.07)', color: 'rgba(255,255,255,0.2)' }}>
              <div>Dimension</div>
              <div className="text-center" style={{ color: 'rgba(255,80,80,0.6)' }}>API Keys</div>
              <div className="text-center" style={{ color: '#A8FF3E' }}>x402 on Stellar</div>
            </div>
            {[
              { dim: 'Cost model',      old: 'Flat subscription / rate limit',  neo: 'Pay per action, fractions of a cent' },
              { dim: 'Settlement',      old: 'Monthly invoice, manual',          neo: '~5s on-chain finality' },
              { dim: 'Programmability', old: 'None — static credentials',        neo: 'Soroban guardrails, policy contracts' },
              { dim: 'Agent autonomy',  old: 'Human must renew / rotate keys',   neo: 'Agent self-funds from wallet' },
              { dim: 'Auditability',    old: 'App-level logs only',              neo: 'Immutable ledger + Horizon API' },
              { dim: 'Scalability',     old: 'Rate-limited, quota-gated',        neo: 'Pay more, get more — no caps' },
            ].map((row, i) => (
              <div key={row.dim} className="grid grid-cols-3 py-3.5 px-6 text-sm"
                style={{ borderBottom: i < 5 ? '1px solid rgba(255,255,255,0.04)' : undefined, background: i % 2 === 0 ? 'transparent' : 'rgba(255,255,255,0.01)' }}>
                <div className="font-mono text-xs" style={{ color: '#9E9EB8' }}>{row.dim}</div>
                <div className="text-center text-xs" style={{ color: 'rgba(255,100,100,0.5)' }}>{row.old}</div>
                <div className="text-center text-xs font-medium" style={{ color: '#A8FF3E' }}>{row.neo}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
