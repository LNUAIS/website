import { board } from "@/lib/content";
import { Eyebrow, Placeholder, Section, Shell } from "./chrome";

export function Board() {
  return (
    <Section id="board">
      <Shell>
        <Eyebrow>03 — THE BOARD</Eyebrow>
        <h2 className="mb-3 text-[34px] leading-[1.04] font-black tracking-[-0.04em] sm:text-[44px]">
          Who runs this
        </h2>
        <p className="mb-11 max-w-[560px] text-base leading-[1.6] text-chalk/60">
          Elected each spring at the annual meeting. Anyone with a membership
          can stand for a seat.
        </p>
        <ul className="grid grid-cols-2 gap-5.5 lg:grid-cols-4">
          {board.map((m) => (
            <BoardMember key={m.name} {...m} />
          ))}
        </ul>
      </Shell>
    </Section>
  );
}

function BoardMember({
  name,
  role,
  study,
}: {
  name: string;
  role: string;
  study: string;
}) {
  return (
    <li>
      <Placeholder className="aspect-4/5">PORTRAIT</Placeholder>
      <div className="mt-3.5 text-[17px] font-extrabold tracking-[-0.02em]">
        {name}
      </div>
      <div className="mt-1.25 font-mono text-[10.5px] tracking-[0.07em] text-gold">
        {role}
      </div>
      <div className="mt-1.5 text-[13.5px] text-chalk/45">{study}</div>
    </li>
  );
}
