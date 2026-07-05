import {
  Hero,
  TrustBar,
  About,
  Problem,
  Stats,
  SystemSection,
  Comparison,
  Reviews,
  PricingTeaser,
  Faq,
  FinalCta,
} from "@/components/home-sections";
import { SubjectsShowcase } from "@/components/subjects-showcase";
import { TeamCarousel } from "@/components/team-carousel";
import { site, subjects, faqs } from "@/lib/site";

// Structured data for traditional search + AI answer engines.
function JsonLd() {
  const org = {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    name: site.name,
    description: site.description,
    url: site.url,
    email: site.email,
    slogan: site.tagline,
    sameAs: Object.values(site.socials),
    areaServed: ["Kuwait", "GCC", "Worldwide"],
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      reviewCount: "3000",
      bestRating: "5",
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Courses",
      itemListElement: subjects.map((s) => ({
        "@type": "Course",
        name: `${s.name}: IGCSE & A-Level Tuition`,
        description: s.blurb,
        provider: { "@type": "EducationalOrganization", name: site.name },
      })),
    },
  };

  const faq = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(org) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faq) }}
      />
    </>
  );
}

export default function HomePage() {
  return (
    <>
      <JsonLd />
      <Hero />
      <TrustBar />
      <About />
      <Problem />
      <SubjectsShowcase />
      <Stats />
      <SystemSection />
      <Comparison />
      <TeamCarousel />
      <PricingTeaser />
      <Faq />
      <Reviews />
      <FinalCta />
    </>
  );
}
