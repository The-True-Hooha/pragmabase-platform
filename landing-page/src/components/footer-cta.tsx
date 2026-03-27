'use client'

import { motion } from 'framer-motion'

const variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
}

export function FooterCta() {
  return (
    <section
      className="relative py-32 overflow-hidden"
      style={{
        background: 'linear-gradient(160deg, #0F1F5C 0%, #1740A6 45%, #2563EB 100%)',
      }}
    >
      {/* Grid */}
      <svg className="absolute inset-0 w-full h-full opacity-[0.1]" aria-hidden="true">
        <defs>
          <pattern id="fcta-grid" x="0" y="0" width="48" height="48" patternUnits="userSpaceOnUse">
            <path d="M 48 0 L 0 0 0 48" fill="none" stroke="white" strokeWidth="0.5" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#fcta-grid)" />
      </svg>

      {/* Glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] pointer-events-none"
        style={{ background: 'radial-gradient(ellipse, rgba(96,165,250,0.2), transparent 70%)' }}
        aria-hidden="true"
      />

      {/* Decorative hex marks */}
      {[
        { x: '5%', y: '20%', s: 48 },
        { x: '92%', y: '15%', s: 32 },
        { x: '88%', y: '72%', s: 56 },
        { x: '3%', y: '78%', s: 40 },
      ].map((h, i) => (
        <svg
          key={i}
          width={h.s}
          height={h.s}
          viewBox="0 0 20 20"
          className="absolute pointer-events-none opacity-[0.12]"
          style={{ left: h.x, top: h.y }}
          aria-hidden="true"
        >
          <polygon points="10,1 18.5,5.5 18.5,14.5 10,19 1.5,14.5 1.5,5.5" stroke="white" strokeWidth="1" fill="none" />
        </svg>
      ))}

      <div className="relative max-w-[1280px] mx-auto px-8 text-center">
        <div className="flex justify-between text-xs uppercase tracking-widest mb-16 pb-4 font-mono"
          style={{ color: 'rgba(255,255,255,0.2)', borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
          <span>FOOTER CTA</span>
          <span>[8/8]</span>
        </div>

        <motion.h2
          variants={variants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.4, ease: 'easeOut' }}
          className="font-display font-extrabold text-white leading-tight mb-4 mx-auto"
          style={{ fontSize: 'clamp(36px, 5vw, 72px)', maxWidth: '760px' }}
        >
          Your agent deserves<br />a safety net.
        </motion.h2>

        <motion.p
          variants={variants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.4, ease: 'easeOut', delay: 0.12 }}
          className="text-base mb-10 max-w-md mx-auto"
          style={{ color: 'rgba(255,255,255,0.55)' }}
        >
          Start evaluating in minutes. No credit card required.
        </motion.p>

        <motion.div
          variants={variants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.35, ease: 'easeOut', delay: 0.22 }}
          className="flex items-center justify-center gap-4 flex-wrap"
        >
          <button
            className="font-semibold text-sm px-8 py-4 rounded-xl text-accent transition-all duration-150"
            style={{ background: '#fff', boxShadow: '0 8px 32px rgba(0,0,0,0.25)' }}
            onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 16px 40px rgba(0,0,0,0.3)' }}
            onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 8px 32px rgba(0,0,0,0.25)' }}
          >
            Read the docs →
          </button>
          <button
            className="font-medium text-sm px-8 py-4 rounded-xl text-white transition-all duration-150"
            style={{ background: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.18)' }}
            onMouseEnter={(e) => { e.currentTarget.style.background = 'rgba(255,255,255,0.18)' }}
            onMouseLeave={(e) => { e.currentTarget.style.background = 'rgba(255,255,255,0.1)' }}
          >
            View on GitHub
          </button>
        </motion.div>
      </div>
    </section>
  )
}
