import { profile } from "../data/content";
import SectionHeading from "./SectionHeading";
import { ArrowUpRightIcon, GitHubIcon, LinkedInIcon } from "./icons";
import ResumeButton from "./ResumeButton";

export default function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-5xl px-6 py-20">
      <SectionHeading index="07" title="Contact" command="echo $CONTACT" sticky />

      <div className="rounded-lg border border-border bg-surface p-8 sm:p-10">
        <p className="max-w-xl text-lg text-text">
          I'm not actively job hunting right now, but I'm always happy to connect — through GitHub, LinkedIn,
          or whatever's easiest for you.
        </p>

        <div className="mt-8 flex flex-wrap gap-4">
          <a
            href={profile.github}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-md border border-border px-5 py-2.5 font-mono text-sm text-text transition-colors hover:border-border-hover hover:text-accent"
          >
            <GitHubIcon className="size-4" />
            GitHub
            <ArrowUpRightIcon className="size-3.5" />
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-md border border-border px-5 py-2.5 font-mono text-sm text-text transition-colors hover:border-border-hover hover:text-accent"
          >
            <LinkedInIcon className="size-4" />
            LinkedIn
            <ArrowUpRightIcon className="size-3.5" />
          </a>
          <ResumeButton
            label="Resume"
            className="inline-flex items-center gap-2 rounded-md bg-accent px-5 py-2.5 font-mono text-sm font-semibold text-bg"
          />
        </div>
      </div>
    </section>
  );
}
