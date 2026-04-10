"use client";

import { useEffect, useState, useRef } from "react";
import { cn } from "@/lib/utils";

const NAV_LINKS = [
  { label: "Docs", href: "/docs" },
  { label: "Research", href: "/research" },
  { label: "Blog", href: "/blog" },
  { label: "Pricing", href: "/pricing" },
];

const INDIVIDUAL_ITEMS = [
  {
    icon: (
      <svg width="15" height="15" viewBox="0 0 15 15" fill="none">
        <path
          d="M2 7.5h11M7.5 2l5.5 5.5L7.5 13"
          stroke="#A8FF3E"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    label: "Launch Playground",
    sub: "Simulate agentic transactions live",
    href: "/playground",
  },
  {
    icon: (
      <svg width="15" height="15" viewBox="0 0 15 15" fill="none">
        <rect
          x="1.5"
          y="1.5"
          width="12"
          height="12"
          rx="2"
          stroke="#A8FF3E"
          strokeWidth="1.3"
        />
        <path
          d="M4.5 7.5h6M4.5 5h4M4.5 10h3"
          stroke="#A8FF3E"
          strokeWidth="1.2"
          strokeLinecap="round"
        />
      </svg>
    ),
    label: "Read the Docs",
    sub: "SDK, API reference, and guides",
    href: "/docs",
  },
  {
    icon: (
      <svg width="15" height="15" viewBox="0 0 15 15" fill="none">
        <circle cx="7.5" cy="7.5" r="5.5" stroke="#A8FF3E" strokeWidth="1.3" />
        <path
          d="M7.5 4.5v3.25l2 2"
          stroke="#A8FF3E"
          strokeWidth="1.3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    label: "Free Sandbox",
    sub: "Start building at zero cost",
    href: "/sandbox",
  },
];

const ENTERPRISE_ITEMS = [
  {
    icon: (
      <svg width="15" height="15" viewBox="0 0 15 15" fill="none">
        <rect
          x="1.5"
          y="5"
          width="12"
          height="9"
          rx="2"
          stroke="#C4B5FD"
          strokeWidth="1.3"
        />
        <path d="M5 5V4a2.5 2.5 0 015 0v1" stroke="#C4B5FD" strokeWidth="1.3" />
        <circle cx="7.5" cy="9.5" r="1.25" fill="#C4B5FD" />
      </svg>
    ),
    label: "Self-Hosted Deployment",
    sub: "Your infra, your control",
    href: "/enterprise/self-hosted",
  },
  {
    icon: (
      <svg width="15" height="15" viewBox="0 0 15 15" fill="none">
        <circle cx="4.5" cy="4.5" r="2" stroke="#C4B5FD" strokeWidth="1.3" />
        <circle cx="10.5" cy="10.5" r="2" stroke="#C4B5FD" strokeWidth="1.3" />
        <circle cx="10.5" cy="4.5" r="2" stroke="#C4B5FD" strokeWidth="1.3" />
        <path
          d="M6.5 4.5h2M6.5 10.5H4.5a2 2 0 01-2-2V6.5"
          stroke="#C4B5FD"
          strokeWidth="1.1"
          strokeLinecap="round"
        />
      </svg>
    ),
    label: "Multi-Agent Teams",
    sub: "Shared memory, shared budgets",
    href: "/enterprise/teams",
  },
  {
    icon: (
      <svg width="15" height="15" viewBox="0 0 15 15" fill="none">
        <path
          d="M7.5 1.5l1.5 4h4l-3 2.5 1 4-3.5-2.5-3.5 2.5 1-4-3-2.5h4z"
          stroke="#C4B5FD"
          strokeWidth="1.2"
          strokeLinejoin="round"
        />
      </svg>
    ),
    label: "Talk to Sales",
    sub: "Custom pricing and compliance",
    href: "/enterprise/contact",
  },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [dropdownOpen, setDropdown] = useState(false);
  const [mobileOpen, setMobile] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  useEffect(() => {
    const fn = (e: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target as Node)
      )
        setDropdown(false);
    };
    document.addEventListener("mousedown", fn);
    return () => document.removeEventListener("mousedown", fn);
  }, []);

  return (
    <>
      {/* Announcement bar */}
      <div
        style={{
          background: "#14141F",
          borderBottom: "1px solid rgba(255,255,255,0.06)",
        }}
        className="text-center py-2 px-4 text-xs font-medium"
      >
        <span style={{ color: "#6B6B85" }}>
          Pragmabase is in public beta —{" "}
        </span>
        <a
          href="/playground"
          style={{ color: "#A8FF3E" }}
          className="font-semibold hover:opacity-80 transition-opacity"
        >
          Try the playground free →
        </a>
      </div>

      <nav
        className="sticky top-0 z-50 transition-all duration-300"
        style={{
          background: scrolled ? "rgba(10,10,15,0.96)" : "#0A0A0F",
          borderBottom: "1px solid rgba(255,255,255,0.07)",
          backdropFilter: "blur(20px)",
        }}
      >
        <div className="max-w-[1280px] mx-auto px-5 md:px-8 h-16 flex items-center justify-between gap-4">
          {/* Logo */}
          <a href="/" className="flex items-center gap-2.5 shrink-0 group">
            <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
              <rect x="2" y="2" width="9" height="9" rx="2" fill="#7C3AED" />
              <rect
                x="13"
                y="2"
                width="9"
                height="9"
                rx="2"
                fill="#A8FF3E"
                fillOpacity="0.85"
              />
              <rect
                x="2"
                y="13"
                width="9"
                height="9"
                rx="2"
                fill="#A8FF3E"
                fillOpacity="0.3"
              />
              <rect
                x="13"
                y="13"
                width="9"
                height="9"
                rx="2"
                fill="#7C3AED"
                fillOpacity="0.45"
              />
            </svg>
            <span className="font-display font-bold text-[15px] tracking-tight text-white group-hover:text-[#C4B5FD] transition-colors">
              pragmabase
            </span>
          </a>

          {/* Center links — desktop */}
          <div className="hidden md:flex items-center gap-6 flex-1 justify-center">
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm font-medium transition-colors duration-150"
                style={{ color: "#6B6B85" }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#EDECF4")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "#6B6B85")}
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Right — desktop */}
          <div className="hidden md:flex items-center gap-3 shrink-0">
            <a
              href="https://github.com/The-True-Hooha/pragmabase-platform"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-sm px-3 py-1.5 transition-colors"
              style={{ color: "#6B6B85" }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#EDECF4")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "#6B6B85")}
            >
              <svg
                width="15"
                height="15"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
              </svg>
              GitHub
            </a>

            {/* Get Started dropdown */}
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={() => setDropdown((v) => !v)}
                className="flex items-center gap-1.5 text-sm font-bold px-4 py-2 rounded-lg transition-all duration-150"
                style={{ background: "#A8FF3E", color: "#0A0A0F" }}
                onMouseEnter={(e) =>
                  ((e.currentTarget as HTMLElement).style.background =
                    "#BFFF66")
                }
                onMouseLeave={(e) =>
                  ((e.currentTarget as HTMLElement).style.background =
                    "#A8FF3E")
                }
              >
                Get Started
                <svg
                  width="11"
                  height="11"
                  viewBox="0 0 11 11"
                  fill="none"
                  className={cn(
                    "transition-transform duration-200",
                    dropdownOpen ? "rotate-180" : "",
                  )}
                >
                  <path
                    d="M1.5 3.5l4 4 4-4"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>

              {dropdownOpen && (
                <div
                  className="absolute right-0 top-full mt-2 w-[300px] rounded-2xl overflow-hidden z-50"
                  style={{
                    background: "#14141F",
                    border: "1px solid rgba(255,255,255,0.1)",
                    boxShadow: "0 24px 60px rgba(0,0,0,0.6)",
                  }}
                >
                  {/* Individuals */}
                  <div className="p-3">
                    <div className="px-2 py-1.5">
                      <span
                        className="font-mono text-[9px] font-bold uppercase tracking-widest"
                        style={{ color: "#A8FF3E" }}
                      >
                        For Individuals
                      </span>
                    </div>
                    {INDIVIDUAL_ITEMS.map((item) => (
                      <a
                        key={item.label}
                        href={item.href}
                        onClick={() => setDropdown(false)}
                        className="flex items-start gap-3 px-3 py-2.5 rounded-xl transition-colors group"
                        style={{ color: "#EDECF4" }}
                        onMouseEnter={(e) =>
                          ((e.currentTarget as HTMLElement).style.background =
                            "rgba(168,255,62,0.06)")
                        }
                        onMouseLeave={(e) =>
                          ((e.currentTarget as HTMLElement).style.background =
                            "transparent")
                        }
                      >
                        <div
                          className="w-7 h-7 rounded-lg flex items-center justify-center shrink-0 mt-0.5"
                          style={{ background: "rgba(168,255,62,0.1)" }}
                        >
                          {item.icon}
                        </div>
                        <div>
                          <div className="text-sm font-semibold text-white">
                            {item.label}
                          </div>
                          <div
                            className="text-xs mt-0.5"
                            style={{ color: "#6B6B85" }}
                          >
                            {item.sub}
                          </div>
                        </div>
                      </a>
                    ))}
                  </div>

                  <div
                    style={{
                      height: 1,
                      background: "rgba(255,255,255,0.07)",
                      margin: "0 12px",
                    }}
                  />

                  {/* Enterprise */}
                  <div className="p-3">
                    <div className="px-2 py-1.5">
                      <span
                        className="font-mono text-[9px] font-bold uppercase tracking-widest"
                        style={{ color: "#C4B5FD" }}
                      >
                        For Enterprise
                      </span>
                    </div>
                    {ENTERPRISE_ITEMS.map((item) => (
                      <a
                        key={item.label}
                        href={item.href}
                        onClick={() => setDropdown(false)}
                        className="flex items-start gap-3 px-3 py-2.5 rounded-xl transition-colors"
                        onMouseEnter={(e) =>
                          ((e.currentTarget as HTMLElement).style.background =
                            "rgba(196,181,253,0.06)")
                        }
                        onMouseLeave={(e) =>
                          ((e.currentTarget as HTMLElement).style.background =
                            "transparent")
                        }
                      >
                        <div
                          className="w-7 h-7 rounded-lg flex items-center justify-center shrink-0 mt-0.5"
                          style={{ background: "rgba(124,58,237,0.15)" }}
                        >
                          {item.icon}
                        </div>
                        <div>
                          <div className="text-sm font-semibold text-white">
                            {item.label}
                          </div>
                          <div
                            className="text-xs mt-0.5"
                            style={{ color: "#6B6B85" }}
                          >
                            {item.sub}
                          </div>
                        </div>
                      </a>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobile((v) => !v)}
            className="md:hidden flex items-center justify-center w-9 h-9 rounded-lg transition-colors"
            style={{
              border: "1px solid rgba(255,255,255,0.1)",
              color: "#EDECF4",
            }}
            aria-label="Toggle menu"
          >
            {mobileOpen ? (
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path
                  d="M3 3l10 10M13 3L3 13"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
              </svg>
            ) : (
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path
                  d="M2 4h12M2 8h12M2 12h12"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div
            className="md:hidden px-5 py-4 space-y-1"
            style={{
              borderTop: "1px solid rgba(255,255,255,0.07)",
              background: "#0F0F18",
            }}
          >
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobile(false)}
                className="block text-sm font-medium py-2.5 px-3 rounded-lg transition-colors"
                style={{ color: "#9E9EB8" }}
                onMouseEnter={(e) =>
                  ((e.currentTarget as HTMLElement).style.color = "#EDECF4")
                }
                onMouseLeave={(e) =>
                  ((e.currentTarget as HTMLElement).style.color = "#9E9EB8")
                }
              >
                {link.label}
              </a>
            ))}
            <div
              className="pt-3 mt-2 space-y-1"
              style={{ borderTop: "1px solid rgba(255,255,255,0.07)" }}
            >
              <div
                className="font-mono text-[9px] font-bold uppercase tracking-widest px-3 py-1"
                style={{ color: "#A8FF3E" }}
              >
                For Individuals
              </div>
              {INDIVIDUAL_ITEMS.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => setMobile(false)}
                  className="block text-sm font-medium py-2 px-3 rounded-lg text-white"
                >
                  {item.label}
                </a>
              ))}
              <div
                className="font-mono text-[9px] font-bold uppercase tracking-widest px-3 py-1 mt-2"
                style={{ color: "#C4B5FD" }}
              >
                For Enterprise
              </div>
              {ENTERPRISE_ITEMS.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => setMobile(false)}
                  className="block text-sm font-medium py-2 px-3 rounded-lg text-white"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>
        )}
      </nav>
    </>
  );
}
