import { TAGS, type Project, type TagId } from "../data/content";
import { ArrowUpRightIcon } from "./icons";

export default function ProjectCard({
  project,
  activeTags,
  onTagSelect,
}: {
  project: Project;
  activeTags: TagId[];
  onTagSelect: (tag: TagId) => void;
}) {
  return (
    <article
      className={`group flex h-full flex-col rounded-lg border bg-surface p-6 transition-colors ${
        project.featured
          ? "featured-glow border-accent/40"
          : "border-border hover:border-border-hover"
      }`}
    >
      <div className="mb-3 flex items-start justify-between gap-3">
        <div>
          {project.featured && (
            <p className="mb-1 font-mono text-[11px] uppercase tracking-wider text-accent">Featured</p>
          )}
          <h3 className="text-lg font-semibold text-text">{project.title}</h3>
        </div>
        <span className="whitespace-nowrap font-mono text-xs text-text-faint">{project.period}</span>
      </div>

      <p className="mb-5 flex-1 text-sm leading-relaxed text-text-muted">{project.description}</p>

      <div className="mb-5 flex flex-wrap gap-2">
        {project.tech.map((tag) => {
          const isActive = activeTags.includes(tag);
          return (
            <button
              key={tag}
              type="button"
              onMouseDown={(e) => e.preventDefault()}
              onClick={() => onTagSelect(tag)}
              className={`cursor-pointer rounded border px-2 py-0.5 font-mono text-[11px] transition-colors ${
                isActive
                  ? "border-accent bg-accent text-bg font-semibold"
                  : "border-border bg-surface-2 text-text-muted hover:border-accent/50 hover:text-accent"
              }`}
            >
              {TAGS[tag]}
            </button>
          );
        })}
      </div>

      <div className="flex flex-wrap gap-4 border-t border-border pt-4">
        {project.links.map((link) => (
          <a
            key={link.url}
            href={link.url}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 font-mono text-sm text-text-muted transition-colors hover:text-accent"
          >
            {link.label}
            <ArrowUpRightIcon className="size-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        ))}
      </div>
    </article>
  );
}
