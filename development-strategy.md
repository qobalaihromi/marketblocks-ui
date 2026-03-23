# MarketBlocks UI — Development Strategy

> Status: Draft v1.0 | Maret 2026
> Solo project, open source (MIT License)

---

## 1. Branching Strategy

### Model: Simplified Git Flow (Solo-Optimized)

```
main ──────────────────────────────── production-ready, protected
  │
  ├── develop ─────────────────────── integration branch
  │     │
  │     ├── feat/hero-centered ────── komponen baru
  │     ├── feat/pricing-simple ───── komponen baru
  │     ├── fix/navbar-mobile ─────── bugfix
  │     ├── docs/hero-split-preview ─ dokumentasi
  │     └── chore/design-tokens ───── maintenance
  │
  └── release/v0.1.0 ─────────────── release candidate (opsional)
```

### Branch Naming Convention

| Prefix | Kegunaan | Contoh |
|--------|----------|--------|
| `feat/` | Komponen atau fitur baru | `feat/hero-split` |
| `fix/` | Bugfix | `fix/pricing-currency-format` |
| `docs/` | Dokumentasi atau docs site | `docs/getting-started` |
| `chore/` | Maintenance, tooling, CI | `chore/eslint-config` |
| `refactor/` | Refactoring tanpa perubahan fitur | `refactor/design-tokens` |

### Branch Rules

- **`main`** — selalu production-ready, protected, hanya menerima merge dari `develop` atau `release/*`
- **`develop`** — branch integrasi utama, target semua feature branches
- **Feature branches** — dibuat dari `develop`, di-merge kembali ke `develop` via PR
- Delete branch setelah merge

---

## 2. Commit Convention

### Format: Conventional Commits

```
<type>(<scope>): <description>

[optional body]

[optional footer(s)]
```

### Types

| Type | Kegunaan | SemVer Impact |
|------|----------|:---:|
| `feat` | Komponen atau fitur baru | MINOR |
| `fix` | Bugfix | PATCH |
| `docs` | Dokumentasi | — |
| `style` | Formatting, whitespace (bukan CSS) | — |
| `refactor` | Refactoring tanpa perubahan behavior | — |
| `perf` | Performance improvement | PATCH |
| `test` | Menambah atau update test | — |
| `build` | Build system, dependencies | — |
| `ci` | CI/CD configuration | — |
| `chore` | Lain-lain (update deps, cleanup) | — |

### Scopes (berdasarkan komponen/area)

```
hero, navbar, footer, features, pricing, cta,
testimonial, logo-cloud, stats, faq, lead-capture,
announcement, docs, registry, tokens, ci, content
```

### Contoh Commit Messages

```bash
# Komponen baru
feat(hero): add hero-split component with universal props
feat(pricing): add pricing-simple with multi-currency support

# Bugfix
fix(navbar): fix mobile menu not closing on route change
fix(hero): fix gradient overlay on dark background

# Dokumentasi
docs(hero): add multi-context previews for hero-split
docs: update README with install instructions

# Breaking change
feat(tokens)!: rename --color-primary to --color-brand

BREAKING CHANGE: All CSS variable references to --color-primary
must be updated to --color-brand.

# Chore
chore: update tailwindcss to v4.1
ci: add component visual regression tests
```

### Enforcement

```json
// package.json
{
  "devDependencies": {
    "@commitlint/cli": "^19.0.0",
    "@commitlint/config-conventional": "^19.0.0",
    "husky": "^9.0.0"
  }
}
```

```bash
# .husky/commit-msg
npx --no -- commitlint --edit $1
```

---

## 3. Versioning Strategy

### Semantic Versioning (SemVer)

```
MAJOR.MINOR.PATCH
  │      │      │
  │      │      └── Bugfix (fix)
  │      └───────── Komponen baru / fitur baru (feat)
  └──────────────── Breaking changes (feat! atau BREAKING CHANGE)
```

### Version Roadmap

| Version | Milestone | Isi |
|---------|-----------|-----|
| `0.1.0` | Alpha | 5 komponen pertama + design tokens + registry setup |
| `0.2.0` | Alpha | 10 komponen (Tier 1 setengah) |
| `0.5.0` | Beta | 12 komponen Tier 1 lengkap + docs site |
| `0.8.0` | Beta | 20 komponen (Tier 1 + Tier 2) + llms.txt |
| `1.0.0` | Stable | Public launch, semua 20 komponen production-ready |

### Pre-release Tags

