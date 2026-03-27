@AGENTS.md

# Aegis — Claude Code Instructions

## Project Overview

Aegis is a production-grade landing page for an agent evaluation infrastructure platform.
Positioning: "Stripe for agent evaluation infrastructure."
Tagline: "Your agent works in demos. Does it work in production?"

Target audience: AI engineers at Series A–C startups, ML platform teams at enterprises.

---

## Tech Stack

- **Framework**: Next.js 14, App Router
- **Styling**: Tailwind CSS v3 (custom config — see tokens below)
- **Animations**: Framer Motion
- **Package manager**: pnpm
- **Fonts**: Google Fonts — Instrument Serif (display), DM Sans (body), JetBrains Mono (code/mono)
- **Component library**: None — build everything from scratch unless a specific primitive is needed (Radix UI only for accessibility-critical components like accordions/tabs)
- **Syntax highlighting**: Shiki (for code blocks)
- **Icons**: Lucide React only

---

## Project Structure

```
aegis/
├── app/
│   ├── layout.tsx          # Root layout, fonts, metadata
│   ├── page.tsx            # Composes all landing sections
│   └── globals.css         # Tailwind directives + CSS variables
├── components/
│   ├── nav.tsx
│   ├── hero.tsx
│   ├── what-we-do.tsx
│   ├── eval-stack.tsx
│   ├── benchmarks.tsx
│   ├── dev-ex.tsx
│   ├── social-proof.tsx
│   ├── pricing.tsx
│   ├── footer-cta.tsx
│   ├── footer.tsx
│   └── ui/
│       ├── code-block.tsx      # Tabbed, syntax highlighted
│       ├── section-label.tsx   # "SECTION NAME [N/8]" pattern
│       ├── metric-card.tsx
│       └── accordion.tsx
├── lib/
│   └── utils.ts            # cn() and any shared helpers
├── public/
│   └── fonts/              # If self-hosting fonts
├── tailwind.config.ts
└── CLAUDE.md
```

---

## Brand Tokens

### Tailwind Config (extend these — do not override defaults entirely)

```ts
// tailwind.config.ts
colors: {
  bg: '#FFFFFF',
  bgAlt: '#F4F7FF',
  accent: '#2563EB',
  accentHover: '#1D4ED8',
  ink: '#0A0A0A',
  muted: '#6B7280',
  border: '#E5E9F2',
  codeBg: '#0F172A',
  codeText: '#7DD3FC',
  pass: '#10B981',
  fail: '#EF4444',
},
fontFamily: {
  display: ['Instrument Serif', 'serif'],
  sans: ['DM Sans', 'sans-serif'],
  mono: ['JetBrains Mono', 'monospace'],
},
```

### CSS Variables (globals.css)

```css
:root {
  --bg: #FFFFFF;
  --bg-alt: #F4F7FF;
  --accent: #2563EB;
  --accent-hover: #1D4ED8;
  --ink: #0A0A0A;
  --muted: #6B7280;
  --border: #E5E9F2;
  --code-bg: #0F172A;
  --code-text: #7DD3FC;
  --pass: #10B981;
  --fail: #EF4444;
}
```

---

## Design Rules — Follow These Strictly

### Typography

- Headlines: `font-display` (Instrument Serif), weight 500
- Body: `font-sans` (DM Sans), 16px, line-height 1.7
- Metrics/labels: `font-mono` (JetBrains Mono)
- Section labels: 12px, uppercase, tracking-widest, text-muted
- Hero headline: 64px on desktop, 40px on mobile
- Section H2: 48px on desktop, 32px on mobile

### Spacing

- Section padding: `py-28` (112px) minimum
- Container: `max-w-[960px] mx-auto px-6`
- Card gap: use 1px borders, not gap/margin between cards

### Components

- **Cards**: 1px solid border (`border-border`), no shadows, no rounded corners beyond `rounded-lg`
- **Buttons**:
  - Primary: `bg-accent text-white px-6 py-3 rounded-lg hover:bg-accentHover transition-colors`
  - Secondary: `border border-ink bg-transparent px-6 py-3 rounded-lg hover:bg-bgAlt transition-colors`
- **Section label pattern** (every section):

```tsx
  // Top of each section
  <div className="flex justify-between text-xs uppercase tracking-widest text-muted mb-12 pb-4 border-b border-border">
    <span>SECTION NAME</span>
    <span>[N/8]</span>
  </div>
```

- **Code blocks**: Dark bg (`#0F172A`), tabbed (TypeScript | Python | REST API), Shiki for highlighting
- **Metrics**: Large mono number + small label, no card container — just raw type

### What to NEVER do

- No purple of any kind
- No dark gray section backgrounds
- No Inter, Roboto, Arial, or system fonts
- No box shadows on cards
- No lorem ipsum — all copy is final (use the copy in the Sections spec below)
- No `<form>` tags — use `onClick` handlers
- No external image dependencies — use SVGs inline or CSS shapes

