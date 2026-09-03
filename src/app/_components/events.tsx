import { events } from "@/lib/content";
import { Eyebrow, Section, Shell } from "./chrome";

type Event = (typeof events)[number];

export function Events() {
  return (
    <Section id="events">
      <Shell>
        <div className="mb-14 flex flex-wrap items-end justify-between gap-8">
          <div>
            <Eyebrow>02 — PAST EVENTS</Eyebrow>
            <h2 className="text-[38px] leading-none font-black tracking-[-0.04em] sm:text-[56px]">
              What we&rsquo;ve run
            </h2>
          </div>
          <p className="max-w-[340px] text-[14.5px] leading-[1.6] text-chalk/55">
            Free for members, open to all students unless noted. Nothing is on
            the calendar right now — join and you&rsquo;ll hear first.
          </p>
        </div>

        <ol>
          {events.map((ev) => (
            <EventRow key={ev.title} event={ev} />
          ))}
        </ol>
      </Shell>
    </Section>
  );
}

function EventRow({ event }: { event: Event }) {
  return (
    <li className="grid grid-cols-[64px_24px_1fr] items-stretch sm:grid-cols-[132px_34px_1fr]">
      <div className="pr-4 pb-11 text-right sm:pr-6">
        <div className="text-[26px] leading-[0.9] font-black tracking-[-0.05em] text-gold sm:text-[38px]">
          {event.day}
        </div>
        <div className="mt-1.75 font-mono text-[11px] tracking-[0.1em] text-chalk/50">
          {event.month} {event.year}
        </div>
        <div className="mt-1.5 hidden text-[13px] text-chalk/40 sm:block">
          {event.weekday}
        </div>
      </div>

      <Rail />

      <div className="pb-11 pl-5 sm:pl-6.5">
        <div className="mb-3 flex flex-wrap items-center gap-3">
          <span className="border border-gold/45 px-2.25 py-1 font-mono text-[10px] tracking-[0.08em] text-gold">
            {event.kind}
          </span>
          <span className="font-mono text-[10.5px] tracking-[0.06em] text-chalk/42">
            {event.place}
          </span>
        </div>
        <h3 className="text-[21px] font-extrabold tracking-[-0.025em] text-pretty sm:text-[27px]">
          {event.title}
        </h3>
        <p className="mt-2.5 max-w-[660px] text-[15.5px] leading-[1.58] text-chalk/62 text-pretty">
          {event.blurb}
        </p>
      </div>
    </li>
  );
}

function Rail() {
  return (
    <div aria-hidden className="relative flex justify-center">
      <div className="w-px bg-chalk/15" />
      <div className="absolute top-2 size-3.25 rounded-full bg-gold ring-4 ring-ink" />
    </div>
  );
}
