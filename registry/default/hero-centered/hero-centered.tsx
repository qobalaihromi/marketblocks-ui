"use client";

import React, { type ReactNode } from "react";

/* ========================================
   Hero Centered — MarketBlocks UI
   Universal Props Architecture
   ======================================== */

export interface HeroCenteredProps {
  /** Badge/pill text above headline */
  badge?: string;
  /** Headline — string or array of words for accent coloring */
  headline?: string | string[];
  /** Indices of headline words to render in accent color */
  headlineAccentIndices?: number[];
  /** Subtitle text below headline */
  subtitle?: string;

  /** Primary CTA */
  cta?: {
    label: string;
    href?: string;
    onClick?: () => void;
    variant?: "button" | "pill" | "pill-outline";
  };
  /** Secondary CTA */
  ctaSecondary?: {
    label: string;
    href?: string;
    onClick?: () => void;
    variant?: "button" | "pill" | "pill-outline" | "ghost";
  };

  /** Input capture — type-agnostic */
  inputCapture?: {
    type: "email" | "phone" | "text" | "none";
    prefix?: string;
    placeholder?: string;
    ctaLabel?: string;
  };

  /** Trust signals */
  trustSignals?: {
    type: "rating" | "users" | "award" | "media";
    label: string;
    icon?: ReactNode;
  }[];

  /** Background style */
  background?: "light" | "dark" | "gradient";
  /** Gradient colors */
  gradientFrom?: string;
  gradientTo?: string;

  /** Additional class names */
  className?: string;
}

// Default content (English)
const defaults: Required<
  Pick<HeroCenteredProps, "badge" | "headline" | "subtitle" | "cta" | "ctaSecondary">
> = {
  badge: "Now Available",
  headline: ["Build Landing Pages", "That Actually Convert"],
  subtitle:
    "Production-ready marketing components with professional copy in multiple languages. Built for every market, every product.",
  cta: { label: "Get Started Free", href: "#", variant: "pill" },
  ctaSecondary: { label: "View Components", href: "#components", variant: "ghost" },
};

