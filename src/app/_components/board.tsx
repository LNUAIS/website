import Image from "next/image";
import { type BoardMember, getBoard } from "@/lib/board";
import { Eyebrow, Placeholder, Section, Shell } from "./chrome";
import { SocialIcon } from "./social-icon";

export function Board() {
  const board = getBoard();

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

        <div className="rail overflow-hidden [mask-image:linear-gradient(90deg,transparent,#000_5%,#000_95%,transparent)]">
          <div
            className="marquee flex w-max"
            style={{ animationDuration: "60s" }}
          >
            {[0, 1].map((copy) => (
              // The keyframe slides the track -50%, so it holds exactly two runs.
              <ul key={copy} aria-hidden={copy === 1} className="flex">
                {board.map((m) => (
                  <Member key={m.slug} member={m} />
                ))}
              </ul>
            ))}
          </div>
        </div>
      </Shell>
    </Section>
  );
}

function Member({ member }: { member: BoardMember }) {
  return (
    <li className="mr-5.5 w-60 flex-none">
      {member.photo ? (
        <div className="relative aspect-4/5 overflow-hidden rounded-[3px] border border-chalk/15 bg-chalk/5">
          <Image
            src={member.photo}
            alt={member.name}
            fill
            sizes="240px"
            className="object-cover object-top"
          />
        </div>
      ) : (
        <Placeholder className="aspect-4/5">PORTRAIT</Placeholder>
      )}
      <div className="mt-3.5 flex items-center gap-2.5">
        <span className="text-[17px] font-extrabold tracking-[-0.02em]">
          {member.name}
        </span>
        {member.committee && (
          <span className="border border-chalk/20 px-1.5 py-0.5 font-mono text-[9px] tracking-[0.08em] text-chalk/40">
            COMMITTEE
          </span>
        )}
      </div>
      <div className="mt-1.25 font-mono text-[10.5px] tracking-[0.07em] text-gold">
        {member.role}
      </div>
      {member.blurb && (
        <p className="mt-1.5 text-[13.5px] leading-[1.5] text-chalk/45 text-pretty">
          {member.blurb}
        </p>
      )}
      {member.linkedin && (
        <a
          href={member.linkedin}
          target="_blank"
          rel="noreferrer"
          aria-label={`${member.name} on LinkedIn`}
          className="mt-3 inline-block text-chalk/45 transition-colors hover:text-gold"
        >
          <SocialIcon name="LinkedIn" />
        </a>
      )}
    </li>
  );
}
