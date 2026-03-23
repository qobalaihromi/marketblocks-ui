# Mini PRD — Marketing UI Library
> Status: Draft v0.3 | Terakhir diupdate: Maret 2026
> Changelog v0.3: Reframe filosofi ke universal component system, tambah Universal Props Architecture, Locale & Market Adaptability, update komponen list dengan props kontekstual, update competitive positioning

---

## 1. Problem Statement

Developer dan designer yang membangun marketing landing page menghadapi pilihan yang sama-sama tidak ideal:

- **Pakai shadcn/ui** → komponen product-focused (button, form, table), bukan marketing sections. Hero, pricing table, testimonial grid harus dibuat dari scratch.
- **Pakai template berbayar** → tidak fleksibel, susah dikustomisasi, semua website jadi terlihat sama.
- **Pakai Tailark / Launch UI / Shadcnblocks** → ada, tapi semuanya diasumsikan untuk satu audience: developer barat yang membangun SaaS. Email hardcoded. Dollar sign hardcoded. Tidak ada yang memikirkan bahwa developer penggunanya bisa berasal dari Jakarta, São Paulo, atau Lagos.

**Gap yang belum diisi:** Tidak ada open source component registry khusus marketing yang:
1. Bisa di-install via shadcn CLI dan via AI assistant secara natural language
2. Punya sistem props yang benar-benar **locale-agnostic** — currency, input type, CTA mechanism semua configurable
3. Dimulai dari **designer-first** — Figma kit sebagai primary deliverable, bukan afterthought
4. AI-friendly by design — deskripsi komponen ditulis untuk LLM, bukan hanya manusia
5. Bisa dipakai untuk **semua jenis produk** — SaaS, finance, e-commerce, EdTech, marketplace — tanpa terasa dipaksakan

---

## 2. Filosofi Desain: Universal Component System

> **Ini adalah keputusan arsitektur paling penting di seluruh PRD ini.**

Semua library marketing yang ada saat ini dibangun dengan asumsi implisit: *"User kita adalah developer Silicon Valley yang membangun SaaS B2B."* Akibatnya:

- Input selalu email, tidak pernah phone
- Currency selalu dollar, tidak pernah rupiah
- CTA selalu "Sign up free", tidak pernah "Konsultasi Sekarang"
- Trust signals selalu TechCrunch dan Forbes, tidak pernah Kompas atau penghargaan lokal

Library kita dibangun dengan asumsi yang **berbeda secara fundamental**: developer penggunanya bisa berasal dari mana saja, membangun produk apa saja, untuk market mana saja.

### Tiga Lapisan Sistem

```
┌─────────────────────────────────────────────┐
│  LAPISAN 3 — PROPS KONTEKSTUAL              │
│  Input type, currency, CTA mechanism,        │
│  trust signal format, social platform        │
│  → Berubah sesuai use case & market          │
├─────────────────────────────────────────────┤
│  LAPISAN 2 — DESIGN TOKENS                  │
│  Warna, radius, font, spacing, shadow        │
│  → Berubah sesuai brand identity             │
├─────────────────────────────────────────────┤
│  LAPISAN 1 — STRUKTUR KOMPONEN              │
│  HTML semantik, layout grid, accessibility   │
│  → Universal, tidak pernah berubah           │
└─────────────────────────────────────────────┘
```

**Hasilnya:** Komponen `hero-split` yang sama bisa tampil seperti landing page Stripe, seperti halaman Ruangguru, seperti fintech Nigeria, atau seperti marketplace Brasil — hanya dengan berbeda props dan tokens. **Satu komponen, tak terbatas konteks.**

---

## 3. Goal & Success Metrics

### Goals
- Membuat marketing UI library berbasis shadcn registry yang bisa dipakai developer dalam < 5 menit
- Menjadi **satu-satunya** marketing component library yang benar-benar locale-agnostic dan market-neutral
- Menjadi referensi utama untuk marketing landing page di ekosistem shadcn, baik untuk market Indonesia maupun internasional
- Menjadi **marketing UI library pertama yang MCP-native**

### Success Metrics (6 bulan pertama)
| Metric | Target |
|--------|--------|
| GitHub Stars | 500+ |
| Komponen tersedia | 30+ sections |
| Weekly installs via CLI | 200+ |
| Figma Community file views | 1.000+ |
| Launch di Product Hunt | Top 5 of the day |
| MCP registry registrations | 100+ project |
| Negara asal contributor/user | 10+ negara |

