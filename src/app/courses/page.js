import { PageHero } from "@/components/page-hero";
import { SubjectsShowcase } from "@/components/subjects-showcase";
import { LearningModes } from "@/components/learning-modes";
import { WeekToWeek } from "@/components/week-to-week";
import { FinalCta } from "@/components/home-sections";

export const metadata = {
  title: "Courses",
  description:
    "IGCSE, AS and A Level courses in Physics, Chemistry, Biology, Maths and English, across Cambridge, Edexcel and AQA.",
};

export default function CoursesPage() {
  return (
    <>
      <PageHero
        eyebrow="Courses"
        title="Five subjects, one proven system."
        lead="The same structured method behind every subject, each taught by a specialist who knows exactly what the boards reward."
      />
      <SubjectsShowcase />
      <LearningModes />
      <WeekToWeek />
      <FinalCta />
    </>
  );
}