```bash
v0.1.0-alpha.1    # development awal
v0.5.0-beta.1     # feature-complete but not polished
v1.0.0-rc.1       # release candidate
v1.0.0            # stable public launch
```

---

## 4. GitHub Workflow & CI/CD

### 4.1 GitHub Actions Pipeline

```yaml
# .github/workflows/ci.yml
name: CI

on:
  push:
    branches: [develop, main]
  pull_request:
    branches: [develop]

jobs:
  lint:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with: { node-version: 20 }
      - run: npm ci
      - run: npm run lint

  typecheck:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with: { node-version: 20 }
      - run: npm ci
      - run: npm run typecheck

  build:
    runs-on: ubuntu-latest
    needs: [lint, typecheck]
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with: { node-version: 20 }
      - run: npm ci
      - run: npm run build
```

### 4.2 Release Workflow

```yaml
# .github/workflows/release.yml
name: Release

on:
  push:
    tags: ['v*']

jobs:
  release:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - name: Create GitHub Release
        uses: softprops/action-gh-release@v2
        with:
          generate_release_notes: true
```

### 4.3 PR Checklist (Template)

```markdown
<!-- .github/pull_request_template.md -->
## Description
Brief description of changes.

## Type
- [ ] feat: New component
- [ ] fix: Bugfix
- [ ] docs: Documentation
- [ ] refactor: Refactoring
- [ ] chore: Maintenance

## Checklist
- [ ] Component renders correctly in all 4 context previews
- [ ] Props have sensible defaults (component works tanpa props)
- [ ] Mobile responsive (tested at 375px, 768px, 1280px)
- [ ] Dark mode supported
- [ ] Keyboard accessible
- [ ] ARIA labels applied
- [ ] Color contrast meets WCAG AA (4.5:1)
- [ ] `prefers-reduced-motion` respected
- [ ] Registry JSON entry added
- [ ] TypeScript types exported
```

---

## 5. Development Workflow (Day-to-Day)

### Workflow per Komponen

```
1. Buat branch          → git checkout -b feat/hero-split develop
2. Buat komponen        → registry/default/hero-split/hero-split.tsx
3. Buat preview         → src/app/components/hero-split/previews/
4. Buat registry entry  → tambah ke registry.json
5. Test responsive      → dev server di 375px, 768px, 1280px
6. Test accessibility   → keyboard nav, screen reader, contrast
7. Commit               → git commit -m "feat(hero): add hero-split..."
8. Push & PR            → git push origin feat/hero-split → PR ke develop
9. Self-review          → cek PR checklist
10. Merge               → squash merge ke develop
11. Cleanup             → delete feature branch
```

### Urutan Development (20 Komponen)

```
Sprint 1 (Week 1-2):  Setup + hero-centered + hero-split + navbar-simple
Sprint 2 (Week 3-4):  footer-simple + features-grid + features-alternating
Sprint 3 (Week 5-6):  pricing-simple + pricing-toggle + cta-centered
Sprint 4 (Week 7-8):  testimonial-grid + logo-cloud + hero-minimal
  → Release v0.5.0-beta (Tier 1 complete)

Sprint 5 (Week 9-10): stats-counter + faq-accordion + cta-split
Sprint 6 (Week 11-12):testimonial-marquee + lead-capture + announcement-bar
Sprint 7 (Week 13):   hero-video + footer-minimal + docs polish
  → Release v0.8.0-beta (Tier 2 complete)

Sprint 8 (Week 14):   README + llms.txt + launch prep
  → Release v1.0.0 (Public launch)
```

---

## 6. Documentation Strategy

### 6.1 Dokumentasi yang Dibutuhkan

| Dokumen | Lokasi | Audience | Prioritas |
|---------|--------|----------|:---------:|
| **README.md** | Root repo | Semua visitor | 🔴 Critical |
| **CONTRIBUTING.md** | Root repo | Contributors | 🟡 Before launch |
| **CHANGELOG.md** | Root repo | Users & devs | 🟡 Before launch |
| **CODE_OF_CONDUCT.md** | Root repo | Community | 🟡 Before launch |
| **LICENSE** | Root repo | Legal | 🔴 Critical |
| **Docs Site** | `/apps/docs` | Users | 🔴 Critical |
| **llms.txt** | Root repo | AI assistants | 🟡 Before launch |
| **Component Docs** | Per komponen di docs site | Users | 🔴 Critical |

### 6.2 README Structure

