import { careerBreak, stations } from "../data/profile";

export type Station = (typeof stations)[number];

const MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

export function formatMonth(ym: string) {
  const [year, month] = ym.split("-");
  return month ? `${MONTHS[Number(month) - 1]} ${year}` : year;
}

export function formatPeriod(period: Station["period"]) {
  if (!period) return null;
  return `${formatMonth(period.start)} – ${period.end ? formatMonth(period.end) : "Present"}`;
}

// jeda karier jatuh sebelum stasiun pertama yang selesai sebelum jeda dimulai
export const breakBeforeId = stations.find(
  (s) => s.period?.end != null && s.period.end < careerBreak.from,
)?.id;
