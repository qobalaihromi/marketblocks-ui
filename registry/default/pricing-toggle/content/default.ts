import type { PricingToggleProps } from "../pricing-toggle";

export const pricingToggleContentEN: Partial<PricingToggleProps> = {
  badge: "Pricing",
  headline: "Plans to Scale With You",
  subtitle: "Start for free and upgrade as you grow. Switch at any time.",
  currency: "$",
  monthlyLabel: "Monthly",
  yearlyLabel: "Annually",
  discountBadge: "Save 20%",
  tiers: [
    {
      name: "Starter",
      description: "Perfect for individuals and side projects.",
      priceMonthly: "15",
      priceYearly: "12",
      features: ["1 user", "Basic analytics", "Community support"],
      cta: { label: "Get Started", href: "#" },
    },
    {
      name: "Pro",
      description: "Best for growing teams and startups.",
      priceMonthly: "49",
      priceYearly: "39",
      isPopular: true,
      features: ["Up to 5 users", "Advanced analytics", "Priority email support", "Custom domains"],
      cta: { label: "Start Free Trial", href: "#" },
    },
  ],
};

export const pricingToggleContentID: Partial<PricingToggleProps> = {
  badge: "Harga",
  headline: "Paket yang Tumbuh Bersamamu",
  subtitle: "Mulai gratis dan upgrade seiring pertumbuhanmu. Ganti kapan saja.",
  currency: "Rp",
  monthlyLabel: "Bulanan",
  yearlyLabel: "Tahunan",
  discountBadge: "Hemat 20%",
  tiers: [
    {
      name: "Pemula",
      description: "Sempurna untuk individu dan proyek sampingan.",
      priceMonthly: "150k",
      priceYearly: "120k",
      features: ["1 pengguna", "Analitik dasar", "Dukungan komunitas"],
      cta: { label: "Mulai Sekarang", href: "#" },
    },
    {
      name: "Pro",
      description: "Terbaik untuk tim dan startup.",
      priceMonthly: "490k",
      priceYearly: "390k",
      isPopular: true,
      features: [
        "Hingga 5 pengguna",
        "Analitik lanjutan",
        "Prioritas email support",
        "Custom domain",
      ],
      cta: { label: "Coba Gratis", href: "#" },
    },
  ],
};
