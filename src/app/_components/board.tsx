import { type BoardMember, board } from "@/lib/content";
import { Eyebrow, Section, Shell } from "./chrome";
import { SocialIcon } from "./social-icon";

const initials = (name: string) => {
  const words = name.split(" ");
  return (words[0][0] + words[words.length - 1][0]).toUpperCase();
};

export function Board() {
  const elected = board.filter((m) => !m.committee);
  const committee = board.filter((m) => m.committee);

  return (
    <Section id="board">
      <Shell>
        <Eyebrow>03 — THE BOARD</Eyebrow>
        <h2 className="mb-3 text-[34px] leading-[1.04] font-black tracking-[-0.04em] sm:text-[44px]">
          Who runs this
        </h2>
        <p className="mb-11 max-w-[560px] text-base leading-[1.6] text-chalk/60">
          Elected each spring at the annual meeting. Any student can stand for a
          seat.
        </p>

        <ul className="grid gap-5.5 sm:grid-cols-2 lg:grid-cols-3">
          {elected.map((m) => (
            <Member key={m.name} member={m} />
          ))}
        </ul>

        {committee.length > 0 && (
          <>
            <h3 className="mt-12 mb-8 font-mono text-[11px] tracking-[0.12em] text-chalk/45">
              COMMITTEE
            </h3>
            <ul className="grid gap-5.5 sm:grid-cols-2 lg:grid-cols-3">
              {committee.map((m) => (
                <Member key={m.name} member={m} />
              ))}
            </ul>
          </>
        )}
      </Shell>
    </Section>
  );
}

function Member({ member }: { member: BoardMember }) {
  return (
    <li className="flex flex-col rounded-b-[3px] border-t-3 border-gold bg-chalk/4 px-7 py-7">
      <span
        aria-hidden
        className="mb-5 grid size-12 shrink-0 place-items-center rounded-full border border-gold/40 font-mono text-[13px] tracking-[0.06em] text-gold"
      >
        {initials(member.name)}
      </span>
      <h4 className="text-[17px] font-extrabold tracking-[-0.02em]">
        {member.name}
      </h4>
      <div className="mt-1.25 font-mono text-[10.5px] tracking-[0.07em] text-gold">
        {member.role}
      </div>
      <p className="mt-3 flex-1 text-[14px] leading-[1.55] text-chalk/60 text-pretty">
        {member.blurb}
      </p>
      <a
        href={member.linkedin}
        target="_blank"
        rel="noreferrer"
        aria-label={`${member.name} on LinkedIn`}
        className="mt-5 text-chalk/50 transition-colors hover:text-gold"
      >
        <SocialIcon name="LinkedIn" />
      </a>
    </li>
  );
}
