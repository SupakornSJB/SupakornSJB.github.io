import { useEffect, useRef, useState, type ReactNode } from "react";
import { ChevronDownIcon } from "./icons";

/**
 * Wraps one page section so it becomes a fullscreen, scroll-snapped slide on
 * desktop (md+). Below md it renders as a plain block — mobile keeps normal
 * free-scrolling since snap-per-viewport doesn't suit small screens well.
 *
 * If a section's content is taller than the viewport, it scrolls internally
 * within the slide rather than growing the page — and in that case a small
 * "more below" hint fades in at the bottom, disappearing once you've
 * scrolled to the end. It's only mounted at all when content actually
 * overflows, so it can't add stray space to the `center`-ed slides that
 * never overflow. Pass `center` for slides whose content is usually shorter
 * than the viewport (Hero, Profile, Contact) so it sits in the middle instead
 * of pinned to the top with empty space below — done via `margin: auto` on a
 * wrapper rather than `justify-content: safe center`, which turned out not
 * to actually center content in testing despite computing correctly; auto
 * margins are a much older, more reliably-supported technique and have the
 * same "give up and fall back to normal flow instead of clipping" safety
 * property once content no longer fits.
 */
export default function Slide({ children, center = false }: { children: ReactNode; center?: boolean }) {
  const ref = useRef<HTMLDivElement>(null);
  const [hasOverflow, setHasOverflow] = useState(false);
  const [atBottom, setAtBottom] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const update = () => {
      setHasOverflow(el.scrollHeight > el.clientHeight + 4);
      setAtBottom(el.scrollTop + el.clientHeight >= el.scrollHeight - 4);
    };

    update();
    el.addEventListener("scroll", update, { passive: true });
    const resizeObserver = new ResizeObserver(update);
    resizeObserver.observe(el);
    return () => {
      el.removeEventListener("scroll", update);
      resizeObserver.disconnect();
    };
  }, []);

  return (
    <div
      ref={ref}
      className={`relative md:h-[calc(100dvh_-_4rem)] md:snap-start md:scroll-smooth md:overflow-y-auto ${center ? "md:flex md:flex-col" : ""}`}
    >
      <div className={center ? "md:my-auto" : ""}>{children}</div>

      {hasOverflow && (
        <div
          aria-hidden="true"
          className={`pointer-events-none sticky inset-x-0 bottom-0 hidden justify-center pb-3 md:flex transition-opacity duration-300 ${
            atBottom ? "opacity-0" : "opacity-100"
          }`}
        >
          <div className="rounded-full border border-border bg-surface/90 p-1.5 text-text-faint shadow-lg backdrop-blur-sm">
            <ChevronDownIcon className="scroll-hint-bounce size-4" />
          </div>
        </div>
      )}
    </div>
  );
}
