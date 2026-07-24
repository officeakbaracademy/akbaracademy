import { Container } from "@/components/container";
import { PageHero } from "@/components/page-hero";
import { site } from "@/lib/site";

export const metadata = {
  title: "Terms & Conditions",
  description: "The terms that apply when you use Akbar Academy services.",
};

export default function TermsPage() {
  return (
    <>
      <PageHero eyebrow="Legal" title="Terms & Conditions" />
      <section className="py-12 sm:py-16">
        <Container className="max-w-3xl space-y-5 text-base leading-relaxed text-muted-foreground">
          <p>
            These terms apply when you register for or use Akbar Academy
            services. By booking an evaluation or enrolling, you agree to them.
          </p>
          <h2 className="font-heading text-xl font-bold text-foreground">
            Evaluation and enrolment
          </h2>
          <p>
            We do not offer free trials. New students begin with a paid
            evaluation session, which secures a place and helps us confirm the
            right class and level. Course fees are billed monthly and are due in
            advance of the teaching month.
          </p>
          <h2 className="font-heading text-xl font-bold text-foreground">
            Attendance and resources
          </h2>
          <p>
            Access to lessons, recordings and resources is provided for the
            enrolled student only and may not be shared or redistributed.
          </p>
          <h2 className="font-heading text-xl font-bold text-foreground">
            Contact
          </h2>
          <p>
            For any question about these terms, email us at{" "}
            <a href={`mailto:${site.email}`} className="font-semibold text-primary">
              {site.email}
            </a>
            .
          </p>
        </Container>
      </section>
    </>
  );
}
