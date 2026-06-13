"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

/**
 * Light/dark toggle. Renders the moon (light, default) until mounted to avoid
 * a hydration mismatch, then reflects the active theme. next-themes persists
 * the choice to localStorage.
 */
export default function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Theme is only known after hydration; this one-time flag avoids rendering a
  // mismatched icon on the server. This is the documented next-themes pattern.
  // eslint-disable-next-line react-hooks/set-state-in-effect
  useEffect(() => setMounted(true), []);

  const isDark = mounted && resolvedTheme === "dark";

  return (
    <button
      id="theme-btn"
      type="button"
      aria-label="Toggle dark mode"
      title="Toggle theme"
      onClick={() => setTheme(isDark ? "light" : "dark")}
    >
      {isDark ? "☀️" : "🌙"}
    </button>
  );
}
