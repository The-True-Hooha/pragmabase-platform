'use client'

import { motion } from 'framer-motion'
import { SectionLabel } from '@/components/ui/section-label'
import { Check, X } from 'lucide-react'

const variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
}

const metrics = [
  { value: '<2s', label: 'cold start', color: '#10B981' },
  { value: '#1', label: 'AgentBench', color: '#2563EB' },
  { value: '99.9%', label: 'uptime', color: '#2563EB' },
  { value: '10M+', label: 'evals run', color: '#0A0A0A' },
]

const comparison = [
  { feature: 'Sandbox Isolation', aegis: true, braintrust: false, langsmith: false },
  { feature: 'Firecracker Runtime', aegis: true, braintrust: false, langsmith: false },
  { feature: 'Self-hostable', aegis: true, braintrust: false, langsmith: true },
  { feature: 'Agent Replay', aegis: true, braintrust: true, langsmith: false },
  { feature: 'CI Integration', aegis: true, braintrust: true, langsmith: true },
  { feature: 'LLM Proxy', aegis: true, braintrust: true, langsmith: false },
]

export function Benchmarks() {
  return (
    <section className="py-28 bg-bg-alt">
      <div className="max-w-[1280px] mx-auto px-8">
        <SectionLabel name="BENCHMARKS" index={4} />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-14 items-end">
          <motion.h2
            variants={variants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.4, ease: 'easeOut' }}
            className="font-display font-bold text-[32px] md:text-[48px] text-ink leading-tight"
          >
            We don&apos;t think benchmarks<br />tell the full story.
          </motion.h2>
          <motion.p
            variants={variants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.4, ease: 'easeOut', delay: 0.1 }}
            className="text-muted text-base leading-relaxed"
          >
            We run #1 on AgentBench — but what matters more is that your specific
            agent, on your specific tasks, passes at the rate you need. That&apos;s what
            Aegis is built for.
          </motion.p>
        </div>

        {/* Metric strip */}
        <motion.div
          variants={variants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.4, ease: 'easeOut', delay: 0.08 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-0 border border-border rounded-2xl overflow-hidden mb-10"
        >
          {metrics.map((m, i) => (
            <div
              key={m.label}
              className={`p-8 bg-white ${i < metrics.length - 1 ? 'border-r border-border' : ''}`}
            >
              <div className="font-mono text-[40px] font-bold leading-none mb-2" style={{ color: m.color }}>
                {m.value}
              </div>
              <div className="text-xs uppercase tracking-widest text-muted font-mono">{m.label}</div>
            </div>
          ))}
        </motion.div>

        {/* Comparison table */}
        <motion.div
          variants={variants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.4, ease: 'easeOut', delay: 0.16 }}
          className="border border-border rounded-2xl overflow-hidden"
        >
          <div className="grid grid-cols-4 bg-bg-alt border-b border-border">
            <div className="px-6 py-4 text-xs uppercase tracking-widest text-muted font-mono">Feature</div>
            {[
              { name: 'Aegis', highlight: true },
              { name: 'Braintrust', highlight: false },
              { name: 'LangSmith', highlight: false },
            ].map((tool) => (
              <div
                key={tool.name}
                className={`px-6 py-4 text-xs font-mono text-center font-medium ${tool.highlight ? 'text-accent' : 'text-muted'}`}
              >
                {tool.name}
              </div>
            ))}
          </div>
          {comparison.map((row, i) => (
            <div
              key={row.feature}
              className={`grid grid-cols-4 bg-white ${i < comparison.length - 1 ? 'border-b border-border' : ''}`}
            >
              <div className="px-6 py-4 text-sm text-ink">{row.feature}</div>
              <div className="px-6 py-4 flex justify-center">
                <Check size={16} className="text-pass" />
              </div>
              <div className="px-6 py-4 flex justify-center">
                {row.braintrust ? <Check size={16} className="text-pass" /> : <X size={16} className="text-fail" />}
              </div>
              <div className="px-6 py-4 flex justify-center">
                {row.langsmith ? <Check size={16} className="text-pass" /> : <X size={16} className="text-fail" />}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
