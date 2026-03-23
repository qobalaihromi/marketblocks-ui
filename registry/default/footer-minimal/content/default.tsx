import React from "react";
import type { FooterMinimalProps } from "../footer-minimal";

export const footerMinimalContentEN: Partial<FooterMinimalProps> = {
  logo: "MarketBlocks",
  copyright: `© ${new Date().getFullYear()} MarketBlocks Inc. All rights reserved.`,
  legalLinks: [
    { label: "Privacy Policy", href: "#" },
    { label: "Terms of Service", href: "#" },
  ],
  socialLinks: [
    {
      ariaLabel: "Twitter",
      href: "#",
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.008 5.961h-1.91z" />
        </svg>
      ),
    },
    {
      ariaLabel: "GitHub",
      href: "#",
      icon: (
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
          <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
        </svg>
      ),
    },
  ],
};

export const footerMinimalContentID: Partial<FooterMinimalProps> = {
  logo: "MarketBlocks",
  copyright: `© ${new Date().getFullYear()} MarketBlocks Inc. Hak cipta dilindungi undang-undang.`,
  legalLinks: [
    { label: "Kebijakan Privasi", href: "#" },
    { label: "Syarat & Ketentuan", href: "#" },
  ],
  socialLinks: footerMinimalContentEN.socialLinks, // reuse icons
};
