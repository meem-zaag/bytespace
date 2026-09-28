import { ROUTES } from "@/lib/constants/routes";
import { buildMetadata } from "@/lib/utils/seo";
import { Suspense } from "react";
import { getCatalogContent } from "@/lib/api/catalog";
import { getAllCourses, getCategories, getCourseLevels } from "@/lib/api/courses";
import CoursesHero from "@/sections/courses/CoursesHero";
import CoursesHeroFromUrl from "@/sections/courses/CoursesHeroFromUrl";
import CoursesListing from "@/sections/courses/CoursesListing";

export const metadata = buildMetadata({
  title: "Courses",
  description:
    "Find your next course: design, development, data, marketing, photography and more, taught by passionate creators.",
  path: ROUTES.courses,
});

export default async function CoursesPage() {
  const [content, courses, categories, levels] = await Promise.all([
    getCatalogContent(),
    getAllCourses(),
    getCategories(),
    getCourseLevels(),
  ]);

  return (
    <main id="main" className="flex-1">
      <Suspense fallback={<CoursesHero content={content.hero} />}>
        <CoursesHeroFromUrl content={content.hero} />
      </Suspense>
      <CoursesListing
        courses={courses}
        categories={categories}
        levels={levels}
        content={content.listing}
      />
    </main>
  );
}
