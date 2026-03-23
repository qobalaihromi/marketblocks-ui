import type { HeroVideoProps } from "../hero-video";

export const heroVideoContentEN: Partial<HeroVideoProps> = {
  badge: "High Performance",
  headline: ["Build immersive experiences.", "Without the heavy lifting."],
  subtitle:
    "Component-driven development allows your team to focus on the core product while we handle the presentation layer.",
  cta: { label: "Start Free Trial", href: "#", variant: "button" },
  ctaSecondary: { label: "Watch Demo", href: "#", variant: "outline" },
  videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4", // Replace with real brand video
  overlayOpacity: 0.6,
};

export const heroVideoContentID: Partial<HeroVideoProps> = {
  badge: "Performa Tinggi",
  headline: ["Bangun pengalaman memukau.", "Tanpa beban teknis berat."],
  subtitle:
    "Component-driven development memungkinkan tim Anda fokus pada produk inti sementara kami menangani presentasi visualnya.",
  cta: { label: "Mulai Trial Gratis", href: "#", variant: "button" },
  ctaSecondary: { label: "Lihat Demo", href: "#", variant: "outline" },
  videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4", // Replace with real brand video
  overlayOpacity: 0.6,
};
