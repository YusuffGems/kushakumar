import { useEffect, useRef, useState } from "react";
import portraitA from "@/assets/portrait-a.jpg";
import portraitB from "@/assets/portrait-b.jpg";

export function HoverPortrait() {
  const wrap = useRef<HTMLDivElement>(null);
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

  const onMove = (e: React.MouseEvent) => {
    if (isTouch) return;

    const r = wrap.current?.getBoundingClientRect();
    if (!r) return;

    setPos({
      x: ((e.clientX - r.left) / r.width) * 100,
      y: ((e.clientY - r.top) / r.height) * 100,
    });
  };

  return (
    <div
      ref={wrap}
      onMouseMove={onMove}
      onMouseEnter={() => !isTouch && setActive(true)}
      onMouseLeave={() => !isTouch && setActive(false)}
      className="relative mx-auto w-full max-w-[420px] aspect-[3/4] rounded-3xl overflow-hidden border border-hairline bg-surface select-none touch-pan-y md:cursor-none"
      style={{
        boxShadow:
          "0 30px 80px -20px oklch(0 0 0 / .6), 0 0 0 1px oklch(1 0 0 / .04)",
      }}
    >
      {/* Base Portrait */}
      <img
        src={portraitA}
        alt="Kusha Kumar NR portrait"
        width={1024}
        height={1024}
        className="absolute inset-0 w-full h-full object-cover"
        style={{
          transform: active && !isTouch ? "scale(1.04)" : "scale(1)",
          transition: "transform .8s ease",
        }}
      />

      {/* Reveal Portrait - Desktop Only */}
{!isTouch && (
  <img
    src={portraitB}
    alt=""
    aria-hidden
    width={1024}
    height={1024}
    loading="lazy"
    className="absolute inset-0 w-full h-full object-cover pointer-events-none"
    style={{
      WebkitMaskImage: `radial-gradient(circle 250px at ${pos.x}% ${pos.y}%, black 60%, transparent 75%)`,
      maskImage: `radial-gradient(circle 250px at ${pos.x}% ${pos.y}%, black 60%, transparent 75%)`,
      opacity: active ? 1 : 0,
      transition: "opacity .35s ease",
    }}
  />
)}

{/* Focus Vector */}
<div
  className="pointer-events-none absolute"
  style={{
    left: `${isTouch ? 50 : pos.x}%`,
    top: `${isTouch ? 50 : pos.y}%`,
    transform: "translate(-50%, -50%)",
    opacity: isTouch ? 1 : active ? 1 : 0,
    transition: "opacity .25s ease",
  }}
>
  <div className="relative size-[200px]">
    <Bracket className="top-0 left-0 border-t border-l" />
    <Bracket className="top-0 right-0 border-t border-r" />
    <Bracket className="bottom-0 left-0 border-b border-l" />
    <Bracket className="bottom-0 right-0 border-b border-r" />

    <span className="absolute left-1/2 -translate-x-1/2 -bottom-10 whitespace-nowrap text-[14px] uppercase tracking-[0.25em] text-foreground/90 bg-background/60 backdrop-blur px-4 py-2 rounded">
      {isTouch ? "KUSHA KUMAR" : "Hover to Reveal"}
    </span>
  </div>
</div>

      {/* Desktop Hint */}
      {!isTouch && (
        <div
          className="absolute bottom-4 left-1/2 -translate-x-1/2 text-[10px] uppercase tracking-[0.52em] text-muted-ink"
          style={{
            opacity: active ? 0 : 1,
            transition: "opacity .10s ease",
          }}
        >
          Move your cursor
        </div>
      )}
    </div>
  );
}

function Bracket({ className }: { className: string }) {
  return (
    <span
      className={`absolute size-4 border-foreground/90 ${className}`}
    />
  );
}
