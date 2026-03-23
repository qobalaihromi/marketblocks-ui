"use client";

import React from "react";

/* ========================================
   Logo Cloud — MarketBlocks UI
   Universal Props Architecture
   ======================================== */

export interface LogoItem {
  id: string;
  name: string;
  logoUrl?: string; // If not provided, fallback to text logo
}

export interface LogoCloudProps {
  /** Optional headline above logos */
  headline?: string;

  /** Array of logo items */
  logos?: LogoItem[];

  /** Apply grayscale filter */
  grayscale?: boolean;

  /** Background style */
  background?: "light" | "dark" | "surface";

  /** Additional class names */
  className?: string;
}

const defaults: LogoCloudProps = {
  headline: "Trusted by innovative teams worldwide",
  grayscale: true,
  logos: [
    { id: "1", name: "Acme Corp" },
    { id: "2", name: "GlobalTech" },
    { id: "3", name: "NexGen" },
    { id: "4", name: "Innovate" },
    { id: "5", name: "CloudSync" },
    { id: "6", name: "DataFlow" },
  ],
};

export function LogoCloud({
  headline = defaults.headline,
  logos = defaults.logos,
  grayscale = defaults.grayscale,
  background = "light",
  className = "",
}: LogoCloudProps) {
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
            : "transparent",
        padding: "var(--section-padding-y, 4rem) var(--section-padding-x, 1rem)",
      }}
      aria-label="Our customers"
    >
      <div
        style={{
          maxWidth: "var(--container-max, 1280px)",
          margin: "0 auto",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "2.5rem",
        }}
      >
        {headline && (
          <p
            style={{
              fontSize: "0.875rem",
              fontWeight: 500,
              textTransform: "uppercase",
              letterSpacing: "0.05em",
              color: isDark ? "hsla(0,0%,100%,0.6)" : "var(--color-text-muted)",
              textAlign: "center",
              margin: 0,
            }}
          >
            {headline}
          </p>
        )}

        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            alignItems: "center",
            gap: "clamp(2rem, 5vw, 4rem)",
            width: "100%",
          }}
          className={grayscale ? (isDark ? "logos-grayscale-dark" : "logos-grayscale") : ""}
        >
          {logos?.map((logo) => (
            <div
              key={logo.id}
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                height: "2.5rem",
                opacity: 0.8,
                transition: "opacity var(--transition-fast)",
              }}
              className="logo-item"
              title={logo.name}
            >
              {logo.logoUrl ? (
                <img
                  src={logo.logoUrl}
                  alt={`${logo.name} logo`}
                  style={{ maxHeight: "100%", maxWidth: "140px", objectFit: "contain" }}
                />
              ) : (
                /* Fallback text logo if no URL provided */
                <span
                  style={{
                    fontSize: "1.25rem",
                    fontWeight: 700,
                    fontFamily: "var(--font-display)",
                    color: isDark ? "hsla(0,0%,100%,0.9)" : "var(--color-text-primary)",
                  }}
                >
                  {/* Faux icon for visual weight */}
                  <span
                    style={{
                      display: "inline-block",
                      width: "16px",
                      height: "16px",
                      borderRadius: "4px",
                      backgroundColor: isDark ? "#fff" : "#000",
                      marginRight: "8px",
                      verticalAlign: "middle",
                    }}
                  ></span>
                  {logo.name}
                </span>
              )}
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .logo-item:hover { opacity: 1 !important; }
        .logos-grayscale .logo-item { filter: grayscale(100%) opacity(0.6); }
        .logos-grayscale .logo-item:hover { filter: grayscale(0%) opacity(1); }
        .logos-grayscale-dark .logo-item { filter: grayscale(100%) invert(1) brightness(2) opacity(0.5); }
        .logos-grayscale-dark .logo-item:hover { filter: grayscale(100%) invert(1) brightness(2) opacity(1); }
      `}</style>
    </section>
  );
}

export default LogoCloud;
