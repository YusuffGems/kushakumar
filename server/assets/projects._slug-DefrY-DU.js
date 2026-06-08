import { jsx, jsxs } from "react/jsx-runtime";
import { Link } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";
const SplitNotFoundComponent = () => /* @__PURE__ */ jsx("div", { className: "min-h-dvh grid place-items-center bg-background text-foreground px-4", children: /* @__PURE__ */ jsxs("div", { className: "text-center", children: [
  /* @__PURE__ */ jsx("p", { className: "text-xs uppercase tracking-[0.25em] text-accent-blue mb-3", children: "Not found" }),
  /* @__PURE__ */ jsx("h1", { className: "text-3xl font-semibold tracking-tight", children: "Project not available" }),
  /* @__PURE__ */ jsxs(Link, { to: "/", className: "mt-6 inline-flex items-center gap-2 text-accent-blue", children: [
    /* @__PURE__ */ jsx(ArrowLeft, { className: "size-4" }),
    " Back to portfolio"
  ] })
] }) });
export {
  SplitNotFoundComponent as notFoundComponent
};
