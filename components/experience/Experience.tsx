import SectionHeader from "@/components/common/SectionHeader";
import { experience } from "@/data/content";
import ExperienceCard from "./ExperienceCard";

export default function Experience() {
  return (
    <section id="experience" className="wrap">
      <SectionHeader num="02" title="Experience" />
      {experience.map((item, i) => (
        <ExperienceCard key={`${item.company}-${i}`} item={item} />
      ))}
    </section>
  );
}
