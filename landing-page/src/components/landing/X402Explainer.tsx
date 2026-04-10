'use client'

import { motion } from 'framer-motion'

const steps = [
  {
    num: '01',
    color: '#A8FF3E',
    title: 'Agent requests a resource',
    body: 'The agent makes a standard HTTP request to any x402-enabled API — a data feed, compute endpoint, or another agent\'s service.',
    code: 'GET /api/market-data/ETH-XLM\nAuthorization: Bearer <none needed>',
  },
  {
    num: '02',
    color: '#F59E0B',
    title: 'Server responds with payment terms',
    body: 'The server returns HTTP 402 Payment Required with a machine-readable payment header: amount, asset, Stellar address, and a signed nonce.',
    code: 'HTTP/1.1 402 Payment Required\nx402-amount: 0.001\nx402-asset: XLM\nx402-destination: G...3AED\nx402-nonce: 0x8f2a',
  },
  {
    num: '03',
    color: '#C4B5FD',
    title: 'Agent validates guardrail + pays',
    body: 'Soroban checks the payment against the agent\'s budget policy. If approved, the agent submits a Stellar transaction and attaches the tx hash to the retry.',
    code: 'POST /api/market-data/ETH-XLM\nx402-payment: tx_hash=abc123\nx402-signature: <signed by agent wallet>',
  },
  {
    num: '04',
    color: '#34D399',
    title: 'Server verifies + serves data',
    body: 'The server verifies the on-chain payment via Horizon API. Payment confirmed in ~5 seconds. Data is returned. No API keys, no subscriptions.',
    code: 'HTTP/1.1 200 OK\nContent-Type: application/json\n\n{ "ETH-XLM": 0.0042, "ts": 1712345678 }',
  },
]

export function X402Explainer() {
  return (
    <section style={{ background: '#0A0A0F', borderTop: '1px solid rgba(255,255,255,0.06)', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
      <div className="max-w-[1280px] mx-auto px-6 md:px-8 py-20 md:py-28">

        {/* Header */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
            <div className="inline-block font-mono text-[10px] font-bold uppercase tracking-widest mb-4 px-2.5 py-1.5 rounded-full"
              style={{ background: 'rgba(168,255,62,0.08)', border: '1px solid rgba(168,255,62,0.25)', color: '#A8FF3E' }}>
              x402 Protocol
            </div>
            <h2 className="font-display font-bold text-4xl md:text-5xl leading-tight" style={{ color: '#EDECF4' }}>
              HTTP 402 was always<br />meant to do this.
            </h2>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.1 }}
            className="self-end">
            <p className="text-lg leading-relaxed" style={{ color: '#6B6B85' }}>
              HTTP 402 &ldquo;Payment Required&rdquo; has existed since 1991 — reserved for future use.
              x402 finally implements it: a standard for machine-to-machine micropayments.
              No API keys. No OAuth. Agents pay for exactly what they use, atomically.
            </p>
          </motion.div>
        </div>

        {/* Flow steps */}
        <div className="grid md:grid-cols-2 gap-4 mb-14">
          {steps.map((s, i) => (
            <motion.div key={s.num}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.45, delay: i * 0.1 }}
              className="rounded-2xl p-6"
              style={{ background: '#14141F', border: `1px solid ${s.color}18` }}
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="font-mono text-[10px] font-bold" style={{ color: s.color }}>{s.num}</span>
                <div className="h-px flex-1" style={{ background: s.color + '30' }} />
              </div>
              <h3 className="font-display font-bold text-base mb-2" style={{ color: '#EDECF4' }}>{s.title}</h3>
              <p className="text-sm leading-relaxed mb-4" style={{ color: '#6B6B85' }}>{s.body}</p>
              <div className="rounded-xl p-4" style={{ background: '#060609', border: '1px solid rgba(255,255,255,0.06)' }}>
                <pre className="font-mono text-[11px] leading-relaxed" style={{ color: s.color + 'CC' }}>
                  <code>{s.code}</code>
                </pre>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom callout */}
        <motion.div initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}
          className="rounded-2xl p-8 flex flex-col md:flex-row items-center justify-between gap-6"
          style={{ background: 'rgba(168,255,62,0.04)', border: '1px solid rgba(168,255,62,0.2)' }}>
          <div>
            <p className="font-display font-bold text-lg mb-1" style={{ color: '#EDECF4' }}>
              x402 is an open protocol — not a Pragmabase lock-in.
            </p>
            <p className="text-sm" style={{ color: '#6B6B85' }}>
              Any HTTP API can add x402 support. Any Stellar wallet can pay. Pragmabase is the first agent runtime
              built with native x402 integration.
            </p>
          </div>
          <div className="flex gap-3 shrink-0">
            <a href="https://github.com/The-True-Hooha/pragmabase-platform" target="_blank" rel="noopener noreferrer"
              className="font-bold text-sm px-5 py-3 rounded-xl transition-all whitespace-nowrap"
              style={{ background: '#A8FF3E', color: '#0A0A0F' }}>
              View protocol →
            </a>
            <a href="/docs"
              className="font-medium text-sm px-5 py-3 rounded-xl text-white transition-all whitespace-nowrap"
              style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.12)' }}>
              Docs
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
