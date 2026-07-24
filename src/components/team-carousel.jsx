import Image from "next/image";
import { ArrowRight } from "lucide-react";

import { team } from "@/lib/site";
import { Container } from "@/components/container";
import { Reveal } from "@/components/reveal";
import { ButtonLink } from "@/components/button-link";

// Homepage teaser only. The full teacher profiles live on the About page.
export function TeamCarousel() {
  return (
    <section id="team" className="py-12 sm:py-16">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-gold">
            Our teachers
          </p>
          <h2 className="mt-3 font-heading text-3xl font-bold tracking-tight text-balance sm:text-4xl">
            All British qualified. All experts. All hand-picked.
          </h2>
          <p className="mt-4 text-lg text-muted-foreground text-pretty">
            A hand-picked team of British qualified teachers, examiners and
            published authors, one specialist for every subject.
          </p>
        </div>

        {/* overlapping avatar row */}
        <Reveal className="mt-9 flex flex-col items-center gap-6">
          <div className="flex -space-x-3">
            {team.map((t) => (
              <Image
                key={t.name}
                src={t.photo}
                alt={t.name}
                width={64}
                height={64}
                className="size-14 rounded-full object-cover ring-2 ring-background sm:size-16"
                loading="eager"
              />
            ))}
          </div>

          <ButtonLink href="/about">
            Meet the team
            <ArrowRight className="size-4" />
          </ButtonLink>
        </Reveal>
      </Container>
    </section>
  );
}
