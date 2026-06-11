import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";

export function ThemeToggle() {
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

  return (
    <div className="relative group">
      <button
        type="button"
        onClick={toggle}
        role="switch"
        aria-checked={isDark}
        aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
        className="size-9 rounded-full grid place-items-center text-muted-ink hover:text-foreground hover:bg-surface-2 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-blue focus-visible:text-foreground transition relative overflow-hidden"
      >
        <Sun
          className="size-4 absolute"
          aria-hidden
          style={{
            opacity: isDark ? 0 : 1,
            transform: isDark
              ? "rotate(-90deg) scale(0.6)"
              : "rotate(0deg) scale(1)",
            transition:
              "opacity .35s ease, transform .45s cubic-bezier(.2,.7,.2,1)",
          }}
        />

        <Moon
          className="size-4 absolute"
          aria-hidden
          style={{
            opacity: isDark ? 1 : 0,
            transform: isDark
              ? "rotate(0deg) scale(1)"
              : "rotate(90deg) scale(0.6)",
            transition:
              "opacity .35s ease, transform .45s cubic-bezier(.2,.7,.2,1)",
          }}
        />
      </button>

      <span
        className="
          absolute
          top-12
          left-1/2
          -translate-x-1/2
          whitespace-nowrap
          rounded-lg
          bg-black
          px-3
          py-1.5
          text-xs
          font-medium
          text-white
          opacity-0
          invisible
          group-hover:opacity-100
          group-hover:visible
          transition-all
          duration-300
          pointer-events-none
          z-50
        "
      >
        {isDark ? "Light Mode" : "Dark Mode"}
      </span>
    </div>
  );
}