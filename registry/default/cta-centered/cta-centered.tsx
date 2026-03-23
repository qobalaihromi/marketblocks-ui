"use client";

import React from "react";

/* ========================================
   CTA Centered — MarketBlocks UI
   Universal Props Architecture
   ======================================== */

export interface CtaCenteredProps {
  /** Section headline */
  headline?: string | string[];
  /** Section subtitle */
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
  background?: "light" | "dark" | "surface" | "gradient" | "brand";
  /** Gradient colors */
  gradientFrom?: string;
  gradientTo?: string;

  className?: string;
}

const defaults: CtaCenteredProps = {
  headline: "Ready to accelerate your growth?",
  subtitle: "Join thousands of teams who have already shipped faster with our platform.",
  cta: { label: "Start Free Trial", href: "#", variant: "button" },
  ctaSecondary: { label: "Talk to Sales", href: "#", variant: "outline" },
};

export function CtaCentered({
  headline = defaults.headline,
  subtitle = defaults.subtitle,
  cta = defaults.cta,
  ctaSecondary = defaults.ctaSecondary,
  inputCapture,
  background = "brand",
  gradientFrom = "var(--color-brand)",
  gradientTo = "hsl(var(--color-brand) / 0.7)",
  className = "",
}: CtaCenteredProps) {
  const isDark = background === "dark";
  const isBrand = background === "brand";
  const isGradient = background === "gradient";
  const isSurface = background === "surface";

  const isLightText = isDark || isBrand || isGradient;

  let bgStyle: React.CSSProperties = {
    backgroundColor: isDark
      ? "var(--color-bg-hero, hsl(222,47%,6%))"
      : isSurface
        ? "var(--color-bg-surface)"
        : isBrand
          ? "var(--color-brand)"
          : "var(--color-bg-page)",
    color: isLightText ? "#ffffff" : "var(--color-text-primary)",
  };

  if (isGradient) {
    bgStyle = {
      ...bgStyle,
      backgroundImage: `linear-gradient(135deg, ${gradientFrom}, ${gradientTo})`,
    };
  }

  // Handle array headlines
  const renderHeadline = () => {
    if (Array.isArray(headline)) {
      return (
        <>
          <span style={{ display: "block" }}>{headline[0]}</span>
          {headline.length > 1 && <span style={{ display: "block" }}>{headline[1]}</span>}
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
        padding: "var(--section-padding-y, 6rem) var(--section-padding-x, 1rem)",
      }}
      aria-label="Call to action"
    >
      <div
        style={{
          maxWidth: "800px",
          margin: "0 auto",
          textAlign: "center",
          borderRadius: "var(--radius-card)",
          padding: isSurface ? "4rem 2rem" : "0",
          backgroundColor: isSurface ? "var(--color-bg-page)" : "transparent",
          border: isSurface ? "1px solid var(--color-border)" : "none",
        }}
      >
        <h2
          style={{
            fontSize: "clamp(2rem, 4vw, 3rem)",
            fontWeight: 700,
            lineHeight: 1.15,
            fontFamily: "var(--font-display)",
            marginBottom: "1.25rem",
          }}
        >
          {renderHeadline()}
        </h2>

        {subtitle && (
          <p
            style={{
              fontSize: "1.125rem",
              lineHeight: 1.6,
              color: isLightText ? "hsla(0,0%,100%,0.8)" : "var(--color-text-secondary)",
              marginBottom: "2.5rem",
              maxWidth: "600px",
              margin: "0 auto 2.5rem",
            }}
          >
            {subtitle}
          </p>
        )}

        {/* Input Capture / CTA Buttons */}
        <div style={{ display: "flex", justifyContent: "center" }}>
          {inputCapture ? (
            <form
              onSubmit={(e) => e.preventDefault()}
              style={{
                display: "flex",
                gap: "0.5rem",
                width: "100%",
                maxWidth: "460px",
                flexDirection: "column",
              }}
              className="cta-form"
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
                    padding: "0.875rem 1.25rem",
                    borderRadius: "var(--radius-input)",
                    border: "1px solid var(--color-border)",
                    backgroundColor: "var(--color-bg-page)",
                    color: "var(--color-text-primary)",
                    fontSize: "1rem",
                    outline: "none",
                  }}
                  required
                />
              </div>
              <button
                type="submit"
                style={{
                  padding: "0.875rem 1.5rem",
                  borderRadius: "var(--radius-button)",
                  backgroundColor: isBrand || isGradient ? "#ffffff" : "var(--color-brand)",
                  color: isBrand || isGradient ? "var(--color-brand)" : "#ffffff",
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
                maxWidth: "350px",
              }}
              className="cta-actions"
            >
              {cta && (
                <a
                  href={cta.href}
                  className="cta-btn primary"
                  style={{
                    padding: "0.875rem 1.75rem",
                    borderRadius:
                      cta.variant === "pill" ? "var(--radius-pill)" : "var(--radius-button)",
                    backgroundColor:
                      isBrand || isGradient ? "#ffffff" : isDark ? "#ffffff" : "var(--color-brand)",
                    color:
                      isBrand || isGradient
                        ? "var(--color-brand)"
                        : isDark
                          ? "var(--color-bg-hero)"
                          : "#ffffff",
                    fontWeight: 600,
                    textDecoration: "none",
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
                    padding: "0.875rem 1.75rem",
                    borderRadius:
                      ctaSecondary.variant === "pill-outline"
                        ? "var(--radius-pill)"
                        : "var(--radius-button)",
                    backgroundColor:
                      ctaSecondary.variant === "ghost" ? "transparent" : "transparent",
                    color: isLightText ? "#ffffff" : "var(--color-text-primary)",
                    border:
                      ctaSecondary.variant === "ghost"
                        ? "none"
                        : `1px solid ${isLightText ? "hsla(0,0%,100%,0.3)" : "var(--color-border)"}`,
                    fontWeight: 600,
                    textDecoration: "none",
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
          .cta-form { flex-direction: row !important; }
          .cta-actions { flex-direction: row !important; max-width: none !important; }
        }
        .cta-btn:hover { filter: brightness(0.9); }
        .cta-btn.secondary:hover { background-color: hsla(0,0%,100%,0.1); }
      `}</style>
    </section>
  );
}

export default CtaCentered;
