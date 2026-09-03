import { getEvents, type LnuEvent } from "@/lib/events";
import { Eyebrow, Section, Shell } from "./chrome";

export function Events() {
  const today = new Date();
  today.setUTCHours(0, 0, 0, 0);

  const all = getEvents(); // newest first
  const upcoming = all.filter((ev) => ev.date >= today).reverse(); // soonest first
  const past = all.filter((ev) => ev.date < today);

  return (
    <Section id="events">
      <Shell>
        <div className="mb-14 flex flex-wrap items-end justify-between gap-8">
          <div>
            <Eyebrow>02 — EVENTS</Eyebrow>
            <h2 className="text-[38px] leading-none font-black tracking-[-0.04em] sm:text-[56px]">
              {upcoming.length > 0 ? "What’s coming up" : "What we’ve run"}
            </h2>
          </div>
          <p className="max-w-[340px] text-[14.5px] leading-[1.6] text-chalk/55">
            Free for members, open to all students unless noted.{" "}
            {upcoming.length > 0
              ? "Rooms are announced the morning of the event."
              : "Nothing is on the calendar right now — get in touch and we’ll let you know."}
          </p>
        </div>

        {upcoming.length > 0 && (
          <ol>
            {upcoming.map((ev) => (
              <EventRow key={ev.slug} event={ev} cta />
            ))}
          </ol>
        )}

        {upcoming.length > 0 && past.length > 0 && (
          <h3 className="mt-4 mb-10 font-mono text-[11px] tracking-[0.12em] text-chalk/45">
            PAST EVENTS
          </h3>
        )}

        {past.length > 0 && (
          <ol>
            {past.map((ev) => (
              <EventRow key={ev.slug} event={ev} />
            ))}
          </ol>
        )}
      </Shell>
    </Section>
  );
}

function EventRow({ event, cta }: { event: LnuEvent; cta?: boolean }) {
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
        <h4 className="text-[21px] font-extrabold tracking-[-0.025em] text-pretty sm:text-[27px]">
          {event.title}
        </h4>
        <p className="mt-2.5 max-w-[660px] text-[15.5px] leading-[1.58] text-chalk/62 text-pretty">
          {event.blurb}
        </p>
        {cta && event.link && (
          <a
            href={event.link}
            target="_blank"
            rel="noreferrer"
            className="mt-4 inline-block rounded-[2px] border border-chalk/24 px-4.5 py-2.5 text-[13.5px] font-semibold transition-colors hover:border-gold hover:text-gold"
          >
            Sign up →
          </a>
        )}
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
