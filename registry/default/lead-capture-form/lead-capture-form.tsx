"use client";

import React, { type ReactNode } from "react";

/* ========================================
   Lead Capture Form — MarketBlocks UI
   Universal Props Architecture
   ======================================== */

export interface LeadCaptureFormProps {
  badge?: string;
  headline?: string;
  subtitle?: string;

  /** Form configuration */
  formDisplay?: {
    buttonLabel: string;
    privacyText?: string;
    fields?: Array<{
      name: string;
      label: string;
      type: "text" | "email" | "tel" | "company";
      required?: boolean;
    }>;
  };

  /** Optional visual slot (e.g., e-book cover, UI mockup) */
  visual?: ReactNode;
  visualPosition?: "left" | "right";

  /** Background style */
  background?: "light" | "dark" | "surface" | "gradient";

  className?: string;
}

const defaults: LeadCaptureFormProps = {
  badge: "Free E-Book",
  headline: "The Ultimate Guide to Component-Driven Development",
  subtitle:
    "Learn how top engineering teams are building and scaling their UI architectures to ship products 10x faster.",
  formDisplay: {
    buttonLabel: "Download Free Guide",
    privacyText: "We care about protecting your data. Read our Privacy Policy.",
    fields: [
      { name: "name", label: "Full Name", type: "text", required: true },
      { name: "email", label: "Work Email", type: "email", required: true },
      { name: "company", label: "Company Size", type: "text", required: false },
    ],
  },
  visualPosition: "left",
};

