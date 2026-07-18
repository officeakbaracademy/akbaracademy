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
    <section className="relative overflow-hidden bg-[linear-gradient(135deg,#0f8fd4,#0b6ba4_55%,#0a5688)] py-12 dark:bg-[linear-gradient(to_bottom,#102a48,#0b1c30)] sm:py-16">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(45%_70%_at_15%_-5%,rgba(2,186,253,0.4),transparent_62%)] dark:bg-[radial-gradient(50%_80%_at_50%_0%,rgba(2,186,253,0.14),transparent_68%)]"
      />
      <Container className="relative">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-gold">
            The programme experience
          </p>
          <h2 className="mt-3 font-heading text-3xl font-bold tracking-tight text-balance text-white sm:text-4xl">
            What happens, <span className="text-gold">week to week</span>.
          </h2>
          <p className="mt-4 text-lg text-white/80 text-pretty">
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
                  "group relative flex flex-col overflow-hidden rounded-2xl p-6 ring-1 backdrop-blur transition-colors",
                  monthly
                    ? "bg-white/15 ring-white/30"
                    : "bg-white/10 ring-white/15 hover:ring-white/25"
                )}
              >
                {/* top cadence accent bar */}
                <span
                  aria-hidden
                  className={cn(
                    "absolute inset-x-0 top-0 h-1",
                    monthly ? "bg-white" : "bg-gold"
                  )}
                />

                <div className="flex items-center justify-between">
                  <span className="grid size-11 place-items-center rounded-xl bg-white/15 text-white ring-1 ring-white/20">
                    <Icon className="size-5" />
                  </span>
                  <span
                    className={cn(
                      "rounded-full px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider",
                      monthly
                        ? "bg-white/20 text-white"
                        : "bg-gold/20 text-gold"
                    )}
                  >
                    {cadence}
                  </span>
                </div>

                <h3 className="mt-4 font-heading text-lg font-bold text-white">
                  {title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-white/75">
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
