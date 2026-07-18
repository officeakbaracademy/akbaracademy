import Image from "next/image";

import { Container } from "@/components/container";
import { Reveal } from "@/components/reveal";

const MODES = [
  {
    tag: "Kuwait",
    title: "Onsite in Kuwait",
    desc: "Face to face classes in our academy classrooms, with the focus and structure of a real learning environment.",
    image: "/assets/learn-onsite.jpg",
    alt: "Students in an onsite Akbar Academy classroom in Kuwait",
  },
  {
    tag: "Flexible",
    title: "Hybrid",
    desc: "Attend in person when you can and join live online when you cannot. Never miss the momentum of the class.",
    image: "/assets/learn-hybrid.jpg",
    alt: "Akbar Academy hybrid lesson, an onsite class joined by students live online across the GCC",
  },
  {
    tag: "GCC",
    title: "Live online across the GCC",
    desc: "Real, live teaching from home anywhere in the GCC. Fully interactive, fully tracked, never pre recorded.",
    image: "/assets/learn-online.jpg",
    alt: "An Akbar Academy teacher delivering a live online lesson across the GCC",
  },
];

function Tag({ children }) {
  return (
    <span className="absolute left-4 top-4 z-10 rounded-full bg-white/95 px-3 py-1 text-xs font-bold text-[#191919] backdrop-blur">
      {children}
    </span>
  );
}

export function LearningModes() {
  return (
    <section className="py-12 sm:py-16">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-gold">
            Ways to learn
          </p>
          <h2 className="mt-3 font-heading text-3xl font-bold tracking-tight text-balance sm:text-4xl">
            Choose how your child studies.
          </h2>
          <p className="mt-4 text-lg text-muted-foreground text-pretty">
            The same teachers, the same system, delivered in the format that
            fits your family.
          </p>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {MODES.map((m, i) => (
            <Reveal key={m.title} delay={i * 90} className="h-full">
              <div className="flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card">
                {/* Media */}
                <div className="relative aspect-[16/10] w-full">
                  <Tag>{m.tag}</Tag>
                  <Image
                    src={m.image}
                    alt={m.alt}
                    fill
                    sizes="(max-width:768px) 100vw, 400px"
                    className="object-cover"
                    loading="eager"
                    unoptimized
                  />
                </div>

                {/* Body */}
                <div className="flex flex-1 flex-col p-6">
                  <h3 className="font-heading text-xl font-bold tracking-tight">
                    {m.title}
                  </h3>
                  <p className="mt-2.5 flex-1 text-[15px] leading-relaxed text-muted-foreground text-pretty">
                    {m.desc}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
