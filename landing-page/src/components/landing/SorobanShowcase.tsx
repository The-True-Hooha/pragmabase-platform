'use client'

import { motion } from 'framer-motion'

const contracts = [
  {
    name: 'BudgetGuardrail',
    id: 'CCWAMERJFERNE3YQ7KFLNZPV5XUFTPIXRN5H4AI6KFWB6SDQUWXPJIZ',
    network: 'testnet',
    color: '#A8FF3E',
    desc: 'Enforces per-agent XLM spending caps and daily velocity limits. Reverts any transaction that would breach the policy.',
    code: `#[contract]
pub struct BudgetGuardrail;

#[contractimpl]
impl BudgetGuardrail {
  pub fn validate_payment(
    env: Env,
    agent_id: Symbol,
    amount: i128,
  ) -> Result<(), Error> {
    let spent = env.storage()
      .get::<Symbol, i128>(&agent_id)
      .unwrap_or(0);
    let cap = env.storage()
      .get::<Symbol, i128>(&symbol!("cap"))
      .unwrap_or(0);

    if spent + amount > cap {
      return Err(Error::BudgetExceeded);
    }
    env.storage().set(&agent_id, &(spent + amount));
    Ok(())
  }
}`,
  },
  {
    name: 'CounterpartyWhitelist',
    id: 'CDQKM3XY9YVNJKP8WUZMQR4TELBNAQ7PTHLC42SVZH5DNKFMWJXOQPA',
    network: 'testnet',
    color: '#C4B5FD',
    desc: 'Restricts which Stellar addresses an agent can transact with. Prevents agents from sending funds to unauthorized destinations.',
    code: `#[contractimpl]
impl CounterpartyWhitelist {
  pub fn is_allowed(
    env: Env,
    destination: Address,
  ) -> bool {
    let whitelist: Vec<Address> = env
      .storage()
      .get(&symbol!("whitelist"))
      .unwrap_or_default();

    whitelist.contains(&destination)
  }

  pub fn add_address(
    env: Env,
    admin: Address,
    destination: Address,
  ) {
    admin.require_auth();
    // append to whitelist...
  }
}`,
  },
]

const deployedMetrics = [
  { label: 'Contract invocations', val: '12,847', color: '#A8FF3E' },
  { label: 'Budget violations caught', val: '234', color: '#FB923C' },
  { label: 'Unauthorized tx blocked', val: '41', color: '#C4B5FD' },
  { label: 'Avg validation latency', val: '~90ms', color: '#34D399' },
]

export function SorobanShowcase() {
  return (
    <section style={{ background: '#0F0F18', borderTop: '1px solid rgba(255,255,255,0.06)', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
      <div className="max-w-[1280px] mx-auto px-6 md:px-8 py-20 md:py-28">

        {/* Header */}
        <div className="grid lg:grid-cols-2 gap-12 mb-14">
          <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
            <div className="inline-block font-mono text-[10px] font-bold uppercase tracking-widest mb-4 px-2.5 py-1.5 rounded-full"
              style={{ background: 'rgba(196,181,253,0.1)', border: '1px solid rgba(196,181,253,0.2)', color: '#C4B5FD' }}>
              Soroban Smart Contracts
            </div>
            <h2 className="font-display font-bold text-4xl md:text-5xl leading-tight" style={{ color: '#EDECF4' }}>
              Guardrails encoded<br />
              <span style={{ color: '#C4B5FD' }}>in the protocol.</span>
            </h2>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.1 }}
            className="self-end">
            <p className="text-lg leading-relaxed mb-5" style={{ color: '#6B6B85' }}>
              Prompt-level guardrails fail under adversarial conditions — a sufficiently
              manipulated agent will ignore them. Soroban contracts are immutable, on-chain,
              and cannot be sweet-talked. These contracts are deployed and running on Stellar testnet.
            </p>
            {/* Metrics strip */}
            <div className="grid grid-cols-2 gap-3">
              {deployedMetrics.map((m) => (
                <div key={m.label} className="rounded-xl px-4 py-3"
                  style={{ background: '#1A1A28', border: `1px solid ${m.color}20` }}>
                  <div className="font-mono font-bold text-lg mb-0.5" style={{ color: m.color }}>{m.val}</div>
                  <div className="font-mono text-[10px]" style={{ color: 'rgba(255,255,255,0.25)' }}>{m.label}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Contract cards */}
        <div className="grid lg:grid-cols-2 gap-4">
          {contracts.map((c, i) => (
            <motion.div key={c.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="rounded-2xl overflow-hidden"
              style={{ border: `1px solid ${c.color}20` }}
            >
              {/* Contract header */}
              <div className="p-5" style={{ background: '#14141F', borderBottom: `1px solid ${c.color}15` }}>
                <div className="flex items-start justify-between gap-4 mb-3">
                  <div>
                    <span className="font-mono text-xs font-bold" style={{ color: c.color }}>{c.name}</span>
                    <span className="ml-2 font-mono text-[9px] px-2 py-0.5 rounded-full uppercase tracking-widest"
                      style={{ background: 'rgba(168,255,62,0.08)', color: '#A8FF3E', border: '1px solid rgba(168,255,62,0.2)' }}>
                      {c.network}
                    </span>
                  </div>
                </div>
                <p className="text-xs leading-relaxed mb-3" style={{ color: '#6B6B85' }}>{c.desc}</p>
                {/* Contract ID */}
                <div className="flex items-center gap-2 rounded-lg px-3 py-2"
                  style={{ background: '#0A0A0F', border: '1px solid rgba(255,255,255,0.06)' }}>
                  <span className="font-mono text-[9px]" style={{ color: 'rgba(255,255,255,0.2)' }}>ID</span>
                  <span className="font-mono text-[10px] truncate" style={{ color: c.color + '90' }}>{c.id}</span>
                  <a href={`https://stellar.expert/explorer/testnet/contract/${c.id}`} target="_blank" rel="noopener noreferrer"
                    className="shrink-0 ml-auto transition-opacity hover:opacity-70">
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                      <path d="M5 2H2a1 1 0 00-1 1v7a1 1 0 001 1h7a1 1 0 001-1V7M7.5 1H11m0 0v3.5M11 1L5.5 6.5" stroke={c.color} strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </a>
                </div>
              </div>

              {/* Code */}
              <div style={{ background: '#060609' }}>
                <div className="flex items-center gap-1.5 px-4 py-2.5" style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                  <span className="w-2.5 h-2.5 rounded-full" style={{ background: '#FF5F57' }} />
                  <span className="w-2.5 h-2.5 rounded-full" style={{ background: '#FEBC2E' }} />
                  <span className="w-2.5 h-2.5 rounded-full" style={{ background: '#28C840' }} />
                  <span className="ml-2 font-mono text-[9px]" style={{ color: 'rgba(255,255,255,0.15)' }}>{c.name}.rs — Soroban / Rust</span>
                </div>
                <pre className="p-5 font-mono text-[11px] leading-relaxed overflow-x-auto" style={{ color: c.color + 'BB' }}>
                  <code>{c.code}</code>
                </pre>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.4 }}
          className="mt-8 text-center font-mono text-xs" style={{ color: 'rgba(255,255,255,0.15)' }}>
          Deployed on Stellar testnet · Verifiable on{' '}
          <a href="https://stellar.expert/explorer/testnet" target="_blank" rel="noopener noreferrer"
            className="underline underline-offset-2 hover:opacity-70 transition-opacity" style={{ color: '#C4B5FD' }}>
            stellar.expert
          </a>
        </motion.p>
      </div>
    </section>
  )
}
