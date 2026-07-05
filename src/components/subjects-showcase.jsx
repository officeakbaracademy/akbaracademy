"use client";

import * as React from "react";
import Image from "next/image";
import { ArrowRight, Check } from "lucide-react";

import { cn } from "@/lib/utils";
import { subjects, boards, levels } from "@/lib/site";
import { Container } from "@/components/container";
import { ButtonLink } from "@/components/button-link";

const boardName = (slug) => boards.find((b) => b.slug === slug)?.name ?? slug;

export function SubjectsShowcase() {
  const [active, setActive] = React.useState(0);
  const s = subjects[active];

  return (
    <section id="subjects" className="py-12 sm:py-16">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-primary">
            One platform, every subject
          </p>
          <h2 className="mt-3 font-heading text-3xl font-bold tracking-tight text-balance sm:text-4xl">
            Five subjects, one proven system
          </h2>
          <p className="mt-4 text-lg text-muted-foreground text-pretty">
            The same structured method behind every subject, taught by a
            specialist who knows exactly what the boards reward.
          </p>
        </div>

        {/* Tabs */}
        <div className="mt-10 flex flex-wrap justify-center gap-2">
          {subjects.map((sub, i) => (
            <button
              key={sub.slug}
              type="button"
              onClick={() => setActive(i)}
              aria-pressed={i === active}
              className={cn(
                "rounded-full px-5 py-2.5 text-sm font-semibold transition-colors",
                i === active
                  ? "bg-primary text-primary-foreground shadow-sm shadow-primary/30"
                  : "border border-border text-muted-foreground hover:border-foreground/20 hover:text-foreground"
              )}
            >
              {sub.name}
            </button>
          ))}
        </div>

        {/* Feature panel */}
        <div className="mt-10 overflow-hidden rounded-3xl border border-border bg-card">
          <div className="grid lg:grid-cols-2">
            {/* Content */}
            <div
              key={active}
              className="animate-in fade-in slide-in-from-bottom-1 order-2 p-8 duration-300 sm:p-10 lg:order-1"
            >
              <h3 className="font-heading text-2xl font-bold tracking-tight sm:text-3xl">
                {s.name}
              </h3>
              <p className="mt-2 text-base font-medium text-primary">
                {s.tagline}
              </p>

              <div className="mt-5 flex flex-wrap gap-2">
                {levels.map((lv) => (
                  <span
                    key={lv}
                    className="rounded-lg bg-muted px-2.5 py-1 text-xs font-semibold text-foreground/80"
                  >
                    {lv}
                  </span>
                ))}
              </div>

              <p className="mt-5 text-muted-foreground">{s.blurb}</p>

              <ul className="mt-6 grid gap-2.5">
                {s.boards.map((b) => (
                  <li
                    key={b}
                    className="flex items-start gap-2 text-sm leading-relaxed"
                  >
                    <Check className="mt-0.5 size-4 shrink-0 text-primary" />
                    <span className="text-muted-foreground">
                      <span className="font-semibold text-foreground">
                        {boardName(b)}
                      </span>{" "}
                      past papers, resources &amp; full syllabus
                    </span>
                  </li>
                ))}
              </ul>

              <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3">
                <ButtonLink size="lg" className="h-11 px-6" href={`/courses/${s.slug}`}>
                  Explore {s.name}
                </ButtonLink>
                <ButtonLink
                  href="/past-papers"
                  variant="ghost"
                  className="text-primary"
                >
                  Past papers
                  <ArrowRight className="size-4" />
                </ButtonLink>
              </div>
            </div>

            {/* Visual */}
            <div className="relative order-1 flex min-h-[240px] items-center justify-center overflow-hidden border-b border-border bg-muted/40 p-8 lg:order-2 lg:min-h-[420px] lg:border-b-0 lg:border-l">
              <div
                aria-hidden
                className="pointer-events-none absolute size-64 rounded-full bg-primary/15 blur-3xl lg:size-80"
              />
              <div
                aria-hidden
                className="pointer-events-none absolute right-8 top-8 size-40 rounded-full bg-gold/15 blur-2xl"
              />
              <Image
                key={s.slug}
                src={s.char}
                alt={`${s.name} mascot`}
                width={360}
                height={360}
                className="animate-in fade-in zoom-in-95 relative h-auto max-h-[200px] w-auto object-contain drop-shadow-xl duration-300 lg:max-h-[340px]"
              />
            </div>
          </div>
        </div>

        <div className="mt-8 text-center">
          <ButtonLink variant="outline" href="/courses">
            Browse all courses
            <ArrowRight className="size-4" />
          </ButtonLink>
        </div>
      </Container>
    </section>
  );
}
