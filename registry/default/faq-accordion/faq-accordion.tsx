"use client";

import React, { useState } from "react";

/* ========================================
   FAQ Accordion — MarketBlocks UI
   Universal Props Architecture
   ======================================== */

export interface FaqItem {
  question: string;
  answer: string;
}

export interface FaqAccordionProps {
  /** Section badge */
  badge?: string;
  /** Section headline */
  headline?: string;
  /** Section subtitle */
  subtitle?: string;

  /** Array of FAQs */
  faqs?: FaqItem[];

  /** Background style */
  background?: "light" | "dark" | "surface";

  /** Contact CTA when FAQ doesn't answer */
  contactCta?: {
    text: string;
    linkText: string;
    href: string;
  };

  className?: string;
}

const defaults: FaqAccordionProps = {
  badge: "FAQ",
  headline: "Frequently asked questions",
  subtitle: "Everything you need to know about the product and billing.",
  contactCta: {
    text: "Can't find the answer you're looking for?",
    linkText: "Contact our support team",
    href: "#",
  },
  faqs: [
    {
      question: "Is there a free trial available?",
      answer:
        "Yes, you can try us for free for 14 days. If you want, we'll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.",
    },
    {
      question: "Can I change my plan later?",
      answer:
        "Of course. Our pricing scales with your company. Chat to our friendly team to find a solution that works for you.",
    },
    {
      question: "What is your cancellation policy?",
      answer:
        "We understand that things change. You can cancel your plan at any time and we'll refund you the difference already paid.",
    },
    {
      question: "How does billing work?",
      answer:
        "Plans are per workspace, not per account. You can upgrade one workspace, and still have any number of free workspaces.",
    },
  ],
};

export function FaqAccordion({
  badge = defaults.badge,
  headline = defaults.headline,
  subtitle = defaults.subtitle,
  faqs = defaults.faqs,
  background = "light",
  contactCta = defaults.contactCta,
  className = "",
}: FaqAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0); // First open by default

  const isDark = background === "dark";
  const isSurface = background === "surface";

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
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
    >
      <div
        style={{
          maxWidth: "800px",
          margin: "0 auto",
          padding: "var(--section-padding-y, 6rem) var(--section-padding-x, 1rem)",
        }}
      >
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "4rem" }}>
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
                fontSize: "clamp(2rem, 4vw, 3rem)",
                fontWeight: 800,
                fontFamily: "var(--font-display)",
                letterSpacing: "-0.02em",
                marginBottom: "1rem",
              }}
            >
              {headline}
            </h2>
          )}

          {subtitle && (
            <p
              style={{
                fontSize: "1.125rem",
                color: isDark ? "hsla(0,0%,100%,0.7)" : "var(--color-text-secondary)",
                maxWidth: "600px",
                margin: "0 auto",
              }}
            >
              {subtitle}
            </p>
          )}
        </div>

        {/* Accordion List */}
        <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
          {faqs?.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                style={{
                  border: `1px solid ${isDark ? "hsla(0,0%,100%,0.2)" : "var(--color-border)"}`,
                  borderRadius: "var(--radius-card)",
                  backgroundColor: isDark ? "hsla(0,0%,100%,0.05)" : "var(--color-bg-page)",
                  overflow: "hidden",
                  transition: "all 0.2s ease",
                }}
              >
                <button
                  onClick={() => handleToggle(index)}
                  style={{
                    width: "100%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    padding: "1.5rem",
                    backgroundColor: "transparent",
                    border: "none",
                    cursor: "pointer",
                    textAlign: "left",
                    color: "inherit",
                  }}
                  aria-expanded={isOpen}
                >
                  <span style={{ fontSize: "1.125rem", fontWeight: 600 }}>{faq.question}</span>
                  <span
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      width: "24px",
                      height: "24px",
                      transition: "transform 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
                      transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
                      color: isOpen
                        ? "var(--color-brand)"
                        : isDark
                          ? "hsla(0,0%,100%,0.5)"
                          : "var(--color-text-muted)",
                    }}
                  >
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polyline points="6 9 12 15 18 9"></polyline>
                    </svg>
                  </span>
                </button>
                <div
                  style={{
                    display: "grid",
                    gridTemplateRows: isOpen ? "1fr" : "0fr",
                    transition: "grid-template-rows 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
                  }}
                >
                  <div style={{ overflow: "hidden" }}>
                    <div
                      style={{
                        padding: "0 1.5rem 1.5rem 1.5rem",
                        color: isDark ? "hsla(0,0%,100%,0.7)" : "var(--color-text-secondary)",
                        lineHeight: 1.6,
                      }}
                    >
                      {faq.answer}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Contact CTA */}
        {contactCta && (
          <div style={{ textAlign: "center", marginTop: "4rem" }}>
            <p
              style={{
                fontSize: "1rem",
                color: isDark ? "hsla(0,0%,100%,0.7)" : "var(--color-text-secondary)",
              }}
            >
              {contactCta.text}{" "}
              <a
                href={contactCta.href}
                style={{
                  color: isDark ? "#fff" : "var(--color-brand)",
                  fontWeight: 600,
                  textDecoration: "underline",
                  textUnderlineOffset: "4px",
                }}
              >
                {contactCta.linkText}
              </a>
            </p>
          </div>
        )}
      </div>
    </section>
  );
}

export default FaqAccordion;
