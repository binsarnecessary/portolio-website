import Image from "next/image";
import { cvHref } from "../data/cv";
import { person } from "../data/profile";
import LineBullet from "./LineBullet";
import Sep from "./Sep";
import photo from "../assets/img/FotoProfil.jpg";

// segmen "Seeking" sudah tampil di status board
const lineName = person.headlines.fulltime
  .split(" · ")
  .filter((part) => !part.startsWith("Seeking"));

const [minHours, maxHours] = person.freelance_hours_per_week;
const status = [
  "Seeking remote",
  `UTC+${person.location.utc_offset}`,
  `Freelance ${minHours}–${maxHours} h/week`,
];

const plate =
  "inline-flex min-h-12 items-center justify-center px-6 text-base font-bold tracking-wide";

export default function Nameplate() {
  return (
    <header className="flex flex-col gap-(--space-3)">
      <div className="bg-enamel text-enamel-ink border-line-trunk border-t-8 p-(--space-3)">
        <div className="flex items-start gap-(--space-2)">
          <Image
            src={photo}
            alt={`Portrait of ${person.name}`}
            width={72}
            height={72}
            priority
            className="size-[72px] shrink-0 object-cover"
          />
          <div>
            <h1 className="text-4xl leading-none font-extrabold tracking-tight sm:text-5xl">
              {person.name}
            </h1>
            <p className="text-enamel-muted mt-(--space) text-sm font-semibold">
              {person.location.city}, Indonesia
            </p>
          </div>
        </div>
        <div className="mt-(--space-3) flex items-start gap-(--space-2)">
          <LineBullet />
          <p className="text-xl leading-snug font-bold">
            {lineName.map((part, i) => (
              <span key={part}>
                {i > 0 && <Sep />}
                {part}
              </span>
            ))}
          </p>
        </div>
      </div>

      <ul
        aria-label="Status"
        className="border-ink-muted flex flex-wrap gap-x-(--space-3) gap-y-(--space) border-y py-(--space-2) text-base font-semibold"
      >
        {status.map((item, i) => (
          <li key={item} className="flex items-center gap-(--space)">
            <span
              aria-hidden="true"
              className={`size-3 rounded-full ${i === 0 ? "bg-line-trunk" : "bg-line-early"}`}
            />
            {item}
          </li>
        ))}
      </ul>

      <div className="flex flex-wrap gap-(--space-2)">
        <a
          href={cvHref()}
          download
          className={`${plate} bg-line-trunk text-ground hover:bg-enamel`}
        >
          Download CV
        </a>
        <a
          href={`mailto:${person.email}`}
          className={`${plate} border-enamel text-ink hover:bg-enamel hover:text-enamel-ink border-2`}
        >
          Email
        </a>
      </div>

      <p className="text-ink-muted flex gap-(--space-3) text-base">
        <a
          href={person.linkedin}
          className="inline-flex min-h-11 items-center underline"
        >
          LinkedIn
        </a>
        <a
          href={person.github}
          className="inline-flex min-h-11 items-center underline"
        >
          GitHub
        </a>
      </p>
    </header>
  );
}
