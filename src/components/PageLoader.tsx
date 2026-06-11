import { useEffect, useState } from "react";

export function PageLoader() {
  const [stage, setStage] = useState<"in" | "out" | "done">("in");

  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) {
      setStage("done");
      return;
    }
    let raf1 = 0, raf2 = 0;
    const t1 = setTimeout(() => { raf1 = requestAnimationFrame(() => setStage("out")); }, 1300);
    const t2 = setTimeout(() => { raf2 = requestAnimationFrame(() => setStage("done")); }, 2100);
    return () => {
      clearTimeout(t1); clearTimeout(t2);
      cancelAnimationFrame(raf1); cancelAnimationFrame(raf2);
    };
  }, []);

  if (stage === "done") return null;

  return (
    <div
      className="fixed inset-0 z-[100] grid place-items-center bg-background pointer-events-none"
      style={{
        transform: stage === "out" ? "translate3d(0,-100%,0)" : "translate3d(0,0,0)",
        transition: "transform .7s cubic-bezier(.7,0,.2,1)",
        willChange: "transform",
      }}
      aria-hidden
    >
      <div className="flex flex-col items-center gap-6">
        <div
          className="size-14 rounded-2xl bg-accent-blue grid place-items-center text-2xl font-bold text-primary-foreground motion-safe:[animation:floatY_2s_ease-in-out_infinite]"
        >
          K
        </div>
        <div
          className="text-sm tracking-[0.3em] uppercase text-muted-ink motion-safe:[animation:loaderTextIn_.8s_ease_both]"
        >
          Kusha Kumar NR
        </div>
        <div className="w-48 h-px bg-hairline overflow-hidden">
          <div
            className="h-full bg-accent-blue origin-left motion-safe:[animation:loaderBarFill_1.2s_cubic-bezier(.6,0,.2,1)_forwards]"
            style={{ transform: "scaleX(1)" }}
          />
        </div>
      </div>
    </div>
  );
}
