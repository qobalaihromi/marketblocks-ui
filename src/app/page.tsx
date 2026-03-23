import { NavbarSimple } from "../../registry/default/navbar-simple/navbar-simple";
import { HeroCentered } from "../../registry/default/hero-centered/hero-centered";
import { FeaturesGrid } from "../../registry/default/features-grid/features-grid";
import { FeaturesAlternating } from "../../registry/default/features-alternating/features-alternating";
import { FooterSimple } from "../../registry/default/footer-simple/footer-simple";
import { PricingSimple } from "../../registry/default/pricing-simple/pricing-simple";
import { PricingToggle } from "../../registry/default/pricing-toggle/pricing-toggle";
import { CtaCentered } from "../../registry/default/cta-centered/cta-centered";
import { ctaCenteredCaptureEN } from "../../registry/default/cta-centered/content/default";
import { TestimonialGrid } from "../../registry/default/testimonial-grid/testimonial-grid";
import { LogoCloud } from "../../registry/default/logo-cloud/logo-cloud";
import { HeroMinimal } from "../../registry/default/hero-minimal/hero-minimal";

export default function Home() {
  return (
    <main>
      <NavbarSimple />

      {/* Default Hero — No props needed */}
      <HeroCentered />

      {/* Hero with Input Capture */}
      <HeroCentered
        badge="SaaS Example"
        headline={["Ship Faster with", "Ready-Made Components"]}
        headlineAccentIndices={[0, 1]}
        subtitle="Stop rebuilding marketing pages from scratch. Get production-ready sections that work for any SaaS product."
        inputCapture={{
          type: "email",
          placeholder: "Enter your work email",
          ctaLabel: "Start Free Trial",
        }}
        trustSignals={[
          { type: "users", label: "5,000+ teams" },
          { type: "rating", label: "4.8 ★ on G2" },
        ]}
      />

      {/* Features Grid */}
      <FeaturesGrid background="surface" />

      {/* Features Alternating */}
      <FeaturesAlternating />

      {/* Dark Hero — EdTech */}
      <HeroCentered
        badge="EdTech Example"
        headline={["Learn at Your Own Pace", "From Anywhere"]}
        headlineAccentIndices={[4, 5]}
        subtitle="Join millions of learners worldwide. Access expert-led courses with lifetime access."
        background="dark"
        cta={{ label: "Enroll Free", href: "#", variant: "pill" }}
        ctaSecondary={{ label: "Explore Courses", href: "#", variant: "ghost" }}
        trustSignals={[
          { type: "users", label: "3M+ students" },
          { type: "rating", label: "4.9 ★ rating" },
        ]}
      />

      {/* Gradient Hero — E-commerce (Indonesian copy) */}
      <HeroCentered
        badge="Gratis Ongkir"
        headline={["Semua yang Kamu Butuhkan", "Diantar ke Rumah"]}
        headlineAccentIndices={[0, 1, 2, 3]}
        subtitle="Koleksi pilihan dengan harga tak terkalahkan. Belanja dari ribuan produk dengan pengiriman cepat."
        background="gradient"
        gradientFrom="hsl(25, 90%, 52%)"
        gradientTo="hsl(340, 82%, 52%)"
        cta={{ label: "Belanja Sekarang", href: "#", variant: "pill" }}
        ctaSecondary={{ label: "Lihat Koleksi", href: "#", variant: "pill-outline" }}
        trustSignals={[
          { type: "users", label: "500rb+ pelanggan puas" },
          { type: "rating", label: "4,7 ★ Google Play" },
        ]}
      />

      {/* Features Grid — Indonesian, Dark */}
      <FeaturesGrid
        badge="Fitur"
        headline="Semua yang Kamu Butuhkan untuk Kirim Lebih Cepat"
        subtitle="Komponen powerful untuk halaman marketing nyata. Tanpa lorem ipsum — langsung section siap produksi."
        background="dark"
        features={[
          {
            title: "Universal Props",
            description:
              "Konfigurasi mata uang, tipe input, mekanisme CTA, dan locale secara langsung.",
          },
          {
            title: "Copy Bilingual",
            description: "Copy profesional dalam bahasa Indonesia dan Inggris, siap pakai.",
          },
          {
            title: "4 Preset Industri",
            description: "SaaS, Finance, E-commerce, dan EdTech — ganti dengan satu prop.",
          },
        ]}
      />

      {/* CTA Centered — Brand background (default) */}
      <CtaCentered />

      {/* CTA Centered — Dual CTA, Gradient */}
      <CtaCentered
        background="gradient"
        gradientFrom="hsl(250, 80%, 60%)"
        gradientTo="hsl(280, 80%, 50%)"
      />

      {/* Pricing Simple */}
      <PricingSimple />

      {/* Pricing Toggle — Surface Background */}
      <PricingToggle background="surface" />

      {/* CTA Centered — Input Capture, Surface */}
      <CtaCentered {...ctaCenteredCaptureEN} background="surface" />

      {/* Hero Minimal */}
      <HeroMinimal />

      {/* Hero Minimal — Dark with Input */}
      <HeroMinimal
        badge="Early Access"
        headline={["The future of UI.", "Available today."]}
        subtitle="Join 10,000+ developers building faster than ever before."
        background="dark"
        cta={undefined}
        ctaSecondary={undefined}
        inputCapture={{
          type: "email",
          placeholder: "name@company.com",
          ctaLabel: "Get Access",
        }}
      />

      {/* Logo Cloud */}
      <LogoCloud background="surface" />

      {/* Testimonial Grid */}
      <TestimonialGrid />

      {/* Footer */}
      <FooterSimple />
    </main>
  );
}
