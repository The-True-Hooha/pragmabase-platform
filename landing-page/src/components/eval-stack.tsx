'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { SectionLabel } from '@/components/ui/section-label'
import { ChevronDown } from 'lucide-react'
import { cn } from '@/lib/utils'

const variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
}

const layers = [
  {
    id: 'sandbox',
    title: 'Sandbox Isolation',
    tag: 'Layer 1',
    description:
      'Every eval run executes in a fully isolated Firecracker microVM. Zero bleed between runs. Safe tool calling, network sandboxing, and instant teardown under 2 seconds cold start.',
  },
  {
    id: 'proxy',
    title: 'LLM Proxy',
    tag: 'Layer 2',
    description:
      'Route all LLM calls through the Aegis proxy for token-level logging, cost tracking, and replay. Supports OpenAI, Anthropic, Google, and any OpenAI-compatible endpoint.',
  },
  {
    id: 'eval',
    title: 'Evaluation Engine',
    tag: 'Layer 3',
    description:
      'Run custom eval suites with built-in scorers (exact match, LLM-as-judge, tool call validation) or bring your own. Parallelized across runs for fast CI feedback.',
  },
  {
    id: 'telemetry',
    title: 'Telemetry Pipeline',
    tag: 'Layer 4',
    description:
      'OpenTelemetry-native. Every span, tool call, and token streamed to your dashboard in real time. Export to Datadog, Grafana, or any OTLP endpoint.',
  },
  {
    id: 'transcript',
    title: 'Transcript Storage',
    tag: 'Layer 5',
    description:
      'Full conversation transcripts stored and indexed for 90 days. Search, diff, and replay any agent run. SOC 2 compliant storage — you own your data.',
  },
]

const layerGradients: Record<string, string> = {
  sandbox: 'linear-gradient(135deg, #1740A6, #2563EB)',
  proxy: 'linear-gradient(135deg, #1D4ED8, #3B82F6)',
  eval: 'linear-gradient(135deg, #2563EB, #60A5FA)',
  telemetry: 'linear-gradient(135deg, #3B82F6, #93C5FD)',
  transcript: 'linear-gradient(135deg, #60A5FA, #BAE6FD)',
}

function IsometricStack({ activeLayer }: { activeLayer: string }) {
  const ids = ['transcript', 'telemetry', 'eval', 'proxy', 'sandbox']
  return (
    <div className="flex flex-col gap-2 w-full max-w-[320px] mx-auto">
      {ids.map((id, i) => {
        const layer = layers.find((l) => l.id === id)!
        const isActive = id === activeLayer
        return (
          <motion.div
            key={id}
            animate={{ opacity: isActive ? 1 : 0.35, x: isActive ? 6 : 0 }}
            transition={{ duration: 0.2 }}
            className="rounded-lg px-5 py-3 flex items-center justify-between"
            style={{
              background: isActive ? layerGradients[id] : '#F4F7FF',
              border: isActive ? 'none' : '1px solid #E5E9F2',
              boxShadow: isActive ? '0 4px 20px rgba(37,99,235,0.3)' : 'none',
            }}
          >
            <span
              className="text-sm font-medium"
              style={{ color: isActive ? '#fff' : '#6B7280' }}
            >
              {layer.title}
            </span>
            <span
              className="text-xs font-mono"
              style={{ color: isActive ? 'rgba(255,255,255,0.6)' : '#9CA3AF' }}
            >
              {layer.tag}
            </span>
          </motion.div>
        )
      })}
    </div>
  )
}

export function EvalStack() {
  const [open, setOpen] = useState<string>('sandbox')

  return (
    <section className="py-28 bg-bg">
      <div className="max-w-[1280px] mx-auto px-8">
        <SectionLabel name="EVAL STACK" index={3} />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-14">
          <motion.h2
            variants={variants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.4, ease: 'easeOut' }}
            className="font-display font-bold text-[32px] md:text-[48px] text-ink leading-tight"
          >
            Five layers.<br />
            <span className="text-accent">Complete reliability.</span>
          </motion.h2>
          <motion.p
            variants={variants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.4, ease: 'easeOut', delay: 0.1 }}
            className="text-muted text-base leading-relaxed self-end pb-1"
          >
            Each layer of the Aegis stack is independently designed and can be used
            standalone — or as a complete integrated platform.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-12 items-start">
          {/* Stack visualization */}
          <motion.div
            variants={variants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.4, ease: 'easeOut', delay: 0.08 }}
          >
            <IsometricStack activeLayer={open} />
          </motion.div>

          {/* Accordion */}
          <motion.div
            variants={variants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.4, ease: 'easeOut', delay: 0.16 }}
            className="border border-border rounded-2xl overflow-hidden"
          >
            {layers.map((layer, i) => (
              <div key={layer.id} className={cn(i < layers.length - 1 ? 'border-b border-border' : '')}>
                <button
                  onClick={() => setOpen(open === layer.id ? '' : layer.id)}
                  className="w-full flex items-center justify-between px-6 py-4 text-left hover:bg-bg-alt transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <span className="text-xs font-mono text-muted">{layer.tag}</span>
                    <span className={cn('text-sm font-medium', open === layer.id ? 'text-accent' : 'text-ink')}>
                      {layer.title}
                    </span>
                  </div>
                  <ChevronDown
                    size={15}
                    className={cn(
                      'text-muted transition-transform duration-200 shrink-0',
                      open === layer.id ? 'rotate-180 text-accent' : ''
                    )}
                  />
                </button>
                <AnimatePresence initial={false}>
                  {open === layer.id && (
                    <motion.div
                      key="content"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.22, ease: 'easeOut' }}
                      className="overflow-hidden"
                    >
                      <p className="px-6 pb-5 text-sm text-muted leading-relaxed">{layer.description}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
