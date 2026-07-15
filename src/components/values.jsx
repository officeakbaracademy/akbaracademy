import { Container } from "@/components/container";
import { Reveal } from "@/components/reveal";

// The principles Akbar Academy is built on, written as a plain manifesto
// rather than a grid of identical cards.
const VALUES = [
  {
    title: "Clarity over confusion",
    desc: "A student should always know where they stand and what to do next. No vague reassurance, no guessing.",
  },
  {
    title: "Effort has to show up in the grades",
    desc: "Hours at the desk mean nothing on their own. If the work is real, the progress should be visible and measurable.",
  },
  {
    title: "Taught by specialists, never generalists",
    desc: "Physics is taught by a physicist, chemistry by a chemist. We do not hand a subject to whoever is free.",
  },
  {
    title: "Parents get the truth",
    desc: "Honest reporting, even when it is not the easy conversation. You cannot fix what nobody will name.",
  },
  {
    title: "Students are held to their word",
    desc: "Accountability is part of the teaching. Commitments are followed up, week after week.",
  },
  {
    title: "One standard, every teacher",
    desc: "The bar does not move depending on who walks into the room. Same rigour across the whole academy.",
  },
  {
    title: "We step in early",
    desc: "The moment a student starts slipping, we act. We do not wait for a failed mock to prove there was a problem.",
  },
  {
    title: "Beyond what they think they can do",
    desc: "Passing is the floor, not the goal. The real work is moving a student past the ceiling they set for themselves.",
  },
];

export function Values() {
  return (
    <section className="py-14 sm:py-20">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[minmax(0,4fr)_minmax(0,6fr)] lg:gap-16">
          {/* LEFT — intro, sticky on desktop */}
          <div className="lg:sticky lg:top-28 lg:self-start">
            <Reveal>
              <p className="font-heading text-sm font-semibold text-gold">
                What we believe
              </p>
              <h2 className="mt-4 font-heading text-3xl font-extrabold leading-[1.1] tracking-tight text-balance sm:text-4xl lg:text-[2.75rem]">
                A timetable of subjects is the easy part.
              </h2>
              <p className="mt-5 max-w-md text-lg leading-relaxed text-muted-foreground text-pretty">
                What actually changes a student&rsquo;s year is what the people
                teaching them believe, and refuse to compromise on. These are
                ours.
              </p>
              <p className="mt-8 border-l-2 border-gold/60 pl-4 text-[15px] italic leading-relaxed text-foreground/80">
                &ldquo;I built the academy I wished existed when I started
                teaching.&rdquo;
                <span className="mt-1.5 block text-sm font-semibold not-italic text-muted-foreground">
                  Mr Kaleem Akbar, Founder
                </span>
              </p>
            </Reveal>
          </div>

          {/* RIGHT — numbered manifesto list */}
          <ol className="lg:pt-2">
            {VALUES.map((v, i) => (
              <Reveal
                key={v.title}
                delay={i * 40}
                as="li"
                className="flex gap-5 border-t border-border py-6 first:border-t-0 first:pt-0 sm:gap-7"
              >
                <span className="font-heading text-2xl font-bold tabular-nums text-primary/40 sm:text-3xl">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div className="pt-0.5">
                  <h3 className="font-heading text-lg font-bold tracking-tight sm:text-xl">
                    {v.title}
                  </h3>
                  <p className="mt-1.5 leading-relaxed text-muted-foreground text-pretty">
                    {v.desc}
                  </p>
                </div>
              </Reveal>
            ))}
          </ol>
        </div>
      </Container>
    </section>
  );
}
