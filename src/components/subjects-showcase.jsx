import Image from "next/image";

import { cn } from "@/lib/utils";
import { subjects, boards } from "@/lib/site";
import { Container } from "@/components/container";
import { Reveal } from "@/components/reveal";

const boardShort = (slug) => boards.find((b) => b.slug === slug)?.short ?? slug;

function Pill({ children, accent }) {
  return (
    <span
      className={cn(
        "rounded-full px-2.5 py-1 text-[11px] font-semibold",
        accent
          ? "bg-gold/15 text-gold"
          : "bg-primary/10 text-primary dark:bg-primary/15"
      )}
    >
      {children}
    </span>
  );
}

export function SubjectsShowcase() {
  return (
    <section id="subjects" className="py-12 sm:py-16">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-gold">
            What we teach
          </p>
          <h2 className="mt-3 font-heading text-3xl font-bold tracking-tight text-balance sm:text-4xl">
            Five subjects. One high standard.
          </h2>
          <p className="mt-4 text-lg text-muted-foreground text-pretty">
            Every subject is taught by a specialist, mapped to your exam board,
            and backed by marked practice and progress tracking.
          </p>
        </div>

        <div className="mt-12 flex flex-wrap justify-center gap-5">
          {subjects.map((s, i) => {
            const flagship = s.slug === "physics";
            return (
              <Reveal
                key={s.slug}
                delay={(i % 3) * 70}
                className="w-full sm:w-[calc(50%-0.625rem)] lg:w-[calc(33.333%-0.834rem)]"
              >
                <div
                  className={cn(
                    "relative flex h-full flex-col overflow-hidden rounded-2xl border bg-card p-6 transition-colors",
                    flagship
                      ? "border-primary ring-1 ring-primary"
                      : "border-border hover:border-primary/40"
                  )}
                >
                  {flagship && (
                    <span className="absolute -right-9 top-4 w-32 rotate-45 bg-gold py-1 text-center text-[10px] font-bold uppercase tracking-wider text-gold-foreground">
                      Flagship
                    </span>
                  )}

                  {/* mascot tile + name */}
                  <div className="flex items-center gap-3.5">
                    <span className="grid size-12 shrink-0 place-items-center rounded-xl bg-primary/[0.07] ring-1 ring-primary/10 dark:bg-white/5">
                      <Image
                        src={s.char}
                        alt=""
                        width={40}
                        height={40}
                        className="max-h-9 w-auto object-contain"
                        loading="eager"
                        unoptimized
                      />
                    </span>
                    <h3 className="font-heading text-xl font-bold tracking-tight">
                      {s.name}
                    </h3>
                  </div>

                  <p className="mt-4 flex-1 text-sm leading-relaxed text-muted-foreground text-pretty">
                    {s.blurb}
                  </p>

                  <div className="mt-5 flex flex-wrap gap-1.5">
                    {s.levels.map((l) => (
                      <Pill key={l}>{l}</Pill>
                    ))}
                    {s.boards.map((b) => (
                      <Pill key={b} accent={b === "aqa"}>
                        {boardShort(b)}
                      </Pill>
                    ))}
                  </div>
                </div>
              </Reveal>
            );
          })}

        </div>
      </Container>
    </section>
  );
}
