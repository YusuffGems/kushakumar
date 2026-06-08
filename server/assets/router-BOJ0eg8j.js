import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { createRootRouteWithContext, useRouter, Link, Outlet, HeadContent, Scripts, createFileRoute, lazyRouteComponent, notFound, createRouter } from "@tanstack/react-router";
import { jsx, jsxs } from "react/jsx-runtime";
import { useEffect } from "react";
import { Toaster as Toaster$1 } from "sonner";
const Toaster = ({ ...props }) => {
  return /* @__PURE__ */ jsx(
    Toaster$1,
    {
      className: "toaster group",
      toastOptions: {
        classNames: {
          toast: "group toast group-[.toaster]:bg-background group-[.toaster]:text-foreground group-[.toaster]:border-border group-[.toaster]:shadow-lg",
          description: "group-[.toast]:text-muted-foreground",
          actionButton: "group-[.toast]:bg-primary group-[.toast]:text-primary-foreground",
          cancelButton: "group-[.toast]:bg-muted group-[.toast]:text-muted-foreground"
        }
      },
      ...props
    }
  );
};
const appCss = "/assets/styles-BHckvipH.css";
function reportLovableError(error, context = {}) {
  if (typeof window === "undefined") return;
  window.__lovableEvents?.captureException?.(
    error,
    {
      source: "react_error_boundary",
      route: window.location.pathname,
      ...context
    },
    {
      mechanism: "react_error_boundary",
      handled: false,
      severity: "error"
    }
  );
}
const SITE_URL = "https://kushakumar.lovable.app";
const SITE_TITLE = "Kusha Kumar NR — UX & Product Designer";
const SITE_DESC = "Portfolio of Kusha Kumar NR — Senior UX/Product Designer with 7+ years across e-learning, ecommerce, healthcare, finance and airlines.";
function NotFoundComponent() {
  return /* @__PURE__ */ jsx("div", { className: "flex min-h-dvh items-center justify-center bg-background px-4", children: /* @__PURE__ */ jsxs("div", { className: "max-w-md text-center", children: [
    /* @__PURE__ */ jsx("p", { className: "text-xs uppercase tracking-[0.25em] text-accent-blue mb-3", children: "404" }),
    /* @__PURE__ */ jsx("h1", { className: "text-4xl font-semibold tracking-tight text-foreground", children: "This page wandered off." }),
    /* @__PURE__ */ jsx("p", { className: "mt-3 text-sm text-muted-foreground", children: "The link may be broken or the page may have moved. Let's get you home." }),
    /* @__PURE__ */ jsx("div", { className: "mt-6", children: /* @__PURE__ */ jsx(
      Link,
      {
        to: "/",
        className: "inline-flex items-center justify-center rounded-full bg-accent-blue px-5 py-2.5 text-sm font-medium text-primary-foreground transition hover:opacity-90",
        children: "Back to portfolio"
      }
    ) })
  ] }) });
}
function ErrorComponent({ error, reset }) {
  console.error(error);
  const router2 = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);
  return /* @__PURE__ */ jsx("div", { className: "flex min-h-dvh items-center justify-center bg-background px-4", children: /* @__PURE__ */ jsxs("div", { className: "max-w-md text-center", children: [
    /* @__PURE__ */ jsx("h1", { className: "text-xl font-semibold tracking-tight text-foreground", children: "This page didn't load" }),
    /* @__PURE__ */ jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: "Something went wrong. You can try again or head back home." }),
    /* @__PURE__ */ jsxs("div", { className: "mt-6 flex flex-wrap justify-center gap-2", children: [
      /* @__PURE__ */ jsx(
        "button",
        {
          onClick: () => {
            router2.invalidate();
            reset();
          },
          className: "inline-flex items-center justify-center rounded-full bg-accent-blue px-4 py-2 text-sm font-medium text-primary-foreground transition hover:opacity-90",
          children: "Try again"
        }
      ),
      /* @__PURE__ */ jsx(
        "a",
        {
          href: "/",
          className: "inline-flex items-center justify-center rounded-full border border-hairline bg-background px-4 py-2 text-sm font-medium text-foreground transition hover:bg-surface-2",
          children: "Go home"
        }
      )
    ] })
  ] }) });
}
const Route$3 = createRootRouteWithContext()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: SITE_TITLE },
      { name: "description", content: SITE_DESC },
      { name: "author", content: "Kusha Kumar NR" },
      { name: "theme-color", content: "#0b0b0f" },
      { property: "og:title", content: SITE_TITLE },
      { property: "og:description", content: SITE_DESC },
      { property: "og:type", content: "website" },
      { property: "og:site_name", content: "Kusha Kumar NR" },
      { property: "og:url", content: SITE_URL },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: SITE_TITLE },
      { name: "twitter:description", content: SITE_DESC }
    ],
    links: [
      { rel: "stylesheet", href: appCss }
    ]
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent
});
const bootstrapScript = `(function(){
  try {
    var t = localStorage.getItem('theme');
    var d = t ? t === 'dark' : true;
    if (d) document.documentElement.classList.add('dark');
    if (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      document.documentElement.classList.add('reduced-motion');
    }
  } catch(e) {
    document.documentElement.classList.add('dark');
  }
})();`;
const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Kusha Kumar NR",
  jobTitle: "Senior UX & Product Designer",
  url: SITE_URL,
  email: "mailto:Kushnr192@gmail.com",
  telephone: "+91-73536-80966",
  worksFor: { "@type": "Organization", name: "Wipro" },
  sameAs: [
    "https://www.behance.net/kushinr619945f",
    "https://shorturl.at/hquwJ"
  ],
  knowsAbout: [
    "User Experience Design",
    "Product Design",
    "Design Systems",
    "Accessibility",
    "User Research"
  ]
};
const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Kusha Kumar NR — Portfolio",
  url: SITE_URL,
  author: { "@type": "Person", name: "Kusha Kumar NR" }
};
function RootShell({ children }) {
  return /* @__PURE__ */ jsxs("html", { lang: "en", suppressHydrationWarning: true, children: [
    /* @__PURE__ */ jsxs("head", { children: [
      /* @__PURE__ */ jsx(HeadContent, {}),
      /* @__PURE__ */ jsx("script", { dangerouslySetInnerHTML: { __html: bootstrapScript } }),
      /* @__PURE__ */ jsx(
        "script",
        {
          type: "application/ld+json",
          dangerouslySetInnerHTML: { __html: JSON.stringify(personJsonLd) }
        }
      ),
      /* @__PURE__ */ jsx(
        "script",
        {
          type: "application/ld+json",
          dangerouslySetInnerHTML: { __html: JSON.stringify(websiteJsonLd) }
        }
      )
    ] }),
    /* @__PURE__ */ jsxs("body", { children: [
      children,
      /* @__PURE__ */ jsx(Scripts, {})
    ] })
  ] });
}
function RootComponent() {
  const { queryClient } = Route$3.useRouteContext();
  return /* @__PURE__ */ jsxs(QueryClientProvider, { client: queryClient, children: [
    /* @__PURE__ */ jsx("main", { id: "main", children: /* @__PURE__ */ jsx(Outlet, {}) }),
    /* @__PURE__ */ jsx(Toaster, {})
  ] });
}
const projSaas = "/assets/proj-saas-DtYkTl9x.jpg";
const projAirline = "/assets/proj-airline-CjURvRnT.jpg";
const projLearning = "/assets/proj-learning-CYrhkw60.jpg";
const projHealth = "/assets/proj-health-0iMEd4oA.jpg";
const BEHANCE = "https://www.behance.net/kushinr619945f";
const PROJECTS = [
  {
    slug: "airline-booking-kiosk",
    title: "Airline Booking Kiosk",
    tag: "Airlines · UX/UI",
    blurb: "End-to-end kiosk and mobile flows for check-in, booking and live flight tracking at Spekond Technology.",
    image: projAirline,
    gallery: [projAirline, projSaas, projLearning],
    stack: ["Figma", "Prototyping", "Design System", "Accessibility (WCAG)", "User Testing"],
    role: "Lead UX/UI Designer",
    year: "2024 — 2025",
    overview: "Designed a unified booking and check-in experience across self-service kiosks, mobile and web. Focused on quick task completion under stressful airport conditions: large tap targets, glanceable status, and progressive disclosure for complex fare rules.",
    links: [{ label: "View on Behance", href: BEHANCE }]
  },
  {
    slug: "enterprise-saas-suite",
    title: "Enterprise SaaS Suite",
    tag: "Wipro · Senior UX",
    blurb: "Multi-product enterprise platform aligning design across finance and SaaS verticals with a shared system.",
    image: projSaas,
    gallery: [projSaas, projHealth, projAirline],
    stack: ["Figma", "Design Tokens", "Storybook", "React", "Cross-team Workshops"],
    role: "Senior UX Designer",
    year: "2025 — Present",
    overview: "Aligned several enterprise products under one design language. Defined tokens, components and patterns; ran cross-team workshops to harmonize information architecture and reduce duplicate flows.",
    links: [{ label: "View on Behance", href: BEHANCE }]
  },
  {
    slug: "pearson-learning-experience",
    title: "Pearson Learning Experience",
    tag: "E-learning · Research",
    blurb: "Qualitative and quantitative studies driving UX improvements with WCAG-grade accessibility for diverse learners.",
    image: projLearning,
    gallery: [projLearning, projSaas, projHealth],
    stack: ["User Research", "Usability Testing", "WCAG 2.1", "Figma", "A/B Testing"],
    role: "UX Designer",
    year: "2021 — 2023",
    overview: "Led research with learners and educators to identify friction in core learning tasks. Iterated wireframes through usability testing and shipped accessibility improvements meeting WCAG 2.1 AA.",
    links: [{ label: "View on Behance", href: BEHANCE }]
  },
  {
    slug: "healthcare-mvp",
    title: "Healthcare MVP",
    tag: "Healthcare · Strategy",
    blurb: "Research-led MVP from concept to clickable prototype, presented to founders and stakeholders for go/no-go.",
    image: projHealth,
    gallery: [projHealth, projLearning, projAirline],
    stack: ["Discovery Research", "Service Blueprint", "Figma", "Prototyping", "Stakeholder Workshops"],
    role: "UX Designer",
    year: "2019 — 2020",
    overview: "Translated provider and patient research into a focused MVP scope. Delivered a clickable prototype and a service blueprint that informed the founders' go/no-go decision.",
    links: [{ label: "View on Behance", href: BEHANCE }]
  }
];
const getProject = (slug) => PROJECTS.find((p) => p.slug === slug);
const BASE_URL = "https://kushakumar.lovable.app";
const Route$2 = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: async () => {
        const entries = [
          { path: "/", changefreq: "weekly", priority: "1.0" },
          ...PROJECTS.map((p) => ({
            path: `/projects/${p.slug}`,
            changefreq: "monthly",
            priority: "0.8"
          }))
        ];
        const urls = entries.map(
          (e) => [
            `  <url>`,
            `    <loc>${BASE_URL}${e.path}</loc>`,
            e.changefreq ? `    <changefreq>${e.changefreq}</changefreq>` : null,
            e.priority ? `    <priority>${e.priority}</priority>` : null,
            `  </url>`
          ].filter(Boolean).join("\n")
        ).join("\n");
        const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>`;
        return new Response(xml, {
          headers: {
            "Content-Type": "application/xml",
            "Cache-Control": "public, max-age=3600"
          }
        });
      }
    }
  }
});
const $$splitComponentImporter$1 = () => import("./index-CV57eO-n.js");
const Route$1 = createFileRoute("/")({
  head: () => ({
    meta: [{
      title: "Kusha Kumar NR — UX & Product Designer"
    }, {
      name: "description",
      content: "UX and Product Designer (HFI CUA) with 7+ years of experience designing human-centered products across e-learning, ecommerce, healthcare, finance and airlines."
    }, {
      property: "og:title",
      content: "Kusha Kumar NR — UX & Product Designer"
    }, {
      property: "og:description",
      content: "Senior UX/UI Designer crafting intuitive, accessible products. Currently at Wipro."
    }, {
      property: "og:url",
      content: "https://kushakumar.lovable.app/"
    }],
    links: [{
      rel: "canonical",
      href: "https://kushakumar.lovable.app/"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$1, "component")
});
const $$splitNotFoundComponentImporter = () => import("./projects._slug-DefrY-DU.js");
const $$splitComponentImporter = () => import("./projects._slug-C4F_TUmf.js");
const SITE = "https://kushakumar.lovable.app";
const Route = createFileRoute("/projects/$slug")({
  loader: ({
    params
  }) => {
    const project = getProject(params.slug);
    if (!project) throw notFound();
    return {
      project
    };
  },
  head: ({
    loaderData,
    params
  }) => {
    const p = loaderData?.project;
    const title = p ? `${p.title} — ${p.tag} | Kusha Kumar NR` : "Project — Kusha Kumar NR";
    const desc = p?.blurb ?? "Selected project case study.";
    const url = `${SITE}/projects/${params.slug}`;
    const image = p?.image ? p.image.startsWith("http") ? p.image : `${SITE}${p.image}` : void 0;
    const behance = p?.links.find((l) => /behance/i.test(l.href))?.href;
    const jsonLd = p ? {
      "@context": "https://schema.org",
      "@type": "CreativeWork",
      name: p.title,
      headline: p.title,
      description: p.blurb,
      about: p.tag,
      url,
      image,
      datePublished: p.year,
      keywords: p.stack.join(", "),
      author: {
        "@type": "Person",
        name: "Kusha Kumar NR",
        jobTitle: p.role,
        url: SITE
      },
      creator: {
        "@type": "Person",
        name: "Kusha Kumar NR"
      },
      ...behance ? {
        sameAs: [behance]
      } : {}
    } : null;
    return {
      meta: [{
        title
      }, {
        name: "description",
        content: desc
      }, {
        property: "og:title",
        content: title
      }, {
        property: "og:description",
        content: desc
      }, {
        property: "og:type",
        content: "article"
      }, {
        property: "og:url",
        content: url
      }, {
        property: "article:author",
        content: "Kusha Kumar NR"
      }, ...p ? [{
        property: "article:section",
        content: p.tag
      }] : [], ...image ? [{
        property: "og:image",
        content: image
      }, {
        name: "twitter:image",
        content: image
      }] : [], {
        name: "twitter:card",
        content: "summary_large_image"
      }, {
        name: "twitter:title",
        content: title
      }, {
        name: "twitter:description",
        content: desc
      }],
      links: [{
        rel: "canonical",
        href: url
      }],
      scripts: jsonLd ? [{
        type: "application/ld+json",
        children: JSON.stringify(jsonLd)
      }] : []
    };
  },
  component: lazyRouteComponent($$splitComponentImporter, "component"),
  notFoundComponent: lazyRouteComponent($$splitNotFoundComponentImporter, "notFoundComponent")
});
const SitemapDotxmlRoute = Route$2.update({
  id: "/sitemap.xml",
  path: "/sitemap.xml",
  getParentRoute: () => Route$3
});
const IndexRoute = Route$1.update({
  id: "/",
  path: "/",
  getParentRoute: () => Route$3
});
const ProjectsSlugRoute = Route.update({
  id: "/projects/$slug",
  path: "/projects/$slug",
  getParentRoute: () => Route$3
});
const rootRouteChildren = {
  IndexRoute,
  SitemapDotxmlRoute,
  ProjectsSlugRoute
};
const routeTree = Route$3._addFileChildren(rootRouteChildren)._addFileTypes();
const getRouter = () => {
  const queryClient = new QueryClient();
  const router2 = createRouter({
    routeTree,
    context: { queryClient },
    scrollRestoration: true,
    defaultPreloadStaleTime: 0
  });
  return router2;
};
const router = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  getRouter
}, Symbol.toStringTag, { value: "Module" }));
export {
  PROJECTS as P,
  Route as R,
  router as r
};
