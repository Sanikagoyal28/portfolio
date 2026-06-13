"use client";

import { useState } from "react";
import ThemeToggle from "./ThemeToggle";

/** In-page section anchors shown in the floating nav. */
const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Education", href: "#education" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
];

/** Fixed pill navigation: logo, section links, and the theme toggle.
 *  On mobile the links collapse into a hamburger dropdown so every tab stays
 *  reachable. */
export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <nav>
      <a className="logo" href="#" onClick={() => setOpen(false)}>
        <span>sanika</span>.dev
      </a>

      <div className={`nav-links${open ? " open" : ""}`}>
        {NAV_LINKS.map((link) => (
          <a key={link.href} href={link.href} onClick={() => setOpen(false)}>
            {link.label}
          </a>
        ))}
      </div>

      <div className="nav-actions">
        <button
          type="button"
          className="nav-toggle"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((o) => !o)}
        >
          {open ? (
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path
                d="M6 6l12 12M18 6L6 18"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                fill="none"
              />
            </svg>
          ) : (
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path
                d="M4 7h16M4 12h16M4 17h16"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                fill="none"
              />
            </svg>
          )}
        </button>
        <ThemeToggle />
      </div>
    </nav>
  );
}
