"use client";

import React, { type ReactNode } from "react";

/* ========================================
   Pricing Simple — MarketBlocks UI
   Universal Props Architecture
   ======================================== */

export interface PricingTier {
  name: string;
  description: string;
  price: string;
  period?: string;
  features: string[];
  cta: { label: string; href: string };
  isPopular?: boolean;
}

export interface PricingSimpleProps {
  /** Section badge */
  badge?: string;
  /** Section headline */
  headline?: string;
  /** Section subtitle */
  subtitle?: string;

  /** Currency symbol ($, Rp, €, etc.) */
  currency?: string;

  /** Pricing tiers */
  tiers?: PricingTier[];

  /** Background style */
  background?: "light" | "dark" | "surface";
  /** Additional class names */
  className?: string;
}

const defaults: PricingSimpleProps = {
  badge: "Pricing",
  headline: "Simple, Transparent Pricing",
  subtitle: "No hidden fees. No surprise charges. Choose the plan that fits your needs.",
  currency: "$",
  tiers: [
    {
      name: "Starter",
      description: "Perfect for individuals and side projects.",
      price: "0",
      period: "/month",
      features: ["1 user", "Basic analytics", "Community support"],
      cta: { label: "Get Started", href: "#" },
    },
    {
      name: "Pro",
      description: "Best for growing teams and startups.",
      price: "29",
      period: "/month",
      isPopular: true,
      features: ["Up to 5 users", "Advanced analytics", "Priority email support", "Custom domains"],
      cta: { label: "Start Free Trial", href: "#" },
    },
    {
      name: "Enterprise",
      description: "For large organizations scaling fast.",
      price: "99",
      period: "/month",
      features: [
        "Unlimited users",
        "Custom reporting",
        "24/7 phone support",
        "SSO & SAML",
        "Dedicated account manager",
      ],
      cta: { label: "Contact Sales", href: "#" },
    },
  ],
};