```markdown
# MarketBlocks UI

> Universal open source component registry for marketing landing pages.

[Demo] [Docs] [Figma] [Discord]

## ✨ Why MarketBlocks UI?
- side-by-side comparison visual (SaaS vs Finance vs E-commerce vs EdTech)

## 🚀 Quick Start
- install command
- code example (5 lines)

## 📦 Components (20)
- table of components dengan status badge

## 🌍 Universal by Design
- currency, input, CTA configurable
- code example showing same component, different props

## 🤖 AI-Ready
- llms.txt, MCP support

## 📋 License
MIT
```

### 6.3 Component Documentation (per komponen)

Setiap komponen di docs site memiliki:

```
1. Title + one-liner description
2. Live Preview (default context)
3. Context Switcher (SaaS | Finance | E-commerce | EdTech)
4. Install command (copy-able)
5. Props Table (name, type, default, description)
6. Code Examples
   - Basic usage
   - With input capture
   - With WhatsApp CTA
   - Dark mode variant
7. Accessibility Notes
```

### 6.4 CHANGELOG Format

```markdown
# Changelog

## [0.2.0] - 2026-05-15

### Added
- `pricing-simple` — 3-tier pricing with multi-currency support
- `pricing-toggle` — monthly/annual billing toggle
- `cta-centered` — multi-action CTA (email, phone, WhatsApp)

### Fixed
- `hero-split` — gradient overlay not rendering on Safari
- `navbar-simple` — mobile menu z-index conflict

### Changed
- Design tokens: renamed `--color-primary` to `--color-brand`
```

### 6.5 CONTRIBUTING.md Structure

```markdown
# Contributing to MarketBlocks UI

## Getting Started
- Fork → Clone → Install → Branch

## Development
- How to add a new component
- Preview system explained
- Design token usage

## Component Guidelines
- Must implement Universal Props Architecture
- All props optional with sensible defaults
- Mobile-first, accessible, dark mode support

## Commit Convention
- Link to Conventional Commits

## PR Process
- PR checklist reference
```

---

## 7. Repository Setup

### 7.1 Essential Files

```
marketblocks-ui/
├── .github/
│   ├── workflows/
│   │   ├── ci.yml
│   │   └── release.yml
│   ├── ISSUE_TEMPLATE/
│   │   ├── bug_report.yml
│   │   ├── feature_request.yml
│   │   └── new_component.yml
│   └── pull_request_template.md
├── .husky/
│   └── commit-msg
├── README.md
├── CONTRIBUTING.md
├── CHANGELOG.md
├── CODE_OF_CONDUCT.md
├── LICENSE (MIT)
├── .commitlintrc.json
├── .eslintrc.json
├── .prettierrc
├── .gitignore
└── ...
```

### 7.2 GitHub Repository Settings

| Setting | Value |
|---------|-------|
| Visibility | Public |
| License | MIT |
| Default branch | `main` |
| Branch protection (`main`) | Require PR, require CI pass |
| Branch protection (`develop`) | Require CI pass |
| Issues | Enabled |
| Discussions | Enabled (setelah launch) |
| Topics | `react`, `tailwindcss`, `shadcn`, `marketing`, `landing-page`, `ui-components`, `open-source` |
| Social preview | Custom image showing multi-context demo |

### 7.3 Issue Templates

**Bug Report:**
- Component name, expected vs actual behavior, browser, OS, screenshot

**Feature Request:**
- Use case, proposed solution, market context

**New Component Request:**
- Component name, description, which markets benefit, reference examples

---

## 8. Automation & Tooling

| Tool | Kegunaan |
|------|----------|
| **Husky** | Git hooks (pre-commit, commit-msg) |
| **commitlint** | Enforce conventional commits |
| **ESLint** | Code linting |
| **Prettier** | Code formatting |
| **TypeScript** | Type checking |
| **GitHub Actions** | CI/CD pipeline |
| **semantic-release** *(opsional)* | Auto versioning + changelog dari commits |

### Git Hooks

```bash
# Pre-commit: lint & format
npx lint-staged

# Commit-msg: validate conventional commits
npx commitlint --edit $1
```

```json
// lint-staged config in package.json
{
  "lint-staged": {
    "*.{ts,tsx}": ["eslint --fix", "prettier --write"],
    "*.{css,md,json}": ["prettier --write"]
  }
}
```

---

## 9. Release Process

### Step-by-Step Release

