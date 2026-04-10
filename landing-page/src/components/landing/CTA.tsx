"use client";

import { motion } from "framer-motion";

export function CTA() {
  return (
    <section
      className="overflow-hidden relative"
      style={{
        background:
          "linear-gradient(145deg, #0D0520 0%, #1A0A3E 30%, #2D1463 65%, #1A0A3E 100%)",
      }}
    >
      {/* Purple glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at 50% 60%, rgba(124,58,237,0.35) 0%, transparent 65%)",
        }}
      />
      {/* Lime glow top */}
      <div
        className="absolute top-0 right-[20%] w-[500px] h-[300px] pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse, rgba(168,255,62,0.08) 0%, transparent 70%)",
        }}
      />

      {/* Grid */}
      <div
        className="absolute inset-0 opacity-[0.05] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      {/* Decorative SVG */}
      <svg
        className="absolute right-0 top-0 h-full opacity-[0.07] pointer-events-none"
        viewBox="0 0 500 400"
        fill="none"
        preserveAspectRatio="xMidYMid slice"
      >
        <circle
          cx="400"
          cy="200"
          r="180"
          stroke="white"
          strokeWidth="0.75"
          strokeDasharray="8 8"
        />
        <circle cx="400" cy="200" r="120" stroke="white" strokeWidth="0.75" />
        <circle cx="400" cy="200" r="60" stroke="white" strokeWidth="1" />
        <circle cx="400" cy="200" r="20" fill="white" fillOpacity="0.4" />
        <line
          x1="100"
          y1="200"
          x2="380"
          y2="200"
          stroke="white"
          strokeWidth="0.5"
          strokeDasharray="4 4"
        />
        <line
          x1="400"
          y1="20"
          x2="400"
          y2="180"
          stroke="white"
          strokeWidth="0.5"
          strokeDasharray="4 4"
        />
        <circle cx="220" cy="200" r="6" fill="white" fillOpacity="0.5" />
        <circle cx="400" cy="80" r="5" fill="white" fillOpacity="0.4" />
      </svg>

      <div className="relative max-w-[1280px] mx-auto px-6 md:px-8 py-24 md:py-32">
        <div className="text-center max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-block font-mono text-[10px] font-bold uppercase tracking-widest mb-6 px-3 py-1.5 rounded-full"
            style={{
              background: "rgba(168,255,62,0.1)",
              border: "1px solid rgba(168,255,62,0.25)",
              color: "#A8FF3E",
            }}
          >
            Get Started Today
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.08 }}
            className="font-display font-bold text-5xl md:text-6xl lg:text-7xl leading-[1.05] tracking-tight mb-6 text-white"
          >
            Build agents that
            <br />
            <span style={{ color: "#A8FF3E" }}>actually evolve.</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.16 }}
            className="text-lg leading-relaxed mb-10 max-w-xl mx-auto"
            style={{ color: "rgba(196,181,253,0.65)" }}
          >
            The future of AI is economically active, memory-driven, and
            reliability-tested. Pragmabase is building that future — join us.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.24 }}
            className="flex flex-wrap items-center justify-center gap-4"
          >
            <a
              href="/playground"
              className="inline-flex items-center gap-2.5 px-8 py-4 rounded-xl font-display font-bold text-base transition-all"
              style={{
                background: "#A8FF3E",
                color: "#0A0A0F",
                boxShadow: "0 12px 40px rgba(168,255,62,0.3)",
              }}
              onMouseEnter={(e) =>
                ((e.currentTarget as HTMLElement).style.background = "#BFFF66")
              }
              onMouseLeave={(e) =>
                ((e.currentTarget as HTMLElement).style.background = "#A8FF3E")
              }
            >
              Launch Playground
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path
                  d="M3 8h10M8 3l5 5-5 5"
                  stroke="currentColor"
                  strokeWidth="1.75"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
            <a
              href="/docs"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-display font-bold text-base transition-all text-white"
              style={{ border: "1px solid rgba(255,255,255,0.2)" }}
              onMouseEnter={(e) =>
                ((e.currentTarget as HTMLElement).style.background =
                  "rgba(255,255,255,0.08)")
              }
              onMouseLeave={(e) =>
                ((e.currentTarget as HTMLElement).style.background =
                  "transparent")
              }
            >
              Read the docs
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="mt-14 pt-10 flex flex-wrap items-center justify-center gap-8"
            style={{ borderTop: "1px solid rgba(255,255,255,0.08)" }}
          >
            {[
              { icon: "⚡", text: "Stellar mainnet + testnet" },
              { icon: "🧠", text: "Qdrant vector memory" },
              { icon: "🔐", text: "Soroban guardrails" },
              { icon: "🔁", text: "x402 pay-per-action" },
            ].map((item) => (
              <div
                key={item.text}
                className="flex items-center gap-2 text-sm font-medium"
                style={{ color: "rgba(196,181,253,0.5)" }}
              >
                <span>{item.icon}</span>
                <span>{item.text}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
