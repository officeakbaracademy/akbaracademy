import { MessageCircle, Mail, MapPin, Globe } from "lucide-react";

import { site } from "@/lib/site";
import { Container } from "@/components/container";
import { PageHero } from "@/components/page-hero";
import { ButtonLink } from "@/components/button-link";
import { FinalCta } from "@/components/home-sections";

export const metadata = {
  title: "Contact",
  description:
    "Talk to Akbar Academy about IGCSE and A Level tuition. Message us on WhatsApp, email us, or book an evaluation.",
};

const METHODS = [
  {
    icon: MessageCircle,
    label: "WhatsApp",
    value: site.whatsappLabel,
    href: site.whatsapp,
    cta: "Message us",
  },
  {
    icon: Mail,
    label: "Email",
    value: site.email,
    href: `mailto:${site.email}`,
    cta: "Email us",
  },
  {
    icon: MapPin,
    label: "Onsite",
    value: "Onsite hub in Kuwait City, plus live online across the GCC",
  },
  {
    icon: Globe,
    label: "Online",
    value: "Live online lessons across Kuwait, the GCC and internationally",
  },
];

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Talk to us about your child."
        lead="Tell us the year group, school, subject and board, and we will recommend the right class and next step."
      >
        <div className="flex flex-wrap justify-center gap-3">
          <ButtonLink
            href={site.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
          >
            <MessageCircle className="size-5" />
            Message us on WhatsApp
          </ButtonLink>
          <ButtonLink variant="outline" href={site.bookEvaluation}>
            Book your evaluation
          </ButtonLink>
        </div>
      </PageHero>

      <section className="py-12 sm:py-16">
        <Container>
          <div className="grid gap-4 sm:grid-cols-2">
            {METHODS.map(({ icon: Icon, label, value, href, cta }) => (
              <div
                key={label}
                className="flex flex-col rounded-2xl border border-border bg-card p-6"
              >
                <span className="grid size-11 place-items-center rounded-xl bg-primary/10 text-primary ring-1 ring-primary/15">
                  <Icon className="size-5" />
                </span>
                <h2 className="mt-4 text-xs font-bold uppercase tracking-[0.14em] text-muted-foreground">
                  {label}
                </h2>
                <p className="mt-1 flex-1 font-semibold text-foreground/90">
                  {value}
                </p>
                {href && (
                  <a
                    href={href}
                    target={href.startsWith("http") ? "_blank" : undefined}
                    rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="mt-3 text-sm font-semibold text-primary"
                  >
                    {cta}
                  </a>
                )}
              </div>
            ))}
          </div>
        </Container>
      </section>

      <FinalCta />
    </>
  );
}