```bash
# 1. Pastikan develop up-to-date dan CI green
git checkout develop
git pull origin develop

# 2. Buat release branch (opsional, untuk major releases)
git checkout -b release/v0.5.0

# 3. Update version di package.json
npm version minor  # atau patch/major

# 4. Update CHANGELOG.md

# 5. Commit
git commit -am "chore: release v0.5.0"

# 6. Merge ke main
git checkout main
git merge release/v0.5.0

# 7. Tag
git tag v0.5.0

# 8. Push
git push origin main --tags

# 9. GitHub Action otomatis membuat GitHub Release

# 10. Merge balik ke develop
git checkout develop
git merge main
git push origin develop

# 11. Cleanup
git branch -d release/v0.5.0
```

---

## 10. Quality Gates

Sebelum merge ke `develop`, setiap komponen harus lulus:

| Gate | Tool/Method | Blocking? |
|------|-------------|:---------:|
| **Lint pass** | ESLint | ✅ Yes |
| **Type check pass** | TypeScript | ✅ Yes |
| **Build success** | Next.js build | ✅ Yes |
| **Responsive check** | Manual (375, 768, 1280px) | ✅ Yes |
| **Dark mode** | Manual visual check | ✅ Yes |
| **Keyboard accessible** | Manual tab-through test | ✅ Yes |
| **ARIA labels** | ESLint a11y plugin | ✅ Yes |
| **4 context previews** | Manual visual check | ✅ Yes |
| **Props documented** | PR checklist | ✅ Yes |
| **Bilingual copy** | ID + EN content presets (lihat `content-strategy.md`) | ✅ Yes |
| **4 context presets** | SaaS, Finance, E-commerce, EdTech copy | ✅ Yes |

---

## 11. Continuous Improvement & Component Evolution

### 11.1 Component Lifecycle

Setiap komponen memiliki lifecycle yang jelas:

```
┌──────────┐    ┌──────────┐    ┌──────────┐    ┌────────────┐    ┌─────────┐
│  Alpha   │ →  │  Stable  │ →  │ Evolving │ →  │ Deprecated │ →  │ Removed │
│ (v0.x)   │    │ (v1.0+)  │    │ (v1.x+)  │    │ (vN.0)     │    │ (vN+2)  │
└──────────┘    └──────────┘    └──────────┘    └────────────┘    └─────────┘
  Initial         Stable,         Iterasi          Marked for        Dihapus
  release         production      props/design     retirement        dari
                  ready           improvement                        registry
```

| Status | Badge | Artinya |
|--------|-------|---------|
| `alpha` | 🧪 | Baru dirilis, API bisa berubah |
| `stable` | ✅ | Production-ready, API stabil |
| `evolving` | 🔄 | Aktif dikembangkan, ada props/variant baru |
| `deprecated` | ⚠️ | Akan dihapus, gunakan alternatif |
| `removed` | ❌ | Tidak tersedia lagi di registry |

### 11.2 Tipe Evolusi Komponen

| Tipe Perubahan | Contoh | Branch Prefix | SemVer |
|----------------|--------|:---:|:---:|
| **Variant baru** | `hero-bento` ditambahkan ke family Hero | `feat/` | MINOR |
| **Props baru** | Tambah `floatingWidget` ke hero-split | `feat/` | MINOR |
| **Visual refresh** | Update spacing, typography | `refactor/` | PATCH |
| **Design overhaul** | Redesign total tampilan komponen | `feat/` | MINOR/MAJOR |
| **Props rename/remove** | `ctaLabel` → `cta.label` | `feat!` | MAJOR |
| **Accessibility fix** | Tambah ARIA, fix contrast | `fix/` | PATCH |
| **Performance** | Lazy load, reduce bundle | `perf/` | PATCH |
| **New context preview** | Tambah preview "Healthcare" | `docs/` | — |

### 11.3 Proses Evolusi

#### Small Changes (PATCH/MINOR tanpa breaking)

```
1. Buat GitHub Issue (label: enhancement)
2. Implementasi di feature branch
3. Update docs & preview
4. PR → Review → Merge
5. Release di next patch/minor
```

#### Significant Changes — RFC (Request for Comments)

Untuk perubahan besar yang mempengaruhi banyak user, gunakan RFC:

```markdown
<!-- .github/ISSUE_TEMPLATE/rfc.yml -->
## RFC: [Component Name] — [Change Description]

### Motivation
Kenapa perubahan ini diperlukan?

### Current Behavior
Bagaimana komponen bekerja sekarang?

### Proposed Change
Apa yang berubah? Sertakan props baru/berubah.

### Migration Path
Bagaimana user bisa migrate dari versi lama?

### Breaking Changes
Apa saja yang akan break?

### Timeline
Kapan ini akan diimplementasi?
```

