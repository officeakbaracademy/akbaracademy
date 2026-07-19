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
  ClipboardCheck,
  LineChart,
  BookOpen,
  MonitorPlay,
  Video,
  TrendingUp,
  Trophy,
  Quote,
  Users,
  BadgeCheck,
  MapPin,
  Home,
  Globe,
  Network,
  Search,
  MessageSquare,
  AlignLeft,
  PenTool,
  SquareCheck,
} from "lucide-react";

import { cn } from "@/lib/utils";
import { Container } from "@/components/container";
import { HeroTrust } from "@/components/hero-trust";
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
  trustpilotStats,
  stats,
  faqs,
  seoSections,
  site,
} from "@/lib/site";

const STEP_ICONS = [Target, ClipboardList, GraduationCap, LineChart];
const boardShort = (slug) => boards.find((b) => b.slug === slug)?.short ?? slug;

function Eyebrow({ children, className, accent = "gold" }) {
  return (
    <p
      className={cn(
        "text-xs font-semibold uppercase tracking-[0.16em]",
        accent === "gold" ? "text-gold" : "text-primary",
        className
      )}
    >
      {children}
    </p>
  );
}

function SectionHeading({ eyebrow, title, lead, center = true, className, accent }) {
  return (
    <div className={cn(center && "mx-auto max-w-2xl text-center", className)}>
      {eyebrow && <Eyebrow accent={accent}>{eyebrow}</Eyebrow>}
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
      {/* background photograph + readability scrim */}
      <div aria-hidden className="absolute inset-0">
        <Image
          src="/assets/hero-classroom-v2.jpg"
          alt=""
          fill
          sizes="100vw"
          className="object-cover object-left lg:object-center"
          priority
          unoptimized
        />
        {/* flat overlay so the photograph stays visible behind the copy */}
        <div className="absolute inset-0 bg-black/80" />
      </div>

      <Container className="relative">
        <div className="grid items-end gap-8">
          {/* copy */}
          <Reveal className="mx-auto max-w-5xl pb-8 pt-16 text-center sm:pt-24 lg:pb-12 lg:pt-40">
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-primary">
              British curriculum specialists, Kuwait &amp; the GCC
            </p>

            <h1 className="mt-2 font-heading text-4xl font-extrabold leading-[1.04] tracking-tight text-balance text-white sm:text-5xl xl:text-6xl">
              Better grades start with a{" "}
              <span className="text-primary">better system</span>.
            </h1>

            <p className="mt-4 font-heading text-xl font-bold italic text-gold sm:text-2xl">
              A Class Above the Rest.
            </p>

            {/* <p className="mx-auto mt-5 max-w-4xl text-lg leading-relaxed text-white/85 text-pretty">
              Akbar Academy prepares IGCSE and A Level students for Cambridge,
              Edexcel and AQA in Physics, Chemistry, Biology, Maths and English.
              Specialist teachers, structured lessons, marked work and weekly
              progress tracking. Onsite in Kuwait, hybrid, and live online
              across the GCC.
            </p> */}

            <div className="mx-auto mt-8 flex max-w-[260px] flex-col items-stretch gap-3 sm:max-w-none sm:flex-row sm:items-center sm:justify-center">
              <ButtonLink
                className="h-11 w-full px-6 sm:w-auto sm:px-7"
                href={site.bookEvaluation}
              >
                Book your evaluation
              </ButtonLink>
              <ButtonLink
                variant="outline"
                className="h-11 w-full border-white/40 bg-transparent px-6 text-white hover:bg-white/10 hover:text-white sm:w-auto sm:px-7"
                href={site.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageCircle className="size-5" />
                Talk to us on WhatsApp
              </ButtonLink>
            </div>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
              <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.12em] text-white/85">
                <MapPin className="size-4 text-gold" />
                Live online across the GCC
              </span>
              <span className="hidden h-4 w-px bg-white/25 sm:block" />
              <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.12em] text-white/85">
                <Home className="size-4 text-gold" />
                On-site hub in Kuwait
              </span>
            </div>
          </Reveal>

        </div>

        <Reveal delay={200}>
          <HeroTrust />
        </Reveal>
      </Container>
    </section>
  );
}

// 2 — TRUST STRIP (under hero) ------------------------------------------------
const TRUST_ITEMS = [
  { icon: Video, label: "Live classes" },
  { icon: ClipboardCheck, label: "Exam feedback" },
  { icon: TrendingUp, label: "Live progress" },
  { icon: MonitorPlay, label: "Recorded lessons" },
  { icon: Target, label: "Exam-board prep" },
];

