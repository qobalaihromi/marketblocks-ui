"use client";

import React, { useState } from "react";

/* ========================================
   Announcement Bar — MarketBlocks UI
   Universal Props Architecture
   ======================================== */

export interface AnnouncementBarProps {
  /** The main announcement text */
  text?: string;
  /** Optional highlighted tag or badge before text */
  badge?: string;
  /** Link text */
  linkText?: string;
  /** Link URL */
  href?: string;

  /** Background style */
  background?: "brand" | "dark" | "gradient" | "warning";
  /** If true, the bar sticks to the top of the viewport */
  sticky?: boolean;
  /** If true, shows a close button to dismiss the banner */
  dismissible?: boolean;

  className?: string;
}

const defaults: AnnouncementBarProps = {
  badge: "New",
  text: "We just launched MarketBlocks v2.0 with 20+ new components.",
  linkText: "Read the announcement →",
  href: "#",
  background: "brand",
  dismissible: true,
  sticky: false,
};

export function AnnouncementBar({
  badge = defaults.badge,
  text = defaults.text,
  linkText = defaults.linkText,
  href = defaults.href,
  background = "brand",
  sticky = defaults.sticky,
  dismissible = defaults.dismissible,
  className = "",
}: AnnouncementBarProps) {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  const getBackgroundColor = () => {
    switch (background) {
      case "dark":
        return "var(--color-bg-hero, hsl(222,47%,6%))";
      case "warning":
        return "hsl(38, 92%, 50%)";
      case "gradient":
        return "linear-gradient(90deg, hsl(250, 80%, 60%), hsl(280, 80%, 50%))";
      case "brand":
      default:
        return "var(--color-brand)";
    }
  };

  const getTextColor = () => {
    if (background === "warning") return "hsl(222, 47%, 6%)"; // Dark text on yellow
    return "#ffffff"; // White text for brand/dark/gradient
  };

  const isGradient = background === "gradient";

  return (
    <div
      className={className}
      style={{
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "0.5rem 1rem",
        background: isGradient ? getBackgroundColor() : undefined,
        backgroundColor: !isGradient ? getBackgroundColor() : undefined,
        color: getTextColor(),
        position: sticky ? "sticky" : "relative",
        top: sticky ? 0 : undefined,
        zIndex: sticky ? 50 : 1,
        fontSize: "0.875rem",
        fontWeight: 500,
        boxShadow: sticky ? "0 1px 2px rgba(0,0,0,0.05)" : "none",
        transition: "opacity 0.3s ease",
      }}
      role="alert"
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "0.75rem",
          flexWrap: "wrap",
          justifyContent: "center",
          paddingRight: dismissible ? "2rem" : "0",
        }}
      >
        {badge && (
          <span
            style={{
              display: "inline-flex",
              alignItems: "center",
              padding: "0.125rem 0.5rem",
              borderRadius: "999px",
              fontSize: "0.75rem",
              fontWeight: 700,
              textTransform: "uppercase",
              backgroundColor: "rgba(255, 255, 255, 0.2)",
              color: "inherit",
              letterSpacing: "0.05em",
            }}
          >
            {badge}
          </span>
        )}

        <span style={{ textAlign: "center" }}>
          {text}
          {href && linkText && (
            <a
              href={href}
              style={{
                marginLeft: "0.5rem",
                color: "inherit",
                textDecoration: "underline",
                textUnderlineOffset: "2px",
                fontWeight: 600,
              }}
              className="announcement-link"
            >
              {linkText}
            </a>
          )}
        </span>
      </div>

      {dismissible && (
        <button
          onClick={() => setIsVisible(false)}
          aria-label="Dismiss announcement"
          style={{
            position: "absolute",
            right: "0.5rem",
            top: "50%",
            transform: "translateY(-50%)",
            background: "none",
            border: "none",
            color: "inherit",
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "0.5rem",
            opacity: 0.7,
            transition: "opacity 0.2s",
          }}
          className="announcement-close"
        >
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>
      )}

      <style>{`
        .announcement-link:hover { opacity: 0.8; }
        .announcement-close:hover { opacity: 1 !important; background-color: rgba(255, 255, 255, 0.1); border-radius: 4px; }
      `}</style>
    </div>
  );
}

export default AnnouncementBar;
