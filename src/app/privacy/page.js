import { Container } from "@/components/container";
import { PageHero } from "@/components/page-hero";
import { site } from "@/lib/site";

export const metadata = {
  title: "Privacy Policy",
  description: "How Akbar Academy collects, uses and protects your information.",
};

export default function PrivacyPage() {
  return (
    <>
      <PageHero eyebrow="Legal" title="Privacy Policy" />
      <section className="py-12 sm:py-16">
        <Container className="max-w-3xl space-y-5 text-base leading-relaxed text-muted-foreground">
          <p>
            Akbar Academy respects your privacy. This page explains what
            information we collect when you enquire, register or use our
            services, and how we use it.
          </p>
          <h2 className="font-heading text-xl font-bold text-foreground">
            Information we collect
          </h2>
          <p>
            When you contact us or register, we may collect your name, your
            child&rsquo;s details, contact information, school, year group,
            subject and exam board. We use this only to assess fit, recommend a
            class, and provide the tuition and progress reporting you request.
          </p>
          <h2 className="font-heading text-xl font-bold text-foreground">
            How we use it
          </h2>
          <p>
            We use your information to deliver lessons, mark work, track
            progress and communicate with parents. We do not sell your data. We
            share it only with the staff and systems needed to run the academy.
          </p>
          <h2 className="font-heading text-xl font-bold text-foreground">
            Contact
          </h2>
          <p>
            For any privacy question, or to request a copy or deletion of your
            data, email us at{" "}
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
