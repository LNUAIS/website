import Image from "next/image";
import Link from "next/link";
import { getSponsors, type Sponsor } from "@/lib/sponsors";
import { Eyebrow, Placeholder, Section, Shell } from "./chrome";

// Shown until there are real sponsor files, so the rail is never empty.
const PLACEHOLDERS = Array.from({ length: 12 }, (_, i) => `slot-${i}`);

// One run has to be wider than the viewport or the loop shows a gap, so a
// short list is repeated until there are enough tiles to cover it.
const MIN_TILES = 8;

export function Sponsors() {
  const sponsors = getSponsors();
  const run =
    sponsors.length > 0
      ? Array.from(
          { length: Math.ceil(MIN_TILES / sponsors.length) },
          () => sponsors,
        ).flat()
      : [];

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
            {sponsors.length > 0
              ? // The keyframe slides the track -50%, so it holds exactly two runs.
                [0, 1].map((copy) => (
                  <div key={copy} aria-hidden={copy === 1} className="flex">
                    {run.map((s, i) => (
                      <SponsorTile key={`${s.slug}-${i}`} sponsor={s} />
                    ))}
                  </div>
                ))
              : PLACEHOLDERS.map((slot) => (
                  <Placeholder
                    key={slot}
                    className="mr-4.5 h-26 w-68.5 flex-none"
                  >
                    SPONSOR LOGO
                  </Placeholder>
                ))}
          </div>
        </div>
      </Shell>
    </Section>
  );
}

function SponsorTile({ sponsor }: { sponsor: Sponsor }) {
  // Brands publish either a dark mark or a white one, and only they know which,
  // so the tile follows the logo rather than the other way round.
  const onDark = sponsor.background === "dark";
  const inner = sponsor.logo ? (
    <Image
      src={sponsor.logo}
      alt={sponsor.name}
      fill
      sizes="274px"
      className="object-contain p-6"
    />
  ) : (
    <span
      className={`px-5 text-center text-[15px] font-semibold ${onDark ? "text-chalk/70" : "text-ink/70"}`}
    >
      {sponsor.name}
    </span>
  );

  const className = `relative mr-4.5 grid h-26 w-68.5 flex-none place-items-center rounded-[3px] ${
    onDark ? "border border-chalk/12 bg-chalk/5" : "bg-chalk"
  }`;

  return sponsor.url ? (
    <a
      href={sponsor.url}
      target="_blank"
      rel="noreferrer"
      aria-label={sponsor.name}
      className={`${className} transition-shadow hover:shadow-[0_0_0_2px_var(--color-gold)]`}
    >
      {inner}
    </a>
  ) : (
    <div className={className}>{inner}</div>
  );
}
