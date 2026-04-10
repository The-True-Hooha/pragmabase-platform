import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog — Pragmabase",
  description:
    "Engineering deep dives, protocol updates, and research from the Pragmabase team.",
};

const categoryColors: Record<string, string> = {
  Engineering: "#A8FF3E",
  Research: "#C4B5FD",
  Protocol: "#818CF8",
  Product: "#F59E0B",
};

const posts = [
  {
    slug: "x402-protocol-deep-dive",
    title: "x402: Why AI Agents Need Their Own Payment Protocol",
    excerpt:
      "API keys are broken for autonomous agents. We built x402 — an HTTP-native micropayment protocol on Stellar — to replace them. Here's why it matters and how it works.",
    category: "Protocol",
    date: "Apr 3, 2026",
    readTime: "12 min",
    author: "Priya Mehta",
    role: "Head of Research",
    featured: true,
  },
  {
    slug: "dual-state-agents",
    title: "Dual-State Agents: Giving AI Both a Brain and a Wallet",
    excerpt:
      "Why every autonomous agent needs both cognitive state (memory) and economic state (wallet). A technical breakdown of the Pragmabase dual-state architecture.",
    category: "Engineering",
    date: "Mar 20, 2026",
    readTime: "9 min",
    author: "Lars Hoffmann",
    role: "Head of Infrastructure",
  },
  {
    slug: "soroban-guardrails",
    title: "Encoding Agent Safety in Smart Contracts: The Soroban Approach",
    excerpt:
      "Prompt-level guardrails fail under adversarial conditions. We encode agent behavioral constraints as Soroban smart contracts on Stellar — here's the design.",
    category: "Research",
    date: "Mar 5, 2026",
    readTime: "15 min",
    author: "David Ogar",
    role: "Founder & CEO",
  },
  {
    slug: "qdrant-persistent-memory",
    title: "What Happens When Agents Actually Remember",
    excerpt:
      "We ran 12 agent workloads for 30 days with and without persistent Qdrant memory. The results surprised us. Performance compounds in ways that are hard to design for.",
    category: "Research",
    date: "Feb 18, 2026",
    readTime: "10 min",
    author: "Rin Takahashi",
    role: "Head of Protocol",
  },
  {
    slug: "reliability-lab-why",
    title: "Why We Built a Reliability Lab (and Why You Should Care)",
    excerpt:
      "An autonomous agent with a wallet making bad decisions is a financial incident. We built the reliability lab so that failure happens in simulation, not production.",
    category: "Product",
    date: "Feb 2, 2026",
    readTime: "7 min",
    author: "Priya Mehta",
    role: "Head of Research",
  },
];

const [featured, ...rest] = posts;

