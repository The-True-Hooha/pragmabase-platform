"use client";

import { motion } from "framer-motion";
import { SectionLabel } from "@/components/ui/section-label";

const variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const features = [
  { label: "GitHub App", value: "Native" },
  { label: "PR Eval Reports", value: "Auto" },
  { label: "Regression Detection", value: "Real-time" },
  { label: "Transcript Storage", value: "90 days" },
];

export function WhatWeDo() {
  return (
    <section className="py-28 bg-bg-alt">
      <div className="max-w-[1280px] mx-auto px-8">
        <SectionLabel name="WHAT WE DO" index={2} />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start mb-16">
          <motion.h2
            variants={variants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="font-display font-bold text-[32px] md:text-[48px] text-ink leading-tight"
          >
            Bring your agent.
            <br />
            We build confidence.
            <br />
            <span className="text-accent">Your CI just passes.</span>
          </motion.h2>
          <motion.p
            variants={variants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.4, ease: "easeOut", delay: 0.1 }}
            className="text-muted text-base leading-relaxed self-end pb-2"
          >
            Aegis wraps your agent in a full evaluation harness — sandboxed
            execution, live LLM proxying, and CI-native reporting. Ship with
            confidence because you measured it.
          </motion.p>
        </div>

        {/* Card grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0 border border-border rounded-2xl overflow-hidden">
          {/* Platform card — accent */}
          <motion.div
            variants={variants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.4, ease: "easeOut", delay: 0.08 }}
            className="relative overflow-hidden p-8 flex flex-col justify-between min-h-[280px] lg:col-span-1"
            style={{
              background: "linear-gradient(145deg, #1740A6 0%, #2563EB 100%)",
            }}
          >
            {/* Grid lines on blue card */}
            <svg
              className="absolute inset-0 w-full h-full opacity-10"
              aria-hidden="true"
            >
              <defs>
                <pattern
                  id="card-grid"
                  x="0"
                  y="0"
                  width="32"
                  height="32"
                  patternUnits="userSpaceOnUse"
                >
                  <path
                    d="M 32 0 L 0 0 0 32"
                    fill="none"
                    stroke="white"
                    strokeWidth="0.5"
                  />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#card-grid)" />
            </svg>

            <div className="relative">
              <p className="text-xs uppercase tracking-widest text-white/50 font-mono mb-5">
                The Aegis Platform
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                {["<2s cold start", "99.9% uptime", "#1 AgentBench"].map(
                  (m) => (
                    <span
                      key={m}
                      className="font-mono text-xs px-2.5 py-1 rounded-lg text-white"
                      style={{
                        background: "rgba(255,255,255,0.12)",
                        border: "1px solid rgba(255,255,255,0.15)",
                      }}
                    >
                      {m}
                    </span>
                  ),
                )}
              </div>
            </div>

            <button className="relative self-start bg-white text-accent px-5 py-2.5 rounded-lg text-sm font-semibold hover:bg-white/90 transition-colors">
              Start building →
            </button>
          </motion.div>

          {/* CI-native card */}
          <motion.div
            variants={variants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.4, ease: "easeOut", delay: 0.16 }}
            className="p-8 bg-white border-l border-border"
          >
            <p className="text-xs uppercase tracking-widest text-muted font-mono mb-6">
              CI-Native Evaluation
            </p>
            <div>
              {features.map((f, i) => (
                <div
                  key={f.label}
                  className={`flex items-center justify-between py-3.5 ${i < features.length - 1 ? "border-b border-border" : ""}`}
                >
                  <span className="text-sm text-ink">{f.label}</span>
                  <span className="text-xs font-mono text-accent font-medium">
                    {f.value}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Stats card */}
          <motion.div
            variants={variants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.4, ease: "easeOut", delay: 0.24 }}
            className="p-8 bg-bg-alt border-l border-border flex flex-col gap-6"
          >
            <p className="text-xs uppercase tracking-widest text-muted font-mono">
              At a glance
            </p>
            {[
              { val: "10M+", lbl: "evals run" },
              { val: "2,400+", lbl: "GitHub stars" },
              { val: "47ms", lbl: "avg latency" },
            ].map((s) => (
              <div key={s.lbl}>
                <div className="font-mono font-bold text-3xl text-ink leading-none mb-0.5">
                  {s.val}
                </div>
                <div className="text-xs uppercase tracking-widest text-muted font-mono">
                  {s.lbl}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
