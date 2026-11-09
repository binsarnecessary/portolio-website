import { Fragment } from "react";
import { LockKeyhole } from "lucide-react";
import { careerBreak, stations } from "../data/profile";
import { breakBeforeId, formatPeriod, type Station } from "./stationFormat";

const OUTLINE_NOTE = "Outline only — employer system, no product details";

type Group = {
  key: string;
  employer: string;
  meta: string | null;
  early: boolean;
  items: Station[];
};

// stasiun berurutan dengan org sama jadi satu grup pemberi kerja
const groups = stations.reduce<Group[]>((acc, station) => {
  const early = station.line === "early";
  const key = early ? "early" : (station.employer ?? "");
  const last = acc.at(-1);
  if (last?.key === key) {
    last.items.push(station);
    return acc;
  }
  acc.push({
    key,
    employer: early ? "Early career" : (station.employer ?? ""),
    meta: early
      ? null
      : [station.via, station.role, station.employment, formatPeriod(station.period)].filter(Boolean).join(" · "),
    early,
    items: [station],
  });
  return acc;
}, []);

const capitalize = (text: string) => text.charAt(0).toUpperCase() + text.slice(1);

// pusat semua titik di x=7.5px, tepat di atas rel 1px
const groupPad = "pl-8 sm:pl-12";
const stationDot =
  "border-accent bg-surface absolute top-2.5 -left-[29px] size-[9px] rounded-full border-2 sm:-left-[45px]";

function StationItem({ station, early }: { station: Station; early: boolean }) {
  const placementOrg = station.org !== station.label ? `${station.org} · ` : "";

  return (
    <li id={`station-${station.id}`} className="relative">
      <span aria-hidden="true" className={stationDot} />

      {/* div, bukan p: teks label/peran/periode tetap baris berurutan */}
      <div className="grid gap-x-6 sm:grid-cols-[minmax(0,1fr)_auto] sm:items-baseline">
        <div className="flex flex-wrap items-baseline gap-x-3">
          <h4 className="text-lg font-semibold tracking-tight">{station.label}</h4>
          {station.team && (
            <span className="text-ink-muted text-sm">{capitalize(station.team)}</span>
          )}
        </div>
        {early && (
          <div className="text-ink-muted text-sm">
            {placementOrg}
            {station.role}
          </div>
        )}
        {early && station.period && (
          <div className="text-ink-muted text-sm tabular-nums sm:col-start-2 sm:row-start-1">
            {formatPeriod(station.period)}
          </div>
        )}
      </div>

      <ul aria-label="Stack" className="mt-3 flex max-w-[68ch] flex-wrap gap-1.5">
        {station.stack.map((tech) => (
          <li
            key={tech}
            className="bg-surface-muted text-ink-muted ring-rule rounded-md px-2 py-0.5 text-xs leading-5 ring-1 ring-inset"
          >
            {tech}
          </li>
        ))}
      </ul>

      {station.claims.length > 0 && (
        <ul className="text-ink-soft mt-4 flex max-w-[68ch] flex-col gap-2">
          {station.claims.map((claim) => (
            <li
              key={claim.id}
              className="before:bg-rule-strong relative pl-4 before:absolute before:top-[0.7em] before:left-0 before:size-1 before:rounded-full"
            >
              {claim.text}
            </li>
          ))}
        </ul>
      )}
    </li>
  );
}

function GroupItem({ group }: { group: Group }) {
  const placement = group.items.find((s) => "placement" in s);
  const confidential = group.items.every((s) => s.confidential);

  return (
    <li className={`relative pb-16 last:pb-0 ${groupPad}`}>
      <span
        aria-hidden="true"
        className="bg-accent ring-surface absolute top-2 left-px size-[13px] rounded-full ring-4"
      />
      <h3 className="text-xl font-semibold tracking-tight">{group.employer}</h3>
      {group.meta && <p className="text-ink-muted mt-1 tabular-nums">{group.meta}</p>}
      {placement && "placement" in placement && (
        <p className="text-ink-muted mt-3 max-w-[68ch] text-sm">{placement.placement}</p>
      )}
      {confidential && (
        <p className="text-ink-muted mt-3 flex items-center gap-1.5 text-sm">
          <LockKeyhole aria-hidden="true" className="size-3.5 shrink-0" strokeWidth={2} />
          {OUTLINE_NOTE}
        </p>
      )}

      <ol className="mt-8 flex flex-col gap-10">
        {group.items.map((station) => (
          <StationItem key={station.id} station={station} early={group.early} />
        ))}
      </ol>
    </li>
  );
}

function BreakItem() {
  return (
    <li className={`relative pb-16 ${groupPad}`}>
      {/* rel putus-putus menandai jeda */}
      <span aria-hidden="true" className="bg-surface absolute -top-2 -bottom-2 left-[7px] w-px" />
      <span
        aria-hidden="true"
        className="border-rule-strong absolute -top-2 -bottom-2 left-[7px] border-l border-dashed"
      />
      <span
        aria-hidden="true"
        className="border-rule-strong bg-surface absolute top-1.5 left-[3px] size-[9px] rounded-full border-2"
      />
      <p className="text-ink-muted text-sm">{careerBreak.text}</p>
    </li>
  );
}

export default function Experience() {
  return (
    <div className="relative">
      <span aria-hidden="true" className="bg-rail absolute top-3 bottom-2 left-[7px] w-px" />
      <ol className="relative">
        {groups.map((group) => (
          <Fragment key={group.key}>
            {group.items[0].id === breakBeforeId && <BreakItem />}
            <GroupItem group={group} />
          </Fragment>
        ))}
      </ol>
    </div>
  );
}
