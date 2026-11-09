import { Download } from "lucide-react";
import { cvHref } from "../data/cv";
import { person } from "../data/profile";

const links = [
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#education", label: "Education" },
  { href: "#contact", label: "Contact" },
];

export default function SiteHeader() {
  return (
    <header className="border-rule bg-surface sticky top-0 z-10 border-b">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-x-6 px-4 sm:h-(--header-h) sm:flex-nowrap sm:px-8">
        <a
          href="#top"
          className="flex min-h-12 items-center font-semibold tracking-tight sm:min-h-11"
        >
          {person.name}
        </a>

        <nav
          aria-label="Sections"
          className="order-last -mx-2 w-[calc(100%+1rem)] sm:order-none sm:mx-0 sm:ml-auto sm:w-auto"
        >
          <ul className="flex justify-between sm:justify-end sm:gap-1">
            {links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-ink-muted hover:text-ink inline-flex min-h-11 items-center rounded-md px-2 text-sm font-medium transition-colors duration-150 sm:px-3"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <a
          href={cvHref()}
          download
          className="border-rule-strong text-ink hover:border-accent hover:text-accent inline-flex min-h-9 items-center gap-1.5 rounded-lg border px-3 text-sm font-medium transition-colors duration-150"
        >
          <Download aria-hidden="true" className="size-4" strokeWidth={2} />
          Download CV
        </a>
      </div>
    </header>
  );
}
