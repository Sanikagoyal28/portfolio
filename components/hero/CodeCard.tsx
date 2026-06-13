import { Fragment } from "react";
import type { CodeCard as CodeCardData } from "@/data/types";

/**
 * The floating "sanika.ts" editor card. Renders the syntax-highlighted token
 * stream inside a `white-space: pre` body, so indentation/newlines in the
 * tokens are preserved exactly.
 */
export default function CodeCard({ card }: { card: CodeCardData }) {
  return (
    <div className="code-card">
      <div className="code-bar">
        <i />
        <i />
        <i />
        <span>{card.filename}</span>
      </div>
      <div className="code-body">
        {card.tokens.map((token, i) =>
          token.type ? (
            <span className={token.type} key={i}>
              {token.text}
            </span>
          ) : (
            <Fragment key={i}>{token.text}</Fragment>
          ),
        )}
      </div>
    </div>
  );
}
