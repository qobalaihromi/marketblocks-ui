import type { HeroCenteredProps } from "../hero-centered";

export const ecommerceEN: Partial<HeroCenteredProps> = {
  badge: "Free Shipping",
  headline: ["Everything You Need", "Delivered to Your Door"],
  headlineAccentIndices: [0, 1, 2],
  subtitle: "Curated collections at unbeatable prices. Shop from thousands of products with fast, reliable delivery.",
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

export const ecommerceID: Partial<HeroCenteredProps> = {
  badge: "Gratis Ongkir",
  headline: ["Semua yang Kamu Butuhkan", "Diantar ke Rumah"],
  headlineAccentIndices: [0, 1, 2, 3],
  subtitle: "Koleksi pilihan dengan harga tak terkalahkan. Belanja dari ribuan produk dengan pengiriman cepat dan terpercaya.",
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
