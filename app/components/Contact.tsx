import { Fragment } from "react";
import { ArrowUpRight, Download } from "lucide-react";
import { cvHref } from "../data/cv";
import { person } from "../data/profile";
import { statusChips } from "../data/person";
import { buttonPrimary } from "./ui";

// tampilkan alamat tanpa skema supaya terbaca seperti teks
const bare = (url: string) => url.replace(/^https?:\/\/(www\.)?/, "");

const channels = [
  { label: "Email", href: `mailto:${person.email}`, text: person.email },
  { label: "LinkedIn", href: person.linkedin, text: bare(person.linkedin) },
  { label: "GitHub", href: person.github, text: bare(person.github) },
];

export default function Contact() {
  return (
    <div>
      <p className="max-w-[36ch] text-2xl leading-snug font-semibold tracking-tight sm:text-3xl">
        {statusChips.map((chip, i) => (
          <Fragment key={chip}>
            {i > 0 && " · "}
            <span className="whitespace-nowrap">{chip}</span>
          </Fragment>
        ))}
      </p>

      <dl className="divide-rule border-rule mt-8 divide-y border-y">
        {channels.map((channel) => (
          <div
            key={channel.label}
            className="grid gap-x-8 py-3 sm:grid-cols-[8rem_minmax(0,1fr)] sm:items-center"
          >
            <dt className="text-ink-muted text-sm">{channel.label}</dt>
            <dd className="min-w-0">
              <a
                href={channel.href}
                className="text-ink hover:text-accent inline-flex min-h-11 max-w-full items-center gap-1 font-medium break-all underline decoration-rule-strong transition-colors duration-150 hover:decoration-accent"
              >
                {channel.text}
                <ArrowUpRight aria-hidden="true" className="size-4 shrink-0" strokeWidth={2} />
              </a>
            </dd>
          </div>
        ))}
      </dl>

      <a href={cvHref()} download className={`${buttonPrimary} mt-8`}>
        <Download aria-hidden="true" className="size-4" strokeWidth={2} />
        Download CV
      </a>
    </div>
  );
}
