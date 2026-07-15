import Link from "next/link";

import { Container } from "@/components/container";
import { Logo } from "@/components/logo";
import { subjects, resourceCategories, site } from "@/lib/site";

// Brand icons (lucide v1 dropped these), sourced from the prototype.
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
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="size-4">
    <path d={path} />
  </svg>
);

const socialLinks = [
  { href: site.socials.facebook, label: "Facebook", path: SOCIAL_PATHS.facebook },
  { href: site.socials.instagram, label: "Instagram", path: SOCIAL_PATHS.instagram },
  { href: site.socials.tiktok, label: "TikTok", path: SOCIAL_PATHS.tiktok },
  { href: site.socials.x, label: "X", path: SOCIAL_PATHS.x },
  { href: site.socials.youtube, label: "YouTube", path: SOCIAL_PATHS.youtube },
  { href: site.socials.linkedin, label: "LinkedIn", path: SOCIAL_PATHS.linkedin },
];

function FooterCol({ title, links }) {
  return (
    <div>
      <h3 className="mb-3 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
        {title}
      </h3>
      <ul className="space-y-2">
        {links.map((l) => (
          <li key={l.href}>
            <Link
              href={l.href}
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              {l.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-background">
      <Container className="py-14">
        <div className="grid grid-cols-2 gap-10 md:grid-cols-4 lg:grid-cols-6">
          <div className="col-span-2 lg:col-span-2">
            <Logo />
            <p className="mt-4 max-w-xs text-sm text-muted-foreground">
              Premium IGCSE &amp; A-Level tuition across the GCC &amp; Kuwait.
              British-qualified examiners and a proven system. {site.tagline}
            </p>
            <div className="mt-5 flex gap-2">
              {socialLinks.map(({ href, label, path }) => (
                <Link
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="grid size-9 place-items-center rounded-full border border-border text-muted-foreground transition-colors hover:border-primary hover:text-primary"
                >
                  <SocialIcon path={path} />
                </Link>
              ))}
            </div>
            <div className="mt-5 flex flex-wrap gap-2">
              <Link
                href={site.apps.ios}
                className="rounded-lg border border-border px-3 py-1.5 text-xs font-medium transition-colors hover:border-foreground/30"
              >
                App Store
              </Link>
              <Link
                href={site.apps.android}
                className="rounded-lg border border-border px-3 py-1.5 text-xs font-medium transition-colors hover:border-foreground/30"
              >
                Google Play
              </Link>
            </div>
          </div>

          <FooterCol
            title="Courses"
            links={subjects.map((s) => ({
              href: `/courses/${s.slug}`,
              label: s.name,
            }))}
          />
          <FooterCol
            title="Resources"
            links={resourceCategories
              .slice(0, 5)
              .map((r) => ({ href: `/resources/${r.slug}`, label: r.name }))}
          />
          <FooterCol
            title="Company"
            links={[
              { href: "/about", label: "About" },
              { href: "/pricing", label: "Pricing" },
              { href: "/reviews", label: "Reviews" },
              { href: "/past-papers", label: "Past Papers" },
              { href: "/contact", label: "Contact" },
              { href: "/faq", label: "FAQs" },
            ]}
          />
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-border pt-6 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {site.name}, {site.tagline} Kuwait City
            &amp; Scotland, UK
          </p>
          <div className="flex gap-5">
            <Link href="/privacy" className="hover:text-foreground">
              Privacy
            </Link>
            <Link href="/terms" className="hover:text-foreground">
              Terms
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}
