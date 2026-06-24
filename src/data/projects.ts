import projSaas from "@/assets/proj-saas.jpg";
import projAirline from "@/assets/proj-airline.jpg";
import projLearning from "@/assets/proj-learning.jpg";
import projHealth from "@/assets/proj-health.jpg";
import Traveli from "@/assets/travell.png";
import noon from "@/assets/noon.jpeg";
import Digisite from "@/assets/Digisite Construction..jpeg";
import Joco from "@/assets/Joco.jpeg";
import noonCaseStudy from "@/assets/Noon case study.pdf";


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
   {
  slug: "traveli-booking-website",
  title: "Traveli Booking Website",
  tag: "Traveli Booking Website",
  blurb: "UI | UX / Travel Booking Platform",
  image: Traveli,
  gallery: [projHealth, projLearning, projAirline],
  stack: [
    "Discovery Research",
    "Service Blueprint",
    "Figma",
    "Prototyping",
    "Stakeholder Workshops",
  ],
  role: "UX Designer",
  year: "2019 — 2020",
  overview:
    "Designed a travel booking platform focused on seamless flight, hotel, and holiday package reservations. Conducted user research, created wireframes, high-fidelity UI designs, and interactive prototypes in Figma.",
  links: [
    {
      label: "View Prototype",
      href: "https://www.figma.com/proto/5dAWRVW9ghyzJpI7hlZTOt/Booking-Website?node-id=0-6534&t=X14bWxtTvQXWfS9r-1&scaling=scale-down-width&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=0%3A8831",
      
    },
  ],
},
{
  slug: "Special Studens learning application",
  title: "Special Studens learning application",
  tag: "Special Studens learning application",
  blurb: "UI | UX / Travel Booking Platform",
  image: projHealth,
  gallery: [projHealth, projLearning, projAirline],
  stack: [
    "Discovery Research",
    "Service Blueprint",
    "Figma",
    "Prototyping",
    "Stakeholder Workshops",
  ],
  role: "UX Designer",
  year: "2019 — 2020",
  overview:
    "Designed a travel booking platform focused on seamless flight, hotel, and holiday package reservations. Conducted user research, created wireframes, high-fidelity UI designs, and interactive prototypes in Figma.",
  links: [
    {
      label: "View Prototype",
      href: "https://drums-best-17582408.figma.site/student/learning",
      
    },
  ],
},
{
  slug: "E-Learning Web application",
  title: "E-Learning Web application",
  tag: "E-Learning Web application",
  blurb: "UI | UX / Travel Booking Platform",
  image: projHealth,
  gallery: [projHealth, projLearning, projAirline],
  stack: [
    "Discovery Research",
    "Service Blueprint",
    "Figma",
    "Prototyping",
    "Stakeholder Workshops",
  ],
  role: "UX Designer",
  year: "2019 — 2020",
  overview:
    "Designed a travel booking platform focused on seamless flight, hotel, and holiday package reservations. Conducted user research, created wireframes, high-fidelity UI designs, and interactive prototypes in Figma.",
  links: [
    {
      label: "View Prototype",
      href: "https://xd.adobe.com/view/ab482d9d-7e86-44e4-b28c-3fbc3244357b-fe1b/screen/0bc803d5-070c-4fdb-aed0-19825fd3a966",
      
    },
  ],
},
  {
    slug: "Digisite Construction",
    title: "Construction",
    tag: "Digisite Construction",
    blurb: "UX Case Study | FinTech / Wealth Management",
    image: Digisite,
    gallery: [projHealth, projLearning, projAirline],
    stack: [
      "Discovery Research",
      "Service Blueprint",
      "Figma",
      "Prototyping",
      "Stakeholder Workshops",
    ],
    role: "UX Designer",
    year: "2019 — 2020",
    overview:
      "Translated provider and patient research into a focused MVP scope. Delivered a clickable prototype and a service blueprint that informed the founders' go/no-go decision.",
    links: [
      {
        label: "View",
        href: "https://www.figma.com/proto/87YX5yu9GswvJuQHpjaDaq/Grafft?node-id=1-100&t=XlttebBME2cxktF1-1&scaling=scale-down-width&content-scaling=fixed&page-id=0%3A1",
      },
    ],
  },
  {
    slug: "Advisorkhoj – Financial Advisory Platform",
    title: "Advisorkhoj",
    tag: "Advisorkhoj – Financial Advisory Platform",
    blurb: "UX Case Study | FinTech / Wealth Management",
    image: projHealth,
    gallery: [projHealth, projLearning, projAirline],
    stack: [
      "Discovery Research",
      "Service Blueprint",
      "Figma",
      "Prototyping",
      "Stakeholder Workshops",
    ],
    role: "UX Designer",
    year: "2019 — 2020",
    overview:
      "Translated provider and patient research into a focused MVP scope. Delivered a clickable prototype and a service blueprint that informed the founders' go/no-go decision.",
    links: [
      {
        label: "View",
        href: "https://bunch-robin-31308520.figma.site/",
      },
    ],
  },
  {
    slug: "ecommerce-application",
    title: "Ecommerce Application",
    tag: "Ecommerce Application",
    blurb: "UI/UX Case Study",
    image: noon,
    gallery: [projHealth, projLearning, projAirline],
    stack: [
      "User Research",
      "Wireframing",
      "UI Design",
      "Figma",
      "Prototyping",
    ],
    role: "UI/UX Designer",
    year: "2024",
    overview:
      "Designed a modern ecommerce platform focused on improving product discovery, seamless checkout, and enhanced user experience across web and mobile devices.",
    links: [
      {
        label: "View",
        href: noonCaseStudy,
      },
    ],

  },
  {
    slug: "JOCO Airlines –  Case Study",
    title: "JOCO Airlines",
    tag: "JOCO Airlines",
    blurb: "UX Case Study | FinTech / Wealth Management",
    image: Joco,
    gallery: [projHealth, projLearning, projAirline],
    stack: [
      "Discovery Research",
      "Service Blueprint",
      "Figma",
      "Prototyping",
      "Stakeholder Workshops",
    ],
    role: "UX Designer",
    year: "2019 — 2020",
    overview:
      "Translated provider and patient research into a focused MVP scope. Delivered a clickable prototype and a service blueprint that informed the founders' go/no-go decision.",
    links: [
      {
        label: "View",
        href: "https://www.figma.com/proto/sBrwKPjjdnJEIVQhWFBuKz/Casey---UX-Case-Study-Template--Community-?node-id=2846-16701&t=WwS5In4BLXtqzgxU-1&scaling=scale-down-width&content-scaling=fixed&page-id=207%3A1975",
      },
      
    ],
  },
 


];

export const getProject = (slug: string) => PROJECTS.find((p) => p.slug === slug);
