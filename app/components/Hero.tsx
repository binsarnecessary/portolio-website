import { Fragment } from "react";
import Image from "next/image";
import { ArrowUpRight, Download, Mail } from "lucide-react";
import { cvHref } from "../data/cv";
import { person } from "../data/profile";
import photo from "../assets/img/FotoProfil.jpg";
import { positioning, statusChips } from "../data/person";
import { buttonPrimary, buttonSecondary, textLink } from "./ui";

const [role, ...rest] = positioning;
// years_phrase ditulis untuk tengah kalimat; jadikan kalimat utuh
const summary = `${person.years_phrase.charAt(0).toUpperCase()}${person.years_phrase.slice(1)}.`;

export default function Hero() {
  return (
    <section
      id="top"
      aria-labelledby="top-h"
      className="pt-8 pb-16 sm:pt-20 sm:pb-20 lg:grid lg:grid-cols-[12rem_minmax(0,1fr)] lg:gap-x-16 lg:pt-24"
    >
      <Image
        src={photo}
        alt={`Portrait of ${person.name}`}
        width={144}
        height={144}
        priority
        className="ring-rule size-18 rounded-full object-cover ring-1 sm:size-28 lg:size-36"
      />

      <div className="mt-6 lg:mt-0">
        <h1
          id="top-h"
          className="text-4xl leading-[1.05] font-semibold tracking-[-0.035em] sm:text-6xl lg:text-7xl"
        >
          {person.name}
        </h1>

        <p className="text-ink mt-4 text-lg leading-snug font-medium sm:mt-6 sm:text-2xl">
          {role}
        </p>
        <p className="text-ink-soft mt-1 text-base sm:text-lg">
          {rest.map((part, i) => (
            <Fragment key={part}>
              {i > 0 && " · "}
              <span className="whitespace-nowrap">{part}</span>
            </Fragment>
          ))}
        </p>

        <p className="text-ink-muted mt-5 max-w-[60ch] text-base sm:text-lg">{summary}</p>

        <ul aria-label="Availability" className="mt-6 flex flex-wrap gap-2">
          {statusChips.map((chip, i) => (
            <li
              key={chip}
              className="border-rule bg-surface-muted text-ink-soft inline-flex items-center gap-2 rounded-full border px-3 py-1 text-sm"
            >
              {i === 0 && (
                <span aria-hidden="true" className="bg-accent size-1.5 rounded-full" />
              )}
              {chip}
            </li>
          ))}
        </ul>

        <div className="mt-8 flex flex-wrap items-center gap-3">
          <a href={cvHref()} download className={buttonPrimary}>
            <Download aria-hidden="true" className="size-4" strokeWidth={2} />
            Download CV
          </a>
          <a href={`mailto:${person.email}`} className={buttonSecondary}>
            <Mail aria-hidden="true" className="size-4" strokeWidth={2} />
            Email
          </a>
          <span className="flex gap-4 text-sm sm:ml-3">
            <a href={person.linkedin} className={textLink}>
              LinkedIn
              <ArrowUpRight aria-hidden="true" className="size-3.5" strokeWidth={2} />
            </a>
            <a href={person.github} className={textLink}>
              GitHub
              <ArrowUpRight aria-hidden="true" className="size-3.5" strokeWidth={2} />
            </a>
          </span>
        </div>
      </div>
    </section>
  );
}
