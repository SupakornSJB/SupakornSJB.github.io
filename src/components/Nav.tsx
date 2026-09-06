import { useEffect, useState } from "react";
import { CloseIcon, GitHubIcon, LinkedInIcon, MenuIcon } from "./icons";
import { profile } from "../data/content";
import ThemeToggle from "./ThemeToggle";
import type { Theme } from "../useTheme";

// Only used for the mobile menu now — desktop navigation lives in the
// TableOfContents side nav instead, so it doesn't need to be duplicated here.
const links = [
  { href: "#profile", label: "profile" },
  { href: "#experience", label: "experience" },
  { href: "#projects", label: "projects" },
  { href: "#skills", label: "skills" },
  { href: "#live", label: "live site" },
  { href: "#blog", label: "blog" },
  { href: "#contact", label: "contact" },
];

export default function Nav({ theme, onToggleTheme }: { theme: Theme; onToggleTheme: () => void }) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 border-b transition-colors ${
        scrolled ? "border-border bg-bg/80 backdrop-blur-md" : "border-transparent"
      }`}
    >
      <nav className="mx-auto flex h-16 max-w-5xl items-center justify-between px-6">
        <a href="#top" className="font-mono text-sm text-text">
          <span className="text-accent">~</span>/{" "}
          <span className="text-text-muted">supakornsjb</span>
          <span className="text-accent">@</span>
          <span className="text-text-muted">portfolio</span>
        </a>

        <div className="hidden items-center gap-4 text-text-muted md:flex">
          <a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub" className="hover:text-accent">
            <GitHubIcon />
          </a>
          <a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" className="hover:text-accent">
            <LinkedInIcon />
          </a>
          <ThemeToggle theme={theme} onToggle={onToggleTheme} />
        </div>

        <div className="flex items-center gap-3 md:hidden">
          <ThemeToggle theme={theme} onToggle={onToggleTheme} />
          <button
            type="button"
            aria-label="Toggle menu"
            className="cursor-pointer text-text"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>
      </nav>

      {open && (
        <div className="border-t border-border bg-bg px-6 py-4 md:hidden">
          <div className="flex flex-col gap-4">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="font-mono text-sm text-text-muted hover:text-accent"
              >
                {link.label}
              </a>
            ))}
            <div className="flex gap-4 pt-2 text-text-muted">
              <a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub" className="hover:text-accent">
                <GitHubIcon />
              </a>
              <a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" className="hover:text-accent">
                <LinkedInIcon />
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
