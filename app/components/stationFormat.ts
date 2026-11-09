import { careerBreak, stations } from "../data/profile";

export type Station = (typeof stations)[number];
export type Line = Station["line"];

const MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

export function formatMonth(ym: string) {
  const [year, month] = ym.split("-");
  return month ? `${MONTHS[Number(month) - 1]} ${year}` : year;
}

export function formatPeriod(period: Station["period"]) {
  if (!period) return null;
  return `${formatMonth(period.start)} – ${period.end ? formatMonth(period.end) : "Present"}`;
}

export const breakDates = `${formatMonth(careerBreak.from)} – ${formatMonth(careerBreak.to)}`;

// jeda karier jatuh sebelum stasiun pertama yang selesai sebelum jeda dimulai
export const breakBeforeId = stations.find(
  (s) => s.period?.end != null && s.period.end < careerBreak.from,
)?.id;

// rel utama: stasiun personal tetap di trunk, dotnya di ujung taji
export const railClass: Record<Line, string> = {
  trunk: "bg-line-trunk",
  personal: "bg-line-trunk",
  early: "bg-line-early",
};

export const lineColor: Record<Line, string> = {
  trunk: "var(--line-trunk)",
  personal: "var(--line-personal)",
  early: "var(--line-early)",
};

// glyph bullet jalur, seperti huruf jalur metro
export const LINE_GLYPH = "B";

// h2 seksi: papan direktori stasiun, bukan caption
export const sectionHeading =
  "border-b-4 border-current pb-(--space) text-3xl leading-none font-extrabold tracking-[0.04em] uppercase";
