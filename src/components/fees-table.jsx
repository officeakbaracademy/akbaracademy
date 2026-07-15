"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

const SUBJECTS = [
  { name: "Chemistry" },
  { name: "Biology" },
  { name: "Maths" },
  { name: "Physics" },
  { name: "Physics Elite", upgrade: true },
];

// Per-lesson rates in KD, by level then delivery mode.
// Physics Elite has no A2 rate yet (not live), so it drops off the A2 table.
const RATES = {
  igcse: {
    online: { Chemistry: 12, Biology: 12, Maths: 12, Physics: 15, "Physics Elite": 18.5 },
    f2f: { Chemistry: 15, Biology: 15, Maths: 15, Physics: 18.5, "Physics Elite": 22.5 },
  },
  a2: {
    online: { Chemistry: 13.5, Biology: 13.5, Maths: 13.5, Physics: 17 },
    f2f: { Chemistry: 17, Biology: 17, Maths: 17, Physics: 21 },
  },
};

const PACKAGES = {
  "2": [
    { name: "Monthly", lessons: 8, off: 0, monthly: true },
    { name: "Half-Term Pack", lessons: 16, off: 0.05 },
    { name: "Semester Pack", lessons: 32, off: 0.1, free: 3, highlight: true },
    { name: "Year Pack", lessons: 64, off: 0.15, free: 9 },
  ],
  "1": [
    { name: "Monthly", lessons: 4, off: 0, monthly: true },
    { name: "Semester Pack", lessons: 16, off: 0.05 },
    { name: "Year Pack", lessons: 32, off: 0.1, free: 3, highlight: true },
  ],
};

const LEVELS = [
  { value: "igcse", label: "IGCSE / AS Level" },
  { value: "a2", label: "A2 Level" },
];
const MODES = [
  { value: "online", label: "Online (GCC)" },
  { value: "f2f", label: "Face-to-Face (Kuwait)" },
];
const LPW = [
  { value: "2", label: "2 lessons a week, Full Course" },
  { value: "1", label: "1 lesson a week, Accelerated / Half Syllabus / Modular" },
];

const fmt = (v) => (Number.isInteger(v) ? String(v) : v.toFixed(2));

function Toggle({ options, value, onChange, ariaLabel }) {
  return (
    <div
      role="group"
      aria-label={ariaLabel}
      className="inline-flex flex-wrap rounded-full border border-border bg-card p-1"
    >
      {options.map((o) => (
        <button
          key={o.value}
          type="button"
          onClick={() => onChange(o.value)}
          aria-pressed={value === o.value}
          className={cn(
            "rounded-full px-4 py-2 text-sm font-semibold transition-colors",
            value === o.value
              ? "bg-primary text-primary-foreground"
              : "text-muted-foreground hover:text-foreground"
          )}
        >
          {o.label}
        </button>
      ))}
    </div>
  );
}

