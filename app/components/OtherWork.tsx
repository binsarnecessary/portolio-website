import { otherWork } from "../data/profile";
import Sep from "./Sep";
import { sectionHeading } from "./stationFormat";

// geometri rel sama dengan StationList: kolom 4rem, rel 10px di 1.25rem
const row = "relative grid grid-cols-[4rem_minmax(0,1fr)] pb-(--space-4) last:pb-0";
const railX = "left-[calc(1.25rem-5px)] w-[10px]";

export default function OtherWork() {
  return (
    <div>
      <h2 className={sectionHeading}>Other work</h2>
      <p className="text-ink-muted mt-(--space-2) text-base">
        Side projects, off the main line.
      </p>

      {/* taji: jalur personal keluar dari trunk 45°, lalu turun 90° */}
      <svg
        aria-hidden="true"
        viewBox="0 0 64 40"
        className="mt-(--space-3) block h-10 w-16"
        fill="none"
        strokeWidth={10}
      >
        <path d="M0 5 H64" stroke="var(--line-trunk)" />
        <path d="M44 5 L20 29 V40" stroke="var(--line-personal)" strokeLinejoin="round" />
      </svg>

      <ul>
        {otherWork.map((item, i) => {
          const last = i === otherWork.length - 1;
          return (
            <li key={item.id} className={row}>
              <div aria-hidden="true">
                <span
                  className={`bg-line-personal absolute top-0 ${last ? "h-11" : "bottom-0"} ${railX}`}
                />
                {last && (
                  <span className="bg-line-personal absolute top-10 left-1 h-[10px] w-8" />
                )}
                <span className="bg-enamel border-enamel-ink absolute top-2 left-2 size-6 rounded-full border-4" />
              </div>

              <div className="max-w-[68ch] pt-1">
                <div className="flex flex-wrap items-baseline justify-between gap-x-(--space-3) gap-y-(--space)">
                  <div>
                    <h3 className="text-xl leading-tight font-bold">{item.name}</h3>
                    <p className="text-ink-muted text-sm font-semibold tracking-wide uppercase">
                      {item.type}
                    </p>
                  </div>
                  {item.href ? (
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-ink border-enamel hover:bg-enamel hover:text-enamel-ink inline-flex min-h-11 items-center gap-(--space) border-2 px-(--space-2) text-base font-bold"
                    >
                      Visit
                      <svg
                        aria-hidden="true"
                        viewBox="0 0 16 16"
                        className="size-4"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <path d="M6 3H3v10h10v-3M9 3h4v4M13 3 7 9" />
                      </svg>
                      <span className="sr-only">
                        {item.name} (opens in a new tab)
                      </span>
                    </a>
                  ) : (
                    <p className="text-ink-muted min-h-11 content-center text-base">
                      Source on request
                    </p>
                  )}
                </div>
                <p className="text-ink-muted mt-(--space) text-sm">
                  {item.stack.map((tech, j) => (
                    <span key={tech}>
                      {j > 0 && <Sep tone="ink" />}
                      {tech}
                    </span>
                  ))}
                </p>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
