import type { PricingSimpleProps } from "../pricing-simple";

export const pricingSimpleContentEN: Partial<PricingSimpleProps> = {
  badge: "Pricing",
  headline: "Simple, Transparent Pricing",
  subtitle: "No hidden fees. No surprise charges. Choose the plan that fits your needs.",
  currency: "$",
  tiers: [
    {
      name: "Starter",
      description: "Perfect for individuals and side projects.",
      price: "0",
      period: "/month",
      features: ["1 user", "Basic analytics", "Community support"],
      cta: { label: "Get Started", href: "#" },
    },
    {
      name: "Pro",
      description: "Best for growing teams and startups.",
      price: "29",
      period: "/month",
      isPopular: true,
      features: ["Up to 5 users", "Advanced analytics", "Priority email support", "Custom domains"],
      cta: { label: "Start Free Trial", href: "#" },
    },
    {
      name: "Enterprise",
      description: "For large organizations scaling fast.",
      price: "99",
      period: "/month",
      features: [
        "Unlimited users",
        "Custom reporting",
        "24/7 phone support",
        "SSO & SAML",
        "Dedicated account manager",
      ],
      cta: { label: "Contact Sales", href: "#" },
    },
  ],
};

export const pricingSimpleContentID: Partial<PricingSimpleProps> = {
  badge: "Harga",
  headline: "Harga Sederhana dan Transparan",
  subtitle: "Tanpa biaya tersembunyi. Pilih paket yang paling sesuai dengan kebutuhanmu.",
  currency: "Rp",
  tiers: [
    {
      name: "Pemula",
      description: "Sempurna untuk individu dan proyek sampingan.",
      price: "0",
      period: "/bulan",
      features: ["1 pengguna", "Analitik dasar", "Dukungan komunitas"],
      cta: { label: "Mulai Sekarang", href: "#" },
    },
    {
      name: "Pro",
      description: "Terbaik untuk tim yang sedang berkembang dan startup.",
      price: "299rb",
      period: "/bulan",
      isPopular: true,
      features: [
        "Hingga 5 pengguna",
        "Analitik lanjutan",
        "Prioritas email support",
        "Custom domain",
      ],
      cta: { label: "Coba Gratis", href: "#" },
    },
    {
      name: "Enterprise",
      description: "Bagi organisasi besar yang bergerak cepat.",
      price: "999rb",
      period: "/bulan",
      features: [
        "Pengguna tanpa batas",
        "Laporan kustom",
        "Dukungan telepon 24/7",
        "SSO & SAML",
        "Account manager khusus",
      ],
      cta: { label: "Hubungi Sales", href: "#" },
    },
  ],
};
