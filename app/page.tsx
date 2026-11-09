import Contact from "./components/Contact";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Section from "./components/Section";
import SiteHeader from "./components/SiteHeader";
import { person } from "./data/profile";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main className="mx-auto max-w-6xl px-4 sm:px-8">
        <Hero />
        <Section id="experience" title="Experience">
          <Experience />
        </Section>
        <Section id="projects" title="Projects">
          <Projects />
        </Section>
        <Section id="education" title="Education">
          <Education />
        </Section>
        <Section id="contact" title="Contact">
          <Contact />
        </Section>
      </main>
      <footer className="border-rule border-t">
        <p className="text-ink-muted mx-auto max-w-6xl px-4 py-8 text-sm sm:px-8">
          © 2026 {person.name}
        </p>
      </footer>
    </>
  );
}
