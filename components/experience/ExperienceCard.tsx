"use client";

import Reveal from "@/components/common/Reveal";
import RichText from "@/components/common/RichText";
import { TagList } from "@/components/common/Tag";
import { useCardGlow } from "@/hooks/useCardGlow";
import type { ExperienceItem } from "@/data/types";

export default function ExperienceCard({ item }: { item: ExperienceItem }) {
  const onPointerMove = useCardGlow();

  return (
    <Reveal className="xp-card" onPointerMove={onPointerMove}>
      <div className="xp-top">
        <div className="xp-role">
          {item.role} <span className="xp-co">· {item.company}</span>
        </div>
        <div className="xp-period">{item.period}</div>
      </div>
      {item.paragraphs.map((paragraph, i) => (
        <p key={i}>
          <RichText segments={paragraph} emphasisTag="em" />
        </p>
      ))}
      <TagList tags={item.tags} />
    </Reveal>
  );
}