---

## 4. Competitive Landscape

| Library | Audience asumsi | Locale-agnostic? | MCP? | Figma kit? |
|---------|----------------|-----------------|------|------------|
| **Tailark** | Western SaaS | Tidak | Tidak | Tidak |
| **Launch UI** | Western SaaS | Tidak | Tidak | Tidak |
| **Shadcnblocks** | Western SaaS | Tidak | Tidak | Sebagian |
| **Magic UI** | Western SaaS | Tidak | Tidak | Tidak |
| **Aceternity UI** | Western premium | Tidak | Tidak | Tidak |
| **Marketing UI (kita)** | **Semua market** | **Ya** | **Ya** | **Ya** |

**Posisi kita:** Satu-satunya yang secara eksplisit dirancang untuk developer dari market manapun — bukan hanya Silicon Valley.

---

## 5. Target Users

### Primary: Developer Indie / Startup (Global)
- Membangun produk digital di market manapun — Indonesia, India, Nigeria, Brasil, Eropa
- Butuh landing page professional dalam waktu singkat
- Familiar dengan shadcn, Tailwind, dan React ecosystem
- Pain: Library yang ada mengasumsikan konteks yang tidak relevan (email-only, USD-only, western CTA patterns)

### Secondary: Designer yang Vibe-coding
- Punya sense desain kuat tapi coding terbatas
- Pakai v0.dev, Cursor, atau Claude Code untuk generate UI
- Pain: Hasil AI terlalu generic dan terasa "satu ukuran untuk semua"
- **Keunggulan kita:** Props yang ekspresif = AI bisa generate konteks yang benar-benar tepat

### Tertiary: Agency / Freelancer (Multi-market)
- Menangani klien dari berbagai industri dan market
- Butuh library yang cukup fleksibel untuk finance client, retail client, dan EdTech client sekaligus
- Pain: Harus switch library atau buat dari scratch untuk setiap jenis klien

---

## 6. Universal Props Architecture

### 6.1 Prinsip Props Design

Setiap komponen harus dirancang sehingga **tidak ada asumsi hardcoded** tentang:
- Jenis input yang digunakan untuk konversi
- Format currency dan angka
- Mekanisme CTA (form, button, WhatsApp, App Store)
- Sumber trust signal
- Platform media sosial yang relevan

### 6.2 Contoh Props — `hero-split`

```tsx
interface HeroSplitProps {
  // Konten headline — mendukung dua warna
  headline: string | string[]
  headlineAccentIndices?: number[]   // indeks kata yang pakai accent color
  subtitle?: string
  badge?: string                     // pill/label di atas headline

  // CTA — mechanism-agnostic
  cta: {
    label: string
    href?: string
    onClick?: () => void
    variant?: "button" | "pill" | "pill-outline"
  }
  ctaSecondary?: {
    label: string
    href?: string
    variant?: "button" | "pill" | "pill-outline" | "ghost"
  }

  // Input capture — type-agnostic
  inputCapture?: {
    type: "email" | "phone" | "text" | "none"
    prefix?: string        // "+62" (ID), "+1" (US), "+234" (NG), dst
    placeholder?: string
    ctaLabel?: string      // label tombol di dalam form
  }

  // Trust signals — source-agnostic
  trustSignals?: {
    type: "rating" | "users" | "award" | "media"
    label: string          // "4.9 ★ App Store", "30 juta siswa", "Top Brand 2025"
    icon?: ReactNode
  }[]

  // Visual
  background?: "light" | "dark" | "gradient" | "image"
  gradientFrom?: string
  gradientTo?: string
  visual?: ReactNode

  // Komponen tambahan opsional
  floatingWidget?: ReactNode  // WA button, chat widget, konsultan button, dll
}
```

### 6.3 Contoh Props — `pricing-simple`

