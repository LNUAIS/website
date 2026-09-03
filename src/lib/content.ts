// ponytail: hardcoded until someone other than a dev needs to edit these.
// Swap for a CMS or the Luma API (luma.com/docs/api) when that day comes.

export type BoardMember = {
  name: string;
  role: string;
  blurb: string;
  linkedin: string;
  /** The elected board, versus appointed committee roles. */
  committee?: true;
};

export const board: BoardMember[] = [
  {
    name: "Saisharan Raja",
    role: "PRESIDENT",
    blurb: "Leading innovation and strategic direction for LNU AI Society.",
    linkedin: "https://www.linkedin.com/in/saisharanraja/",
  },
  {
    name: "Kemal Cikota",
    role: "VICE PRESIDENT",
    blurb: "Focused on operations, planning, and society coordination.",
    linkedin: "https://www.linkedin.com/in/kemal-cikota-19b509252/",
  },
  {
    name: "Abdirashiid Sammantar",
    role: "HEAD OF COMMUNICATIONS",
    blurb: "Responsible for outreach, messaging, and media relations.",
    linkedin: "https://www.linkedin.com/in/abdirashiid-sammantar-3b7863238/",
  },
  {
    name: "Younus Mashoor",
    role: "HEAD OF IT",
    blurb: "Managing IT infrastructure and technical support.",
    linkedin: "https://www.linkedin.com/in/younusmashoor/",
  },
  {
    name: "William McCallum-Vallmark",
    role: "SECRETARY",
    blurb: "Organizing meetings, records, and official documents.",
    linkedin:
      "https://www.linkedin.com/in/william-mc-callum-vallmark-4118a01ba/",
  },
  {
    name: "Armin Coco Grbovic",
    role: "TREASURER",
    blurb: "Managing finances, budgets, and financial planning.",
    linkedin: "https://www.linkedin.com/in/armin-coco-grbovic-195a72237/",
  },
  {
    name: "Keenan Arsianto",
    role: "ART DIRECTOR",
    blurb:
      "Creating visual identity and designing graphics for society initiatives.",
    linkedin: "https://www.linkedin.com/in/keenan-arsianto-63b00334b/",
    committee: true,
  },
  {
    name: "Ebbe Karlstad",
    role: "WEB DEVELOPER",
    blurb:
      "Building and maintaining the society's digital platforms and web presence.",
    linkedin: "https://www.linkedin.com/in/ebbekarlstad/",
    committee: true,
  },
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

export const socialLinks = [
  { label: "Instagram", href: "https://www.instagram.com/lnuaisociety" },
  { label: "LinkedIn", href: "https://www.linkedin.com/company/lnuais/" },
  { label: "Discord", href: "https://discord.gg/eMqEHwCpQ" },
];

export const CONTACT_EMAIL = "contact@lnuais.com";
