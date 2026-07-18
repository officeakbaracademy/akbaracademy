import Image from "next/image";

import { Container } from "@/components/container";

// Exam board wordmarks under the hero. The band is dark in both themes so the
// white Cambridge and Edexcel marks read cleanly: a rich brand blue in light
// mode, deep navy in dark mode. AQA's dark-purple artwork is knocked to white.
// Logos are always white. Cambridge and Edexcel artwork is already white; AQA's
// dark-purple artwork is knocked to white. The band stays a deep, vibrant
// electric blue so the white marks read cleanly.
const BOARDS = [
  {
    src: "/assets/book-logo-cambridge-mark.png",
    alt: "Cambridge International Examinations",
    filter: "",
  },
  {
    src: "/assets/book-logo-edexcel-mark.png",
    alt: "Edexcel",
    filter: "",
  },
  {
    src: "/assets/aqa.svg",
    alt: "AQA",
    filter: "brightness-0 invert",
  },
];

export function BoardStrip() {
  return (
    <section className="relative overflow-hidden border-y border-white/10 bg-[linear-gradient(135deg,#0f8fd4,#0b6ba4_55%,#0a5688)] dark:bg-[linear-gradient(to_bottom,#102a48,#0b1c30)]">
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
                className={`h-8 w-auto object-contain sm:h-9 ${b.filter}`}
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
