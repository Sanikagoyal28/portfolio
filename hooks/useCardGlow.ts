"use client";

import { useCallback } from "react";
import type { PointerEvent } from "react";

/**
 * Returns a pointer-move handler that tracks the cursor position relative to
 * the hovered element via the `--cx` / `--cy` custom properties, driving the
 * radial glow on experience cards (see `.xp-card::before` in globals.css).
 */
export function useCardGlow() {
  return useCallback((e: PointerEvent<HTMLElement>) => {
    const el = e.currentTarget;
    const rect = el.getBoundingClientRect();
    el.style.setProperty("--cx", `${e.clientX - rect.left}px`);
    el.style.setProperty("--cy", `${e.clientY - rect.top}px`);
  }, []);
}
