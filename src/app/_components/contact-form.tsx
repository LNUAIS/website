"use client";

import { CONTACT_EMAIL } from "@/lib/content";

const fieldClass =
  "rounded-[2px] border border-chalk/16 bg-chalk/5 px-3.5 py-3.5 font-sans text-[15px] text-chalk outline-none focus:border-gold";

const labelClass = "font-mono text-[10.5px] tracking-[0.1em] text-chalk/55";

// ponytail: uncontrolled inputs read once on submit — no state, no backend.
// Swap the mailto for a POST when someone wants the messages in a database.
export function ContactForm() {
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        const f = new FormData(e.currentTarget);
        const field = (k: string) => String(f.get(k) ?? "");
        const body = [
          field("message"),
          "",
          "—",
          field("name"),
          field("email"),
          "Sent from www.lnuais.com",
        ]
          // keep the blank line and the rule even when the message is empty
          .filter((line, i) => line !== "" || i < 3)
          .join("\n");
        window.location.href = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(
          `[Website] ${field("topic")}`,
        )}&body=${encodeURIComponent(body)}`;
      }}
      className="grid gap-4.5 rounded-[3px] border border-chalk/14 bg-ink p-6 sm:p-9"
    >
      <div className="grid gap-4.5 sm:grid-cols-2">
        <label className="grid gap-2">
          <span className={labelClass}>YOUR NAME</span>
          <input
            name="name"
            type="text"
            placeholder="Ada Lindqvist"
            className={fieldClass}
          />
        </label>
        <label className="grid gap-2">
          <span className={labelClass}>YOUR EMAIL</span>
          <input
            name="email"
            type="email"
            placeholder="you@student.lnu.se"
            className={fieldClass}
          />
        </label>
      </div>

      <label className="grid gap-2">
        <span className={labelClass}>WHAT IS THIS ABOUT</span>
        <select name="topic" className={fieldClass}>
          <option>Getting involved</option>
          <option>Speaking at an event</option>
          <option>Partnership or sponsorship</option>
          <option>Something else</option>
        </select>
      </label>

      <label className="grid gap-2">
        <span className={labelClass}>MESSAGE</span>
        <textarea
          name="message"
          rows={6}
          placeholder="Hi LNU AI Society,"
          className={`${fieldClass} resize-y leading-[1.55]`}
        />
      </label>

      <div className="mt-0.5 flex flex-wrap items-center justify-between gap-5">
        <span className="max-w-[300px] font-mono text-[10.5px] leading-[1.65] text-chalk/42">
          OPENS YOUR MAIL APP WITH THE DRAFT PRE-FILLED. NOTHING IS SENT UNTIL
          YOU HIT SEND.
        </span>
        <button
          type="submit"
          className="cursor-pointer rounded-[2px] bg-gold px-7 py-3.5 font-sans text-[15px] font-bold text-ink transition-colors hover:bg-gold-hi"
        >
          Open email draft
        </button>
      </div>
    </form>
  );
}
