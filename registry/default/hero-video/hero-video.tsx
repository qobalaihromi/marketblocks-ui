"use client";

import React from "react";

/* ========================================
   Hero Video — MarketBlocks UI
   Universal Props Architecture
   ======================================== */

export interface HeroVideoProps {
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
  };

  /** The background video URL (MP4 works best for web) */
  videoUrl?: string;

  /** Dark overlay opacity over the video (0 to 1). Default 0.6 */
  overlayOpacity?: number;

  className?: string;
}

const defaults: HeroVideoProps = {
  badge: "High Performance",
  headline: ["Build immersive experiences.", "Without the heavy lifting."],
  subtitle:
    "Component-driven development allows your team to focus on the core product while we handle the presentation layer.",
  cta: { label: "Start Free Trial", href: "#", variant: "button" },
  ctaSecondary: { label: "Watch Demo", href: "#", variant: "outline" },
  // A safe placeholder video for demonstration
  videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4",
  overlayOpacity: 0.6,
};

export function HeroVideo({
  badge = defaults.badge,
  headline = defaults.headline,
  subtitle = defaults.subtitle,
  cta = defaults.cta,
  ctaSecondary = defaults.ctaSecondary,
  inputCapture,
  videoUrl = defaults.videoUrl,
  overlayOpacity = defaults.overlayOpacity,
  className = "",
}: HeroVideoProps) {
  const renderHeadline = () => {
    if (Array.isArray(headline)) {
      return (
        <>
          <span style={{ display: "block" }}>{headline[0]}</span>
          {headline.length > 1 && (
            <span style={{ display: "block", color: "hsla(0,0%,100%,0.8)" }}>{headline[1]}</span>
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
        position: "relative",
        minHeight: "90vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: "#ffffff",
        overflow: "hidden",
      }}
      aria-label="Hero section with video background"
    >
      {/* Background Video */}
      {videoUrl && (
        <video
          autoPlay
          muted
          loop
          playsInline
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            zIndex: 0,
            backgroundColor: "#000", // Fallback while loading
          }}
        />
      )}

      {/* Dark Overlay for Text Readability */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: `rgba(0,0,0, ${overlayOpacity})`,
          zIndex: 1,
        }}
        aria-hidden="true"
      />

      {/* Content Container */}
      <div
        style={{
          position: "relative",
          zIndex: 2,
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
              fontWeight: 600,
              marginBottom: "2rem",
              backgroundColor: "hsla(0,0%,100%,0.2)",
              backdropFilter: "blur(4px)",
              color: "#ffffff",
              border: `1px solid hsla(0,0%,100%,0.3)`,
              letterSpacing: "0.05em",
              textTransform: "uppercase",
            }}
          >
            {badge}
          </div>
        )}

        <h1
          style={{
            fontSize: "clamp(2.5rem, 6vw, 4.5rem)",
            fontWeight: 800,
            lineHeight: 1.1,
            letterSpacing: "-0.02em",
            fontFamily: "var(--font-display)",
            marginBottom: "1.5rem",
            textShadow: "0 2px 4px rgba(0,0,0,0.3)",
          }}
        >
          {renderHeadline()}
        </h1>

        {subtitle && (
          <p
            style={{
              fontSize: "clamp(1.125rem, 2vw, 1.375rem)",
              lineHeight: 1.6,
              color: "hsla(0,0%,100%,0.85)",
              marginBottom: "3rem",
              maxWidth: "600px",
              fontWeight: 400,
              textShadow: "0 1px 2px rgba(0,0,0,0.3)",
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
              className="hero-video-form"
            >
              <div style={{ display: "flex", flex: 1 }}>
                <input
                  type={inputCapture.type === "email" ? "email" : "tel"}
                  placeholder={inputCapture.placeholder}
                  style={{
                    flex: 1,
                    padding: "1rem 1.25rem",
                    borderRadius: "var(--radius-input)",
                    border: "1px solid hsla(0,0%,100%,0.3)",
                    backgroundColor: "hsla(0,0%,100%,0.15)",
                    backdropFilter: "blur(8px)",
                    color: "#fff",
                    fontSize: "1rem",
                    outline: "none",
                  }}
                  required
                  className="hero-video-input"
                />
              </div>
              <button
                type="submit"
                style={{
                  padding: "1rem 2rem",
                  borderRadius: "var(--radius-button)",
                  backgroundColor: "var(--color-brand)",
                  color: "#ffffff",
                  fontWeight: 600,
                  fontSize: "1rem",
                  border: "none",
                  cursor: "pointer",
                  whiteSpace: "nowrap",
                  boxShadow: "0 4px 14px 0 rgba(0,0,0,0.3)",
                }}
                className="hero-video-btn"
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
              className="hero-video-actions"
            >
              {cta && (
                <a
                  href={cta.href}
                  className="hero-video-btn primary"
                  style={{
                    padding: "1rem 2rem",
                    borderRadius:
                      cta.variant === "pill" ? "var(--radius-pill)" : "var(--radius-button)",
                    backgroundColor: "var(--color-brand)",
                    color: "#ffffff",
                    fontWeight: 600,
                    textDecoration: "none",
                    fontSize: "1rem",
                    boxShadow: "0 4px 14px 0 rgba(0,0,0,0.3)",
                  }}
                >
                  {cta.label}
                </a>
              )}
              {ctaSecondary && (
                <a
                  href={ctaSecondary.href}
                  className="hero-video-btn secondary"
                  style={{
                    padding: "1rem 2rem",
                    borderRadius:
                      ctaSecondary.variant === "pill-outline"
                        ? "var(--radius-pill)"
                        : "var(--radius-button)",
                    backgroundColor:
                      ctaSecondary.variant === "ghost" ? "transparent" : "hsla(0,0%,100%,0.1)",
                    color: "#fff",
                    border:
                      ctaSecondary.variant === "ghost" ? "none" : `1px solid hsla(0,0%,100%,0.4)`,
                    backdropFilter: ctaSecondary.variant !== "ghost" ? "blur(4px)" : "none",
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
          .hero-video-form { flex-direction: row !important; }
          .hero-video-actions { flex-direction: row !important; max-width: none !important; justify-content: center; }
        }
        .hero-video-btn:hover { filter: brightness(1.1); transition: filter 0.2s; }
        .hero-video-btn.secondary:hover { background-color: hsla(0,0%,100%,0.2) !important; }
        .hero-video-input::placeholder { color: hsla(0,0%,100%,0.6); }
        .hero-video-input:focus { border-color: rgba(255,255,255,0.8) !important; }
      `}</style>
    </section>
  );
}

export default HeroVideo;
