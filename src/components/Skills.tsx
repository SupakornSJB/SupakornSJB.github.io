import { skillGroups, TAGS, type TagId } from "../data/content";
import SectionHeading from "./SectionHeading";

export default function Skills({ onSkillSelect }: { onSkillSelect: (tag: TagId) => void }) {
  return (
    <section id="skills" className="mx-auto max-w-5xl px-6 pt-6 pb-8">
      <SectionHeading index="04" title="Skills" command="cat skills.json" sticky />
      <p className="-mt-6 mb-6 font-mono text-xs text-text-faint">
        click a skill to jump to projects that use it
      </p>

      <div className="grid gap-4 sm:grid-cols-2">
        {skillGroups.map((group) => (
          <div key={group.label} className="rounded-lg border border-border bg-surface p-4">
            <p className="mb-2 font-mono text-xs uppercase tracking-wider text-accent-2">{group.label}</p>
            <div className="flex flex-wrap gap-2">
              {group.skills.map((tag) => (
                <button
                  key={tag}
                  type="button"
                  onClick={() => onSkillSelect(tag)}
                  className="cursor-pointer rounded-full border border-border bg-surface-2 px-3 py-1 font-mono text-xs text-text-muted transition-colors hover:border-accent/50 hover:text-accent"
                >
                  {TAGS[tag]}
                </button>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
