import Reveal from "@/components/common/Reveal";
import RichText from "@/components/common/RichText";
import SectionHeader from "@/components/common/SectionHeader";
import { about } from "@/data/content";

/** Maps a 0-based index to the prototype's staggered reveal delay (d1–d4). */
const staggerDelay = (i: number) =>
  (i === 0 ? undefined : i) as 1 | 2 | 3 | 4 | undefined;

export default function About() {
  return (
    <section id="about" className="wrap">
      <SectionHeader num="01" title="About" />
      <div className="about-grid">
        <Reveal as="div" className="about-text">
          {about.paragraphs.map((paragraph, i) => (
            <p key={i}>
              <RichText segments={paragraph} />
            </p>
          ))}
        </Reveal>
        <div className="fact-list">
          {about.facts.map((fact, i) => (
            <Reveal key={fact.text} className="fact" delay={staggerDelay(i)}>
              <span className="ico">{fact.icon}</span> {fact.text}
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
