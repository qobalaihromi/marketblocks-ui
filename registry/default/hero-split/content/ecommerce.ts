import type { HeroSplitProps } from "../hero-split";

export const ecommerceEN: Partial<HeroSplitProps> = {
  badge: "Free Shipping",
  headline: ["Discover Products", "You'll Actually Love"],
  headlineAccentIndices: [0, 1],
  subtitle:
    "Curated collections from top brands. Shop with confidence — free returns, fast delivery, and unbeatable prices.",
  cta: { label: "Shop Now", href: "#", variant: "pill" },
  ctaSecondary: { label: "Browse Collection", href: "#products", variant: "pill-outline" },
  trustSignals: [
    { type: "users", label: "500K+ happy customers" },
    { type: "rating", label: "4.7 ★ App Store" },
  ],
  background: "gradient",
  gradientFrom: "hsl(25, 90%, 52%)",
  gradientTo: "hsl(340, 82%, 52%)",
};

export const ecommerceID: Partial<HeroSplitProps> = {
  badge: "Gratis Ongkir",
  headline: ["Temukan Produk", "yang Kamu Suka"],
  headlineAccentIndices: [0, 1],
  subtitle:
    "Koleksi pilihan dari brand terbaik. Belanja tanpa ragu — gratis retur, pengiriman cepat, dan harga terbaik.",
  cta: { label: "Belanja Sekarang", href: "#", variant: "pill" },
  ctaSecondary: { label: "Lihat Koleksi", href: "#products", variant: "pill-outline" },
  trustSignals: [
    { type: "users", label: "500rb+ pelanggan puas" },
    { type: "rating", label: "4,7 ★ Google Play" },
  ],
  background: "gradient",
  gradientFrom: "hsl(25, 90%, 52%)",
  gradientTo: "hsl(340, 82%, 52%)",
};
