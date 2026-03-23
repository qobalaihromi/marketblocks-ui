import type { NavbarSimpleProps } from "../navbar-simple";

export const navbarContentEN: Partial<NavbarSimpleProps> = {
  logo: "MarketBlocks",
  links: [
    { label: "Features", href: "#features" },
    { label: "Pricing", href: "#pricing" },
    { label: "Components", href: "#components" },
    { label: "Docs", href: "/docs" },
  ],
  cta: { label: "Get Started", href: "#", variant: "pill" },
  ctaSecondary: { label: "Sign In", href: "/login" },
};

export const navbarContentID: Partial<NavbarSimpleProps> = {
  logo: "MarketBlocks",
  links: [
    { label: "Fitur", href: "#fitur" },
    { label: "Harga", href: "#harga" },
    { label: "Komponen", href: "#komponen" },
    { label: "Dokumentasi", href: "/docs" },
  ],
  cta: { label: "Mulai", href: "#", variant: "pill" },
  ctaSecondary: { label: "Masuk", href: "/login" },
};
