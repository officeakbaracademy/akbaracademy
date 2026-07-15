import { GraduationCap, ClipboardList, RefreshCw, Flag } from "lucide-react";

import { cn } from "@/lib/utils";
import { Container } from "@/components/container";
import { Reveal } from "@/components/reveal";

const STEPS = [
  {
    cadence: "Weekly",
    icon: GraduationCap,
    title: "Live teaching",
    desc: "Clear teaching aligned to exam-board standards and mark-scheme expectations.",
  },
  {
    cadence: "Weekly",
    icon: ClipboardList,
    title: "Structured practice",
    desc: "Assigned practice with visible goals. Students always know what is next.",
  },
  {
    cadence: "Weekly",
    icon: RefreshCw,
    title: "Feedback loop",
    desc: "Mistakes mapped and corrected fast. Errors stop repeating.",
  },
  {
    cadence: "Monthly",
    icon: Flag,
    title: "Performance checkpoint",
    desc: "Progress checked against the target trajectory. The plan is adjusted.",
  },
];

export function WeekToWeek() {
  return (
    <section className="py-12 sm:py-16">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-gold">
            The programme experience
          </p>
          <h2 className="mt-3 font-heading text-3xl font-bold tracking-tight text-balance sm:text-4xl">
            What happens, <span className="text-gold">week to week</span>
          </h2>
          <p className="mt-4 text-lg text-muted-foreground text-pretty">
            Premium is not visuals. Premium is process and standards.
          </p>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {STEPS.map(({ cadence, icon: Icon, title, desc }, i) => {
            const monthly = cadence === "Monthly";
            return (
              <Reveal
                key={title}
                delay={i * 90}
                className={cn(
                  "group relative flex flex-col overflow-hidden rounded-2xl border bg-card p-6 transition-colors",
                  monthly
                    ? "border-primary/40 ring-1 ring-primary/15"
                    : "border-border hover:border-gold/40"
                )}
              >
                {/* top cadence accent bar */}
                <span
                  aria-hidden
                  className={cn(
                    "absolute inset-x-0 top-0 h-1",
                    monthly ? "bg-primary" : "bg-gold"
                  )}
                />

                <div className="flex items-center justify-between">
                  <span
                    className={cn(
                      "grid size-11 place-items-center rounded-xl ring-1",
                      monthly
                        ? "bg-primary/10 text-primary ring-primary/15"
                        : "bg-gold/10 text-gold ring-gold/15"
                    )}
                  >
                    <Icon className="size-5" />
                  </span>
                  <span
                    className={cn(
                      "rounded-full px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider",
                      monthly
                        ? "bg-primary/10 text-primary"
                        : "bg-gold/10 text-gold"
                    )}
                  >
                    {cadence}
                  </span>
                </div>

                <h3 className="mt-4 font-heading text-lg font-bold">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {desc}
                </p>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
