# LNU AI Society

The website for the LNU AI Society, a student society at Linnaeus University.
Next.js App Router, Tailwind v4, Biome. No database.

```bash
npm install
npm run dev      # http://localhost:3000
npm run build
npm run lint     # biome check
```

## Adding an event

```bash
npm run new:event -- "Spring Kickoff" 2026-04-10
```

That writes `src/content/events/spring-kickoff.md`. Fill it in and you're done —
no code changes, and `next dev` picks it up without a restart.

```markdown
---
date: 2026-04-10
kind: WORKSHOP
place: VÄXJÖ · BUILDING M
title: Spring Kickoff
link: https://luma.com/xxxxxxxx
---

One paragraph describing the event. This is the blurb under the title.
```

| Field | Required | Notes |
| --- | --- | --- |
| `date` | yes | `YYYY-MM-DD`. The only place the date lives. |
| `kind` | yes | Badge text. Uppercase, e.g. `HACKATHON`. |
| `place` | yes | Shown next to the badge. Uppercase. |
| `title` | yes | May contain colons — only the first one separates key from value. |
| `link` | no | Registration URL. Renders `Sign up →`, but only on upcoming events. |
| body | yes | Everything after the closing `---` becomes the blurb. |

Conventions:

- **Filename is the slug**, not the date — `spring-kickoff.md`. Only the
  frontmatter `date` decides ordering and placement.
- **Events dated today or later** appear under "What's coming up", soonest
  first. Everything else falls under "Past events", newest first. The section
  headings follow automatically.
- **`_`-prefixed files are ignored** — use `_draft.md` for work in progress.
  Any other `.md` in the folder is treated as an event.

Mistakes fail `npm run build` with the filename rather than rendering wrong:
a missing or unknown field (`url:` instead of `link:`), a malformed date, or a
`link` that isn't an http(s) URL.

## Adding a board member

```bash
npm run new:member -- "Ada Lindqvist" "Head of Research" 9
```

That writes `src/content/board/ada-lindqvist.md` with the optional fields
commented out. Uncomment what applies, no code changes, no restart.

```markdown
---
name: Ada Lindqvist
role: HEAD OF RESEARCH
order: 9
linkedin: https://www.linkedin.com/in/ada/
photo: /board/ada-lindqvist.webp
committee: true
---

One sentence on what this role does.
```

| Field | Required | Notes |
| --- | --- | --- |
| `name` | yes | |
| `role` | yes | Uppercased for you by the script, e.g. `TREASURER`. |
| `order` | yes | Whole number. Lowest first along the rail. |
| `linkedin` | no | http(s) URL. No link, no icon. |
| `photo` | no | Path under `public/`. WebP, ~600px wide. Without one you get the PORTRAIT placeholder. |
| `committee` | no | `true` for appointed roles — they get a COMMITTEE tag. |
| body | no | One sentence, shown under the role. |

Portraits go in `public/board/`. The build fails if a `photo` points at a file
that isn't there, so a typo can't ship as a broken image. Frontmatter lines
starting with `#` are comments, which is how the generated template carries the
optional fields.

## Layout

| Path | What |
| --- | --- |
| `src/app/page.tsx` | the one route, composed of sections |
| `src/app/_components/` | every non-routable component, incl. section components |
| `src/content/events/` | one markdown file per event |
| `src/content/board/` | one markdown file per board member |
| `src/lib/frontmatter.ts` | shared markdown reader for both collections |
| `src/lib/events.ts` | reads and validates the events folder |
| `src/lib/board.ts` | reads and validates the board folder |
| `src/lib/content.ts` | tracks, tape, nav and contact copy |
