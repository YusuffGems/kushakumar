import projSaas from "@/assets/proj-saas.jpg";
import projAirline from "@/assets/proj-airline.jpg";
import projLearning from "@/assets/proj-learning.jpg";
import projHealth from "@/assets/proj-health.jpg";

export type Project = {
  slug: string;
  title: string;
  tag: string;
  blurb: string;
  image: string;
  gallery: string[];
  stack: string[];
  role: string;
  year: string;
  overview: string;
  links: { label: string; href: string }[];
};

const BEHANCE = "https://www.behance.net/kushinr619945f";

export const PROJECTS: Project[] = [
  {
    slug: "airline-booking-kiosk",
    title: "Airline Booking Kiosk",
    tag: "Airlines · UX/UI",
    blurb:
      "End-to-end kiosk and mobile flows for check-in, booking and live flight tracking at Spekond Technology.",
    image: projAirline,
    gallery: [projAirline, projSaas, projLearning],
    stack: ["Figma", "Prototyping", "Design System", "Accessibility (WCAG)", "User Testing"],
    role: "Lead UX/UI Designer",
    year: "2024 — 2025",
    overview:
      "Designed a unified booking and check-in experience across self-service kiosks, mobile and web. Focused on quick task completion under stressful airport conditions: large tap targets, glanceable status, and progressive disclosure for complex fare rules.",
    links: [{ label: "View on Behance", href: BEHANCE }],
  },
  {
    slug: "enterprise-saas-suite",
    title: "Enterprise SaaS Suite",
    tag: "Wipro · Senior UX",
    blurb:
      "Multi-product enterprise platform aligning design across finance and SaaS verticals with a shared system.",
    image: projSaas,
    gallery: [projSaas, projHealth, projAirline],
    stack: ["Figma", "Design Tokens", "Storybook", "React", "Cross-team Workshops"],
    role: "Senior UX Designer",
    year: "2025 — Present",
    overview:
      "Aligned several enterprise products under one design language. Defined tokens, components and patterns; ran cross-team workshops to harmonize information architecture and reduce duplicate flows.",
    links: [{ label: "View on Behance", href: BEHANCE }],
  },
  {
    slug: "pearson-learning-experience",
    title: "Pearson Learning Experience",
    tag: "E-learning · Research",
    blurb:
      "Qualitative and quantitative studies driving UX improvements with WCAG-grade accessibility for diverse learners.",
    image: projLearning,
    gallery: [projLearning, projSaas, projHealth],
    stack: ["User Research", "Usability Testing", "WCAG 2.1", "Figma", "A/B Testing"],
    role: "UX Designer",
    year: "2021 — 2023",
    overview:
      "Led research with learners and educators to identify friction in core learning tasks. Iterated wireframes through usability testing and shipped accessibility improvements meeting WCAG 2.1 AA.",
    links: [{ label: "View on Behance", href: BEHANCE }],
  },
  {
    slug: "healthcare-mvp",
    title: "Healthcare MVP",
    tag: "Healthcare · Strategy",
    blurb:
      "Research-led MVP from concept to clickable prototype, presented to founders and stakeholders for go/no-go.",
    image: projHealth,
    gallery: [projHealth, projLearning, projAirline],
    stack: ["Discovery Research", "Service Blueprint", "Figma", "Prototyping", "Stakeholder Workshops"],
    role: "UX Designer",
    year: "2019 — 2020",
    overview:
      "Translated provider and patient research into a focused MVP scope. Delivered a clickable prototype and a service blueprint that informed the founders' go/no-go decision.",
    links: [{ label: "View on Behance", href: BEHANCE }],
  },
];

export const getProject = (slug: string) => PROJECTS.find((p) => p.slug === slug);
