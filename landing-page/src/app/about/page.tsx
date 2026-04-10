import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About — Pragmabase",
  description:
    "The team and mission behind Pragmabase — the economic + cognitive OS for autonomous agents.",
};

const team = [
  {
    name: "David Ogar",
    initials: "DO",
    role: "Founder & CEO",
    bio: "Built distributed systems at scale. Became obsessed with why agents keep forgetting things and spending money blindly. Started Pragmabase to fix both.",
    color: "#7C3AED",
  },
  {
    name: "Rin Takahashi",
    initials: "RT",
    role: "Head of Protocol",
    bio: "Ex-Stellar core contributor. Designed the x402 payment protocol from first principles. Believes micropayments are the missing primitive for autonomous systems.",
    color: "#A8FF3E",
  },
  {
    name: "Lars Hoffmann",
    initials: "LH",
    role: "Head of Infrastructure",
    bio: "Systems engineer. Previously built high-throughput settlement infrastructure at a fintech. Architected the Soroban guardrail system.",
    color: "#818CF8",
  },
  {
    name: "Priya Mehta",
    initials: "PM",
    role: "Head of Research",
    bio: "AI researcher focused on agent memory and decision-making. Author of the dual-state architecture paper. Believes agents should evolve, not reset.",
    color: "#F59E0B",
  },
];

const values = [
  {
    title: "Agents are economic actors",
    desc: "Every autonomous agent will eventually interact with economic systems. We build for that reality now.",
  },
  {
    title: "Memory = identity",
    desc: "An agent that forgets is a tool. An agent that remembers is a collaborator. We build collaborators.",
  },
  {
    title: "Test before it costs you",
    desc: "The Reliability Lab exists because financial mistakes are expensive. Simulate first, deploy with confidence.",
  },
  {
    title: "Open protocols over lock-in",
    desc: "x402 is an open standard. Soroban is public infrastructure. We build on open rails.",
  },
];

const milestones = [
  {
    year: "2026 Q3",
    event:
      "Founded in Lagos. First dual-state agent prototype deployed on Stellar testnet.",
  },
  {
    year: "2026 Q4",
    event:
      "x402 protocol specification published. First Soroban guardrail contracts deployed.",
  },
  {
    year: "2026 Q1",
    event:
      "Public beta launched. Reached 500K simulated agent transactions in the first month.",
  },
  {
    year: "2026 Q2",
    event:
      "Qdrant memory layer integrated. Team memory across multi-agent systems goes live.",
  },
];

