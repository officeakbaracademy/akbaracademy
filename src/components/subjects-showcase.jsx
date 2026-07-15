import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { cn } from "@/lib/utils";
import { subjects, boards } from "@/lib/site";
import { Container } from "@/components/container";
import { Reveal } from "@/components/reveal";

const boardShort = (slug) => boards.find((b) => b.slug === slug)?.short ?? slug;

export function SubjectsShowcase() {
  return (
    <section id="subjects" className="py-12 sm:py-16">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-gold">
            What we teach
          </p>
          <h2 className="mt-3 font-heading text-3xl font-bold tracking-tight text-balance sm:text-4xl">
            Five subjects, one proven system
          </h2>
          <p className="mt-4 text-lg text-muted-foreground text-pretty">
            The same structured method behind every subject, each taught by a
            specialist who knows precisely what the boards reward.
          </p>
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {subjects.map((s, i) => {
            const flagship = s.slug === "physics";
            return (
              <Reveal key={s.slug} delay={i * 60} className="h-full">
                <Link
                  href={`/courses/${s.slug}`}
                  className="group flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card transition-colors hover:border-primary/40"
                >
                  {/* Mascot on a soft branded panel */}
                  <div className="relative flex h-40 items-center justify-center border-b border-border bg-gradient-to-br from-primary/[0.07] via-transparent to-gold/[0.06]">
                    <Image
                      src={s.char}
                      alt={`${s.name} character`}
                      width={160}
                      height={160}
                      className="max-h-32 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
                      loading="eager"
                      unoptimized
                    />
                    {flagship && (
                      <span className="absolute left-3 top-3 rounded-full bg-gold px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-gold-foreground">
                        Author-led
                      </span>
                    )}
                  </div>

                  {/* Details */}
                  <div className="flex flex-1 flex-col p-6">
                    <div className="flex items-center justify-between gap-3">
                      <h3 className="font-heading text-xl font-bold tracking-tight">
                        {s.name}
                      </h3>
                      <span className="shrink-0 text-xs font-semibold text-muted-foreground">
                        {s.levels.join(", ")}
                      </span>
                    </div>

                    <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground text-pretty">
                      {s.blurb}
                    </p>

                    <div className="mt-4 flex flex-wrap gap-1.5">
                      {s.boards.map((b) => (
                        <span
                          key={b}
                          className={cn(
                            "rounded border px-1.5 py-0.5 text-[11px] font-medium",
                            b === "aqa"
                              ? "border-gold/30 text-gold"
                              : "border-border text-muted-foreground"
                          )}
                        >
                          {boardShort(b)}
                        </span>
                      ))}
                    </div>

                    <div className="mt-4 flex items-center justify-between border-t border-border pt-3 text-xs text-muted-foreground">
                      <span>
                        Taught by{" "}
                        <span className="font-semibold text-foreground/90">
                          {s.lead}
                        </span>
                      </span>
                      <ArrowRight className="size-4 text-primary opacity-0 transition-all group-hover:translate-x-0.5 group-hover:opacity-100" />
                    </div>
                  </div>
                </Link>
              </Reveal>
            );
          })}

          {/* Browse-all card completes the 3 x 2 grid */}
          <Reveal delay={subjects.length * 60} className="h-full">
            <Link
              href="/courses"
              className="flex h-full min-h-[240px] flex-col items-center justify-center gap-3 rounded-2xl border border-dashed border-border bg-muted/20 p-6 text-center transition-colors hover:border-primary/40 hover:bg-muted/40"
            >
              <span className="grid size-12 place-items-center rounded-full bg-primary/10 text-primary">
                <ArrowRight className="size-5" />
              </span>
              <span className="font-heading text-lg font-bold">
                Browse all courses
              </span>
              <span className="text-sm text-muted-foreground">
                By subject, board and level
              </span>
            </Link>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
