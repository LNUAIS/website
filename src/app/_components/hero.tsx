import Link from "next/link";
import { Shell } from "./chrome";
import { InfinityMark } from "./infinity-mark";

const stats = [
  ["180+", "MEMBERS"],
  ["24", "EVENTS / YEAR"],
];

export function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden border-b border-chalk/10 px-5 pt-18 pb-14 sm:px-10 sm:pt-26 sm:pb-19"
    >
      <Glow />
      <Shell className="relative grid items-end gap-14 lg:grid-cols-[1.35fr_0.65fr]">
        <div>
          <h1 className="text-[15vw] leading-[0.9] font-black tracking-[-0.05em] text-balance sm:text-[80px] lg:text-[104px]">
            Build the future
            <br />
            of <span className="text-gold">AI</span>
          </h1>
          <p className="mt-8 max-w-[620px] text-[19px] leading-[1.55] text-chalk/68 text-pretty">
            A student society at Linnaeus University for people who want to work
            with these systems, not just read about them. We run workshops, ship
            projects, and take the hard questions seriously. No prior experience
            required.
          </p>
          <div className="mt-9 flex flex-wrap gap-3.5">
            <Link
              href="#events"
              className="rounded-[2px] bg-gold px-7 py-3.5 text-[15px] font-bold text-ink transition-colors hover:bg-gold-hi"
            >
              Upcoming events
            </Link>
            <Link
              href="#contact"
              className="rounded-[2px] border border-chalk/28 px-7 py-3.5 text-[15px] font-semibold transition-colors hover:border-gold hover:text-gold"
            >
              Get in touch
            </Link>
          </div>
        </div>

        <div className="flex flex-col gap-3.5">
          <InfinityMark className="mb-24 -ml-[15%] hidden w-[150%] lg:block" />
          <dl className="grid grid-cols-2 gap-3.5">
            {stats.map(([value, label]) => (
              <div key={label} className="rounded-[3px] bg-chalk/5 p-4.5">
                <dt className="text-[34px] font-black tracking-[-0.04em] text-gold">
                  {value}
                </dt>
                <dd className="mt-1 font-mono text-[10px] tracking-[0.06em] text-chalk/50">
                  {label}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </Shell>
    </section>
  );
}

function Glow() {
  return (
    <div
      aria-hidden
      className="pointer-events-none absolute -top-45 -right-35 size-150 rounded-full bg-[radial-gradient(circle,rgba(245,208,22,0.15),transparent_66%)]"
    />
  );
}