```tsx
interface PricingSimpleProps {
  plans: {
    name: string
    price: number | string   // number untuk currency formatting, string untuk "Custom"
    period?: string          // "/bulan", "/month", "/mes", "/mês"
    highlighted?: boolean
    badge?: string           // "Terpopuler", "Most Popular", "Mais Popular"
    features: string[]
    cta: { label: string; href: string }
  }[]

  // Currency — locale-aware
  currency?: {
    symbol: string           // "Rp", "$", "€", "₦", "R$"
    position: "before" | "after"
    separator?: {
      thousands: string      // "." (ID) vs "," (US/UK)
      decimal: string        // "," (ID) vs "." (US/UK)
    }
  }

  // Billing toggle
  billingToggle?: {
    monthly: string          // "Bulanan", "Monthly", "Mensual"
    annual: string           // "Tahunan", "Annual", "Anual"
    savingsBadge?: string    // "Hemat 20%", "Save 20%"
  }
}
```

### 6.4 Contoh Props — `cta-split`

```tsx
interface CtaSplitProps {
  headline: string
  subtitle?: string

  // Action mechanism — tidak hardcoded ke email
  action: {
    type: "email-form" | "phone-form" | "whatsapp" | "app-store" | "custom"

    // untuk email-form
    emailPlaceholder?: string        // "Email kamu", "Your email"
    submitLabel?: string             // "Mulai Gratis", "Get Started"

    // untuk phone-form
    phonePrefix?: string             // "+62", "+1"
    phonePlaceholder?: string        // "81234567890"

    // untuk whatsapp
    whatsappNumber?: string          // "628123456789"
    whatsappMessage?: string         // pesan pre-filled

    // untuk app-store
    appStoreUrl?: string
    playStoreUrl?: string

    // custom
    customElement?: ReactNode
  }

  // Social proof inline
  inlineProof?: string    // "Bergabung dengan 30.000+ pengguna", "Join 30,000+ users"
}
```

### 6.5 Contoh Props — `stats-counter`

```tsx
interface StatsCounterProps {
  stats: {
    value: number | string
    suffix?: string        // "+", "M+", "rb+", "K+"
    label: string          // "Pengguna aktif", "Active users", "Usuários ativos"
    icon?: ReactNode
  }[]

  // Format angka — locale-aware
  numberLocale?: string    // "id-ID", "en-US", "pt-BR", "en-NG"
}
```

---

## 7. Scope — Phase 1 (MVP)

### 7.1 Komponen Marketing (30 sections)

Semua komponen mengimplementasikan Universal Props Architecture dari section 6.

#### Hero (5 variants)
- [ ] `hero-centered` — Headline center, subtitle, dual CTA, opsional input capture
- [ ] `hero-split` — Teks kiri + visual kanan, mendukung foto cutout atau mockup
- [ ] `hero-video` — Background video, overlay gradient, headline + CTA
- [ ] `hero-minimal` — Single headline besar, satu CTA, whitespace maksimal
- [ ] `hero-bento` — Headline + bento grid visual di bawah

#### Social Proof (4 variants)
- [ ] `logo-cloud` — Logo grid, label configurable ("Dipercaya oleh" / "Trusted by")
- [ ] `testimonial-grid` — Card 3 kolom, rating source configurable
- [ ] `testimonial-marquee` — Auto-scroll horizontal
- [ ] `stats-counter` — Angka besar, number locale configurable, animated count-up

#### Features (4 variants)
- [ ] `features-grid` — 3 kolom icon + judul + deskripsi
- [ ] `features-alternating` — Visual bergantian kiri/kanan
- [ ] `features-bento` — Bento grid layout
- [ ] `features-tabs` — Tab switcher dengan visual per fitur

#### Pricing (3 variants)
- [ ] `pricing-simple` — 3 tier, currency + billing period configurable
- [ ] `pricing-toggle` — Monthly/annual toggle, savings badge configurable
- [ ] `pricing-comparison` — Tabel perbandingan fitur lengkap

#### CTA (3 variants)
- [ ] `cta-centered` — Background kontras, mendukung email / phone / WhatsApp action
- [ ] `cta-banner` — Full-width strip, dismissible
- [ ] `cta-split` — Konten kiri + form/action kanan, action type configurable

#### Navigation (2 variants)
- [ ] `navbar-simple` — Logo + menu + CTA, pill atau rectangle button
- [ ] `navbar-mega` — Dropdown mega menu dengan preview

#### Footer (2 variants)
- [ ] `footer-simple` — 4 kolom link, social icons configurable (termasuk WhatsApp, LINE, TikTok)
- [ ] `footer-minimal` — Single row

