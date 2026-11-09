import { Fragment } from "react";
import { stations } from "../data/profile";
import { breakBeforeId, railClass } from "./stationFormat";

const row = "relative grid grid-cols-[3rem_minmax(0,1fr)]";
const railX = "left-[calc(1rem-3px)] w-[6px]";
const dot = "bg-enamel border-enamel-ink absolute top-1/2 size-4 -translate-y-1/2 rounded-full border-[3px]";

export default function StripMap() {
  return (
    <nav aria-label="Jump to station" className="lg:hidden">
      <div aria-hidden="true" className="relative h-3 w-12">
        <span className="bg-line-trunk absolute top-0 left-1 h-[6px] w-6" />
        <span className={`bg-line-trunk absolute top-0 bottom-0 ${railX}`} />
      </div>
      <ol>
        {stations.map((s, i) => {
          const last = i === stations.length - 1;
          return (
            <Fragment key={s.id}>
              {s.id === breakBeforeId && (
                <li aria-hidden="true" className={`${row} h-8`}>
                  <span className="border-line-trunk absolute top-1 bottom-1 left-[calc(1rem-1px)] border-l-[3px] border-dashed" />
                  <span className="text-ink-muted col-start-2 self-center text-sm font-semibold">
                    Career break
                  </span>
                </li>
              )}
              <li className={row}>
                <span
                  aria-hidden="true"
                  className={`absolute top-0 ${last ? "h-1/2" : "bottom-0"} ${railX} ${railClass[s.line]}`}
                />
                {last && (
                  <span aria-hidden="true" className="bg-line-early absolute top-[calc(50%-3px)] left-1 h-[6px] w-6" />
                )}
                {s.line === "personal" ? (
                  <>
                    <span aria-hidden="true" className="bg-line-personal absolute top-[calc(50%-3px)] left-4 h-[6px] w-6" />
                    <span aria-hidden="true" className={`${dot} left-8`} />
                  </>
                ) : (
                  <span aria-hidden="true" className={`${dot} left-2`} />
                )}
                <a
                  href={`#station-${s.id}`}
                  className={`${s.line === "personal" ? "pl-6" : ""} col-start-2 inline-flex min-h-11 items-center self-start font-bold underline-offset-4 hover:underline`}
                >
                  {s.label}
                </a>
              </li>
            </Fragment>
          );
        })}
      </ol>
    </nav>
  );
}