export function LeadCaptureForm({
  badge = defaults.badge,
  headline = defaults.headline,
  subtitle = defaults.subtitle,
  formDisplay = defaults.formDisplay,
  visual,
  visualPosition = defaults.visualPosition,
  background = "light",
  className = "",
}: LeadCaptureFormProps) {
  const isDark = background === "dark";
  const isSurface = background === "surface";
  const isGradient = background === "gradient";

  const getBackgroundColor = () => {
    if (isDark) return "var(--color-bg-hero, hsl(222,47%,6%))";
    if (isSurface) return "var(--color-bg-surface)";
    if (isGradient) return "linear-gradient(135deg, hsl(220, 90%, 96%), hsl(280, 80%, 98%))";
    return "var(--color-bg-page)";
  };

  const getTextColor = () => {
    return isDark ? "var(--color-text-inverse, #fff)" : "var(--color-text-primary)";
  };

  const renderVisual = () => {
    if (visual) return visual;
    return (
      <div
        style={{
          width: "100%",
          height: "100%",
          minHeight: "500px",
          backgroundColor: isDark ? "hsla(0,0%,100%,0.05)" : "var(--color-brand)",
          backgroundImage: isDark
            ? "none"
            : "linear-gradient(135deg, var(--color-brand), hsl(250, 80%, 50%))",
          borderRadius: "var(--radius-card)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "#fff",
          padding: "2rem",
          position: "relative",
          overflow: "hidden",
          boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
        }}
        aria-hidden="true"
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            opacity: 0.1,
            backgroundImage: "radial-gradient(#fff 1px, transparent 1px)",
            backgroundSize: "24px 24px",
          }}
        />
        <div style={{ position: "relative", zIndex: 1, textAlign: "center", maxWidth: "300px" }}>
          <div
            style={{
              width: "80px",
              height: "100px",
              backgroundColor: "#fff",
              borderRadius: "8px",
              margin: "0 auto 1.5rem",
              opacity: 0.8,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <svg
              width="32"
              height="32"
              viewBox="0 0 24 24"
              fill="none"
              stroke="var(--color-brand)"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
              <polyline points="14 2 14 8 20 8"></polyline>
              <line x1="16" y1="13" x2="8" y2="13"></line>
              <line x1="16" y1="17" x2="8" y2="17"></line>
              <polyline points="10 9 9 9 8 9"></polyline>
            </svg>
          </div>
          <h3 style={{ fontSize: "1.5rem", fontWeight: 700, marginBottom: "0.5rem" }}>
            {badge || "E-Book Cover"}
          </h3>
          <p style={{ opacity: 0.8, fontSize: "0.875rem" }}>
            Visual representation of your lead magnet.
          </p>
        </div>
      </div>
    );
  };

  return (
    <section
      className={className}
      style={{
        background: isGradient ? getBackgroundColor() : undefined,
        backgroundColor: !isGradient ? getBackgroundColor() : undefined,
        color: getTextColor(),
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
            gap: "clamp(3rem, 6vw, 6rem)",
            alignItems: "center",
          }}
          className={`lead-capture-grid ${visualPosition === "left" ? "reverse" : ""}`}
        >
          {/* Form Content */}
          <div
            className="lead-capture-form-side"
            style={{
              display: "flex",
              flexDirection: "column",
              maxWidth: "560px",
              margin: visualPosition === "left" ? "0 0 0 auto" : "0",
            }}
          >
            {badge && (
              <div
                style={{
                  alignSelf: "flex-start",
                  padding: "0.375rem 1rem",
                  borderRadius: "var(--radius-pill)",
                  fontSize: "0.875rem",
                  fontWeight: 500,
                  marginBottom: "1.5rem",
                  backgroundColor: isDark
                    ? "hsla(0,0%,100%,0.15)"
                    : isGradient
                      ? "#fff"
                      : "var(--color-bg-surface)",
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
                  fontSize: "clamp(2rem, 4.5vw, 3rem)",
                  fontWeight: 800,
                  lineHeight: 1.1,
                  fontFamily: "var(--font-display)",
                  letterSpacing: "-0.02em",
                  marginBottom: "1.25rem",
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

            {formDisplay && (
              <div
                style={{
                  backgroundColor: isDark ? "hsla(0,0%,100%,0.03)" : "#ffffff",
                  padding: "2rem",
                  borderRadius: "var(--radius-card)",
                  border: `1px solid ${isDark ? "hsla(0,0%,100%,0.1)" : "var(--color-border)"}`,
                  boxShadow: isDark ? "none" : "0 10px 15px -3px rgba(0, 0, 0, 0.05)",
                }}
              >
                <form
                  onSubmit={(e) => e.preventDefault()}
                  style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}
                >
                  {formDisplay.fields?.map((field, idx) => (
                    <div
                      key={idx}
                      style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}
                    >
                      <label
                        htmlFor={field.name}
                        style={{
                          fontSize: "0.875rem",
                          fontWeight: 500,
                          color: isDark ? "hsla(0,0%,100%,0.9)" : "var(--color-text-primary)",
                        }}
                      >
                        {field.label}{" "}
                        {field.required && <span style={{ color: "var(--color-brand)" }}>*</span>}
                      </label>
                      <input
                        id={field.name}
                        name={field.name}
                        type={field.type === "company" ? "text" : field.type}
                        required={field.required}
                        style={{
                          width: "100%",
                          padding: "0.875rem 1rem",
                          borderRadius: "var(--radius-input)",
                          border: `1px solid ${isDark ? "hsla(0,0%,100%,0.2)" : "var(--color-border)"}`,
                          backgroundColor: isDark ? "hsla(0,0%,100%,0.05)" : "var(--color-bg-page)",
                          color: getTextColor(),
                          fontSize: "1rem",
                          outline: "none",
                          transition: "border-color 0.2s",
                        }}
                        className="lead-input"
                      />
                    </div>
                  ))}

                  <div style={{ marginTop: "0.5rem" }}>
                    <button
                      type="submit"
                      style={{
                        width: "100%",
                        padding: "1rem",
                        borderRadius: "var(--radius-button)",
                        backgroundColor: "var(--color-brand)",
                        color: "#ffffff",
                        fontWeight: 600,
                        fontSize: "1rem",
                        border: "none",
                        cursor: "pointer",
                        transition: "filter 0.2s",
                      }}
                      className="lead-btn"
                    >
                      {formDisplay.buttonLabel}
                    </button>
                  </div>

                  {formDisplay.privacyText && (
                    <p
                      style={{
                        fontSize: "0.75rem",
                        color: isDark ? "hsla(0,0%,100%,0.5)" : "var(--color-text-muted)",
                        textAlign: "center",
                        margin: 0,
                      }}
                    >
                      {formDisplay.privacyText}
                    </p>
                  )}
                </form>
              </div>
            )}
          </div>

          {/* Visual Content */}
          <div className="lead-capture-visual-side" style={{ width: "100%", height: "100%" }}>
            {renderVisual()}
          </div>
        </div>
      </div>

      <style>{`
        .lead-capture-grid { grid-template-columns: 1fr; }
        @media (min-width: 1024px) {
          .lead-capture-grid { grid-template-columns: 1fr 1fr; }
          .lead-capture-grid.reverse .lead-capture-form-side { order: 2; margin-left: auto; margin-right: 0; }
          .lead-capture-grid.reverse .lead-capture-visual-side { order: 1; }
        }
        .lead-input:focus { border-color: var(--color-brand) !important; box-shadow: 0 0 0 1px var(--color-brand); }
        .lead-btn:hover { filter: brightness(0.9); }
      `}</style>
    </section>
  );
}

export default LeadCaptureForm;