#### Misc (7 variants)
- [ ] `faq-accordion` — FAQ expand/collapse
- [ ] `blog-grid` — Card grid artikel
- [ ] `team-grid` — Foto + nama + role
- [ ] `lead-capture-form` — Form capture yang mendukung email, phone (+prefix), atau keduanya
- [ ] `announcement-bar` — Top bar promo/berita, dismissible
- [ ] `breadcrumb` — Navigasi breadcrumb
- [ ] `page-header` — Hero mini untuk halaman dalam

> **Catatan perubahan dari v0.2:** `newsletter-form` diganti `lead-capture-form` yang mendukung email DAN phone input — lebih universal untuk semua market.

### 7.2 Tech Stack

```
Docs Site    : Next.js 15 (App Router) — HANYA untuk docs & preview site
Styling      : Tailwind CSS v4 — styling engine untuk semua komponen
Registry     : shadcn registry format (registry.json + public/r/)
Animation    : CSS native default + Framer Motion opt-in per komponen
Icons        : Lucide React
Fonts        : Geist (default), configurable via CSS variables
i18n preview : Docs site menampilkan contoh komponen dalam beberapa locale
```

### 7.3 Dependency Architecture

| Teknologi | Jenis dependency | Penjelasan |
|-----------|-----------------|------------|
| **Tailwind CSS** | Hard dependency | Wajib ada di project user |
| **shadcn CLI** | Alat distribusi saja | Tidak ada di runtime setelah install |
| **Next.js** | Hanya docs site | User tidak butuh Next.js untuk pakai komponen |
| **Framer Motion** | Opsional per komponen | Hanya jika komponen animasi dipilih |

> **Kunci:** Komponen ditulis 100% dari awal — bukan modifikasi shadcn. shadcn hanya menyediakan distribusi dan konvensi.

### 7.4 Struktur Project

```
marketing-ui/
├── registry/
│   └── default/
│       ├── hero-split/
│       │   └── hero-split.tsx
│       ├── pricing-simple/
│       │   └── pricing-simple.tsx
│       └── ...
├── src/
│   └── app/
│       ├── page.tsx
│       └── components/[name]/
│           ├── page.tsx          # Preview default
│           └── previews/
│               ├── saas.tsx      # Preview konteks SaaS
│               ├── finance.tsx   # Preview konteks finance
│               ├── edtech.tsx    # Preview konteks EdTech
│               └── ecommerce.tsx # Preview konteks e-commerce
├── public/r/
├── llms.txt
├── registry.json
└── package.json
```

> **Preview multi-konteks** adalah diferensiasi docs site kita — setiap komponen ditampilkan dalam 4 konteks berbeda agar developer langsung paham fleksibilitasnya.

### 7.5 Design Token System

```css
/* Token universal — tidak ada yang hardcoded untuk industri tertentu */
:root {
  /* Brand — semua configurable */
  --color-brand:        hsl(221 83% 53%);
  --color-brand-fg:     hsl(210 40% 98%);
  --color-accent:       hsl(38 95% 55%);  /* untuk headline dua warna */
  --color-accent-fg:    hsl(0 0% 0%);

  /* Backgrounds */
  --color-bg-page:      hsl(0 0% 100%);
  --color-bg-surface:   hsl(210 40% 98%);
  --color-bg-muted:     hsl(210 40% 96%);
  --color-bg-hero:      var(--color-bg-page); /* override untuk dark hero */

  /* Typography */
  --font-display:       "Geist", sans-serif;
  --font-body:          "Geist", sans-serif;

  /* Spacing */
  --section-padding-y:  clamp(4rem, 8vw, 8rem);

  /* Radius — bisa di-set ke 9999px untuk pill style */
  --radius-cta:         0.5rem;
  --radius-card:        0.75rem;
  --radius-input:       0.5rem;
}

/* Contoh override untuk "vibrant/warm" brand — e-commerce, EdTech */
[data-theme="warm"] {
  --color-brand:        hsl(25 90% 52%);    /* oranye */
  --color-accent:       hsl(48 96% 53%);    /* kuning */
  --color-bg-hero:      hsl(231 60% 22%);   /* dark blue */
  --radius-cta:         9999px;             /* pill CTA */
}

/* Contoh override untuk "trust/conservative" brand — finance, B2B */
[data-theme="trust"] {
  --color-brand:        hsl(213 94% 24%);   /* navy */
  --color-accent:       hsl(164 71% 41%);   /* teal */
  --color-bg-hero:      hsl(0 0% 98%);      /* near-white */
  --radius-cta:         0.375rem;           /* subtle radius */
}
```

