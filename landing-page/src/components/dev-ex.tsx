'use client'

import { motion } from 'framer-motion'
import { SectionLabel } from '@/components/ui/section-label'
import { CodeBlock } from '@/components/ui/code-block'

const variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
}

const integrations = [
  'GitHub Actions',
  'GitLab CI',
  'LangChain',
  'LangGraph',
  'OpenAI SDK',
  'CrewAI',
  'Temporal',
]

const steps = [
  { n: '01', title: 'Install', code: 'npx aegis init' },
  { n: '02', title: 'Connect', code: 'aegis link --repo your/repo' },
  { n: '03', title: 'Run', code: 'aegis eval run --suite prod' },
]

export function DevEx() {
  return (
    <section className="py-28 bg-bg relative overflow-hidden">
      {/* Subtle dot grid background */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(circle, rgba(37,99,235,0.07) 1px, transparent 1px)',
          backgroundSize: '32px 32px',
        }}
        aria-hidden="true"
      />

      <div className="relative max-w-[1280px] mx-auto px-8">
        <SectionLabel name="DEVELOPER EXPERIENCE" index={5} />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-14 items-end">
          <motion.h2
            variants={variants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.4, ease: 'easeOut' }}
            className="font-display font-bold text-[32px] md:text-[48px] text-ink leading-tight"
          >
            In your CI pipeline<br />
            <span className="text-accent">in 5 minutes.</span>
          </motion.h2>
          <motion.p
            variants={variants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.4, ease: 'easeOut', delay: 0.1 }}
            className="text-muted text-base leading-relaxed"
          >
            One SDK. Any agent framework. Any CI provider. Three steps and you have
            pass/fail eval reports on every PR.
          </motion.p>
        </div>

        {/* Steps + code */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.6fr] gap-8 mb-10">
          {/* Steps */}
          <motion.div
            variants={variants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.4, ease: 'easeOut', delay: 0.08 }}
            className="flex flex-col gap-0 border border-border rounded-2xl overflow-hidden"
          >
            {steps.map((s, i) => (
              <div
                key={s.n}
                className={`flex items-center gap-5 px-6 py-5 bg-white ${i < steps.length - 1 ? 'border-b border-border' : ''}`}
              >
                <span className="font-mono text-xs text-muted shrink-0">{s.n}</span>
                <div>
                  <p className="text-sm font-medium text-ink mb-1">{s.title}</p>
                  <code className="font-mono text-xs text-accent bg-bg-alt px-2 py-0.5 rounded">
                    {s.code}
                  </code>
                </div>
              </div>
            ))}
          </motion.div>

          {/* Code block */}
          <motion.div
            variants={variants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.4, ease: 'easeOut', delay: 0.16 }}
          >
            <CodeBlock />
          </motion.div>
        </div>

        {/* Integration pills */}
        <motion.div
          variants={variants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.4, ease: 'easeOut', delay: 0.24 }}
          className="flex flex-wrap gap-2"
        >
          {integrations.map((name) => (
            <span
              key={name}
              className="border border-border text-xs text-muted font-mono px-4 py-2 rounded-full hover:border-accent hover:text-accent transition-colors cursor-default bg-white"
            >
              {name}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
