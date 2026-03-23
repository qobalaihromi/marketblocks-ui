# MarketBlocks UI — Content & Copywriting Strategy

> Status: Draft v1.0 | Maret 2026
> Bahasa default: Indonesia (ID) & English (EN)

---

## 1. Filosofi Konten

### Bukan Hanya Komponen — Tapi Komponen yang Siap Pakai

Mayoritas UI component library hanya menyediakan **struktur visual** — developer harus menulis copy sendiri. MarketBlocks UI berbeda: setiap komponen datang dengan **default copy yang sudah profesional**, dalam dua bahasa, dan disesuaikan per konteks industri.

```
┌─────────────────────────────────────────────────────────┐
│ Kompetitor                                              │
│ Komponen + "Lorem ipsum" → Developer tulis copy sendiri │
├─────────────────────────────────────────────────────────┤
│ MarketBlocks UI                                         │
│ Komponen + Copy profesional ID/EN × 4 industri          │
│ → Developer bisa langsung pakai atau customize          │
└─────────────────────────────────────────────────────────┘
```

**Kenapa ini penting:**
- Developer bukan copywriter — mereka butuh starting point yang bagus
- AI assistant bisa generate copy yang lebih tepat jika melihat contoh yang berkualitas
- Copy yang baik = demo yang meyakinkan = adoption yang lebih tinggi

---

## 2. Bilingual Copy System

### 2.1 Struktur Default Copy

Setiap komponen memiliki file content preset:

```
registry/default/hero-split/
├── hero-split.tsx           ← Komponen
└── content/
    ├── default-id.ts        ← Copy Bahasa Indonesia
    └── default-en.ts        ← Copy English
```

### 2.2 Format Content Preset

```typescript
// content/default-en.ts
export const heroSplitContent = {
  badge: "New Release",
  headline: ["Build Landing Pages", "That Actually Convert"],
  headlineAccentIndices: [3, 4],
  subtitle: "Stop wasting time building marketing pages from scratch. Get production-ready components with copy that speaks to your audience.",
  cta: { label: "Get Started Free", href: "#" },
  ctaSecondary: { label: "View Components", href: "#" },
  inputCapture: {
    type: "email" as const,
    placeholder: "Enter your email",
    ctaLabel: "Start Free Trial"
  },
  trustSignals: [
    { type: "users" as const, label: "10,000+ developers" },
    { type: "rating" as const, label: "4.9 ★ on GitHub" }
  ]
}
```

```typescript
// content/default-id.ts
export const heroSplitContent = {
  badge: "Rilis Terbaru",
  headline: ["Buat Landing Page", "yang Benar-Benar Konversi"],
  headlineAccentIndices: [3, 4],
  subtitle: "Berhenti buang waktu membuat halaman marketing dari nol. Dapatkan komponen siap pakai dengan copy yang berbicara ke audiens kamu.",
  cta: { label: "Mulai Gratis", href: "#" },
  ctaSecondary: { label: "Lihat Komponen", href: "#" },
  inputCapture: {
    type: "phone" as const,
    prefix: "+62",
    placeholder: "812-3456-7890",
    ctaLabel: "Daftar Sekarang"
  },
  trustSignals: [
    { type: "users" as const, label: "10.000+ developer" },
    { type: "rating" as const, label: "4,9 ★ di Google Play" }
  ]
}
```

### 2.3 Multi-Context Content Presets

Selain bilingual, setiap komponen punya copy per konteks industri:

```
content/
├── default-en.ts           ← Generic English
├── default-id.ts           ← Generic Indonesia
├── saas-en.ts              ← SaaS English
├── saas-id.ts              ← SaaS Indonesia
├── finance-en.ts           ← Finance English
├── finance-id.ts           ← Finance Indonesia
├── ecommerce-en.ts         ← E-commerce English
├── ecommerce-id.ts         ← E-commerce Indonesia
├── edtech-en.ts            ← EdTech English
└── edtech-id.ts            ← EdTech Indonesia
```

---

## 3. UX Writing Guidelines

### 3.1 Tone of Voice per Bahasa

