import { Container } from "@/components/container";
import { Reveal } from "@/components/reveal";

const STATS = [
  { value: "5", label: "Core subjects taught by specialists" },
  { value: "3", label: "Ways to learn: onsite, hybrid, online" },
  { value: "96%", label: "Of our students reach A* to B" },
  { value: "1:1", label: "Attention inside structured group classes" },
];

const PILLS = [
  "IGCSE",
  "AS Level",
  "A Level",
  "Onsite in Kuwait",
  "Live online across the GCC",
];

export function WhoWeAre() {
  return (
    <section className="py-12 sm:py-16">
      <Container>
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center lg:gap-16">
          {/* LEFT — the positioning statement */}
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-gold">
              Who we are
            </p>
            <h2 className="mt-3 font-heading text-3xl font-extrabold tracking-tight text-balance sm:text-4xl">
              Not extra tuition. A complete academic system.
            </h2>

            <div className="mt-5 space-y-4 text-lg text-muted-foreground text-pretty">
              <p>
                Akbar Academy is a premium British curriculum academy built
                around one idea: students improve fastest when teaching,
                practice, marking and feedback all work together. We are not a
                drop in tuition centre and we are not about handing out past
                papers. We teach, we track, and we show parents real progress
                every week.
              </p>
              <p>
                Founded and led by published Physics author Mr Kaleem Akbar, our
                teachers are British qualified subject specialists. We serve
                families in Kuwait face to face, and students across the GCC
                through hybrid and live online classes.
              </p>
            </div>

            <div className="mt-7 flex flex-wrap gap-2">
              {PILLS.map((p) => (
                <span
                  key={p}
                  className="rounded-full bg-primary/10 px-3.5 py-1.5 text-sm font-semibold text-primary"
                >
                  {p}
                </span>
              ))}
            </div>
          </Reveal>

          {/* RIGHT — the numbers */}
          <Reveal delay={120}>
            <div className="grid gap-4 sm:grid-cols-2">
              {STATS.map((s) => (
                <div
                  key={s.label}
                  className="overflow-hidden rounded-2xl border border-border bg-card"
                >
                  <div
                    aria-hidden
                    className="h-1 bg-gradient-to-r from-primary to-gold"
                  />
                  <div className="p-6">
                    <div className="font-heading text-3xl font-extrabold leading-none text-primary">
                      {s.value}
                    </div>
                    <p className="mt-2.5 text-sm leading-relaxed text-muted-foreground text-pretty">
                      {s.label}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
