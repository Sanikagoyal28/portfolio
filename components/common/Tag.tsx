import type { ReactNode } from "react";

/** A monospace pill used for tech tags across sections. */
export default function Tag({ children }: { children: ReactNode }) {
  return <span className="tag">{children}</span>;
}

/** Renders a list of string tags into the prototype's `.tags` row. */
export function TagList({ tags }: { tags: string[] }) {
  return (
    <div className="tags">
      {tags.map((tag) => (
        <Tag key={tag}>{tag}</Tag>
      ))}
    </div>
  );
}
