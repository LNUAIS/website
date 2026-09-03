// ponytail: hardcoded until someone other than a dev needs to edit these.
// Swap for a CMS or the Luma API (luma.com/docs/api) when that day comes.

export const events = [
  {
    day: "18",
    month: "SEP",
    year: "2026",
    weekday: "Friday",
    kind: "WORKSHOP",
    time: "17:00–19:00",
    place: "VÄXJÖ · BUILDING M",
    title: "Prompting is not magic",
    blurb:
      "Two hours on getting reliable, repeatable output out of a language model. We start from zero and end with a working evaluation harness you can reuse.",
  },
  {
    day: "02",
    month: "OCT",
    year: "2026",
    weekday: "Friday",
    kind: "GUEST TALK",
    time: "18:00–19:30",
    place: "KALMAR · NY HAMN",
    title: "Machine learning in Swedish healthcare",
    blurb:
      "A researcher walks through what actually reached clinical use, what stalled in validation, and why the gap between the two is mostly not technical.",
  },
  {
    day: "16",
    month: "OCT",
    year: "2026",
    weekday: "Friday",
    kind: "READING GROUP",
    time: "17:00–18:30",
    place: "VÄXJÖ · LIBRARY 3F",
    title: "Who is accountable when a model is wrong?",
    blurb:
      "Two short papers, read in advance, argued in person. Bring a position and be ready to have it taken apart.",
  },
  {
    day: "07",
    month: "NOV",
    year: "2026",
    weekday: "Saturday",
    kind: "HACK NIGHT",
    time: "12:00–23:00",
    place: "VÄXJÖ · BUILDING D",
    title: "Autumn build night",
    blurb:
      "Eleven hours, free-form teams, one demo each at the end. Pizza is covered by our sponsors. Beginners are paired with someone who has shipped before.",
  },
  {
    day: "28",
    month: "NOV",
    year: "2026",
    weekday: "Friday",
    kind: "CAREER NIGHT",
    time: "17:30–20:00",
    place: "VÄXJÖ · BUILDING M",
    title: "AI roles, honestly described",
    blurb:
      "Engineers and researchers from partner companies describe what their week actually looks like. Informal, and CVs are welcome but not required.",
  },
];

export const board = [
  { name: "Elin Marklund", role: "CHAIR", study: "MSc Software Technology" },
  {
    name: "Jonas Ohlin",
    role: "VICE CHAIR / EVENTS",
    study: "BSc Computer Science",
  },
  { name: "Amira Haddad", role: "TREASURER", study: "MSc Data Science" },
  { name: "Viktor Nyberg", role: "PARTNERSHIPS", study: "BSc Business & AI" },
];

export const tracks = [
  {
    label: "TRACK 01",
    title: "Learn the stack",
    body: "Weekly hands-on workshops: prompting, fine-tuning, retrieval, evals, deployment. Taught by members, for members, with a separate beginner track.",
  },
  {
    label: "TRACK 02",
    title: "Ship something real",
    body: "Project teams take one problem per semester from idea to working demo, then present it openly so the work outlives the meetup that started it.",
  },
  {
    label: "TRACK 03",
    title: "Question the default",
    body: "A standing reading group on capability, policy and failure modes. Enthusiasm is welcome here. So is disagreement, with sources.",
  },
];

export const tape = [
  "WORKSHOPS",
  "HACK NIGHTS",
  "READING GROUP",
  "GUEST TALKS",
  "MODEL EVALS",
  "AI ETHICS",
  "CAREER NIGHTS",
];

export const navLinks = [
  { href: "/#about", label: "About" },
  { href: "/#events", label: "Events" },
  { href: "/#board", label: "Board" },
  { href: "/#sponsors", label: "Sponsors" },
];

export const CONTACT_EMAIL = "contact@lnuias.com";