**Kapan pakai RFC:**
- Perubahan props interface yang breaking
- Redesign visual yang signifikan
- Merge/split komponen (misalnya `pricing-simple` + `pricing-toggle` → `pricing`)
- Deprecation komponen

### 11.4 Deprecation Policy

```
v1.5.0  → Komponen X ditandai deprecated di docs + console warning
v1.6.0  → Deprecation notice di CHANGELOG, alternatif disediakan
v2.0.0  → Komponen X dihapus dari registry (grace period = 2 minor versions)
```

**Rules:**
- Tidak pernah menghapus komponen tanpa deprecation warning terlebih dahulu
- Minimum **2 minor versions** grace period sebelum removal
- Selalu sediakan migration guide
- Console warning saat komponen deprecated digunakan di dev mode

### 11.5 Design Iteration Workflow

Karena project ini code-first (design paralel di Figma), berikut workflow iterasi design:

```
┌─────────────┐     ┌──────────────┐     ┌──────────────┐
│ Feedback /   │ →   │ Design di    │ →   │ Update Code  │
│ User Report  │     │ Figma (jika  │     │ (branch:     │
│ (Issue)      │     │ perlu)       │     │  refactor/)  │
└─────────────┘     └──────────────┘     └──────────────┘
                           │                      │
                           ▼                      ▼
                    ┌──────────────┐     ┌──────────────┐
                    │ Update Figma │     │ Update Docs  │
                    │ Component    │     │ Preview      │
                    └──────────────┘     └──────────────┘
```

**Trigger untuk design iteration:**
- User feedback via GitHub Issues
- Tren desain baru yang relevan
- A/B testing insights dari komunitas
- Kompetitor merilis sesuatu yang better
- Accessibility audit findings

### 11.6 Community Feedback Loop

```
┌───────────────┐     ┌───────────────┐     ┌───────────────┐
│ INPUT         │     │ PRIORITIZE    │     │ ACTION        │
│               │     │               │     │               │
│ • GitHub      │     │ • Impact      │     │ • Roadmap     │
│   Issues      │ →   │ • Frequency   │ →   │   update      │
│ • Discussions │     │ • Effort      │     │ • Sprint      │
│ • Twitter     │     │ • Market      │     │   planning    │
│ • Discord     │     │   relevance   │     │ • RFC (if     │
│               │     │               │     │   breaking)   │
└───────────────┘     └───────────────┘     └───────────────┘
```

**Labeling untuk tracking:**

| Label | Kegunaan |
|-------|----------|
| `enhancement` | Improvement untuk komponen existing |
| `new-component` | Request komponen baru |
| `new-variant` | Variant baru dari komponen existing |
| `design-feedback` | Feedback visual/UX |
| `new-market` | Request support untuk market/locale baru |
| `breaking-change` | Perubahan yang akan break existing usage |
| `good-first-issue` | Cocok untuk contributor baru |

### 11.7 Post-Launch Evolution Roadmap

| Phase | Timeline | Focus |
|-------|----------|-------|
| **v1.x** | Bulan 1-3 post-launch | Bugfix, polish, community feedback |
| **v1.5** | Bulan 3-4 | New variants berdasarkan demand |
| **v2.0** | Bulan 5-6 | Props API refinement, possible breaking improvements |
| **v2.x** | Bulan 6+ | New component families, expanded market support |

### 11.8 Decision Matrix: New Component vs Enhance Existing

| Pertanyaan | Jika Ya → | Jika Tidak → |
|------------|-----------|--------------|
| Layout fundamentally berbeda? | Komponen baru | Enhance existing |
| Bisa solve dengan props tambahan? | Enhance existing | Komponen baru |
| Reuse >50% kode dari komponen existing? | Variant (enhance) | Komponen baru |
| User akan bingung jika gabung? | Komponen baru | Enhance existing |
| Semantic HTML structure sama? | Enhance existing | Komponen baru |

**Contoh:**
- `hero-centered` vs `hero-split` → **Komponen berbeda** (layout fundamentally berbeda)
- `pricing-simple` + billing toggle → **Enhance** menjadi prop `billingToggle`
- `testimonial-grid` vs `testimonial-marquee` → **Komponen berbeda** (behavior berbeda)
- `cta-centered` + dark background option → **Enhance** menjadi prop `background`

---

*Dokumen ini akan diupdate seiring project berkembang.*