export function TrustBar() {
  return (
    <section className="border-y border-border">
      <Container className="py-6">
        <div className="grid grid-cols-2 gap-x-4 gap-y-6 [&>*:last-child]:col-span-2 sm:flex sm:flex-wrap sm:justify-center sm:gap-x-8 sm:gap-y-4 sm:[&>*:last-child]:col-span-1 lg:gap-x-9">
          {TRUST_ITEMS.map(({ icon: Icon, label }, i) => (
            <div
              key={label}
              className="flex flex-col items-center gap-2 text-center sm:flex-row sm:gap-2.5 sm:text-left"
            >
              <span
                className={cn(
                  "grid size-10 shrink-0 place-items-center rounded-full text-white sm:size-9",
                  // Alternate blue/gold at every screen size.
                  i % 2 === 1
                    ? "bg-gold text-gold-foreground"
                    : "bg-primary"
                )}
              >
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
    <figure className="flex w-[340px] shrink-0 flex-col gap-3 rounded-2xl border border-border bg-card p-5">
      {/* Trustpilot green stars, matching the source */}
      <div className="flex gap-0.5">
        {Array.from({ length: 5 }).map((_, i) => (
          <span
            key={i}
            className="grid size-4 place-items-center bg-[#00b67a]"
          >
            <Star className="size-3 fill-white text-white" />
          </span>
        ))}
      </div>

      <div className="font-heading text-sm font-bold">{r.title}</div>

      <p className="flex-1 text-sm leading-relaxed text-muted-foreground">
        {r.quote}
      </p>

      <figcaption className="text-xs text-muted-foreground">
        <span className="font-semibold text-foreground">{r.name}</span>
        <span className="text-border"> | </span>
        {r.location}
      </figcaption>
    </figure>
  );
}

// 2.5 — ABOUT -----------------------------------------------------------------
const ABOUT_POINTS = [
  "British-qualified examiners",
  "One platform, every subject",
  "Online, onsite and hybrid",
  "A proven, structured system",
];

const FOUNDER_STATS = [
  { icon: Trophy, value: "20+", label: "Years experience" },
  { icon: Users, value: "3,000+", label: "Students taught" },
  { icon: BookOpen, value: "5 books", label: "Endorsed author" },
  { icon: Globe, value: "UK & Int.", label: "Curriculum expert" },
];

export function About() {
  return (
    <section id="about" className="py-12 sm:py-16">
      <Container>
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          {/* LEFT — founder text */}
          <Reveal>
            <Eyebrow accent="gold" className="text-left">
              Founder &amp; lead teacher
            </Eyebrow>
            <h2 className="mt-3 font-heading text-4xl font-extrabold tracking-tight text-balance sm:text-5xl">
              Mr Kaleem Akbar
            </h2>
            <p className="mt-3 text-lg font-bold text-primary">
              Cambridge and Edexcel endorsed author, founder and Physics
              specialist.
            </p>
            <div className="mt-5 space-y-4 text-lg text-muted-foreground text-pretty">
              <p>
                Teaching students across the GCC since 2006, Mr Kaleem Akbar has
                helped over 3,000 reach top grades with exam-focused, structured
                teaching.
              </p>
              <p>
                Author of{" "}
                <span className="font-semibold text-foreground">
                  five endorsed IGCSE Physics textbooks
                </span>
                , his method is at the heart of everything Akbar Academy teaches.
              </p>
            </div>

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

          {/* RIGHT — credentials stat card (2x2) */}
          <Reveal delay={120} className="relative">
            <div className="overflow-hidden rounded-3xl border border-border">
              <div className="grid grid-cols-2 gap-px bg-border">
                {FOUNDER_STATS.map(({ icon: Icon, value, label }) => (
                  <div
                    key={label}
                    className="flex flex-col items-center gap-2 bg-card px-4 py-8 text-center"
                  >
                    <span className="grid size-11 place-items-center rounded-xl bg-gold/10 text-gold ring-1 ring-gold/15">
                      <Icon className="size-5" />
                    </span>
                    <div className="mt-1 font-heading text-2xl font-extrabold leading-none">
                      {value}
                    </div>
                    <div className="text-xs font-medium text-muted-foreground">
                      {label}
                    </div>
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
                className="group flex h-full flex-col rounded-2xl border border-border bg-card p-6 transition-colors hover:border-primary/40"
              >
                <div className="flex items-center gap-3.5">
                  <span className="relative size-16 shrink-0 rounded-xl bg-white ring-1 ring-primary-foreground/5">
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
                      IGCSE, AS &amp; A-Level
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
const PROBLEMS = [
  {
    icon: Network,
    title: "Weak foundations",
    desc: "Small gaps grow into big ones. Confidence drops when the basics are not fixed first.",
  },
  {
    icon: Search,
    title: "Unstructured revision",
    desc: "Students revise randomly and miss the topics that come up most in exams.",
  },
  {
    icon: Target,
    title: "Poor exam technique",
    desc: "Marks are lost on timing, exam wording and not answering the way examiners want.",
  },
  {
    icon: MessageSquare,
    title: "No feedback loop",
    desc: "Work is not marked properly, so the same mistakes repeat and nobody knows what to fix next.",
  },
];

export function Problem() {
  return (
    <section className="border-y border-border py-12 sm:py-16">
      <Container>
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          {/* LEFT — the problem */}
          <Reveal>
            <Eyebrow accent="gold" className="text-left">
              The problem we solve
            </Eyebrow>
            <h2 className="mt-3 font-heading text-3xl font-extrabold tracking-tight text-balance sm:text-4xl">
              Most students work hard.{" "}
              <span className="text-gold">Few know what to do next.</span>
            </h2>
            <p className="mt-5 text-lg text-muted-foreground text-pretty">
              Wasted time, weak exam skills, slow progress. Akbar Academy
              replaces guessing with a clear, step-by-step system that produces
              real results.
            </p>
          </Reveal>

          {/* RIGHT — the four failure points */}
          <div className="grid gap-4 sm:grid-cols-2">
            {PROBLEMS.map(({ icon: Icon, title, desc }, i) => (
              <Reveal
                key={title}
                delay={i * 80}
                className="rounded-2xl border border-border bg-card p-5 transition-colors hover:border-gold/40"
              >
                <span className="grid size-10 place-items-center rounded-xl bg-gold/10 text-gold ring-1 ring-gold/15">
                  <Icon className="size-5" />
                </span>
                <h3 className="mt-4 font-heading text-base font-bold">{title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                  {desc}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
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
          <div className="overflow-hidden rounded-3xl border border-border">
            <div className="grid grid-cols-2 gap-px bg-border sm:grid-cols-4">
              {stats.map((s, i) => {
                const Icon = STAT_ICONS[i];
                return (
                  <div
                    key={s.label}
                    className="flex min-w-0 flex-col items-center gap-2.5 bg-card px-3 py-7 text-center sm:px-6 sm:py-9"
                  >
                    <span
                      className={cn(
                        "grid size-11 shrink-0 place-items-center rounded-full",
                        i % 2 === 1 ? "bg-gold/15 text-gold" : "bg-primary/10 text-primary"
                      )}
                    >
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

// 6 — THE LEARNING LOOP ------------------------------------------------------
const LOOP_ICONS = {
  AlignLeft,
  PenTool,
  SquareCheck,
  MessageSquare,
  LineChart,
};

export function SystemSection() {
  return (
    <section className="py-12 sm:py-16">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-gold">
            How it works
          </p>
          <h2 className="mt-3 font-heading text-3xl font-bold tracking-tight text-balance sm:text-4xl">
            The Akbar Academy learning loop.
          </h2>
          <p className="mt-4 text-lg text-muted-foreground text-pretty">
            The same five steps run every week, in every subject. This is the
            engine behind the grades.
          </p>
        </div>

        {/* Desktop — horizontal loop */}
        <div className="relative mt-16 hidden lg:block">
          <div
            aria-hidden
            className="absolute left-[10%] right-[10%] top-8 border-t-2 border-dashed border-primary/30"
          />
          <div className="grid grid-cols-5 gap-6">
            {systemSteps.map((step, i) => {
              const Icon = LOOP_ICONS[step.icon] ?? AlignLeft;
              const gold = i % 2 === 1;
              return (
                <Reveal
                  key={step.n}
                  delay={i * 90}
                  className="flex flex-col items-center text-center"
                >
                  <div
                    className={cn(
                      "relative z-10 grid size-16 place-items-center rounded-full border-2 bg-background",
                      gold ? "border-gold text-gold" : "border-primary text-primary"
                    )}
                  >
                    <Icon className="size-6" />
                  </div>
                  <h3 className="mt-5 font-heading text-lg font-bold">{step.title}</h3>
                  <p className="mt-2 max-w-[13rem] text-sm text-muted-foreground text-pretty">
                    {step.desc}
                  </p>
                </Reveal>
              );
            })}
          </div>
        </div>

        {/* Mobile — vertical loop */}
        <div className="relative mt-12 lg:hidden">
          <div
            aria-hidden
            className="absolute bottom-8 left-8 top-8 border-l-2 border-dashed border-primary/30"
          />
          <div className="space-y-8">
            {systemSteps.map((step, i) => {
              const Icon = LOOP_ICONS[step.icon] ?? AlignLeft;
              const gold = i % 2 === 1;
              return (
                <div key={step.n} className="relative flex gap-5">
                  <div
                    className={cn(
                      "relative z-10 grid size-16 shrink-0 place-items-center rounded-full border-2 bg-background",
                      gold ? "border-gold text-gold" : "border-primary text-primary"
                    )}
                  >
                    <Icon className="size-6" />
                  </div>
                  <div className="pt-3.5">
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
    <section className="border-y border-border py-12 sm:py-16">
      <Container>
        <SectionHeading
          eyebrow="How we compare"
          title="A class above typical tuition"
          lead="Same exams. A completely different system."
        />
        {/* Desktop table */}
        <Reveal className="mx-auto mt-12 hidden max-w-3xl overflow-hidden rounded-2xl border border-border bg-card sm:block">
          <div className="grid grid-cols-[1.5fr_1fr_1fr] bg-muted/50 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
            <div className="p-4">What matters</div>
            <div className="p-4 text-gold">Akbar Academy</div>
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
                <div className="rounded-xl bg-gold/5 p-3 ring-1 ring-gold/15">
                  <div className="text-[10px] font-bold uppercase tracking-wide text-gold">
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
          title="Results that speak for themselves."
          lead={`Rated ${trustpilotStats.score} out of 5 on Trustpilot from ${trustpilotStats.count} reviews.`}
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
          <ButtonLink
            variant="outline"
            href={site.trustpilot}
            target="_blank"
            rel="noopener noreferrer"
          >
            Read all reviews on Trustpilot
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
          <div className="flex flex-col items-center gap-8 md:flex-row md:justify-between">
            <div className="max-w-xl">
              <Eyebrow accent="gold">Simple, transparent pricing</Eyebrow>
              <h2 className="mt-3 font-heading text-2xl font-bold tracking-tight sm:text-3xl">
                One clear starting point, then choose what fits.
              </h2>
              <p className="mt-3 text-muted-foreground">
                Start with a low-commitment evaluation, then pick your level, how
                you learn, and the programme that fits. Online across the GCC, or
                onsite in Kuwait. Commit longer and save up to 15%.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <ButtonLink size="lg" className="h-11 px-6" href="/pricing">
                  See full pricing
                </ButtonLink>
                <ButtonLink
                  variant="outline"
                  size="lg"
                  className="h-11 px-6"
                  href={site.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Ask a question
                </ButtonLink>
              </div>
            </div>
            <div className="relative shrink-0 overflow-hidden rounded-3xl bg-gradient-to-br from-[#ffd24a] to-[#f5a300] px-10 py-8 text-center text-gold-foreground shadow-xl shadow-gold/30 ring-1 ring-primary-foreground/10">
              {/* soft top sheen for a polished, glossy finish */}
              <div
                aria-hidden
                className="pointer-events-none absolute inset-x-0 -top-3 h-20 bg-gradient-to-b from-white/40 to-transparent"
              />
              <div className="relative">
                <span className="inline-flex items-center rounded-full bg-primary-foreground/10 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.14em]">
                  Evaluation
                </span>
                <div className="mt-3.5 font-heading text-5xl font-extrabold leading-none tracking-tight">
                  KD 49
                </div>
                <div className="mx-auto mt-4 h-px w-10 bg-primary-foreground/25" />
                <p className="mt-3 text-[13px] font-semibold text-gold-foreground">
                  one-off, then choose a programme
                </p>
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
    <section id="faq" className="border-t border-border py-12 sm:py-16">
      <Container className="max-w-3xl">
        <SectionHeading
          eyebrow="Frequently asked"
          title="Questions parents ask us most."
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
    <section className="surface-electric relative overflow-hidden py-16 sm:py-24">
      <Container className="relative text-center">
        <Reveal>
          <p>
            <span className="inline-flex items-center rounded-full bg-gold px-3.5 py-1.5 text-xs font-bold uppercase tracking-[0.16em] text-gold-foreground">
              Ready when you are
            </span>
          </p>
          <h2 className="mx-auto mt-3 max-w-2xl font-heading text-3xl font-extrabold tracking-tight text-balance text-primary-foreground sm:text-4xl lg:text-5xl">
            See the difference a real system makes.
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-lg text-primary-foreground/80 text-pretty">
            Book an evaluation session and we will assess your child, recommend
            the right programme, and show you exactly how we will get them to their
            target grade.
          </p>
          <div className="mt-9 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <ButtonLink
              href={site.bookEvaluation}
              className="h-11 w-[260px] bg-gold px-6 text-gold-foreground hover:bg-gold/90 sm:w-auto sm:px-7"
            >
              Book an Evaluation
            </ButtonLink>
            <ButtonLink
              variant="outline"
              href={site.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="h-11 w-[260px] border-primary-foreground/40 bg-transparent px-6 text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground sm:w-auto sm:px-7"
            >
              Message us on WhatsApp
            </ButtonLink>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
