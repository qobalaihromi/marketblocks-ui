import type { HeroCenteredProps } from "../hero-centered";

export const financeEN: Partial<HeroCenteredProps> = {
  badge: "Trusted by Millions",
  headline: ["Your Financial Future", "Starts Here"],
  headlineAccentIndices: [2, 3],
  subtitle: "Secure, simple, and built for everyone. Open your account in minutes and start growing your wealth today.",
  cta: { label: "Open Account", href: "#", variant: "button" },
  ctaSecondary: { label: "Learn More", href: "#features", variant: "ghost" },
  trustSignals: [
    { type: "users", label: "2M+ accounts" },
    { type: "award", label: "Best Fintech 2025" },
    { type: "media", label: "Featured in Forbes" },
  ],
  background: "light",
};

export const financeID: Partial<HeroCenteredProps> = {
  badge: "Dipercaya Jutaan Orang",
  headline: ["Masa Depan Finansial Kamu", "Dimulai di Sini"],
  headlineAccentIndices: [3, 4],
  subtitle: "Aman, simpel, dan dibuat untuk semua. Buka rekening dalam hitungan menit dan mulai kembangkan kekayaan kamu.",
  cta: { label: "Buka Rekening", href: "#", variant: "button" },
  ctaSecondary: { label: "Pelajari Lebih Lanjut", href: "#features", variant: "ghost" },
  inputCapture: { type: "phone", prefix: "+62", placeholder: "812-3456-7890", ctaLabel: "Daftar Sekarang" },
  trustSignals: [
    { type: "users", label: "2 juta+ rekening" },
    { type: "award", label: "Best Fintech 2025" },
    { type: "media", label: "Diulas di Kompas" },
  ],
  background: "light",
};
