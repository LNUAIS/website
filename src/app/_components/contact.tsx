import { CONTACT_EMAIL } from "@/lib/content";
import { Eyebrow, Section, Shell } from "./chrome";
import { ContactForm } from "./contact-form";
import { SocialLinks } from "./social-links";

export function Contact() {
  return (
    <Section id="contact" className="bg-panel">
      <Shell className="grid items-start gap-15 lg:grid-cols-[0.85fr_1.15fr]">
        <div>
          <Eyebrow>05 — CONTACT US</Eyebrow>
          <h2 className="mb-5 text-[36px] leading-[1.02] font-black tracking-[-0.04em] text-balance sm:text-[46px]">
            Write us a line
          </h2>
          <p className="mb-6.5 text-[16.5px] leading-[1.6] text-chalk/65 text-pretty">
            Getting involved, a talk you want to give, a partnership, or a topic
            you think we should cover. Fill this in and we&rsquo;ll open a
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

          <div className="mt-8">
            <div className="mb-3.5 font-mono text-[10px] tracking-[0.1em] text-chalk/45">
              OR FIND US HERE
            </div>
            <SocialLinks />
            <p className="mt-3.5 text-[13.5px] leading-[1.55] text-chalk/45">
              We post every event on Instagram.
            </p>
          </div>
        </div>

        <ContactForm />
      </Shell>
    </Section>
  );
}
