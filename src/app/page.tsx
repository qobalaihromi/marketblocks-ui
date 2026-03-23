import { NavbarSimple } from "../../registry/default/navbar-simple/navbar-simple";
import { HeroCentered } from "../../registry/default/hero-centered/hero-centered";

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

      {/* Dark Hero */}
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

      {/* Gradient Hero — E-commerce */}
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

      {/* Footer placeholder */}
      <footer
        style={{
          textAlign: "center",
          padding: "3rem 1rem",
          borderTop: "1px solid var(--color-border)",
          color: "var(--color-text-muted)",
          fontSize: "0.875rem",
        }}
      >
        <p style={{ fontWeight: 600, marginBottom: "0.5rem", color: "var(--color-text-primary)" }}>
          MarketBlocks UI
        </p>
        <p>Universal open source component registry for marketing landing pages.</p>
        <p style={{ marginTop: "1rem" }}>MIT License © 2026</p>
      </footer>
    </main>
  );
}
