import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, ArrowUpRight, MessageCircle } from "lucide-react";
import { PROJECTS, getProject } from "@/data/projects";
import { whatsappLink } from "@/components/FloatingContact";

const SITE = "https://kushakumar.lovable.app";

export const Route = createFileRoute("/projects/$slug")({
  loader: ({ params }) => {
    const project = getProject(params.slug);
    if (!project) throw notFound();
    return { project };
  },
  head: ({ loaderData, params }) => {
    const p = loaderData?.project;
    const title = p ? `${p.title} — ${p.tag} | Kusha Kumar NR` : "Project — Kusha Kumar NR";
    const desc = p?.blurb ?? "Selected project case study.";
    const url = `${SITE}/projects/${params.slug}`;
    const image = p?.image ? (p.image.startsWith("http") ? p.image : `${SITE}${p.image}`) : undefined;
    const behance = p?.links.find((l) => /behance/i.test(l.href))?.href;

    const jsonLd = p
      ? {
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
            url: SITE,
          },
          creator: { "@type": "Person", name: "Kusha Kumar NR" },
          ...(behance ? { sameAs: [behance] } : {}),
        }
      : null;

    return {
      meta: [
        { title },
        { name: "description", content: desc },
        { property: "og:title", content: title },
        { property: "og:description", content: desc },
        { property: "og:type", content: "article" },
        { property: "og:url", content: url },
        { property: "article:author", content: "Kusha Kumar NR" },
        ...(p ? [{ property: "article:section", content: p.tag }] : []),
        ...(image ? [{ property: "og:image", content: image }, { name: "twitter:image", content: image }] : []),
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:title", content: title },
        { name: "twitter:description", content: desc },
      ],
      links: [{ rel: "canonical", href: url }],
      scripts: jsonLd
        ? [{ type: "application/ld+json", children: JSON.stringify(jsonLd) }]
        : [],
    };
  },
  component: ProjectPage,
  notFoundComponent: () => (
    <div className="min-h-dvh grid place-items-center bg-background text-foreground px-4">
      <div className="text-center">
        <p className="text-xs uppercase tracking-[0.25em] text-accent-blue mb-3">Not found</p>
        <h1 className="text-3xl font-semibold tracking-tight">Project not available</h1>
        <Link to="/" className="mt-6 inline-flex items-center gap-2 text-accent-blue">
          <ArrowLeft className="size-4" /> Back to portfolio
        </Link>
      </div>
    </div>
  ),
});

function ProjectPage() {
  const { project } = Route.useLoaderData() as { project: import("@/data/projects").Project };
  const others = PROJECTS.filter((p) => p.slug !== project.slug).slice(0, 3);

  return (
    <div className="min-h-dvh bg-background text-foreground">
      <header className="px-6 pt-8 max-w-5xl mx-auto">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-sm text-muted-ink hover:text-foreground transition"
        >
          <ArrowLeft className="size-4" /> Back to portfolio
        </Link>
      </header>

      <article className="px-6 py-12 max-w-5xl mx-auto">
        <p className="text-xs uppercase tracking-[0.2em] text-accent-blue mb-3">{project.tag}</p>
        <h1 className="text-4xl md:text-6xl font-semibold tracking-tight">{project.title}</h1>
        <p className="mt-5 text-muted-ink max-w-2xl text-lg leading-relaxed">{project.blurb}</p>

        <div className="mt-10 grid sm:grid-cols-3 gap-4 text-sm">
          <Meta label="Role" value={project.role} />
          <Meta label="Year" value={project.year} />
          <Meta label="Tag" value={project.tag} />
        </div>

        <div className="mt-12 rounded-3xl border border-hairline overflow-hidden bg-surface">
          <img
            src={project.image}
            alt={project.title}
            width={1600}
            height={1000}
            loading="eager"
            decoding="async"
            sizes="(min-width: 1024px) 1024px, 100vw"
            className="w-full h-auto object-cover"
          />
        </div>

        <section className="mt-16 grid md:grid-cols-3 gap-10">
          <div className="md:col-span-2">
            <h2 className="text-2xl font-semibold tracking-tight">Overview</h2>
            <p className="mt-4 text-muted-ink leading-relaxed">{project.overview}</p>
          </div>
          <aside>
            <h3 className="text-xs uppercase tracking-[0.2em] text-muted-ink mb-3">Tech & tools</h3>
            <div className="flex flex-wrap gap-2">
              {project.stack.map((s) => (
                <span
                  key={s}
                  className="px-3 py-1.5 rounded-full bg-surface-2 text-muted-ink text-xs border border-hairline"
                >
                  {s}
                </span>
              ))}
            </div>
            <div className="mt-6 flex flex-col gap-2">
              {project.links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-between gap-2 px-4 py-2.5 rounded-full bg-accent-blue text-primary-foreground text-sm hover:opacity-90 transition"
                >
                  {l.label} <ArrowUpRight className="size-4" />
                </a>
              ))}
              <a
                href={whatsappLink(`Hi Kusha, I saw your "${project.title}" project on your portfolio and would love to chat about it.`)}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-between gap-2 px-4 py-2.5 rounded-full border border-emerald-500/40 bg-emerald-500/10 text-emerald-500 text-sm hover:bg-emerald-500/20 transition"
              >
                Chat about this on WhatsApp <MessageCircle className="size-4" />
              </a>
            </div>
          </aside>
        </section>

        <section className="mt-16">
          <h2 className="text-2xl font-semibold tracking-tight mb-6">Gallery</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {project.gallery.map((g, i) => (
              <div
                key={g + i}
                className="rounded-2xl border border-hairline overflow-hidden bg-surface"
              >
                <img
                  src={g}
                  alt={`${project.title} — visual ${i + 1}`}
                  width={1280}
                  height={800}
                  loading="lazy"
                  decoding="async"
                  sizes="(min-width: 768px) 50vw, 100vw"
                  className="w-full h-auto object-cover"
                />
              </div>
            ))}
          </div>
        </section>

        {others.length > 0 && (
          <section className="mt-20">
            <h2 className="text-2xl font-semibold tracking-tight mb-6">More projects</h2>
            <div className="grid sm:grid-cols-3 gap-4">
              {others.map((o) => (
                <Link
                  key={o.slug}
                  to="/projects/$slug"
                  params={{ slug: o.slug }}
                  className="group block rounded-2xl border border-hairline bg-surface overflow-hidden hover:border-accent-blue/40 transition"
                >
                  <div className="aspect-[16/10] overflow-hidden">
                    <img
                      src={o.image}
                      alt={o.title}
                      width={640}
                      height={400}
                      loading="lazy"
                      decoding="async"
                      sizes="(min-width: 768px) 33vw, 100vw"
                      className="w-full h-full object-cover transition duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-4">
                    <div className="text-[11px] uppercase tracking-[0.18em] text-accent-blue">
                      {o.tag}
                    </div>
                    <h3 className="text-sm font-semibold mt-1">{o.title}</h3>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        )}
      </article>
    </div>
  );
}

function Meta({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-2xl border border-hairline bg-surface p-4">
      <div className="text-[10px] uppercase tracking-[0.2em] text-muted-ink">{label}</div>
      <div className="mt-1 text-foreground">{value}</div>
    </div>
  );
}
