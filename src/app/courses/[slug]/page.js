import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Check, ArrowRight } from "lucide-react";

import {
  subjects,
  boards,
  levels as allLevels,
  includedEssentials,
  site,
} from "@/lib/site";
import { Container } from "@/components/container";
import { PageHero } from "@/components/page-hero";
import { ButtonLink } from "@/components/button-link";
import { FinalCta } from "@/components/home-sections";

const boardName = (slug) => boards.find((b) => b.slug === slug)?.name ?? slug;

export function generateStaticParams() {
  return subjects.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const s = subjects.find((x) => x.slug === slug);
  if (!s) return {};
  return {
    title: `${s.name} Tuition`,
    description: s.blurb,
  };
}

export default async function SubjectPage({ params }) {
  const { slug } = await params;
  const s = subjects.find((x) => x.slug === slug);
  if (!s) notFound();

  return (
    <>
      <PageHero eyebrow="Course" title={`${s.name}`} lead={s.tagline} />

      <section className="py-12 sm:py-16">
        <Container>
          <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
            <div>
              <p className="text-lg text-muted-foreground text-pretty">
                {s.blurb}
              </p>

              <dl className="mt-8 space-y-4">
                <div className="flex items-baseline gap-4">
                  <dt className="w-20 shrink-0 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                    Levels
                  </dt>
                  <dd className="font-semibold">
                    {(s.levels ?? allLevels).join(", ")}
                  </dd>
                </div>
                <div className="flex items-baseline gap-4">
                  <dt className="w-20 shrink-0 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                    Boards
                  </dt>
                  <dd className="font-semibold">
                    {s.boards.map(boardName).join(", ")}
                  </dd>
                </div>
                {s.lead && (
                  <div className="flex items-baseline gap-4">
                    <dt className="w-20 shrink-0 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                      Taught by
                    </dt>
                    <dd className="font-semibold">{s.lead}</dd>
                  </div>
                )}
              </dl>

              {s.boardNote && (
                <p className="mt-4 text-sm text-muted-foreground">
                  {s.boardNote}
                </p>
              )}

              <div className="mt-8 flex flex-wrap gap-3">
                <ButtonLink href={site.bookEvaluation}>
                  Book your evaluation
                </ButtonLink>
                <ButtonLink variant="outline" href="/pricing">
                  See pricing
                  <ArrowRight className="size-4" />
                </ButtonLink>
              </div>
            </div>

            <div className="relative flex items-center justify-center rounded-3xl border border-border bg-gradient-to-br from-primary/[0.06] via-transparent to-gold/[0.06] p-10">
              <Image
                src={s.char}
                alt={s.name}
                width={320}
                height={320}
                className="h-auto max-h-64 w-auto object-contain"
                loading="eager"
                unoptimized
              />
            </div>
          </div>

          {/* What every course includes */}
          <div className="mt-16 rounded-3xl border border-border bg-card p-8 sm:p-10">
            <h2 className="font-heading text-2xl font-bold tracking-tight">
              What every {s.name} course includes
            </h2>
            <ul className="mt-6 grid gap-3 sm:grid-cols-2">
              {includedEssentials.map((f) => (
                <li key={f} className="flex items-start gap-2.5">
                  <Check className="mt-0.5 size-4 shrink-0 text-primary" />
                  <span className="text-sm leading-relaxed text-foreground/90">
                    {f}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Other subjects */}
          <div className="mt-14 text-center">
            <p className="text-sm font-semibold uppercase tracking-wide text-muted-foreground">
              Other subjects
            </p>
            <div className="mt-4 flex flex-wrap justify-center gap-2.5">
              {subjects
                .filter((x) => x.slug !== s.slug)
                .map((x) => (
                  <Link
                    key={x.slug}
                    href={`/courses/${x.slug}`}
                    className="rounded-full border border-border px-4 py-2 text-sm font-semibold transition-colors hover:border-primary/40 hover:text-primary"
                  >
                    {x.name}
                  </Link>
                ))}
            </div>
          </div>
        </Container>
      </section>

      <FinalCta />
    </>
  );
}
