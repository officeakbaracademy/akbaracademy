import { PageHero } from "@/components/page-hero";
import { Proof } from "@/components/proof";
import { Reviews, FinalCta } from "@/components/home-sections";
import { trustpilotStats } from "@/lib/site";

export const metadata = {
  title: "Reviews & Results",
  description:
    "Rated 4.9 on Trustpilot. Real results and reviews from Akbar Academy parents and students across Kuwait and the GCC.",
};

export default function ReviewsPage() {
  return (
    <>
      <PageHero
        eyebrow="Reviews & results"
        title="Results that speak for themselves."
        lead={`Rated ${trustpilotStats.score} out of 5 on Trustpilot from ${trustpilotStats.count} reviews. Here is what families say, and the results behind it.`}
      />
      <Proof />
      <Reviews />
      <FinalCta />
    </>
  );
}
