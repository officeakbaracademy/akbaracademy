import { Check } from "lucide-react";

import { cn } from "@/lib/utils";
import { plans } from "@/lib/site";
import { Container } from "@/components/container";
import { Reveal } from "@/components/reveal";
import { ButtonLink } from "@/components/button-link";

export function PricingPlans() {
  return (
    <section id="pricing" className="py-12 sm:py-16">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-gold">
            Simple pricing
          </p>
          <h2 className="mt-3 font-heading text-3xl font-bold tracking-tight text-balance sm:text-4xl">
            Premium teaching, clear monthly plans.
          </h2>
          <p className="mt-4 text-lg text-muted-foreground text-pretty">
            Every plan includes 8 lessons a month, 2 hours each. That is 16
            hours of live specialist teaching, plus marking and tracking.
          </p>
        </div>

        <div className="mx-auto mt-12 grid max-w-3xl gap-5 md:grid-cols-2">
          {plans.map((p, i) => (
            <Reveal key={p.name} delay={i * 100} className="h-full">
              <div
                className={cn(
                  "relative flex h-full flex-col rounded-2xl border bg-card p-7 sm:p-8",
                  p.featured
                    ? "border-primary ring-1 ring-primary"
                    : "border-border"
                )}
              >
                {p.badge && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-gold px-4 py-1 text-xs font-bold text-gold-foreground">
                    {p.badge}
                  </span>
                )}

                <p className="text-xs font-bold uppercase tracking-[0.14em] text-primary">
                  {p.name}
                </p>

                <div className="mt-4 flex items-baseline gap-1.5">
                  <span className="font-heading text-4xl font-extrabold tracking-tight sm:text-[2.75rem]">
                    KD {p.price}
                  </span>
                  <span className="text-base font-medium text-muted-foreground">
                    / month
                  </span>
                </div>
                <p className="mt-2 text-sm text-muted-foreground">{p.note}</p>

                <ul className="mt-6 flex-1 space-y-3">
                  {p.features.map((f) => (
                    <li key={f} className="flex items-start gap-2.5">
                      <Check className="mt-0.5 size-4 shrink-0 text-primary" />
                      <span className="text-sm leading-relaxed text-foreground/90">
                        {f}
                      </span>
                    </li>
                  ))}
                </ul>

                <ButtonLink
                  href="/pricing"
                  variant={p.featured ? "default" : "outline"}
                  size="lg"
                  className="mt-8 h-11 w-full"
                >
                  Get started
                </ButtonLink>
              </div>
            </Reveal>
          ))}
        </div>

      </Container>
    </section>
  );
}
