import { MonitorPlay, FileText, TrendingUp, PlayCircle, MessageSquare } from "lucide-react";

import { Container } from "@/components/container";

const FEATURES = [
  { icon: MonitorPlay, label: "Live interactive classes" },
  { icon: FileText, label: "Instructor-tested exam feedback" },
  { icon: TrendingUp, label: "Live progress via the app" },
  { icon: PlayCircle, label: "Recorded lesson & re-access" },
  { icon: MessageSquare, label: "Exam-board specific prep" },
];

// Dark "what you get" banner that sits just under the hero.
export function WhatYouGet() {
  return (
    <section className="py-8 sm:py-10">
      <Container>
        <div className="overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-[#0a0b0e] to-[#15171e] p-6 shadow-xl shadow-black/20 sm:p-8 lg:p-10">
          <div className="grid gap-8 lg:grid-cols-[minmax(0,20rem)_1fr] lg:items-center lg:gap-12">
            {/* Heading */}
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-gold">
                What you get
              </p>
              <h2 className="mt-2 font-heading text-2xl font-extrabold leading-tight text-white sm:text-[28px]">
                More than just lessons.{" "}
                <span className="text-gold">A complete grade system.</span>
              </h2>
            </div>

            {/* Features */}
            <div className="grid grid-cols-2 gap-x-6 gap-y-6 sm:grid-cols-3 lg:grid-cols-5 lg:gap-x-4">
              {FEATURES.map(({ icon: Icon, label }) => (
                <div key={label} className="flex items-start gap-2.5">
                  <span className="grid size-9 shrink-0 place-items-center rounded-lg bg-gold/12 text-gold ring-1 ring-gold/15">
                    <Icon className="size-5" />
                  </span>
                  <span className="text-sm font-semibold leading-tight text-white/90">
                    {label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
