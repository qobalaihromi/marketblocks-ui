"use client";

import React, { type ReactNode } from "react";

/* ========================================
   Testimonial Grid — MarketBlocks UI
   Universal Props Architecture
   ======================================== */

export interface Testimonial {
  quote: string;
  name: string;
  title: string;
  company?: string;
  avatarUrl?: string;
  rating?: 1 | 2 | 3 | 4 | 5;
}

export interface TestimonialGridProps {
  /** Section badge */
  badge?: string;
  /** Section headline */
  headline?: string;
  /** Section subtitle */
  subtitle?: string;

  /** Array of testimonials */
  testimonials?: Testimonial[];

  /** Max columns (2 or 3) */
  columns?: 2 | 3;

  /** Background style */
  background?: "light" | "dark" | "surface";
  /** Additional class names */
  className?: string;
}

const defaults: TestimonialGridProps = {
  badge: "Testimonials",
  headline: "Loved by teams worldwide",
  subtitle: "See what our customers have to say about building with us.",
  columns: 3,
  testimonials: [
    {
      quote:
        "This is hands down the best component library I've ever used. It saved us weeks of development time on our new landing page.",
      name: "Sarah Jenkins",
      title: "CTO",
      company: "TechFlow",
      rating: 5,
    },
    {
      quote:
        "The bilingual support out of the box is a game changer for our expansion into Southeast Asia. Highly recommend.",
      name: "David Chen",
      title: "Product Marketing Manager",
      company: "GrowthStack",
      rating: 5,
    },
    {
      quote:
        "Clean code, beautiful design, and perfectly responsive. Our conversion rate increased by 24% after switching to these components.",
      name: "Emily Rodriguez",
      title: "Founder",
      company: "ConvertKit",
      rating: 5,
    },
    {
      quote:
        "Finally, marketing components that actually look like they belong in 2026. The dark mode implementation is flawless.",
      name: "Marcus Johnson",
      title: "Lead Designer",
      company: "CreativeStudio",
      rating: 4,
    },
    {
      quote:
        "We were able to launch our MVP landing page in just 2 hours instead of 2 weeks. The ROI is immediate.",
      name: "Alex Patel",
      title: "Indie Hacker",
      rating: 5,
    },
    {
      quote:
        "I love how easy it is to customize The universal props architecture makes adapting to different campaigns a breeze.",
      name: "Jessica Wong",
      title: "Growth Engineer",
      company: "ScaleUp",
      rating: 5,
    },
  ],
};

export function TestimonialGrid({
  badge = defaults.badge,
  headline = defaults.headline,
  subtitle = defaults.subtitle,
  testimonials = defaults.testimonials,
  columns = defaults.columns || 3,
  background = "light",
  className = "",
}: TestimonialGridProps) {
  const isDark = background === "dark";
  const isSurface = background === "surface";

  const renderStars = (rating?: number) => {
    if (!rating) return null;
    return (
      <div
        style={{ display: "flex", gap: "2px", marginBottom: "1rem" }}
        aria-label={`${rating} out of 5 stars`}
      >
        {[...Array(5)].map((_, i) => (
          <svg
            key={i}
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill={i < rating ? "var(--color-brand)" : "transparent"}
            stroke={
              i < rating
                ? "var(--color-brand)"
                : isDark
                  ? "hsla(0,0%,100%,0.2)"
                  : "var(--color-border)"
            }
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
          </svg>
        ))}
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
      aria-label="Testimonials section"
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
            marginBottom: "3.5rem",
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
                fontSize: "1.0625rem",
                lineHeight: 1.6,
                color: isDark ? "hsla(0,0%,100%,0.7)" : "var(--color-text-secondary)",
              }}
            >
              {subtitle}
            </p>
          )}
        </div>

        {/* Masonry-like Grid wrapper */}
        <div
          style={{
            columns: columns === 3 ? "1" : "1",
            columnGap: "1.5rem",
          }}
          className={`testimonial-masonry cols-${columns}`}
        >
          {testimonials?.map((t, i) => (
            <div
              key={i}
              style={{
                breakInside: "avoid",
                padding: "2rem",
                marginBottom: "1.5rem",
                borderRadius: "var(--radius-card)",
                backgroundColor: isDark ? "hsla(0,0%,100%,0.05)" : "var(--color-bg-page)",
                border: `1px solid ${isDark ? "hsla(0,0%,100%,0.1)" : "var(--color-border)"}`,
                boxShadow: isDark ? "none" : "0 4px 6px -1px rgba(0, 0, 0, 0.05)",
                display: "flex",
                flexDirection: "column",
              }}
            >
              {renderStars(t.rating)}

              <blockquote style={{ margin: 0, padding: 0, marginBottom: "2rem" }}>
                <p
                  style={{
                    fontSize: "1rem",
                    lineHeight: 1.6,
                    color: isDark ? "hsla(0,0%,100%,0.85)" : "var(--color-text-primary)",
                    fontStyle: "italic",
                  }}
                >
                  "{t.quote}"
                </p>
              </blockquote>

              <div
                style={{ display: "flex", alignItems: "center", gap: "1rem", marginTop: "auto" }}
              >
                {t.avatarUrl ? (
                  <img
                    src={t.avatarUrl}
                    alt={`${t.name}'s avatar`}
                    style={{
                      width: "3rem",
                      height: "3rem",
                      borderRadius: "50%",
                      objectFit: "cover",
                      backgroundColor: isDark ? "hsla(0,0%,100%,0.1)" : "var(--color-bg-muted)",
                    }}
                  />
                ) : (
                  <div
                    style={{
                      width: "3rem",
                      height: "3rem",
                      borderRadius: "50%",
                      backgroundColor: "var(--color-brand)",
                      color: "#fff",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontWeight: 600,
                      fontSize: "1rem",
                    }}
                  >
                    {t.name.charAt(0)}
                  </div>
                )}
                <div style={{ display: "flex", flexDirection: "column" }}>
                  <span style={{ fontWeight: 600, fontSize: "0.9375rem" }}>{t.name}</span>
                  <span
                    style={{
                      fontSize: "0.875rem",
                      color: isDark ? "hsla(0,0%,100%,0.6)" : "var(--color-text-muted)",
                    }}
                  >
                    {t.title}
                    {t.company ? `, ${t.company}` : ""}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (min-width: 640px) {
          .testimonial-masonry { columns: 2 !important; }
        }
        @media (min-width: 1024px) {
          .testimonial-masonry.cols-3 { columns: 3 !important; }
        }
      `}</style>
    </section>
  );
}

export default TestimonialGrid;
