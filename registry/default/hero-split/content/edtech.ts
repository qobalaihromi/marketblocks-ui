import type { HeroSplitProps } from "../hero-split";

export const edtechEN: Partial<HeroSplitProps> = {
  badge: "Start Learning",
  headline: ["Master New Skills", "at Your Own Pace"],
  headlineAccentIndices: [0, 1, 2],
  subtitle:
    "Join millions of learners worldwide. Expert-led courses with lifetime access, hands-on projects, and verified certificates.",
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

export const edtechID: Partial<HeroSplitProps> = {
  badge: "Mulai Belajar",
  headline: ["Kuasai Skill Baru", "Sesuai Ritme Kamu"],
  headlineAccentIndices: [0, 1, 2],
  subtitle:
    "Bergabung dengan jutaan pelajar di seluruh dunia. Kursus dari para ahli dengan akses seumur hidup, proyek langsung, dan sertifikat.",
  cta: { label: "Daftar Gratis", href: "#", variant: "pill" },
  ctaSecondary: { label: "Jelajahi Kursus", href: "#courses", variant: "ghost" },
  inputCapture: {
    type: "phone",
    prefix: "+62",
    placeholder: "812-3456-7890",
    ctaLabel: "Daftar Sekarang",
  },
  trustSignals: [
    { type: "users", label: "3 juta+ siswa" },
    { type: "rating", label: "4,9 ★ rating" },
    { type: "award", label: "EdTech Award 2025" },
  ],
  background: "dark",
};
