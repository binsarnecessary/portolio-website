import { person } from "./profile";

const [minHours, maxHours] = person.freelance_hours_per_week;

export const positioning = person.positioning;

export const statusChips = [
  person.availability,
  `UTC+${person.location.utc_offset}`,
  `Freelance ${minHours}–${maxHours} h/week`,
];
