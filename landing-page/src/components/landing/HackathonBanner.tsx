'use client'

import { motion } from 'framer-motion'

export function HackathonBanner() {
  return (
    <motion.div
      initial={{ opacity: 0, y: -8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="relative overflow-hidden"
      style={{ background: 'linear-gradient(90deg, rgba(30,60,200,0.15) 0%, rgba(124,58,237,0.15) 50%, rgba(168,255,62,0.08) 100%)', borderBottom: '1px solid rgba(129,140,248,0.25)' }}
    >
      {/* Subtle moving shimmer */}
      <div className="absolute inset-0 pointer-events-none"
        style={{ background: 'linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.03) 50%, transparent 100%)' }} />

      <div className="relative max-w-[1280px] mx-auto px-6 md:px-8 py-3 flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-3">
          {/* Stellar logo mark placeholder */}
          <div className="w-6 h-6 rounded-full flex items-center justify-center shrink-0"
            style={{ background: 'rgba(129,140,248,0.2)', border: '1px solid rgba(129,140,248,0.4)' }}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
              <circle cx="12" cy="12" r="9" stroke="#818CF8" strokeWidth="1.6"/>
              <path d="M7 12h10M12 7v10" stroke="#818CF8" strokeWidth="1.6" strokeLinecap="round"/>
            </svg>
          </div>
          <div className="flex flex-wrap items-center gap-2 text-sm">
            <span className="font-mono text-[10px] font-bold uppercase tracking-widest px-2 py-0.5 rounded-full"
              style={{ background: 'rgba(168,255,62,0.12)', border: '1px solid rgba(168,255,62,0.3)', color: '#A8FF3E' }}>
              Hackathon Submission
            </span>
            <span style={{ color: 'rgba(255,255,255,0.5)' }}>·</span>
            <span className="font-medium" style={{ color: 'rgba(255,255,255,0.7)' }}>
              Built for the <span style={{ color: '#C4B5FD' }}>Stellar Hackathon 2026</span>
            </span>
            <span style={{ color: 'rgba(255,255,255,0.3)' }}>·</span>
            <span className="font-mono text-xs" style={{ color: 'rgba(255,255,255,0.35)' }}>
              Stellar SDK · Soroban · Horizon API · x402 · Qdrant
            </span>
          </div>
        </div>

        <div className="flex items-center gap-3 shrink-0">
          <a href="https://github.com/The-True-Hooha/pragmabase-platform" target="_blank" rel="noopener noreferrer"
            className="flex items-center gap-1.5 font-mono text-xs font-bold px-3 py-1.5 rounded-lg transition-all hover:opacity-80"
            style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)', color: 'rgba(255,255,255,0.5)' }}>
            <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
            </svg>
            Source code
          </a>
        </div>
      </div>
    </motion.div>
  )
}
