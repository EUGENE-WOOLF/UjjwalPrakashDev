"use client";

import CardNav, { CardNavItem } from "@/components/CardNav";

export default function MainNav() {
  const items: CardNavItem[] = [
    {
      label: "About",
      bgColor: "#0B1020",   // deep graphite blue
      textColor: "#E5E7EB", // soft white
      links: [
        { label: "Overview", href: "/about", ariaLabel: "About me" },
        { label: "Experience", href: "/experience", ariaLabel: "Experience" },
      ],
    },
    {
      label: "Projects",
      bgColor: "#0E162A",   // slightly lighter for depth
      textColor: "#E5E7EB",
      links: [
        { label: "Featured", href: "/projects", ariaLabel: "Featured projects" },
        { label: "Case Studies", href: "/projects/case-studies", ariaLabel: "Project case studies" },
      ],
    },
    {
      label: "Contact",
      bgColor: "#111C33",
      textColor: "#E5E7EB",
      links: [
        { label: "Email", href: "mailto:you@email.com", ariaLabel: "Email" },
        { label: "LinkedIn", href: "https://linkedin.com", ariaLabel: "LinkedIn" },
        { label: "GitHub", href: "https://github.com", ariaLabel: "GitHub" },
      ],
    },
  ];

  return (
    <CardNav
      logo="/logo-icon.png"
      logoAlt="Ujjwal Prakash"
      items={items}

      /* NAV SHELL */
      baseColor="rgba(5, 7, 13, 0.85)"        // near-black, not white
      menuColor="#9CA3AF"        // muted gray for hamburger

      /* CTA */
      buttonBgColor="#22D3EE"    // cyan accent
      buttonTextColor="#020617"  // near-black text

      ease="power3.out"
    />
  );
}