---

## 8. Locale & Market Adaptability

### 8.1 Apa yang Harus Bisa Dikonfigurasi

| Aspek | Contoh nilai |
|-------|-------------|
| **Input konversi** | email, phone (+62, +1, +234), NIK, custom |
| **Currency** | Rp (IDR), $ (USD), € (EUR), ₦ (NGN), R$ (BRL) |
| **Format angka** | 1.000 (ID) vs 1,000 (US) |
| **CTA mechanism** | Form submit, WhatsApp deeplink, App Store link, Tokopedia/Shopee link |
| **Trust signals** | App Store rating, Google rating, media lokal, award lokal, jumlah pengguna |
| **Social links** | Instagram, TikTok, WhatsApp, LINE, Twitter/X, LinkedIn, YouTube |
| **Button style** | Pill (ID/Southeast Asia) vs Rectangle (Western) |
| **Headline style** | Monochrome (Western) vs Dua warna (Southeast Asia / LATAM) |

### 8.2 Bukan Tema Terpisah — Tapi Props Biasa

Pendekatan kita bukan membuat "Indonesian theme" atau "Western theme" sebagai preset terpisah. Setiap hal di atas adalah **prop biasa** yang bisa diset oleh developer. Tidak ada label market, tidak ada asumsi.

Developer di Jakarta mengeset `inputCapture={{ type: "phone", prefix: "+62" }}` bukan karena itu "Indonesian theme" — tapi karena itulah yang paling konversi untuk produknya. Developer di Lagos mengeset `currency={{ symbol: "₦", position: "before" }}` bukan karena itu "Nigerian theme" — tapi karena itulah currency yang benar.

### 8.3 Docs Site Preview Multi-Konteks

Di docs site, setiap komponen ditampilkan dalam **4 preview konteks** berbeda:

- **SaaS / Western** — light background, email input, "Start free trial", monochrome
- **Finance / Banking** — navy, formal typography, "Buka Rekening" / "Open Account"
- **E-commerce / Marketplace** — vibrant, harga + diskon, "Beli Sekarang" / "Shop Now"
- **EdTech / Service** — gradient hero, phone input, "Daftar Sekarang" / "Enroll Now"

Ini bukan empat komponen berbeda — ini satu komponen dengan props berbeda. Tujuannya agar developer langsung paham: *"Oh, ini bisa langsung saya pakai untuk konteks saya."*

---

## 9. Registry & Distribution

### 9.1 Registry Schema

Deskripsi komponen wajib AI-friendly, menyebutkan use cases lintas industri:

```json
{
  "name": "hero-split",
  "type": "registry:block",
  "title": "Hero Split",
  "description": "Versatile hero section with text on the left and visual on the right. Supports light and dark backgrounds, configurable CTA button style (pill or rectangle), optional phone or email input capture, and two-tone headline for accent emphasis. Suitable for SaaS, EdTech, e-commerce, fintech, and any marketing landing page. Supports dark mode and mobile-first layout.",
  "files": [
    {
      "path": "registry/default/hero-split/hero-split.tsx",
      "type": "registry:component"
    }
  ]
}
```

### 9.2 Install Commands

```bash
npx shadcn@latest add https://marketing-ui.dev/r/hero-split.json
npx shadcn@latest add @marketing-ui/hero-split
npx shadcn@latest add @marketing-ui/hero-split @marketing-ui/pricing-simple @marketing-ui/cta-split
```

### 9.3 Namespace Setup

```json
{
  "registries": {
    "@marketing-ui": "https://marketing-ui.dev/r/{name}.json"
  }
}
```

---

## 10. MCP Server Integration

Karena mengikuti shadcn registry format, library kita otomatis compatible dengan shadcn MCP server.

```
"Buatkan landing page untuk aplikasi fintech di Indonesia.
 Pakai hero dengan phone input +62, pricing dalam rupiah,
 dan CTA yang mengarah ke WhatsApp."
```

AI akan browse registry, install komponen yang relevan, dan generate kode dengan props yang tepat — termasuk `currency={{ symbol: "Rp" }}` dan `inputCapture={{ type: "phone", prefix: "+62" }}`.

