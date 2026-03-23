import type { HeroCenteredProps } from "../hero-centered";

export const saasEN: Partial<HeroCenteredProps> = {
  badge: "New Release",
  headline: ["Ship Faster with", "Ready-Made Components"],
  headlineAccentIndices: [0, 1],
  subtitle: "Stop rebuilding marketing pages from scratch. Get production-ready sections that work for any SaaS product.",
  cta: { label: "Start Free Trial", href: "#", variant: "pill" },
  ctaSecondary: { label: "Watch Demo", href: "#demo", variant: "ghost" },
  inputCapture: { type: "email", placeholder: "Enter your work email", ctaLabel: "Start Free Trial" },
  trustSignals: [
    { type: "users", label: "5,000+ teams" },
    { type: "rating", label: "4.8 ★ on G2" },
    { type: "award", label: "Product Hunt #1" },
  ],
  background: "light",
};

export const saasID: Partial<HeroCenteredProps> = {
  badge: "Rilis Terbaru",
  headline: ["Kirim Lebih Cepat dengan", "Komponen Siap Pakai"],
  headlineAccentIndices: [0, 1, 2],
  subtitle: "Berhenti membuat halaman marketing dari nol. Dapatkan section siap produksi untuk produk SaaS apa pun.",
  cta: { label: "Coba Gratis", href: "#", variant: "pill" },
  ctaSecondary: { label: "Lihat Demo", href: "#demo", variant: "ghost" },
  inputCapture: { type: "email", placeholder: "Masukkan email kerja kamu", ctaLabel: "Coba Gratis" },
  trustSignals: [
    { type: "users", label: "5.000+ tim" },
    { type: "rating", label: "4,8 ★ di G2" },
    { type: "award", label: "Product Hunt #1" },
  ],
  background: "light",
};
