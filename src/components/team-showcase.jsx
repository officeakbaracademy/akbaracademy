"use client";

import * as React from "react";
import Image from "next/image";

import { cn } from "@/lib/utils";
import { team } from "@/lib/site";
import { Container } from "@/components/container";

export function TeamShowcase() {
  const [active, setActive] = React.useState(0);
  const t = team[active];

  return (
    <section id="team" className="py-12 sm:py-16">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-primary">
            Meet the team
          </p>
          <h2 className="mt-3 font-heading text-3xl font-bold tracking-tight text-balance sm:text-4xl">
            Taught by people who write the books
          </h2>
          <p className="mt-4 text-lg text-muted-foreground text-pretty">
            A hand-picked team of British-qualified teachers, examiners and
            authors, every one DBS-checked and carefully vetted.
          </p>
        </div>

        {/* Avatar selector */}
        <div className="mt-10 flex flex-wrap items-start justify-center gap-x-5 gap-y-4 sm:gap-x-8">
          {team.map((m, i) => (
            <button
              key={m.name}
              type="button"
              onClick={() => setActive(i)}
              aria-pressed={i === active}
              className="group flex w-16 flex-col items-center gap-2 sm:w-20"
            >
              <span
                className={cn(
                  "relative size-14 overflow-hidden rounded-full ring-2 transition-all sm:size-16",
                  i === active
                    ? "ring-primary ring-offset-2 ring-offset-background"
                    : "opacity-60 ring-transparent group-hover:opacity-100"
                )}
              >
                <Image
                  src={m.photo}
                  alt={m.name}
                  fill
                  sizes="64px"
                  className="object-cover"
                />
              </span>
              <span
                className={cn(
                  "text-center text-xs font-semibold leading-tight transition-colors",
                  i === active
                    ? "text-foreground"
                    : "text-muted-foreground group-hover:text-foreground"
                )}
              >
                {m.name.split(" ")[0]}
              </span>
            </button>
          ))}
        </div>

        {/* Detail panel */}
        <div className="mx-auto mt-8 max-w-2xl rounded-3xl border border-border bg-card p-6 sm:p-8">
          <div
            key={active}
            className="animate-in fade-in slide-in-from-bottom-1 flex flex-col items-center gap-5 text-center duration-300 sm:flex-row sm:items-start sm:gap-6 sm:text-left"
          >
            <Image
              src={t.photo}
              alt={t.name}
              width={96}
              height={96}
              className="size-20 shrink-0 rounded-2xl object-cover ring-2 ring-primary/30 sm:size-24"
            />
            <div>
              <h3 className="font-heading text-xl font-bold">{t.name}</h3>
              <div className="mt-1 inline-flex rounded-full bg-gold/15 px-2.5 py-0.5 text-xs font-bold text-gold">
                {t.subject}
              </div>
              <p className="mt-3 text-muted-foreground text-pretty">{t.bio}</p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
