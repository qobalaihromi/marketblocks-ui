import type { HeroSplitProps } from "../hero-split";

export const financeEN: Partial<HeroSplitProps> = {
  badge: "Trusted by Millions",
  headline: ["Banking Made Simple", "For Everyone"],
  headlineAccentIndices: [0, 1, 2],
  subtitle:
    "Manage your money with confidence. Open an account in minutes with best-in-class security and zero hidden fees.",
  cta: { label: "Open Account", href: "#", variant: "button" },
  ctaSecondary: { label: "Learn More", href: "#features", variant: "ghost" },
  trustSignals: [
    { type: "users", label: "2M+ accounts" },
    { type: "award", label: "Best Fintech 2025" },
    { type: "media", label: "Featured in Forbes" },
  ],
};

export const financeID: Partial<HeroSplitProps> = {
  badge: "Dipercaya Jutaan Orang",
  headline: ["Perbankan yang Simpel", "untuk Semua Orang"],
  headlineAccentIndices: [0, 1, 2],
  subtitle:
    "Kelola uang kamu dengan percaya diri. Buka rekening dalam hitungan menit dengan keamanan terbaik dan tanpa biaya tersembunyi.",
  cta: { label: "Buka Rekening", href: "#", variant: "button" },
  ctaSecondary: { label: "Pelajari Lebih Lanjut", href: "#features", variant: "ghost" },
  inputCapture: {
    type: "phone",
    prefix: "+62",
    placeholder: "812-3456-7890",
    ctaLabel: "Daftar Sekarang",
  },
  trustSignals: [
    { type: "users", label: "2 juta+ rekening" },
    { type: "award", label: "Best Fintech 2025" },
    { type: "media", label: "Diulas di Kompas" },
  ],
};
