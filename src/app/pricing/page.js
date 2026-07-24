import { PageHero } from "@/components/page-hero";
import { Pricing } from "@/components/pricing";
import { Faq, FinalCta } from "@/components/home-sections";

export const metadata = {
  title: "Pricing",
  description:
    "Transparent monthly pricing for IGCSE and A Level tuition. Online from KD 82, onsite and hybrid from KD 102. Start with a KD 49 evaluation.",
};

export default function PricingPage() {
  return (
    <>
      <PageHero
        eyebrow="Pricing"
        title="Clear, simple pricing."
        lead="Start with a low-commitment evaluation, then choose the course type that fits. All fees in Kuwaiti Dinar."
      />
      <Pricing />
      <Faq />
      <FinalCta />
    </>
  );
}
