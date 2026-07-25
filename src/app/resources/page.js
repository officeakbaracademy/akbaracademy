import Link from "next/link";
import {
  BookOpen,
  CalendarDays,
  FolderOpen,
  MonitorPlay,
  Video,
  CircleHelp,
  FileText,
  FileCheck,
  Lightbulb,
  Presentation,
  ArrowRight,
} from "lucide-react";

import { resourceCategories } from "@/lib/site";
import { Container } from "@/components/container";
import { PageHero } from "@/components/page-hero";
import { Resources as ResourcesBooks } from "@/components/resources";
import { FinalCta } from "@/components/home-sections";

const ICONS = {
  BookOpen,
  CalendarDays,
  FolderOpen,
  MonitorPlay,
  Video,
  CircleHelp,
  FileText,
  FileCheck,
  Lightbulb,
  Presentation,
};

export const metadata = {
  title: "Resources",
  description:
    "eBooks, printed books, past-paper mastery, recorded lessons, downloads and revision products for every subject and board.",
};

export default function ResourcesPage() {
  return (
    <>
      <PageHero
        eyebrow="Resources & books"
        title="Everything your child needs, in one place."
        lead="From our founder's endorsed textbooks to topic-by-topic exam practice, recorded lessons and revision tools."
      />

      <section className="py-12 sm:py-16">
        <Container>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {resourceCategories.map((r) => {
              const Icon = ICONS[r.icon] ?? BookOpen;
              return (
                <Link
                  key={r.slug}
                  href={`/resources/${r.slug}`}
                  className="group flex flex-col rounded-2xl border border-border bg-card p-6 transition-colors hover:border-primary/40"
                >
                  <span className="grid size-11 place-items-center rounded-xl bg-primary/10 text-primary ring-1 ring-primary/15">
                    <Icon className="size-5" />
                  </span>
                  <h2 className="mt-4 font-heading text-lg font-bold">
                    {r.name}
                  </h2>
                  <p className="mt-1.5 flex-1 text-sm leading-relaxed text-muted-foreground">
                    {r.desc}
                  </p>
                  <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-primary opacity-0 transition-opacity group-hover:opacity-100">
                    Explore <ArrowRight className="size-4" />
                  </span>
                </Link>
              );
            })}
          </div>
        </Container>
      </section>

      <ResourcesBooks />
      <FinalCta />
    </>
  );
}
