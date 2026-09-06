import { profile } from "../data/content";
import { ArrowUpRightIcon, GitHubIcon } from "./icons";
import ResumeButton from "./ResumeButton";

export default function Hero() {
  return (
    <section id="top" className="mx-auto max-w-5xl px-6 pt-16 pb-24 sm:pt-24 sm:pb-32">
      <div className="section-fade">
        <p className="font-mono text-sm text-text-muted">
          <span className="text-accent">$</span> whoami
        </p>

        <h1 className="mt-3 text-4xl font-extrabold tracking-tight text-text text-glow sm:text-6xl">
          {profile.handle}
        </h1>

        <p className="mt-2 font-mono text-sm text-text-muted sm:text-base">
          {profile.name} <span className="text-text-faint">· "{profile.nickname}"</span>
        </p>

        <h2 className="mt-4 font-mono text-lg text-accent-2 sm:text-xl">
          {profile.title}
          <span className="blinking-cursor text-accent">_</span>
        </h2>

        <p className="mt-6 max-w-2xl text-base leading-relaxed text-text-muted sm:text-lg">
          {profile.tagline}
        </p>

        <div className="mt-10 flex flex-wrap items-center gap-4">
          <a
            href="#projects"
            className="rounded-md bg-accent px-5 py-2.5 font-mono text-sm font-semibold text-bg transition-transform hover:-translate-y-0.5"
          >
            view projects
          </a>
          <a
            href="#contact"
            className="rounded-md border border-border px-5 py-2.5 font-mono text-sm text-text transition-colors hover:border-border-hover hover:text-accent"
          >
            get in touch
          </a>
          <a
            href={profile.github}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 px-2 py-2.5 font-mono text-sm text-text-muted transition-colors hover:text-accent"
          >
            <GitHubIcon className="size-4" />
            GitHub
            <ArrowUpRightIcon className="size-3.5" />
          </a>
          <ResumeButton
            label="resume"
            className="inline-flex items-center gap-2 px-2 py-2.5 font-mono text-sm text-text-muted"
          />
        </div>
      </div>
    </section>
  );
}
