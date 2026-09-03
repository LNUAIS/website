import { tracks } from "@/lib/content";
import { Eyebrow, Section, Shell } from "./chrome";

export function About() {
  return (
    <Section id="about">
      <Shell>
        <Eyebrow>01 — WHAT WE DO</Eyebrow>
        <h2 className="mb-13 max-w-[920px] text-[28px] leading-[1.14] font-extrabold tracking-[-0.03em] text-pretty sm:text-[42px]">
          AI is being deployed faster than most curricula can follow. Our
          purpose is to give students at Linnaeus University the hands-on
          ground, and the critical vocabulary, to shape that instead of only
          reacting to it.
        </h2>
        <div className="grid gap-6.5 md:grid-cols-3">
          {tracks.map((t) => (
            <TrackCard key={t.label} {...t} />
          ))}
        </div>
      </Shell>
    </Section>
  );
}

function TrackCard({
  label,
  title,
  body,
}: {
  label: string;
  title: string;
  body: string;
}) {
  return (
    <div className="rounded-b-[3px] border-t-3 border-gold bg-chalk/4 px-7 py-8">
      <div className="mb-3.5 font-mono text-[10px] tracking-[0.1em] text-gold/70">
        {label}
      </div>
      <h3 className="mb-3 text-[22px] font-extrabold tracking-[-0.02em]">
        {title}
      </h3>
      <p className="text-[15.5px] leading-[1.62] text-chalk/66 text-pretty">
        {body}
      </p>
    </div>
  );
}
