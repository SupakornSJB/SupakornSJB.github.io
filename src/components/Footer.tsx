import { profile } from "../data/content";

export default function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-2 px-6 py-8 text-center font-mono text-xs text-text-faint sm:flex-row sm:text-left">
        <p>
          © {new Date().getFullYear()} {profile.name}
        </p>
        <p>built with React, Vite &amp; Tailwind CSS</p>
      </div>
    </footer>
  );
}
