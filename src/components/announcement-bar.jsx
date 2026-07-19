import { cn } from "@/lib/utils";
import { announcements } from "@/lib/site";

function Message({ a, accent }) {
  return (
    <span className="mx-6 inline-flex items-center text-sm text-foreground/90">
      <span className="whitespace-nowrap">
        {a.pre}
        {a.strong && (
          <span
            className={cn(
              "font-semibold",
              accent === "gold" ? "text-gold" : "text-primary"
            )}
          >
            {a.strong}
          </span>
        )}
        {a.post}
      </span>
    </span>
  );
}

// A dark, full-width ticker that scrolls the announcements across the very top
// of the page. The track holds two copies of the list so the CSS marquee
// (translateX 0 -> -50%) loops seamlessly. Highlights alternate blue and gold.
export function AnnouncementBar() {
  // One "set" must be wide enough to cover the widest screen on its own,
  // because the marquee translates by -50% (exactly one set). Short lists need
  // more repeats, so scale the count to the number of messages.
  const repeats = Math.max(3, Math.ceil(12 / announcements.length));
  const set = Array.from({ length: repeats }, () => announcements).flat();
  // Duplicated so translateX 0 -> -50% loops with no gap.
  const loop = [...set, ...set];

  return (
    <div className="overflow-hidden border-b border-border bg-background">
      {/* thin brand accent line */}
      <div
        aria-hidden
        className="h-0.5 w-full bg-gradient-to-r from-primary via-gold to-primary opacity-80"
      />
      <div className="flex overflow-hidden py-2">
        <div className="animate-marquee flex shrink-0 items-center whitespace-nowrap [animation-duration:95s]">
          {loop.map((a, i) => {
            const accent = i % 2 === 0 ? "gold" : "primary";
            return (
              <span key={i} className="inline-flex items-center">
                <Message a={a} accent={accent} />
                <span
                  aria-hidden
                  className={cn(
                    "size-1 shrink-0 rounded-full",
                    accent === "gold" ? "bg-primary/70" : "bg-gold/70"
                  )}
                />
              </span>
            );
          })}
        </div>
      </div>
    </div>
  );
}