| Aspek | 🇮🇩 Indonesia | 🇺🇸 English |
|-------|-------------|---------|
| **Formalitas** | Semi-casual, hangat | Professional, clean |
| **Sapaan** | "kamu" (bukan "Anda" kecuali finance) | "you" / "your" |
| **CTA tone** | Ajakan lembut, "Yuk", "Mulai" | Direct, "Get", "Start", "Try" |
| **Urgency** | Soft urgency: "Jangan lewatkan" | Direct: "Limited time", "Act now" |
| **Angka** | 10.000 pengguna | 10,000 users |
| **Emoji** | Gunakan sparingly di badge/promo | Hindari di copy utama |

### 3.2 Headline Writing Rules

**Formula headline yang digunakan:**

| Formula | ID | EN |
|---------|----|----|
| **Benefit + Differentiator** | "Buat Landing Page yang Benar-Benar Konversi" | "Build Landing Pages That Actually Convert" |
| **Pain → Solution** | "Berhenti Coding dari Nol, Mulai dari Komponen" | "Stop Coding from Scratch, Start with Components" |
| **Number + Benefit** | "20+ Komponen Siap Pakai untuk Semua Market" | "20+ Ready-Made Components for Every Market" |
| **Question** | "Capek Buat Landing Page dari Nol?" | "Tired of Building Landing Pages from Scratch?" |

**Rules:**
- Headline maksimal **12 kata**
- Gunakan **kata kerja aktif** di awal
- Highlight **benefit**, bukan fitur
- Jika dua warna: kata kunci di accent color

### 3.3 CTA Copy Guidelines

| Konteks | 🇮🇩 Primary CTA | 🇮🇩 Secondary | 🇺🇸 Primary CTA | 🇺🇸 Secondary |
|---------|----------------|--------------|----------------|--------------|
| **SaaS** | Mulai Gratis | Lihat Demo | Start Free Trial | Watch Demo |
| **Finance** | Buka Rekening | Pelajari Lebih Lanjut | Open Account | Learn More |
| **E-commerce** | Belanja Sekarang | Lihat Koleksi | Shop Now | Browse Collection |
| **EdTech** | Daftar Sekarang | Coba Gratis | Enroll Now | Try for Free |
| **Service/Agency** | Konsultasi Gratis | Hubungi Kami | Book a Call | Contact Us |
| **WhatsApp CTA** | Chat via WhatsApp | — | Chat on WhatsApp | — |

**CTA Rules:**
- Maksimal **3 kata** untuk primary CTA
- Always include benefit hint: "Mulai **Gratis**", "Start **Free**"
- Secondary CTA = lower commitment
- Verb-first pattern: "Mulai...", "Start...", "Get..."

### 3.4 Microcopy Standards

| Elemen | 🇮🇩 | 🇺🇸 |
|--------|------|------|
| **Email placeholder** | "Masukkan email kamu" | "Enter your email" |
| **Phone placeholder** | "812-3456-7890" | "(555) 123-4567" |
| **Form submit** | "Kirim" / "Daftar" | "Submit" / "Sign Up" |
| **Loading** | "Memuat..." | "Loading..." |
| **Success** | "Berhasil! Cek email kamu." | "Success! Check your inbox." |
| **Error** | "Ups, coba lagi." | "Oops, please try again." |
| **Empty state** | "Belum ada data." | "No data yet." |
| **Privacy note** | "Data kamu aman bersama kami" | "Your data is safe with us" |
| **Trust note** | "Tanpa kartu kredit" | "No credit card required" |

---

## 4. Content Presets per Komponen

### 4.1 Hero Sections

| Prop | SaaS (EN) | SaaS (ID) | Finance (EN) | Finance (ID) |
|------|-----------|-----------|--------------|--------------|
| **badge** | "Now in Beta" | "Sekarang Beta" | "Trusted by Millions" | "Dipercaya Jutaan Orang" |
| **headline** | "Ship Faster with Ready-Made Components" | "Kirim Lebih Cepat dengan Komponen Siap Pakai" | "Your Financial Future Starts Here" | "Masa Depan Finansial Kamu Dimulai di Sini" |
| **subtitle** | "Production-ready UI blocks for your next landing page." | "Blok UI siap produksi untuk landing page selanjutnya." | "Secure, simple, and built for everyone." | "Aman, simpel, dan dibuat untuk semua." |
| **cta** | "Start Free" | "Mulai Gratis" | "Open Account" | "Buka Rekening" |
| **input type** | email | phone (+62) | email | phone (+62) |

