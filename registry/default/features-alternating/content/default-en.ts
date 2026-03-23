import type { FeaturesAlternatingProps } from "../features-alternating";

export const featuresAltContentEN: Partial<FeaturesAlternatingProps> = {
  badge: "Features",
  headline: "Built for Real Marketing Pages",
  subtitle:
    "Not just another component library. Every section is designed to convert visitors into customers.",
  features: [
    {
      title: "Universal Props Architecture",
      description:
        "Every component adapts to any market. Configure currency, input type, CTA mechanism, and locale — all through simple props.",
      bullets: [
        "Multi-currency support (Rp, $, €, ₦)",
        "Phone or email input capture",
        "WhatsApp, email, or custom CTA",
      ],
      cta: { label: "Learn More", href: "#" },
    },
    {
      title: "Professional Bilingual Copy",
      description:
        "Stop writing lorem ipsum. Every component ships with professional default copy in Indonesian and English, across 4 industry contexts.",
      bullets: [
        "Indonesian (casual, warm tone)",
        "English (professional, direct)",
        "SaaS, Finance, E-commerce, EdTech presets",
      ],
      cta: { label: "View Examples", href: "#" },
    },
    {
      title: "Accessible by Default",
      description:
        "WCAG 2.1 AA compliant out of the box. Keyboard navigation, screen reader support, color contrast, and reduced motion — all built in.",
      bullets: [
        "Keyboard navigable",
        "ARIA labels on all elements",
        "prefers-reduced-motion respected",
      ],
      cta: { label: "Accessibility Docs", href: "#" },
    },
  ],
};

export const featuresAltContentID: Partial<FeaturesAlternatingProps> = {
  badge: "Fitur",
  headline: "Dibuat untuk Halaman Marketing Nyata",
  subtitle:
    "Bukan sekadar library komponen biasa. Setiap section didesain untuk mengubah pengunjung jadi pelanggan.",
  features: [
    {
      title: "Universal Props Architecture",
      description:
        "Setiap komponen menyesuaikan market apa pun. Konfigurasi mata uang, tipe input, mekanisme CTA, dan locale — semua lewat props sederhana.",
      bullets: [
        "Dukungan multi-mata uang (Rp, $, €, ₦)",
        "Input capture telepon atau email",
        "CTA WhatsApp, email, atau kustom",
      ],
      cta: { label: "Pelajari Lebih Lanjut", href: "#" },
    },
    {
      title: "Copy Bilingual Profesional",
      description:
        "Berhenti menulis lorem ipsum. Setiap komponen hadir dengan copy profesional dalam bahasa Indonesia dan Inggris, untuk 4 konteks industri.",
      bullets: [
        "Indonesia (nada casual, hangat)",
        "Inggris (profesional, langsung)",
        "Preset SaaS, Finance, E-commerce, EdTech",
      ],
      cta: { label: "Lihat Contoh", href: "#" },
    },
    {
      title: "Aksesibel Secara Default",
      description:
        "Sesuai WCAG 2.1 AA langsung dari kotak. Navigasi keyboard, dukungan screen reader, kontras warna, dan reduced motion — semua sudah termasuk.",
      bullets: [
        "Navigasi keyboard",
        "Label ARIA di semua elemen",
        "Mendukung prefers-reduced-motion",
      ],
      cta: { label: "Dokumentasi Aksesibilitas", href: "#" },
    },
  ],
};
