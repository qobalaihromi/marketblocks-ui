# 🧱 MarketBlocks UI

MarketBlocks UI is a **universal open-source component registry** for marketing landing pages. Built on the [shadcn/ui](https://ui.shadcn.com/) registry format and Tailwind CSS v4, it provides production-ready, highly converting sections that work for any product and any market.

Stop rebuilding marketing pages from scratch. Get sections that your team can customize and deploy in minutes.

![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)
![Framework: Next.js 15](https://img.shields.io/badge/Next.js-15-black?logo=next.js)
![Styling: Tailwind v4](https://img.shields.io/badge/Tailwind_CSS-v4-38B2AC?logo=tailwind-css)

---

## ✨ Why MarketBlocks UI?

Most UI libraries give you structural building blocks (buttons, inputs) and leave you to figure out the marketing copy, layout, and conversion optimization. MarketBlocks UI gives you **the whole section**, optimized for conversion.

### 1. Universal Props Architecture

Every component adapts to any market out of the box. Configure currency (`Rp`, `$`, `€`), input capture mechanisms (email, phone number with prefix), CTA styles, and locale — all through simple React props.

### 2. Professional Bilingual Copy Included

No more `lorem ipsum`. Every component ships with professional default copy in:

- 🇮🇩 **Indonesian**: Casual, warm, WhatsApp-oriented (tailored for the SEA market).
- 🇬🇧 **English**: Professional, direct, email-oriented (tailored for the global market).

### 3. Industry Context Presets

Switch your landing page's entire context with a single import. We provide pre-built content presets for:

- 🏢 **SaaS**
- 🏦 **Finance / Fintech**
- 🛍️ **E-commerce**
- 🎓 **EdTech**

### 4. Production-Grade Quality

- **Mobile-First**: Fully responsive at 375px, 768px, and 1280px.
- **Dark Mode Ready**: Supports light, dark, and custom surface themes using CSS custom properties. Zero extra config.
- **Accessible (WCAG 2.1 AA)**: Keyboard navigation, ARIA labels, focus indicators, and reduced motion support built-in.

---

## 🚀 Quick Start

Since this is built on the `shadcn/ui` registry format, you don't install it as an npm package. You simply add the components you need directly into your codebase.

### 1. Initialize your project

Make sure you have a Next.js App Router project with Tailwind CSS v4 configured.

### 2. Add a component

Use the `shadcn` CLI to add components directly from our registry:

```bash
npx shadcn@latest add https://marketblocks-ui.dev/r/hero-split.json
```

_(Note: The `marketblocks-ui.dev` domain is a placeholder while we finalize deployment. Currently, you can manually copy the components from the `registry/default/` directory)._

### 3. Use the component

```tsx
import { HeroSplit } from "@/components/hero-split";
import { saasEN } from "@/components/hero-split/content/saas";

export default function LandingPage() {
  return (
    <HeroSplit
      {...saasEN}
      background="dark"
      inputCapture={{
        type: "email",
        placeholder: "Enter your work email",
        ctaLabel: "Start Free Trial",
      }}
    />
  );
}
```

---

## 📦 Available Components (Sprint 2 / 20)

We are actively building the initial set of 20 components.

**Navigation & Footer**

- [x] `navbar-simple`
- [x] `footer-simple`
- [ ] `footer-minimal`

**Heroes**

- [x] `hero-centered`
- [x] `hero-split`
- [ ] `hero-minimal`
- [ ] `hero-video`

**Features & Explainer**

- [x] `features-grid`
- [x] `features-alternating`

**Pricing & Conversion**

- [ ] `pricing-simple`
- [ ] `pricing-toggle`
- [ ] `cta-centered`
- [ ] `cta-split`
- [ ] `lead-capture-form`

**Social Proof & Trust**

- [ ] `testimonial-grid`
- [ ] `testimonial-marquee`
- [ ] `logo-cloud`
- [ ] `stats-counter`

**Misc**

- [ ] `faq-accordion`
- [ ] `announcement-bar`

---

## 🛠️ Tech Stack & Internal Docs

- **Framework**: Next.js 15 (App Router)
- **Styling**: Tailwind CSS v4
- **Formatting & Linting**: ESLint (w/ jsx-a11y), Prettier, Husky, lint-staged, commitlint
- **Components**: React 19

Internal planning and strategy documents are stored in the `/docs/` folder (excluded from git) to guide AI assistants during development.

---

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
