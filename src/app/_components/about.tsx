import { activities } from "@/lib/content";
import { Eyebrow, Section, Shell } from "./chrome";

export function About() {
  return (
    <Section id="about">
      <Shell>
        <div className="mb-14 grid items-end gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,420px)] lg:gap-18">
          <div>
            <Eyebrow>01 — WHAT WE DO</Eyebrow>
            <h2 className="max-w-[22ch] text-[26px] leading-[1.22] font-bold tracking-[-0.025em] text-pretty sm:text-[30px]">
              The industry landscape is changing faster than most curricula can
              follow.
            </h2>
          </div>
          <p className="text-[16.5px] leading-[1.65] text-chalk/62 text-pretty">
            Our purpose is to give students at Linnaeus University the hands-on
            ground, and the critical vocabulary, to shape that instead of only
            reacting to it.
          </p>
        </div>

        <TheGap />

        <div className="mt-11 flex flex-wrap items-center gap-3 border-t border-chalk/16 pt-8.5">
          <span className="mr-3 font-mono text-[11px] tracking-[0.1em] text-chalk/40">
            HOW —
          </span>
          {activities.map((activity) => (
            <span
              key={activity}
              className="border border-gold/50 px-5 py-2.5 text-[15px] font-semibold sm:text-base"
            >
              {activity}
            </span>
          ))}
          <span className="bg-gold px-5 py-2.5 text-[15px] font-bold text-ink sm:text-base">
            Ship something real
          </span>
        </div>
      </Shell>
    </Section>
  );
}

/**
 * What the job asks for against what a degree covers, and the space between.
 *
 * The chart stretches to any width (`preserveAspectRatio="none"`), so the
 * labels are placed in percentages rather than pixels or they drift off their
 * marks — and the strokes are non-scaling so they don't squash with it.
 */
function TheGap() {
  return (
    <div className="relative h-[210px] sm:h-[300px]">
      <svg
        viewBox="0 0 1036 300"
        preserveAspectRatio="none"
        aria-hidden="true"
        className="absolute inset-0 block h-full w-full [&_*]:[vector-effect:non-scaling-stroke]"
      >
        <line
          x1="0"
          y1="292"
          x2="1036"
          y2="292"
          stroke="rgba(244,243,239,0.16)"
        />
        {[259, 518, 777].map((x) => (
          <line
            key={x}
            x1={x}
            y1="0"
            x2={x}
            y2="292"
            stroke="rgba(244,243,239,0.07)"
          />
        ))}

        <path
          d="M0,258 C420,252 700,210 1000,34 L1000,196 L0,268 Z"
          fill="rgba(245,208,22,0.12)"
        />
        <path
          d="M0,268 L1000,196"
          fill="none"
          stroke="rgba(244,243,239,0.45)"
          strokeWidth="1.5"
          strokeDasharray="6 6"
        />
        <path
          d="M0,258 C420,252 700,210 1000,34"
          fill="none"
          stroke="var(--color-gold)"
          strokeWidth="2.5"
        />

        <circle cx="1000" cy="34" r="5" fill="var(--color-gold)" />
        <circle
          cx="1000"
          cy="196"
          r="4"
          fill="none"
          stroke="rgba(244,243,239,0.55)"
          strokeWidth="1.5"
        />

        <g stroke="rgba(245,208,22,0.55)">
          <line x1="836" y1="118" x2="836" y2="208" />
          <line x1="828" y1="118" x2="844" y2="118" />
          <line x1="828" y1="208" x2="844" y2="208" />
        </g>
      </svg>

      <div className="absolute top-0 right-[4.5%] text-right font-mono text-[10px] leading-[1.5] tracking-[0.1em] text-gold sm:text-[11px]">
        WHAT THE JOB
        <br />
        REQUIRES
      </div>
      <div className="absolute top-[67%] right-0 text-right font-mono text-[10px] leading-[1.5] tracking-[0.1em] text-chalk/50 sm:text-[11px]">
        WHAT A CURRICULUM
        <br />
        COVERS
      </div>
      <div className="absolute top-[46%] left-[80.7%] hidden w-[200px] -translate-x-full pr-4 text-right sm:block">
        <div className="mb-0.75 font-mono text-[11px] tracking-[0.1em] text-chalk/90">
          THE GAP
        </div>
        <div className="font-mono text-[11px] tracking-[0.1em] text-chalk/45">
          WE WORK HERE
        </div>
      </div>

      <div className="absolute -bottom-6 flex w-full justify-between font-mono text-[10.5px] tracking-[0.12em] text-chalk/30">
        <span>FIRST TERM</span>
        <span>GRADUATION</span>
      </div>
    </div>
  );
}
