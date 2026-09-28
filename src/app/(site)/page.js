import { getAllCourses, getCategories } from "@/lib/api/courses";
import { getLandingContent } from "@/lib/api/landing";
import { getLearnersByIds } from "@/lib/api/learners";
import FeaturedCourses from "@/sections/landing/FeaturedCourses";
import LandingHero from "@/sections/landing/LandingHero";
import PartnerLogos from "@/sections/landing/PartnerLogos";

export default async function HomePage() {
  const content = await getLandingContent();
  const [happyStudents, courses, categories] = await Promise.all([
    getLearnersByIds(content.hero.happyStudents.learnerIds),
    getAllCourses(),
    getCategories(),
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
    </main>
  );
}
