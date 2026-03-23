"use client";

import React from "react";

/* ========================================
   Stats Counter — MarketBlocks UI
   Universal Props Architecture
   ======================================== */

export interface StatItem {
  value: string;
  label: string;
  description?: string;
}

export interface StatsCounterProps {
  /** Section badge */
  badge?: string;
  /** Main headline */
  headline?: string;
  /** Subtitle text */
  subtitle?: string;

  /** Array of statistics */
  stats?: StatItem[];

  /** Background style */
  background?: "light" | "dark" | "surface" | "brand";

  className?: string;
}

const defaults: StatsCounterProps = {
  badge: "By the numbers",
  headline: "Built for scale and performance",
  subtitle: "Join thousands of companies that trust us with their most critical operations.",
  stats: [
    {
      value: "400%",
      label: "ROI",
      description: "Average return on investment within the first 6 months",
    },
    {
      value: "10M+",
      label: "Active Users",
      description: "Relying on our infrastructure every single day",
    },
    {
      value: "99.99%",
      label: "Uptime",
      description: "Guaranteed by our SLA for enterprise customers",
    },
    {
      value: "24/7",
      label: "Support",
      description: "Global technical support with 15-minute response times",
    },
  ],
};

export function StatsCounter({
  badge = defaults.badge,
  headline = defaults.headline,
  subtitle = defaults.subtitle,
  stats = defaults.stats,
  background = "light",
  className = "",
}: StatsCounterProps) {
  const isDark = background === "dark";
  const isSurface = background === "surface";
  const isBrand = background === "brand";

  const getBgColor = () => {
    if (isBrand) return "var(--color-brand)";
    if (isDark) return "var(--color-bg-hero, hsl(222,47%,6%))";
    if (isSurface) return "var(--color-bg-surface)";
    return "var(--color-bg-page)";
  };

  const getTextColor = () => {
    if (isBrand || isDark) return "var(--color-text-inverse, #fff)";
    return "var(--color-text-primary)";
  };

  const getMutedTextColor = () => {
    if (isBrand) return "hsla(0,0%,100%,0.8)";
    if (isDark) return "hsla(0,0%,100%,0.7)";
    return "var(--color-text-secondary)";
  };

  const hasHeader = badge || headline || subtitle;

  return (
    <section className={className} style={{ backgroundColor: getBgColor(), color: getTextColor() }}>
      <div
        style={{
          maxWidth: "var(--container-max, 1280px)",
          margin: "0 auto",
          padding: "var(--section-padding-y, 6rem) var(--section-padding-x, 1rem)",
        }}
      >
        {hasHeader && (
          <div
            style={{
              textAlign: "center",
              marginBottom: "4rem",
              maxWidth: "700px",
              marginInline: "auto",
            }}
          >
            {badge && (
              <div
                style={{
                  display: "inline-flex",
                  padding: "0.5rem 1rem",
                  borderRadius: "var(--radius-pill)",
                  fontSize: "0.875rem",
                  fontWeight: 500,
                  marginBottom: "1rem",
                  backgroundColor:
                    isBrand || isDark ? "hsla(0,0%,100%,0.15)" : "var(--color-bg-surface)",
                  color: isBrand || isDark ? "hsla(0,0%,100%,0.9)" : "var(--color-brand)",
                  border:
                    isBrand || isDark
                      ? "1px solid hsla(0,0%,100%,0.2)"
                      : "1px solid var(--color-border)",
                }}
              >
                {badge}
              </div>
            )}

            {headline && (
              <h2
                style={{
                  fontSize: "clamp(2rem, 4vw, 3rem)",
                  fontWeight: 800,
                  lineHeight: 1.2,
                  fontFamily: "var(--font-display)",
                  letterSpacing: "-0.02em",
                  marginBottom: "1rem",
                }}
              >
                {headline}
              </h2>
            )}

            {subtitle && (
              <p style={{ fontSize: "1.125rem", lineHeight: 1.6, color: getMutedTextColor() }}>
                {subtitle}
              </p>
            )}
          </div>
        )}

        {/* Stats Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
            gap: "2rem",
            textAlign: "center",
          }}
        >
          {stats?.map((stat, idx) => (
            <div
              key={idx}
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                padding: "2rem",
                borderRadius: "var(--radius-card)",
                backgroundColor: isBrand
                  ? "hsla(0,0%,100%,0.05)"
                  : isDark
                    ? "hsla(0,0%,100%,0.03)"
                    : "var(--color-bg-page)",
                border: isBrand
                  ? "1px solid hsla(0,0%,100%,0.1)"
                  : isDark
                    ? "1px solid hsla(0,0%,100%,0.1)"
                    : "1px solid var(--color-border)",
                boxShadow: isBrand || isDark ? "none" : "0 4px 6px -1px rgba(0,0,0,0.05)",
              }}
            >
              <div
                style={{
                  fontSize: "clamp(3rem, 5vw, 4rem)",
                  fontWeight: 800,
                  fontFamily: "var(--font-display)",
                  letterSpacing: "-0.02em",
                  color: isBrand ? "#fff" : "var(--color-brand)",
                  marginBottom: "0.5rem",
                  lineHeight: 1,
                }}
              >
                {stat.value}
              </div>
              <div
                style={{
                  fontSize: "1.25rem",
                  fontWeight: 600,
                  marginBottom: stat.description ? "0.75rem" : "0",
                }}
              >
                {stat.label}
              </div>
              {stat.description && (
                <div style={{ fontSize: "0.875rem", color: getMutedTextColor(), lineHeight: 1.6 }}>
                  {stat.description}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default StatsCounter;
