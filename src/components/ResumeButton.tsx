import { FileIcon } from "./icons";

/**
 * The resume file isn't ready yet — renders as a disabled button with a
 * hover tooltip explaining why, instead of a link to a PDF that doesn't
 * exist. Swap back to a real <a href={profile.resumeUrl}> once it's ready.
 */
export default function ResumeButton({ className, label }: { className: string; label: string }) {
  return (
    <span className="group relative inline-flex">
      <button type="button" disabled aria-disabled="true" className={`cursor-not-allowed opacity-50 ${className}`}>
        <FileIcon className="size-4" />
        {label}
      </button>
      <span
        role="tooltip"
        className="pointer-events-none absolute -top-9 left-1/2 z-10 -translate-x-1/2 rounded-md border border-border bg-surface px-2 py-1 font-mono text-xs whitespace-nowrap text-text-muted opacity-0 shadow-lg transition-opacity group-hover:opacity-100"
      >
        resume coming soon
      </span>
    </span>
  );
}