### Setup MCP

```bash
pnpm dlx shadcn@latest mcp init --client claude
pnpm dlx shadcn@latest mcp init --client cursor
pnpm dlx shadcn@latest mcp init --client vscode
```

### Positioning Statement

> *"Marketing UI library pertama yang benar-benar universal — bisa dipakai untuk produk apapun, dari market manapun, oleh developer di seluruh dunia."*

---

## 11. AI Strategy & llms.txt

### 11.1 llms.txt

```markdown
# Marketing UI

Universal open source component registry for marketing landing pages.
Built on shadcn/ui registry format and Tailwind CSS.
Works for any product type (SaaS, fintech, e-commerce, EdTech) and any market.
All components support configurable currency, input type, CTA mechanism, and locale.

## Available components
- Hero (5 variants): hero-centered, hero-split, hero-video, hero-minimal, hero-bento
- Social proof: logo-cloud, testimonial-grid, testimonial-marquee, stats-counter
- Features: features-grid, features-alternating, features-bento, features-tabs
- Pricing: pricing-simple, pricing-toggle, pricing-comparison
- CTA: cta-centered, cta-banner, cta-split
- Navigation: navbar-simple, navbar-mega
- Footer: footer-simple, footer-minimal
- Misc: faq-accordion, blog-grid, team-grid, lead-capture-form, announcement-bar

## Install
npx shadcn@latest add @marketing-ui/[component-name]

## Registry
https://marketing-ui.dev/r/{name}.json

## Key props
- inputCapture.type: "email" | "phone" | "text"
- inputCapture.prefix: "+62" | "+1" | "+234" | any
- currency.symbol: "Rp" | "$" | "€" | "₦" | any
- cta.variant: "button" | "pill"
- headlineAccentIndices: highlight specific words in a different color
- background: "light" | "dark" | "gradient"
```

### 11.2 Prinsip AI-Friendly Descriptions

Setiap deskripsi komponen menyebutkan: fungsi, use cases lintas industri, props yang paling berpengaruh, dan market yang relevan.

---

## 12. Differensiasi

| Aspek | Kompetitor | Marketing UI |
|-------|-----------|--------------|
| Audience asumsi | Western SaaS developer | **Semua developer, semua market** |
| Input konversi | Email hardcoded | **Email / phone / custom — configurable** |
| Currency | USD hardcoded | **Semua currency — configurable** |
| CTA mechanism | Form submit / button | **Form / WhatsApp / App Store / custom** |
| Trust signals | TechCrunch / G2 | **Configurable — lokal atau internasional** |
| Button style | Rectangle saja | **Pill atau rectangle — configurable** |
| Headline | Monochrome | **Mono atau dua warna — configurable** |
| Docs preview | Satu contoh | **4 konteks: SaaS, finance, e-commerce, EdTech** |
| Figma kit | Seadanya / tidak ada | **Figma kit lengkap, primary deliverable** |
| MCP support | Tidak ada | **Native, first-class** |
| AI discoverability | Tidak dipikirkan | **llms.txt + cross-industry descriptions** |

### Estetika Default

**Editorial / Refined** — terinspirasi dari Linear, Vercel, dan Stripe sebagai baseline. Tapi karena token dan props bisa diubah, developer bisa bergerak ke mana saja dari sana.

> **Keputusan estetika final perlu divalidasi di Figma dulu.** Buat 3 direction sebelum commit ke kode.

---

## 13. Business Model

### Phase 1 — Open Source (bulan 1–4)
- Semua 30 komponen gratis, MIT license
- Figma kit core 30 sections = gratis di Figma Community
- Revenue: $0 — investasi di reputasi dan ekosistem

### Phase 2 — Freemium (bulan 5–8)
- Core 30 komponen tetap gratis selamanya
- **Pro tier** ($79 one-time / $149 dengan Figma kit lengkap):
  - 70+ komponen tambahan
  - Full Figma component kit (semua komponen + token + variants semua konteks)
  - 5 full landing page templates (SaaS, finance, EdTech, e-commerce, marketplace)
  - Priority support via GitHub
- **Model: one-time purchase** — developer sangat anti-subscription untuk tooling

### Phase 3 — Scale (bulan 9+)
- Agency license ($299 one-time, unlimited client projects)
- Theme generator (web-based, generate CSS variables sesuai brand dan market)
- Explore: white-label registry hosting untuk design system klien

