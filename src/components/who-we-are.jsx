import { ArrowRight } from "lucide-react";

import { Container } from "@/components/container";
import { Reveal } from "@/components/reveal";
import { ButtonLink } from "@/components/button-link";

const STATS = [
  { value: "5", label: "Core subjects taught by specialists" },
  { value: "3", label: "Ways to learn: onsite, hybrid, online" },
  { value: "96%", label: "Of our students reach A* to B" },
  { value: "1:1", label: "Attention inside structured group classes" },
];

export function WhoWeAre() {
  return (
    <section className="py-12 sm:py-16">
      <Container>
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center lg:gap-16">
          {/* LEFT — the positioning statement */}
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-gold">
              Who we are
            </p>
            <h2 className="mt-3 font-heading text-3xl font-extrabold tracking-tight text-balance sm:text-4xl">
              Not extra tuition. A complete academic system.
            </h2>

            <p className="mt-5 text-lg text-muted-foreground text-pretty">
              A premium British curriculum academy built on one idea: students
              improve fastest when teaching, practice, marking and feedback work
              as one system. Led by published Physics author Mr Kaleem Akbar.
            </p>

            <div className="mt-7">
              <ButtonLink href="/about">
                About Akbar Academy
                <ArrowRight className="size-4" />
              </ButtonLink>
            </div>
          </Reveal>

          {/* RIGHT — the numbers */}
          <Reveal delay={120}>
            <div className="grid gap-4 sm:grid-cols-2">
              {STATS.map((s) => (
                <div
                  key={s.label}
                  className="overflow-hidden rounded-2xl border border-border bg-card"
                >
                  <div
                    aria-hidden
                    className="h-1 bg-gradient-to-r from-primary to-gold"
                  />
                  <div className="p-6">
                    <div className="font-heading text-3xl font-extrabold leading-none text-primary">
                      {s.value}
                    </div>
                    <p className="mt-2.5 text-sm leading-relaxed text-muted-foreground text-pretty">
                      {s.label}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
