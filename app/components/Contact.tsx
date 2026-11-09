import { cvHref } from "../data/cv";
import { person } from "../data/profile";
import Sep from "./Sep";
import { sectionHeading } from "./stationFormat";

const [minHours, maxHours] = person.freelance_hours_per_week;
const availability = [
  "Seeking remote full-time",
  `UTC+${person.location.utc_offset}`,
  `Freelance ${minHours}–${maxHours} h/week`,
];

const plate =
  "inline-flex min-h-12 items-center justify-center px-6 text-base font-bold tracking-wide";
const textLink = "inline-flex min-h-11 items-center underline";

export default function Contact() {
  return (
    <div>
      <div className="bg-enamel text-enamel-ink border-line-trunk border-t-8 p-(--space-3)">
        <h2 className={sectionHeading}>Contact</h2>
        <p className="text-enamel-muted mt-(--space-2) text-base font-semibold">
          {availability.map((item, i) => (
            <span key={item}>
              {i > 0 && <Sep />}
              {item}
            </span>
          ))}
        </p>

        <div className="mt-(--space-3) flex flex-wrap gap-(--space-2)">
          <a
            href={cvHref()}
            download
            className={`${plate} bg-enamel-ink text-enamel hover:bg-line-trunk hover:text-enamel-ink`}
          >
            Download CV
          </a>
          <a
            href={`mailto:${person.email}`}
            className={`${plate} border-enamel-ink text-enamel-ink hover:bg-enamel-ink hover:text-enamel border-2`}
          >
            {person.email}
          </a>
        </div>

        <p className="mt-(--space-2) flex gap-(--space-3) text-base font-semibold">
          <a href={person.linkedin} className={textLink}>
            LinkedIn
          </a>
          <a href={person.github} className={textLink}>
            GitHub
          </a>
        </p>
      </div>

      <p className="text-ink-muted mt-(--space-3) text-sm">
        © 2026 {person.name}
      </p>
    </div>
  );
}
