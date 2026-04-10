# CLAUDE.md — Pragmabase

This file is the primary context document for AI-assisted development on the Pragmabase project. Current scope: **landing page**.

---

## Project Overview

**Pragmabase** is a distributed agentic infrastructure platform — the economic + cognitive operating system for autonomous agents. Agents on Pragmabase can think, remember, transact, and coordinate within programmable economic systems powered by Stellar.

**Tagline:** _The economic + cognitive operating system for autonomous agents_

**Core value props (in priority order):**

1. Persistent memory layer — agents evolve across tasks/teams
2. Stellar-native economic layer — real wallets, micropayments, stablecoins
3. x402 pay-per-action infrastructure — no API keys, just payments
4. Agent reliability lab — simulate failure, test behavior before deployment
5. Team-based agent systems — shared memory + budgets

**Default agent:** Roku — a financially-aware, memory-augmented autonomous operator (inspired by Avatar Roku: balance, awareness, autonomy).

---

## Tech Stack

### Runtime

- **Framework:** Next.js 16.2 (App Router)
- **Language:** TypeScript 5
- **React:** 19

### Styling

- **Tailwind CSS v4** (`@tailwindcss/postcss`)
- **tailwind-merge** for conditional class merging
- **clsx** for class composition

### Animation

- **Framer Motion v12** — use for all significant animations (page transitions, staggered reveals, scroll-triggered effects, hover states)

### UI Components

- **Radix UI:** `@radix-ui/react-accordion`, `@radix-ui/react-tabs` — use headless primitives, style with Tailwind
- **lucide-react** for icons

### Content

- **gray-matter** — frontmatter parsing (blog/docs if needed)
- **next-mdx-remote** — MDX rendering
- **shiki** — syntax highlighting

### Compiler

- **babel-plugin-react-compiler** (React compiler enabled)

---

## Landing Page Scope

### Sections to build

| Section | Purpose |
|---|---|
| **Hero** | Hook — lead with the core thesis: agents that remember, pay, and coordinate |
| **Problem** | Agents today are stateless and economically blind |
| **Solution** | Dual-state architecture: economic state (wallet) + cognitive state (memory) |
| **Features** | Core capabilities — memory layer, Stellar payments, x402, simulation/reliability lab, team agents |
| **Roku** | Introduce the default agent persona |
| **How It Works** | Architecture flow — sandbox → simulation → production |
| **Use Cases** | Autonomous API economies, agent marketplaces, research systems, financial agents |
| **Reliability Lab** | Key differentiator — failure simulation, hallucination testing, explainability mode |
| **CTA** | Get early access / Join waitlist / View docs |

### Key messages to convey

- Agents are no longer stateless tools — they are **stateful economic entities**
- Built on Stellar for fast, cheap, programmable micropayments
- x402: pay-per-action replaces API keys
- The only platform with a **reliability lab** for agent behavior
- Agents **evolve** — memory persists across runs, teams, and tasks

---

## Design Direction

### Aesthetic

- **Dark-first** — deep space/void background. This is infrastructure; it should feel serious and powerful.
- **Tone:** Refined futurism. Not cyberpunk chaos. Think: Bloomberg Terminal meets Vercel Dashboard — precise, dense, trustworthy, fast.
- **NOT:** Purple gradient SaaS slop. No generic "AI startup" aesthetics.

### Typography

- Display/heading: something with weight and character — geometric or humanist sans with strong numerals (e.g., Syne, Neue Haas Unica, or similar)
- Body: clean and readable at small sizes
- Mono: for wallet addresses, transaction hashes, code snippets — essential to the aesthetic

### Color

- Background: near-black (`#080a0e` range)
- Accent: Stellar's brand is blue — use sparingly as a signal color, not decoration
- Secondary accent: amber or gold for economic/payment-related elements (wallet, XLM, transactions)
- Surface: subtle dark cards with low-contrast borders
- Text: off-white primary, muted secondary

### Motion (Framer Motion)

- Staggered section reveals on scroll (`whileInView`, `viewport: { once: true }`)
- Hero: orchestrated load sequence — headline first, then subtext, then CTA
- Feature cards: subtle hover lift
- Numbers/stats: count-up animation on enter
- Avoid: bouncy easings, excessive particle effects, anything that feels gimmicky

### Layout

- Wide-screen first, generous padding
- Grid-breaking elements in hero (overlapping layers, offset cards)
- Data-dense feature sections — lean into the infrastructure/technical aesthetic
- Subtle grid or dot pattern as background texture

---

## Component Conventions

```tsx
// Class composition
import { cn } from "@/lib/utils"; // clsx + tailwind-merge

// Animations
import { motion } from "framer-motion";

// Icons
import { Wallet, Brain, Zap } from "lucide-react";
```

### Animation patterns to reuse

```tsx
// Staggered children
const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.08 },
  },
};

const item = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4, ease: [0.25, 0.1, 0.25, 1] } },
};

// Scroll reveal
<motion.div
  initial={{ opacity: 0, y: 24 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true, margin: "-80px" }}
  transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
>
```

---

## File Structure (Landing Page)

```
app/
  page.tsx                  # Landing page root
  layout.tsx                # Root layout (fonts, metadata)

components/
  landing/
    Hero.tsx
    Problem.tsx
    Solution.tsx
    Features.tsx
    Roku.tsx
    HowItWorks.tsx
    UseCases.tsx
    ReliabilityLab.tsx
    CTA.tsx
  ui/
    Button.tsx
    Card.tsx
    Badge.tsx
    GradientText.tsx
    AnimatedCounter.tsx

lib/
  utils.ts                  # cn() helper
```

---

## Terminology Reference

| Term | Definition |
|---|---|
| **Pragmabase** | The platform |
| **Roku** | The default agent (financially-aware, memory-augmented) |
| **x402** | Pay-per-action protocol — micropayments replace API keys |
| **Dual-state** | Economic state (wallet) + cognitive state (memory) |
| **Soroban** | Stellar's smart contract layer — used for programmable guardrails |
| **Team memory** | Shared persistent memory across a group of agents |
| **Reliability lab** | Simulation engine for testing agent failure modes |
| **Trustline** | Stellar mechanism to hold non-native assets like USDC |
| **Simulation mode** | Safe sandbox execution before live deployment |

---

## What NOT to do

- Don't build a generic SaaS landing with hero → features → pricing → footer
- Don't use purple/violet gradients
- Don't default to Inter or any system font
- Don't make Roku cartoonish — keep the agent persona grounded and technical
- Don't oversimplify the economic layer — the Stellar integration is a key differentiator, show it
- Don't skip the reliability lab section — it's a primary differentiator vs competitors
- Don't use `<form>` tags — use controlled components with `onChange`/`onClick`

---

## Notes

- The Stellar angle matters for the hackathon context — the economic layer is not a bolt-on, it's core infrastructure
- Emphasize "agents that evolve" — memory persistence is the emotional hook for developers
- x402 is a real emerging standard — position it as forward-looking, not experimental fluff
