import type { HeroCenteredProps } from "../hero-centered";

export const edtechEN: Partial<HeroCenteredProps> = {
  badge: "Start Learning",
  headline: ["Learn at Your Own Pace", "From Anywhere"],
  headlineAccentIndices: [4, 5],
  subtitle: "Join millions of learners worldwide. Access expert-led courses with lifetime access and a certificate of completion.",
  cta: { label: "Enroll Free", href: "#", variant: "pill" },
  ctaSecondary: { label: "Explore Courses", href: "#courses", variant: "ghost" },
  inputCapture: { type: "email", placeholder: "Enter your email", ctaLabel: "Get Started Free" },
  trustSignals: [
    { type: "users", label: "3M+ students" },
    { type: "rating", label: "4.9 ★ rating" },
    { type: "award", label: "EdTech Award 2025" },
  ],
  background: "dark",
};

export const edtechID: Partial<HeroCenteredProps> = {
  badge: "Mulai Belajar",
  headline: ["Belajar Sesuai Ritme Kamu", "dari Mana Saja"],
  headlineAccentIndices: [3, 4],
  subtitle: "Bergabung dengan jutaan pelajar di seluruh dunia. Akses kursus dari para ahli dengan akses seumur hidup dan sertifikat.",
  cta: { label: "Daftar Gratis", href: "#", variant: "pill" },
  ctaSecondary: { label: "Jelajahi Kursus", href: "#courses", variant: "ghost" },
  inputCapture: { type: "phone", prefix: "+62", placeholder: "812-3456-7890", ctaLabel: "Daftar Sekarang" },
  trustSignals: [
    { type: "users", label: "3 juta+ siswa" },
    { type: "rating", label: "4,9 ★ rating" },
    { type: "award", label: "EdTech Award 2025" },
  ],
  background: "dark",
};
