import { jsxs, jsx } from "react/jsx-runtime";
import { Link } from "@tanstack/react-router";
import { ArrowLeft, ArrowUpRight, MessageCircle } from "lucide-react";
import { R as Route, P as PROJECTS } from "./router-BOJ0eg8j.js";
import { w as whatsappLink } from "./FloatingContact-BbsHJ19-.js";
import "@tanstack/react-query";
import "react";
import "sonner";
function ProjectPage() {
  const {
    project
  } = Route.useLoaderData();
  const others = PROJECTS.filter((p) => p.slug !== project.slug).slice(0, 3);
  return /* @__PURE__ */ jsxs("div", { className: "min-h-dvh bg-background text-foreground", children: [
    /* @__PURE__ */ jsx("header", { className: "px-6 pt-8 max-w-5xl mx-auto", children: /* @__PURE__ */ jsxs(Link, { to: "/", className: "inline-flex items-center gap-2 text-sm text-muted-ink hover:text-foreground transition", children: [
      /* @__PURE__ */ jsx(ArrowLeft, { className: "size-4" }),
      " Back to portfolio"
    ] }) }),
    /* @__PURE__ */ jsxs("article", { className: "px-6 py-12 max-w-5xl mx-auto", children: [
      /* @__PURE__ */ jsx("p", { className: "text-xs uppercase tracking-[0.2em] text-accent-blue mb-3", children: project.tag }),
      /* @__PURE__ */ jsx("h1", { className: "text-4xl md:text-6xl font-semibold tracking-tight", children: project.title }),
      /* @__PURE__ */ jsx("p", { className: "mt-5 text-muted-ink max-w-2xl text-lg leading-relaxed", children: project.blurb }),
      /* @__PURE__ */ jsxs("div", { className: "mt-10 grid sm:grid-cols-3 gap-4 text-sm", children: [
        /* @__PURE__ */ jsx(Meta, { label: "Role", value: project.role }),
        /* @__PURE__ */ jsx(Meta, { label: "Year", value: project.year }),
        /* @__PURE__ */ jsx(Meta, { label: "Tag", value: project.tag })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "mt-12 rounded-3xl border border-hairline overflow-hidden bg-surface", children: /* @__PURE__ */ jsx("img", { src: project.image, alt: project.title, width: 1600, height: 1e3, loading: "eager", decoding: "async", sizes: "(min-width: 1024px) 1024px, 100vw", className: "w-full h-auto object-cover" }) }),
      /* @__PURE__ */ jsxs("section", { className: "mt-16 grid md:grid-cols-3 gap-10", children: [
        /* @__PURE__ */ jsxs("div", { className: "md:col-span-2", children: [
          /* @__PURE__ */ jsx("h2", { className: "text-2xl font-semibold tracking-tight", children: "Overview" }),
          /* @__PURE__ */ jsx("p", { className: "mt-4 text-muted-ink leading-relaxed", children: project.overview })
        ] }),
        /* @__PURE__ */ jsxs("aside", { children: [
          /* @__PURE__ */ jsx("h3", { className: "text-xs uppercase tracking-[0.2em] text-muted-ink mb-3", children: "Tech & tools" }),
          /* @__PURE__ */ jsx("div", { className: "flex flex-wrap gap-2", children: project.stack.map((s) => /* @__PURE__ */ jsx("span", { className: "px-3 py-1.5 rounded-full bg-surface-2 text-muted-ink text-xs border border-hairline", children: s }, s)) }),
          /* @__PURE__ */ jsxs("div", { className: "mt-6 flex flex-col gap-2", children: [
            project.links.map((l) => /* @__PURE__ */ jsxs("a", { href: l.href, target: "_blank", rel: "noreferrer", className: "inline-flex items-center justify-between gap-2 px-4 py-2.5 rounded-full bg-accent-blue text-primary-foreground text-sm hover:opacity-90 transition", children: [
              l.label,
              " ",
              /* @__PURE__ */ jsx(ArrowUpRight, { className: "size-4" })
            ] }, l.href)),
            /* @__PURE__ */ jsxs("a", { href: whatsappLink(`Hi Kusha, I saw your "${project.title}" project on your portfolio and would love to chat about it.`), target: "_blank", rel: "noreferrer", className: "inline-flex items-center justify-between gap-2 px-4 py-2.5 rounded-full border border-emerald-500/40 bg-emerald-500/10 text-emerald-500 text-sm hover:bg-emerald-500/20 transition", children: [
              "Chat about this on WhatsApp ",
              /* @__PURE__ */ jsx(MessageCircle, { className: "size-4" })
            ] })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("section", { className: "mt-16", children: [
        /* @__PURE__ */ jsx("h2", { className: "text-2xl font-semibold tracking-tight mb-6", children: "Gallery" }),
        /* @__PURE__ */ jsx("div", { className: "grid sm:grid-cols-2 gap-4", children: project.gallery.map((g, i) => /* @__PURE__ */ jsx("div", { className: "rounded-2xl border border-hairline overflow-hidden bg-surface", children: /* @__PURE__ */ jsx("img", { src: g, alt: `${project.title} — visual ${i + 1}`, width: 1280, height: 800, loading: "lazy", decoding: "async", sizes: "(min-width: 768px) 50vw, 100vw", className: "w-full h-auto object-cover" }) }, g + i)) })
      ] }),
      others.length > 0 && /* @__PURE__ */ jsxs("section", { className: "mt-20", children: [
        /* @__PURE__ */ jsx("h2", { className: "text-2xl font-semibold tracking-tight mb-6", children: "More projects" }),
        /* @__PURE__ */ jsx("div", { className: "grid sm:grid-cols-3 gap-4", children: others.map((o) => /* @__PURE__ */ jsxs(Link, { to: "/projects/$slug", params: {
          slug: o.slug
        }, className: "group block rounded-2xl border border-hairline bg-surface overflow-hidden hover:border-accent-blue/40 transition", children: [
          /* @__PURE__ */ jsx("div", { className: "aspect-[16/10] overflow-hidden", children: /* @__PURE__ */ jsx("img", { src: o.image, alt: o.title, width: 640, height: 400, loading: "lazy", decoding: "async", sizes: "(min-width: 768px) 33vw, 100vw", className: "w-full h-full object-cover transition duration-500 group-hover:scale-105" }) }),
          /* @__PURE__ */ jsxs("div", { className: "p-4", children: [
            /* @__PURE__ */ jsx("div", { className: "text-[11px] uppercase tracking-[0.18em] text-accent-blue", children: o.tag }),
            /* @__PURE__ */ jsx("h3", { className: "text-sm font-semibold mt-1", children: o.title })
          ] })
        ] }, o.slug)) })
      ] })
    ] })
  ] });
}
function Meta({
  label,
  value
}) {
  return /* @__PURE__ */ jsxs("div", { className: "rounded-2xl border border-hairline bg-surface p-4", children: [
    /* @__PURE__ */ jsx("div", { className: "text-[10px] uppercase tracking-[0.2em] text-muted-ink", children: label }),
    /* @__PURE__ */ jsx("div", { className: "mt-1 text-foreground", children: value })
  ] });
}
export {
  ProjectPage as component
};
