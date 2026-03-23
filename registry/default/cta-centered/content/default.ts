import type { CtaCenteredProps } from "../cta-centered";

export const ctaCenteredContentEN: Partial<CtaCenteredProps> = {
  headline: ["Ready to accelerate", "your growth?"],
  subtitle: "Join thousands of teams who have already shipped faster with our platform.",
  cta: { label: "Start Free Trial", href: "#", variant: "button" },
  ctaSecondary: { label: "Talk to Sales", href: "#", variant: "outline" },
};

export const ctaCenteredContentID: Partial<CtaCenteredProps> = {
  headline: ["Siap mengakselerasi", "pertumbuhanmu?"],
  subtitle:
    "Bergabung bersama ribuan tim yang telah berhasil membangun lebih cepat dengan platform kami.",
  cta: { label: "Coba Gratis", href: "#", variant: "button" },
  ctaSecondary: { label: "Hubungi Sales", href: "#", variant: "outline" },
};

// Alternate preset specifically showing input capture instead of double button
export const ctaCenteredCaptureEN: Partial<CtaCenteredProps> = {
  headline: "Get early access to our new release",
  subtitle: "We are currently in private beta. Drop your email below to get on the waitlist.",
  inputCapture: {
    type: "email",
    placeholder: "Enter your work email",
    ctaLabel: "Join Waitlist",
  },
};
