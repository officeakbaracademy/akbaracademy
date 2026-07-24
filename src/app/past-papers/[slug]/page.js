import Link from "next/link";
import { notFound } from "next/navigation";
import { Check, ArrowRight } from "lucide-react";

import { subjects, boards, site } from "@/lib/site";
import { Container } from "@/components/container";
import { PageHero } from "@/components/page-hero";
import { ButtonLink } from "@/components/button-link";
import { FinalCta } from "@/components/home-sections";

const boardName = (slug) => boards.find((b) => b.slug === slug)?.name ?? slug;

const WHAT_YOU_GET = [
  "Past papers organised topic by topic",
  "Official mark schemes with model answers",
  "Common exam pitfalls and how to avoid them",
  "Timed practice that mirrors the real exam",
];

export function generateStaticParams() {
  return subjects.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const s = subjects.find((x) => x.slug === slug);
  if (!s) return {};
  return {
    title: `${s.name} Past Papers`,
    description: `${s.name} past papers, mark schemes and topic-by-topic exam practice across ${s.boards
      .map(boardName)
      .join(", ")}.`,
  };
}

export default async function SubjectPastPapersPage({ params }) {
  const { slug } = await params;
  const s = subjects.find((x) => x.slug === slug);
  if (!s) notFound();

  return (
    <>
      <PageHero
        eyebrow="Past papers"
        title={`${s.name} past papers`}
        lead={`Topic-by-topic exam practice for ${s.name}, with mark schemes and model answers, across ${s.boards
          .map(boardName)
          .join(", ")}.`}
      >
        <ButtonLink href={site.bookEvaluation}>
          Book your evaluation
        </ButtonLink>
      </PageHero>

      <section className="py-12 sm:py-16">
        <Container className="max-w-3xl">
          <div className="rounded-3xl border border-border bg-card p-8 sm:p-10">
            <h2 className="font-heading text-2xl font-bold tracking-tight">
              What you get with {s.name} exam practice
            </h2>
            <ul className="mt-6 space-y-3">
              {WHAT_YOU_GET.map((f) => (
                <li key={f} className="flex items-start gap-2.5">
                  <Check className="mt-0.5 size-4 shrink-0 text-primary" />
                  <span className="leading-relaxed text-foreground/90">{f}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <ButtonLink href={`/courses/${s.slug}`}>
              Explore the {s.name} course
            </ButtonLink>
            <Link
              href="/past-papers"
              className="inline-flex items-center gap-1.5 rounded-full px-5 py-2.5 text-sm font-semibold text-primary"
            >
              All past papers <ArrowRight className="size-4" />
            </Link>
          </div>
        </Container>
      </section>

      <FinalCta />
    </>
  );
}
