"use client";

import { useCallback, useEffect, useRef, useState, type ReactNode } from "react";
import { ArrowDown, X } from "lucide-react";
import Sep from "./Sep";

type MapStation = {
  id: string;
  label: string;
  color: string;
  org: string;
  role: string;
  period: string | null;
};

const PREFIX = "#station-";
const DESKTOP = "(min-width: 1024px)";

function stationFromHash(ids: readonly string[]) {
  if (!window.matchMedia(DESKTOP).matches) return null;
  const hash = window.location.hash;
  if (!hash.startsWith(PREFIX)) return null;
  const id = decodeURIComponent(hash.slice(PREFIX.length));
  return ids.includes(id) ? id : null;
}

export default function StationMapController({
  stations,
  children,
}: {
  stations: MapStation[];
  children: ReactNode;
}) {
  const rootRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState<string | null>(null);
  const [more, setMore] = useState(false);
  const current = stations.find((s) => s.id === active);

  // hash hanya dibaca di effect supaya hydration tetap cocok
  useEffect(() => {
    const ids = stations.map((s) => s.id);
    const mq = window.matchMedia(DESKTOP);
    const sync = () => setActive(stationFromHash(ids));
    const frame = requestAnimationFrame(() => {
      const initial = stationFromHash(ids);
      // deep link: browser sudah scroll ke daftar, kembalikan ke peta
      if (initial) window.scrollTo({ top: 0, behavior: "instant" });
      setActive(initial);
    });
    window.addEventListener("hashchange", sync);
    window.addEventListener("popstate", sync);
    mq.addEventListener("change", sync);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("hashchange", sync);
      window.removeEventListener("popstate", sync);
      mq.removeEventListener("change", sync);
    };
  }, [stations]);

  // di desktop klik/Enter buka panel; di bawah 1024px anchor scroll biasa
  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;
    const onClick = (event: MouseEvent) => {
      if (event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
      if (!window.matchMedia(DESKTOP).matches) return;
      const link = (event.target as Element).closest("[data-station-link]");
      const id = link?.getAttribute("data-station-link");
      if (!id) return;
      event.preventDefault();
      if (window.location.hash !== PREFIX + id) {
        window.history.pushState(null, "", PREFIX + id);
      }
      setActive(id);
    };
    root.addEventListener("click", onClick);
    return () => root.removeEventListener("click", onClick);
  }, []);

  const close = useCallback(() => {
    if (!active) return;
    window.history.replaceState(null, "", window.location.pathname + window.location.search);
    setActive(null);
    rootRef.current
      ?.querySelector<SVGAElement>(`[data-station-link="${active}"]`)
      ?.focus();
  }, [active]);

  useEffect(() => {
    if (!active) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") close();
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [active, close]);

  // panel menyalin studi kasus dari daftar kanonik
  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;
    root.querySelectorAll("[data-seg]").forEach((el) => {
      el.setAttribute("data-lit", String(el.getAttribute("data-seg") === active));
    });
    root.querySelectorAll("[data-station-link]").forEach((el) => {
      el.setAttribute("aria-expanded", String(el.getAttribute("data-station-link") === active));
    });
    if (!active) return;
    const source = document.querySelector(`#station-${active} [data-case-body]`);
    const region = contentRef.current;
    if (!source || !region) return;
    const clone = source.cloneNode(true) as Element;
    clone.removeAttribute("data-case-body");
    clone.querySelectorAll("[id]").forEach((el) => el.removeAttribute("id"));
    // klaim dulu: stack & penempatan turun ke bawah panel
    clone.querySelectorAll('[aria-label="Stack"], [data-placement]').forEach((el) => clone.append(el));
    clone.className = "flex flex-col gap-(--space-2)";
    region.replaceChildren(clone);
    region.scrollTop = 0;

    const measure = () =>
      setMore(region.scrollHeight - region.scrollTop - region.clientHeight > 4);
    const ro = new ResizeObserver(measure);
    ro.observe(region);
    ro.observe(clone);
    region.addEventListener("scroll", measure, { passive: true });
    return () => {
      ro.disconnect();
      region.removeEventListener("scroll", measure);
    };
  }, [active]);

  return (
    <div ref={rootRef} className="group/map relative" data-panel={active ? "open" : "closed"}>
      {children}
      <aside
        id="station-panel"
        aria-label={current ? `Timetable: ${current.label}` : "Timetable"}
        data-open={active ? "true" : "false"}
        style={current ? { borderTopColor: current.color } : undefined}
        className={`bg-ground-raised border-line-trunk absolute top-[22%] left-[3%] flex h-[65%] w-[63%] flex-col border-t-8 transition-[opacity,translate,visibility] duration-300 ease-out motion-reduce:transition-none ${
          active ? "visible translate-x-0 opacity-100" : "invisible -translate-x-3 opacity-0"
        }`}
      >
        <p className="sr-only">Timetable</p>
        <div className="border-ink-muted/40 flex items-start gap-(--space-2) border-b py-(--space) pl-(--space-3)">
          <div className="flex min-w-0 flex-1 flex-wrap items-baseline gap-x-(--space-2) gap-y-1 pt-1.5">
            <span
              style={current ? { borderTopColor: current.color } : undefined}
              className="bg-enamel text-enamel-ink inline-block border-t-4 px-2 pt-1 text-lg leading-6 font-extrabold tracking-tight"
            >
              {current?.label}
            </span>
            <span className="text-ink-muted text-sm leading-snug font-semibold">
              {current && (
                <>
                  <span className="text-ink">{current.org}</span>
                  <Sep tone="ink" />
                  <span className="whitespace-nowrap">{current.role}</span>
                  {current.period && (
                    <>
                      <Sep tone="ink" />
                      <span className="whitespace-nowrap">{current.period}</span>
                    </>
                  )}
                </>
              )}
            </span>
          </div>
          <button
            type="button"
            onClick={close}
            aria-label="Close timetable"
            className="text-ink hover:bg-enamel hover:text-enamel-ink inline-flex size-11 shrink-0 items-center justify-center"
          >
            <X aria-hidden="true" className="size-5" strokeWidth={2.5} />
          </button>
        </div>
        <div
          ref={contentRef}
          tabIndex={0}
          role="region"
          aria-label={current ? `${current.label} details` : "Station details"}
          className="min-h-0 flex-1 overflow-y-auto px-(--space-3) pt-(--space-2) pb-(--space-2)"
        />
        <p
          aria-hidden="true"
          className={`border-ink-muted/60 text-ink-muted items-center gap-1 border-t px-(--space-3) py-1.5 text-sm font-bold ${more ? "flex" : "hidden"}`}
        >
          Continues
          <ArrowDown className="size-4" strokeWidth={2.5} />
        </p>
      </aside>
    </div>
  );
}
