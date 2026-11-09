import { education } from "../data/profile";
import { formatMonth } from "./stationFormat";

export default function Education() {
  return (
    <ul className="divide-rule border-rule divide-y border-y">
      {education.map((entry) => (
        <li
          key={entry.school}
          className="grid gap-x-8 gap-y-1 py-6 sm:grid-cols-[minmax(0,1fr)_auto]"
        >
          <div>
            <h3 className="text-lg font-semibold tracking-tight">{entry.degree}</h3>
            <p className="text-ink-muted">{entry.school}</p>
          </div>
          <p className="text-ink-muted text-sm tabular-nums sm:pt-1">
            {formatMonth(entry.start)} – {formatMonth(entry.end)}
          </p>
        </li>
      ))}
    </ul>
  );
}
