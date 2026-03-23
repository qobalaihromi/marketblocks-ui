"use client";

import React, { type ReactNode } from "react";

/* ========================================
   Features Alternating — MarketBlocks UI
   Universal Props Architecture
   ======================================== */

export interface FeaturesAlternatingProps {
  /** Section badge */
  badge?: string;
  /** Section headline */
  headline?: string;
  /** Section subtitle */
  subtitle?: string;

  /** Feature rows (alternates image left/right) */
  features?: {
    title: string;
    description: string;
    visual?: ReactNode;
    bullets?: string[];
    cta?: { label: string; href: string };
  }[];

  /** Background style */
  background?: "light" | "dark" | "surface";
  /** Additional class names */
  className?: string;
}

const defaults: FeaturesAlternatingProps = {
  badge: "Features",
  headline: "Built for Real Marketing Pages",
  subtitle:
    "Not just another component library. Every section is designed to convert visitors into customers.",
  features: [
    {
      title: "Universal Props Architecture",
      description:
        "Every component adapts to any market. Configure currency, input type, CTA mechanism, and locale — all through simple props.",
      bullets: [
        "Multi-currency support (Rp, $, €, ₦)",
        "Phone or email input capture",
        "WhatsApp, email, or custom CTA",
      ],
      cta: { label: "Learn More", href: "#" },
    },
    {
      title: "Professional Bilingual Copy",
      description:
        "Stop writing lorem ipsum. Every component ships with professional default copy in Indonesian and English, across 4 industry contexts.",
      bullets: [
        "Indonesian (casual, warm tone)",
        "English (professional, direct)",
        "SaaS, Finance, E-commerce, EdTech presets",
      ],
      cta: { label: "View Examples", href: "#" },
    },
    {
      title: "Accessible by Default",
      description:
        "WCAG 2.1 AA compliant out of the box. Keyboard navigation, screen reader support, color contrast, and reduced motion — all built in.",
      bullets: [
        "Keyboard navigable",
        "ARIA labels on all interactive elements",
        "prefers-reduced-motion respected",
      ],
      cta: { label: "Accessibility Docs", href: "#" },
    },
  ],
};

export function FeaturesAlternating({
  badge = defaults.badge,
  headline = defaults.headline,
  subtitle = defaults.subtitle,
  features = defaults.features,
  background = "light",
  className = "",
}: FeaturesAlternatingProps) {
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
            marginBottom: "4rem",
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

        {/* Feature rows */}
        <div style={{ display: "flex", flexDirection: "column", gap: "5rem" }}>
          {features?.map((feature, i) => {
            const isReversed = i % 2 === 1;
            return (
              <div
                key={i}
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr",
                  gap: "3rem",
                  alignItems: "center",
                }}
                className="feature-row"
              >
                {/* Visual */}
                <div
                  style={{ order: isReversed ? 1 : 2 }}
                  className={isReversed ? "feature-visual-first" : "feature-visual-second"}
                >
                  {feature.visual || (
                    <div
                      style={{
                        width: "100%",
                        aspectRatio: "16/10",
                        borderRadius: "var(--radius-card)",
                        backgroundColor: isDark ? "hsla(0,0%,100%,0.06)" : "var(--color-bg-muted)",
                        border: `1px solid ${isDark ? "hsla(0,0%,100%,0.1)" : "var(--color-border)"}`,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        color: isDark ? "hsla(0,0%,100%,0.3)" : "var(--color-text-muted)",
                        fontSize: "0.875rem",
                      }}
                    >
                      Visual {i + 1}
                    </div>
                  )}
                </div>

                {/* Text */}
                <div style={{ order: isReversed ? 2 : 1 }}>
                  <h3
                    style={{
                      fontSize: "clamp(1.25rem, 2.5vw, 1.75rem)",
                      fontWeight: 700,
                      lineHeight: 1.2,
                      fontFamily: "var(--font-display)",
                      marginBottom: "1rem",
                    }}
                  >
                    {feature.title}
                  </h3>

                  <p
                    style={{
                      fontSize: "1rem",
                      lineHeight: 1.7,
                      color: isDark ? "hsla(0,0%,100%,0.7)" : "var(--color-text-secondary)",
                      marginBottom: feature.bullets ? "1.25rem" : "1.5rem",
                    }}
                  >
                    {feature.description}
                  </p>

                  {feature.bullets && feature.bullets.length > 0 && (
                    <ul
                      style={{
                        listStyle: "none",
                        margin: 0,
                        padding: 0,
                        display: "flex",
                        flexDirection: "column",
                        gap: "0.5rem",
                        marginBottom: "1.5rem",
                      }}
                    >
                      {feature.bullets.map((bullet, j) => (
                        <li
                          key={j}
                          style={{
                            display: "flex",
                            alignItems: "flex-start",
                            gap: "0.625rem",
                            fontSize: "0.9375rem",
                            color: isDark ? "hsla(0,0%,100%,0.8)" : "var(--color-text-primary)",
                          }}
                        >
                          <span
                            style={{
                              color: "var(--color-brand)",
                              fontWeight: 600,
                              fontSize: "1rem",
                              lineHeight: "1.5",
                            }}
                          >
                            ✓
                          </span>
                          {bullet}
                        </li>
                      ))}
                    </ul>
                  )}

                  {feature.cta && (
                    <a
                      href={feature.cta.href}
                      style={{
                        display: "inline-flex",
                        alignItems: "center",
                        gap: "0.375rem",
                        color: "var(--color-brand)",
                        fontWeight: 600,
                        fontSize: "0.9375rem",
                        textDecoration: "none",
                      }}
                    >
                      {feature.cta.label} →
                    </a>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <style>{`
        @media (min-width: 768px) {
          .feature-row { grid-template-columns: 1fr 1fr !important; }
          .feature-visual-first { order: 1 !important; }
          .feature-visual-second { order: 2 !important; }
        }
      `}</style>
    </section>
  );
}

export default FeaturesAlternating;