---

## 14. Go-to-Market

### Distribution channels
1. **Twitter/X** — Build in public, demo multi-konteks (sama komponen, 4 tampilan berbeda)
2. **GitHub** — README dengan side-by-side comparison: SaaS vs EdTech vs Finance vs E-commerce
3. **Figma Community** — Publish Figma kit gratis
4. **shadcn ecosystem** — Submit ke shadcn directory, Discord shadcn
5. **Product Hunt** — Launch setelah 20+ komponen siap
6. **YouTube** — "Satu komponen, empat tampilan berbeda" — format video yang menarik

### Unique launch angle
Demo yang paling menarik untuk social media: **satu komponen, di-switch antara empat konteks secara live**. Ini sesuatu yang tidak bisa dilakukan library lain dan akan sangat shareable.

### Launch checklist
- [ ] 20+ komponen siap dengan preview multi-konteks (SaaS, finance, e-commerce, EdTech)
- [ ] Docs site live di custom domain
- [ ] `llms.txt` live
- [ ] MCP setup guide di docs
- [ ] Figma Community file published (gratis, 30 sections × 4 konteks)
- [ ] README dengan side-by-side demo
- [ ] Twitter/X build in public thread (min 10 post sebelum launch)
- [ ] Product Hunt listing

---

## 15. Risiko & Mitigasi

| Risiko | Probabilitas | Dampak | Mitigasi |
|--------|-------------|--------|----------|
| Props terlalu kompleks, overwhelming untuk developer | Sedang | Tinggi | Semua props opsional dengan sensible defaults. Tanpa props = komponen tetap berjalan baik |
| Tailwind breaking changes | Sedang | Sedang | Pin versi di docs, ikuti migration guide |
| Kompetitor adopt universal approach setelah melihat kita | Sedang | Sedang | First mover + Figma kit + MCP = moat yang butuh waktu untuk ditiru |
| Traction lambat bulan pertama | Tinggi | Sedang | Build in public dari hari 1 |
| Solo project — bandwidth terbatas | Tinggi | Tinggi | Mulai 10 komponen berkualitas tinggi, bukan 30 yang biasa |

---

## 16. Open Questions

1. **Nama project** — Paling urgent. Harus terasa universal, bukan Indonesia-specific atau Western-specific
2. **Estetika final** — 3 direction di Figma dulu. Baseline editorial, tapi perlu divalidasi
3. **Framework support v1** — Next.js dulu saja, atau langsung Astro dan Vite?
4. **Animation** — CSS native atau Framer Motion opt-in?
5. **Co-founder / kolaborator** — Developer partner atau solo dulu?
6. **Figma kit: free atau paid?** — Rekomendasi: core 30 sections gratis, extended paid
7. **shadcn directory submission** — Sejak awal atau setelah ada traction?
8. **Apakah perlu i18n untuk teks UI di docs site?** — Bahasa Inggris saja cukup untuk international reach

---

## 17. Timeline (Estimasi)

| Fase | Durasi | Deliverable |
|------|--------|-------------|
| Naming & domain | 1 minggu | Nama final, domain, GitHub repo live |
| Research & Design | 2 minggu | Figma kit 30 sections × 4 konteks, design system final |
| Setup infrastruktur | 1 minggu | Monorepo, registry, docs site shell, llms.txt |
| Komponen batch 1 | 3 minggu | 10 komponen dengan props universal + preview multi-konteks |
| Docs + MCP guide | 1 minggu | Live preview 4 konteks, MCP setup docs |
| Komponen batch 2 | 3 minggu | 20 komponen: pricing, testimonial, FAQ, lead capture, dst |
| Polish + launch prep | 2 minggu | README, Product Hunt assets, Figma publish, Twitter thread |
| **Public launch** | **—** | **13 minggu dari mulai** |

---

*PRD ini adalah dokumen hidup — update seiring diskusi dan development berlanjut.*

*Changelog:*
*v0.1 → v0.2: Tambah MCP, competitive landscape, dependency architecture, AI strategy, llms.txt, tabel risiko*
*v0.2 → v0.3: Reframe ke universal component philosophy, tambah Universal Props Architecture (section 6), Locale & Market Adaptability (section 8), docs preview multi-konteks, update semua komponen dengan props universal, update competitive table, update launch angle*
