import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight } from "lucide-react";

import { resourceCategories, site } from "@/lib/site";
import { Container } from "@/components/container";
import { PageHero } from "@/components/page-hero";
import { ButtonLink } from "@/components/button-link";
import { FinalCta } from "@/components/home-sections";

export function generateStaticParams() {
  return resourceCategories.map((r) => ({ slug: r.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const r = resourceCategories.find((x) => x.slug === slug);
  if (!r) return {};
  return { title: r.name, description: r.desc };
}

export default async function ResourceCategoryPage({ params }) {
  const { slug } = await params;
  const r = resourceCategories.find((x) => x.slug === slug);
  if (!r) notFound();

  return (
    <>
      <PageHero eyebrow="Resources" title={r.name} lead={r.desc}>
        <ButtonLink href={site.whatsapp} target="_blank" rel="noopener noreferrer">
          Ask about {r.name}
        </ButtonLink>
      </PageHero>

      <section className="py-12 sm:py-16">
        <Container className="max-w-2xl text-center">
          <p className="text-lg text-muted-foreground text-pretty">
            {r.name} are part of the Akbar Academy learning system, mapped to
            your child&rsquo;s subject, board and level. Speak to us and we will
            point you to exactly what fits their course.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <ButtonLink href={site.bookEvaluation}>
              Book your evaluation
            </ButtonLink>
            <Link
              href="/resources"
              className="inline-flex items-center gap-1.5 rounded-full px-5 py-2.5 text-sm font-semibold text-primary"
            >
              All resources <ArrowRight className="size-4" />
            </Link>
          </div>
        </Container>
      </section>

      <FinalCta />
    </>
  );
}