export function FeesTable() {
  const [level, setLevel] = React.useState("igcse");
  const [mode, setMode] = React.useState("f2f");
  const [lpw, setLpw] = React.useState("2");

  const rates = RATES[level][mode];
  const subjects = SUBJECTS.filter((s) => rates[s.name] != null);
  const packages = PACKAGES[lpw];
  const cols = `minmax(9rem,1.5fr) repeat(${packages.length}, minmax(6.5rem, 1fr))`;
  const maxOff = lpw === "2" ? "15%" : "10%";

  return (
    <div className="mt-16">
      <h3 className="font-heading text-2xl font-bold tracking-tight sm:text-3xl">
        Fees by subject &amp; package
      </h3>
      <p className="mt-3 max-w-2xl text-muted-foreground text-pretty">
        Select your level, delivery mode, and how many lessons a week, the table
        updates instantly with the exact fees.
      </p>

      {/* toggles */}
      <div className="mt-6 flex flex-col items-start gap-3">
        <div className="flex flex-wrap gap-3">
          <Toggle options={LEVELS} value={level} onChange={setLevel} ariaLabel="Level" />
          <Toggle options={MODES} value={mode} onChange={setMode} ariaLabel="Delivery" />
        </div>
        <Toggle options={LPW} value={lpw} onChange={setLpw} ariaLabel="Lessons per week" />
      </div>

      {/* one-lesson explainer */}
      {lpw === "1" && (
        <div className="mt-5 rounded-2xl border border-gold/30 bg-gold/[0.06] p-4 text-sm leading-relaxed">
          <span className="font-bold text-gold">
            Showing 1 lesson a week pricing, 4 lessons per month.
          </span>{" "}
          <span className="text-muted-foreground">
            Applies to Accelerated, Half Syllabus and Edexcel Modular courses. At
            one lesson a week, 32 lessons covers a full year, so the Year Pack is
            32 lessons (10% off) and the Semester Pack is 16 lessons (5% off). No
            15% tier applies.
          </span>
        </div>
      )}

      <p className="mt-5 max-w-3xl text-sm text-muted-foreground">
        The bigger the package, the lower the effective cost per lesson,{" "}
        <span className="font-semibold text-emerald-500">up to {maxOff} off</span>
        . Discounts apply to your whole order, so enrolling in more subjects or a
        larger pack increases your saving automatically.
      </p>

      {/* table */}
      <div className="mt-6 overflow-x-auto rounded-2xl border border-border bg-card">
        <div className="min-w-[680px]">
          {/* header */}
          <div className="grid bg-background" style={{ gridTemplateColumns: cols }}>
            <div className="p-4 text-sm font-bold">Subject</div>
            {packages.map((p) => (
              <div
                key={p.name}
                className={cn("p-4 text-center", p.highlight && "bg-white/[0.03]")}
              >
                <div
                  className={cn(
                    "text-sm font-bold",
                    p.highlight ? "text-gold" : "text-foreground"
                  )}
                >
                  {p.name}
                </div>
                <div className="mt-0.5 text-xs text-muted-foreground">
                  {p.lessons} lessons
                </div>
                {p.off > 0 && (
                  <div className="text-xs font-semibold text-emerald-500">
                    {p.off * 100}% off
                  </div>
                )}
                {p.free && (
                  <div className="text-[11px] text-muted-foreground">
                    {p.free} lessons free
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* rows */}
          {subjects.map((s, ri) => (
            <div
              key={s.name}
              className={cn(
                "grid border-t border-border",
                ri % 2 === 1 && "bg-muted/20"
              )}
              style={{ gridTemplateColumns: cols }}
            >
              <div className="p-4">
                <div className="text-sm font-bold">{s.name}</div>
                {s.upgrade && (
                  <div className="text-[11px] font-bold text-gold">↑ Upgrade</div>
                )}
                <div className="mt-0.5 text-xs text-muted-foreground">
                  KD {String(rates[s.name])}/lesson
                </div>
              </div>
              {packages.map((p) => {
                const price = rates[s.name] * p.lessons * (1 - p.off);
                return (
                  <div
                    key={p.name}
                    className={cn(
                      "p-4 text-center",
                      p.highlight && "bg-gold/[0.06]"
                    )}
                  >
                    <div
                      className={cn(
                        "text-sm font-bold",
                        p.highlight ? "text-gold" : "text-foreground"
                      )}
                    >
                      KD {fmt(price)}
                    </div>
                    <div className="mt-0.5 text-xs text-muted-foreground">
                      {p.monthly ? "/month" : "total"}
                    </div>
                  </div>
                );
              })}
            </div>
          ))}
        </div>
      </div>

      {/* footnotes */}
      <div className="mt-4 grid gap-3 sm:grid-cols-2">
        <div className="rounded-2xl border border-border bg-card px-4 py-3 text-sm text-muted-foreground">
          <span className="font-semibold text-foreground">Package totals</span>{" "}
          are the full upfront amount for all lessons, not a monthly rate.
        </div>
        <div className="rounded-2xl border border-border bg-card px-4 py-3 text-sm text-muted-foreground">
          All lessons are 2 hours. English pricing by enquiry.
        </div>
      </div>

      {level === "a2" && (
        <div className="mt-3 rounded-2xl border border-gold/30 bg-gold/[0.06] px-4 py-3 text-sm">
          <span className="font-bold text-gold">Physics Elite A2</span>{" "}
          <span className="text-muted-foreground">
            pricing exists but is not yet live. Ask us on WhatsApp for the
            latest status.
          </span>
        </div>
      )}
    </div>
  );
}
