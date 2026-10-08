import { Fragment } from "react";

/** Splits the headline into words for the CSS reveal (see .reveal-word). */
export function HeroHeadline({ text, id }: { text: string; id?: string }) {
  const words = text.split(" ");
  return (
    <h1 id={id} className="text-h1 font-bold text-ink">
      {words.map((word, i) => (
        <Fragment key={i}>
          <span className="reveal-word" style={{ "--i": i } as React.CSSProperties}>
            {word}
          </span>
          {/* A real space between spans so lines can wrap. */}
          {i < words.length - 1 ? " " : null}
        </Fragment>
      ))}
    </h1>
  );
}