export function HeroCentered({
  badge = defaults.badge,
  headline = defaults.headline,
  headlineAccentIndices = [3, 4],
  subtitle = defaults.subtitle,
  cta = defaults.cta,
  ctaSecondary = defaults.ctaSecondary,
  inputCapture,
  trustSignals,
  background = "light",
  gradientFrom,
  gradientTo,
  className = "",
}: HeroCenteredProps) {
  const isDark = background === "dark";
  const isGradient = background === "gradient";

  const headlineWords = Array.isArray(headline) ? headline.join(" ").split(" ") : headline.split(" ");

  const bgStyle = isGradient
    ? {
        background: `linear-gradient(135deg, ${gradientFrom || "hsl(221, 83%, 53%)"}, ${gradientTo || "hsl(271, 76%, 53%)"})`,
      }
    : undefined;

  return (
    <section
      className={`relative overflow-hidden ${className}`}
      style={{
        backgroundColor: isDark ? "var(--color-bg-hero, hsl(222,47%,6%))" : isGradient ? undefined : "var(--color-bg-page)",
        color: isDark || isGradient ? "var(--color-text-inverse, #fff)" : "var(--color-text-primary)",
        ...bgStyle,
      }}
      aria-label="Hero section"
    >
      <div
        style={{
          maxWidth: "var(--container-max, 1280px)",
          margin: "0 auto",
          padding: "var(--section-padding-y, 6rem) var(--section-padding-x, 1rem)",
          textAlign: "center",
        }}
      >
        {/* Badge */}
        {badge && (
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              padding: "0.375rem 1rem",
              borderRadius: "var(--radius-pill, 9999px)",
              fontSize: "0.875rem",
              fontWeight: 500,
              marginBottom: "1.5rem",
              backgroundColor: isDark || isGradient ? "hsla(0,0%,100%,0.15)" : "var(--color-bg-surface)",
              color: isDark || isGradient ? "hsla(0,0%,100%,0.9)" : "var(--color-brand)",
              border: `1px solid ${isDark || isGradient ? "hsla(0,0%,100%,0.2)" : "var(--color-border)"}`,
            }}
          >
            {badge}
          </div>
        )}

        {/* Headline */}
        <h1
          style={{
            fontSize: "clamp(2.25rem, 5vw, 4rem)",
            fontWeight: 800,
            lineHeight: 1.1,
            letterSpacing: "-0.025em",
            fontFamily: "var(--font-display)",
            marginBottom: "1.5rem",
            maxWidth: "900px",
            marginLeft: "auto",
            marginRight: "auto",
          }}
        >
          {headlineWords.map((word, i) => (
            <React.Fragment key={i}>
              <span
                style={
                  headlineAccentIndices?.includes(i)
                    ? { color: "var(--color-accent)" }
                    : undefined
                }
              >
                {word}
              </span>
              {i < headlineWords.length - 1 ? " " : ""}
            </React.Fragment>
          ))}
        </h1>

        {/* Subtitle */}
        {subtitle && (
          <p
            style={{
              fontSize: "clamp(1.0625rem, 2vw, 1.25rem)",
              lineHeight: 1.6,
              maxWidth: "640px",
              marginLeft: "auto",
              marginRight: "auto",
              marginBottom: "2rem",
              color: isDark || isGradient ? "hsla(0,0%,100%,0.75)" : "var(--color-text-secondary)",
            }}
          >
            {subtitle}
          </p>
        )}

        {/* Input Capture */}
        {inputCapture && inputCapture.type !== "none" && (
          <form
            onSubmit={(e) => e.preventDefault()}
            style={{
              display: "flex",
              gap: "0.5rem",
              maxWidth: "440px",
              marginLeft: "auto",
              marginRight: "auto",
              marginBottom: "2rem",
              flexWrap: "wrap",
              justifyContent: "center",
            }}
            aria-label="Input capture form"
          >
            <div style={{ display: "flex", flex: 1, minWidth: "200px" }}>
              {inputCapture.prefix && (
                <span
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    padding: "0 0.75rem",
                    backgroundColor: isDark || isGradient ? "hsla(0,0%,100%,0.1)" : "var(--color-bg-muted)",
                    border: `1px solid ${isDark || isGradient ? "hsla(0,0%,100%,0.2)" : "var(--color-border)"}`,
                    borderRight: "none",
                    borderRadius: "var(--radius-input, 0.5rem) 0 0 var(--radius-input, 0.5rem)",
                    fontSize: "0.875rem",
                    color: isDark || isGradient ? "hsla(0,0%,100%,0.7)" : "var(--color-text-secondary)",
                  }}
                >
                  {inputCapture.prefix}
                </span>
              )}
              <input
                type={inputCapture.type === "phone" ? "tel" : inputCapture.type}
                placeholder={inputCapture.placeholder || (inputCapture.type === "email" ? "Enter your email" : "Enter your number")}
                aria-label={inputCapture.type === "email" ? "Email address" : "Phone number"}
                style={{
                  flex: 1,
                  padding: "0.75rem 1rem",
                  border: `1px solid ${isDark || isGradient ? "hsla(0,0%,100%,0.2)" : "var(--color-border)"}`,
                  borderRadius: inputCapture.prefix
                    ? "0 var(--radius-input, 0.5rem) var(--radius-input, 0.5rem) 0"
                    : "var(--radius-input, 0.5rem)",
                  fontSize: "1rem",
                  backgroundColor: isDark || isGradient ? "hsla(0,0%,100%,0.1)" : "var(--color-bg-page)",
                  color: isDark || isGradient ? "#fff" : "var(--color-text-primary)",
                  outline: "none",
                  transition: "border-color var(--transition-fast)",
                }}
              />
            </div>
            <button
              type="submit"
              style={{
                padding: "0.75rem 1.5rem",
                backgroundColor: "var(--color-brand)",
                color: "var(--color-brand-fg)",
                border: "none",
                borderRadius: "var(--radius-cta, 0.5rem)",
                fontSize: "1rem",
                fontWeight: 600,
                cursor: "pointer",
                transition: "background-color var(--transition-fast)",
                whiteSpace: "nowrap",
              }}
            >
              {inputCapture.ctaLabel || "Submit"}
            </button>
          </form>
        )}

        {/* CTA Buttons (shown when no input capture) */}
        {!inputCapture && (
          <div
            style={{
              display: "flex",
              gap: "0.75rem",
              justifyContent: "center",
              flexWrap: "wrap",
              marginBottom: "2.5rem",
            }}
          >
            {cta && (
              <a
                href={cta.href || "#"}
                onClick={cta.onClick}
                role="button"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  padding: "0.875rem 2rem",
                  backgroundColor: "var(--color-brand)",
                  color: "var(--color-brand-fg)",
                  borderRadius: cta.variant === "pill" || cta.variant === "pill-outline" ? "var(--radius-pill)" : "var(--radius-cta)",
                  fontSize: "1rem",
                  fontWeight: 600,
                  textDecoration: "none",
                  border: cta.variant === "pill-outline" ? "2px solid var(--color-brand)" : "none",
                  ...(cta.variant === "pill-outline" ? { backgroundColor: "transparent", color: "var(--color-brand)" } : {}),
                  transition: "all var(--transition-fast)",
                  cursor: "pointer",
                }}
              >
                {cta.label}
              </a>
            )}
            {ctaSecondary && (
              <a
                href={ctaSecondary.href || "#"}
                onClick={ctaSecondary.onClick}
                role="button"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  padding: "0.875rem 2rem",
                  backgroundColor: "transparent",
                  color: isDark || isGradient ? "hsla(0,0%,100%,0.9)" : "var(--color-text-primary)",
                  borderRadius: ctaSecondary.variant === "pill" || ctaSecondary.variant === "pill-outline" ? "var(--radius-pill)" : "var(--radius-cta)",
                  fontSize: "1rem",
                  fontWeight: 500,
                  textDecoration: "none",
                  border: ctaSecondary.variant === "ghost" ? "none" : `1px solid ${isDark || isGradient ? "hsla(0,0%,100%,0.3)" : "var(--color-border)"}`,
                  transition: "all var(--transition-fast)",
                  cursor: "pointer",
                }}
              >
                {ctaSecondary.label} →
              </a>
            )}
          </div>
        )}

        {/* Trust Signals */}
        {trustSignals && trustSignals.length > 0 && (
          <div
            style={{
              display: "flex",
              gap: "1.5rem",
              justifyContent: "center",
              flexWrap: "wrap",
              marginTop: inputCapture ? "0" : "0.5rem",
            }}
            aria-label="Trust signals"
          >
            {trustSignals.map((signal, i) => (
              <div
                key={i}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.5rem",
                  fontSize: "0.875rem",
                  color: isDark || isGradient ? "hsla(0,0%,100%,0.65)" : "var(--color-text-muted)",
                }}
              >
                {signal.icon && <span>{signal.icon}</span>}
                <span>{signal.label}</span>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

export default HeroCentered;
