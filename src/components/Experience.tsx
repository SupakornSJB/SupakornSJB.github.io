import { TAGS, education, experience, type TagId } from "../data/content";
import SectionHeading from "./SectionHeading";

function EntryCard({
  title,
  subtitle,
  period,
  current,
  description,
  tags,
}: {
  title: string;
  subtitle: string;
  period: string;
  current?: boolean;
  description?: string;
  tags?: TagId[];
}) {
  return (
    <div className="rounded-lg border border-border bg-surface p-5">
      <div className="mb-2 flex flex-wrap items-start justify-between gap-3">
        <div>
          <h4 className="text-lg font-semibold text-text">{title}</h4>
          <p className="text-sm text-text-muted">{subtitle}</p>
        </div>
        <div className="flex items-center gap-2 whitespace-nowrap font-mono text-xs text-text-faint">
          {current && (
            <span className="relative flex size-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-60" />
              <span className="relative inline-flex size-2 rounded-full bg-accent" />
            </span>
          )}
          {period}
        </div>
      </div>

      {description && <p className="mb-4 text-sm leading-relaxed text-text-muted">{description}</p>}

      {tags && tags.length > 0 && (
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className="rounded border border-border bg-surface-2 px-2 py-0.5 font-mono text-[11px] text-text-muted"
            >
              {TAGS[tag]}
            </span>
          ))}
        </div>
      )}
    </div>
  );
}

export default function Experience() {
  return (
    <section id="experience" className="mx-auto max-w-5xl px-6 pt-6 pb-8">
      <SectionHeading index="02" title="Experience" command="cat experience.json" sticky />

      <div className="space-y-6">
        <div>
          <p className="mb-3 font-mono text-xs uppercase tracking-wider text-accent-2">Work</p>
          <div className="space-y-4">
            {experience.map((job) => (
              <EntryCard
                key={job.company + job.role}
                title={job.role}
                subtitle={job.company}
                period={job.period}
                current={job.current}
                description={job.description}
                tags={job.tech}
              />
            ))}
          </div>
        </div>

        <div>
          <p className="mb-3 font-mono text-xs uppercase tracking-wider text-accent-2">Education</p>
          <div className="grid gap-4 sm:grid-cols-2">
            {education.map((item) => (
              <EntryCard
                key={item.school}
                title={item.school}
                subtitle={item.degree}
                period={item.detail ? `${item.period} · ${item.detail}` : item.period}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
