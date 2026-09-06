import { TAGS, projectFilters, projects, type ProjectCategory, type TagId } from "../data/content";
import ProjectCard from "./ProjectCard";
import SectionHeading from "./SectionHeading";

export default function Projects({
  activeTags,
  onToggleTag,
  onClearTags,
  activeCategory,
  onSelectCategory,
}: {
  activeTags: TagId[];
  onToggleTag: (tag: TagId) => void;
  onClearTags: () => void;
  activeCategory: ProjectCategory | "all";
  onSelectCategory: (category: ProjectCategory | "all") => void;
}) {
  const filtered = projects.filter(
    (p) =>
      (activeCategory === "all" || p.categories.includes(activeCategory)) &&
      (activeTags.length === 0 || activeTags.some((tag) => p.tech.includes(tag))),
  );
  const featured = filtered.filter((p) => p.featured);
  const rest = filtered.filter((p) => !p.featured);

  const command = [
    `ls ./projects`,
    activeCategory !== "all" ? `--filter=${activeCategory}` : "",
    activeTags.length > 0 ? `--tags=${activeTags.map((t) => TAGS[t]).join(",")}` : "",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <section id="projects" className="mx-auto max-w-5xl px-6 py-20">
      <div className="bg-ambient sticky top-0 z-10 -mt-1 pt-4 pb-4">
        <SectionHeading index="03" title="Projects" command={command} tight />

        <div className="flex flex-wrap items-center gap-3">
          <div className="inline-flex flex-wrap gap-1 rounded-md border border-border bg-surface p-1">
            {projectFilters.map((filter) => (
              <button
                key={filter.key}
                type="button"
                onMouseDown={(e) => e.preventDefault()}
                onClick={() => onSelectCategory(filter.key)}
                aria-pressed={activeCategory === filter.key}
                className={`cursor-pointer rounded px-4 py-1.5 font-mono text-sm transition-colors ${
                  activeCategory === filter.key
                    ? "bg-accent text-bg font-semibold"
                    : "text-text-muted hover:text-accent"
                }`}
              >
                {filter.label}
              </button>
            ))}
          </div>

          {activeTags.map((tag) => (
            <button
              key={tag}
              type="button"
              onMouseDown={(e) => e.preventDefault()}
              onClick={() => onToggleTag(tag)}
              className="inline-flex cursor-pointer items-center gap-2 rounded-full border border-accent/50 bg-accent/10 px-3 py-1 font-mono text-xs text-accent"
            >
              tag: {TAGS[tag]}
              <span aria-hidden="true">✕</span>
            </button>
          ))}

          {activeTags.length > 1 && (
            <button
              type="button"
              onMouseDown={(e) => e.preventDefault()}
              onClick={onClearTags}
              className="cursor-pointer font-mono text-xs text-text-faint underline-offset-2 hover:text-accent hover:underline"
            >
              clear all tags
            </button>
          )}
        </div>
      </div>

      <div className="grid gap-6">
        {featured.map((project) => (
          <ProjectCard key={project.title} project={project} activeTags={activeTags} onTagSelect={onToggleTag} />
        ))}
      </div>

      <div className="mt-6 grid gap-6 sm:grid-cols-2">
        {rest.map((project) => (
          <ProjectCard key={project.title} project={project} activeTags={activeTags} onTagSelect={onToggleTag} />
        ))}
      </div>

      {filtered.length === 0 && (
        <p className="font-mono text-sm text-text-faint">No projects match this filter yet.</p>
      )}
    </section>
  );
}
