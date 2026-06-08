import { jsx, jsxs, Fragment } from "react/jsx-runtime";
import { Link } from "@tanstack/react-router";
import { Sun, Moon, Loader2, Send, Mail, ArrowUpRight, Linkedin, Home, FolderOpen, Briefcase, Award, Zap, FileText } from "lucide-react";
import { useRef, useEffect, Children, isValidElement, useState } from "react";
import { z } from "zod";
import { toast } from "sonner";
import { F as FloatingContact } from "./FloatingContact-BbsHJ19-.js";
import { P as PROJECTS } from "./router-BOJ0eg8j.js";
import "@tanstack/react-query";
let sharedObserver = null;
const targets = /* @__PURE__ */ new WeakMap();
function getObserver() {
  if (typeof window === "undefined") return null;
  if (sharedObserver) return sharedObserver;
  sharedObserver = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue;
        const el = entry.target;
        const cfg = targets.get(el);
        if (!cfg) continue;
        requestAnimationFrame(() => {
          el.style.transitionDelay = `${cfg.delay}ms`;
          el.style.opacity = "1";
          el.style.transform = "translate3d(0,0,0)";
          window.setTimeout(() => {
            el.style.willChange = "auto";
            el.style.transition = "";
          }, cfg.duration + cfg.delay + 50);
        });
        sharedObserver.unobserve(el);
        targets.delete(el);
      }
    },
    { threshold: 0.05, rootMargin: "0px 0px -8% 0px" }
  );
  return sharedObserver;
}
function prefersReducedMotion() {
  if (typeof window === "undefined") return false;
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}
function ScrollReveal({
  children,
  delay = 0,
  className = "",
  y = 20,
  duration = 700
}) {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const reduced = prefersReducedMotion();
    if (reduced) {
      el.style.opacity = "1";
      el.style.transform = "none";
      return;
    }
    el.style.opacity = "0";
    el.style.transform = `translate3d(0,${y}px,0)`;
    el.style.transition = `opacity ${duration}ms ease, transform ${duration}ms cubic-bezier(.2,.7,.2,1)`;
    el.style.willChange = "opacity, transform";
    const obs = getObserver();
    if (!obs) {
      el.style.opacity = "1";
      el.style.transform = "none";
      return;
    }
    targets.set(el, { delay, duration, reduced });
    obs.observe(el);
    return () => {
      obs.unobserve(el);
      targets.delete(el);
    };
  }, [delay, duration, y]);
  return /* @__PURE__ */ jsx("div", { ref, className, children });
}
function Stagger({
  children,
  start = 0,
  step = 90,
  className = "",
  ...rest
}) {
  const arr = Children.toArray(children);
  return /* @__PURE__ */ jsx("div", { className, children: arr.map((child, i) => {
    const key = isValidElement(child) ? child.key ?? i : i;
    return /* @__PURE__ */ jsx(ScrollReveal, { delay: start + i * step, ...rest, children: child }, key);
  }) });
}
const portraitA = "/assets/portrait-a-7BLo3se1.jpg";
const portraitB = "/assets/portrait-b-OkYoELyz.jpg";
function HoverPortrait() {
  const wrap = useRef(null);
  const [pos, setPos] = useState({ x: 50, y: 50 });
  const [active, setActive] = useState(false);
  const [isTouch, setIsTouch] = useState(false);
  useEffect(() => {
    const touch = window.matchMedia("(hover: none)").matches;
    setIsTouch(touch);
    if (touch) {
      setActive(true);
      setPos({ x: 50, y: 50 });
    }
  }, []);
  const onMove = (e) => {
    if (isTouch) return;
    const r = wrap.current?.getBoundingClientRect();
    if (!r) return;
    setPos({
      x: (e.clientX - r.left) / r.width * 100,
      y: (e.clientY - r.top) / r.height * 100
    });
  };
  return /* @__PURE__ */ jsxs(
    "div",
    {
      ref: wrap,
      onMouseMove: onMove,
      onMouseEnter: () => !isTouch && setActive(true),
      onMouseLeave: () => !isTouch && setActive(false),
      className: "relative mx-auto w-full max-w-[420px] aspect-[3/4] rounded-3xl overflow-hidden border border-hairline bg-surface select-none touch-pan-y md:cursor-none",
      style: {
        boxShadow: "0 30px 80px -20px oklch(0 0 0 / .6), 0 0 0 1px oklch(1 0 0 / .04)"
      },
      children: [
        /* @__PURE__ */ jsx(
          "img",
          {
            src: portraitA,
            alt: "Kusha Kumar NR portrait",
            width: 1024,
            height: 1024,
            className: "absolute inset-0 w-full h-full object-cover",
            style: {
              transform: active && !isTouch ? "scale(1.04)" : "scale(1)",
              transition: "transform .8s ease"
            }
          }
        ),
        !isTouch && /* @__PURE__ */ jsx(
          "img",
          {
            src: portraitB,
            alt: "",
            "aria-hidden": true,
            width: 1024,
            height: 1024,
            loading: "lazy",
            className: "absolute inset-0 w-full h-full object-cover pointer-events-none",
            style: {
              WebkitMaskImage: `radial-gradient(circle 250px at ${pos.x}% ${pos.y}%, black 60%, transparent 75%)`,
              maskImage: `radial-gradient(circle 250px at ${pos.x}% ${pos.y}%, black 60%, transparent 75%)`,
              opacity: active ? 1 : 0,
              transition: "opacity .35s ease"
            }
          }
        ),
        /* @__PURE__ */ jsx(
          "div",
          {
            className: "pointer-events-none absolute",
            style: {
              left: `${isTouch ? 50 : pos.x}%`,
              top: `${isTouch ? 50 : pos.y}%`,
              transform: "translate(-50%, -50%)",
              opacity: isTouch ? 1 : active ? 1 : 0,
              transition: "opacity .25s ease"
            },
            children: /* @__PURE__ */ jsxs("div", { className: "relative size-[200px]", children: [
              /* @__PURE__ */ jsx(Bracket$1, { className: "top-0 left-0 border-t border-l" }),
              /* @__PURE__ */ jsx(Bracket$1, { className: "top-0 right-0 border-t border-r" }),
              /* @__PURE__ */ jsx(Bracket$1, { className: "bottom-0 left-0 border-b border-l" }),
              /* @__PURE__ */ jsx(Bracket$1, { className: "bottom-0 right-0 border-b border-r" }),
              /* @__PURE__ */ jsx("span", { className: "absolute left-1/2 -translate-x-1/2 -bottom-10 whitespace-nowrap text-[14px] uppercase tracking-[0.25em] text-foreground/90 bg-background/60 backdrop-blur px-4 py-2 rounded", children: isTouch ? "KUSHA KUMAR" : "Hover to Reveal" })
            ] })
          }
        ),
        !isTouch && /* @__PURE__ */ jsx(
          "div",
          {
            className: "absolute bottom-4 left-1/2 -translate-x-1/2 text-[10px] uppercase tracking-[0.52em] text-muted-ink",
            style: {
              opacity: active ? 0 : 1,
              transition: "opacity .10s ease"
            },
            children: "Move your cursor"
          }
        )
      ]
    }
  );
}
function Bracket$1({ className }) {
  return /* @__PURE__ */ jsx(
    "span",
    {
      className: `absolute size-4 border-foreground/90 ${className}`
    }
  );
}
function ThemeToggle() {
  const [isDark, setIsDark] = useState(true);
  useEffect(() => {
    const stored = localStorage.getItem("theme");
    const dark = stored ? stored === "dark" : true;
    setIsDark(dark);
    document.documentElement.classList.toggle("dark", dark);
  }, []);
  const toggle = () => {
    const next = !isDark;
    setIsDark(next);
    document.documentElement.classList.toggle("dark", next);
    localStorage.setItem("theme", next ? "dark" : "light");
  };
  return /* @__PURE__ */ jsxs("div", { className: "relative group", children: [
    /* @__PURE__ */ jsxs(
      "button",
      {
        type: "button",
        onClick: toggle,
        role: "switch",
        "aria-checked": isDark,
        "aria-label": isDark ? "Switch to light mode" : "Switch to dark mode",
        className: "size-9 rounded-full grid place-items-center text-muted-ink hover:text-foreground hover:bg-surface-2 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-blue focus-visible:text-foreground transition relative overflow-hidden",
        children: [
          /* @__PURE__ */ jsx(
            Sun,
            {
              className: "size-4 absolute",
              "aria-hidden": true,
              style: {
                opacity: isDark ? 0 : 1,
                transform: isDark ? "rotate(-90deg) scale(0.6)" : "rotate(0deg) scale(1)",
                transition: "opacity .35s ease, transform .45s cubic-bezier(.2,.7,.2,1)"
              }
            }
          ),
          /* @__PURE__ */ jsx(
            Moon,
            {
              className: "size-4 absolute",
              "aria-hidden": true,
              style: {
                opacity: isDark ? 1 : 0,
                transform: isDark ? "rotate(0deg) scale(1)" : "rotate(90deg) scale(0.6)",
                transition: "opacity .35s ease, transform .45s cubic-bezier(.2,.7,.2,1)"
              }
            }
          )
        ]
      }
    ),
    /* @__PURE__ */ jsx(
      "span",
      {
        className: "\r\n          absolute\r\n          top-12\r\n          left-1/2\r\n          -translate-x-1/2\r\n          whitespace-nowrap\r\n          rounded-lg\r\n          bg-black\r\n          px-3\r\n          py-1.5\r\n          text-xs\r\n          font-medium\r\n          text-white\r\n          opacity-0\r\n          invisible\r\n          group-hover:opacity-100\r\n          group-hover:visible\r\n          transition-all\r\n          duration-300\r\n          pointer-events-none\r\n          z-50\r\n        ",
        children: isDark ? "Light Mode" : "Dark Mode"
      }
    )
  ] });
}
function PageLoader() {
  const [stage, setStage] = useState("in");
  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) {
      setStage("done");
      return;
    }
    let raf1 = 0, raf2 = 0;
    const t1 = setTimeout(() => {
      raf1 = requestAnimationFrame(() => setStage("out"));
    }, 1300);
    const t2 = setTimeout(() => {
      raf2 = requestAnimationFrame(() => setStage("done"));
    }, 2100);
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      cancelAnimationFrame(raf1);
      cancelAnimationFrame(raf2);
    };
  }, []);
  if (stage === "done") return null;
  return /* @__PURE__ */ jsx(
    "div",
    {
      className: "fixed inset-0 z-[100] grid place-items-center bg-background pointer-events-none",
      style: {
        transform: stage === "out" ? "translate3d(0,-100%,0)" : "translate3d(0,0,0)",
        transition: "transform .7s cubic-bezier(.7,0,.2,1)",
        willChange: "transform"
      },
      "aria-hidden": true,
      children: /* @__PURE__ */ jsxs("div", { className: "flex flex-col items-center gap-6", children: [
        /* @__PURE__ */ jsx(
          "div",
          {
            className: "size-14 rounded-2xl bg-accent-blue grid place-items-center text-2xl font-bold text-primary-foreground motion-safe:[animation:floatY_2s_ease-in-out_infinite]",
            children: "K"
          }
        ),
        /* @__PURE__ */ jsx(
          "div",
          {
            className: "text-sm tracking-[0.3em] uppercase text-muted-ink motion-safe:[animation:loaderTextIn_.8s_ease_both]",
            children: "Kusha Kumar NR"
          }
        ),
        /* @__PURE__ */ jsx("div", { className: "w-48 h-px bg-hairline overflow-hidden", children: /* @__PURE__ */ jsx(
          "div",
          {
            className: "h-full bg-accent-blue origin-left motion-safe:[animation:loaderBarFill_1.2s_cubic-bezier(.6,0,.2,1)_forwards]",
            style: { transform: "scaleX(1)" }
          }
        ) })
      ] })
    }
  );
}
const schema = z.object({
  name: z.string().trim().min(2, "Please enter your name").max(80),
  email: z.string().trim().email("Enter a valid email").max(160),
  message: z.string().trim().min(10, "Tell me a bit more (10+ chars)").max(1e3)
});
const WA_NUMBER = "917353680966";
function ContactForm() {
  const [values, setValues] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle");
  const onSubmit = (e) => {
    e.preventDefault();
    const res = schema.safeParse(values);
    if (!res.success) {
      const errs = {};
      res.error.issues.forEach((i) => {
        const k = i.path[0];
        if (!errs[k]) errs[k] = i.message;
      });
      setErrors(errs);
      setStatus("err");
      toast.error("Please fix the highlighted fields");
      return;
    }
    setErrors({});
    setStatus("sending");
    try {
      const text = `Hi Kusha, I saw your project on your portfolio. I'm ${res.data.name} (${res.data.email}).

${res.data.message}`;
      const url = `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(text)}`;
      window.open(url, "_blank", "noopener,noreferrer");
      setStatus("ok");
      toast.success("Opening WhatsApp — your message is ready to send.");
      setValues({ name: "", email: "", message: "" });
    } catch {
      setStatus("err");
      toast.error("Something went wrong. Please email Kushnr192@gmail.com");
    }
  };
  const field = (k) => ({
    value: values[k],
    onChange: (e) => {
      setValues((v) => ({ ...v, [k]: e.target.value }));
      if (errors[k]) setErrors((er) => ({ ...er, [k]: void 0 }));
    },
    "aria-invalid": !!errors[k],
    "aria-describedby": errors[k] ? `${k}-err` : void 0
  });
  return /* @__PURE__ */ jsxs("form", { onSubmit, noValidate: true, className: "grid gap-4 text-left max-w-xl mx-auto mt-10", children: [
    /* @__PURE__ */ jsxs("div", { className: "grid sm:grid-cols-2 gap-4", children: [
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("label", { htmlFor: "name", className: "text-xs uppercase tracking-[0.18em] text-muted-ink", children: "Name" }),
        /* @__PURE__ */ jsx(
          "input",
          {
            id: "name",
            type: "text",
            autoComplete: "name",
            required: true,
            maxLength: 80,
            ...field("name"),
            className: "mt-2 w-full px-4 py-3 rounded-xl bg-surface border border-hairline text-foreground placeholder:text-muted-ink focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-blue transition",
            placeholder: "Your name"
          }
        ),
        errors.name && /* @__PURE__ */ jsx("p", { id: "name-err", className: "text-xs text-destructive mt-1", children: errors.name })
      ] }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("label", { htmlFor: "email", className: "text-xs uppercase tracking-[0.18em] text-muted-ink", children: "Email" }),
        /* @__PURE__ */ jsx(
          "input",
          {
            id: "email",
            type: "email",
            autoComplete: "email",
            required: true,
            maxLength: 160,
            ...field("email"),
            className: "mt-2 w-full px-4 py-3 rounded-xl bg-surface border border-hairline text-foreground placeholder:text-muted-ink focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-blue transition",
            placeholder: "you@company.com"
          }
        ),
        errors.email && /* @__PURE__ */ jsx("p", { id: "email-err", className: "text-xs text-destructive mt-1", children: errors.email })
      ] })
    ] }),
    /* @__PURE__ */ jsxs("div", { children: [
      /* @__PURE__ */ jsx("label", { htmlFor: "message", className: "text-xs uppercase tracking-[0.18em] text-muted-ink", children: "Message" }),
      /* @__PURE__ */ jsx(
        "textarea",
        {
          id: "message",
          required: true,
          maxLength: 1e3,
          rows: 5,
          value: values.message,
          onChange: (e) => {
            setValues((v) => ({ ...v, message: e.target.value }));
            if (errors.message) setErrors((er) => ({ ...er, message: void 0 }));
          },
          "aria-invalid": !!errors.message,
          "aria-describedby": errors.message ? "message-err" : void 0,
          className: "mt-2 w-full px-4 py-3 rounded-xl bg-surface border border-hairline text-foreground placeholder:text-muted-ink focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-blue transition resize-none",
          placeholder: "What are you building?"
        }
      ),
      errors.message && /* @__PURE__ */ jsx("p", { id: "message-err", className: "text-xs text-destructive mt-1", children: errors.message })
    ] }),
    /* @__PURE__ */ jsx(
      "button",
      {
        type: "submit",
        disabled: status === "sending",
        className: "inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full bg-accent-blue text-primary-foreground text-sm font-medium hover:opacity-90 hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-blue disabled:opacity-60 transition",
        children: status === "sending" ? /* @__PURE__ */ jsxs(Fragment, { children: [
          /* @__PURE__ */ jsx(Loader2, { className: "size-4 animate-spin" }),
          "Sending…"
        ] }) : /* @__PURE__ */ jsxs(Fragment, { children: [
          /* @__PURE__ */ jsx(Send, { className: "size-4" }),
          "Send message"
        ] })
      }
    ),
    /* @__PURE__ */ jsx("p", { role: "status", "aria-live": "polite", className: "text-xs text-muted-ink text-center min-h-4", children: status === "ok" && "Thanks — WhatsApp opened with your message pre-filled." })
  ] });
}
function CubeStage() {
  const [rot, setRot] = useState({ x: -22, y: -28 });
  const [active, setActive] = useState(false);
  const drag = useRef(null);
  const idleRaf = useRef(0);
  const frame = useRef(null);
  useEffect(() => {
    const reduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (reduced) return;
    let t = 0;
    const tick = () => {
      t += 0.15;
      if (!drag.current && !active) {
        setRot({
          x: -22 + Math.sin(t * 0.02) * 6,
          y: -28 + t * 0.15
        });
      }
      idleRaf.current = requestAnimationFrame(tick);
    };
    idleRaf.current = requestAnimationFrame(tick);
    return () => {
      cancelAnimationFrame(idleRaf.current);
      if (frame.current) {
        cancelAnimationFrame(frame.current);
      }
    };
  }, [active]);
  const onDown = (cx, cy) => {
    drag.current = {
      x: cx,
      y: cy,
      rx: rot.x,
      ry: rot.y
    };
    setActive(true);
  };
  const onMove = (cx, cy) => {
    if (!drag.current) return;
    const dx = cx - drag.current.x;
    const dy = cy - drag.current.y;
    if (frame.current) {
      cancelAnimationFrame(frame.current);
    }
    frame.current = requestAnimationFrame(() => {
      if (!drag.current) return;
      setRot({
        x: drag.current.rx - dy * 0.5,
        y: drag.current.ry + dx * 0.5
      });
    });
  };
  const onUp = () => {
    drag.current = null;
    setTimeout(() => {
      setActive(false);
    }, 1200);
  };
  return /* @__PURE__ */ jsxs(
    "div",
    {
      className: "relative w-full h-[300px] sm:h-[360px] select-none touch-pan-y",
      onMouseDown: (e) => onDown(e.clientX, e.clientY),
      onMouseMove: (e) => onMove(e.clientX, e.clientY),
      onMouseUp: onUp,
      onMouseLeave: onUp,
      onTouchStart: (e) => {
        if (e.touches.length >= 1) {
          const t = e.touches[0];
          onDown(t.clientX, t.clientY);
        }
      },
      onTouchMove: (e) => {
        if (drag.current && e.touches.length >= 1) {
          const t = e.touches[0];
          onMove(t.clientX, t.clientY);
        }
      },
      onTouchEnd: onUp,
      style: {
        perspective: "900px"
      },
      "aria-label": "Interactive 3D cube",
      children: [
        /* @__PURE__ */ jsxs(
          "div",
          {
            className: "absolute inset-0 grid place-items-center",
            style: {
              transformStyle: "preserve-3d",
              transform: `rotateX(${rot.x}deg) rotateY(${rot.y}deg)`,
              transition: drag.current ? "none" : "transform .5s cubic-bezier(.2,.7,.2,1)"
            },
            children: [
              /* @__PURE__ */ jsx(
                "div",
                {
                  className: "absolute",
                  style: {
                    transformStyle: "preserve-3d",
                    transform: "translateY(80px) rotateX(90deg)"
                  },
                  children: /* @__PURE__ */ jsx(
                    "div",
                    {
                      className: "w-[260px] h-[180px] rounded border-2 border-accent-blue/70 bg-accent-blue/10",
                      style: {
                        boxShadow: "inset 0 0 40px oklch(0.62 0.21 257 / .25)"
                      }
                    }
                  )
                }
              ),
              /* @__PURE__ */ jsx(Cube, {})
            ]
          }
        ),
        /* @__PURE__ */ jsx("div", { className: "absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none", children: /* @__PURE__ */ jsxs(
          "div",
          {
            className: "relative px-4 py-2 text-[11px] uppercase tracking-[0.25em] text-foreground/90 bg-background/40 backdrop-blur-sm",
            style: {
              opacity: active ? 0 : 1,
              transition: "opacity .3s ease"
            },
            children: [
              /* @__PURE__ */ jsx(Bracket, { className: "top-0 left-0 border-t border-l" }),
              /* @__PURE__ */ jsx(Bracket, { className: "top-0 right-0 border-t border-r" }),
              /* @__PURE__ */ jsx(Bracket, { className: "bottom-0 left-0 border-b border-l" }),
              /* @__PURE__ */ jsx(Bracket, { className: "bottom-0 right-0 border-b border-r" }),
              "Drag to interact"
            ]
          }
        ) })
      ]
    }
  );
}
function Cube() {
  const size = 120;
  const face = "absolute grid place-items-center border-2 border-accent-blue/80 text-accent-blue/90 text-[10px] uppercase tracking-[0.3em]";
  const bg = "linear-gradient(135deg, oklch(0.62 0.21 257 / .85), oklch(0.45 0.18 257 / .85))";
  const s = {
    width: size,
    height: size,
    background: bg
  };
  const t = size / 2;
  return /* @__PURE__ */ jsxs(
    "div",
    {
      className: "relative",
      style: {
        width: size,
        height: size,
        transformStyle: "preserve-3d"
      },
      children: [
        /* @__PURE__ */ jsx("div", { className: face, style: { ...s, transform: `translateZ(${t}px)` }, children: "Design" }),
        /* @__PURE__ */ jsx(
          "div",
          {
            className: face,
            style: { ...s, transform: `rotateY(180deg) translateZ(${t}px)` },
            children: "Research"
          }
        ),
        /* @__PURE__ */ jsx(
          "div",
          {
            className: face,
            style: { ...s, transform: `rotateY(90deg) translateZ(${t}px)` },
            children: "Craft"
          }
        ),
        /* @__PURE__ */ jsx(
          "div",
          {
            className: face,
            style: { ...s, transform: `rotateY(-90deg) translateZ(${t}px)` },
            children: "System"
          }
        ),
        /* @__PURE__ */ jsx(
          "div",
          {
            className: face,
            style: { ...s, transform: `rotateX(90deg) translateZ(${t}px)` },
            children: "UX"
          }
        ),
        /* @__PURE__ */ jsx(
          "div",
          {
            className: face,
            style: { ...s, transform: `rotateX(-90deg) translateZ(${t}px)` },
            children: "UI"
          }
        )
      ]
    }
  );
}
function Bracket({ className }) {
  return /* @__PURE__ */ jsx(
    "span",
    {
      className: `absolute size-2.5 border-foreground/80 ${className}`
    }
  );
}
const ROLES = ["UX & Product Designer", "HFI Certified Usability Analyst", "Senior UX/UI Designer at Wipro", "Design systems & accessibility"];
function Portfolio() {
  const [idx, setIdx] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setIdx((i) => (i + 1) % ROLES.length), 2600);
    return () => clearInterval(t);
  }, []);
  return /* @__PURE__ */ jsxs("div", { className: "min-h-screen bg-background text-foreground relative overflow-x-hidden", children: [
    /* @__PURE__ */ jsx(PageLoader, {}),
    /* @__PURE__ */ jsx(FloatingNav, {}),
    /* @__PURE__ */ jsx(FloatingContact, {}),
    /* @__PURE__ */ jsxs("section", { id: "home", className: "relative min-h-screen flex flex-col items-center justify-center px-6 pt-32 pb-24", children: [
      /* @__PURE__ */ jsx("div", { className: "absolute inset-0 grid-bg pointer-events-none" }),
      /* @__PURE__ */ jsxs("div", { className: "relative z-10 text-center max-w-4xl w-full", children: [
        /* @__PURE__ */ jsx(ScrollReveal, { children: /* @__PURE__ */ jsxs("div", { className: "inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-hairline bg-surface/60 backdrop-blur text-xs text-muted-ink mb-8", children: [
          /* @__PURE__ */ jsx("span", { className: "size-1.5 rounded-full bg-emerald-400 motion-safe:animate-pulse" }),
          "Open to senior product design roles"
        ] }) }),
        /* @__PURE__ */ jsx(ScrollReveal, { delay: 80, children: /* @__PURE__ */ jsxs("h1", { className: "text-5xl sm:text-7xl md:text-8xl font-semibold tracking-tight leading-[1.02]", children: [
          "Hi, I'm ",
          /* @__PURE__ */ jsx("span", { className: "text-foreground", children: "Kusha Kumar" }),
          " — UX & Product Designer"
        ] }) }),
        /* @__PURE__ */ jsx("div", { className: "mt-6 h-14 sm:h-16 relative", children: ROLES.map((r, i) => /* @__PURE__ */ jsx("h2", { className: "absolute inset-0 text-3xl sm:text-5xl font-semibold tracking-tight text-accent-blue", style: {
          opacity: i === idx ? 1 : 0,
          transform: i === idx ? "translateY(0)" : "translateY(8px)",
          transition: "opacity .6s ease, transform .6s ease"
        }, children: r }, r)) }),
        /* @__PURE__ */ jsx(ScrollReveal, { delay: 160, children: /* @__PURE__ */ jsx("div", { className: "mt-12 mb-10", children: /* @__PURE__ */ jsx(HoverPortrait, {}) }) }),
        /* @__PURE__ */ jsx(ScrollReveal, { delay: 220, children: /* @__PURE__ */ jsxs("p", { className: "text-base sm:text-lg text-muted-ink max-w-2xl mx-auto leading-relaxed", children: [
          "A collaborative User Experience Designer with ",
          /* @__PURE__ */ jsx("span", { className: "text-foreground", children: "7+ years" }),
          " bridging research, behavior and craft. I turn ambiguous problems into intuitive products across e-learning, ecommerce, healthcare, finance and airlines."
        ] }) }),
        /* @__PURE__ */ jsx(ScrollReveal, { delay: 280, children: /* @__PURE__ */ jsxs("div", { className: "mt-10 flex flex-wrap items-center justify-center gap-3", children: [
          /* @__PURE__ */ jsxs("a", { href: "mailto:Kushnr192@gmail.com", className: "inline-flex items-center gap-2 px-5 py-3 rounded-full bg-accent-blue text-primary-foreground text-sm font-medium hover:opacity-90 hover:-translate-y-0.5 transition focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-blue", children: [
            /* @__PURE__ */ jsx(Mail, { className: "size-4" }),
            "Get in touch"
          ] }),
          /* @__PURE__ */ jsxs("a", { href: "https://www.behance.net/kushinr619945f", target: "_blank", rel: "noreferrer", className: "inline-flex items-center gap-2 px-5 py-3 rounded-full border border-hairline bg-surface/60 backdrop-blur text-sm font-medium hover:bg-surface-2 hover:-translate-y-0.5 transition", children: [
            "View Behance",
            /* @__PURE__ */ jsx(ArrowUpRight, { className: "size-4" })
          ] })
        ] }) })
      ] })
    ] }),
    /* @__PURE__ */ jsx(Section, { id: "about", eyebrow: "About", title: "Designing with humans in mind.", children: /* @__PURE__ */ jsxs("div", { className: "grid md:grid-cols-3 gap-8", children: [
      /* @__PURE__ */ jsxs("div", { className: "md:col-span-2 space-y-5 text-muted-ink leading-relaxed text-lg", children: [
        /* @__PURE__ */ jsxs("p", { children: [
          "My background in Computer Applications shaped me to be ",
          /* @__PURE__ */ jsx("span", { className: "text-foreground", children: "intuitive, analytical and creative" }),
          " — and gave me a lens to understand humans from individual behaviors to broader psychological patterns."
        ] }),
        /* @__PURE__ */ jsxs("p", { children: [
          "Training as an ",
          /* @__PURE__ */ jsx("span", { className: "text-foreground", children: "HFI Certified Usability Analyst" }),
          " pushed me beyond research, toward building products that genuinely meet human needs. I love finding creative solutions to complex problems, and I'm endlessly enthusiastic about the meaningful impact good products can create."
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "rounded-2xl border border-hairline bg-surface p-6 space-y-4", children: [
        /* @__PURE__ */ jsx(Stat, { k: "7+ yrs", v: "Designing products" }),
        /* @__PURE__ */ jsx(Stat, { k: "5 industries", v: "E-learning, Ecommerce, Healthcare, Finance, Airlines" }),
        /* @__PURE__ */ jsx(Stat, { k: "HFI CUA", v: "Certified Usability Analyst, 2023" })
      ] })
    ] }) }),
    /* @__PURE__ */ jsx(Section, { id: "experience", eyebrow: "Experience", title: "Where I've designed.", children: /* @__PURE__ */ jsx(Stagger, { className: "space-y-3", step: 80, y: 20, children: EXPERIENCE.map((e) => /* @__PURE__ */ jsx(ExperienceRow, { ...e }, e.company + e.period)) }) }),
    /* @__PURE__ */ jsx(Section, { id: "skills", eyebrow: "Toolkit", title: "Craft, research & systems.", children: /* @__PURE__ */ jsx(Stagger, { className: "grid md:grid-cols-2 lg:grid-cols-3 gap-4", step: 70, y: 20, children: SKILLS.map((g) => /* @__PURE__ */ jsxs("div", { className: "group rounded-2xl border border-hairline bg-surface overflow-hidden h-full hover:border-accent-blue/40 transition", children: [
      /* @__PURE__ */ jsxs("div", { className: "aspect-[16/9] relative overflow-hidden bg-gradient-to-br from-surface-2 via-surface to-background", children: [
        /* @__PURE__ */ jsx("div", { className: "absolute inset-0 grid-bg opacity-50" }),
        /* @__PURE__ */ jsx("div", { className: "absolute inset-0 flex items-end p-4", children: /* @__PURE__ */ jsx("div", { className: "flex flex-wrap gap-1.5", children: g.items.slice(0, 4).map((it) => /* @__PURE__ */ jsx("span", { className: "px-2.5 py-1 rounded-full bg-background/70 backdrop-blur text-[10px] uppercase tracking-wider text-foreground/90 border border-hairline", children: it }, it)) }) }),
        /* @__PURE__ */ jsx("div", { className: "absolute top-3 right-3 size-10 rounded-xl bg-accent-blue/15 border border-accent-blue/30 grid place-items-center text-accent-blue text-lg font-bold", children: g.title[0] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "p-6", children: [
        /* @__PURE__ */ jsxs("h3", { className: "text-sm font-semibold text-foreground mb-3 flex items-center gap-2", children: [
          /* @__PURE__ */ jsx("span", { className: "size-1.5 rounded-full bg-accent-blue" }),
          g.title
        ] }),
        /* @__PURE__ */ jsx("div", { className: "flex flex-wrap gap-2", children: g.items.map((it) => /* @__PURE__ */ jsx("span", { className: "px-3 py-1.5 rounded-full bg-surface-2 text-muted-ink text-xs border border-hairline", children: it }, it)) })
      ] })
    ] }, g.title)) }) }),
    /* @__PURE__ */ jsxs(Section, { id: "projects", eyebrow: "Selected work", title: "Projects you need to see.", children: [
      /* @__PURE__ */ jsx(ScrollReveal, { children: /* @__PURE__ */ jsxs("p", { className: "text-muted-ink -mt-6 mb-10 max-w-xl", children: [
        "For NDA compliance, deeper case studies are available on request. Curious?",
        " ",
        /* @__PURE__ */ jsx("a", { href: "mailto:Kushnr192@gmail.com", className: "text-accent-blue underline-offset-4 hover:underline", children: "Drop me a line" }),
        "."
      ] }) }),
      /* @__PURE__ */ jsx(Stagger, { className: "grid md:grid-cols-2 gap-5", step: 100, y: 28, children: PROJECTS.map((p) => /* @__PURE__ */ jsx(ProjectCard, { slug: p.slug, title: p.title, tag: p.tag, blurb: p.blurb, image: p.image }, p.slug)) })
    ] }),
    /* @__PURE__ */ jsx(Section, { id: "education", eyebrow: "Education & Certificates", title: "Where I learned.", children: /* @__PURE__ */ jsx(Stagger, { className: "grid md:grid-cols-2 gap-4", step: 70, y: 20, children: EDUCATION.map((ed) => /* @__PURE__ */ jsxs("div", { className: "rounded-2xl border border-hairline bg-surface p-6", children: [
      /* @__PURE__ */ jsx("div", { className: "text-xs text-muted-ink mb-2", children: ed.period }),
      /* @__PURE__ */ jsx("h3", { className: "font-semibold", children: ed.school }),
      /* @__PURE__ */ jsx("p", { className: "text-sm text-muted-ink mt-1", children: ed.degree })
    ] }, ed.school)) }) }),
    /* @__PURE__ */ jsxs("section", { id: "contact", className: "px-6 py-32", children: [
      /* @__PURE__ */ jsxs("div", { className: "max-w-4xl mx-auto rounded-3xl border border-hairline bg-gradient-to-b from-surface to-background p-10 md:p-16 text-center", children: [
        /* @__PURE__ */ jsx("p", { className: "text-xs uppercase tracking-[0.2em] text-muted-ink mb-4", children: "Let's build something" }),
        /* @__PURE__ */ jsxs("h2", { className: "text-4xl md:text-6xl font-semibold tracking-tight", children: [
          "Have a problem worth ",
          /* @__PURE__ */ jsx("span", { className: "text-accent-blue", children: "solving?" })
        ] }),
        /* @__PURE__ */ jsx("p", { className: "mt-5 text-muted-ink max-w-xl mx-auto", children: "I'm always up for thoughtful conversations about product, design systems and accessibility." }),
        /* @__PURE__ */ jsx(ContactForm, {}),
        /* @__PURE__ */ jsxs("div", { className: "mt-10 flex flex-wrap items-center justify-center gap-3", children: [
          /* @__PURE__ */ jsxs("a", { href: "mailto:Kushnr192@gmail.com", className: "inline-flex items-center gap-2 px-5 py-3 rounded-full bg-accent-blue text-primary-foreground text-sm font-medium hover:opacity-90 hover:-translate-y-0.5 transition", children: [
            /* @__PURE__ */ jsx(Mail, { className: "size-4" }),
            /* @__PURE__ */ jsx("span", { children: "Kushnr192@gmail.com" })
          ] }),
          /* @__PURE__ */ jsx("a", { href: "tel:+919008472125", className: "inline-flex items-center gap-2 px-5 py-3 rounded-full border border-hairline text-sm hover:bg-surface-2 hover:-translate-y-0.5 transition", children: "+91 90084 72125" }),
          /* @__PURE__ */ jsxs("a", { href: "https://shorturl.at/hquwJ", target: "_blank", rel: "noreferrer", className: "inline-flex items-center gap-2 px-5 py-3 rounded-full border border-hairline text-sm hover:bg-surface-2 hover:-translate-y-0.5 transition", children: [
            /* @__PURE__ */ jsx(Linkedin, { className: "size-4" }),
            /* @__PURE__ */ jsx("span", { children: "LinkedIn" })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "max-w-4xl mx-auto mt-16", children: /* @__PURE__ */ jsx(CubeStage, {}) }),
      /* @__PURE__ */ jsxs("p", { className: "text-center text-xs text-muted-ink mt-10", children: [
        "Designed and developed by",
        " ",
        /* @__PURE__ */ jsx("a", { href: "https://www.yusuffux.com", target: "_blank", rel: "noreferrer", className: "text-accent-blue underline-offset-4 hover:underline", children: "YusuffGems" })
      ] })
    ] })
  ] });
}
function FloatingNav() {
  const items = [{
    href: "#home",
    icon: Home,
    label: "Home"
  }, {
    href: "#projects",
    icon: FolderOpen,
    label: "Projects"
  }, {
    href: "#experience",
    icon: Briefcase,
    label: "Experience"
  }, {
    href: "#education",
    icon: Award,
    label: "Education"
  }, {
    href: "#skills",
    icon: Zap,
    label: "Skills"
  }, {
    href: "#contact",
    icon: FileText,
    label: "Contact"
  }];
  return /* @__PURE__ */ jsx("nav", { className: "fixed top-5 left-1/2 -translate-x-1/2 z-[9999]", "aria-label": "Primary", children: /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-1 px-2 py-2 rounded-full border border-hairline bg-surface/80 backdrop-blur-xl shadow-2xl shadow-black/40 overflow-visible", children: [
    /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 px-3 py-1.5", children: [
      /* @__PURE__ */ jsx("div", { className: "size-6 rounded-md bg-accent-blue flex items-center justify-center text-[10px] font-bold text-primary-foreground", children: "K" }),
      /* @__PURE__ */ jsx("span", { className: "text-sm font-medium hidden sm:inline", children: "Kusha Kumar" })
    ] }),
    /* @__PURE__ */ jsx("span", { className: "w-px h-5 bg-hairline mx-1" }),
    items.map(({
      href,
      icon: Icon,
      label
    }) => /* @__PURE__ */ jsxs("a", { href, className: "group relative size-9 rounded-full grid place-items-center text-muted-ink hover:text-foreground hover:bg-surface-2 transition", children: [
      /* @__PURE__ */ jsx(Icon, { className: "size-4" }),
      /* @__PURE__ */ jsx("span", { className: "\r\n                absolute\r\n                -bottom-10\r\n                left-1/2\r\n                -translate-x-1/2\r\n                whitespace-nowrap\r\n                rounded-md\r\n                bg-black\r\n                px-3\r\n                py-1\r\n                text-xs\r\n                text-white\r\n                opacity-0\r\n                group-hover:opacity-100\r\n                transition-all\r\n                duration-200\r\n                pointer-events-none\r\n                z-[99999]\r\n              ", children: label })
    ] }, href)),
    /* @__PURE__ */ jsx("span", { className: "w-px h-5 bg-hairline mx-1" }),
    /* @__PURE__ */ jsx(ThemeToggle, {})
  ] }) });
}
function Section({
  id,
  eyebrow,
  title,
  children
}) {
  return /* @__PURE__ */ jsxs("section", { id, className: "px-6 py-24 md:py-32 max-w-6xl mx-auto w-full", children: [
    /* @__PURE__ */ jsxs("div", { className: "mb-12", children: [
      /* @__PURE__ */ jsx("div", { className: "text-xs uppercase tracking-[0.2em] text-accent-blue mb-3", children: eyebrow }),
      /* @__PURE__ */ jsx("h2", { className: "text-3xl md:text-5xl font-semibold tracking-tight max-w-3xl", children: title })
    ] }),
    children
  ] });
}
function Stat({
  k,
  v
}) {
  return /* @__PURE__ */ jsxs("div", { children: [
    /* @__PURE__ */ jsx("div", { className: "text-2xl font-semibold text-foreground", children: k }),
    /* @__PURE__ */ jsx("div", { className: "text-sm text-muted-ink", children: v })
  ] });
}
function ExperienceRow({
  company,
  role,
  period,
  summary
}) {
  return /* @__PURE__ */ jsxs("div", { className: "group rounded-2xl border border-hairline bg-surface hover:bg-surface-2 transition p-6 md:p-7", children: [
    /* @__PURE__ */ jsxs("div", { className: "flex flex-wrap items-baseline justify-between gap-2", children: [
      /* @__PURE__ */ jsx("h3", { className: "text-xl font-semibold", children: company }),
      /* @__PURE__ */ jsx("span", { className: "text-xs text-muted-ink", children: period })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "text-accent-blue text-sm mt-1", children: role }),
    /* @__PURE__ */ jsx("p", { className: "text-muted-ink mt-3 leading-relaxed", children: summary })
  ] });
}
function ProjectCard({
  slug,
  title,
  tag,
  blurb,
  image
}) {
  return /* @__PURE__ */ jsxs(Link, { to: "/projects/$slug", params: {
    slug
  }, "aria-label": `${title} — view case study`, className: "group block rounded-2xl border border-hairline bg-surface overflow-hidden hover:border-accent-blue/40 transition focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-blue", children: [
    /* @__PURE__ */ jsxs("div", { className: "aspect-[16/10] relative overflow-hidden", children: [
      /* @__PURE__ */ jsx("img", { src: image, alt: `${title} — ${tag} case study preview`, width: 1280, height: 800, loading: "lazy", decoding: "async", sizes: "(min-width: 768px) 50vw, 100vw", className: "absolute inset-0 w-full h-full object-cover transition duration-700 group-hover:scale-105" }),
      /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-background/80 via-background/20 to-transparent pointer-events-none" })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "p-6", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between", children: [
        /* @__PURE__ */ jsx("span", { className: "text-xs uppercase tracking-[0.18em] text-accent-blue", children: tag }),
        /* @__PURE__ */ jsx(ArrowUpRight, { className: "size-4 text-muted-ink group-hover:text-foreground transition" })
      ] }),
      /* @__PURE__ */ jsx("h3", { className: "mt-2 text-lg font-semibold", children: title }),
      /* @__PURE__ */ jsx("p", { className: "text-sm text-muted-ink mt-2 leading-relaxed", children: blurb })
    ] })
  ] });
}
const EXPERIENCE = [{
  company: "Wipro",
  role: "Senior UX Designer",
  period: "Mar 2025 — Present",
  summary: "Leading end-to-end design from concept to delivery, managing client interactions and applying UX methodology to enterprise, finance, SaaS and experiential domains."
}, {
  company: "Spekond Technology",
  role: "UX Designer",
  period: "Nov 2024 — Feb 2025",
  summary: "Crafted intuitive, visually appealing interfaces for customer-facing platforms — websites, mobile apps and kiosks for booking, check-in and flight tracking."
}, {
  company: "Flatworld Solution",
  role: "UI Designer & Graphic",
  period: "Jun 2024 — Nov 2024",
  summary: "Produced final designs for infographics, presentations, banners, website pages, case studies and white papers across the business."
}, {
  company: "Lobotus Technology (Pearson India)",
  role: "UX Designer",
  period: "Jan 2021 — Apr 2023",
  summary: "Ran qualitative and quantitative research to improve end-user experiences. Tested with WCAG accessibility standards to make products usable for disabled users as well."
}, {
  company: "Canopus-GBS Pvt Ltd, Bangalore",
  role: "UX & UI Designer",
  period: "Aug 2019 — Mar 2020",
  summary: "Research, ideation, prototyping and MVP building. Collaborated with product and engineering via Figma, Jira and Miro to ship simplified flows for complex information."
}, {
  company: "Codeinks Software Pvt Ltd",
  role: "Junior UI & UX Designer",
  period: "Feb 2016 — Jun 2019",
  summary: "Supported senior designers on mobile application design and produced digital boards in Photoshop and XD for brand submittals."
}];
const SKILLS = [{
  title: "Design",
  items: ["Figma", "Sketch", "Adobe XD", "Illustrator", "Photoshop", "InDesign"]
}, {
  title: "Secondary",
  items: ["HTML", "CSS", "After Effects", "3D Maya"]
}, {
  title: "UX Design",
  items: ["HCD", "Design Strategy", "Personas", "Heuristic Evaluation", "Task Flow", "IA", "Wireframes", "Prototyping", "Usability Testing", "Accessibility"]
}, {
  title: "UI Design",
  items: ["Typography", "Micro-interactions", "Branding", "Style Guides", "Design Systems", "HiFi Mockups"]
}, {
  title: "User Research",
  items: ["Interviews", "Surveys", "A/B Testing", "Card Sorting", "Field Studies", "Eyetracking", "Analytics"]
}, {
  title: "Workshops",
  items: ["Design Sprints", "Experience Canvas", "Lightning Decision Jam", "Journey Maps", "Story Maps"]
}];
const EDUCATION = [{
  school: "NASSCOM",
  degree: "HFI Certified Usability Analyst Training",
  period: "Aug 2023"
}, {
  school: "Bridge UX Design Studios, Bangalore",
  degree: "UX Product Design",
  period: "2017"
}, {
  school: "Zee Institute of Creative Art, Mangalore",
  degree: "Diploma in Graphics & 3D Animation",
  period: "Aug 2012 — Aug 2014"
}, {
  school: "Gulbarga University",
  degree: "BCA — Bachelor of Computer Applications",
  period: "Jun 2009 — Jun 2012"
}];
export {
  Portfolio as component
};
