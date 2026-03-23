"use client";

import React, { type ReactNode } from "react";

/* ========================================
   Features Grid — MarketBlocks UI
   Universal Props Architecture
   ======================================== */

export interface FeaturesGridProps {
  /** Section badge */
  badge?: string;
  /** Section headline */
  headline?: string;
  /** Section subtitle */
  subtitle?: string;

  /** Feature items */
  features?: {
    icon?: ReactNode;
    title: string;
    description: string;
  }[];

  /** Grid columns (2, 3, or 4) */
  columns?: 2 | 3 | 4;
  /** Background style */
  background?: "light" | "dark" | "surface";
  /** Additional class names */
  className?: string;
}

const defaults: FeaturesGridProps = {
  badge: "Features",
  headline: "Everything You Need to Ship Faster",
  subtitle:
    "Powerful components built for real marketing pages. No lorem ipsum, no placeholders — just production-ready landing page sections.",
  columns: 3,
  features: [
    {
      title: "Universal Props",
      description:
        "Every component supports configurable currency, input type, CTA mechanism, and locale out of the box.",
    },
    {
      title: "Bilingual Copy",
      description:
        "Professional default copy in Indonesian and English, ready to use or customize for your brand.",
    },
    {
      title: "4 Industry Presets",
      description:
        "Pre-built context presets for SaaS, Finance, E-commerce, and EdTech — switch with one prop.",
    },
    {
      title: "Mobile-First",
      description:
        "Fully responsive at 375px, 768px, and 1280px. Tested across devices and screen sizes.",
    },
    {
      title: "Dark Mode Ready",
      description:
        "Every component supports light and dark themes using CSS custom properties. Zero extra config.",
    },
    {
      title: "WCAG AA Accessible",
      description:
        "Keyboard navigation, ARIA labels, focus indicators, color contrast, and reduced motion support.",
    },
  ],
};

export function FeaturesGrid({
  badge = defaults.badge,
  headline = defaults.headline,
  subtitle = defaults.subtitle,
  features = defaults.features,
  columns = defaults.columns || 3,
  background = "light",
  className = "",
}: FeaturesGridProps) {
  const isDark = background === "dark";
  const isSurface = background === "surface";

  return (
    <section
      className={className}
      style={{
        backgroundColor: isDark
          ? "var(--color-bg-hero, hsl(222,47%,6%))"
          : isSurface
            ? "var(--color-bg-surface)"
            : "var(--color-bg-page)",
        color: isDark ? "var(--color-text-inverse, #fff)" : "var(--color-text-primary)",
      }}
      aria-label="Features section"
    >
      <div
        style={{
          maxWidth: "var(--container-max, 1280px)",
          margin: "0 auto",
          padding: "var(--section-padding-y, 6rem) var(--section-padding-x, 1rem)",
        }}
      >
        {/* Header */}
        <div
          style={{
            textAlign: "center",
            marginBottom: "3.5rem",
            maxWidth: "640px",
            marginLeft: "auto",
            marginRight: "auto",
          }}
        >
          {badge && (
            <div
              style={{
                display: "inline-flex",
                padding: "0.375rem 1rem",
                borderRadius: "var(--radius-pill)",
                fontSize: "0.875rem",
                fontWeight: 500,
                marginBottom: "1rem",
                backgroundColor: isDark ? "hsla(0,0%,100%,0.15)" : "var(--color-bg-surface)",
                color: isDark ? "hsla(0,0%,100%,0.9)" : "var(--color-brand)",
                border: `1px solid ${isDark ? "hsla(0,0%,100%,0.2)" : "var(--color-border)"}`,
              }}
            >
              {badge}
            </div>
          )}

          {headline && (
            <h2
              style={{
                fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)",
                fontWeight: 700,
                lineHeight: 1.2,
                fontFamily: "var(--font-display)",
                marginBottom: "1rem",
              }}
            >
              {headline}
            </h2>
          )}

          {subtitle && (
            <p
              style={{
                fontSize: "1.0625rem",
                lineHeight: 1.6,
                color: isDark ? "hsla(0,0%,100%,0.7)" : "var(--color-text-secondary)",
              }}
            >
              {subtitle}
            </p>
          )}
        </div>

        {/* Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr",
            gap: "2rem",
          }}
          className={`features-grid-cols-${columns}`}
        >
          {features?.map((feature, i) => (
            <div
              key={i}
              style={{
                padding: "1.75rem",
                borderRadius: "var(--radius-card)",
                backgroundColor: isDark
                  ? "hsla(0,0%,100%,0.06)"
                  : isSurface
                    ? "var(--color-bg-page)"
                    : "var(--color-bg-surface)",
                border: `1px solid ${isDark ? "hsla(0,0%,100%,0.1)" : "var(--color-border)"}`,
                transition:
                  "box-shadow var(--transition-base), border-color var(--transition-base)",
              }}
            >
              {feature.icon && (
                <div
                  style={{
                    width: "2.75rem",
                    height: "2.75rem",
                    borderRadius: "var(--radius-input)",
                    backgroundColor: isDark ? "hsla(0,0%,100%,0.1)" : "var(--color-bg-muted)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginBottom: "1rem",
                    color: "var(--color-brand)",
                    fontSize: "1.25rem",
                  }}
                >
                  {feature.icon}
                </div>
              )}

              <h3
                style={{
                  fontSize: "1.0625rem",
                  fontWeight: 600,
                  marginBottom: "0.5rem",
                  fontFamily: "var(--font-display)",
                }}
              >
                {feature.title}
              </h3>

              <p
                style={{
                  fontSize: "0.9375rem",
                  lineHeight: 1.6,
                  color: isDark ? "hsla(0,0%,100%,0.65)" : "var(--color-text-muted)",
                  margin: 0,
                }}
              >
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (min-width: 640px) {
          .features-grid-cols-2 { grid-template-columns: repeat(2, 1fr) !important; }
          .features-grid-cols-3 { grid-template-columns: repeat(2, 1fr) !important; }
          .features-grid-cols-4 { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (min-width: 1024px) {
          .features-grid-cols-3 { grid-template-columns: repeat(3, 1fr) !important; }
          .features-grid-cols-4 { grid-template-columns: repeat(4, 1fr) !important; }
        }
      `}</style>
    </section>
  );
}

export default FeaturesGrid;
