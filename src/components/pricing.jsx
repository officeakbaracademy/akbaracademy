import { Star, Check, MessageCircle } from "lucide-react";

import { cn } from "@/lib/utils";
import {
  evaluation,
  courseTypes,
  includedEssentials,
  includedElite,
  site,
} from "@/lib/site";
import { Container } from "@/components/container";
import { Reveal } from "@/components/reveal";
import { ButtonLink } from "@/components/button-link";
import { FeesTable } from "@/components/fees-table";

export function Pricing() {
  return (
    <section id="pricing" className="py-12 sm:py-16">
      <Container>
        {/* Heading */}
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-gold">
            Programmes &amp; pricing
          </p>
          <h2 className="mt-3 font-heading text-3xl font-bold tracking-tight text-balance sm:text-4xl">
            Clear, simple pricing
          </h2>
          <p className="mt-4 text-lg text-muted-foreground text-pretty">
            Two lessons a week or one, four subjects plus Physics Elite. Pay
            monthly, or save up to 15% with a lesson package.
          </p>
        </div>

        {/* Evaluation panel — same premium panel style used across the site */}
        <Reveal className="mt-10">
          <div className="overflow-hidden rounded-3xl border border-border bg-gradient-to-br from-primary/10 via-card to-card p-8 sm:p-10">
            <div className="grid items-center gap-8 lg:grid-cols-[1fr_auto] lg:gap-12">
              <div className="max-w-xl">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-primary/10 px-3 py-1 text-xs font-bold uppercase tracking-wide text-primary">
                  <Star className="size-3 fill-primary" />
                  {evaluation.badge}
                </span>
                <h3 className="mt-3 font-heading text-2xl font-bold tracking-tight sm:text-3xl">
                  {evaluation.name}
                </h3>
                <p className="mt-3 text-muted-foreground text-pretty">
                  {evaluation.desc}
                </p>
                <ButtonLink
                  size="lg"
                  className="mt-6 h-11 px-6"
                  href="/pricing"
                >
                  Book evaluation
                </ButtonLink>
              </div>

              {/* Price card — prominent glossy gold */}
              <div className="relative shrink-0 overflow-hidden rounded-3xl bg-gradient-to-br from-[#ffd24a] to-[#f5a300] px-10 py-8 text-center text-gold-foreground shadow-xl shadow-gold/30 ring-1 ring-black/10">
                <div
                  aria-hidden
                  className="pointer-events-none absolute inset-x-0 -top-3 h-20 bg-gradient-to-b from-white/40 to-transparent"
                />
                <div className="relative">
                  <div className="flex items-center justify-center gap-2">
                    <span className="font-heading text-lg font-bold leading-none">
                      {evaluation.currency}
                    </span>
                    <span className="font-heading text-6xl font-extrabold leading-none">
                      {evaluation.price}
                    </span>
                  </div>
                  <div className="mx-auto mt-4 h-px w-10 bg-black/25" />
                  <p className="mt-3 text-[13px] font-semibold">
                    one-off, then choose a course
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Reveal>

        {/* Four course types */}
        <div className="mx-auto mt-16 max-w-3xl text-center">
          <h3 className="font-heading text-2xl font-bold tracking-tight sm:text-3xl">
            Four course types
          </h3>
          <p className="mt-3 text-muted-foreground text-pretty">
            The right course depends on your child&rsquo;s level, exam board and
            what they need to cover. All four apply to Physics, Chemistry,
            Biology and Maths. English is by enquiry.
          </p>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {courseTypes.map((c, i) => (
            <Reveal
              key={c.name}
              delay={i * 80}
              className={cn(
                "relative flex flex-col rounded-3xl border bg-card p-6 transition-colors sm:p-7",
                c.featured
                  ? "border-primary/40 ring-1 ring-primary/15"
                  : "border-border hover:border-primary/30"
              )}
            >
              {c.badge && (
                <span className="absolute -top-3 left-6 inline-flex items-center rounded-full bg-gold px-3 py-1 text-[10px] font-extrabold uppercase tracking-wider text-gold-foreground">
                  {c.badge}
                </span>
              )}

              <div className="flex items-start justify-between gap-3">
                <h4 className="font-heading text-xl font-bold">{c.name}</h4>
                <span className="shrink-0 rounded-full border border-border bg-muted/40 px-3 py-1 text-xs font-semibold text-muted-foreground">
                  {c.tag}
                </span>
              </div>

              <div className="mt-4 flex items-center gap-2">
                <span className="grid size-9 shrink-0 place-items-center rounded-lg bg-primary/10 font-heading text-base font-extrabold text-primary">
                  {c.perWeek}&times;
                </span>
                <div className="leading-tight">
                  <div className="text-sm text-muted-foreground">
                    lessons per week
                  </div>
                  <div className="text-sm font-bold">{c.perMonth}</div>
                </div>
              </div>

              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                {c.desc}
              </p>

              <span className="mt-5 inline-flex w-fit items-start gap-1.5 rounded-full bg-primary/10 px-3.5 py-1.5 text-xs font-semibold text-primary">
                <Check className="mt-px size-3.5 shrink-0" />
                {c.who}
              </span>
            </Reveal>
          ))}
        </div>

        {/* Interactive fee calculator */}
        <FeesTable />

        {/* What's included */}
        <div className="mt-16">
          <h3 className="text-center font-heading text-2xl font-bold tracking-tight sm:text-3xl">
            What&rsquo;s included in every course
          </h3>
          <div className="mt-8 grid gap-5 lg:grid-cols-2">
            {/* Essentials */}
            <Reveal className="rounded-3xl border border-border bg-card p-6 sm:p-8">
              <h4 className="font-heading text-lg font-bold text-primary">
                Essentials, all subjects
              </h4>
              <ul className="mt-5 space-y-3">
                {includedEssentials.map((pt) => (
                  <li key={pt} className="flex items-start gap-3 text-sm leading-relaxed">
                    <span className="mt-0.5 grid size-5 shrink-0 place-items-center rounded-full bg-primary text-white">
                      <Check className="size-3" />
                    </span>
                    <span className="text-foreground/90">{pt}</span>
                  </li>
                ))}
              </ul>
            </Reveal>

            {/* Physics Elite */}
            <Reveal
              delay={100}
              className="relative rounded-3xl border border-gold/40 bg-card p-6 ring-1 ring-gold/15 sm:p-8"
            >
              <span className="absolute right-6 top-6 inline-flex items-center rounded-full bg-gold px-3 py-1 text-[10px] font-extrabold uppercase tracking-wider text-gold-foreground">
                Physics only
              </span>
              <h4 className="font-heading text-lg font-bold text-gold">
                Physics Elite, additional
              </h4>
              <ul className="mt-5 space-y-3">
                {includedElite.map((pt) => (
                  <li
                    key={pt.text}
                    className="flex items-start gap-3 text-sm leading-relaxed"
                  >
                    <span className="mt-0.5 grid size-5 shrink-0 place-items-center rounded-full bg-gold text-gold-foreground">
                      <Check className="size-3" />
                    </span>
                    <span
                      className={cn(
                        "text-foreground/90",
                        pt.strong && "font-bold text-foreground"
                      )}
                    >
                      {pt.text}
                    </span>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </div>

        {/* Still unsure — evaluation CTA */}
        <Reveal className="mt-12">
          <div className="rounded-3xl border border-border bg-gradient-to-br from-primary/10 via-card to-card p-8 text-center sm:p-10">
            <h3 className="mx-auto max-w-2xl font-heading text-2xl font-bold tracking-tight text-balance sm:text-3xl">
              Not sure which course type or package suits your child?
            </h3>
            <p className="mx-auto mt-3 max-w-2xl text-muted-foreground text-pretty">
              That&rsquo;s what the {evaluation.currency} {evaluation.price}{" "}
              evaluation is for. We assess level, exam board and what&rsquo;s
              needed, then recommend the right course type and payment structure
              before you commit to anything.
            </p>

            <div className="mx-auto mt-6 max-w-2xl rounded-2xl border border-border bg-card px-5 py-4 text-sm text-muted-foreground">
              <span className="font-semibold text-foreground">
                Enrolling in more than one subject?
              </span>{" "}
              Your packages combine, so the more you commit across subjects, the
              more you save. Ask us on WhatsApp and we&rsquo;ll work out the best
              package for your family.
            </div>

            <div className="mt-7 flex flex-wrap justify-center gap-3">
              <ButtonLink size="lg" className="h-11 px-6" href={site.bookEvaluation}>
                Book your evaluation
              </ButtonLink>
              <ButtonLink
                variant="outline"
                size="lg"
                className="h-11 px-6"
                href={site.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageCircle className="size-5" />
                Ask on WhatsApp
              </ButtonLink>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
