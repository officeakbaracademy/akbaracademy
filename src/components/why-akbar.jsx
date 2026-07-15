import {
  Check,
  X,
  Star,
  User,
  Package,
  Users,
  Pencil,
  Clock,
  MessageSquare,
  MonitorPlay,
  FileText,
  TrendingUp,
  PlayCircle,
} from "lucide-react";

import { cn } from "@/lib/utils";
import { comparison } from "@/lib/site";
import { Container } from "@/components/container";
import { Reveal } from "@/components/reveal";

const ROW_ICONS = { User, Package, Users, Pencil, Clock, MessageSquare };

const FEATURES = [
  { icon: MonitorPlay, label: "Live interactive classes" },
  { icon: FileText, label: "Instructor-tested exam feedback" },
  { icon: TrendingUp, label: "Live progress via the app" },
  { icon: PlayCircle, label: "Recorded lesson & re-access" },
  { icon: MessageSquare, label: "Exam-board specific prep" },
];

export function WhyAkbar() {
  return (
    <section className="py-14 sm:py-20">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[minmax(0,23rem)_1fr] lg:items-center lg:gap-16">
          {/* LEFT — heading + premium badge */}
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-gold">
              Premium by design
            </p>
            <h2 className="mt-3 font-heading text-3xl font-bold tracking-tight text-balance sm:text-4xl">
              Why Akbar Academy gets{" "}
              <span className="text-primary">better results</span>
            </h2>
            <p className="mt-4 text-lg text-muted-foreground text-pretty">
              A premium standard runs through every part of the programme, the
              teachers, the planning, the feedback and the parent loop.
            </p>

            <div className="mt-7 flex items-center gap-3.5 rounded-2xl border border-border bg-card px-5 py-4">
              <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-gold/12 text-gold ring-1 ring-gold/15">
                <Star className="size-5 fill-gold" />
              </span>
              <div className="leading-tight">
                <div className="font-heading text-base font-bold">
                  Premium support.
                </div>
                <div className="text-sm font-semibold text-primary">
                  Proven outcomes.
                </div>
              </div>
            </div>
          </Reveal>

          {/* RIGHT — comparison table (desktop) */}
          <Reveal delay={120} className="min-w-0">
            <div className="hidden overflow-hidden rounded-3xl border border-border bg-card sm:block">
              {/* header */}
              <div className="grid grid-cols-[1.5fr_1fr_1fr]">
                <div className="p-5" />
                <div className="flex items-center justify-center bg-primary py-4 text-center text-xs font-extrabold uppercase tracking-wider text-primary-foreground">
                  Akbar Academy
                </div>
                <div className="flex items-center justify-center p-5 text-center text-xs font-bold uppercase tracking-wider text-muted-foreground">
                  Typical tuition
                </div>
              </div>

              {comparison.map((row) => {
                const Icon = ROW_ICONS[row.icon] ?? User;
                return (
                  <div
                    key={row.label}
                    className="grid grid-cols-[1.5fr_1fr_1fr] items-stretch border-t border-border"
                  >
                    <div className="flex items-center gap-3 p-5">
                      <Icon className="size-4 shrink-0 text-primary" />
                      <span className="text-sm font-semibold">{row.label}</span>
                    </div>
                    <div className="flex items-center gap-2.5 bg-primary/[0.05] p-5 text-sm font-bold">
                      <span className="grid size-5 shrink-0 place-items-center rounded-full bg-primary text-white">
                        <Check className="size-3.5" />
                      </span>
                      {row.us}
                    </div>
                    <div className="flex items-center gap-2.5 p-5 text-sm text-muted-foreground">
                      <span className="grid size-5 shrink-0 place-items-center rounded-full bg-muted text-muted-foreground/50">
                        <X className="size-3.5" />
                      </span>
                      {row.them}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* comparison cards (mobile) */}
            <div className="space-y-3 sm:hidden">
              {comparison.map((row) => {
                const Icon = ROW_ICONS[row.icon] ?? User;
                return (
                  <div
                    key={row.label}
                    className="rounded-2xl border border-border bg-card p-4"
                  >
                    <div className="flex items-center gap-2 font-semibold">
                      <Icon className="size-4 shrink-0 text-primary" />
                      {row.label}
                    </div>
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
                );
              })}
            </div>
          </Reveal>
        </div>

        {/* Feature banner */}
        <Reveal delay={150} className="mt-12">
          <div className="rounded-3xl border border-border bg-card p-8 text-center sm:p-10">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-gold">
              What you get
            </p>
            <h3 className="mx-auto mt-2 max-w-xl font-heading text-2xl font-extrabold leading-tight text-balance sm:text-3xl">
              More than just lessons.{" "}
              <span className="text-primary">A complete grade system.</span>
            </h3>

            <div className="mt-7 flex flex-wrap justify-center gap-2.5">
              {FEATURES.map(({ icon: Icon, label }) => (
                <span
                  key={label}
                  className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-4 py-2 text-sm font-semibold text-foreground/90"
                >
                  <Icon className="size-4 shrink-0 text-primary" />
                  {label}
                </span>
              ))}
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
