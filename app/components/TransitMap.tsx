import { stations, type StationId } from "../data/profile";
import { breakDates, LINE_GLYPH, lineColor } from "./stationFormat";

// Koordinat digambar tangan: 45°/90° saja, viewBox 760×660
type Geo = {
  x: number;
  y: number;
  label: { x: number; y: number; anchor: "start" | "middle" | "end" };
  hit: [number, number, number, number];
  seg: string;
};

const geo: Record<StationId, Geo> = {
  chat: {
    x: 130, y: 90,
    label: { x: 130, y: 132, anchor: "middle" },
    hit: [62, 62, 136, 82],
    seg: "M40 90 H130",
  },
  roleplay: {
    x: 300, y: 90,
    label: { x: 300, y: 132, anchor: "middle" },
    hit: [232, 62, 136, 82],
    seg: "M130 90 H300",
  },
  crm: {
    x: 540, y: 46,
    label: { x: 562, y: 52, anchor: "start" },
    hit: [512, 18, 104, 56],
    seg: "M420 90 L464 46 H540",
  },
  "bds-cs": {
    x: 680, y: 300,
    label: { x: 658, y: 306, anchor: "end" },
    hit: [536, 272, 168, 56],
    seg: "M680 254 V300",
  },
  "bds-loan": {
    x: 680, y: 380,
    label: { x: 658, y: 386, anchor: "end" },
    hit: [536, 352, 168, 56],
    seg: "M680 300 V380",
  },
  "bds-portal": {
    x: 680, y: 460,
    label: { x: 658, y: 466, anchor: "end" },
    hit: [536, 432, 168, 56],
    seg: "M680 380 V460",
  },
  "xsis-academy": {
    x: 540, y: 600,
    label: { x: 540, y: 642, anchor: "middle" },
    hit: [470, 576, 140, 80],
    seg: "M680 460 V530 L610 600 H540",
  },
  museakademi: {
    x: 380, y: 600,
    label: { x: 380, y: 642, anchor: "middle" },
    hit: [316, 576, 128, 80],
    seg: "M540 600 H380",
  },
  arkatama: {
    x: 230, y: 600,
    label: { x: 230, y: 642, anchor: "middle" },
    hit: [180, 576, 100, 80],
    seg: "M380 600 H230",
  },
};

const LINE = 10;
const label = "fill-ink text-[17px] font-bold";
const small = "fill-ink text-[12px] font-extrabold tracking-[0.12em] uppercase";

const zone = "fill-ink-muted text-[14px] font-bold";
const bracket = "var(--ink-muted)";

const legend = [
  { line: "trunk", text: "Professional (Node.js / TypeScript)" },
  { line: "personal", text: "Personal project" },
  { line: "early", text: "Early career" },
] as const;

export default function TransitMap() {
  return (
    <svg
      viewBox="0 0 760 660"
      className="block h-auto w-full font-sans"
      role="group"
      aria-label="Line map"
    >
      <g fill="none" strokeWidth={LINE} strokeLinejoin="round" aria-hidden="true">
        {/* cabang awal, lalu trunk di atasnya */}
        <path d="M680 460 V530 L610 600 H170" stroke={lineColor.early} />
        <path d="M170 578 V622" stroke={lineColor.early} />
        <path d="M420 90 L464 46 H540" stroke={lineColor.personal} />
        <path d="M40 90 H600 L680 170 V196" stroke={lineColor.trunk} />
        <path d="M680 254 V460" stroke={lineColor.trunk} />
        <path d="M40 68 V112" stroke={lineColor.trunk} />
        {/* jeda karier: rel terputus */}
        <path d="M680 206 V244" stroke={lineColor.trunk} strokeWidth={4} strokeDasharray="5 7" />
        <path d="M666 196 H694 M666 254 H694" stroke={lineColor.trunk} strokeWidth={4} />
      </g>

      <g aria-hidden="true">
        <text x={40} y={50} className={small}>
          Present
        </text>
        <text x={652} y={220} textAnchor="end" className="fill-ink-muted text-[15px] font-bold">
          Career break
        </text>
        <text x={652} y={240} textAnchor="end" className="fill-ink-muted text-[14px] font-semibold">
          {breakDates}
        </text>
      </g>

      {/* zona disembunyikan saat panel menutupinya */}
      <g
        aria-hidden="true"
        className="transition-opacity duration-300 group-data-[panel=open]/map:opacity-0 motion-reduce:transition-none"
      >
        <path d="M62 142 V150 H366 V142" fill="none" stroke={bracket} strokeWidth={2} />
        <text x={62} y={172} className={zone}>
          Brighton Real Estate
        </text>
        <path d="M528 282 H520 V476 H528" fill="none" stroke={bracket} strokeWidth={2} />
        <text x={506} y={374} textAnchor="end" className={zone}>
          Bank Mega
        </text>
        <text x={506} y={394} textAnchor="end" className="fill-ink-muted text-[14px] font-semibold">
          via Xsis Mitra Utama / IBM
        </text>
        <path d="M180 576 V568 H610 V576" fill="none" stroke={bracket} strokeWidth={2} />
        <text x={180} y={558} className={zone}>
          Early career
        </text>
      </g>

      <g aria-hidden="true" transform="translate(62 240)">
        <text y={0} className={small}>
          Key
        </text>
        {legend.map((item, i) => (
          <g key={item.line} transform={`translate(0 ${26 + i * 30})`}>
            <path d="M0 0 H32" stroke={lineColor[item.line]} strokeWidth={LINE} />
            {item.line === "trunk" && (
              <g transform="translate(56 0)">
                <circle r={12} fill={lineColor.trunk} />
                <text y={6} textAnchor="middle" className="fill-ground text-[16px] font-extrabold">
                  {LINE_GLYPH}
                </text>
              </g>
            )}
            <text x={item.line === "trunk" ? 78 : 44} y={5} className="fill-ink-muted text-[14px] font-semibold">
              {item.text}
            </text>
          </g>
        ))}
      </g>

      <g fill="none" strokeLinejoin="round" aria-hidden="true">
        {stations.map((s) => (
          <g
            key={s.id}
            data-seg={s.id}
            data-lit="false"
            className="opacity-0 transition-opacity duration-200 ease-out data-[lit=true]:opacity-100 motion-reduce:transition-none"
          >
            <path d={geo[s.id].seg} stroke={lineColor[s.line]} strokeWidth={20} />
            <path d={geo[s.id].seg} stroke="var(--enamel)" strokeWidth={4} />
          </g>
        ))}
      </g>

      {stations.map((s) => {
        const g = geo[s.id];
        const [hx, hy, hw, hh] = g.hit;
        return (
          <a
            key={s.id}
            href={`#station-${s.id}`}
            data-station-link={s.id}
            aria-label={`${s.label}, ${s.org}`}
            aria-controls="station-panel"
            className="group/st cursor-pointer outline-none"
          >
            <rect
              x={hx}
              y={hy}
              width={hw}
              height={hh}
              fill="transparent"
              strokeWidth={3}
              className="group-focus-visible/st:stroke-focus"
            />
            <circle
              cx={g.x}
              cy={g.y}
              r={9}
              strokeWidth={4}
              className="fill-enamel stroke-enamel-ink"
            />
            <text
              x={g.label.x}
              y={g.label.y}
              textAnchor={g.label.anchor}
              className={`${label} group-hover/st:underline`}
            >
              {s.label}
            </text>
          </a>
        );
      })}
    </svg>
  );
}
