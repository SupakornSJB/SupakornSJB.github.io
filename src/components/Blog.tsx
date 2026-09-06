import SectionHeading from "./SectionHeading";

export default function Blog() {
  return (
    <section id="blog" className="mx-auto max-w-5xl px-6 pt-6 pb-8">
      <SectionHeading index="06" title="Blog" command="ls ./blog" sticky />

      <div className="flex flex-col items-center rounded-lg border border-dashed border-border bg-surface/50 px-6 py-16 text-center">
        <p className="mb-3 text-4xl">🚧</p>
        <p className="mb-1 font-mono text-sm text-text-muted">./blog — nothing published yet</p>
        <p className="max-w-md text-sm text-text-faint">
          Planning to write about the projects above — architecture decisions, what broke, and what I'd do
          differently. Coming soon.
        </p>
      </div>
    </section>
  );
}
