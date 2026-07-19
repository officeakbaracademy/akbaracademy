import Image from "next/image";
import { ArrowRight, Download } from "lucide-react";

import { Container } from "@/components/container";
import { Reveal } from "@/components/reveal";
import { ButtonLink } from "@/components/button-link";

const AMAZON = "https://www.amazon.com/s?k=kaleem+akbar";

const BOOKS = [
  {
    img: "/assets/book-1.png",
    logo: "/assets/book-logo-cambridge.png",
    alt: "Cambridge IGCSE Physics book by Kaleem Akbar",
  },
  {
    img: "/assets/book-2.png",
    logo: "/assets/book-logo-edexcel.png",
    alt: "Edexcel IGCSE Physics book by Kaleem Akbar",
  },
  {
    img: "/assets/book-3.png",
    logo: "/assets/book-logo-aqa.png",
    alt: "Oxford AQA Physics Unpacked by Kaleem Akbar",
  },
];

export function Resources() {
  return (
    <section id="resources" className="py-12 sm:py-16">
      <Container>
        <Reveal className="bg-brand-blue overflow-hidden rounded-[2rem] px-6 py-12 ring-1 ring-white/10 sm:px-10 sm:py-14">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-gold">
              Resources &amp; books
            </p>
            <h2 className="mt-3 font-heading text-3xl font-bold tracking-tight text-balance text-white sm:text-4xl">
              Physics, written and endorsed.
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-lg text-white/70 text-pretty">
              Our founder&rsquo;s IGCSE Physics books are endorsed by Cambridge,
              Edexcel and Oxford AQA, with free weekly resources on top.
            </p>
          </div>

          <div className="mx-auto mt-10 grid max-w-4xl gap-x-6 gap-y-10 sm:grid-cols-3">
            {BOOKS.map((b) => (
              <a
                key={b.img}
                href={AMAZON}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col items-center text-center"
              >
                {/* small book cover */}
                <div className="flex h-40 w-full items-end justify-center">
                  <Image
                    src={b.img}
                    alt={b.alt}
                    width={300}
                    height={240}
                    className="max-h-40 w-auto object-contain transition-transform duration-300 group-hover:-translate-y-1.5"
                    unoptimized
                  />
                </div>

                <div className="mt-2 flex h-16 w-full items-center justify-center">
                  <Image
                    src={b.logo}
                    alt="Endorsement logo"
                    width={260}
                    height={260}
                    className="max-h-12 w-auto max-w-[95%] object-contain"
                    unoptimized
                  />
                </div>
              </a>
            ))}
          </div>
        </Reveal>

        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <ButtonLink size="lg" className="h-11 px-6" href="/resources">
            Free weekly physics resources
            <ArrowRight className="size-4" />
          </ButtonLink>
          <ButtonLink
            variant="outline"
            size="lg"
            className="h-11 px-6"
            href="/resources"
          >
            <Download className="size-5" />
            Download the exams black book
          </ButtonLink>
        </div>
      </Container>
    </section>
  );
}
