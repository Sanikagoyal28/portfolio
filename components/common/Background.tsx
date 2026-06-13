"use client";

import { useEffect, useRef } from "react";

/**
 * Fixed-position decorative background: drifting color blobs, a masked grid
 * overlay, and a radial spotlight that tracks the cursor (via CSS custom
 * properties updated on pointermove, exactly like the prototype).
 */
export default function Background() {
  const spotlightRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const spot = spotlightRef.current;
    if (!spot) return;

    const onPointerMove = (e: PointerEvent) => {
      spot.style.setProperty("--mx", `${e.clientX}px`);
      spot.style.setProperty("--my", `${e.clientY}px`);
    };

    window.addEventListener("pointermove", onPointerMove, { passive: true });
    return () => window.removeEventListener("pointermove", onPointerMove);
  }, []);

  return (
    <>
      <div className="bg-fx" aria-hidden="true">
        <div className="blob blob-1" />
        <div className="blob blob-2" />
        <div className="blob blob-3" />
      </div>
      <div className="grid-overlay" aria-hidden="true" />
      <div id="spotlight" ref={spotlightRef} aria-hidden="true" />
    </>
  );
}
