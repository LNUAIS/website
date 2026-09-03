import Link from "next/link";
import { board, CONTACT_EMAIL, events, tape, tracks } from "@/lib/content";
import { ContactForm } from "./contact-form";
import { Mark } from "./mark";

const SECTION = "border-b border-chalk/10 px-5 py-16 sm:px-10 sm:py-23";
const SHELL = "mx-auto max-w-[1180px]";
const EYEBROW = "font-mono text-[11px] tracking-[0.12em] text-gold";
const PLACEHOLDER =
  "grid place-items-center rounded-[3px] border border-dashed border-chalk/22 bg-[repeating-linear-gradient(135deg,rgba(244,243,239,0.05)_0_6px,transparent_6px_14px)]";

export default function Home() {
  return (
    <main>
      {/* Hero */}
      <section
        id="top"
        className="relative overflow-hidden border-b border-chalk/10 px-5 pt-18 pb-14 sm:px-10 sm:pt-26 sm:pb-19"
      >
        <div
          aria-hidden
          className="pointer-events-none absolute -top-45 -right-35 size-150 rounded-full bg-[radial-gradient(circle,rgba(245,208,22,0.15),transparent_66%)]"
        />
        <div
          className={`relative grid items-end gap-14 ${SHELL} lg:grid-cols-[1.35fr_0.65fr]`}
        >
          <div>
            <h1 className="text-[15vw] leading-[0.9] font-black tracking-[-0.05em] text-balance sm:text-[80px] lg:text-[104px]">
              Build the future
              <br />
              of <span className="text-gold">AI</span>
            </h1>
            <p className="mt-8 max-w-[620px] text-[19px] leading-[1.55] text-chalk/68 text-pretty">
              A student society at Linnaeus University for people who want to
              work with these systems, not just read about them. We run
              workshops, ship projects, and take the hard questions seriously.
              No prior experience required.
            </p>
            <div className="mt-9 flex flex-wrap gap-3.5">
              <Link
                href="#contact"
                className="rounded-[2px] bg-gold px-7 py-3.5 text-[15px] font-bold text-ink transition-colors hover:bg-gold-hi"
              >
                Become a member
              </Link>
              <Link
                href="#events"
                className="rounded-[2px] border border-chalk/28 px-7 py-3.5 text-[15px] font-semibold transition-colors hover:border-gold hover:text-gold"
              >
                Upcoming events
              </Link>
            </div>
          </div>

          <div className="flex flex-col gap-3.5">
            <div className="hidden aspect-square place-items-center rounded-[3px] bg-[radial-gradient(circle_at_50%_50%,rgba(245,208,22,0.1),transparent_70%)] lg:grid">
              <Mark className="w-full text-gold" />
            </div>
            <dl className="grid grid-cols-2 gap-3.5">
              {[
                ["180+", "MEMBERS"],
                ["24", "EVENTS / YEAR"],
              ].map(([value, label]) => (
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
        </div>
      </section>

      {/* Tape */}
      <div className="overflow-hidden bg-gold text-ink">
        <div className="marquee flex w-max">
          {[0, 1].map((copy) => (
            <div
              key={copy}
              aria-hidden={copy === 1}
              className="flex items-center gap-10 px-5 py-2.75 font-mono text-xs font-medium tracking-[0.08em] whitespace-nowrap"
            >
              {[...tape, ...tape].flatMap((word, i) => [
                <span key={`w${i}`}>{word}</span>,
                <span key={`d${i}`}>·</span>,
              ])}
            </div>
          ))}
        </div>
      </div>

      {/* About */}
      <section id="about" className={`${SECTION} scroll-mt-18`}>
        <div className={SHELL}>
          <div className={`${EYEBROW} mb-5`}>01 — WHAT WE DO</div>
          <h2 className="mt-0 mb-13 max-w-[920px] text-[28px] leading-[1.14] font-extrabold tracking-[-0.03em] text-pretty sm:text-[42px]">
            AI is being deployed faster than most curricula can follow. Our
            purpose is to give students at Linnaeus University the hands-on
            ground, and the critical vocabulary, to shape that instead of only
            reacting to it.
          </h2>
          <div className="grid gap-6.5 md:grid-cols-3">
            {tracks.map((t) => (
              <div
                key={t.label}
                className="rounded-b-[3px] border-t-3 border-gold bg-chalk/4 px-7 py-8"
              >
                <div className="mb-3.5 font-mono text-[10px] tracking-[0.1em] text-gold/70">
                  {t.label}
                </div>
                <h3 className="mb-3 text-[22px] font-extrabold tracking-[-0.02em]">
                  {t.title}
                </h3>
                <p className="text-[15.5px] leading-[1.62] text-chalk/66 text-pretty">
                  {t.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Events */}
      <section id="events" className={`${SECTION} scroll-mt-18`}>
        <div className={SHELL}>
          <div className="mb-14 flex flex-wrap items-end justify-between gap-8">
            <div>
              <div className={`${EYEBROW} mb-5`}>02 — FUTURE EVENTS</div>
              <h2 className="text-[38px] leading-none font-black tracking-[-0.04em] sm:text-[56px]">
                What&rsquo;s coming up
              </h2>
            </div>
            <p className="max-w-[340px] text-[14.5px] leading-[1.6] text-chalk/55">
              Free for members, open to all students unless noted.
            </p>
          </div>

          <ol>
            {events.map((ev) => (
              <li
                key={ev.title}
                className="grid grid-cols-[64px_24px_1fr] items-stretch sm:grid-cols-[132px_34px_1fr]"
              >
                <div className="pr-4 pb-11 text-right sm:pr-6">
                  <div className="text-[26px] leading-[0.9] font-black tracking-[-0.05em] text-gold sm:text-[38px]">
                    {ev.day}
                  </div>
                  <div className="mt-1.75 font-mono text-[11px] tracking-[0.1em] text-chalk/50">
                    {ev.month} {ev.year}
                  </div>
                  <div className="mt-1.5 hidden text-[13px] text-chalk/40 sm:block">
                    {ev.weekday}
                  </div>
                </div>

                <div aria-hidden className="relative flex justify-center">
                  <div className="w-px bg-chalk/15" />
                  <div className="absolute top-2 size-3.25 rounded-full bg-gold ring-4 ring-ink" />
                </div>

                <div className="pb-11 pl-5 sm:pl-6.5">
                  <div className="mb-3 flex flex-wrap items-center gap-3">
                    <span className="border border-gold/45 px-2.25 py-1 font-mono text-[10px] tracking-[0.08em] text-gold">
                      {ev.kind}
                    </span>
                    <span className="font-mono text-[10.5px] tracking-[0.06em] text-chalk/42">
                      {ev.time} · {ev.place}
                    </span>
                  </div>
                  <h3 className="text-[21px] font-extrabold tracking-[-0.025em] text-pretty sm:text-[27px]">
                    {ev.title}
                  </h3>
                  <p className="mt-2.5 max-w-[660px] text-[15.5px] leading-[1.58] text-chalk/62 text-pretty">
                    {ev.blurb}
                  </p>
                  <Link
                    href="#contact"
                    className="mt-4 inline-block rounded-[2px] border border-chalk/24 px-4.5 py-2.5 text-[13.5px] font-semibold transition-colors hover:border-gold hover:text-gold"
                  >
                    Sign up →
                  </Link>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Board */}
      <section id="board" className={`${SECTION} scroll-mt-18`}>
        <div className={SHELL}>
          <div className={`${EYEBROW} mb-5`}>03 — THE BOARD</div>
          <h2 className="mb-3 text-[34px] leading-[1.04] font-black tracking-[-0.04em] sm:text-[44px]">
            Who runs this
          </h2>
          <p className="mb-11 max-w-[560px] text-base leading-[1.6] text-chalk/60">
            Elected each spring at the annual meeting. Anyone with a membership
            can stand for a seat.
          </p>
          <ul className="grid grid-cols-2 gap-5.5 lg:grid-cols-4">
            {board.map((m) => (
              <li key={m.name}>
                <div className={`${PLACEHOLDER} aspect-4/5`}>
                  <span className="font-mono text-[10px] tracking-[0.06em] text-chalk/38">
                    PORTRAIT
                  </span>
                </div>
                <div className="mt-3.5 text-[17px] font-extrabold tracking-[-0.02em]">
                  {m.name}
                </div>
                <div className="mt-1.25 font-mono text-[10.5px] tracking-[0.07em] text-gold">
                  {m.role}
                </div>
                <div className="mt-1.5 text-[13.5px] text-chalk/45">
                  {m.study}
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Sponsors */}
      <section
        id="sponsors"
        className="scroll-mt-18 border-b border-chalk/10 px-5 py-20 sm:px-10"
      >
        <div className={SHELL}>
          <div className="mb-9 flex flex-wrap items-end justify-between gap-8">
            <div>
              <div className={`${EYEBROW} mb-4.5`}>04 — SPONSORS</div>
              <h2 className="text-[30px] leading-[1.06] font-black tracking-[-0.035em] sm:text-[36px]">
                Backed by
              </h2>
            </div>
            <Link
              href="#contact"
              className="text-[14.5px] font-semibold text-gold hover:text-gold-hi"
            >
              Partner with us →
            </Link>
          </div>
          <div className="rail overflow-hidden [mask-image:linear-gradient(90deg,transparent,#000_5%,#000_95%,transparent)]">
            <div
              className="marquee flex w-max"
              style={{ animationDuration: "34s" }}
            >
              {Array.from({ length: 12 }, (_, i) => (
                <div
                  key={i}
                  className={`${PLACEHOLDER} mr-4.5 h-26 w-68.5 flex-none`}
                >
                  <span className="font-mono text-[10px] tracking-[0.06em] text-chalk/35">
                    SPONSOR LOGO
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className={`${SECTION} scroll-mt-18 bg-panel`}>
        <div
          className={`grid items-start gap-15 ${SHELL} lg:grid-cols-[0.85fr_1.15fr]`}
        >
          <div>
            <div className={`${EYEBROW} mb-5`}>05 — CONTACT US</div>
            <h2 className="mb-5 text-[36px] leading-[1.02] font-black tracking-[-0.04em] text-balance sm:text-[46px]">
              Write us a line
            </h2>
            <p className="mb-6.5 text-[16.5px] leading-[1.6] text-chalk/65 text-pretty">
              Joining, a talk you want to give, a partnership, or a topic you
              think we should cover. Fill this in and we&rsquo;ll open a
              ready-made draft in your mail app, addressed to us.
            </p>
            <div className="rounded-[3px] border border-chalk/14 px-5.5 py-5">
              <div className="mb-2 font-mono text-[10px] tracking-[0.1em] text-chalk/45">
                GOES TO
              </div>
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className="text-[17px] font-semibold text-gold hover:text-gold-hi"
              >
                {CONTACT_EMAIL}
              </a>
            </div>
          </div>

          <ContactForm />
        </div>
      </section>
    </main>
  );
}
