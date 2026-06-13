/**
 * Content types. Every piece of copy on the site is described by these
 * interfaces and lives in the JSON files under `content/`, so the site can be
 * updated without touching component code.
 */

/** A run of text with optional inline styling. Replaces raw <em>/<span> HTML. */
export interface TextSegment {
  text: string;
  /** Renders bold/strong in the page's foreground color. */
  emphasis?: boolean;
  /** Renders in the teal accent color (the prototype's `.hl`). */
  highlight?: boolean;
}

/** Known social/contact link icons (SVG provided by the SocialIcon component). */
export type SocialIconKey = "github" | "linkedin" | "leetcode" | "email";

export interface SocialLink {
  label: string;
  href: string;
  icon: SocialIconKey;
}

/** A single token in the hero code card, mapped to a syntax-highlight class. */
export interface CodeToken {
  text: string;
  /** tk=keyword, tv=variable, tp=property, ts=string, tu=punctuation. */
  type?: "tk" | "tv" | "tp" | "ts" | "tu";
}

export interface CodeCard {
  filename: string;
  /** Flat token stream; whitespace/newlines are plain (untyped) tokens. */
  tokens: CodeToken[];
}

export interface Profile {
  firstName: string;
  lastName: string;
  /** Status pill text, e.g. "Frontend Engineer · Bangalore, India". */
  status: string;
  /** Rotating strings for the typewriter. */
  roles: string[];
  heroSub: TextSegment[];
  resumeUrl: string;
  socials: SocialLink[];
  codeCard: CodeCard;
  floatChips: string[];
}

export interface Fact {
  icon: string;
  text: string;
}

export interface About {
  paragraphs: TextSegment[][];
  facts: Fact[];
}

export interface ExperienceItem {
  role: string;
  company: string;
  period: string;
  paragraphs: TextSegment[][];
  tags: string[];
}

export interface SkillCategory {
  icon: string;
  title: string;
  tags: string[];
}

export interface ProjectImage {
  src: string;
  alt: string;
}

export interface ProjectItem {
  title: string;
  href: string;
  description: string;
  tags: string[];
  /** Background gradient variant: "pv-1" | "pv-2" | "pv-3" | "pv-4". */
  visualVariant: string;
  /** Optional thumbnail; falls back to the glyph when absent. */
  image?: ProjectImage;
  /** Optional decorative wordmark shown behind/instead of the image. */
  glyph?: string;
}

export interface Contact {
  heading: string;
  body: string;
  email: string;
}
