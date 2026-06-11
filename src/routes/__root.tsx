import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";
import { Toaster } from "@/components/ui/sonner";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";

const SITE_URL = "https://kushakumar.lovable.app";
const SITE_TITLE = "Kusha Kumar NR — UX & Product Designer";
const SITE_DESC =
  "Portfolio of Kusha Kumar NR — Senior UX/Product Designer with 7+ years across e-learning, ecommerce, healthcare, finance and airlines.";

function NotFoundComponent() {
  return (
    <div className="flex min-h-dvh items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <p className="text-xs uppercase tracking-[0.25em] text-accent-blue mb-3">404</p>
        <h1 className="text-4xl font-semibold tracking-tight text-foreground">
          This page wandered off.
        </h1>
        <p className="mt-3 text-sm text-muted-foreground">
          The link may be broken or the page may have moved. Let's get you home.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-full bg-accent-blue px-5 py-2.5 text-sm font-medium text-primary-foreground transition hover:opacity-90"
          >
            Back to portfolio
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-dvh items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-foreground">
          This page didn't load
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Something went wrong. You can try again or head back home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-full bg-accent-blue px-4 py-2 text-sm font-medium text-primary-foreground transition hover:opacity-90"
          >
            Try again
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-full border border-hairline bg-background px-4 py-2 text-sm font-medium text-foreground transition hover:bg-surface-2"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
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
      { name: "twitter:description", content: SITE_DESC },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
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
    "https://shorturl.at/hquwJ",
  ],
  knowsAbout: [
    "User Experience Design",
    "Product Design",
    "Design Systems",
    "Accessibility",
    "User Research",
  ],
};

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Kusha Kumar NR — Portfolio",
  url: SITE_URL,
  author: { "@type": "Person", name: "Kusha Kumar NR" },
};

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <HeadContent />
        <script dangerouslySetInnerHTML={{ __html: bootstrapScript }} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      <main id="main">
        <Outlet />
      </main>
      <Toaster />
    </QueryClientProvider>
  );
}
