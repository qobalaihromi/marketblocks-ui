"use client";

import React, { type ReactNode } from "react";

/* ========================================
   Testimonial Marquee — MarketBlocks UI
   Universal Props Architecture
   ======================================== */

export interface MarqueeItem {
  id: string;
  quote: string;
  name: string;
  title: string;
  company?: string;
  avatarUrl?: string;
}

export interface TestimonialMarqueeProps {
  /** Section badge */
  badge?: string;
  /** Section headline */
  headline?: string;

  /** Array of testimonials */
  items?: MarqueeItem[];

  /** Background style */
  background?: "light" | "dark" | "surface";

  /** Animation speed in seconds (duration of one loop) */
  speed?: number;

  className?: string;
}

const defaults: TestimonialMarqueeProps = {
  badge: "Community",
  headline: "What people are saying",
  speed: 40,
  items: [
    {
      id: "1",
      quote: "The universal props architecture makes adapting to different campaigns a breeze.",
      name: "Jessica Wong",
      title: "Growth Engineer",
    },
    {
      id: "2",
      quote: "Clean code, beautiful design, and perfectly responsive. Conversion went up 24%.",
      name: "Emily Rodriguez",
      title: "Founder",
    },
    {
      id: "3",
      quote: "We launched our MVP in 2 hours instead of 2 weeks. The ROI is immediate.",
      name: "Alex Patel",
      title: "Indie Hacker",
    },
    {
      id: "4",
      quote: "Finally, marketing components that actually look like they belong in 2026.",
      name: "Marcus Johnson",
      title: "Lead Designer",
    },
    {
      id: "5",
      quote: "This library saved us weeks of development time on our new landing page.",
      name: "Sarah Jenkins",
      title: "CTO",
    },
  ],
};

export function TestimonialMarquee({
  badge = defaults.badge,
  headline = defaults.headline,
  items = defaults.items || [],
  background = "light",
  speed = defaults.speed,
  className = "",
}: TestimonialMarqueeProps) {
  const isDark = background === "dark";
  const isSurface = background === "surface";

  // Duplicate items to create seamless loop
  const duplicatedItems = [...items, ...items];

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
        padding: "var(--section-padding-y, 5rem) 0",
        overflow: "hidden", // Crucial for marquee
      }}
    >
      <div style={{ textAlign: "center", marginBottom: "3rem", padding: "0 1rem" }}>
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
              fontFamily: "var(--font-display)",
            }}
          >
            {headline}
          </h2>
        )}
      </div>

      {/* Marquee Container */}
      <div
        className="marquee-container"
        style={{
          position: "relative",
          display: "flex",
          width: "100%",
          maskImage: "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
          WebkitMaskImage:
            "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
        }}
      >
        <div
          className="marquee-track"
          style={{
            display: "flex",
            gap: "1.5rem",
            paddingLeft: "1.5rem",
            animation: `marqueeScroll ${speed}s linear infinite`,
          }}
        >
          {duplicatedItems.map((item, idx) => (
            <div
              key={`${item.id}-${idx}`}
              className="marquee-item"
              style={{
                width: "350px",
                flexShrink: 0,
                padding: "2rem",
                borderRadius: "var(--radius-card)",
                backgroundColor: isDark ? "hsla(0,0%,100%,0.05)" : "var(--color-bg-page)",
                border: `1px solid ${isDark ? "hsla(0,0%,100%,0.1)" : "var(--color-border)"}`,
                boxShadow: isDark ? "none" : "0 4px 6px -1px rgba(0, 0, 0, 0.05)",
                display: "flex",
                flexDirection: "column",
                transition: "transform 0.2s ease, box-shadow 0.2s ease",
              }}
            >
              <blockquote style={{ margin: 0, padding: 0, marginBottom: "2rem", flex: 1 }}>
                <p
                  style={{
                    fontSize: "1rem",
                    lineHeight: 1.6,
                    color: isDark ? "hsla(0,0%,100%,0.9)" : "var(--color-text-primary)",
                  }}
                >
                  "{item.quote}"
                </p>
              </blockquote>

              <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
                {item.avatarUrl ? (
                  <img
                    src={item.avatarUrl}
                    alt={item.name}
                    style={{
                      width: "2.5rem",
                      height: "2.5rem",
                      borderRadius: "50%",
                      objectFit: "cover",
                    }}
                  />
                ) : (
                  <div
                    style={{
                      width: "2.5rem",
                      height: "2.5rem",
                      borderRadius: "50%",
                      backgroundColor: "var(--color-brand)",
                      color: "#fff",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontWeight: 600,
                      fontSize: "0.875rem",
                    }}
                  >
                    {item.name.charAt(0)}
                  </div>
                )}
                <div style={{ display: "flex", flexDirection: "column" }}>
                  <span style={{ fontWeight: 600, fontSize: "0.875rem" }}>{item.name}</span>
                  <span
                    style={{
                      fontSize: "0.75rem",
                      color: isDark ? "hsla(0,0%,100%,0.6)" : "var(--color-text-muted)",
                    }}
                  >
                    {item.title}
                    {item.company ? `, ${item.company}` : ""}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes marqueeScroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(calc(-50% - 0.75rem)); } /* Shift by exactly half the track width minus half gap */
        }
        .marquee-track:hover { animation-play-state: paused !important; }
        .marquee-item:hover { transform: translateY(-4px); box-shadow: 0 10px 15px -3px rgba(0,0,0,0.1); }
      `}</style>
    </section>
  );
}

export default TestimonialMarquee;
