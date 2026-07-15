import { Check, GraduationCap, MonitorPlay, Award, BookOpen } from "lucide-react";

import { cn } from "@/lib/utils";
import { packages } from "@/lib/site";
import { Container } from "@/components/container";
import { Reveal } from "@/components/reveal";
import { ButtonLink } from "@/components/button-link";

const ICONS = { GraduationCap, MonitorPlay, Award, BookOpen };

export function Packages() {
  return (
    <section id="packages" className="py-12 sm:py-16">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-gold">
            Tailored tuition
          </p>
          <h2 className="mt-3 font-heading text-3xl font-bold tracking-tight text-balance sm:text-4xl">
            Packages to suit you
          </h2>
          <p className="mt-4 text-lg text-muted-foreground text-pretty">
            Pick the way of learning that fits your child, from fully guided
            live classes to study at your own pace.
          </p>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {packages.map((pkg, i) => {
            const Icon = ICONS[pkg.icon] ?? GraduationCap;
            return (
              <Reveal
                key={pkg.name}
                delay={i * 90}
                className={cn(
                  "group relative flex h-full flex-col overflow-hidden rounded-3xl border bg-card p-6 text-center transition-colors sm:p-7",
                  pkg.featured
                    ? "border-gold/45 ring-1 ring-gold/25 shadow-lg shadow-gold/10"
                    : "border-border hover:border-primary/30"
                )}
              >
                {/* Best seller corner ribbon */}
                {pkg.featured && (
                  <div className="pointer-events-none absolute -left-px -top-px size-24 overflow-hidden rounded-tl-3xl">
                    <div className="absolute -left-9 top-5 w-36 -rotate-45 bg-gold py-1 text-center text-[10px] font-bold uppercase tracking-wider text-gold-foreground shadow-sm">
                      Best seller
                    </div>
                  </div>
                )}

                <span className="mx-auto grid size-16 place-items-center rounded-2xl bg-gold/12 text-gold ring-1 ring-gold/15">
                  <Icon className="size-8" />
                </span>
                <h3 className="mt-4 font-heading text-lg font-bold text-primary text-balance">
                  {pkg.name}
                </h3>

                <ul className="mt-5 grid gap-3 text-left">
                  {pkg.points.map((pt) => (
                    <li
                      key={pt}
                      className="flex items-start gap-2.5 text-sm leading-relaxed text-muted-foreground"
                    >
                      <Check className="mt-0.5 size-4 shrink-0 text-primary" />
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>
              </Reveal>
            );
          })}
        </div>

        <div className="mt-10 flex flex-wrap justify-center gap-3">
          <ButtonLink size="lg" className="h-11 px-6" href="/pricing">
            See full pricing
          </ButtonLink>
          <ButtonLink variant="outline" size="lg" className="h-11 px-6" href="/pricing">
            Compare packages
          </ButtonLink>
        </div>
      </Container>
    </section>
  );
}
