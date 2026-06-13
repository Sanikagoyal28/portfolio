import Image from "next/image";
import Reveal from "@/components/common/Reveal";
import { TagList } from "@/components/common/Tag";
import type { ProjectItem } from "@/data/types";

interface ProjectCardProps {
  project: ProjectItem;
  delay?: 1 | 2 | 3 | 4;
}

export default function ProjectCard({ project, delay }: ProjectCardProps) {
  const isExternal = project.href.startsWith("http");

  return (
    <Reveal
      as="a"
      className="proj"
      delay={delay}
      href={project.href}
      {...(isExternal ? { target: "_blank", rel: "noreferrer" } : {})}
    >
      <div className={`proj-visual ${project.visualVariant}`}>
        {project.glyph && <div className="proj-glyph">{project.glyph}</div>}
        {project.image && (
          <Image
            src={project.image.src}
            alt={project.image.alt}
            fill
            sizes="(max-width: 800px) 100vw, 50vw"
          />
        )}
      </div>
      <div className="proj-body">
        <div className="proj-title">
          <h3>{project.title}</h3>
          <span className="proj-arrow">↗</span>
        </div>
        <p>{project.description}</p>
        <TagList tags={project.tags} />
      </div>
    </Reveal>
  );
}