| Prop | E-commerce (EN) | E-commerce (ID) | EdTech (EN) | EdTech (ID) |
|------|-----------------|-----------------|-------------|-------------|
| **badge** | "Free Shipping" | "Gratis Ongkir" | "Start Learning" | "Mulai Belajar" |
| **headline** | "Everything You Need, Delivered to Your Door" | "Semua yang Kamu Butuhkan, Diantar ke Rumah" | "Learn at Your Own Pace, from Anywhere" | "Belajar Sesuai Ritme Kamu, dari Mana Saja" |
| **subtitle** | "Curated collections. Unbeatable prices." | "Koleksi pilihan. Harga tak terkalahkan." | "Join millions of learners worldwide." | "Bergabung dengan jutaan pelajar di seluruh dunia." |
| **cta** | "Shop Now" | "Belanja Sekarang" | "Enroll Free" | "Daftar Gratis" |
| **input type** | email | phone (+62) | email | phone (+62) |

### 4.2 Pricing

| Prop | EN | ID |
|------|----|----|
| **Plan names** | Starter / Professional / Enterprise | Pemula / Profesional / Bisnis |
| **Price format** | $29/month | Rp299.000/bulan |
| **CTA free tier** | "Get Started Free" | "Mulai Gratis" |
| **CTA paid** | "Upgrade Now" | "Upgrade Sekarang" |
| **Billing toggle** | Monthly / Annual | Bulanan / Tahunan |
| **Savings badge** | "Save 20%" | "Hemat 20%" |
| **Popular badge** | "Most Popular" | "Terpopuler" |
| **Feature list style** | "Unlimited projects" | "Proyek tanpa batas" |

### 4.3 Testimonials

| Prop | EN | ID |
|------|----|----|
| **Section title** | "Loved by Thousands" | "Dicintai Ribuan Pengguna" |
| **Rating source** | "on G2" / "on Product Hunt" | "di Google Play" / "di App Store" |
| **Social proof** | "Join 10,000+ developers" | "Bergabung dengan 10.000+ developer" |
| **Fallback name style** | "Sarah K., CTO at Acme" | "Budi S., CTO di TokoCepat" |

### 4.4 CTA Sections

| Prop | EN | ID |
|------|----|----|
| **headline** | "Ready to Get Started?" | "Siap untuk Memulai?" |
| **subtitle** | "Join thousands of developers shipping faster." | "Bergabung dengan ribuan developer yang kirim lebih cepat." |
| **inline proof** | "Join 5,000+ users" | "Gabung 5.000+ pengguna" |
| **WA pre-filled msg** | — | "Halo, saya tertarik dengan [produk]. Bisa info lebih lanjut?" |

### 4.5 FAQ

| Prop | EN | ID |
|------|----|----|
| **Section title** | "Frequently Asked Questions" | "Pertanyaan yang Sering Diajukan" |
| **Question style** | "How does pricing work?" | "Bagaimana cara kerja harga?" |
| **Answer style** | Direct, concise, benefit-focused | Hangat, jelas, solusi-oriented |
| **Contact fallback** | "Still have questions? Contact us." | "Masih ada pertanyaan? Hubungi kami." |

### 4.6 Footer

| Prop | EN | ID |
|------|----|----|
| **Column headers** | Product / Company / Resources / Legal | Produk / Perusahaan / Sumber Daya / Legal |
| **Privacy link** | "Privacy Policy" | "Kebijakan Privasi" |
| **Terms link** | "Terms of Service" | "Syarat & Ketentuan" |
| **Made with** | "Made with ♥ in [City]" | "Dibuat dengan ♥ di [Kota]" |

---

## 5. Perbedaan Kultural dalam Copy

### 5.1 Indonesia vs English — Pola yang Perlu Dipahami

| Aspek | 🇮🇩 Indonesia | 🇺🇸 English |
|-------|-------------|---------|
| **Trust building** | Angka pengguna, testimoni lokal, "digunakan oleh [brand lokal]" | Review platform (G2, Capterra), investor logos, media mentions |
| **Urgency** | Soft: "Jangan lewatkan", "Terbatas" | Hard: "Act now", "Limited time offer" |
| **Price framing** | Tampilkan harga coret + harga baru, "Hemat Rp100.000" | Annual billing savings, "Save 20% annually" |
| **Social platform** | WhatsApp, Instagram, TikTok | Twitter/X, LinkedIn, Product Hunt |
| **Contact preference** | WhatsApp > Phone > Email | Email > Form > Phone |
| **Payment mention** | "Tanpa kartu kredit", "Bisa bayar via transfer" | "No credit card required" |
| **Number format** | 10.000+ pengguna | 10,000+ users |
| **Currency** | Rp299.000 (titik separator, tanpa desimal) | $29.99 (koma separator, dengan desimal) |

