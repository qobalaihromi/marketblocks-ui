import type { HeroSplitProps } from "../hero-split";

export const heroSplitContentEN: Partial<HeroSplitProps> = {
  badge: "Now Available",
  headline: ["Build Marketing Pages", "10x Faster"],
  headlineAccentIndices: [2, 3],
  subtitle: "Universal components with built-in copy for every market. From Jakarta to San Francisco.",
  cta: { label: "Get Started Free", href: "#", variant: "pill" },
  ctaSecondary: { label: "View Components", href: "#components", variant: "ghost" },
  trustSignals: [
    { type: "users", label: "10,000+ developers" },
    { type: "rating", label: "4.9 ★ on GitHub" },
  ],
};

export const heroSplitContentID: Partial<HeroSplitProps> = {
  badge: "Sekarang Tersedia",
  headline: ["Buat Halaman Marketing", "10x Lebih Cepat"],
  headlineAccentIndices: [2, 3, 4],
  subtitle: "Komponen universal dengan copy siap pakai untuk semua market. Dari Jakarta hingga San Francisco.",
  cta: { label: "Mulai Gratis", href: "#", variant: "pill" },
  ctaSecondary: { label: "Lihat Komponen", href: "#components", variant: "ghost" },
  inputCapture: { type: "phone", prefix: "+62", placeholder: "812-3456-7890", ctaLabel: "Daftar Sekarang" },
  trustSignals: [
    { type: "users", label: "10.000+ developer" },
    { type: "rating", label: "4,9 ★ di Google Play" },
  ],
};
