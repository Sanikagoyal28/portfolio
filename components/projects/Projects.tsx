import SectionHeader from "@/components/common/SectionHeader";
import { projects } from "@/data/content";
import ProjectCard from "./ProjectCard";

export default function Projects() {
  return (
    <section id="projects" className="wrap">
      <SectionHeader num="04" title="Projects" />
      <div className="proj-grid">
        {projects.map((project, i) => (
          <ProjectCard
            key={project.href}
            project={project}
            delay={i % 2 === 1 ? 1 : undefined}
          />
        ))}
      </div>
    </section>
  );
}
