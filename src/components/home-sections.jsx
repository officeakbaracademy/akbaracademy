import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  Check,
  X,
  Star,
  MessageCircle,
  GraduationCap,
  Target,
  ClipboardList,
  LineChart,
  BookOpen,
  MonitorPlay,
  Trophy,
  Quote,
  Users,
  BadgeCheck,
} from "lucide-react";

import { cn } from "@/lib/utils";
import { Container } from "@/components/container";
import { Reveal } from "@/components/reveal";
import { ButtonLink } from "@/components/button-link";
import { CountUp } from "@/components/count-up";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  subjects,
  boards,
  systemSteps,
  comparison,
  team,
  tickerReviews,
  stats,
  faqs,
  seoSections,
  site,
} from "@/lib/site";

const STEP_ICONS = [Target, ClipboardList, GraduationCap, LineChart];
const boardShort = (slug) => boards.find((b) => b.slug === slug)?.short ?? slug;

function Eyebrow({ children, className }) {
  return (
    <p
      className={cn(
        "text-xs font-semibold uppercase tracking-[0.16em] text-primary",
        className
      )}
    >
      {children}
    </p>
  );
}

function SectionHeading({ eyebrow, title, lead, center = true, className }) {
  return (
    <div className={cn(center && "mx-auto max-w-2xl text-center", className)}>
      {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
      <h2 className="mt-3 font-heading text-3xl font-bold tracking-tight text-balance sm:text-4xl">
        {title}
      </h2>
      {lead && <p className="mt-4 text-lg text-muted-foreground text-pretty">{lead}</p>}
    </div>
  );
}

// 1 — HERO --------------------------------------------------------------------
export function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* dot texture */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-dots opacity-45 [mask-image:radial-gradient(70%_60%_at_45%_25%,#000,transparent)]"
      />

      <Container className="relative">
        <div className="grid items-end gap-8 lg:grid-cols-[3fr_2fr]">
          {/* LEFT — copy */}
          <Reveal className="py-14 lg:py-24">
            <span className="inline-flex items-center rounded-full border border-border bg-card/70 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.14em] text-primary backdrop-blur">
              Premium IGCSE &amp; A-Level tuition
            </span>

            <h1 className="mt-6 font-heading text-4xl font-extrabold leading-[1.04] tracking-tight text-balance sm:text-5xl xl:text-6xl">
              Better grades need a{" "}
              <span className="relative whitespace-nowrap text-primary">
                better system
                <svg
                  aria-hidden
                  viewBox="0 0 300 16"
                  preserveAspectRatio="none"
                  className="absolute -bottom-2 left-0 h-3 w-full text-gold"
                >
                  <path
                    d="M2 11 C 60 3, 120 3, 160 8 S 260 14, 298 6"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="4"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
              .
            </h1>

            <p className="mt-6 max-w-xl text-lg text-muted-foreground text-pretty">
              We turn confusion into clarity. A British-qualified team of
              examiners and authors, with a proven method that moves your child
              from working hard and guessing to calm, structured and improving
              every week across Physics, Chemistry, Biology, Maths and English.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <ButtonLink size="lg" className="h-12 px-7 text-base" href="/pricing">
                Book your evaluation
              </ButtonLink>
              <ButtonLink
                size="lg"
                variant="outline"
                className="h-12 px-6 text-base"
                href={site.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageCircle className="size-5" />
                Talk to us on WhatsApp
              </ButtonLink>
            </div>

            {/* <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-muted-foreground">
              <span className="font-medium text-foreground/80">
                Cambridge, Edexcel &amp; AQA
              </span>
              <span className="hidden h-4 w-px bg-border sm:block" />
              <span>British-qualified examiners &amp; published authors</span>
            </div> */}
          </Reveal>

          {/* RIGHT — student cut-out on a blob + floating card */}
          <Reveal delay={120} className="relative">
            <div className="relative mx-auto aspect-[4/5] w-full max-w-md">
              {/* outline contour — same shape, sitting just outside the blob */}
              <div
                aria-hidden
                className="blob-shape absolute bottom-[-4%] left-[-3%] right-[-3%] top-[9%] rotate-[2deg] border-2 border-foreground/20"
              />

              {/* filled brand blob */}
              <div
                aria-hidden
                className="blob-shape absolute inset-x-3 bottom-0 top-16 bg-gradient-to-br from-primary/80 via-primary/55 to-gold/60"
              />

              {/* student cut-out */}
              <div className="absolute inset-x-0 bottom-0 top-2">
                <Image
                  src="/assets/hero-student-2.png"
                  alt="An Akbar Academy student holding his books"
                  fill
                  sizes="(max-width:1024px) 80vw, 460px"
                  className="object-contain object-bottom drop-shadow-2xl"
                  priority
                  unoptimized
                />
              </div>

              {/* single floating card — avatars + proof */}
              <div className="animate-floaty absolute bottom-10 left-0 flex items-center gap-3 rounded-2xl border border-border bg-card/95 px-4 py-3 shadow-xl shadow-black/10 backdrop-blur sm:-left-6">
                <span className="flex -space-x-2.5">
                  {team.slice(0, 3).map((t) => (
                    <Image
                      key={t.name}
                      src={t.photo}
                      alt=""
                      width={30}
                      height={30}
                      className="size-8 rounded-full border-2 border-card object-cover"
                    />
                  ))}
                </span>
                <span>
                  <span className="block font-heading text-lg font-extrabold leading-none">
                    <div className="flex items-center gap-1">
                 <Star className="size-3 fill-gold text-gold" />
                 <Star className="size-3 fill-gold text-gold" />
                 <Star className="size-3 fill-gold text-gold" />
                 <Star className="size-3 fill-gold text-gold" />
                 <Star className="size-3 fill-gold text-gold" />
</div>
                  </span>
                  <span className="mt-0.5 flex items-center gap-1 text-xs  font-extrabold text-muted-foreground">
                        3,000+ students taught
                  </span>
                </span>
              </div>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}

// 2 — TRUST STRIP (under hero) ------------------------------------------------
const TRUST_ITEMS = [
  { icon: GraduationCap, label: "British-qualified team" },
  { icon: BookOpen, label: "Every exam board" },
  { icon: MonitorPlay, label: "Online & onsite" },
  { icon: LineChart, label: "A proven system" },
  { icon: Trophy, label: "Free past papers" },
];

export function TrustBar() {
  return (
    <section className="border-y border-border bg-muted/30">
      <Container className="py-6">
        <div className="grid grid-cols-2 gap-x-4 gap-y-6 [&>*:last-child]:col-span-2 sm:flex sm:flex-wrap sm:justify-center sm:gap-x-8 sm:gap-y-4 sm:[&>*:last-child]:col-span-1 lg:gap-x-9">
          {TRUST_ITEMS.map(({ icon: Icon, label }) => (
            <div
              key={label}
              className="flex flex-col items-center gap-2 text-center sm:flex-row sm:gap-2.5 sm:text-left"
            >
              <span className="grid size-10 shrink-0 place-items-center rounded-full bg-primary text-white shadow-sm shadow-primary/30 sm:size-9">
                <Icon className="size-5 sm:size-[18px]" />
              </span>
              <span className="text-sm font-semibold text-foreground/90 sm:whitespace-nowrap">
                {label}
              </span>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

// TESTIMONIAL SLIDER (near the end) --------------------------------------------
function ReviewCard({ r }) {
  return (
    <figure className="flex w-[320px] shrink-0 flex-col gap-3 rounded-2xl border border-border bg-card p-5">
      <div className="flex items-center justify-between">
        <div className="flex gap-0.5 text-gold">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star key={i} className="size-3.5 fill-current" />
          ))}
        </div>
        <span className="inline-flex items-center gap-1.5 rounded-full bg-primary/10 px-2.5 py-1 text-xs font-bold text-primary">
          {r.from}
          <ArrowRight className="size-3" />
          {r.to}
        </span>
      </div>
      <p className="flex-1 text-sm leading-relaxed text-foreground/90">
        &ldquo;{r.quote}&rdquo;
      </p>
      <figcaption className="text-xs text-muted-foreground">
        <span className="font-semibold text-foreground">{r.name}</span>, {r.role}
        <span className="text-border"> | </span>
        {r.subject}
      </figcaption>
    </figure>
  );
}

// 2.5 — ABOUT -----------------------------------------------------------------
const ABOUT_POINTS = [
  "British-qualified examiners & authors",
  "One platform, every subject",
  "Online across the GCC & onsite in Kuwait",
  "A proven, structured system",
];

export function About() {
  return (
    <section id="about" className="py-12 sm:py-16">
      <Container>
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          {/* LEFT — info */}
          <Reveal>
            <Eyebrow className="text-left">About Akbar Academy</Eyebrow>
            <h2 className="mt-3 font-heading text-3xl font-bold tracking-tight text-balance sm:text-4xl">
              A class above the rest, by design
            </h2>
            <p className="mt-5 text-lg text-muted-foreground text-pretty">
              Founded by Kaleem Akbar on one belief: most students already work
              hard, they just lack a clear system that turns effort into marks.
              Our British-qualified examiners and published authors teach every
              subject on one platform, online across the GCC and onsite in
              Kuwait.
            </p>

            <ul className="mt-7 grid gap-3 sm:grid-cols-2">
              {ABOUT_POINTS.map((t) => (
                <li key={t} className="flex items-start gap-2 text-sm font-medium">
                  <Check className="mt-0.5 size-4 shrink-0 text-primary" />
                  {t}
                </li>
              ))}
            </ul>

            <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3">
              <ButtonLink size="lg" className="h-11 px-6" href="/about">
                More about us
              </ButtonLink>
              <Link
                href="/reviews"
                className="group inline-flex items-center gap-1.5 text-sm font-semibold text-primary"
              >
                See our results
                <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
              </Link>
            </div>
          </Reveal>

          {/* RIGHT — founder's note card (no photo) */}
          <Reveal delay={120} className="relative">
            <div
              aria-hidden
              className="absolute -inset-3 -z-10 rounded-[2.5rem] bg-gradient-to-br from-primary/15 to-gold/15 blur-2xl"
            />
            <div className="rounded-3xl border border-border bg-card p-6 shadow-xl shadow-black/5 sm:p-10">
              <div className="flex items-center gap-3.5">
                <span className="grid size-12 shrink-0 place-items-center rounded-2xl bg-primary text-white">
                  <Quote className="size-6" />
                </span>
                <div>
                  <div className="font-heading text-lg font-bold">Kaleem Akbar</div>
                  <div className="text-sm text-muted-foreground">
                    Founder, Akbar Academy
                  </div>
                </div>
              </div>

              <blockquote className="mt-6 font-heading text-lg font-semibold leading-snug text-balance sm:text-xl lg:text-2xl">
                Most students already work hard. What they lack is a clear system
                that turns effort into marks. That&rsquo;s exactly what we built.
              </blockquote>

              <div className="mt-7 grid grid-cols-3 gap-3 border-t border-border pt-6 text-center">
                {[
                  ["3,000+", "students"],
                  ["96%", "A* to B"],
                  ["4.9★", "rated"],
                ].map(([v, l]) => (
                  <div key={l} className="min-w-0">
                    <div className="font-heading text-lg font-extrabold leading-none text-primary sm:text-2xl">
                      {v}
                    </div>
                    <div className="text-xs text-muted-foreground">{l}</div>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}

// 3 — SUBJECTS ----------------------------------------------------------------
export function Subjects() {
  return (
    <section id="subjects" className="py-12 sm:py-16">
      <Container>
        <SectionHeading
          eyebrow="One platform, every subject"
          title="Five subjects, one proven system"
          lead="The same structured method behind every subject, taught by a specialist who knows exactly what the boards reward."
        />
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {subjects.map((s, i) => (
            <Reveal key={s.slug} delay={i * 60}>
              <Link
                href={`/courses/${s.slug}`}
                className="group flex h-full flex-col rounded-2xl border border-border bg-card p-6 transition-all hover:-translate-y-1 hover:shadow-lg hover:shadow-black/5"
              >
                <div className="flex items-center gap-3.5">
                  <span className="relative size-16 shrink-0 rounded-xl bg-white ring-1 ring-black/5">
                    <Image
                      src={s.char}
                      alt=""
                      fill
                      sizes="64px"
                      className="object-contain p-1.5"
                    />
                  </span>
                  <div>
                    <h3 className="font-heading text-lg font-bold">{s.name}</h3>
                    <p className="mt-0.5 text-xs font-medium text-muted-foreground">
                      GCSE, IGCSE, AS &amp; A-Level
                    </p>
                  </div>
                </div>
                <p className="mt-4 flex-1 text-sm text-muted-foreground">{s.blurb}</p>
                <div className="mt-4 flex flex-wrap items-center gap-1.5">
                  {s.boards.map((b) => (
                    <span
                      key={b}
                      className="rounded-md border border-border px-2 py-0.5 text-[11px] font-medium text-muted-foreground"
                    >
                      {boardShort(b)}
                    </span>
                  ))}
                  <span className="ml-auto inline-flex items-center gap-1 text-sm font-medium text-primary opacity-0 transition-opacity group-hover:opacity-100">
                    Explore <ArrowRight className="size-4" />
                  </span>
                </div>
              </Link>
            </Reveal>
          ))}
          <Reveal delay={subjects.length * 60}>
            <Link
              href="/courses"
              className="flex h-full min-h-[196px] flex-col items-center justify-center gap-2 rounded-2xl border border-dashed border-border bg-muted/30 p-6 text-center transition-colors hover:border-primary/40 hover:bg-muted/60"
            >
              <span className="grid size-12 place-items-center rounded-full bg-primary/10 text-primary">
                <ArrowRight className="size-5" />
              </span>
              <span className="font-heading font-semibold">Browse all courses</span>
              <span className="text-sm text-muted-foreground">
                By subject, board &amp; level
              </span>
            </Link>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}

// 4 — PROBLEM / SOLUTION ------------------------------------------------------
export function Problem() {
  return (
    <section className="border-y border-border bg-muted/30 py-12 sm:py-16">
      <Container>
        <Reveal className="mx-auto max-w-3xl text-center">
          <h2 className="font-heading text-2xl font-bold tracking-tight text-balance sm:text-3xl">
            Most students work hard.{" "}
            <span className="text-gold">Few know what to do next.</span>
          </h2>
          <p className="mt-5 text-lg text-muted-foreground text-pretty">
            Endless past papers, scattered resources, no clear plan. Effort without
            a system is exhausting, and it rarely shows up in the grade. That&apos;s
            the gap we close, in every subject, every week.
          </p>
        </Reveal>
      </Container>
    </section>
  );
}

// 5 — STATS -------------------------------------------------------------------
const STAT_ICONS = [Users, GraduationCap, Star, BadgeCheck];

export function Stats() {
  return (
    <section className="pb-5 md:pb-12 md:pt-8">
      <Container>
        <Reveal className="relative">
          <div
            aria-hidden
            className="pointer-events-none absolute inset-x-10 -inset-y-4 -z-10 rounded-[3rem] bg-gradient-to-r from-primary/12 via-transparent to-gold/12 blur-2xl"
          />
          <div className="overflow-hidden rounded-3xl border border-border shadow-sm shadow-black/5">
            <div className="grid grid-cols-2 gap-px bg-border sm:grid-cols-4">
              {stats.map((s, i) => {
                const Icon = STAT_ICONS[i];
                return (
                  <div
                    key={s.label}
                    className="flex min-w-0 flex-col items-center gap-2.5 bg-card px-3 py-7 text-center sm:px-6 sm:py-9"
                  >
                    <span className="grid size-11 shrink-0 place-items-center rounded-full bg-primary/10 text-primary">
                      <Icon className="size-5" />
                    </span>
                    <CountUp
                      value={s.value}
                      className="block font-heading text-xl font-extrabold leading-tight sm:text-2xl lg:text-3xl"
                    />
                    <div className="text-sm font-medium text-muted-foreground">
                      {s.label}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}

// 6 — SYSTEM ------------------------------------------------------------------
export function SystemSection() {
  return (
    <section className="py-12 sm:py-16">
      <Container>
        <SectionHeading
          eyebrow="The Akbar Academy System"
          title="A four-stage engine for real progress"
          lead="The same structured method behind every subject and every teacher."
        />
        {/* Desktop — horizontal milestone timeline */}
        <div className="relative mt-16 hidden lg:block">
          <div
            aria-hidden
            className="absolute left-[12.5%] right-[12.5%] top-8 h-0.5 bg-gradient-to-r from-primary/60 via-primary/50 to-primary/20"
          />
          <div className="grid grid-cols-4 gap-6">
            {systemSteps.map((step, i) => {
              const Icon = STEP_ICONS[i];
              return (
                <Reveal key={step.n} delay={i * 100} className="flex flex-col items-center text-center">
                  <div className="relative z-10 grid size-16 place-items-center rounded-full border-2 border-primary bg-background text-primary shadow-sm">
                    <Icon className="size-6" />
                    <span className="absolute -right-1.5 -top-1.5 grid size-6 place-items-center rounded-full bg-primary text-xs font-bold text-primary-foreground">
                      {step.n}
                    </span>
                  </div>
                  <h3 className="mt-5 font-heading text-lg font-bold">{step.title}</h3>
                  <p className="mt-2 max-w-[15rem] text-sm text-muted-foreground">
                    {step.desc}
                  </p>
                </Reveal>
              );
            })}
          </div>
        </div>

        {/* Mobile — vertical milestone timeline */}
        <div className="relative mt-12 lg:hidden">
          <div
            aria-hidden
            className="absolute bottom-8 left-8 top-8 w-0.5 bg-gradient-to-b from-primary/60 to-primary/20"
          />
          <div className="space-y-8">
            {systemSteps.map((step, i) => {
              const Icon = STEP_ICONS[i];
              return (
                <div key={step.n} className="relative flex gap-5">
                  <div className="relative z-10 grid size-16 shrink-0 place-items-center rounded-full border-2 border-primary bg-background text-primary shadow-sm">
                    <Icon className="size-6" />
                    <span className="absolute -right-1.5 -top-1.5 grid size-6 place-items-center rounded-full bg-primary text-xs font-bold text-primary-foreground">
                      {step.n}
                    </span>
                  </div>
                  <div className="pt-2">
                    <h3 className="font-heading text-lg font-bold">{step.title}</h3>
                    <p className="mt-1 text-sm text-muted-foreground">{step.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}

// 7 — COMPARISON --------------------------------------------------------------
export function Comparison() {
  return (
    <section className="border-y border-border bg-muted/30 py-12 sm:py-16">
      <Container>
        <SectionHeading
          title="A class above typical tuition"
          lead="Same exams. A completely different system."
        />
        {/* Desktop table */}
        <Reveal className="mx-auto mt-12 hidden max-w-3xl overflow-hidden rounded-2xl border border-border bg-card sm:block">
          <div className="grid grid-cols-[1.5fr_1fr_1fr] bg-muted/50 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
            <div className="p-4">What matters</div>
            <div className="p-4 text-primary">Akbar Academy</div>
            <div className="p-4">Typical tuition</div>
          </div>
          {comparison.map((row, i) => (
            <div
              key={row.label}
              className={cn(
                "grid grid-cols-[1.5fr_1fr_1fr] items-center border-t border-border text-sm",
                i % 2 === 1 && "bg-muted/20"
              )}
            >
              <div className="p-4 font-medium">{row.label}</div>
              <div className="flex items-center gap-1.5 p-4 font-semibold">
                <Check className="size-4 shrink-0 text-primary" />
                {row.us}
              </div>
              <div className="flex items-center gap-1.5 p-4 text-muted-foreground">
                <X className="size-4 shrink-0 text-muted-foreground/60" />
                {row.them}
              </div>
            </div>
          ))}
        </Reveal>

        {/* Mobile cards */}
        <div className="mt-10 space-y-3 sm:hidden">
          {comparison.map((row) => (
            <div
              key={row.label}
              className="rounded-2xl border border-border bg-card p-4"
            >
              <div className="font-semibold">{row.label}</div>
              <div className="mt-3 grid grid-cols-2 gap-2.5 text-sm">
                <div className="rounded-xl bg-primary/5 p-3 ring-1 ring-primary/10">
                  <div className="text-[10px] font-bold uppercase tracking-wide text-primary">
                    Akbar Academy
                  </div>
                  <div className="mt-1.5 flex items-start gap-1.5 font-semibold">
                    <Check className="mt-0.5 size-4 shrink-0 text-primary" />
                    {row.us}
                  </div>
                </div>
                <div className="rounded-xl bg-muted/40 p-3">
                  <div className="text-[10px] font-bold uppercase tracking-wide text-muted-foreground">
                    Typical tuition
                  </div>
                  <div className="mt-1.5 flex items-start gap-1.5 text-muted-foreground">
                    <X className="mt-0.5 size-4 shrink-0 text-muted-foreground/60" />
                    {row.them}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

// 8 — TEAM --------------------------------------------------------------------
export function Team() {
  return (
    <section className="py-12 sm:py-16">
      <Container>
        <SectionHeading
          eyebrow="Meet the team"
          title="Taught by people who write the books"
          lead="A hand-picked team of British-qualified teachers, examiners and authors, every one DBS-checked and carefully vetted."
        />
        <div className="mt-10 flex flex-wrap justify-center gap-4 sm:gap-5">
          {team.map((t, i) => (
            <Reveal
              key={t.name}
              delay={i * 70}
              className="w-full max-w-[300px] sm:w-[300px]"
            >
              <div className="flex h-full flex-col items-center rounded-2xl border border-border bg-card p-6 text-center transition-colors hover:border-primary/30">
                <Image
                  src={t.photo}
                  alt={t.name}
                  width={72}
                  height={72}
                  className="size-16 rounded-full object-cover ring-2 ring-primary/25"
                />
                <h3 className="mt-4 font-heading text-base font-bold">{t.name}</h3>
                <p className="text-xs font-semibold text-gold">{t.subject}</p>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {t.bio}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}

// 9 — REVIEWS -----------------------------------------------------------------
export function Reviews() {
  const items = [...tickerReviews, ...tickerReviews];
  return (
    <section id="reviews" className="border-t border-border py-12 sm:py-16">
      <Container>
        <SectionHeading
          eyebrow="Parents & students say"
          title="Results that speak for themselves"
          lead="Rated 4.9 on Trustpilot and Google by more than 3,000 students taught."
        />
      </Container>

      {/* auto-scrolling testimonial slider (full-bleed) */}
      <div className="group relative mt-12 overflow-hidden [mask-image:linear-gradient(90deg,transparent,#000_5%,#000_95%,transparent)]">
        <div className="flex w-max animate-marquee items-stretch gap-4 group-hover:[animation-play-state:paused]">
          {items.map((r, i) => (
            <ReviewCard key={i} r={r} />
          ))}
        </div>
      </div>

      <Container>
        <div className="mt-10 text-center">
          <ButtonLink variant="outline" href="/reviews">
            Read more reviews
          </ButtonLink>
        </div>
      </Container>
    </section>
  );
}

// 10 — PRICING TEASER ---------------------------------------------------------
export function PricingTeaser() {
  return (
    <section className="py-12 sm:py-16">
      <Container>
        <Reveal className="overflow-hidden rounded-3xl border border-border bg-gradient-to-br from-primary/10 via-card to-card p-8 sm:p-12">
          <div className="flex flex-col items-center gap-8 sm:flex-row sm:justify-between">
            <div className="max-w-xl">
              <Eyebrow>Simple, transparent pricing</Eyebrow>
              <h2 className="mt-3 font-heading text-2xl font-bold tracking-tight sm:text-3xl">
                One clear starting point, then choose what fits.
              </h2>
              <p className="mt-3 text-muted-foreground">
                Start with a low-commitment evaluation, then pick your level, how
                you learn, and the programme that fits. Online across the GCC, or
                onsite in Kuwait. Commit longer and save up to 15%.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <ButtonLink href="/pricing">See full pricing</ButtonLink>
                <ButtonLink
                  variant="outline"
                  href={site.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Ask a question
                </ButtonLink>
              </div>
            </div>
            <div className="shrink-0 rounded-2xl border border-border bg-card px-8 py-6 text-center">
              <div className="text-sm text-muted-foreground">Evaluation</div>
              <div className="font-heading text-4xl font-extrabold">KD 49</div>
              <div className="mt-1 text-xs text-muted-foreground">
                one-off, then choose a programme
              </div>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}

// 11 — SEO CONTENT (collapsible, crawlable) -----------------------------------
export function SeoContent() {
  return (
    <section className="border-t border-border py-12 sm:py-16">
      <Container className="max-w-3xl">
        <SectionHeading
          center={false}
          eyebrow="In depth"
          title="Premium tuition, built around results"
        />
        <div className="mt-8 space-y-5 text-base leading-relaxed text-muted-foreground">
          {/* First section always visible for immediate context + SEO. */}
          {seoSections[0].body.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>

        <Accordion className="mt-8 w-full space-y-3">
          {seoSections.slice(1).map((sec) => (
            <AccordionItem
              key={sec.id}
              value={sec.id}
              className="rounded-2xl border border-border bg-card px-5"
            >
              <AccordionTrigger className="py-4 text-left font-heading text-base font-semibold hover:no-underline">
                {sec.title}
              </AccordionTrigger>
              <AccordionContent>
                <div className="space-y-4 text-base leading-relaxed text-muted-foreground [&_a]:no-underline">
                  {sec.body.map((p, i) => (
                    <p key={i}>{p}</p>
                  ))}
                </div>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </Container>
    </section>
  );
}

// 12 — FAQ --------------------------------------------------------------------
export function Faq() {
  return (
    <section id="faq" className="border-t border-border bg-muted/30 py-12 sm:py-16">
      <Container className="max-w-3xl">
        <SectionHeading
          eyebrow="Frequently asked"
          title="Questions parents ask us most"
        />
        <Accordion className="mt-10 w-full">
          {faqs.map((f, i) => (
            <AccordionItem key={i} value={`faq-${i}`}>
              <AccordionTrigger className="py-5 text-left font-heading text-base font-semibold hover:no-underline">
                {f.q}
              </AccordionTrigger>
              <AccordionContent>
                <p className="text-[15px] leading-relaxed text-muted-foreground">
                  {f.a}
                </p>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </Container>
    </section>
  );
}

// 13 — FINAL CTA --------------------------------------------------------------
export function FinalCta() {
  return (
    <section className="py-12 sm:py-16">
      <Container>
        <Reveal className="relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-[#0b5a97] via-[#0a4a7d] to-[#06375a] px-6 py-14 text-center shadow-xl shadow-primary/25 sm:px-12 sm:py-20">
          {/* Electric-blue glow (top-left) + Mandarin-orange glow (bottom-right) */}
          <div
            aria-hidden
            className="pointer-events-none absolute -left-20 -top-24 size-72 rounded-full bg-primary/45 blur-3xl"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute -bottom-24 -right-20 size-80 rounded-full bg-gold/45 blur-3xl"
          />

          <div className="relative">
            <h2 className="mx-auto max-w-2xl font-heading text-3xl font-extrabold tracking-tight text-balance text-white sm:text-4xl lg:text-5xl">
              Give your child a better system.
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-lg text-white/85 text-pretty">
              Book an evaluation and we&apos;ll map a clear path to better grades in
              any subject.
            </p>
            <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
              <ButtonLink
                size="lg"
                href="/pricing"
                className="h-12 bg-white px-7 text-base text-primary hover:bg-white/90"
              >
                Book your evaluation
              </ButtonLink>
              <ButtonLink
                size="lg"
                variant="outline"
                href={site.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="h-12 border-white/50 bg-transparent px-7 text-base text-white hover:bg-white/10 hover:text-white"
              >
                <MessageCircle className="size-5" />
                Talk to us on WhatsApp
              </ButtonLink>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
