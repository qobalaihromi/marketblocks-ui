"use client";

import React from "react";

/* ========================================
   Hero Minimal — MarketBlocks UI
   Universal Props Architecture
   ======================================== */

export interface HeroMinimalProps {
  /** Section badge */
  badge?: string;
  /** Main headline (can be array for line breaks) */
  headline?: string | string[];
  /** Subtitle text */
  subtitle?: string;

  /** Primary CTA */
  cta?: { label: string; href: string; variant?: "button" | "pill" };
  /** Secondary CTA */
  ctaSecondary?: { label: string; href: string; variant?: "outline" | "ghost" | "pill-outline" };

  /** Input capture (optional) */
  inputCapture?: {
    type: "email" | "phone";
    placeholder?: string;
    ctaLabel: string;
    prefix?: string; // e.g. +62 for phone
  };

  /** Background style */
  background?: "light" | "dark" | "surface" | "gradient";
  /** Optional gradient colors if background="gradient" */
  gradientFrom?: string;
  gradientTo?: string;

  className?: string;
}

const defaults: HeroMinimalProps = {
  badge: "Version 2.0 Released",
  headline: ["Build better.", "Launch faster."],
  subtitle:
    "The most minimal, typography-driven hero section for modern web applications. Focus purely on your message.",
  cta: { label: "Get Started", href: "#", variant: "button" },
  ctaSecondary: { label: "View Documentation", href: "#", variant: "ghost" },
};