export default function AboutPage() {
  return (
    <>
      <Nav />
      <main style={{ background: "#0A0A0F" }}>
        {/* Hero */}
        <section
          className="relative py-24 overflow-hidden"
          style={{ borderBottom: "1px solid rgba(255,255,255,0.06)" }}
        >
          <div
            className="absolute inset-0 opacity-[0.03] pointer-events-none"
            style={{
              backgroundImage:
                "linear-gradient(white 1px, transparent 1px), linear-gradient(90deg, white 1px, transparent 1px)",
              backgroundSize: "48px 48px",
            }}
          />
          <div
            className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[700px] h-[500px] pointer-events-none"
            style={{
              background:
                "radial-gradient(ellipse, rgba(124,58,237,0.12) 0%, transparent 65%)",
            }}
          />

          <div className="relative max-w-[1280px] mx-auto px-6 md:px-8">
            <div
              className="flex justify-between text-xs uppercase tracking-widest mb-12 pb-4 font-mono"
              style={{
                color: "rgba(255,255,255,0.18)",
                borderBottom: "1px solid rgba(255,255,255,0.07)",
              }}
            >
              <span>About</span>
              <span>Pragmabase</span>
            </div>

            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <div
                  className="inline-block font-mono text-[10px] font-bold uppercase tracking-widest mb-5 px-2.5 py-1.5 rounded-full"
                  style={{
                    background: "rgba(124,58,237,0.12)",
                    border: "1px solid rgba(124,58,237,0.25)",
                    color: "#C4B5FD",
                  }}
                >
                  Our Mission
                </div>
                <h1
                  className="font-display font-bold text-white leading-tight mb-5"
                  style={{ fontSize: "clamp(32px,4.5vw,60px)" }}
                >
                  We build the economic
                  <br />+ cognitive OS for
                  <br />
                  <span style={{ color: "#C4B5FD" }}>autonomous agents.</span>
                </h1>
                <p
                  className="text-base leading-relaxed mb-8 max-w-md"
                  style={{ color: "#6B6B85" }}
                >
                  Pragmabase started from a simple observation: agents today are
                  economically blind and cognitively amnesiac. Every run starts
                  from scratch. Every payment is manual. We built the
                  infrastructure layer that changes that.
                </p>
                <div className="flex flex-wrap gap-3">
                  {["Stellar Ecosystem", "Qdrant Partner", "x402 Protocol"].map(
                    (badge) => (
                      <span
                        key={badge}
                        className="text-xs font-mono px-3 py-1.5 rounded-full"
                        style={{
                          background: "rgba(255,255,255,0.05)",
                          border: "1px solid rgba(255,255,255,0.1)",
                          color: "rgba(255,255,255,0.45)",
                        }}
                      >
                        {badge}
                      </span>
                    ),
                  )}
                </div>
              </div>

              <div className="hidden lg:flex items-center justify-center">
                <MissionIllustration />
              </div>
            </div>
          </div>
        </section>

        {/* Stats */}
        <section
          className="py-16"
          style={{
            background: "#0F0F18",
            borderBottom: "1px solid rgba(255,255,255,0.06)",
          }}
        >
          <div className="max-w-[1280px] mx-auto px-6 md:px-8">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  val: "500K+",
                  label: "Transactions simulated",
                  color: "#A8FF3E",
                },
                {
                  val: "< 100ms",
                  label: "Avg wallet settlement",
                  color: "#C4B5FD",
                },
                { val: "99.9%", label: "Platform uptime", color: "#818CF8" },
                {
                  val: "x402",
                  label: "Open payment standard",
                  color: "#F59E0B",
                },
              ].map((s) => (
                <div key={s.label} className="text-center">
                  <div
                    className="font-display font-bold text-3xl md:text-4xl mb-1"
                    style={{ color: s.color }}
                  >
                    {s.val}
                  </div>
                  <div
                    className="text-xs font-mono"
                    style={{ color: "#6B6B85" }}
                  >
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Mission + values */}
        <section className="py-24" style={{ background: "#0A0A0F" }}>
          <div className="max-w-[1280px] mx-auto px-6 md:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-start">
              <div>
                <p
                  className="font-mono text-[10px] font-bold uppercase tracking-widest mb-4"
                  style={{ color: "rgba(255,255,255,0.2)" }}
                >
                  What we believe
                </p>
                <h2
                  className="font-display font-bold leading-tight mb-6"
                  style={{
                    fontSize: "clamp(24px,3.5vw,40px)",
                    color: "#EDECF4",
                  }}
                >
                  The next wave of AI is
                  <br />
                  <span style={{ color: "#C4B5FD" }}>economically active.</span>
                </h2>
                <p
                  className="text-sm leading-relaxed mb-4"
                  style={{ color: "#6B6B85" }}
                >
                  The AI industry has invested billions in making agents more
                  capable — but almost nothing in giving them economic autonomy
                  or persistent identity. Agents that forget everything and
                  can&apos;t pay for resources aren&apos;t truly autonomous.
                </p>
                <p
                  className="text-sm leading-relaxed"
                  style={{ color: "#6B6B85" }}
                >
                  Pragmabase provides the missing layer: Stellar-native wallets,
                  Qdrant-backed memory, and Soroban-enforced guardrails. Agents
                  that remember, pay, and coordinate.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {values.map((v) => (
                  <div
                    key={v.title}
                    className="rounded-2xl p-5"
                    style={{
                      background: "#14141F",
                      border: "1px solid rgba(255,255,255,0.07)",
                    }}
                  >
                    <div
                      className="w-1.5 h-1.5 rounded-full mb-3"
                      style={{ background: "#7C3AED" }}
                    />
                    <p
                      className="text-sm font-bold mb-1.5"
                      style={{ color: "#EDECF4" }}
                    >
                      {v.title}
                    </p>
                    <p
                      className="text-xs leading-relaxed"
                      style={{ color: "#6B6B85" }}
                    >
                      {v.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Team */}
        {/* <section
          className="py-24"
          style={{
            background: "#0F0F18",
            borderTop: "1px solid rgba(255,255,255,0.06)",
          }}
        >
          <div className="max-w-[1280px] mx-auto px-6 md:px-8">
            <div
              className="flex justify-between text-xs uppercase tracking-widest mb-12 pb-4 font-mono"
              style={{
                color: "rgba(255,255,255,0.18)",
                borderBottom: "1px solid rgba(255,255,255,0.07)",
              }}
            >
              <span>Team</span>
            </div>
            <div className="grid lg:grid-cols-2 gap-12 mb-12">
              <h2
                className="font-display font-bold leading-tight"
                style={{ fontSize: "clamp(24px,3.5vw,40px)", color: "#EDECF4" }}
              >
                Built by people who&apos;ve
                <br />
                shipped broken agents.
              </h2>
              <p
                className="text-sm leading-relaxed self-end"
                style={{ color: "#6B6B85" }}
              >
                We&apos;ve all spent time watching agents make expensive
                mistakes in production. We built Pragmabase because &ldquo;add
                more guardrails&rdquo; wasn&apos;t a good enough answer.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              {team.map((member) => (
                <div
                  key={member.name}
                  className="rounded-2xl p-6"
                  style={{
                    background: "#14141F",
                    border: "1px solid rgba(255,255,255,0.07)",
                  }}
                >
                  <div
                    className="w-12 h-12 rounded-xl mb-4 flex items-center justify-center font-display font-bold text-lg text-white"
                    style={{
                      background: member.color + "25",
                      border: `1px solid ${member.color}40`,
                    }}
                  >
                    <span style={{ color: member.color }}>
                      {member.initials}
                    </span>
                  </div>
                  <p
                    className="text-sm font-bold mb-0.5"
                    style={{ color: "#EDECF4" }}
                  >
                    {member.name}
                  </p>
                  <p
                    className="text-xs font-mono mb-3"
                    style={{ color: member.color }}
                  >
                    {member.role}
                  </p>
                  <p
                    className="text-xs leading-relaxed"
                    style={{ color: "#6B6B85" }}
                  >
                    {member.bio}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section> */}

        {/* Timeline */}
        <section
          className="py-24"
          style={{
            background: "#0A0A0F",
            borderTop: "1px solid rgba(255,255,255,0.06)",
          }}
        >
          <div className="max-w-[1280px] mx-auto px-6 md:px-8">
            <div
              className="flex justify-between text-xs uppercase tracking-widest mb-12 pb-4 font-mono"
              style={{
                color: "rgba(255,255,255,0.18)",
                borderBottom: "1px solid rgba(255,255,255,0.07)",
              }}
            >
              <span>Timeline</span>
            </div>
            <div className="grid lg:grid-cols-2 gap-12 items-start">
              <h2
                className="font-display font-bold leading-tight"
                style={{ fontSize: "clamp(24px,3.5vw,40px)", color: "#EDECF4" }}
              >
                The story so far.
              </h2>
              <div
                className="space-y-0 rounded-2xl overflow-hidden"
                style={{ border: "1px solid rgba(255,255,255,0.07)" }}
              >
                {milestones.map((m, i) => (
                  <div
                    key={m.year}
                    className="flex items-start gap-6 p-6"
                    style={{
                      borderBottom:
                        i < milestones.length - 1
                          ? "1px solid rgba(255,255,255,0.06)"
                          : undefined,
                      background: "#14141F",
                    }}
                  >
                    <span
                      className="font-mono text-xs font-bold shrink-0 pt-0.5 w-16"
                      style={{ color: "#7C3AED" }}
                    >
                      {m.year}
                    </span>
                    <p
                      className="text-sm leading-relaxed"
                      style={{ color: "#9E9EB8" }}
                    >
                      {m.event}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Hiring CTA */}
        <section
          className="relative py-24 overflow-hidden"
          style={{
            background:
              "linear-gradient(145deg, #0D0520 0%, #1A0A3E 30%, #2D1463 65%, #1A0A3E 100%)",
            borderTop: "1px solid rgba(255,255,255,0.06)",
          }}
        >
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                "radial-gradient(ellipse at 50% 60%, rgba(124,58,237,0.3) 0%, transparent 65%)",
            }}
          />
          <div
            className="absolute inset-0 opacity-[0.04] pointer-events-none"
            style={{
              backgroundImage:
                "linear-gradient(white 1px, transparent 1px), linear-gradient(90deg, white 1px, transparent 1px)",
              backgroundSize: "40px 40px",
            }}
          />

          <div className="relative max-w-[1280px] mx-auto px-6 md:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div
                  className="inline-block font-mono text-[10px] font-bold uppercase tracking-widest mb-5 px-2.5 py-1.5 rounded-full"
                  style={{
                    background: "rgba(168,255,62,0.1)",
                    border: "1px solid rgba(168,255,62,0.25)",
                    color: "#A8FF3E",
                  }}
                >
                  We&apos;re Hiring
                </div>
                <h2
                  className="font-display font-bold text-white leading-tight mb-4"
                  style={{ fontSize: "clamp(28px,4vw,52px)" }}
                >
                  Build the future
                  <br />
                  of agentic
                  <br />
                  infrastructure.
                </h2>
                <p
                  className="text-base mb-8 max-w-md"
                  style={{ color: "rgba(196,181,253,0.65)" }}
                >
                  If you want to build the economic layer for autonomous agents
                  — using Stellar, Soroban, and open protocols — come work with
                  us. Remote-first, early team.
                </p>
                <div className="flex gap-3">
                  <a
                    href="/careers"
                    className="font-bold text-sm px-7 py-3.5 rounded-xl transition-all"
                    style={{
                      background: "#A8FF3E",
                      color: "#0A0A0F",
                      boxShadow: "0 8px 32px rgba(168,255,62,0.25)",
                    }}
                  >
                    See open roles →
                  </a>
                  <a
                    href="/contact"
                    className="font-medium text-sm px-7 py-3.5 rounded-xl text-white transition-all"
                    style={{
                      background: "rgba(255,255,255,0.06)",
                      border: "1px solid rgba(255,255,255,0.12)",
                    }}
                  >
                    Contact us
                  </a>
                </div>
              </div>
              <div className="hidden lg:flex items-center justify-center">
                <OpenRolesIllustration />
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

function MissionIllustration() {
  return (
    <svg
      width="340"
      height="260"
      viewBox="0 0 340 260"
      fill="none"
      aria-hidden="true"
    >
      <polygon
        points="170,30 220,58 220,114 170,142 120,114 120,58"
        fill="rgba(124,58,237,0.12)"
        stroke="rgba(124,58,237,0.4)"
        strokeWidth="1.2"
      />
      <text
        x="170"
        y="86"
        textAnchor="middle"
        fill="#C4B5FD"
        fontSize="10"
        fontFamily="Bricolage Grotesque"
        fontWeight="700"
      >
        PRAGMA
      </text>
      <text
        x="170"
        y="100"
        textAnchor="middle"
        fill="rgba(196,181,253,0.4)"
        fontSize="7"
        fontFamily="JetBrains Mono"
      >
        economic + cognitive OS
      </text>

      {[
        { cx: 58, cy: 65, label: "Stellar", sub: "Payments", color: "#A8FF3E" },
        { cx: 282, cy: 65, label: "Qdrant", sub: "Memory", color: "#818CF8" },
        {
          cx: 42,
          cy: 175,
          label: "Soroban",
          sub: "Guardrails",
          color: "#C4B5FD",
        },
        { cx: 298, cy: 175, label: "x402", sub: "Protocol", color: "#F59E0B" },
        {
          cx: 170,
          cy: 222,
          label: "Roku",
          sub: "Default agent",
          color: "#34D399",
        },
      ].map((node) => (
        <g key={node.label}>
          <line
            x1={node.cx}
            y1={node.cy}
            x2="170"
            y2="86"
            stroke={node.color + "20"}
            strokeWidth="1"
            strokeDasharray="3 3"
          />
          <rect
            x={node.cx - 38}
            y={node.cy - 18}
            width="76"
            height="36"
            rx="8"
            fill="rgba(255,255,255,0.04)"
            stroke={node.color + "40"}
            strokeWidth="0.8"
          />
          <text
            x={node.cx}
            y={node.cy - 4}
            textAnchor="middle"
            fill={node.color}
            fontSize="8"
            fontFamily="DM Sans"
            fontWeight="600"
          >
            {node.label}
          </text>
          <text
            x={node.cx}
            y={node.cy + 8}
            textAnchor="middle"
            fill="rgba(255,255,255,0.25)"
            fontSize="7"
            fontFamily="JetBrains Mono"
          >
            {node.sub}
          </text>
        </g>
      ))}
    </svg>
  );
}

function OpenRolesIllustration() {
  const roles = [
    "Protocol Engineer",
    "AI Researcher",
    "Infra Engineer",
    "Developer Rel.",
  ];
  return (
    <svg
      width="320"
      height="220"
      viewBox="0 0 320 220"
      fill="none"
      aria-hidden="true"
    >
      {roles.map((role, i) => (
        <g key={role}>
          <rect
            x="20"
            y={20 + i * 48}
            width="280"
            height="38"
            rx="8"
            fill="rgba(255,255,255,0.04)"
            stroke="rgba(255,255,255,0.08)"
            strokeWidth="0.8"
          />
          <rect
            x="28"
            y={28 + i * 48}
            width="22"
            height="22"
            rx="6"
            fill="rgba(124,58,237,0.2)"
          />
          <text
            x="64"
            y={42 + i * 48}
            fill="rgba(255,255,255,0.7)"
            fontSize="9.5"
            fontFamily="DM Sans"
            fontWeight="600"
          >
            {role}
          </text>
          <text
            x="64"
            y={54 + i * 48}
            fill="rgba(255,255,255,0.25)"
            fontSize="8"
            fontFamily="JetBrains Mono"
          >
            Remote · Full-time
          </text>
          <rect
            x="242"
            y={29 + i * 48}
            width="44"
            height="20"
            rx="6"
            fill="rgba(168,255,62,0.12)"
          />
          <text
            x="264"
            y={43 + i * 48}
            textAnchor="middle"
            fill="#A8FF3E"
            fontSize="8"
            fontFamily="JetBrains Mono"
          >
            Open
          </text>
        </g>
      ))}
    </svg>
  );
}
