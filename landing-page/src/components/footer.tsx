"use client";

const columns = [
  {
    heading: "PLATFORM",
    links: [
      { label: "Playground", href: "/playground" },
      { label: "Agent Runtime", href: "/docs/runtime" },
      { label: "Memory Layer", href: "/docs/memory" },
      { label: "Payments (x402)", href: "/docs/payments" },
      { label: "Reliability Lab", href: "/docs/reliability" },
    ],
  },
  {
    heading: "RESOURCES",
    links: [
      { label: "Documentation", href: "/docs" },
      { label: "API Reference", href: "/docs/api" },
      { label: "SDK", href: "/docs/sdk" },
      { label: "Examples", href: "/docs/examples" },
      { label: "Blog", href: "/blog" },
    ],
  },
  {
    heading: "COMPANY",
    links: [
      { label: "About", href: "/about" },
      { label: "Research", href: "/research" },
      { label: "Security", href: "/security" },
      { label: "Legal", href: "/legal" },
    ],
  },
  {
    heading: "CONNECT",
    links: [
      {
        label: "GitHub",
        href: "https://github.com/The-True-Hooha/pragmabase-platform",
      },
      { label: "Discord", href: "#" },
      { label: "X / Twitter", href: "#" },
      { label: "LinkedIn", href: "#" },
      { label: "Contact", href: "/contact" },
    ],
  },
];

export function Footer() {
  return (
    <footer
      style={{
        background: "#06060B",
        borderTop: "1px solid rgba(255,255,255,0.06)",
      }}
    >
      <div className="max-w-[1280px] mx-auto px-6 md:px-8 py-16">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-10 mb-14">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <a href="/" className="flex items-center gap-2.5 mb-4 w-fit group">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                <rect x="2" y="2" width="9" height="9" rx="2" fill="#7C3AED" />
                <rect
                  x="13"
                  y="2"
                  width="9"
                  height="9"
                  rx="2"
                  fill="#A8FF3E"
                  fillOpacity="0.8"
                />
                <rect
                  x="2"
                  y="13"
                  width="9"
                  height="9"
                  rx="2"
                  fill="#A8FF3E"
                  fillOpacity="0.25"
                />
                <rect
                  x="13"
                  y="13"
                  width="9"
                  height="9"
                  rx="2"
                  fill="#7C3AED"
                  fillOpacity="0.4"
                />
              </svg>
              <span className="font-display font-bold text-sm text-white group-hover:text-[#C4B5FD] transition-colors">
                pragmabase
              </span>
            </a>
            <p
              className="text-xs leading-relaxed max-w-[180px]"
              style={{ color: "rgba(255,255,255,0.25)" }}
            >
              The economic + cognitive OS for autonomous agents. Powered by
              Stellar.
            </p>
          </div>

          {columns.map((col) => (
            <div key={col.heading}>
              <p
                className="font-mono text-[9px] font-bold uppercase tracking-widest mb-4"
                style={{ color: "rgba(255,255,255,0.2)" }}
              >
                {col.heading}
              </p>
              <ul className="space-y-2.5">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm transition-colors"
                      style={{ color: "rgba(255,255,255,0.35)" }}
                      onMouseEnter={(e) =>
                        ((e.currentTarget as HTMLElement).style.color =
                          "rgba(255,255,255,0.75)")
                      }
                      onMouseLeave={(e) =>
                        ((e.currentTarget as HTMLElement).style.color =
                          "rgba(255,255,255,0.35)")
                      }
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div
          className="flex flex-wrap items-center justify-between gap-4 pt-8"
          style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}
        >
          <div
            className="flex items-center gap-5 font-mono text-[10px]"
            style={{ color: "rgba(255,255,255,0.18)" }}
          >
            <span>Built on Stellar</span>
            <span>·</span>
            <span>Qdrant Memory</span>
            <span>·</span>
            <span>x402 Protocol</span>
          </div>
          <p
            className="font-mono text-xs"
            style={{ color: "rgba(255,255,255,0.18)" }}
          >
            © {new Date().getFullYear()} Pragmabase. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
