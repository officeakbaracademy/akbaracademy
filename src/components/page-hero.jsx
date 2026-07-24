import { Container } from "@/components/container";

// Compact header used at the top of every inner page. Keeps the eyebrow/title/
// lead rhythm consistent with the homepage sections.
export function PageHero({ eyebrow, title, lead, children }) {
  return (
    <section className="relative overflow-hidden border-b border-border">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_90%_at_50%_-20%,color-mix(in_oklab,var(--primary)_14%,transparent),transparent_70%)]"
      />
      <Container className="relative py-16 text-center sm:py-20">
        {eyebrow && (
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-gold">
            {eyebrow}
          </p>
        )}
        <h1 className="mx-auto mt-3 max-w-3xl font-heading text-4xl font-extrabold tracking-tight text-balance sm:text-5xl">
          {title}
        </h1>
        {lead && (
          <p className="mx-auto mt-5 max-w-2xl text-lg text-muted-foreground text-pretty">
            {lead}
          </p>
        )}
        {children && <div className="mt-8">{children}</div>}
      </Container>
    </section>
  );
}
