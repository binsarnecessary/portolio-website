import { education } from "../data/profile";
import { formatMonth, sectionHeading } from "./stationFormat";


export default function Education() {
  return (
    <div>
      <h2 className={sectionHeading}>Education</h2>

      <ul className="mt-(--space-3)">
        {education.map((entry) => (
          <li
            key={entry.school}
            className="border-ink-muted grid gap-(--space) border-t py-(--space-2) sm:grid-cols-[1fr_auto] sm:gap-(--space-3)"
          >
            <div>
              <h3 className="text-xl leading-tight font-bold">{entry.degree}</h3>
              <p className="text-ink-muted text-base">{entry.school}</p>
            </div>
            <p className="text-base font-semibold">
              {formatMonth(entry.start)}–{formatMonth(entry.end)}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}
