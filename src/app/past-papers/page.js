import Link from "next/link";
import { ArrowRight, FileText } from "lucide-react";

import { subjects, boards, site } from "@/lib/site";
import { Container } from "@/components/container";
import { PageHero } from "@/components/page-hero";
import { ButtonLink } from "@/components/button-link";
import { FinalCta } from "@/components/home-sections";

const boardShort = (slug) => boards.find((b) => b.slug === slug)?.short ?? slug;

export const metadata = {
  title: "Past Papers",
  description:
    "Past papers, mark schemes and topic-by-topic exam practice for IGCSE and A Level, across Cambridge, Edexcel and AQA.",
};

export default function PastPapersPage() {
  return (
    <>
      <PageHero
        eyebrow="Past papers"
        title="Exam practice, organised by subject."
        lead="Our Ace My Exams programme takes students through past papers topic by topic, with mark schemes and model answers, so exam technique becomes second nature."
      >
        <ButtonLink href={site.bookEvaluation}>
          Book your evaluation
        </ButtonLink>
      </PageHero>

      <section className="py-12 sm:py-16">
        <Container>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {subjects.map((s) => (
              <Link
                key={s.slug}
                href={`/past-papers/${s.slug}`}
                className="group flex flex-col rounded-2xl border border-border bg-card p-6 transition-colors hover:border-primary/40"
              >
                <span className="grid size-11 place-items-center rounded-xl bg-primary/10 text-primary ring-1 ring-primary/15">
                  <FileText className="size-5" />
                </span>
                <h2 className="mt-4 font-heading text-lg font-bold">
                  {s.name} past papers
                </h2>
                <p className="mt-1.5 text-sm text-muted-foreground">
                  {s.boards.map(boardShort).join(", ")}
                </p>
                <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-primary opacity-0 transition-opacity group-hover:opacity-100">
                  View {s.name} <ArrowRight className="size-4" />
                </span>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      <FinalCta />
    </>
  );
}
