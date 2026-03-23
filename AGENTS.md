# MarketBlocks UI — AI Agent Guide

> This file is the entry point for AI assistants (Cursor, Claude Code, Copilot, v0, etc.) working on this project.
> Read this file FIRST before making any changes.

---

## Project Overview

**MarketBlocks UI** is an open source component registry for marketing landing pages, built on shadcn registry format and Tailwind CSS v4. Unlike existing libraries that assume a Western SaaS context, MarketBlocks UI is **locale-agnostic and market-neutral** — supporting any currency, input type, CTA mechanism, and locale through configurable props.

Every component ships with **professional default copy in Indonesian and English**, across 4 industry contexts (SaaS, Finance, E-commerce, EdTech).

---

## Documentation Map

Read these documents in order to understand the project:

| Order | Document | Purpose | Read when... |
|:-----:|----------|---------|-------------|
| 1 | [`marketing-ui-prd.md`](./marketing-ui-prd.md) | Product vision, goals, target users, competitive positioning, Universal Props Architecture, business model | You need to understand WHAT we're building and WHY |
| 2 | [`development-strategy.md`](./development-strategy.md) | Branching, commits, versioning, CI/CD, sprint schedule, quality gates, component evolution | You need to understand HOW we build, commit, and release |
| 3 | [`content-strategy.md`](./content-strategy.md) | Bilingual copy system (ID/EN), UX writing guidelines, content presets per component × industry | You need to write or modify component copy/content |

---

## Tech Stack

```
Framework    : React + TypeScript
Styling      : Tailwind CSS v4
Registry     : shadcn registry format (registry.json + public/r/)
Docs Site    : Next.js 15 (App Router) — docs & preview only
Animation    : CSS native (default) + Framer Motion (opt-in)
Icons        : Lucide React
Fonts        : Geist (default, configurable via CSS variables)
```

---

## Project Structure

```
marketblocks-ui/
├── registry/default/          ← Component source files
│   ├── hero-split/
│   │   ├── hero-split.tsx
│   │   └── content/
│   │       ├── default-id.ts  ← Indonesian copy
│   │       └── default-en.ts  ← English copy
│   └── .../
├── apps/docs/                 ← Next.js docs site
│   └── app/components/[name]/
│       └── previews/          ← 4-context previews
├── public/r/                  ← Registry JSON endpoints
├── registry.json              ← Component registry
├── llms.txt                   ← AI discoverability
└── AGENTS.md                  ← You are here
```

---

## Core Design Principles

1. **Universal Props Architecture** — No hardcoded assumptions about input type, currency, CTA mechanism, or locale. Everything is configurable via props.
2. **Sensible Defaults** — Every prop is optional. Components work beautifully without any props.
3. **Bilingual Copy** — Default content in Indonesian (ID) and English (EN) for every component.
4. **4-Context Previews** — Each component is demonstrated in SaaS, Finance, E-commerce, and EdTech contexts.
5. **Accessibility** — WCAG 2.1 AA, keyboard navigation, ARIA labels, `prefers-reduced-motion`.
6. **Mobile-First** — All components responsive at 375px, 768px, 1280px.

---

## Key Rules for AI Agents

### When creating or modifying components:

1. **Never hardcode** email as the only input type — support `email | phone | text | none`
2. **Never hardcode** currency — use the `currency` prop with `symbol`, `position`, `separator`
3. **Never hardcode** CTA text — always use props for labels
4. **Always provide** both ID and EN content presets in `content/` folder
5. **Always use** CSS custom properties (design tokens) from `development-strategy.md` Section 7.5 of PRD
6. **Always respect** `prefers-reduced-motion` for animations
7. **All props must be optional** — component must render correctly with zero props

### When writing copy:

1. **Indonesian tone** — Semi-casual, warm, use "kamu" (not "Anda" unless finance context)
2. **English tone** — Professional, clean, direct
3. **CTA max 3 words** — "Mulai Gratis" / "Start Free Trial"
4. **Headline max 12 words** — Benefit-focused, verb-first
5. **Number format** — "10.000" (ID) vs "10,000" (EN)
6. **Currency format** — "Rp299.000" (ID) vs "$29.99" (EN)

### When committing:

```
Format: <type>(<scope>): <description>
Types:  feat, fix, docs, style, refactor, perf, test, build, ci, chore
Scopes: hero, navbar, footer, features, pricing, cta, testimonial,
        logo-cloud, stats, faq, lead-capture, announcement, docs,
        registry, tokens, ci, content
```

---

## Component Checklist (Before Merge)

- [ ] Renders correctly in all 4 context previews
- [ ] Props have sensible defaults (works without props)
- [ ] Mobile responsive (375px, 768px, 1280px)
- [ ] Dark mode supported
- [ ] Keyboard accessible
- [ ] ARIA labels applied
- [ ] Color contrast ≥ 4.5:1 (WCAG AA)
- [ ] `prefers-reduced-motion` respected
- [ ] Registry JSON entry added
- [ ] TypeScript types exported
- [ ] Bilingual copy presets (ID + EN)
- [ ] 4 context presets (SaaS, Finance, E-commerce, EdTech)

---

## MVP Scope (20 Components)

### Tier 1 — Core (12)
`hero-centered` · `hero-split` · `hero-minimal` · `navbar-simple` · `footer-simple` · `features-grid` · `features-alternating` · `pricing-simple` · `pricing-toggle` · `cta-centered` · `testimonial-grid` · `logo-cloud`

### Tier 2 — Supplementary (8)
`stats-counter` · `faq-accordion` · `cta-split` · `testimonial-marquee` · `lead-capture-form` · `announcement-bar` · `hero-video` · `footer-minimal`

---

*For detailed specifications, refer to the documentation map above.*
