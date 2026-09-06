export default function SectionHeading({
  index,
  title,
  command,
  sticky = false,
  tight = false,
}: {
  index: string;
  title: string;
  command: string;
  /** Pins the heading to the top of its slide's own scroll area while the
   * rest of the section scrolls underneath — useful for sections long enough
   * to need internal scrolling (Projects), so you always know which section
   * you're in. Fully transparent by design — content scrolling underneath
   * shows through. */
  sticky?: boolean;
  /** Cuts the bottom margin down to almost nothing — for when something else
   * (e.g. a filter bar) is meant to sit tight underneath this heading as
   * part of the same sticky block. */
  tight?: boolean;
}) {
  const marginClass = tight ? "mb-3" : sticky ? "mb-10 md:mb-6" : "mb-10";

  return (
    <div
      className={`flex items-baseline gap-3 ${marginClass} ${
        sticky ? "sticky top-0 z-10 -mt-1 py-4" : ""
      }`}
    >
      <span className="font-mono text-sm text-text-faint">{index}</span>
      <h2 className="section-glow text-2xl font-bold text-text sm:text-3xl">{title}</h2>
      <span className="hidden font-mono text-sm text-text-faint sm:inline">// {command}</span>
      <span className="h-px flex-1 bg-border" />
    </div>
  );
}
