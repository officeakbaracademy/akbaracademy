import Image from "next/image";
import {
  BookOpen,
  FolderOpen,
  FileText,
  FileCheck,
  MonitorPlay,
  Video,
  CircleHelp,
  Lightbulb,
  Presentation,
  Sparkles,
  TrendingUp,
  LayoutDashboard,
  ArrowRight,
  Star,
} from "lucide-react";

import { site } from "@/lib/site";
import { Container } from "@/components/container";
import { Reveal } from "@/components/reveal";
import { ButtonLink } from "@/components/button-link";

const AMAZON = "https://www.amazon.com/s?k=kaleem+akbar";

const COVERS = [
  {
    img: "/assets/cover-explained.jpg",
    alt: "Cambridge IGCSE Physics Explained by Kaleem Akbar",
    className: "-rotate-3 translate-x-6 sm:translate-x-2 z-0",
  },
  {
    img: "/assets/cover-simplified.jpg",
    alt: "Edexcel International GCSE Physics Simplified by Kaleem Akbar",
    className: "z-10",
  },
  {
    img: "/assets/cover-unpacked.jpg",
    alt: "AQA International GCSE Physics Unpacked by Kaleem Akbar",
    className: "rotate-3 -translate-x-6 sm:-translate-x-2 z-0",
  },
];

const PLATFORM = [
  { icon: BookOpen, label: "Endorsed textbooks" },
  { icon: FolderOpen, label: "Course materials" },
  { icon: FileText, label: "Classified past papers" },
  { icon: FileCheck, label: "Classified mark schemes" },
  { icon: MonitorPlay, label: "Topic videos" },
  { icon: Video, label: "Recorded lessons" },
  { icon: CircleHelp, label: "Topic quizzes" },
  { icon: Lightbulb, label: "Study tips" },
  { icon: Presentation, label: "Presentations" },
  { icon: Sparkles, label: "AI study tutor" },
  { icon: TrendingUp, label: "Progress tracking" },
  { icon: LayoutDashboard, label: "Student portal" },
];

export function ResourceGrid() {
  return (
    <section id="resources" className="overflow-x-clip py-14 sm:py-20 dark:bg-secondary">
      <Container>
        {/* Split hero — copy left, the three covers right */}
        <Reveal>
          <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
            <div className="order-2 lg:order-1">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-gold px-3 py-1 text-xs font-bold uppercase tracking-wide text-primary-foreground">
                <Star className="size-3.5 fill-current" />
                Board endorsed
              </span>
              <h2 className="mt-6 font-heading text-4xl font-extrabold leading-[1.05] tracking-tight text-balance sm:text-5xl">
                The Physics books that{" "}
                <span className="text-primary">set the standard.</span>
              </h2>
              <p className="mt-5 max-w-md text-lg leading-relaxed text-muted-foreground text-pretty">
                Written by our founder Kaleem Akbar, an endorsed IGCSE author and
                co-author of the Cambridge University Press Physics Coursebook. In
                print and digital.
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-x-5 gap-y-2 border-t border-border pt-6">
                <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                  Endorsed by
                </span>
                <span className="font-heading text-sm font-bold">Cambridge</span>
                <span className="font-heading text-sm font-bold">Edexcel</span>
                <span className="font-heading text-sm font-bold">Oxford AQA</span>
              </div>

              <div className="mt-7 flex flex-wrap items-center gap-3">
                <ButtonLink
                  size="sm"
                  className="h-10 px-5"
                  href={AMAZON}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Shop the books
                  <ArrowRight className="size-4" />
                </ButtonLink>
                <ButtonLink
                  variant="outline"
                  size="sm"
                  className="h-10 px-5"
                  href="/resources/books"
                >
                  Browse all titles
                </ButtonLink>
              </div>
            </div>

            {/* Covers */}
            <div className="order-1 flex items-end justify-center lg:order-2">
              {COVERS.map((c) => (
                <Image
                  key={c.img}
                  src={c.img}
                  alt={c.alt}
                  width={300}
                  height={428}
                  className={`h-40 w-auto rounded-md object-contain shadow-2xl shadow-black/30 transition-transform duration-300 hover:-translate-y-2 sm:h-56 lg:h-64 ${c.className}`}
                  unoptimized
                />
              ))}
            </div>
          </div>
        </Reveal>

        {/* The complete student platform — feature card (theme-aware) */}
        <Reveal className="mt-16">
          <div className="overflow-hidden rounded-[2rem] border border-border bg-card p-7 sm:p-10">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-gold">
              The complete student platform
            </p>
            <h3 className="mt-3 max-w-xl font-heading text-2xl font-bold tracking-tight text-balance sm:text-3xl">
              Every resource your child needs,{" "}
              <span className="text-primary">in one place.</span>
            </h3>
            <p className="mt-3 max-w-xl text-muted-foreground text-pretty">
              All mapped to the syllabus and updated all year, from endorsed books
              to fully worked mark schemes.
            </p>

            <div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
              {PLATFORM.map(({ icon: Icon, label }) => (
                <div
                  key={label}
                  className="flex items-center gap-3 rounded-xl border border-border bg-secondary/50 p-4 transition-colors hover:border-primary/40"
                >
                  <span className="grid size-9 shrink-0 place-items-center rounded-lg bg-primary/10 text-primary ring-1 ring-primary/15">
                    <Icon className="size-5" strokeWidth={1.75} />
                  </span>
                  <span className="text-sm font-semibold leading-tight">
                    {label}
                  </span>
                </div>
              ))}
            </div>

            <div className="mt-9 flex flex-wrap items-center justify-between gap-4">
              <ButtonLink size="lg" className="h-11 px-6" href="/resources">
                Explore all resources
                <ArrowRight className="size-4" />
              </ButtonLink>
              <p className="text-sm text-muted-foreground">
                Mapped to your child&rsquo;s syllabus. Updated all year.
              </p>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
