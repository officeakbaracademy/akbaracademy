import Image from "next/image";
import { Award, FileText } from "lucide-react";

import { team, site } from "@/lib/site";
import { Container } from "@/components/container";
import { Reveal } from "@/components/reveal";

const CRED_ICONS = { badge: Award, doc: FileText };

export function TeamCarousel() {
  return (
    <section id="team" className="py-12 sm:py-16">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-gold">
            Our teachers
          </p>
          <h2 className="mt-3 font-heading text-3xl font-bold tracking-tight text-balance sm:text-4xl">
            All British qualified. All experts. All hand-picked.
          </h2>
          <p className="mt-4 text-lg text-muted-foreground text-pretty">
            Every teacher is British qualified, with deep experience across
            international schools and the Cambridge, Edexcel and AQA exam boards.
            Hand-picked by Mr Akbar to teach IGCSE, AS and A2.
          </p>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {team.map((t, i) => (
            <Reveal key={t.name} delay={(i % 3) * 80} className="h-full">
              <article className="flex h-full flex-col rounded-2xl border border-border bg-card p-6 text-center">
                {/* role pill */}
                <span className="mx-auto inline-flex items-center rounded-full bg-gold/12 px-3.5 py-1 text-[10px] font-bold uppercase tracking-[0.14em] text-gold">
                  {t.subject}
                </span>

                {/* avatar */}
                <Image
                  src={t.photo}
                  alt={t.name}
                  width={96}
                  height={96}
                  className="mx-auto mt-5 size-20 rounded-full object-cover ring-2 ring-primary/20"
                  loading="eager"
                />

                {/* name */}
                <h3 className="mt-4 font-heading text-lg font-bold tracking-tight">
                  {t.name}
                </h3>

                <hr className="mt-4 mb-5 border-border" />

                {/* credentials */}
                <ul className="space-y-3 text-left">
                  {t.credentials.map((c) => {
                    const Icon = CRED_ICONS[c.icon] ?? Award;
                    return (
                      <li key={c.text} className="flex items-start gap-2.5">
                        <Icon className="mt-0.5 size-4 shrink-0 text-gold" />
                        <span className="text-[13px] leading-relaxed text-muted-foreground">
                          {c.text}
                        </span>
                      </li>
                    );
                  })}
                </ul>
              </article>
            </Reveal>
          ))}
        </div>

        <p className="mt-10 text-center text-muted-foreground">
          Looking for a specific subject or exam board?{" "}
          <a
            href={site.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-primary hover:underline"
          >
            Ask us and we will match your child to the right teacher.
          </a>
        </p>
      </Container>
    </section>
  );
}
