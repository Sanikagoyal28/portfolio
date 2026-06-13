"use client";

import { useEffect, useState } from "react";

/**
 * Cycles through the given roles with a type/pause/delete loop, mirroring the
 * prototype's timings (55ms type, 1800ms hold, 28ms delete, 350ms between).
 */
export default function TypewriterRole({ roles }: { roles: string[] }) {
  const [text, setText] = useState("");

  useEffect(() => {
    if (roles.length === 0) return;

    let roleIndex = 0;
    let charIndex = 0;
    let deleting = false;
    let timer: ReturnType<typeof setTimeout>;

    const tick = () => {
      const word = roles[roleIndex];
      setText(word.slice(0, charIndex));

      if (!deleting && charIndex < word.length) {
        charIndex++;
        timer = setTimeout(tick, 55);
      } else if (!deleting) {
        deleting = true;
        timer = setTimeout(tick, 1800);
      } else if (charIndex > 0) {
        charIndex--;
        timer = setTimeout(tick, 28);
      } else {
        deleting = false;
        roleIndex = (roleIndex + 1) % roles.length;
        timer = setTimeout(tick, 350);
      }
    };

    tick();
    return () => clearTimeout(timer);
  }, [roles]);

  return (
    <>
      <span>{text}</span>
      <span className="caret">|</span>
    </>
  );
}
