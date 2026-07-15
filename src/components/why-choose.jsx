import {
  BadgeCheck,
  GraduationCap,
  Video,
  ClipboardCheck,
  RefreshCw,
  LifeBuoy,
} from "lucide-react";

import { cn } from "@/lib/utils";
import { Container } from "@/components/container";
import { Reveal } from "@/components/reveal";

const CONTENT_FOCUS = {
  label: "Content focus",
  tone: "primary",
  items: [
    {
      icon: BadgeCheck,
      title: "Endorsed, proprietary content",
      desc: "Cambridge and Edexcel endorsed material, written and refined in-house.",
    },
    {
      icon: GraduationCap,
      title: "Every level covered",
      desc: "Full I/GCSE and I/A Level teaching across our core subjects.",
    },
    {
      icon: Video,
      title: "Course and experiment videos",
      desc: "Unique lesson and experiment videos that deepen real understanding.",
    },
  ],
};

const STUDENT_FOCUS = {
  label: "Student focus",
  tone: "gold",
  items: [
    {
      icon: ClipboardCheck,
      title: "Pre-start assessments",
      desc: "Personality and knowledge checks before your child begins, so we start in the right place.",
    },
    {
      icon: RefreshCw,
      title: "Ongoing feedback and reports",
      desc: "Continuous assessment, feedback and clear progress reports to parents.",
    },
    {
      icon: LifeBuoy,
      title: "Wide support resources",
      desc: "A full library of support resources for every learner and every stage.",
    },
  ],
};

function Panel({ group }) {
  const gold = group.tone === "gold";
  return (
    <div className="rounded-3xl border border-border bg-card p-6 sm:p-8">
      <span
        className={cn(
          "inline-flex items-center rounded-full px-3 py-1 text-[11px] font-bold uppercase tracking-wider",
          gold ? "bg-gold/12 text-gold" : "bg-primary/12 text-primary"
        )}
      >
        {group.label}
      </span>
      <ul className="mt-6 space-y-5">
        {group.items.map(({ icon: Icon, title, desc }) => (
          <li key={title} className="flex gap-4">
            <span
              className={cn(
                "grid size-10 shrink-0 place-items-center rounded-xl ring-1",
                gold
                  ? "bg-gold/10 text-gold ring-gold/15"
                  : "bg-primary/10 text-primary ring-primary/15"
              )}
            >
              <Icon className="size-5" />
            </span>
            <div>
              <div className="font-heading font-bold">{title}</div>
              <div className="mt-1 text-sm leading-relaxed text-muted-foreground">
                {desc}
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function WhyChoose() {
  return (
    <section className="py-12 sm:py-16">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-gold">
            Our teaching model
          </p>
          <h2 className="mt-3 font-heading text-3xl font-bold tracking-tight text-balance sm:text-4xl">
            Why choose Akbar Academy
          </h2>
          <p className="mt-4 text-lg text-muted-foreground text-pretty">
            An all-round model built on two things at once, the{" "}
            <span className="font-semibold text-primary">content</span> we teach
            and the <span className="font-semibold text-gold">student</span> who
            learns it.
          </p>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-2 lg:gap-8">
          <Reveal>
            <Panel group={CONTENT_FOCUS} />
          </Reveal>
          <Reveal delay={120}>
            <Panel group={STUDENT_FOCUS} />
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