---

## Animation Rules (Framer Motion)

- Every section fades up on scroll entry: `opacity: 0 → 1`, `y: 20 → 0`, duration `0.4s`, ease `easeOut`
- Stagger children: `0.08s` delay between items
- Accordion expand: smooth height with `AnimatePresence`
- Hover states: border color → accent, transition 150ms
- NO parallax, NO page transitions, NO heavy keyframe sequences
- Use `useInView` from Framer Motion for scroll triggers

```tsx
// Standard scroll reveal pattern — reuse across all sections
const variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
}
<motion.div
  variants={variants}
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true }}
  transition={{ duration: 0.4, ease: 'easeOut' }}
>
```

---

## Sections Spec

### NAV

- Logo: "aegis" wordmark (DM Sans 500) + small geometric SVG mark
- Links: Research · Pricing · Docs · Blog
- Right: "★ 2.4k" GitHub stars (static) + "Login ↓" button (outline)
- Sticky, white bg, `border-b border-border`

### HERO [1/8]

- Badge pill: "Now in Beta — #1 on AgentBench →"
- Headline: "Your agent works in demos. Does it work in production?"
- Sub: "Eval infrastructure for AI teams — sandbox execution, regression detection, LLM proxy, and CI integration. Not just scoring. Complete reliability."
- CTAs: [Start Building →] + [Talk to Founder]
- Below CTAs: "Get a hosted dashboard →" and `npx aegis init` (monospace pill)
- Right: abstract SVG pipeline/eval graph illustration (blue tones, geometric)

### WHAT WE DO [2/8]

- H2: "Bring your agent. We build confidence. Your CI just passes."
- Two-column card grid (1px border):
  - Left: "The Aegis Platform" — metrics `<2s cold start · 99.9% uptime · #1 AgentBench`, CTA [Start building →]
  - Right: "CI-Native Evaluation" — feature rows with right-aligned labels (GitHub App, PR Eval Reports, Regression Detection, Transcript Storage)

### EVAL STACK [3/8]

- H2: "Five layers. Complete reliability."
- Left: SVG isometric stack diagram
- Right: Accordion — Sandbox Isolation (default open), LLM Proxy, Evaluation Engine, Telemetry Pipeline, Transcript Storage

### BENCHMARKS [4/8]

- H2: "We don't think benchmarks tell the full story."
- 4-col metrics: `<2s cold start` · `#1 AgentBench` · `99.9% uptime` · `10M+ evals run`
- Comparison table vs Braintrust and LangSmith (Aegis wins on: Sandbox Isolation, Firecracker Runtime, Self-hostable, Agent Replay)

### DEVELOPER EXPERIENCE [5/8]

- H2: "In your CI pipeline in 5 minutes."
- Tabbed code block (TypeScript | Python | REST API)
- Integration pills: GitHub Actions · GitLab CI · LangChain · LangGraph · OpenAI SDK · CrewAI · Temporal

### SOCIAL PROOF [6/8]

- H2: "Teams trust Aegis in production."
- Logo strip (6 placeholder company names, text only)
- 3 trust callouts: Self-host · SOC 2 Ready · You own your data
- 6 testimonial cards (Twitter/X style, 1px borders, 3-col grid)

### PRICING [7/8]

- H2: "Simple, transparent pricing."
- 3 tiers: FREE ($0) · PRO ($49/mo, highlighted) · SCALE ($399/mo)
- Enterprise: Custom row below
- Over-limits table: $0.001/eval run · $0.01/1k proxy tokens

### FOOTER CTA [8/8]

- Large serif: "Your agent deserves a safety net."
- CTA: [Read the docs →]
- Decorative logo mark watermark pattern (CSS, light blue)

### FOOTER

- 4 columns: PRODUCT · RESOURCES · COMPANY · CONNECT
- Bottom bar: wordmark left, copyright right

---

## Code Style

- TypeScript strict mode — no `any`
- Named exports for all components
- Props interfaces defined above each component
- `cn()` utility from `lib/utils.ts` for conditional classes (clsx + tailwind-merge)
- Server Components by default — add `'use client'` only when using hooks or browser APIs
- Framer Motion components always go in client components
- File names: kebab-case

## Commands

```bash
pnpm dev          # Start dev server
pnpm build        # Production build
pnpm lint         # ESLint
pnpm type-check   # tsc --noEmit
```

---

## First Steps When Starting

1. I need you to check the inspo.pdf in the root folder, contain visual sample of what's needed.
2. Next.js 16 installed alongside the following packages: `framer-motion shiki lucide-react clsx tailwind-merge @radix-ui/react-accordion @radix-ui/react-tabs`
3. Set up `lib/utils.ts` with `cn()`
4. Configure `tailwind.config.ts` with brand tokens above
5. Add Google Fonts to `app/layout.tsx`
6. Build `ui/section-label.tsx` and `ui/code-block.tsx` first — used everywhere
7. Build section by section, top to bottom
