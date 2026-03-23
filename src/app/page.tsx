import { Rocket, Settings, Code, Zap } from "lucide-react";
import { NavbarSimple } from "../../registry/default/navbar-simple/navbar-simple";
import { HeroCentered } from "../../registry/default/hero-centered/hero-centered";
import { FeaturesGrid } from "../../registry/default/features-grid/features-grid";
import { TestimonialMarquee } from "../../registry/default/testimonial-marquee/testimonial-marquee";
import { FaqAccordion } from "../../registry/default/faq-accordion/faq-accordion";
import { CtaCentered } from "../../registry/default/cta-centered/cta-centered";
import { FooterSimple } from "../../registry/default/footer-simple/footer-simple";

export default function Home() {
  return (
    <main>
      <NavbarSimple
        logo="Launch UI"
        links={[
          { label: "Resources", href: "#resources" },
          { label: "Contact", href: "#contact" },
          { label: "Blocks", href: "#blocks" },
          { label: "Templates", href: "#templates" },
        ]}
        cta={{ label: "Get Template", href: "#", variant: "pill" }}
      />

      <HeroCentered
        headline={["Give your big idea", "the design it deserves"]}
        headlineAccentIndices={[]}
        subtitle="Carefully crafted components and templates built with React, Shadcn/ui and Tailwind that will help your product stand out from the crowd."
        cta={{ label: "Start building", href: "#", variant: "button" }}
        ctaSecondary={{ label: "View Components", href: "#blocks", variant: "ghost" }}
      />

      <div id="blocks">
        <FeaturesGrid
          headline="It's all about design quality"
          subtitle="Everything you need at your fingertips. You can change anything. But you don't have to."
          columns={4}
          features={[
            {
              icon: <Rocket />,
              title: "Design-first",
              description:
                "Carefully crafted to look beautiful out of the box so you can focus on building.",
            },
            {
              icon: <Zap />,
              title: "Made for fast development",
              description:
                "Use our pre-built components to speed up your development process by 10x.",
            },
            {
              icon: <Code />,
              title: "The code is yours",
              description: "Full access to the source code. Modify, adapt, and make it your own.",
            },
            {
              icon: <Settings />,
              title: "Data-agnostic",
              description:
                "Seamlessly integrates with your existing tech stack and database providers.",
            },
          ]}
        />
      </div>

      <div id="testimonials">
        <TestimonialMarquee speed={40} />
      </div>

      <div id="faq">
        <FaqAccordion
          headline="Questions and Answers"
          subtitle="Find answers to common questions about Launch UI."
          faqs={[
            {
              question: "Why building a great landing page is critical for your business?",
              answer:
                "A great landing page is often the first impression a customer has of your product. It acts as your primary conversion machine, turning visitors into leads or customers.",
            },
            {
              question: "Why use Launch UI instead of a no-code tool?",
              answer:
                "Launch UI gives you the speed of a no-code tool with the infinite flexibility of code. You own the code and can customize it exactly to your needs.",
            },
            {
              question: "How is it different from other component libraries?",
              answer:
                "We focus on complete marketing sections rather than granular atomic components, saving you hours of assembling basic building blocks.",
            },
            {
              question: "Are Figma files included?",
              answer:
                "Yes, our pro tier includes extensive Figma files matching all of our React components, enabling seamless designer-to-developer handoff.",
            },
            {
              question: "Can I get a discount?",
              answer:
                "We offer purchasing parity discounts based on your location. Please contact our support team for more details.",
            },
          ]}
        />
      </div>

      <CtaCentered
        headline={["Level-up your", "design game, today"]}
        subtitle="Start building superior products with Launch UI's premium marketing components."
        cta={{ label: "Start building with Launch UI", href: "#", variant: "button" }}
        ctaSecondary={undefined}
      />

      <FooterSimple
        logo="Launch UI"
        tagline="A proven solution for good design."
        columns={[
          {
            title: "Product",
            links: [
              { label: "Components", href: "#" },
              { label: "Pricing", href: "#" },
              { label: "Blocks", href: "#" },
              { label: "Templates", href: "#" },
            ],
          },
          {
            title: "Company",
            links: [
              { label: "About", href: "#" },
              { label: "Blog", href: "#" },
              { label: "Careers", href: "#" },
              { label: "Contact", href: "#" },
            ],
          },
          {
            title: "Resources",
            links: [
              { label: "Community", href: "#" },
              { label: "GitHub", href: "#" },
              { label: "Support", href: "#" },
              { label: "Terms of Service", href: "#" },
            ],
          },
        ]}
      />
    </main>
  );
}
