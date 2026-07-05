"use client";

import * as React from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

import { team } from "@/lib/site";
import { Container } from "@/components/container";
import { Button } from "@/components/ui/button";

export function TeamCarousel() {
  const scroller = React.useRef(null);

  const scroll = (dir) => {
    const el = scroller.current;
    if (!el) return;
    const card = el.querySelector("[data-card]");
    const amount = card ? card.offsetWidth + 16 : 320;
    el.scrollBy({ left: dir * amount, behavior: "smooth" });
  };

  return (
    <section id="team" className="py-12 sm:py-16">
      <Container>
        <div className="flex items-end justify-between gap-6">
          <div className="max-w-2xl">
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

          {/* Arrows (desktop) */}
          <div className="hidden shrink-0 gap-2 sm:flex">
            <Button
              variant="outline"
              size="icon"
              aria-label="Previous"
              onClick={() => scroll(-1)}
            >
              <ChevronLeft className="size-5" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              aria-label="Next"
              onClick={() => scroll(1)}
            >
              <ChevronRight className="size-5" />
            </Button>
          </div>
        </div>

        <div
          ref={scroller}
          className="mt-10 flex snap-x snap-mandatory gap-4 overflow-x-auto pb-2 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {team.map((t) => (
            <article
              data-card
              key={t.name}
              className="flex w-[78%] shrink-0 snap-start flex-col rounded-2xl border border-border bg-card p-6 sm:w-[320px]"
            >
              <div className="flex items-center gap-4">
                <Image
                  src={t.photo}
                  alt={t.name}
                  width={64}
                  height={64}
                  className="size-16 shrink-0 rounded-full object-cover ring-2 ring-primary/25"
                />
                <div className="min-w-0">
                  <h3 className="font-heading text-base font-bold leading-tight">
                    {t.name}
                  </h3>
                  <p className="text-xs font-semibold text-gold">{t.subject}</p>
                </div>
              </div>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                {t.bio}
              </p>
            </article>
          ))}
        </div>

        {/* Arrows (mobile, centred under the row) */}
        <div className="mt-5 flex justify-center gap-2 sm:hidden">
          <Button
            variant="outline"
            size="icon"
            aria-label="Previous"
            onClick={() => scroll(-1)}
          >
            <ChevronLeft className="size-5" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            aria-label="Next"
            onClick={() => scroll(1)}
          >
            <ChevronRight className="size-5" />
          </Button>
        </div>
      </Container>
    </section>
  );
}
