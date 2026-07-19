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
    <section className="surface-electric relative overflow-hidden py-12 sm:py-16">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(45%_70%_at_15%_-5%,rgba(2,186,253,0.4),transparent_62%)] dark:bg-[radial-gradient(50%_80%_at_50%_0%,rgba(2,186,253,0.14),transparent_68%)]"
      />
      <Container className="relative">
        <div className="mx-auto max-w-2xl text-center">
          <p>
            <span className="inline-flex items-center rounded-full bg-gold px-3.5 py-1.5 text-xs font-bold uppercase tracking-[0.16em] text-gold-foreground">
              The programme experience
            </span>
          </p>
          <h2 className="mt-3 font-heading text-3xl font-bold tracking-tight text-balance text-primary-foreground sm:text-4xl">
            What happens, week to week.
          </h2>
          <p className="mt-4 text-lg text-primary-foreground/75 text-pretty">
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
                  "group relative flex flex-col overflow-hidden rounded-2xl bg-white p-6 ring-1 transition-shadow",
                  monthly
                    ? "ring-primary-foreground/20"
                    : "ring-black/5 hover:ring-black/10"
                )}
              >
                {/* top cadence accent bar */}
                <span
                  aria-hidden
                  className={cn(
                    "absolute inset-x-0 top-0 h-1",
                    monthly ? "bg-primary-foreground" : "bg-gold"
                  )}
                />

                <div className="flex items-center justify-between">
                  <span className="grid size-11 place-items-center rounded-xl bg-primary/12 text-primary-foreground ring-1 ring-primary/25">
                    <Icon className="size-5" />
                  </span>
                  <span
                    className={cn(
                      "rounded-full px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider",
                      monthly
                        ? "bg-primary-foreground text-white"
                        : "bg-gold text-gold-foreground"
                    )}
                  >
                    {cadence}
                  </span>
                </div>

                <h3 className="mt-4 font-heading text-lg font-bold text-primary-foreground">
                  {title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-primary-foreground/70">
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
