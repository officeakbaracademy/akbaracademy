import { PageHero } from "@/components/page-hero";
import { WhyUs } from "@/components/why-us";
import { SystemSection, FinalCta } from "@/components/home-sections";
import { WhyAkbar } from "@/components/why-akbar";
import { Values } from "@/components/values";
import { TeamGrid } from "@/components/team-grid";

export const metadata = {
  title: "About Akbar Academy",
  description:
    "A premium British curriculum academy for IGCSE and A Level students across Kuwait and the GCC, led by published Physics author Mr Kaleem Akbar.",
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About us"
        title="Not extra tuition. A complete academic system."
        lead="Akbar Academy was built on one belief: students improve fastest when teaching, practice, marking and feedback work as one system, not as scattered lessons."
      />
      <WhyUs />
      <SystemSection />
      <Values />
      <WhyAkbar />
      <TeamGrid />
      <FinalCta />
    </>
  );
}