export function PricingSimple({
  badge = defaults.badge,
  headline = defaults.headline,
  subtitle = defaults.subtitle,
  currency = defaults.currency,
  tiers = defaults.tiers,
  background = "light",
  className = "",
}: PricingSimpleProps) {
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
      aria-label="Pricing section"
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
                fontSize: "clamp(1.75rem, 3.5vw, 2.75rem)",
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
                fontSize: "1.125rem",
                lineHeight: 1.6,
                color: isDark ? "hsla(0,0%,100%,0.7)" : "var(--color-text-secondary)",
              }}
            >
              {subtitle}
            </p>
          )}
        </div>

        {/* Pricing Cards Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr",
            gap: "2rem",
            alignItems: "center",
          }}
          className={`pricing-grid cols-${tiers?.length || 3}`}
        >
          {tiers?.map((tier, i) => {
            const isPopular = tier.isPopular;

            return (
              <div
                key={i}
                style={{
                  position: "relative",
                  padding: "2.5rem 2rem",
                  borderRadius: "var(--radius-card)",
                  backgroundColor: isDark ? "hsla(0,0%,100%,0.05)" : "var(--color-bg-page)",
                  border: isPopular
                    ? "2px solid var(--color-brand)"
                    : `1px solid ${isDark ? "hsla(0,0%,100%,0.1)" : "var(--color-border)"}`,
                  boxShadow: isPopular ? "0 20px 40px -10px rgba(0,0,0,0.1)" : "none",
                  transform: isPopular ? "scale(1.02)" : "scale(1)",
                  zIndex: isPopular ? 10 : 1,
                  display: "flex",
                  flexDirection: "column",
                  height: "100%",
                }}
                className={`pricing-card ${isPopular ? "is-popular" : ""}`}
              >
                {isPopular && (
                  <div
                    style={{
                      position: "absolute",
                      top: "-0.875rem",
                      left: "50%",
                      transform: "translateX(-50%)",
                      backgroundColor: "var(--color-brand)",
                      color: "white",
                      padding: "0.25rem 1rem",
                      borderRadius: "var(--radius-pill)",
                      fontSize: "0.75rem",
                      fontWeight: 700,
                      textTransform: "uppercase",
                      letterSpacing: "0.05em",
                    }}
                  >
                    Most Popular
                  </div>
                )}

                <h3
                  style={{
                    fontSize: "1.25rem",
                    fontWeight: 600,
                    fontFamily: "var(--font-display)",
                    marginBottom: "0.5rem",
                  }}
                >
                  {tier.name}
                </h3>

                <p
                  style={{
                    fontSize: "0.9375rem",
                    color: isDark ? "hsla(0,0%,100%,0.6)" : "var(--color-text-muted)",
                    marginBottom: "2rem",
                    minHeight: "2.8rem",
                  }}
                >
                  {tier.description}
                </p>

                <div
                  style={{
                    display: "flex",
                    alignItems: "baseline",
                    gap: "0.25rem",
                    marginBottom: "2rem",
                  }}
                >
                  <span
                    style={{
                      fontSize: "1.5rem",
                      fontWeight: 600,
                      color: isDark ? "hsla(0,0%,100%,0.8)" : "var(--color-text-secondary)",
                    }}
                  >
                    {currency}
                  </span>
                  <span
                    style={{
                      fontSize: "3rem",
                      fontWeight: 800,
                      fontFamily: "var(--font-display)",
                      lineHeight: 1,
                    }}
                  >
                    {tier.price}
                  </span>
                  {tier.period && (
                    <span
                      style={{
                        fontSize: "1rem",
                        color: isDark ? "hsla(0,0%,100%,0.6)" : "var(--color-text-muted)",
                        marginLeft: "0.25rem",
                      }}
                    >
                      {tier.period}
                    </span>
                  )}
                </div>

                <a
                  href={tier.cta.href}
                  style={{
                    display: "block",
                    width: "100%",
                    textAlign: "center",
                    padding: "0.875rem",
                    borderRadius: "var(--radius-button)",
                    fontWeight: 600,
                    textDecoration: "none",
                    backgroundColor: isPopular
                      ? "var(--color-brand)"
                      : isDark
                        ? "hsla(0,0%,100%,0.1)"
                        : "var(--color-bg-surface)",
                    color: isPopular ? "#fff" : isDark ? "#fff" : "var(--color-text-primary)",
                    border: isPopular
                      ? "none"
                      : `1px solid ${isDark ? "transparent" : "var(--color-border)"}`,
                    marginBottom: "2.5rem",
                    transition: "all var(--transition-fast)",
                  }}
                  className="pricing-cta"
                >
                  {tier.cta.label}
                </a>

                <div style={{ marginTop: "auto" }}>
                  <h4
                    style={{
                      fontSize: "0.875rem",
                      fontWeight: 600,
                      marginBottom: "1rem",
                      textTransform: "uppercase",
                      letterSpacing: "0.05em",
                      color: isDark ? "hsla(0,0%,100%,0.9)" : "var(--color-text-primary)",
                    }}
                  >
                    Features included:
                  </h4>
                  <ul
                    style={{
                      listStyle: "none",
                      margin: 0,
                      padding: 0,
                      display: "flex",
                      flexDirection: "column",
                      gap: "0.875rem",
                    }}
                  >
                    {tier.features.map((feature, j) => (
                      <li
                        key={j}
                        style={{
                          display: "flex",
                          alignItems: "flex-start",
                          gap: "0.75rem",
                          fontSize: "0.9375rem",
                          color: isDark ? "hsla(0,0%,100%,0.8)" : "var(--color-text-secondary)",
                        }}
                      >
                        <span style={{ color: "var(--color-brand)" }}>✓</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <style>{`
        @media (min-width: 768px) {
          .pricing-grid.cols-2 { grid-template-columns: repeat(2, 1fr) !important; max-width: 800px; margin: 0 auto; }
          .pricing-grid.cols-3 { grid-template-columns: repeat(3, 1fr) !important; }
        }
        .pricing-cta:hover {
          filter: brightness(1.1);
        }
        @media (max-width: 767px) {
          .pricing-card.is-popular { transform: none !important; }
        }
      `}</style>
    </section>
  );
}

export default PricingSimple;
