import Image from "next/image";

import { Container } from "@/components/container";

// Exam board wordmarks under the hero, on the Electric band. Logos are always
// white: Cambridge and Edexcel artwork already is, AQA's dark purple is knocked
// to white.
//
// Each mark gets its OWN height rather than one shared size, because their
// proportions differ a lot (aspect ratios 5.21 / 5.41 / 2.82). At a single
// height AQA renders roughly half the width of the others and the row looks
// lopsided, so it is set taller to even out the visual weight.
const BOARDS = [
  {
    src: "/assets/book-logo-cambridge-mark.png",
    alt: "Cambridge International Examinations",
    filter: "",
    size: "h-9 sm:h-10 mt-1", // wide two-line lockup with crest
  },
  {
    src: "/assets/book-logo-edexcel-mark.png",
    alt: "Edexcel",
    filter: "",
    size: "h-8 sm:h-9 -pt-2", // widest mark, so slightly shorter
  },
  {
    src: "/assets/aqa.svg",
    alt: "AQA",
    filter: "brightness-0 invert",
    size: "h-11 sm:h-12 -pt-2", // most compact mark, needs height to match presence
  },
];

export function BoardStrip() {
  return (
    <section className="surface-electric relative overflow-hidden border-y border-white/10">
      {/* electric-blob glow in the top-left corner, echoing the hero blob and
          kept clear of the logos so they stay readable */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(38%_130%_at_6%_-25%,rgba(2,186,253,0.6),transparent_66%)] dark:bg-[radial-gradient(60%_140%_at_50%_0%,rgba(2,186,253,0.16),transparent_70%)]"
      />

      <Container className="relative z-10">
        <div className="flex flex-col items-center justify-center gap-6 py-8 lg:flex-row lg:gap-10">
          <p className="max-w-[14rem] text-center text-[11px] font-bold uppercase leading-relaxed tracking-[0.18em] text-white/75 lg:text-right">
            Aligned to the boards your school follows
          </p>

          <span
            aria-hidden
            className="hidden h-12 w-px shrink-0 bg-white/25 lg:block"
          />

          <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-6 sm:gap-x-14">
            {BOARDS.map((b) => (
              <Image
                key={b.alt}
                src={b.src}
                alt={b.alt}
                width={200}
                height={62}
                className={`w-auto object-contain ${b.size} ${b.filter}`}
                loading="eager"
                unoptimized
              />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
