import type { HeroCenteredProps } from "../hero-centered";

export const heroCenteredContentID: Partial<HeroCenteredProps> = {
  badge: "Sekarang Tersedia",
  headline: ["Buat Landing Page", "yang Benar-Benar Konversi"],
  headlineAccentIndices: [3, 4],
  subtitle:
    "Komponen marketing siap pakai dengan copy profesional dalam berbagai bahasa. Dibuat untuk semua market, semua produk.",
  cta: { label: "Mulai Gratis", href: "#", variant: "pill" },
  ctaSecondary: { label: "Lihat Komponen", href: "#components", variant: "ghost" },
  inputCapture: {
    type: "phone",
    prefix: "+62",
    placeholder: "812-3456-7890",
    ctaLabel: "Daftar Sekarang",
  },
  trustSignals: [
    { type: "users", label: "10.000+ developer" },
    { type: "rating", label: "4,9 ★ di Google Play" },
  ],
};
