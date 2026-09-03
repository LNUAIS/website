import { Fragment } from "react";
import { tape } from "@/lib/content";

export function Tape() {
  return (
    <div className="overflow-hidden bg-gold text-ink">
      <div className="marquee flex w-max">
        {[0, 1, 2, 3].map((run) => (
          <TapeRun key={run} aria-hidden={run > 1} />
        ))}
      </div>
    </div>
  );
}

function TapeRun(props: { "aria-hidden"?: boolean }) {
  return (
    <div
      {...props}
      className="flex items-center gap-10 px-5 py-2.75 font-mono text-xs font-medium tracking-[0.08em] whitespace-nowrap"
    >
      {tape.map((word) => (
        <Fragment key={word}>
          <span>{word}</span>
          <span>·</span>
        </Fragment>
      ))}
    </div>
  );
}
