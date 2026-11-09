import Contact from "./components/Contact";
import Education from "./components/Education";
import Nameplate from "./components/Nameplate";
import OtherWork from "./components/OtherWork";
import StationList from "./components/StationList";
import StationMapController from "./components/StationMapController";
import StripMap from "./components/StripMap";
import TransitMap from "./components/TransitMap";
import { formatPeriod, lineColor, sectionHeading } from "./components/stationFormat";
import { stations } from "./data/profile";

const mapStations = stations.map((s) => ({
  id: s.id,
  label: s.label,
  color: lineColor[s.line],
  org: s.org,
  role: s.role,
  period: formatPeriod(s.period),
}));

export default function Home() {
  return (
    <main className="mx-auto max-w-[90rem] px-(--space-3) py-(--space-4) lg:px-(--space-5)">
      <div className="grid gap-(--space-5) lg:grid-cols-[38fr_62fr] lg:gap-(--space-6)">
        <div className="flex flex-col gap-(--space-4)">
          <Nameplate />
          <StripMap />
        </div>
        <section id="line" aria-label="Line map" className="hidden lg:block">
          <StationMapController stations={mapStations}>
            <TransitMap />
          </StationMapController>
        </section>
      </div>

      <section
        id="stations"
        aria-labelledby="stations-h"
        className="mt-(--space-6)"
      >
        <h2 id="stations-h" className={`${sectionHeading} mb-(--space-4)`}>
          The line
        </h2>
        <StationList />
      </section>

      <section id="other-work" aria-label="Other work" className="mt-(--space-6)">
        <OtherWork />
      </section>
      <section id="education" aria-label="Education" className="mt-(--space-6)">
        <Education />
      </section>
      <section id="contact" aria-label="Contact" className="mt-(--space-6)">
        <Contact />
      </section>
    </main>
  );
}
