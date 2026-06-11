import { useEffect, useRef, useState } from "react";

/** Interactive 3D cube on a platform — drag/tap to rotate. Optimized version */
export function CubeStage() {
  const [rot, setRot] = useState({ x: -22, y: -28 });
  const [active, setActive] = useState(false);

  const drag = useRef<{
    x: number;
    y: number;
    rx: number;
    ry: number;
  } | null>(null);

  const idleRaf = useRef<number>(0);
  const frame = useRef<number | null>(null);

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
          y: -28 + t * 0.15,
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

  const onDown = (cx: number, cy: number) => {
    drag.current = {
      x: cx,
      y: cy,
      rx: rot.x,
      ry: rot.y,
    };

    setActive(true);
  };

  const onMove = (cx: number, cy: number) => {
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
        y: drag.current.ry + dx * 0.5,
      });
    });
  };

  const onUp = () => {
    drag.current = null;

    setTimeout(() => {
      setActive(false);
    }, 1200);
  };

  return (
    <div
      className="relative w-full h-[300px] sm:h-[360px] select-none touch-pan-y"
      onMouseDown={(e) => onDown(e.clientX, e.clientY)}
      onMouseMove={(e) => onMove(e.clientX, e.clientY)}
      onMouseUp={onUp}
      onMouseLeave={onUp}
      onTouchStart={(e) => {
        if (e.touches.length >= 1) {
          const t = e.touches[0];
          onDown(t.clientX, t.clientY);
        }
      }}
      onTouchMove={(e) => {
        if (drag.current && e.touches.length >= 1) {
          const t = e.touches[0];
          onMove(t.clientX, t.clientY);
        }
      }}
      onTouchEnd={onUp}
      style={{
        perspective: "900px",
      }}
      aria-label="Interactive 3D cube"
    >
      <div
        className="absolute inset-0 grid place-items-center"
        style={{
          transformStyle: "preserve-3d",
          transform: `rotateX(${rot.x}deg) rotateY(${rot.y}deg)`,
          transition: drag.current
            ? "none"
            : "transform .5s cubic-bezier(.2,.7,.2,1)",
        }}
      >
        {/* Platform */}
        <div
          className="absolute"
          style={{
            transformStyle: "preserve-3d",
            transform: "translateY(80px) rotateX(90deg)",
          }}
        >
          <div
            className="w-[260px] h-[180px] rounded border-2 border-accent-blue/70 bg-accent-blue/10"
            style={{
              boxShadow:
                "inset 0 0 40px oklch(0.62 0.21 257 / .25)",
            }}
          />
        </div>

        {/* Cube */}
        <Cube />
      </div>

      {/* HUD Label */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none">
        <div
          className="relative px-4 py-2 text-[11px] uppercase tracking-[0.25em] text-foreground/90 bg-background/40 backdrop-blur-sm"
          style={{
            opacity: active ? 0 : 1,
            transition: "opacity .3s ease",
          }}
        >
          <Bracket className="top-0 left-0 border-t border-l" />
          <Bracket className="top-0 right-0 border-t border-r" />
          <Bracket className="bottom-0 left-0 border-b border-l" />
          <Bracket className="bottom-0 right-0 border-b border-r" />
          Drag to interact
        </div>
      </div>
    </div>
  );
}

function Cube() {
  const size = 120;

  const face =
    "absolute grid place-items-center border-2 border-accent-blue/80 text-accent-blue/90 text-[10px] uppercase tracking-[0.3em]";

  const bg =
    "linear-gradient(135deg, oklch(0.62 0.21 257 / .85), oklch(0.45 0.18 257 / .85))";

  const s = {
    width: size,
    height: size,
    background: bg,
  } as React.CSSProperties;

  const t = size / 2;

  return (
    <div
      className="relative"
      style={{
        width: size,
        height: size,
        transformStyle: "preserve-3d",
      }}
    >
      <div className={face} style={{ ...s, transform: `translateZ(${t}px)` }}>
        Design
      </div>

      <div
        className={face}
        style={{ ...s, transform: `rotateY(180deg) translateZ(${t}px)` }}
      >
        Research
      </div>

      <div
        className={face}
        style={{ ...s, transform: `rotateY(90deg) translateZ(${t}px)` }}
      >
        Craft
      </div>

      <div
        className={face}
        style={{ ...s, transform: `rotateY(-90deg) translateZ(${t}px)` }}
      >
        System
      </div>

      <div
        className={face}
        style={{ ...s, transform: `rotateX(90deg) translateZ(${t}px)` }}
      >
        UX
      </div>

      <div
        className={face}
        style={{ ...s, transform: `rotateX(-90deg) translateZ(${t}px)` }}
      >
        UI
      </div>
    </div>
  );
}

function Bracket({ className }: { className: string }) {
  return (
    <span
      className={`absolute size-2.5 border-foreground/80 ${className}`}
    />
  );
}
