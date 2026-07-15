import {
  Clock,
  EyeOff,
  MessageSquare,
  CalendarClock,
  UserX,
  Repeat,
  TrendingDown,
  BookOpenCheck,
} from "lucide-react";

import { Container } from "@/components/container";
import { Reveal } from "@/components/reveal";

// What parents actually worry about (the emotional reality, not "past papers").
const PARENT_WORRIES = [
  {
    icon: Clock,
    text: "Hours of studying, yet the grades never seem to move.",
  },
  {
    icon: EyeOff,
    text: "No real way to see whether their child is actually improving.",
  },
  {
    icon: MessageSquare,
    text: "The tutor rarely explains what is going wrong, or how to fix it.",
  },
  {
    icon: CalendarClock,
    text: "Exams are close, and nobody seems sure their child is ready.",
  },
];

// Why generic, one-off tutoring rarely changes the outcome.
const ORDINARY_FAILS = [
  {
    icon: UserX,
    text: "Generalist tutors who do not truly specialise in the subject.",
  },
  {
    icon: Repeat,
    text: "The same lesson for every student, whatever their gaps.",
  },
  {
    icon: TrendingDown,
    text: "Plenty of effort, but no measurable progress to show for it.",
  },
  {
    icon: BookOpenCheck,
    text: "Cramming through papers instead of building real understanding.",
  },
];

function ProblemList({ eyebrow, tone, items }) {
  const gold = tone === "gold";
  return (
    <div className="rounded-3xl border border-border bg-card p-6 sm:p-8">
      <span
        className={
          "inline-flex items-center rounded-full px-3 py-1 text-[11px] font-bold uppercase tracking-wider " +
          (gold ? "bg-gold/12 text-gold" : "bg-primary/12 text-primary")
        }
      >
        {eyebrow}
      </span>
      <ul className="mt-6 space-y-4">
        {items.map(({ icon: Icon, text }) => (
          <li key={text} className="flex items-start gap-4">
            <span
              className={
                "grid size-10 shrink-0 place-items-center rounded-xl ring-1 " +
                (gold
                  ? "bg-gold/10 text-gold ring-gold/15"
                  : "bg-primary/10 text-primary ring-primary/15")
              }
            >
              <Icon className="size-5" />
            </span>
            <p className="pt-1.5 text-[15px] leading-relaxed text-foreground/90">
              {text}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function Challenges() {
  return (
    <section className="border-y border-border py-12 sm:py-16">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-gold">
            The real problem
          </p>
          <h2 className="mt-3 font-heading text-3xl font-bold tracking-tight text-balance sm:text-4xl">
            Most families do not have an{" "}
            <span className="text-primary">effort problem</span>
          </h2>
          <p className="mt-4 text-lg text-muted-foreground text-pretty">
            They have a system problem. Here is what that really looks like at
            home, and why ordinary tutoring so rarely changes it.
          </p>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-2 lg:gap-8">
          <Reveal>
            <ProblemList
              eyebrow="What parents tell us"
              tone="gold"
              items={PARENT_WORRIES}
            />
          </Reveal>
          <Reveal delay={120}>
            <ProblemList
              eyebrow="Why ordinary tuition falls short"
              tone="primary"
              items={ORDINARY_FAILS}
            />
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
