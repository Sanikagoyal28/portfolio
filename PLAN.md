# Portfolio → Next.js Migration Plan

Scaffold the working single-file prototype (`~/Desktop/portfolio/index.html`) into a
production-grade **Next.js (App Router) + TypeScript + Tailwind CSS v4** project, preserving
the exact design, colors, animations, content, and responsive behavior. Content lives in JSON
so it can be edited without touching components. Light/dark toggle is retained.

---

## Decisions (confirmed)

| Area | Choice |
| --- | --- |
| Styling | Design tokens stay as CSS variables in `globals.css` (verbatim from prototype) for exact fidelity; Tailwind v4 `@theme` maps tokens → utilities; Tailwind handles layout/spacing. |
| Theme toggle | `next-themes` with `attribute="data-theme"`, `defaultTheme="light"` — drives the existing `[data-theme="dark"]` block, with localStorage persistence + no-flash. |
| Location | `~/sanika/projects/portfolio` (existing git repo). Images copied into `public/assets/`. |
| Fonts | `next/font/google` (Space Grotesk, Inter, JetBrains Mono) exposing the same `--font-*` vars. |
| Rich text | Inline `<em>` / highlight spans modeled as structured token segments in JSON — no `dangerouslySetInnerHTML`. |

---

## Target structure

```
portfolio/
├── app/
│   ├── layout.tsx          # fonts, ThemeProvider, metadata, Background
│   ├── page.tsx            # composes sections
│   └── globals.css         # tokens + keyframes + complex CSS (verbatim) + Tailwind
├── components/
│   ├── nav/Nav.tsx
│   ├── nav/ThemeToggle.tsx          (client)
│   ├── hero/Hero.tsx
│   ├── hero/TypewriterRole.tsx      (client)
│   ├── hero/CodeCard.tsx
│   ├── about/About.tsx
│   ├── experience/Experience.tsx
│   ├── experience/ExperienceCard.tsx
│   ├── skills/Skills.tsx
│   ├── projects/Projects.tsx
│   ├── projects/ProjectCard.tsx
│   ├── contact/Contact.tsx
│   └── common/
│       ├── Background.tsx            (client — blobs, grid, spotlight)
│       ├── SectionHeader.tsx
│       ├── Tag.tsx
│       ├── Reveal.tsx                (client — IntersectionObserver)
│       └── RichText.tsx             # renders structured text segments
├── content/
│   ├── profile.json
│   ├── about.json
│   ├── experience.json
│   ├── skills.json
│   ├── projects.json
│   └── contact.json
├── data/
│   ├── types.ts            # interfaces for all content
│   └── content.ts          # typed imports of the JSON
├── hooks/
│   └── useCardGlow.ts      # cursor-follow glow for cards
├── public/assets/          # edumate.png, scrolls.png
├── next.config.ts          # remote image hosts
├── tailwind.config / postcss
└── tsconfig.json
```

---

## Components & responsibilities

- **Nav** — fixed pill nav: logo, section links, `ThemeToggle`. Links from `profile.json`.
- **ThemeToggle** (client) — `useTheme()` from next-themes; 🌙/☀️ swap, rotate-on-hover.
- **Hero** — status pill, animated gradient name, `TypewriterRole`, sub copy, CTA buttons + social icons, `CodeCard` visual with float chips. All copy/links from `profile.json`.
- **TypewriterRole** (client) — ports the type/delete loop over `profile.roles`.
- **CodeCard** — renders the syntax-highlighted `sanika.ts` block from structured tokens in `profile.json`.
- **About** — paragraphs (RichText) + fact list from `about.json`.
- **Experience / ExperienceCard** — maps `experience.json`; card-glow via `useCardGlow`; tags; RichText for highlighted copy.
- **Skills** — category cards + tags from `skills.json`.
- **Projects / ProjectCard** — grid from `projects.json`; image or gradient+glyph fallback; hover transforms.
- **Contact** — heading, copy, mailto CTA from `contact.json`.
- **Background** (client) — blobs, grid overlay, cursor spotlight (pointermove → CSS vars).
- **SectionHeader** — `NN` + title + gradient line.
- **Tag** — mono pill used across sections.
- **Reveal** (client) — wraps children, adds `.in` on intersection; respects reduced-motion.
- **RichText** — renders `{ text, emphasis?, highlight? }[]` segments.

Server components by default; `client` marked only where browser APIs are needed.

---

## Content model (typed)

- `profile`: name, lastName, role tagline, location, status, heroSub segments, roles[], resumeUrl, socials[] (label, href, icon), codeCard lines[], floatChips[].
- `about`: paragraphs[] (segment[]), facts[] (icon, text).
- `experience`: items[] { role, company, period, location?, paragraphs (segment[]), tags[] }.
- `skills`: categories[] { icon, title, tags[] }.
- `projects`: items[] { title, href, description, tags[], image? (url/local), glyph?, visualVariant (pv-1..4) }.
- `contact`: heading, body, email.

`segment` = `{ text: string; emphasis?: boolean; highlight?: boolean }`.

---

## Step-by-step

1. **Scaffold** — `create-next-app` (TS, App Router, Tailwind, no src dir, `@/*` alias) into the repo.
2. **Globals** — copy all `:root` / `[data-theme=dark]` tokens, keyframes, and complex component CSS into `globals.css`; wire Tailwind `@theme` token mapping.
3. **Fonts & layout** — set up `next/font`, `ThemeProvider` (next-themes), metadata/OG, mount `Background`.
4. **Content** — author the six JSON files + `types.ts` + `content.ts`.
5. **Common components** — `Reveal`, `Tag`, `SectionHeader`, `RichText`, `Background`, `useCardGlow`.
6. **Sections** — build Nav, Hero (+Typewriter, +CodeCard), About, Experience, Skills, Projects, Contact; compose in `page.tsx`.
7. **Assets** — copy images to `public/assets/`; configure remote image hosts in `next.config`.
8. **Responsive** — port the 920px / 800px breakpoints; verify layout at mobile/tablet/desktop.
9. **Verify** — `npm run build` + `lint` clean; visual parity check (both themes, animations, responsive); reduced-motion honored.

---

## Verification checklist

- [ ] `npm run build` and `npm run lint` pass with no errors.
- [ ] Light + dark themes match prototype; toggle persists across reload with no flash.
- [ ] All animations present: blobs, gradient name, typewriter, pulse dot, reveal-on-scroll, card glow, spotlight, hover transforms.
- [ ] Content edits in JSON reflect on the page (no hardcoded copy in components).
- [ ] Responsive at ~375px / ~768px / ~1280px matches prototype breakpoints.
- [ ] Images load (local + remote); glyph fallback works.
- [ ] `prefers-reduced-motion` disables animations.
