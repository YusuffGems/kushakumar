import { useEffect, useRef, Children, isValidElement, type ReactNode, type ReactElement } from "react";

/**
 * Lightweight reveal-on-scroll using a SINGLE shared IntersectionObserver
 * and direct DOM mutation (no React state per element) — eliminates scroll
 * lag on mobile by avoiding render churn.
 */

let sharedObserver: IntersectionObserver | null = null;
const targets = new WeakMap<Element, { delay: number; duration: number; reduced: boolean }>();

function getObserver() {
  if (typeof window === "undefined") return null;
  if (sharedObserver) return sharedObserver;
  sharedObserver = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue;
        const el = entry.target as HTMLElement;
        const cfg = targets.get(el);
        if (!cfg) continue;
        requestAnimationFrame(() => {
          el.style.transitionDelay = `${cfg.delay}ms`;
          el.style.opacity = "1";
          el.style.transform = "translate3d(0,0,0)";
          // free GPU memory once the reveal lands
          window.setTimeout(() => {
            el.style.willChange = "auto";
            el.style.transition = "";
          }, cfg.duration + cfg.delay + 50);
        });
        sharedObserver!.unobserve(el);
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

export function ScrollReveal({
  children,
  delay = 0,
  className = "",
  y = 20,
  duration = 700,
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
  y?: number;
  blur?: number;
  duration?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);

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

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}

export function Stagger({
  children,
  start = 0,
  step = 90,
  className = "",
  ...rest
}: {
  children: ReactNode;
  start?: number;
  step?: number;
  className?: string;
  y?: number;
  duration?: number;
}) {
  const arr = Children.toArray(children);
  return (
    <div className={className}>
      {arr.map((child, i) => {
        const key = isValidElement(child) ? (child as ReactElement).key ?? i : i;
        return (
          <ScrollReveal key={key} delay={start + i * step} {...rest}>
            {child}
          </ScrollReveal>
        );
      })}
    </div>
  );
}
