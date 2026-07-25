import Image from "next/image";
import Link from "next/link";
import {
  MessageCircle,
  Mail,
  MapPin,
  Phone,
  ArrowUpRight,
  ArrowRight,
  Star,
} from "lucide-react";

import { site, locations, tickerReviews, trustpilotStats } from "@/lib/site";
import { Container } from "@/components/container";
import { ContactForm } from "@/components/contact-form";
import { FinalCta } from "@/components/home-sections";

export const metadata = {
  title: "Contact",
  description:
    "Talk to Akbar Academy about IGCSE and A Level tuition. Message us on WhatsApp, email us, call our Kuwait or UK office, or send us a message.",
};

// Brand glyphs (lucide v1 dropped these), same paths the footer uses.
const SOCIAL_PATHS = {
  facebook:
    "M24 12.07C24 5.4 18.63 0 12 0S0 5.4 0 12.07c0 6 4.39 10.97 10.13 11.87v-8.4H7.08v-3.47h3.05V9.41c0-3 1.79-4.67 4.53-4.67 1.31 0 2.69.24 2.69.24v2.95h-1.52c-1.49 0-1.96.93-1.96 1.87v2.25h3.33l-.53 3.47h-2.8v8.4C19.61 23.04 24 18.07 24 12.07z",
  instagram:
    "M12 2.16c3.2 0 3.58.01 4.85.07 3.25.15 4.77 1.69 4.92 4.92.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.15 3.23-1.66 4.77-4.92 4.92-1.27.06-1.64.07-4.85.07s-3.58-.01-4.85-.07c-3.26-.15-4.77-1.7-4.92-4.92-.06-1.27-.07-1.64-.07-4.85s.01-3.58.07-4.85C2.38 3.93 3.9 2.38 7.15 2.23 8.42 2.17 8.8 2.16 12 2.16zM12 0C8.74 0 8.33.01 7.05.07 2.7.27.27 2.69.07 7.05.01 8.33 0 8.74 0 12s.01 3.67.07 4.95c.2 4.36 2.62 6.78 6.98 6.98C8.33 23.99 8.74 24 12 24s3.67-.01 4.95-.07c4.35-.2 6.78-2.62 6.98-6.98.06-1.28.07-1.69.07-4.95s-.01-3.67-.07-4.95c-.2-4.35-2.62-6.78-6.98-6.98C15.67.01 15.26 0 12 0zm0 5.84a6.16 6.16 0 100 12.32 6.16 6.16 0 000-12.32zM12 16a4 4 0 110-8 4 4 0 010 8zm6.41-11.85a1.44 1.44 0 100 2.88 1.44 1.44 0 000-2.88z",
  tiktok:
    "M16.6 5.82a4.28 4.28 0 01-1.75-3.55V2h-3.4v13.67a2.45 2.45 0 11-2.45-2.45c.26 0 .5.04.74.12V9.86a5.86 5.86 0 00-.74-.05A5.86 5.86 0 1014 15.67V8.6a7.65 7.65 0 004.46 1.43V6.6a4.28 4.28 0 01-1.86-.78z",
  x: "M18.24 2.25h3.31l-7.23 8.26L23.13 21.75h-6.66l-5.21-6.82-5.96 6.82H1.99l7.73-8.84L.88 2.25h6.82l4.71 6.23 5.83-6.23zm-1.16 17.52h1.83L7.01 4.13H5.05L17.08 19.77z",
  youtube:
    "M23.5 6.19a3.02 3.02 0 00-2.12-2.14C19.5 3.55 12 3.55 12 3.55s-7.5 0-9.38.5A3.02 3.02 0 00.5 6.19C0 8.07 0 12 0 12s0 3.93.5 5.81a3.02 3.02 0 002.12 2.14c1.88.5 9.38.5 9.38.5s7.5 0 9.38-.5a3.02 3.02 0 002.12-2.14C24 15.93 24 12 24 12s0-3.93-.5-5.81zM9.55 15.57V8.43L15.82 12l-6.27 3.57z",
  linkedin:
    "M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 110-4.13 2.06 2.06 0 010 4.13zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0z",
};

const SocialIcon = ({ path }) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    aria-hidden="true"
    className="size-4"
  >
    <path d={path} />
  </svg>
);

