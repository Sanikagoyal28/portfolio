import Reveal from "@/components/common/Reveal";
import SectionHeader from "@/components/common/SectionHeader";
import { TagList } from "@/components/common/Tag";
import { skills } from "@/data/content";

/** Maps a 0-based index to the prototype's staggered reveal delay (d1–d4). */
const staggerDelay = (i: number) =>
  (i === 0 ? undefined : i) as 1 | 2 | 3 | 4 | undefined;

export default function Skills() {
  return (
    <section id="skills" className="wrap">
      <SectionHeader num="03" title="Skills" />
      <div className="skills-grid">
        {skills.map((category, i) => (
          <Reveal key={category.title} className="skill-card" delay={staggerDelay(i)}>
            <div className="skill-head">
              <span className="skill-ico">{category.icon}</span>
              <h3>{category.title}</h3>
            </div>
            <TagList tags={category.tags} />
          </Reveal>
        ))}
      </div>
    </section>
  );
}
