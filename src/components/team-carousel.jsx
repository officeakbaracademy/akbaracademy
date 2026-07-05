"use client";

import * as React from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

import { cn } from "@/lib/utils";
import { team } from "@/lib/site";
import { Container } from "@/components/container";
import { Button } from "@/components/ui/button";

export function TeamCarousel() {
  const [perView, setPerView] = React.useState(3);
  const [page, setPage] = React.useState(0);

  React.useEffect(() => {
    const calc = () => {
      const w = window.innerWidth;
      setPerView(w >= 1024 ? 3 : w >= 640 ? 2 : 1);
    };
    calc();
    window.addEventListener("resize", calc);
    return () => window.removeEventListener("resize", calc);
  }, []);

  const pages = Math.max(1, Math.ceil(team.length / perView));

  React.useEffect(() => {
    if (page > pages - 1) setPage(pages - 1);
  }, [pages, page]);

  const go = (d) => setPage((p) => Math.min(Math.max(p + d, 0), pages - 1));

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

          <div className="hidden shrink-0 gap-2 sm:flex">
            <Button
              variant="outline"
              size="icon"
              aria-label="Previous"
              disabled={page === 0}
              onClick={() => go(-1)}
            >
              <ChevronLeft className="size-5" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              aria-label="Next"
              disabled={page >= pages - 1}
              onClick={() => go(1)}
            >
              <ChevronRight className="size-5" />
            </Button>
          </div>
        </div>

        {/* Paginated track */}
        <div className="mt-10 overflow-hidden">
          <div
            className="flex transition-transform duration-500 ease-out"
            style={{ transform: `translateX(-${page * 100}%)` }}
          >
            {team.map((t) => (
              <div
                key={t.name}
                className="w-full shrink-0 px-2 sm:w-1/2 lg:w-1/3"
              >
                <article className="flex h-full flex-col rounded-2xl border border-border bg-card p-6">
                  <div className="flex items-center gap-4">
                    <Image
                      src={t.photo}
                      alt={t.name}
                      width={72}
                      height={72}
                      className="size-16 shrink-0 rounded-full object-cover ring-2 ring-primary/25"
                    />
                    <div className="min-w-0">
                      <h3 className="font-heading text-base font-bold leading-tight">
                        {t.name}
                      </h3>
                      <p className="text-xs font-semibold text-gold">
                        {t.subject}
                      </p>
                    </div>
                  </div>
                  <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                    {t.bio}
                  </p>
                </article>
              </div>
            ))}
          </div>
        </div>

        {/* Dots + mobile arrows */}
        <div className="mt-6 flex items-center justify-center gap-4">
          <Button
            variant="outline"
            size="icon"
            aria-label="Previous"
            disabled={page === 0}
            onClick={() => go(-1)}
            className="sm:hidden"
          >
            <ChevronLeft className="size-5" />
          </Button>

          <div className="flex gap-2">
            {Array.from({ length: pages }).map((_, i) => (
              <button
                key={i}
                type="button"
                aria-label={`Go to page ${i + 1}`}
                onClick={() => setPage(i)}
                className={cn(
                  "h-2 rounded-full transition-all",
                  i === page ? "w-6 bg-primary" : "w-2 bg-border hover:bg-foreground/30"
                )}
              />
            ))}
          </div>

          <Button
            variant="outline"
            size="icon"
            aria-label="Next"
            disabled={page >= pages - 1}
            onClick={() => go(1)}
            className="sm:hidden"
          >
            <ChevronRight className="size-5" />
          </Button>
        </div>
      </Container>
    </section>
  );
}
