import { Fragment } from "react";
import type { TextSegment } from "@/data/types";

interface RichTextProps {
  segments: TextSegment[];
  /**
   * Element used for emphasized segments. The prototype styles `<strong>` in
   * about/hero copy and `<em>` inside experience cards — both render as bold
   * foreground text. Defaults to "strong".
   */
  emphasisTag?: "strong" | "em";
}

/**
 * Renders structured text segments with optional inline emphasis/highlight,
 * replacing raw HTML strings (no dangerouslySetInnerHTML).
 */
export default function RichText({
  segments,
  emphasisTag: Emphasis = "strong",
}: RichTextProps) {
  return (
    <>
      {segments.map((segment, i) => {
        if (segment.highlight) {
          return (
            <span className="hl" key={i}>
              {segment.text}
            </span>
          );
        }
        if (segment.emphasis) {
          return <Emphasis key={i}>{segment.text}</Emphasis>;
        }
        return <Fragment key={i}>{segment.text}</Fragment>;
      })}
    </>
  );
}
