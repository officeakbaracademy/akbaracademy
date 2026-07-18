import { BookOpen, LineChart, BadgeCheck } from "lucide-react";

import { Container } from "@/components/container";
import { Reveal } from "@/components/reveal";

// The Three Uniques from the knowledge base.
const REASONS = [
  {
    icon: BookOpen,
    title: "Exam author expertise",
    desc: "Our academy is led by a published Physics author and specialist teacher. We do not just cover the syllabus, we teach exactly how marks are won and lost in the exam.",
  },
  {
    icon: LineChart,
    title: "A live performance system",
    desc: "Every student is taught, set work, marked and tracked. Our AI supported system gives parents and students a clear, honest picture of progress, week after week.",
  },
  {
    icon: BadgeCheck,
    title: "Measured, proven results",
    desc: "Because the system is structured and feedback driven, improvement is not luck. It is measurable. Our students consistently move up grade boundaries into their target grades.",
  },
];

export function WhyUs() {
  return (
    <section className="py-12 sm:py-16">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-gold">
            Why Akbar Academy
          </p>
          <h2 className="mt-3 font-heading text-3xl font-bold tracking-tight text-balance sm:text-4xl">
            Three reasons families choose us.
          </h2>
          <p className="mt-4 text-lg text-muted-foreground text-pretty">
            What sets us apart is not more hours. It is a smarter, exam trained
            approach to how those hours are used.
          </p>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {REASONS.map(({ icon: Icon, title, desc }, i) => (
            <Reveal key={title} delay={i * 90} className="h-full">
              <div className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card p-7 transition-colors hover:border-primary/40">
                {/* ghost sequence numeral */}
                <span
                  aria-hidden
                  className="pointer-events-none absolute right-4 top-3 select-none font-heading text-6xl font-extrabold leading-none text-primary/[0.07]"
                >
                  {i + 1}
                </span>

                <span className="grid size-12 place-items-center rounded-xl bg-primary/10 text-primary ring-1 ring-primary/15">
                  <Icon className="size-6" />
                </span>

                <h3 className="mt-6 font-heading text-xl font-bold tracking-tight">
                  {title}
                </h3>
                <p className="mt-3 flex-1 text-[15px] leading-relaxed text-muted-foreground text-pretty">
                  {desc}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
