import { interests, profile } from "../data/content";
import SectionHeading from "./SectionHeading";

export default function Profile() {
  return (
    <section id="profile" className="mx-auto max-w-5xl px-6 py-20">
      <SectionHeading index="01" title="Profile" command="cat profile.md" sticky />

      <div className="grid gap-10 md:grid-cols-5">
        <div className="space-y-4 md:col-span-3">
          {profile.bio.map((paragraph) => (
            <p key={paragraph} className="leading-relaxed text-text-muted">
              {paragraph}
            </p>
          ))}
          <p className="font-mono text-sm text-text-faint">{profile.location}</p>
        </div>

        <div className="md:col-span-2">
          <div className="rounded-lg border border-border bg-surface p-5">
            <p className="mb-4 font-mono text-xs uppercase tracking-wider text-text-faint">Outside of code</p>
            <div className="flex flex-wrap gap-2">
              {interests.map((interest) => (
                <span
                  key={interest.label}
                  className="rounded-full border border-border bg-surface-2 px-3 py-1 text-sm text-text-muted"
                >
                  {interest.emoji} {interest.label}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