### 5.2 CTA yang Konversi per Market

**Indonesia — Softer, invitation-style:**
```
✅ "Yuk, Mulai Sekarang"       (inviting)
✅ "Coba Gratis"               (low commitment)
✅ "Daftar Sekarang"           (clear action)
✅ "Chat via WhatsApp"         (familiar channel)
❌ "Beli Sekarang!"            (terlalu agresif)
❌ "DAFTAR SEKARANG!!!"        (spammy)
```

**English — Direct, action-oriented:**
```
✅ "Start Free Trial"          (clear benefit)
✅ "Get Started"               (action verb)
✅ "Book a Demo"               (specific action)
✅ "Try for Free"              (low risk)
❌ "Click Here"                (too vague)
❌ "Submit"                    (no benefit)
```

---

## 6. Content Quality Checklist

Sebelum setiap komponen di-merge, copy harus lulus:

| Gate | Check | Applies to |
|------|-------|:----------:|
| **Bilingual** | Copy tersedia dalam ID dan EN | Semua komponen |
| **4 konteks** | Preset SaaS, Finance, E-commerce, EdTech tersedia | Semua komponen |
| **Headline length** | Maksimal 12 kata | Hero, CTA |
| **CTA length** | Maksimal 3 kata | Semua CTA buttons |
| **Tone match** | ID = semi-casual, EN = professional | Semua copy |
| **Number format** | "10.000" (ID) vs "10,000" (EN) | Stats, pricing, trust signals |
| **Currency format** | "Rp299.000" (ID) vs "$29.99" (EN) | Pricing |
| **No lorem ipsum** | Semua teks harus real copy | Semua komponen |
| **Typo-free** | Proofread kedua bahasa | Semua copy |
| **Culturally appropriate** | Tidak ada asumsi kultural yang salah | Semua konteks |

---

## 7. Content Maintenance

### 7.1 Kapan Update Copy

| Trigger | Contoh | Action |
|---------|--------|--------|
| **Komponen baru** | `cta-split` ditambahkan | Buat 10 content preset (2 bahasa × 5 konteks) |
| **Konteks baru** | Healthcare ditambahkan | Update semua komponen existing + buat preset baru |
| **User feedback** | "CTA Indonesia terlalu formal" | Review + update tone |
| **Market trend** | TikTok Shop jadi mainstream | Tambah konteks marketplace |
| **New locale** | Portuguese (Brazil) diminta | Buat content preset baru per komponen |

### 7.2 Menambah Bahasa Baru

Jika komunitas meminta bahasa baru (misal Portuguese, Hindi):

```
1. Buat GitHub Issue (label: new-locale)
2. Buat content template (copy dari EN sebagai base)
3. Native speaker review (via community contribution)
4. PR → Review → Merge
5. Update docs site dengan preview baru
```

### 7.3 Commit Convention untuk Content

```bash
# Content baru
content(hero): add hero-split copy presets ID/EN

# Update copy
content(pricing): improve CTA wording for ID market

# Bahasa baru
content(hero): add Portuguese (BR) copy presets
```

> Tambahkan `content` sebagai scope baru di commitlint config.

---

## 8. AI & Copy Generation

### 8.1 Kenapa AI-Friendly Copy Penting

Content presets kita menjadi **training example** untuk AI:
- Saat developer pakai Cursor/Claude Code untuk generate landing page, AI melihat contoh copy kita
- Copy yang berkualitas = AI generate copy yang berkualitas juga
- Props yang ekspresif + copy yang tepat = AI bisa generate konteks yang benar

### 8.2 llms.txt Copy Section

```markdown
## Default copy presets
Each component includes professional default copy in:
- Indonesian (ID) — casual, warm, WhatsApp-oriented
- English (EN) — professional, direct, email-oriented

## Content context presets
Available per component for: SaaS, Finance, E-commerce, EdTech
Each preset includes culturally appropriate headlines, CTAs, trust signals,
and microcopy with correct number/currency formatting.
```

---

*Dokumen ini adalah panduan konten dan copywriting untuk MarketBlocks UI. Update seiring penambahan komponen dan locale baru.*