const SOCIALS = [
  { label: "Instagram", href: site.socials.instagram, path: SOCIAL_PATHS.instagram },
  { label: "Facebook", href: site.socials.facebook, path: SOCIAL_PATHS.facebook },
  { label: "YouTube", href: site.socials.youtube, path: SOCIAL_PATHS.youtube },
  { label: "TikTok", href: site.socials.tiktok, path: SOCIAL_PATHS.tiktok },
  { label: "LinkedIn", href: site.socials.linkedin, path: SOCIAL_PATHS.linkedin },
  { label: "X", href: site.socials.x, path: SOCIAL_PATHS.x },
];

const QUICK = [
  {
    icon: MessageCircle,
    label: "WhatsApp",
    value: site.whatsappLabel,
    sub: "Fastest reply",
    href: site.whatsapp,
    external: true,
  },
  {
    icon: Mail,
    label: "Email",
    value: site.email,
    sub: "Any time",
    href: `mailto:${site.email}`,
    external: false,
  },
];

// A curated four from the review library, shown in a calmer quote style.
const REVIEWS = [tickerReviews[2], tickerReviews[1], tickerReviews[4]];

export default function ContactPage() {
  return (
    <>
      {/* Hero band with background photograph, like the homepage */}
      <section className="relative overflow-hidden pb-14 pt-14 text-white sm:pb-16 sm:pt-16">
        <div aria-hidden className="absolute inset-0">
          <Image
            src="/assets/why-us-bg.jpg"
            alt=""
            fill
            sizes="100vw"
            className="object-cover object-center"
            priority
            unoptimized
          />
          <div className="absolute inset-0 bg-black/80" />
        </div>

        <Container className="relative">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-gold">
              Contact
            </p>
            <h1 className="mt-4 font-heading text-4xl font-extrabold leading-[1.05] tracking-tight text-balance sm:text-5xl">
              Get in touch.{" "}
              <span className="text-primary">We&rsquo;re here to help.</span>
            </h1>
            <p className="mx-auto mt-4 max-w-xl text-lg leading-relaxed text-white/80 text-pretty">
              Whether you are a parent, student or teacher, tell us the year
              group, subject and board and we will point you to the right class.
            </p>
          </div>
        </Container>
      </section>

      {/* Two-column contact card below the hero */}
      <section
        className="pb-12 sm:pb-16"
        style={{ backgroundColor: "var(--background)" }}
      >
        <Container>
          <div className="mx-auto mt-10 max-w-6xl sm:mt-14">
            <div className="rounded-3xl border border-border bg-card p-6 shadow-2xl shadow-black/10 sm:p-8 lg:p-10">
              <div className="grid gap-10 lg:grid-cols-2 lg:gap-14">
                {/* Left — pitch + contact details */}
                <div className="flex flex-col">
                  <h2 className="font-heading text-3xl font-extrabold leading-[1.1] tracking-tight text-balance sm:text-4xl">
                    Let&rsquo;s find the right class{" "}
                    <span className="text-primary">for your child.</span>
                  </h2>
                  <p className="mt-4 text-muted-foreground text-pretty">
                    Have questions or need guidance? We&rsquo;re here to help.
                    Tell us the year group, subject and board, and we will
                    recommend the right class and next step.
                  </p>

                  <div className="mt-8 flex flex-col gap-4">
                    {QUICK.map(
                      ({ icon: Icon, label, value, href, external }) => (
                        <a
                          key={label}
                          href={href}
                          target={external ? "_blank" : undefined}
                          rel={external ? "noopener noreferrer" : undefined}
                          className="group flex items-start gap-3"
                        >
                          <Icon className="mt-0.5 size-4 shrink-0 text-primary" />
                          <span className="min-w-0">
                            <span className="block text-[11px] font-semibold uppercase tracking-[0.14em] text-muted-foreground">
                              {label}
                            </span>
                            <span className="block break-all text-sm font-medium text-foreground/90 transition-colors group-hover:text-primary">
                              {value}
                            </span>
                          </span>
                        </a>
                      )
                    )}
                    {locations.map((loc) => (
                      <a
                        key={loc.country}
                        href={loc.map}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group flex items-start gap-3"
                      >
                        <MapPin className="mt-0.5 size-4 shrink-0 text-primary" />
                        <span className="min-w-0">
                          <span className="block text-[11px] font-semibold uppercase tracking-[0.14em] text-muted-foreground">
                            {loc.country}
                          </span>
                          <span className="block text-sm font-medium text-foreground/90 transition-colors group-hover:text-primary">
                            {loc.lines.join(", ")}
                          </span>
                        </span>
                      </a>
                    ))}
                  </div>

                  <div className="mt-auto pt-8">
                    <p className="text-xs font-bold uppercase tracking-[0.16em] text-muted-foreground">
                      Follow us
                    </p>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {SOCIALS.map((s) => (
                        <a
                          key={s.label}
                          href={s.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={s.label}
                          title={s.label}
                          className="grid size-10 place-items-center rounded-full border border-border text-foreground/80 transition-colors hover:border-primary/40 hover:bg-primary hover:text-white"
                        >
                          <SocialIcon path={s.path} />
                        </a>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Right — form */}
                <div className="lg:border-l lg:border-border lg:pl-14">
                  <ContactForm />
                </div>
              </div>
            </div>
          </div>

          {/* Offices with maps */}
          <div className="mt-6 grid gap-6 sm:grid-cols-2">
            {locations.map((loc) => (
              <div
                key={loc.country}
                className="flex flex-col overflow-hidden rounded-3xl border border-border bg-card"
              >
                <iframe
                  title={`Map of ${loc.country} office`}
                  src={loc.mapEmbed}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="h-52 w-full border-0"
                />
                <div className="flex flex-1 flex-col p-6">
                  <div className="flex items-center gap-2">
                    <MapPin className="size-5 shrink-0 text-primary" />
                    <p className="font-heading text-lg font-bold">
                      {loc.country}
                    </p>
                  </div>
                  <address className="mt-3 flex-1 text-sm not-italic leading-relaxed text-muted-foreground">
                    {loc.lines.map((line) => (
                      <span key={line} className="block">
                        {line}
                      </span>
                    ))}
                  </address>
                  <div className="mt-4 flex flex-wrap items-center gap-x-5 gap-y-2">
                    <a
                      href={loc.phoneHref}
                      className="inline-flex items-center gap-2 text-sm font-semibold text-foreground/90 hover:text-primary"
                    >
                      <Phone className="size-4 text-primary" />
                      {loc.phone}
                    </a>
                    <a
                      href={loc.map}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-sm font-semibold text-primary"
                    >
                      Get directions
                      <ArrowUpRight className="size-4" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Social proof — a curated few, in a calm quote style */}
      <section className="pb-14 sm:pb-20" style={{ backgroundColor: "var(--background)" }}>
        <Container>
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-gold">
              What families say
            </p>
            <h2 className="mt-3 font-heading text-2xl font-bold tracking-tight text-balance sm:text-3xl">
              Trusted by parents and students.
            </h2>
            <p className="mt-3 text-muted-foreground">
              Rated {trustpilotStats.score} out of 5 on Trustpilot from{" "}
              {trustpilotStats.count} reviews.
            </p>
          </div>

          <div className="mx-auto mt-12 grid max-w-5xl gap-5 sm:grid-cols-3">
            {REVIEWS.map((r) => (
              <figure
                key={r.name}
                className="flex flex-col overflow-hidden rounded-2xl bg-[#0f1720] ring-1 ring-white/10"
              >
                <div className="h-1.5 bg-gold" />
                <div className="flex flex-1 flex-col p-6">
                  <div className="flex gap-1 text-gold">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} className="size-4 fill-current" />
                    ))}
                  </div>
                  <div className="mt-4 font-heading text-base font-bold text-white">
                    {r.title}
                  </div>
                  <blockquote className="mt-2 flex-1 text-sm leading-relaxed text-white/70 text-pretty">
                    {r.quote}
                  </blockquote>
                  <figcaption className="mt-5 text-sm">
                    <span className="font-semibold text-white">{r.name}</span>
                    <span className="text-white/40"> · </span>
                    <span className="text-white/50">{r.location}</span>
                  </figcaption>
                </div>
              </figure>
            ))}
          </div>

          <div className="mt-10 text-center">
            <Link
              href="/reviews"
              className="group inline-flex items-center gap-1.5 text-sm font-semibold text-primary"
            >
              Read all reviews
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
            </Link>
          </div>
        </Container>
      </section>

      <FinalCta />
    </>
  );
}
