"use client";

import { motion } from "framer-motion";

const cases = [
  {
    color: "#A8FF3E",
    title: "Autonomous API Economies",
    body: "Agents pay for data and services on demand via micropayments. No subscriptions, no rate limits — pure pay-per-action resource access.",
    example: "Agent pays 0.01 XLM → gets weather → charges client 0.05 XLM",
  },
  {
    color: "#C4B5FD",
    title: "Agent Marketplaces",
    body: "Specialized agents sell their outputs to other agents. A research agent sells summaries to a trading agent — all settled on Stellar.",
    example: "47 agents transacting in an autonomous research marketplace",
  },
  {
    color: "#F59E0B",
    title: "Memory-Driven Research",
    body: "Research agents that accumulate institutional knowledge over time. Findings persist across sessions, teams build shared intelligence.",
    example: "1,247 vectors of research memory shared across a 12-agent team",
  },
  {
    color: "#818CF8",
    title: "Financial Decision Engines",
    body: "Agents that optimize cost, allocate budget, and make financial decisions in real-time — with full audit trails and explainability.",
    example: "Agent manages $500 USDC research budget autonomously over 3 days",
  },
  {
    color: "#34D399",
    title: "Multi-Agent Coordination",
    body: "Teams of agents with shared objectives, shared memory, and delegated tasks. Coordinator agents direct specialists — fully autonomous.",
    example:
      "Coordinator + 5 specialists complete enterprise analysis in 18 min",
  },
  {
    color: "#67E8F9",
    title: "Paid Knowledge Networks",
    body: "Build networks where agents monetize their expertise. Agents with specialized memory sell context to generalist agents on demand.",
    example:
      "Legal agent earns 2.4 XLM/hr selling compliance context to 8 agents",
  },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.07 } },
};
const item = {
  hidden: { opacity: 0, y: 18 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.45,
      ease: [0.25, 0.1, 0.25, 1] as [number, number, number, number],
    },
  },
};

export function UseCases() {
  return (
    <section
      style={{
        background: "#0A0A0F",
        borderBottom: "1px solid rgba(255,255,255,0.06)",
      }}
    >
      <div className="max-w-[1280px] mx-auto px-6 md:px-8 py-20 md:py-28">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div>
            <div
              className="inline-block font-mono text-[10px] font-bold uppercase tracking-widest mb-4 px-2.5 py-1.5 rounded-full"
              style={{
                background: "rgba(168,255,62,0.08)",
                border: "1px solid rgba(168,255,62,0.2)",
                color: "#A8FF3E",
              }}
            >
              Use Cases
            </div>
            <h2
              className="font-display font-bold text-4xl md:text-5xl leading-tight"
              style={{ color: "#EDECF4" }}
            >
              What gets built
              <br />
              on Pragmabase.
            </h2>
          </div>
          <p className="text-base max-w-sm" style={{ color: "#6B6B85" }}>
            When agents can remember, pay, and coordinate — entirely new systems
            become possible.
          </p>
        </div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-4"
        >
          {cases.map((c) => (
            <motion.div
              key={c.title}
              variants={item}
              className="rounded-2xl p-6 flex flex-col gap-4 cursor-default transition-all duration-300 hover:-translate-y-0.5"
              style={{
                background: "#14141F",
                border: `1px solid ${c.color}18`,
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor =
                  c.color + "30";
                (e.currentTarget as HTMLElement).style.boxShadow =
                  `0 8px 32px ${c.color}10`;
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor =
                  c.color + "18";
                (e.currentTarget as HTMLElement).style.boxShadow = "none";
              }}
            >
              <div
                className="w-8 h-1 rounded-full"
                style={{ background: c.color }}
              />
              <h3
                className="font-display font-bold text-lg leading-snug"
                style={{ color: "#EDECF4" }}
              >
                {c.title}
              </h3>
              <p
                className="text-sm leading-relaxed flex-1"
                style={{ color: "#6B6B85" }}
              >
                {c.body}
              </p>
              <div
                className="mt-1 px-3 py-2 rounded-lg font-mono text-[11px] leading-snug"
                style={{
                  background: c.color + "08",
                  border: `1px solid ${c.color}18`,
                  color: c.color,
                }}
              >
                {c.example}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
