import Image from "next/image";
import Reveal from "@/components/common/Reveal";
import RichText from "@/components/common/RichText";
import { TagList } from "@/components/common/Tag";
import { assetPath } from "@/lib/assetPath";
import type { ProjectItem, ProjectLink } from "@/data/types";
import ProjectLinkIcon from "./ProjectLinkIcon";

interface ProjectCardProps {
  project: ProjectItem;
  delay?: 1 | 2 | 3 | 4;
}

const LINK_LABEL: Record<ProjectLink["type"], string> = {
  github: "GitHub",
  live: "Live site",
};

export default function ProjectCard({ project, delay }: ProjectCardProps) {
  return (
    <Reveal as="article" className="proj" delay={delay}>
      <a
        className={`proj-visual ${project.visualVariant}`}
        href={project.visualHref}
        target="_blank"
        rel="noreferrer"
        aria-label={project.title}
      >
        {project.glyph && <div className="proj-glyph">{project.glyph}</div>}
        {project.image && (
          <Image
            src={assetPath(project.image.src)}
            alt={project.image.alt}
            fill
            sizes="(max-width: 800px) 100vw, 50vw"
          />
        )}
      </a>
      <div className="proj-body">
        <div className="proj-title">
          <h3>{project.title}</h3>
          <div className="proj-links">
            {project.links.map((link) => (
              <a
                key={link.type}
                href={link.href}
                target="_blank"
                rel="noreferrer"
                aria-label={LINK_LABEL[link.type]}
                title={LINK_LABEL[link.type]}
              >
                <ProjectLinkIcon type={link.type} />
              </a>
            ))}
          </div>
        </div>
        <p>{project.description}</p>
        <ul className="hl-list">
          {project.highlights.map((highlight, i) => (
            <li key={i}>
              <RichText segments={highlight} />
            </li>
          ))}
        </ul>
        <TagList tags={project.tags} />
      </div>
    </Reveal>
  );
}
