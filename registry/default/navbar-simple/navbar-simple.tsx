"use client";

import React, { useState, type ReactNode } from "react";

/* ========================================
   Navbar Simple — MarketBlocks UI
   Universal Props Architecture
   ======================================== */

export interface NavbarSimpleProps {
  /** Logo — ReactNode or string */
  logo?: ReactNode | string;
  /** Navigation links */
  links?: { label: string; href: string }[];
  /** Primary CTA */
  cta?: {
    label: string;
    href?: string;
    onClick?: () => void;
    variant?: "button" | "pill";
  };
  /** Secondary CTA (optional) */
  ctaSecondary?: {
    label: string;
    href?: string;
    onClick?: () => void;
  };
  /** Sticky navbar */
  sticky?: boolean;
  /** Additional class names */
  className?: string;
}

const defaults = {
  logo: "MarketBlocks",
  links: [
    { label: "Features", href: "#features" },
    { label: "Pricing", href: "#pricing" },
    { label: "Components", href: "#components" },
    { label: "Docs", href: "#docs" },
  ],
  cta: { label: "Get Started", href: "#", variant: "pill" as const },
};

export function NavbarSimple({
  logo = defaults.logo,
  links = defaults.links,
  cta = defaults.cta,
  ctaSecondary,
  sticky = true,
  className = "",
}: NavbarSimpleProps) {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header
      className={className}
      style={{
        position: sticky ? "sticky" : "relative",
        top: 0,
        zIndex: 40,
        backgroundColor: "var(--color-bg-page)",
        borderBottom: "1px solid var(--color-border)",
        backdropFilter: sticky ? "blur(12px)" : undefined,
      }}
      role="banner"
    >
      <nav
        style={{
          maxWidth: "var(--container-max, 1280px)",
          margin: "0 auto",
          padding: "0.875rem var(--section-padding-x, 1rem)",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
        aria-label="Main navigation"
      >
        {/* Logo */}
        <a
          href="/"
          style={{
            fontSize: "1.25rem",
            fontWeight: 700,
            fontFamily: "var(--font-display)",
            color: "var(--color-text-primary)",
            textDecoration: "none",
            display: "flex",
            alignItems: "center",
            gap: "0.5rem",
          }}
        >
          {typeof logo === "string" ? logo : logo}
        </a>

        {/* Desktop Links */}
        <ul
          style={{
            display: "none",
            listStyle: "none",
            gap: "2rem",
            margin: 0,
            padding: 0,
          }}
          className="navbar-desktop-links"
        >
          {links.map((link, i) => (
            <li key={i}>
              <a
                href={link.href}
                style={{
                  color: "var(--color-text-secondary)",
                  textDecoration: "none",
                  fontSize: "0.9375rem",
                  fontWeight: 500,
                  transition: "color var(--transition-fast)",
                }}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Desktop CTA */}
        <div style={{ display: "none", gap: "0.75rem", alignItems: "center" }} className="navbar-desktop-cta">
          {ctaSecondary && (
            <a
              href={ctaSecondary.href || "#"}
              onClick={ctaSecondary.onClick}
              style={{
                color: "var(--color-text-secondary)",
                textDecoration: "none",
                fontSize: "0.9375rem",
                fontWeight: 500,
              }}
            >
              {ctaSecondary.label}
            </a>
          )}
          {cta && (
            <a
              href={cta.href || "#"}
              onClick={cta.onClick}
              role="button"
              style={{
                padding: "0.625rem 1.5rem",
                backgroundColor: "var(--color-brand)",
                color: "var(--color-brand-fg)",
                borderRadius: cta.variant === "pill" ? "var(--radius-pill)" : "var(--radius-cta)",
                fontSize: "0.9375rem",
                fontWeight: 600,
                textDecoration: "none",
                border: "none",
                cursor: "pointer",
                transition: "background-color var(--transition-fast)",
              }}
            >
              {cta.label}
            </a>
          )}
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
          className="navbar-mobile-toggle"
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "5px",
            padding: "0.5rem",
            background: "none",
            border: "none",
            cursor: "pointer",
          }}
        >
          <span style={{ width: "24px", height: "2px", backgroundColor: "var(--color-text-primary)", transition: "all var(--transition-fast)", transform: mobileOpen ? "rotate(45deg) translateY(7px)" : "none" }} />
          <span style={{ width: "24px", height: "2px", backgroundColor: "var(--color-text-primary)", transition: "all var(--transition-fast)", opacity: mobileOpen ? 0 : 1 }} />
          <span style={{ width: "24px", height: "2px", backgroundColor: "var(--color-text-primary)", transition: "all var(--transition-fast)", transform: mobileOpen ? "rotate(-45deg) translateY(-7px)" : "none" }} />
        </button>
      </nav>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div
          style={{
            padding: "1rem var(--section-padding-x, 1rem) 1.5rem",
            borderTop: "1px solid var(--color-border)",
            backgroundColor: "var(--color-bg-page)",
          }}
          className="navbar-mobile-menu"
        >
          <ul style={{ listStyle: "none", margin: 0, padding: 0, display: "flex", flexDirection: "column", gap: "0.75rem" }}>
            {links.map((link, i) => (
              <li key={i}>
                <a
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  style={{ color: "var(--color-text-secondary)", textDecoration: "none", fontSize: "1rem", fontWeight: 500, display: "block", padding: "0.5rem 0" }}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <div style={{ marginTop: "1rem", display: "flex", flexDirection: "column", gap: "0.75rem" }}>
            {ctaSecondary && (
              <a href={ctaSecondary.href || "#"} style={{ color: "var(--color-text-secondary)", textDecoration: "none", fontSize: "1rem", fontWeight: 500, textAlign: "center" }}>
                {ctaSecondary.label}
              </a>
            )}
            {cta && (
              <a href={cta.href || "#"} role="button" style={{ display: "block", textAlign: "center", padding: "0.75rem 1.5rem", backgroundColor: "var(--color-brand)", color: "var(--color-brand-fg)", borderRadius: cta.variant === "pill" ? "var(--radius-pill)" : "var(--radius-cta)", fontSize: "1rem", fontWeight: 600, textDecoration: "none" }}>
                {cta.label}
              </a>
            )}
          </div>
        </div>
      )}

      {/* CSS for desktop show/hide */}
      <style>{`
        @media (min-width: 768px) {
          .navbar-desktop-links { display: flex !important; }
          .navbar-desktop-cta { display: flex !important; }
          .navbar-mobile-toggle { display: none !important; }
          .navbar-mobile-menu { display: none !important; }
        }
      `}</style>
    </header>
  );
}

export default NavbarSimple;
