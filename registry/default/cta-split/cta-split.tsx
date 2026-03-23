"use client";

import React, { type ReactNode } from "react";

/* ========================================
   CTA Split — MarketBlocks UI
   Universal Props Architecture
   ======================================== */

export interface CtaSplitProps {
  badge?: string;
  headline?: string;
  subtitle?: string;

  /** Primary CTA */
  cta?: { label: string; href: string };
  /** Secondary CTA */
  ctaSecondary?: { label: string; href: string };

  /** Features list (bullet points) */
  features?: string[];

  /** Optional custom visual. If none provided, a default placeholder is used. */
  visual?: ReactNode;

  /** Visual position */
  visualPosition?: "left" | "right";

  /** Background style */
  background?: "light" | "dark" | "surface";

  className?: string;
}

const defaults: CtaSplitProps = {
  badge: "Boost your productivity",
  headline: "Ready to revolutionize your workflow?",
  subtitle:
    "Join thousands of teams that use our product to build and scale their applications faster than ever before.",
  cta: { label: "Start your free trial", href: "#" },
  ctaSecondary: { label: "Contact sales", href: "#" },
  features: ["No credit card required", "14-day free trial", "Cancel anytime"],
  visualPosition: "right",
};

export function CtaSplit({
  badge = defaults.badge,
  headline = defaults.headline,
  subtitle = defaults.subtitle,
  cta = defaults.cta,
  ctaSecondary = defaults.ctaSecondary,
  features = defaults.features,
  visual,
  visualPosition = defaults.visualPosition,
  background = "light",
  className = "",
}: CtaSplitProps) {
  const isDark = background === "dark";
  const isSurface = background === "surface";

  const renderVisual = () => {
    if (visual) return visual;
    return (
      <div
        style={{
          width: "100%",
          height: "100%",
          minHeight: "400px",
          backgroundColor: isDark ? "hsla(0,0%,100%,0.05)" : "var(--color-bg-muted)",
          borderRadius: "var(--radius-card)",
          border: `1px dashed ${isDark ? "hsla(0,0%,100%,0.2)" : "var(--color-border)"}`,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: isDark ? "hsla(0,0%,100%,0.5)" : "var(--color-text-muted)",
          padding: "2rem",
          position: "relative",
          overflow: "hidden",
        }}
        aria-hidden="true"
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            opacity: 0.1,
            backgroundImage: "radial-gradient(var(--color-brand) 1px, transparent 1px)",
            backgroundSize: "24px 24px",
          }}
        />
        <span>[Visual Slot]</span>
      </div>
    );
  };

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
    >
      <div
        style={{
          maxWidth: "var(--container-max, 1280px)",
          margin: "0 auto",
          padding: "var(--section-padding-y, 6rem) var(--section-padding-x, 1rem)",
        }}
      >
        <div
          style={{
            display: "grid",
            alignItems: "center",
            gap: "clamp(3rem, 6vw, 6rem)",
          }}
          className={`cta-split-grid ${visualPosition === "left" ? "reverse" : ""}`}
        >
          {/* Text Content */}
          <div className="cta-split-text" style={{ display: "flex", flexDirection: "column" }}>
            {badge && (
              <div
                style={{
                  alignSelf: "flex-start",
                  padding: "0.375rem 1rem",
                  borderRadius: "var(--radius-pill)",
                  fontSize: "0.875rem",
                  fontWeight: 500,
                  marginBottom: "1.5rem",
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
                  fontSize: "clamp(2.5rem, 5vw, 3.5rem)",
                  fontWeight: 800,
                  lineHeight: 1.1,
                  fontFamily: "var(--font-display)",
                  letterSpacing: "-0.02em",
                  marginBottom: "1.5rem",
                }}
              >
                {headline}
              </h2>
            )}

            {subtitle && (
              <p
                style={{
                  fontSize: "1.125rem",
                  lineHeight: 1.6,
                  color: isDark ? "hsla(0,0%,100%,0.7)" : "var(--color-text-secondary)",
                  marginBottom: "2.5rem",
                }}
              >
                {subtitle}
              </p>
            )}

            <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem", marginBottom: "3rem" }}>
              {cta && (
                <a
                  href={cta.href}
                  className="cta-btn primary"
                  style={{
                    padding: "1rem 2rem",
                    borderRadius: "var(--radius-button)",
                    backgroundColor: isDark ? "#fff" : "var(--color-brand)",
                    color: isDark ? "#000" : "#ffffff",
                    fontWeight: 600,
                    textDecoration: "none",
                    textAlign: "center",
                    flex: "1 1 auto",
                  }}
                >
                  {cta.label}
                </a>
              )}
              {ctaSecondary && (
                <a
                  href={ctaSecondary.href}
                  className="cta-btn secondary"
                  style={{
                    padding: "1rem 2rem",
                    borderRadius: "var(--radius-button)",
                    backgroundColor: "transparent",
                    color: isDark ? "#fff" : "var(--color-text-primary)",
                    border: `1px solid ${isDark ? "hsla(0,0%,100%,0.3)" : "var(--color-border)"}`,
                    fontWeight: 600,
                    textDecoration: "none",
                    textAlign: "center",
                    flex: "1 1 auto",
                  }}
                >
                  {ctaSecondary.label}
                </a>
              )}
            </div>

            {features && features.length > 0 && (
              <ul
                style={{
                  listStyle: "none",
                  padding: 0,
                  margin: 0,
                  display: "flex",
                  flexDirection: "column",
                  gap: "0.75rem",
                }}
              >
                {features.map((feature, idx) => (
                  <li
                    key={idx}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "0.75rem",
                      fontSize: "1rem",
                      color: isDark ? "hsla(0,0%,100%,0.8)" : "var(--color-text-primary)",
                    }}
                  >
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="var(--color-brand)"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
            )}
          </div>

          {/* Visual Content */}
          <div
            className="cta-split-visual"
            style={{ width: "100%", height: "100%", minHeight: "400px" }}
          >
            {renderVisual()}
          </div>
        </div>
      </div>

      <style>{`
        .cta-split-grid { grid-template-columns: 1fr; }
        @media (min-width: 1024px) {
          .cta-split-grid { grid-template-columns: 1fr 1fr; }
          .cta-split-grid.reverse .cta-split-text { order: 2; }
          .cta-split-grid.reverse .cta-split-visual { order: 1; }
        }
        .cta-btn:hover { filter: brightness(0.9); transition: filter 0.2s; }
        .cta-btn.secondary:hover { background-color: ${isDark ? "hsla(0,0%,100%,0.1)" : "var(--color-bg-surface)"}; }
      `}</style>
    </section>
  );
}

export default CtaSplit;
