import Image from "next/image";
import Link from "next/link";

import { subjects } from "@/lib/site";
import { Container } from "@/components/container";
import { Reveal } from "@/components/reveal";

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

        <div className="mt-12 flex flex-wrap justify-center gap-4">
          {subjects.map((s, i) => (
            <Reveal
              key={s.slug}
              delay={i * 70}
              className="w-[calc(50%-0.5rem)] sm:w-[calc(33.333%-0.667rem)] lg:w-[calc(20%-0.8rem)]"
            >
              <Link
                href={`/courses/${s.slug}`}
                className="group flex h-full flex-col items-center rounded-2xl border border-border bg-card p-4 text-center transition-colors hover:border-primary/40"
              >
                {/* mascot tile */}
                <span className="relative aspect-square w-full overflow-hidden rounded-xl bg-muted/50">
                  <Image
                    src={s.char}
                    alt={s.name}
                    fill
                    sizes="(max-width:640px) 45vw, (max-width:1024px) 30vw, 180px"
                    className="object-contain p-3 transition-transform duration-300 group-hover:scale-105"
                    loading="eager"
                    unoptimized
                  />
                </span>

                <h3 className="mt-4 font-heading text-lg font-bold tracking-tight">
                  {s.name}
                </h3>

                <p className="mt-1.5 text-[11px] font-semibold uppercase tracking-wide text-muted-foreground">
                  {s.levels.map((l, idx) => (
                    <span key={l}>
                      {idx > 0 && (
                        <span aria-hidden className="mx-1.5 text-border">
                          |
                        </span>
                      )}
                      {l}
                    </span>
                  ))}
                </p>
              </Link>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
