import { socialLinks } from "@/lib/content";
import { SocialIcon } from "./social-icon";

export function SocialLinks() {
  return (
    <div className="flex flex-wrap items-center gap-3">
      {socialLinks.map((l) => (
        <a
          key={l.label}
          href={l.href}
          target="_blank"
          rel="noreferrer"
          className="flex items-center gap-2.5 rounded-[2px] border border-chalk/16 px-4 py-2.5 text-sm font-semibold text-chalk/80 transition-colors hover:border-gold hover:text-gold"
        >
          <SocialIcon name={l.label} />
          {l.label}
        </a>
      ))}
    </div>
  );
}
