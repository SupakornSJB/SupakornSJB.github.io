import { liveSites } from "../data/content";
import SectionHeading from "./SectionHeading";
import { ArrowUpRightIcon } from "./icons";

export default function LiveSites() {
  return (
    <section id="live" className="mx-auto max-w-5xl px-6 pt-6 pb-8">
      <SectionHeading index="05" title="Live Site" command="curl -I ./live" sticky />

      <div className="grid gap-6 sm:grid-cols-2">
        {liveSites.map((site) => (
          <a
            key={site.url}
            href={site.url}
            target="_blank"
            rel="noreferrer"
            className="group overflow-hidden rounded-lg border border-border bg-surface transition-colors hover:border-border-hover"
          >
            <div className="aspect-video overflow-hidden border-b border-border bg-surface-2">
              <img
                src={site.image}
                alt={`Screenshot of ${site.title}`}
                className="h-full w-full object-cover object-top transition-transform duration-300 group-hover:scale-105"
                loading="lazy"
              />
            </div>
            <div className="p-5">
              <h3 className="mb-1 flex items-center gap-1.5 text-lg font-semibold text-text">
                {site.title}
                <ArrowUpRightIcon className="size-4 text-text-faint transition-colors group-hover:text-accent" />
              </h3>
              <p className="text-sm leading-relaxed text-text-muted">{site.description}</p>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