export function HeroMinimal({
  badge = defaults.badge,
  headline = defaults.headline,
  subtitle = defaults.subtitle,
  cta = defaults.cta,
  ctaSecondary = defaults.ctaSecondary,
  inputCapture,
  background = "light",
  gradientFrom = "hsl(220, 90%, 96%)",
  gradientTo = "hsl(280, 80%, 98%)",
  className = "",
}: HeroMinimalProps) {
  const isDark = background === "dark";
  const isSurface = background === "surface";
  const isGradient = background === "gradient";

  let bgStyle: React.CSSProperties = {
    backgroundColor: isDark
      ? "var(--color-bg-hero, hsl(222,47%,6%))"
      : isSurface
        ? "var(--color-bg-surface)"
        : "var(--color-bg-page)",
    color: isDark ? "var(--color-text-inverse, #fff)" : "var(--color-text-primary)",
  };

  if (isGradient && !isDark) {
    bgStyle = {
      ...bgStyle,
      backgroundImage: `linear-gradient(135deg, ${gradientFrom}, ${gradientTo})`,
    };
  }

  const renderHeadline = () => {
    if (Array.isArray(headline)) {
      return (
        <>
          <span style={{ display: "block" }}>{headline[0]}</span>
          {headline.length > 1 && (
            <span
              style={{
                display: "block",
                color: isDark ? "hsla(0,0%,100%,0.7)" : "var(--color-text-muted)",
              }}
            >
              {headline[1]}
            </span>
          )}
        </>
      );
    }
    return headline;
  };

  return (
    <section
      className={className}
      style={{
        ...bgStyle,
        minHeight: "80vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
      aria-label="Hero section"
    >
      <div
        style={{
          maxWidth: "800px",
          margin: "0 auto",
          padding: "8rem 1rem",
          textAlign: "center",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        {badge && (
          <div
            style={{
              display: "inline-flex",
              padding: "0.5rem 1.25rem",
              borderRadius: "var(--radius-pill)",
              fontSize: "0.875rem",
              fontWeight: 500,
              marginBottom: "2rem",
              backgroundColor: isDark ? "hsla(0,0%,100%,0.1)" : "var(--color-bg-surface)",
              color: isDark ? "hsla(0,0%,100%,0.9)" : "var(--color-text-primary)",
              border: `1px solid ${isDark ? "hsla(0,0%,100%,0.2)" : "var(--color-border)"}`,
            }}
          >
            {badge}
          </div>
        )}

        <h1
          style={{
            fontSize: "clamp(3rem, 8vw, 6rem)",
            fontWeight: 800,
            lineHeight: 1,
            letterSpacing: "-0.04em",
            fontFamily: "var(--font-display)",
            marginBottom: "1.5rem",
          }}
        >
          {renderHeadline()}
        </h1>

        {subtitle && (
          <p
            style={{
              fontSize: "clamp(1.125rem, 2vw, 1.5rem)",
              lineHeight: 1.6,
              color: isDark ? "hsla(0,0%,100%,0.7)" : "var(--color-text-secondary)",
              marginBottom: "3rem",
              maxWidth: "600px",
              fontWeight: 400,
            }}
          >
            {subtitle}
          </p>
        )}

        {/* Call to Actions / Input */}
        <div style={{ display: "flex", justifyContent: "center", width: "100%" }}>
          {inputCapture ? (
            <form
              onSubmit={(e) => e.preventDefault()}
              style={{
                display: "flex",
                gap: "0.5rem",
                width: "100%",
                maxWidth: "480px",
                flexDirection: "column",
              }}
              className="hero-minimal-form"
            >
              <div style={{ display: "flex", gap: "0.5rem", flex: 1 }}>
                {inputCapture.type === "phone" && inputCapture.prefix && (
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      padding: "0 1rem",
                      backgroundColor: "var(--color-bg-page)",
                      border: "1px solid var(--color-border)",
                      borderRadius: "var(--radius-input)",
                      color: "var(--color-text-primary)",
                      fontWeight: 500,
                    }}
                  >
                    {inputCapture.prefix}
                  </div>
                )}
                <input
                  type={inputCapture.type === "email" ? "email" : "tel"}
                  placeholder={inputCapture.placeholder}
                  style={{
                    flex: 1,
                    padding: "1rem 1.25rem",
                    borderRadius: "var(--radius-input)",
                    border: `1px solid ${isDark ? "hsla(0,0%,100%,0.2)" : "var(--color-border)"}`,
                    backgroundColor: isDark ? "hsla(0,0%,100%,0.05)" : "var(--color-bg-page)",
                    color: isDark ? "#fff" : "var(--color-text-primary)",
                    fontSize: "1rem",
                    outline: "none",
                  }}
                  required
                />
              </div>
              <button
                type="submit"
                style={{
                  padding: "1rem 2rem",
                  borderRadius: "var(--radius-button)",
                  backgroundColor: isDark ? "#fff" : "var(--color-brand)",
                  color: isDark ? "#000" : "#ffffff",
                  fontWeight: 600,
                  fontSize: "1rem",
                  border: "none",
                  cursor: "pointer",
                  whiteSpace: "nowrap",
                }}
              >
                {inputCapture.ctaLabel}
              </button>
            </form>
          ) : (
            <div
              style={{
                display: "flex",
                gap: "1rem",
                flexDirection: "column",
                width: "100%",
                maxWidth: "400px",
              }}
              className="hero-minimal-actions"
            >
              {cta && (
                <a
                  href={cta.href}
                  className="hero-btn primary"
                  style={{
                    padding: "1rem 2rem",
                    borderRadius:
                      cta.variant === "pill" ? "var(--radius-pill)" : "var(--radius-button)",
                    backgroundColor: isDark ? "#fff" : "var(--color-brand)",
                    color: isDark ? "#000" : "#ffffff",
                    fontWeight: 600,
                    textDecoration: "none",
                    fontSize: "1rem",
                  }}
                >
                  {cta.label}
                </a>
              )}
              {ctaSecondary && (
                <a
                  href={ctaSecondary.href}
                  className="hero-btn secondary"
                  style={{
                    padding: "1rem 2rem",
                    borderRadius:
                      ctaSecondary.variant === "pill-outline"
                        ? "var(--radius-pill)"
                        : "var(--radius-button)",
                    backgroundColor:
                      ctaSecondary.variant === "ghost" ? "transparent" : "transparent",
                    color: isDark ? "#fff" : "var(--color-text-primary)",
                    border:
                      ctaSecondary.variant === "ghost"
                        ? "none"
                        : `1px solid ${isDark ? "hsla(0,0%,100%,0.3)" : "var(--color-border)"}`,
                    fontWeight: 600,
                    textDecoration: "none",
                    fontSize: "1rem",
                  }}
                >
                  {ctaSecondary.label}
                </a>
              )}
            </div>
          )}
        </div>
      </div>

      <style>{`
        @media (min-width: 640px) {
          .hero-minimal-form { flex-direction: row !important; }
          .hero-minimal-actions { flex-direction: row !important; max-width: none !important; justify-content: center; }
        }
        .hero-btn:hover { filter: brightness(0.9); }
        .hero-btn.secondary:hover { background-color: ${isDark ? "hsla(0,0%,100%,0.1)" : "var(--color-bg-surface)"}; }
      `}</style>
    </section>
  );
}

export default HeroMinimal;
