import type { HeroSplitProps } from "../hero-split";

export const saasEN: Partial<HeroSplitProps> = {
  badge: "New Release",
  headline: ["Ship Your Product", "Faster Than Ever"],
  headlineAccentIndices: [3, 4],
  subtitle:
    "Stop rebuilding marketing pages from scratch. Get production-ready components that your team can customize and deploy in minutes.",
  cta: { label: "Start Free Trial", href: "#", variant: "pill" },
  ctaSecondary: { label: "Watch Demo", href: "#demo", variant: "ghost" },
  inputCapture: {
    type: "email",
    placeholder: "Enter your work email",
    ctaLabel: "Start Free Trial",
  },
  trustSignals: [
    { type: "users", label: "5,000+ teams" },
    { type: "rating", label: "4.8 ★ on G2" },
    { type: "award", label: "Product Hunt #1" },
  ],
};

export const saasID: Partial<HeroSplitProps> = {
  badge: "Rilis Terbaru",
  headline: ["Kirim Produk Kamu", "Lebih Cepat dari Sebelumnya"],
  headlineAccentIndices: [3, 4, 5],
  subtitle:
    "Berhenti membuat halaman marketing dari nol. Dapatkan komponen siap pakai yang bisa tim kamu kustomisasi dan deploy dalam hitungan menit.",
  cta: { label: "Coba Gratis", href: "#", variant: "pill" },
  ctaSecondary: { label: "Lihat Demo", href: "#demo", variant: "ghost" },
  inputCapture: {
    type: "phone",
    prefix: "+62",
    placeholder: "812-3456-7890",
    ctaLabel: "Mulai Gratis",
  },
  trustSignals: [
    { type: "users", label: "5.000+ tim" },
    { type: "rating", label: "4,8 ★ di G2" },
    { type: "award", label: "Product Hunt #1" },
  ],
};
