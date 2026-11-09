import { LINE_GLYPH } from "./stationFormat";

export default function LineBullet() {
  return (
    <span
      aria-hidden="true"
      className="bg-line-trunk text-ground inline-flex size-9 shrink-0 items-center justify-center rounded-full pt-[0.1em] text-xl leading-none font-extrabold"
    >
      {LINE_GLYPH}
    </span>
  );
}
