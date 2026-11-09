import { Fragment } from "react";
import { ArrowUpRight } from "lucide-react";
import { careerBreak, stations } from "../data/profile";
import { breakBeforeId, formatPeriod, railClass, type Line, type Station } from "./stationFormat";

const plateRule: Record<Line, string> = {
  trunk: "border-line-trunk",
  personal: "border-line-personal",
  early: "border-line-early",
};

const tick: Record<Line, string> = {
  trunk: "bg-line-trunk",
  personal: "bg-line-personal",
  early: "bg-line-early",
};

const OUTLINE_NOTE = "Outline only — employer system, no product details";

const row = "relative grid grid-cols-[4rem_minmax(0,1fr)] pb-(--space-5)";
const railX = "left-[calc(1.25rem-5px)] w-[10px]";
const dot =
  "bg-enamel border-enamel-ink absolute top-2 size-6 rounded-full border-4";

function StationItem({ station, last }: { station: Station; last: boolean }) {
  const period = formatPeriod(station.period);
  const placement = "placement" in station ? station.placement : null;

  return (
    <li id={`station-${station.id}`} className={row}>
      <div aria-hidden="true">
        {/* rel utama tetap lewat; stasiun cabang duduk di ujung taji */}
        <span
          className={`absolute top-0 ${last ? "h-11" : "bottom-0"} ${railX} ${railClass[station.line]}`}
        />
        {last && (
          <span className={`absolute top-10 left-1 h-[10px] w-8 ${railClass[station.line]}`} />
        )}
        {station.line === "personal" ? (
          <>
            <span className="bg-line-personal absolute top-[calc(1.25rem-5px)] left-5 h-[10px] w-8" />
            <span className={`${dot} left-10`} />
          </>
        ) : (
          <span className={`${dot} left-2`} />
        )}
      </div>

      <div
        data-case
        className="grid gap-(--space-3) lg:grid-cols-[18rem_minmax(0,1fr)] lg:gap-(--space-5)"
      >
        <div>
          <h3
            className={`bg-enamel text-enamel-ink inline-block border-t-4 px-3 pt-1.5 pb-1 text-xl leading-7 font-extrabold tracking-tight ${plateRule[station.line]}`}
          >
            {station.label}
          </h3>
          {/* div, bukan p: innerText org/role/period tetap baris berurutan */}
          <div className="mt-(--space-2) text-lg leading-snug font-bold">
            {station.org}
          </div>
          <div className="text-ink-muted font-semibold">{station.role}</div>
          {period && <div className="text-ink-muted font-semibold">{period}</div>}
          {station.team && (
            <p className="text-ink-muted mt-(--space) text-sm font-semibold">
              <span className="text-ink tracking-wider uppercase">Team</span>{" "}
              {station.team}
            </p>
          )}
        </div>

        <div data-case-body className="flex max-w-[68ch] flex-col gap-(--space-2)">
          {station.confidential && (
            <p className="border-ink-muted text-ink self-start border px-2 py-1 text-xs font-bold tracking-wider uppercase">
              {OUTLINE_NOTE}
            </p>
          )}
          {placement && (
            <p data-placement className="text-ink-muted text-sm">{placement}</p>
          )}
          <ul
            aria-label="Stack"
            className="text-ink-muted flex flex-wrap gap-x-(--space-2) gap-y-1 text-sm font-semibold"
          >
            {station.stack.map((tech) => (
              <li key={tech}>{tech}</li>
            ))}
          </ul>
          {station.claims.length > 0 && (
            <ul className="border-ink-muted/40 flex flex-col gap-(--space-2) border-t pt-(--space-2)">
              {station.claims.map((claim) => (
                <li key={claim.id} className="flex gap-(--space-2)">
                  <span
                    aria-hidden="true"
                    className={`mt-[0.7em] h-[3px] w-3 shrink-0 ${tick[station.line]}`}
                  />
                  <span>{claim.text}</span>
                </li>
              ))}
            </ul>
          )}
          {station.proof && (
            <a
              href={station.proof.href}
              className="decoration-line-personal inline-flex min-h-11 items-center gap-1 self-start font-bold underline decoration-2"
            >
              {station.proof.label}
              <ArrowUpRight aria-hidden="true" className="size-4" strokeWidth={2.5} />
            </a>
          )}
        </div>
      </div>
    </li>
  );
}

function BreakItem() {
  return (
    <li className={row}>
      <div aria-hidden="true">
        <span className="bg-line-trunk absolute top-0 left-[calc(1.25rem-5px)] h-3 w-[10px]" />
        <span className="border-line-trunk absolute top-6 bottom-6 left-[calc(1.25rem-2px)] border-l-4 border-dashed" />
        <span className="bg-line-trunk absolute bottom-0 left-[calc(1.25rem-5px)] h-3 w-[10px]" />
      </div>
      <p className="text-ink-muted self-center py-(--space-2) font-bold">
        {careerBreak.text}
      </p>
    </li>
  );
}

export default function StationList() {
  return (
    <div>
      {/* terminus T-bar = Present; tanggal ada di baris periode */}
      <div aria-hidden="true" className="relative h-8 w-16">
        <span className="bg-line-trunk absolute top-0 left-1 h-[10px] w-8" />
        <span className="bg-line-trunk absolute top-0 bottom-0 left-[calc(1.25rem-5px)] w-[10px]" />
      </div>
      <ol>
        {stations.map((station, i) => (
          <Fragment key={station.id}>
            {station.id === breakBeforeId && <BreakItem />}
            <StationItem station={station} last={i === stations.length - 1} />
          </Fragment>
        ))}
      </ol>
    </div>
  );
}
