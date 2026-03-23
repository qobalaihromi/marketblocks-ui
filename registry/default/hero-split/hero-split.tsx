"use client";

import React, { type ReactNode } from "react";

/* ========================================
   Hero Split — MarketBlocks UI
   Universal Props Architecture
   ======================================== */

export interface HeroSplitProps {
  badge?: string;
  headline?: string | string[];
  headlineAccentIndices?: number[];
  subtitle?: string;

  cta?: {
    label: string;
    href?: string;
    onClick?: () => void;
    variant?: "button" | "pill" | "pill-outline";
  };
  ctaSecondary?: {
    label: string;
    href?: string;
    onClick?: () => void;
    variant?: "button" | "pill" | "pill-outline" | "ghost";
  };

  inputCapture?: {
    type: "email" | "phone" | "text" | "none";
    prefix?: string;
    placeholder?: string;
    ctaLabel?: string;
  };

  trustSignals?: {
    type: "rating" | "users" | "award" | "media";
    label: string;
    icon?: ReactNode;
  }[];

  /** Visual element on the right side */
  visual?: ReactNode;
  /** Floating widget (e.g., WhatsApp button) */
  floatingWidget?: ReactNode;

  background?: "light" | "dark" | "gradient";
  gradientFrom?: string;
  gradientTo?: string;
  /** Reverse layout (visual left, text right) */
  reversed?: boolean;
  className?: string;
}

const defaults = {
  badge: "Now Available",
  headline: ["Build Marketing Pages", "10x Faster"],
  subtitle: "Universal components with built-in copy for every market. From Jakarta to San Francisco.",
  cta: { label: "Get Started Free", href: "#", variant: "pill" as const },
  ctaSecondary: { label: "View Components", href: "#", variant: "ghost" as const },
};

