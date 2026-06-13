import Reveal from "./Reveal";

interface SectionHeaderProps {
  /** Two-digit section number, e.g. "01". */
  num: string;
  title: string;
}

/** The "NN — Title — gradient line" header shared by every section. */
export default function SectionHeader({ num, title }: SectionHeaderProps) {
  return (
    <Reveal className="sec-head">
      <span className="sec-num">{num}</span>
      <h2>{title}</h2>
      <div className="sec-line" />
    </Reveal>
  );
}
