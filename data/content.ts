/**
 * Single import surface for all site content. Components import typed objects
 * from here rather than reaching into JSON directly, so the content shape is
 * validated against `types.ts` at build time.
 */
import profileJson from "@/content/profile.json";
import aboutJson from "@/content/about.json";
import experienceJson from "@/content/experience.json";
import skillsJson from "@/content/skills.json";
import projectsJson from "@/content/projects.json";
import contactJson from "@/content/contact.json";

import type {
  Profile,
  About,
  ExperienceItem,
  SkillCategory,
  ProjectItem,
  Contact,
} from "./types";

export const profile = profileJson as Profile;
export const about = aboutJson as About;
export const experience = experienceJson.items as ExperienceItem[];
export const skills = skillsJson.categories as SkillCategory[];
export const projects = projectsJson.items as ProjectItem[];
export const contact = contactJson as Contact;
