import Reveal from "@/components/common/Reveal";
import SectionHeader from "@/components/common/SectionHeader";
import { education } from "@/data/content";

export default function Education() {
  return (
    <section id="education" className="wrap">
      <SectionHeader num="03" title="Education" />
      <div className="edu-list">
        {education.map((item, i) => (
          <Reveal
            key={item.degree}
            className="edu-card"
            delay={i === 0 ? undefined : 1}
          >
            <span className="edu-ico">{item.icon}</span>
            <div className="edu-main">
              <div className="edu-top">
                <div className="edu-degree">{item.degree}</div>
                <div className="edu-period">{item.period}</div>
              </div>
              <div className="edu-school">
                {item.school}
                {item.gpa && (
                  <>
                    {" · "}
                    <span className="gpa">{item.gpa}</span>
                  </>
                )}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
