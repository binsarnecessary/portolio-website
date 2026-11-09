import { ArrowUpRight } from "lucide-react";
import { otherWork } from "../data/profile";

// link GitHub = kode sumber; selain itu situs live
const linkLabel = (href: string) => (new URL(href).hostname === "github.com" ? "Repo" : "Visit");

export default function Projects() {
  return (
    <ul className="bg-rule border-rule grid gap-px overflow-hidden rounded-xl border sm:grid-cols-2">
      {otherWork.map((item) => (
        <li
          key={item.id}
          className="bg-surface hover:bg-surface-muted flex flex-col justify-between gap-4 p-6 transition-colors duration-150"
        >
          <div>
            <h3 className="text-lg font-semibold tracking-tight">{item.name}</h3>
            <p className="text-ink-muted">{item.type}</p>
            <ul aria-label="Stack" className="mt-3 flex flex-wrap gap-1.5">
              {item.stack.map((tech) => (
                <li
                  key={tech}
                  className="bg-surface-muted text-ink-muted ring-rule rounded-md px-2 py-0.5 text-xs leading-5 ring-1 ring-inset"
                >
                  {tech}
                </li>
              ))}
            </ul>
          </div>

          {item.href ? (
            <a
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent hover:text-accent-hover inline-flex min-h-11 items-center gap-1 -my-3 self-start font-medium underline decoration-transparent transition-colors duration-150 hover:decoration-current"
            >
              {linkLabel(item.href)}
              <ArrowUpRight aria-hidden="true" className="size-4" strokeWidth={2} />
              <span className="sr-only">{item.name} (opens in a new tab)</span>
            </a>
          ) : (
            <p className="text-ink-muted inline-flex min-h-11 -my-3 items-center self-start text-sm">
              Source on request
            </p>
          )}
        </li>
      ))}
    </ul>
  );
}
