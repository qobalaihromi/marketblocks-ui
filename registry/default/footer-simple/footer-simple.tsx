"use client";

import React, { type ReactNode } from "react";

/* ========================================
   Footer Simple — MarketBlocks UI
   Universal Props Architecture
   ======================================== */

export interface FooterSimpleProps {
  /** Logo — ReactNode or string */
  logo?: ReactNode | string;
  /** Tagline below logo */
  tagline?: string;

  /** Column groups */
  columns?: {
    title: string;
    links: { label: string; href: string }[];
  }[];

  /** Social links */
  socials?: {
    platform: string;
    href: string;
    icon?: ReactNode;
  }[];

  /** Bottom bar text */
  copyright?: string;
  /** Legal links (privacy, terms) */
  legalLinks?: { label: string; href: string }[];

  /** Additional class names */
  className?: string;
}

const defaults: FooterSimpleProps = {
  logo: "MarketBlocks",
  tagline: "Universal components for marketing landing pages.",
  columns: [
    {
      title: "Product",
      links: [
        { label: "Components", href: "#" },
        { label: "Pricing", href: "#" },
        { label: "Changelog", href: "#" },
        { label: "Documentation", href: "#" },
      ],
    },
    {
      title: "Company",
      links: [
        { label: "About", href: "#" },
        { label: "Blog", href: "#" },
        { label: "Careers", href: "#" },
        { label: "Contact", href: "#" },
      ],
    },
    {
      title: "Resources",
      links: [
        { label: "Community", href: "#" },
        { label: "GitHub", href: "#" },
        { label: "Support", href: "#" },
        { label: "llms.txt", href: "#" },
      ],
    },
  ],
  copyright: `© ${new Date().getFullYear()} MarketBlocks UI. All rights reserved.`,
  legalLinks: [
    { label: "Privacy Policy", href: "#" },
    { label: "Terms of Service", href: "#" },
  ],
};

export function FooterSimple({
  logo = defaults.logo,
  tagline = defaults.tagline,
  columns = defaults.columns,
  socials,
  copyright = defaults.copyright,
  legalLinks = defaults.legalLinks,
  className = "",
}: FooterSimpleProps) {
  return (
    <footer
      className={className}
      style={{
        backgroundColor: "var(--color-bg-surface)",
        borderTop: "1px solid var(--color-border)",
        color: "var(--color-text-secondary)",
      }}
      role="contentinfo"
    >
      <div
        style={{
          maxWidth: "var(--container-max, 1280px)",
          margin: "0 auto",
          padding: "4rem var(--section-padding-x, 1rem) 2rem",
        }}
      >
        {/* Main grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr",
            gap: "3rem",
            marginBottom: "3rem",
          }}
          className="footer-grid"
        >
          {/* Brand */}
          <div>
            <a
              href="/"
              style={{
                fontSize: "1.25rem",
                fontWeight: 700,
                fontFamily: "var(--font-display)",
                color: "var(--color-text-primary)",
                textDecoration: "none",
                display: "inline-block",
                marginBottom: "0.75rem",
              }}
            >
              {typeof logo === "string" ? logo : logo}
            </a>
            {tagline && (
              <p
                style={{
                  fontSize: "0.875rem",
                  lineHeight: 1.6,
                  maxWidth: "280px",
                  color: "var(--color-text-muted)",
                }}
              >
                {tagline}
              </p>
            )}

            {/* Socials */}
            {socials && socials.length > 0 && (
              <div
                style={{ display: "flex", gap: "1rem", marginTop: "1.25rem" }}
                aria-label="Social links"
              >
                {socials.map((s, i) => (
                  <a
                    key={i}
                    href={s.href}
                    aria-label={s.platform}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      color: "var(--color-text-muted)",
                      transition: "color var(--transition-fast)",
                    }}
                  >
                    {s.icon || s.platform}
                  </a>
                ))}
              </div>
            )}
          </div>

          {/* Link columns */}
          {columns && columns.length > 0 && (
            <div
              style={{
                display: "grid",
                gridTemplateColumns: `repeat(${columns.length}, 1fr)`,
                gap: "2rem",
              }}
            >
              {columns.map((col, i) => (
                <div key={i}>
                  <h3
                    style={{
                      fontSize: "0.875rem",
                      fontWeight: 600,
                      color: "var(--color-text-primary)",
                      marginBottom: "1rem",
                      textTransform: "uppercase",
                      letterSpacing: "0.05em",
                    }}
                  >
                    {col.title}
                  </h3>
                  <ul
                    style={{
                      listStyle: "none",
                      margin: 0,
                      padding: 0,
                      display: "flex",
                      flexDirection: "column",
                      gap: "0.625rem",
                    }}
                  >
                    {col.links.map((link, j) => (
                      <li key={j}>
                        <a
                          href={link.href}
                          style={{
                            color: "var(--color-text-muted)",
                            textDecoration: "none",
                            fontSize: "0.875rem",
                            transition: "color var(--transition-fast)",
                          }}
                        >
                          {link.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Bottom bar */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "0.75rem",
            alignItems: "center",
            paddingTop: "1.5rem",
            borderTop: "1px solid var(--color-border)",
            fontSize: "0.8125rem",
            color: "var(--color-text-muted)",
          }}
          className="footer-bottom"
        >
          {copyright && <p style={{ margin: 0 }}>{copyright}</p>}
          {legalLinks && legalLinks.length > 0 && (
            <div style={{ display: "flex", gap: "1.5rem" }}>
              {legalLinks.map((link, i) => (
                <a
                  key={i}
                  href={link.href}
                  style={{
                    color: "var(--color-text-muted)",
                    textDecoration: "none",
                    fontSize: "0.8125rem",
                  }}
                >
                  {link.label}
                </a>
              ))}
            </div>
          )}
        </div>
      </div>

      <style>{`
        @media (min-width: 768px) {
          .footer-grid { grid-template-columns: 1.2fr 2fr !important; }
          .footer-bottom { flex-direction: row !important; justify-content: space-between !important; }
        }
      `}</style>
    </footer>
  );
}

export default FooterSimple;
