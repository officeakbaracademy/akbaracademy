import { Star } from "lucide-react";

import { proof, proofReviews } from "@/lib/site";
import { Container } from "@/components/container";
import { Reveal } from "@/components/reveal";

const TRUSTPILOT_GREEN = "#00b67a";

function Stars({ className }) {
  return (
    <div className={className}>
      {Array.from({ length: 5 }).map((_, i) => (
        <Star key={i} className="size-4 fill-current" />
      ))}
    </div>
  );
}

function TrustpilotBadge() {
  return (
    <div className="inline-flex items-center gap-3 rounded-lg bg-white px-4 py-2.5">
      <span className="flex gap-0.5">
        {Array.from({ length: 5 }).map((_, i) => (
          <span
            key={i}
            className="grid size-5 place-items-center"
            style={{ backgroundColor: TRUSTPILOT_GREEN }}
          >
            <Star className="size-3.5 fill-white text-white" />
          </span>
        ))}
      </span>
      <span className="text-sm text-[#191919]">
        <span className="font-bold">{proof.rating}</span> out of 5
      </span>
      <span className="flex items-center gap-1 text-sm font-bold text-[#191919]">
        <Star
          className="size-4"
          style={{ fill: TRUSTPILOT_GREEN, color: TRUSTPILOT_GREEN }}
        />
        Trustpilot
      </span>
    </div>
  );
}

export function Proof() {
  return (
    <section className="bg-brand-blue relative overflow-hidden py-14 sm:py-20">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[1fr_1.05fr] lg:items-center lg:gap-14">
          {/* LEFT — the headline number */}
          <Reveal>
            <p>
              <span className="inline-flex items-center rounded-full bg-gold px-3.5 py-1.5 text-xs font-bold uppercase tracking-[0.16em] text-gold-foreground">
                The proof
              </span>
            </p>
            <div className="mt-3 font-heading text-6xl font-extrabold leading-none tracking-tight text-primary-foreground sm:text-7xl">
              {proof.stat}
            </div>
            <h2 className="mt-4 max-w-md font-heading text-2xl font-bold leading-snug text-balance text-primary-foreground sm:text-[1.75rem]">
              {proof.claim}
            </h2>
            <p className="mt-4 max-w-md text-lg leading-relaxed text-primary-foreground/80 text-pretty">
              {proof.detail}
            </p>
            <div className="mt-7">
              <TrustpilotBadge />
            </div>
          </Reveal>

          {/* RIGHT — verified testimonials */}
          <div className="grid gap-4 sm:grid-cols-2">
            {proofReviews.map((r, i) => (
              <Reveal
                key={r.name}
                delay={i * 120}
                className="flex flex-col rounded-2xl bg-primary-foreground/10 p-6 ring-1 ring-primary-foreground/15"
              >
                <Stars className="flex gap-0.5 text-primary-foreground/70" />
                <p className="mt-4 flex-1 text-[15px] leading-relaxed text-primary-foreground/85">
                  {r.quote}
                </p>
                <div className="mt-5">
                  <div className="font-heading text-sm font-bold text-primary-foreground">
                    {r.name}
                  </div>
                  <div className="mt-0.5 text-xs text-primary-foreground/70">{r.role}</div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
