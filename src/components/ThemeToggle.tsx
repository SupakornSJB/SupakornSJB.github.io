import { MoonIcon, SunIcon } from "./icons";
import type { Theme } from "../useTheme";

export default function ThemeToggle({
  theme,
  onToggle,
  className = "",
}: {
  theme: Theme;
  onToggle: () => void;
  className?: string;
}) {
  return (
    <button
      type="button"
      onClick={onToggle}
      aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
      title={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
      className={`cursor-pointer rounded-md border border-border p-1.5 text-text-muted transition-colors hover:border-border-hover hover:text-accent ${className}`}
    >
      {theme === "dark" ? <SunIcon className="size-4" /> : <MoonIcon className="size-4" />}
    </button>
  );
}
