import Link from "next/link";
import { Eyebrow, Placeholder, Section, Shell } from "./chrome";

// Placeholder rail until real sponsor logos exist; replace with the list.
const slots = Array.from({ length: 12 }, (_, i) => `slot-${i}`);

export function Sponsors() {
  return (
    <Section id="sponsors">
      <Shell>
        <div className="mb-9 flex flex-wrap items-end justify-between gap-8">
          <div>
            <Eyebrow>04 — SPONSORS</Eyebrow>
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
            {slots.map((slot) => (
              <Placeholder key={slot} className="mr-4.5 h-26 w-68.5 flex-none">
                SPONSOR LOGO
              </Placeholder>
            ))}
          </div>
        </div>
      </Shell>
    </Section>
  );
}
