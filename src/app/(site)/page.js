import { getAllCourses, getCategories, getCourseBySlug } from "@/lib/api/courses";
import { getLandingContent } from "@/lib/api/landing";
import { getLearnersByIds } from "@/lib/api/learners";
import CtaBanner from "@/sections/common/CtaBanner";
import CreateManageSection from "@/sections/landing/CreateManageSection";
import FeaturedCourses from "@/sections/landing/FeaturedCourses";
import GrowthSection from "@/sections/landing/GrowthSection";
import LandingHero from "@/sections/landing/LandingHero";
import LearningPaths from "@/sections/landing/LearningPaths";
import PartnerLogos from "@/sections/landing/PartnerLogos";
import ShowcaseBackdrop from "@/sections/landing/ShowcaseBackdrop";

export default async function HomePage() {
  const content = await getLandingContent();
  const [happyStudents, courses, categories, showcaseCourse] = await Promise.all([
    getLearnersByIds(content.hero.happyStudents.learnerIds),
    getAllCourses(),
    getCategories(),
    getCourseBySlug(content.growth.showcaseCourseSlug),
  ]);

  return (
    <main id="main" className="flex-1">
      <LandingHero content={content.hero} happyStudents={happyStudents} />
      <PartnerLogos partners={content.partners} />
      <FeaturedCourses
        content={content.featuredCourses}
        courses={courses}
        categories={categories}
      />
      <LearningPaths content={content.learningPaths} />
      <ShowcaseBackdrop>
        <GrowthSection content={content.growth} course={showcaseCourse} />
        <CreateManageSection
          content={content.createManage}
          happyStudents={content.hero.happyStudents}
          people={happyStudents}
        />
      </ShowcaseBackdrop>
      <CtaBanner {...content.creatorCta} />
    </main>
  );
}