export default function BlogPage() {
  return (
    <>
      <Nav />
      <main style={{ background: "#0A0A0F" }}>
        {/* Header */}
        <section
          className="relative py-20 overflow-hidden"
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
            className="absolute top-0 left-1/3 w-[500px] h-[400px] pointer-events-none"
            style={{
              background:
                "radial-gradient(ellipse, rgba(124,58,237,0.1) 0%, transparent 65%)",
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
              <span>Blog</span>
              <span>Pragmabase</span>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div
                  className="inline-block font-mono text-[10px] font-bold uppercase tracking-widest mb-5 px-2.5 py-1.5 rounded-full"
                  style={{
                    background: "rgba(168,255,62,0.1)",
                    border: "1px solid rgba(168,255,62,0.2)",
                    color: "#A8FF3E",
                  }}
                >
                  Engineering Blog
                </div>
                <h1
                  className="font-display font-bold text-white leading-tight mb-4"
                  style={{ fontSize: "clamp(32px,4.5vw,58px)" }}
                >
                  Thinking about
                  <br />
                  agent infrastructure.
                </h1>
                <p
                  className="text-base leading-relaxed mb-8 max-w-md"
                  style={{ color: "#6B6B85" }}
                >
                  Protocol specs, architecture deep dives, and research findings
                  from the team building the economic + cognitive OS for
                  autonomous agents.
                </p>
                <div className="flex gap-8">
                  {[
                    { val: `${posts.length}`, lbl: "Articles" },
                    { val: "4", lbl: "Authors" },
                    { val: "Biweekly", lbl: "Cadence" },
                  ].map((s) => (
                    <div key={s.lbl}>
                      <div className="font-mono font-bold text-xl text-white">
                        {s.val}
                      </div>
                      <div
                        className="text-xs font-mono uppercase tracking-wider mt-0.5"
                        style={{ color: "rgba(255,255,255,0.25)" }}
                      >
                        {s.lbl}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="hidden lg:flex items-center justify-center">
                <BlogIllustration />
              </div>
            </div>
          </div>
        </section>

        {/* Posts */}
        <section className="py-20" style={{ background: "#0F0F18" }}>
          <div className="max-w-[1280px] mx-auto px-6 md:px-8">
            {/* Category filter */}
            <div className="flex flex-wrap gap-2 mb-12">
              {["All", "Engineering", "Research", "Protocol", "Product"].map(
                (cat) => (
                  <span
                    key={cat}
                    className="text-xs font-mono px-4 py-2 rounded-full cursor-pointer transition-all"
                    style={
                      cat === "All"
                        ? {
                            background: "#7C3AED",
                            color: "#fff",
                            border: "1px solid #7C3AED",
                          }
                        : {
                            background: "rgba(255,255,255,0.04)",
                            color: "#6B6B85",
                            border: "1px solid rgba(255,255,255,0.08)",
                          }
                    }
                  >
                    {cat}
                  </span>
                ),
              )}
            </div>

            {/* Featured post */}
            <a
              href={`/blog/${featured.slug}`}
              className="block rounded-2xl overflow-hidden mb-6 group transition-all"
              style={{
                background: "#14141F",
                border: "1px solid rgba(255,255,255,0.08)",
              }}
            >
              <div className="grid lg:grid-cols-[1fr_2fr]">
                {/* Visual */}
                <div
                  className="min-h-[180px] lg:min-h-full relative overflow-hidden"
                  style={{
                    background: "linear-gradient(145deg, #1A0A3E, #0D0520)",
                  }}
                >
                  <div
                    className="absolute inset-0 opacity-[0.05]"
                    style={{
                      backgroundImage:
                        "linear-gradient(white 1px, transparent 1px), linear-gradient(90deg, white 1px, transparent 1px)",
                      backgroundSize: "32px 32px",
                    }}
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <span
                        className="font-mono text-[10px] uppercase tracking-widest px-3 py-1.5 rounded-full block mb-3"
                        style={{
                          background: "rgba(168,255,62,0.15)",
                          color: "#A8FF3E",
                          border: "1px solid rgba(168,255,62,0.3)",
                        }}
                      >
                        Featured
                      </span>
                      <svg
                        width="40"
                        height="40"
                        viewBox="0 0 24 24"
                        fill="none"
                        className="mx-auto"
                        aria-hidden="true"
                      >
                        <path
                          d="M2 7.5h11M7.5 2l5.5 5.5L7.5 13"
                          stroke="#A8FF3E"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                  </div>
                </div>

                <div className="p-10">
                  <div className="flex items-center gap-3 mb-5">
                    <span
                      className="text-[10px] font-mono uppercase tracking-wider px-2.5 py-1 rounded"
                      style={{
                        background:
                          (categoryColors[featured.category] ?? "#7C3AED") +
                          "15",
                        color: categoryColors[featured.category] ?? "#7C3AED",
                      }}
                    >
                      {featured.category}
                    </span>
                    <span
                      className="text-xs font-mono"
                      style={{ color: "rgba(255,255,255,0.2)" }}
                    >
                      {featured.date}
                    </span>
                    <span style={{ color: "rgba(255,255,255,0.15)" }}>·</span>
                    <span
                      className="text-xs font-mono"
                      style={{ color: "rgba(255,255,255,0.2)" }}
                    >
                      {featured.readTime}
                    </span>
                  </div>
                  <h2
                    className="font-display font-bold text-2xl md:text-3xl leading-tight mb-3 transition-colors group-hover:text-[#C4B5FD]"
                    style={{ color: "#EDECF4" }}
                  >
                    {featured.title}
                  </h2>
                  <p
                    className="text-sm leading-relaxed mb-6"
                    style={{ color: "#6B6B85" }}
                  >
                    {featured.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <div>
                      <p
                        className="text-xs font-semibold"
                        style={{ color: "#EDECF4" }}
                      >
                        {featured.author}
                      </p>
                      {featured.role && (
                        <p className="text-xs" style={{ color: "#6B6B85" }}>
                          {featured.role}
                        </p>
                      )}
                    </div>
                    <span
                      className="font-bold text-sm px-5 py-2.5 rounded-xl"
                      style={{ background: "#A8FF3E", color: "#0A0A0F" }}
                    >
                      Read →
                    </span>
                  </div>
                </div>
              </div>
            </a>

            {/* Post grid */}
            <div className="grid md:grid-cols-2 gap-4">
              {rest.map((post) => (
                <a
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className="block rounded-2xl p-7 group transition-all duration-300 hover:-translate-y-0.5"
                  style={{
                    background: "#14141F",
                    border: "1px solid rgba(255,255,255,0.07)",
                  }}
                >
                  <div className="flex items-center gap-2 mb-4">
                    <span
                      className="text-[10px] font-mono uppercase tracking-wider px-2.5 py-1 rounded"
                      style={{
                        background:
                          (categoryColors[post.category] ?? "#6B6B85") + "15",
                        color: categoryColors[post.category] ?? "#6B6B85",
                      }}
                    >
                      {post.category}
                    </span>
                    <span
                      className="text-[10px] font-mono"
                      style={{ color: "rgba(255,255,255,0.2)" }}
                    >
                      {post.readTime}
                    </span>
                  </div>
                  <h3
                    className="font-display font-bold text-base leading-snug mb-3 transition-colors group-hover:text-[#C4B5FD]"
                    style={{ color: "#EDECF4" }}
                  >
                    {post.title}
                  </h3>
                  <p
                    className="text-xs leading-relaxed mb-5"
                    style={{ color: "#6B6B85" }}
                  >
                    {post.excerpt}
                  </p>
                  <div
                    style={{
                      borderTop: "1px solid rgba(255,255,255,0.06)",
                      paddingTop: "16px",
                    }}
                    className="flex items-center justify-between"
                  >
                    <div>
                      <p
                        className="text-[11px] font-semibold"
                        style={{ color: "#9E9EB8" }}
                      >
                        {post.author}
                      </p>
                      <p
                        className="text-[10px] font-mono"
                        style={{ color: "rgba(255,255,255,0.2)" }}
                      >
                        {post.date}
                      </p>
                    </div>
                    <span
                      className="text-xs font-mono transition-opacity opacity-0 group-hover:opacity-100"
                      style={{ color: "#A8FF3E" }}
                    >
                      →
                    </span>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

function BlogIllustration() {
  const articles = [
    { cat: "Protocol", color: "#818CF8" },
    { cat: "Engineering", color: "#A8FF3E" },
    { cat: "Research", color: "#C4B5FD" },
  ];
  return (
    <svg
      width="300"
      height="200"
      viewBox="0 0 300 200"
      fill="none"
      aria-hidden="true"
    >
      {articles.map((a, i) => (
        <g key={i}>
          <rect
            x="20"
            y={16 + i * 60}
            width="240"
            height="48"
            rx="10"
            fill="rgba(255,255,255,0.04)"
            stroke="rgba(255,255,255,0.08)"
            strokeWidth="0.8"
          />
          <rect
            x="32"
            y={24 + i * 60}
            width="54"
            height="14"
            rx="4"
            fill={a.color + "20"}
          />
          <text
            x="59"
            y={34 + i * 60}
            textAnchor="middle"
            fill={a.color}
            fontSize="7"
            fontFamily="JetBrains Mono"
          >
            {a.cat}
          </text>
          <rect
            x="32"
            y={44 + i * 60}
            width="150"
            height="6"
            rx="3"
            fill="rgba(255,255,255,0.1)"
          />
          <rect
            x="32"
            y={54 + i * 60}
            width="100"
            height="4"
            rx="2"
            fill="rgba(255,255,255,0.06)"
          />
          <text x="250" y={43 + i * 60} fill={a.color + "60"} fontSize="16">
            →
          </text>
        </g>
      ))}
      {[
        { x: 180, y: 195, label: "#x402" },
        { x: 225, y: 185, label: "#memory" },
        { x: 195, y: 210, label: "#stellar" },
      ].map((tag) => (
        <g key={tag.label}>
          <rect
            x={tag.x - 22}
            y={tag.y - 10}
            width="56"
            height="18"
            rx="9"
            fill="rgba(255,255,255,0.04)"
            stroke="rgba(255,255,255,0.08)"
            strokeWidth="0.7"
          />
          <text
            x={tag.x + 6}
            y={tag.y + 3}
            textAnchor="middle"
            fill="rgba(255,255,255,0.3)"
            fontSize="7"
            fontFamily="JetBrains Mono"
          >
            {tag.label}
          </text>
        </g>
      ))}
    </svg>
  );
}
