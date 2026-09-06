import { useEffect, useState } from "react";

const sections = [
  { id: "top", label: "intro" },
  { id: "profile", label: "profile" },
  { id: "experience", label: "experience" },
  { id: "projects", label: "projects" },
  { id: "skills", label: "skills" },
  { id: "live", label: "live site" },
  { id: "blog", label: "blog" },
  { id: "contact", label: "contact" },
];

/**
 * Fixed side nav (desktop only) that doubles as a scroll indicator — on the
 * fullscreen-slide layout, a section can fill the entire viewport with no
 * peek of what comes next, so there's otherwise no visual cue that the page
 * scrolls at all. Highlights whichever section is currently in view.
 */
export default function TableOfContents() {
  const [active, setActive] = useState("top");

  useEffect(() => {
    const elements = sections
      .map((s) => document.getElementById(s.id))
      .filter((el): el is HTMLElement => el !== null);

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible[0]) setActive(visible[0].target.id);
      },
      { threshold: [0.25, 0.5, 0.75] },
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <nav
      aria-label="Section navigation"
      className="fixed top-1/2 left-6 z-40 hidden -translate-y-1/2 flex-col items-start gap-3 md:flex"
    >
      {sections.map((section) => {
        const isActive = active === section.id;
        return (
          <a key={section.id} href={`#${section.id}`} className="group flex items-center gap-2">
            <span
              className={`size-2 rounded-full transition-colors ${
                isActive ? "bg-accent" : "bg-border group-hover:bg-border-hover"
              }`}
            />
            <span
              className={`font-mono text-xs whitespace-nowrap transition-colors ${
                isActive ? "text-accent" : "text-text-faint group-hover:text-text-muted"
              }`}
            >
              {section.label}
            </span>
          </a>
        );
      })}
    </nav>
  );
}