export function HeroSplit({
  badge = defaults.badge,
  headline = defaults.headline,
  headlineAccentIndices = [2, 3],
  subtitle = defaults.subtitle,
  cta = defaults.cta,
  ctaSecondary = defaults.ctaSecondary,
  inputCapture,
  trustSignals,
  visual,
  floatingWidget,
  background = "light",
  gradientFrom,
  gradientTo,
  reversed = false,
  className = "",
}: HeroSplitProps) {
  const isDark = background === "dark";
  const isGradient = background === "gradient";
  const headlineWords = Array.isArray(headline) ? headline.join(" ").split(" ") : headline.split(" ");

  const bgStyle = isGradient
    ? { background: `linear-gradient(135deg, ${gradientFrom || "hsl(221, 83%, 53%)"}, ${gradientTo || "hsl(271, 76%, 53%)"})` }
    : undefined;

  const textColor = isDark || isGradient ? "var(--color-text-inverse, #fff)" : "var(--color-text-primary)";
  const subtitleColor = isDark || isGradient ? "hsla(0,0%,100%,0.75)" : "var(--color-text-secondary)";

  return (
    <section
      className={className}
      style={{
        position: "relative",
        overflow: "hidden",
        backgroundColor: isDark ? "var(--color-bg-hero, hsl(222,47%,6%))" : isGradient ? undefined : "var(--color-bg-page)",
        color: textColor,
        ...bgStyle,
      }}
      aria-label="Hero section"
    >
      <div
        style={{
          maxWidth: "var(--container-max, 1280px)",
          margin: "0 auto",
          padding: "var(--section-padding-y, 6rem) var(--section-padding-x, 1rem)",
          display: "grid",
          gridTemplateColumns: "1fr",
          gap: "3rem",
          alignItems: "center",
        }}
      >
        {/* Text content */}
        <div style={{ order: reversed ? 2 : 1 }}>
          {badge && (
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                padding: "0.375rem 1rem",
                borderRadius: "var(--radius-pill)",
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

          <h1
            style={{
              fontSize: "clamp(2rem, 4.5vw, 3.75rem)",
              fontWeight: 800,
              lineHeight: 1.1,
              letterSpacing: "-0.025em",
              fontFamily: "var(--font-display)",
              marginBottom: "1.25rem",
            }}
          >
            {headlineWords.map((word, i) => (
              <React.Fragment key={i}>
                <span style={headlineAccentIndices?.includes(i) ? { color: "var(--color-accent)" } : undefined}>
                  {word}
                </span>
                {i < headlineWords.length - 1 ? " " : ""}
              </React.Fragment>
            ))}
          </h1>

          {subtitle && (
            <p style={{ fontSize: "clamp(1rem, 1.8vw, 1.25rem)", lineHeight: 1.6, marginBottom: "2rem", color: subtitleColor, maxWidth: "540px" }}>
              {subtitle}
            </p>
          )}

          {/* Input Capture */}
          {inputCapture && inputCapture.type !== "none" && (
            <form onSubmit={(e) => e.preventDefault()} style={{ display: "flex", gap: "0.5rem", marginBottom: "2rem", flexWrap: "wrap", maxWidth: "440px" }} aria-label="Input capture form">
              <div style={{ display: "flex", flex: 1, minWidth: "180px" }}>
                {inputCapture.prefix && (
                  <span style={{ display: "inline-flex", alignItems: "center", padding: "0 0.75rem", backgroundColor: isDark || isGradient ? "hsla(0,0%,100%,0.1)" : "var(--color-bg-muted)", border: `1px solid ${isDark || isGradient ? "hsla(0,0%,100%,0.2)" : "var(--color-border)"}`, borderRight: "none", borderRadius: "var(--radius-input) 0 0 var(--radius-input)", fontSize: "0.875rem", color: isDark || isGradient ? "hsla(0,0%,100%,0.7)" : "var(--color-text-secondary)" }}>
                    {inputCapture.prefix}
                  </span>
                )}
                <input
                  type={inputCapture.type === "phone" ? "tel" : inputCapture.type}
                  placeholder={inputCapture.placeholder || "Enter your email"}
                  aria-label={inputCapture.type === "email" ? "Email address" : "Phone number"}
                  style={{ flex: 1, padding: "0.75rem 1rem", border: `1px solid ${isDark || isGradient ? "hsla(0,0%,100%,0.2)" : "var(--color-border)"}`, borderRadius: inputCapture.prefix ? `0 var(--radius-input) var(--radius-input) 0` : "var(--radius-input)", fontSize: "1rem", backgroundColor: isDark || isGradient ? "hsla(0,0%,100%,0.1)" : "var(--color-bg-page)", color: isDark || isGradient ? "#fff" : "var(--color-text-primary)", outline: "none" }}
                />
              </div>
              <button type="submit" style={{ padding: "0.75rem 1.5rem", backgroundColor: "var(--color-brand)", color: "var(--color-brand-fg)", border: "none", borderRadius: "var(--radius-cta)", fontSize: "1rem", fontWeight: 600, cursor: "pointer", whiteSpace: "nowrap" }}>
                {inputCapture.ctaLabel || "Submit"}
              </button>
            </form>
          )}

          {/* CTA Buttons */}
          {!inputCapture && (
            <div style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap", marginBottom: "2rem" }}>
              {cta && (
                <a href={cta.href || "#"} onClick={cta.onClick} role="button" style={{ display: "inline-flex", alignItems: "center", padding: "0.875rem 2rem", backgroundColor: cta.variant === "pill-outline" ? "transparent" : "var(--color-brand)", color: cta.variant === "pill-outline" ? "var(--color-brand)" : "var(--color-brand-fg)", borderRadius: cta.variant?.includes("pill") ? "var(--radius-pill)" : "var(--radius-cta)", fontSize: "1rem", fontWeight: 600, textDecoration: "none", border: cta.variant === "pill-outline" ? "2px solid var(--color-brand)" : "none", cursor: "pointer" }}>
                  {cta.label}
                </a>
              )}
              {ctaSecondary && (
                <a href={ctaSecondary.href || "#"} onClick={ctaSecondary.onClick} role="button" style={{ display: "inline-flex", alignItems: "center", padding: "0.875rem 2rem", backgroundColor: "transparent", color: isDark || isGradient ? "hsla(0,0%,100%,0.9)" : "var(--color-text-primary)", borderRadius: ctaSecondary.variant?.includes("pill") ? "var(--radius-pill)" : "var(--radius-cta)", fontSize: "1rem", fontWeight: 500, textDecoration: "none", border: ctaSecondary.variant === "ghost" ? "none" : `1px solid ${isDark || isGradient ? "hsla(0,0%,100%,0.3)" : "var(--color-border)"}`, cursor: "pointer" }}>
                  {ctaSecondary.label} →
                </a>
              )}
            </div>
          )}

          {/* Trust Signals */}
          {trustSignals && trustSignals.length > 0 && (
            <div style={{ display: "flex", gap: "1.5rem", flexWrap: "wrap" }} aria-label="Trust signals">
              {trustSignals.map((signal, i) => (
                <div key={i} style={{ display: "flex", alignItems: "center", gap: "0.5rem", fontSize: "0.875rem", color: isDark || isGradient ? "hsla(0,0%,100%,0.65)" : "var(--color-text-muted)" }}>
                  {signal.icon && <span>{signal.icon}</span>}
                  <span>{signal.label}</span>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Visual */}
        <div style={{ order: reversed ? 1 : 2, display: "flex", justifyContent: "center", alignItems: "center" }}>
          {visual || (
            <div style={{ width: "100%", aspectRatio: "4/3", borderRadius: "var(--radius-card)", backgroundColor: isDark || isGradient ? "hsla(0,0%,100%,0.08)" : "var(--color-bg-muted)", display: "flex", alignItems: "center", justifyContent: "center", color: isDark || isGradient ? "hsla(0,0%,100%,0.3)" : "var(--color-text-muted)", fontSize: "0.875rem" }}>
              Your visual here
            </div>
          )}
        </div>
      </div>

      {/* Floating Widget */}
      {floatingWidget && (
        <div style={{ position: "fixed", bottom: "1.5rem", right: "1.5rem", zIndex: 50 }}>
          {floatingWidget}
        </div>
      )}

      {/* Responsive: switch to single column on desktop with CSS media query inline would be complex — using grid approach */}
      <style>{`
        @media (min-width: 768px) {
          section[aria-label="Hero section"] > div:first-child {
            grid-template-columns: 1fr 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}

export default HeroSplit;
