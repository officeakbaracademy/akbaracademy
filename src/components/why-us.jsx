import Image from "next/image";

import { Container } from "@/components/container";
import { Reveal } from "@/components/reveal";

// The Three Uniques from the knowledge base.
const REASONS = [
  {
    title: "Exam author expertise",
    desc: "Led by a published Physics author who teaches exactly how marks are won and lost, not just the syllabus.",
  },
  {
    title: "A live performance system",
    desc: "Every student is taught, set work, marked and tracked, so parents see real progress week after week.",
  },
  {
    title: "Measured, proven results",
    desc: "Structured, feedback driven teaching makes improvement measurable, so students move up grade boundaries.",
  },
];

export function WhyUs() {
  return (
    <section className="relative overflow-hidden py-12 sm:py-16">
      {/* background photograph + overlay */}
      <div aria-hidden className="absolute inset-0">
        <Image
          src="/assets/why-us-bg.jpg"
          alt=""
          fill
          sizes="100vw"
          className="object-cover object-center"
          loading="eager"
          unoptimized
        />
        <div className="absolute inset-0 bg-black/80" />
      </div>

      <Container className="relative">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-gold">
            Why Akbar Academy
          </p>
          <h2 className="mt-3 font-heading text-3xl font-bold tracking-tight text-balance text-white sm:text-4xl">
            Three reasons families choose us.
          </h2>
          <p className="mt-4 text-lg text-white/85 text-pretty">
            What sets us apart is not more hours. It is a smarter, exam trained
            approach to how those hours are used.
          </p>
        </div>

        <div className="mt-14 grid md:grid-cols-3">
          {REASONS.map(({ title, desc }, i) => (
            <Reveal
              key={title}
              delay={i * 90}
              className="border-t border-white/15 py-8 first:border-t-0 md:border-l md:border-t-0 md:px-8 md:py-0 md:first:border-l-0 md:first:pl-0 md:last:pr-0"
            >
              <h3 className="font-heading text-xl font-bold tracking-tight text-white">
                {title}
              </h3>
              <p className="mt-3 text-[15px] leading-relaxed text-white/75 text-pretty">
                {desc}
              </p>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
