"use client";

import React from "react";

/* ========================================
   Footer Minimal — MarketBlocks UI
   Universal Props Architecture
   ======================================== */

export interface FooterMinimalProps {
  /** Logo or Brand Name */
  logo?: React.ReactNode | string;

  /** Copyright text */
  copyright?: string;

  /** Legal links (e.g., Privacy, Terms) */
  legalLinks?: Array<{ label: string; href: string }>;

  /** Social links */
  socialLinks?: Array<{ icon: React.ReactNode; href: string; ariaLabel: string }>;

  /** Background style */
  background?: "light" | "dark" | "surface";

  className?: string;
}

const defaults: FooterMinimalProps = {
  logo: "MarketBlocks",
  copyright: `© ${new Date().getFullYear()} MarketBlocks Inc. All rights reserved.`,
  legalLinks: [
    { label: "Privacy Policy", href: "#" },
    { label: "Terms of Service", href: "#" },
  ],
  socialLinks: [
    {
      ariaLabel: "Twitter",
      href: "#",
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.008 5.961h-1.91z" />
        </svg>
      ),
    },
    {
      ariaLabel: "GitHub",
      href: "#",
      icon: (
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
        </svg>
      ),
    },
  ],
};

export function FooterMinimal({
  logo = defaults.logo,
  copyright = defaults.copyright,
  legalLinks = defaults.legalLinks,
  socialLinks = defaults.socialLinks,
  background = "light",
  className = "",
}: FooterMinimalProps) {
  const isDark = background === "dark";
  const isSurface = background === "surface";

  return (
    <footer
      className={className}
      style={{
        backgroundColor: isDark
          ? "var(--color-bg-hero, hsl(222,47%,6%))"
          : isSurface
            ? "var(--color-bg-surface)"
            : "var(--color-bg-page)",
        color: isDark ? "var(--color-text-inverse, #fff)" : "var(--color-text-primary)",
        borderTop: `1px solid ${isDark ? "hsla(0,0%,100%,0.1)" : "var(--color-border)"}`,
      }}
    >
      <div
        style={{
          maxWidth: "var(--container-max, 1280px)",
          margin: "0 auto",
          padding: "var(--section-padding-y, 2rem) var(--section-padding-x, 1rem)",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "1.5rem",
          }}
          className="footer-minimal-layout"
        >
          {/* Logo & Copyright (Left on tracking) */}
          <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
            {typeof logo === "string" ? (
              <span
                style={{
                  fontWeight: 800,
                  fontSize: "1.25rem",
                  fontFamily: "var(--font-display)",
                  letterSpacing: "-0.02em",
                }}
              >
                {logo}
              </span>
            ) : (
              logo
            )}
            <span style={{ color: isDark ? "hsla(0,0%,100%,0.3)" : "var(--color-border)" }}>|</span>
            <span
              style={{
                fontSize: "0.875rem",
                color: isDark ? "hsla(0,0%,100%,0.6)" : "var(--color-text-muted)",
              }}
            >
              {copyright}
            </span>
          </div>

          {/* Links & Socials (Right on layout) */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "1.5rem",
              flexWrap: "wrap",
              justifyContent: "center",
            }}
          >
            {legalLinks && legalLinks.length > 0 && (
              <div style={{ display: "flex", gap: "1rem" }}>
                {legalLinks.map((link, idx) => (
                  <a
                    key={idx}
                    href={link.href}
                    style={{
                      fontSize: "0.875rem",
                      color: isDark ? "hsla(0,0%,100%,0.6)" : "var(--color-text-muted)",
                      textDecoration: "none",
                      transition: "color 0.2s",
                    }}
                    className="footer-minimal-link"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            )}

            {socialLinks && socialLinks.length > 0 && (
              <div style={{ display: "flex", gap: "1rem", alignItems: "center" }}>
                {socialLinks.map((social, idx) => (
                  <a
                    key={idx}
                    href={social.href}
                    aria-label={social.ariaLabel}
                    style={{
                      color: isDark ? "hsla(0,0%,100%,0.6)" : "var(--color-text-muted)",
                      transition: "color 0.2s",
                      display: "flex",
                    }}
                    className="footer-minimal-icon"
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      <style>{`
        @media (min-width: 768px) {
          .footer-minimal-layout { flex-direction: row !important; justify-content: space-between; }
        }
        .footer-minimal-link:hover, .footer-minimal-icon:hover { color: ${isDark ? "#fff" : "var(--color-brand)"} !important; }
      `}</style>
    </footer>
  );
}

export default FooterMinimal;
