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
  const n = announcements.length;
  // One "set" repeats the list enough to overflow even wide screens, then the
  // set is duplicated so the marquee (translateX 0 -> -50%) loops with no gap.
  const set = [...announcements, ...announcements, ...announcements];
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
            const accent = (i % n) % 2 === 0 ? "gold" : "primary";
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
