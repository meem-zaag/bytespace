import { Suspense } from "react";
import { getCatalogContent } from "@/lib/api/catalog";
import { getAllCourses, getCategories, getCourseLevels } from "@/lib/api/courses";
import CoursesHero from "@/sections/courses/CoursesHero";
import CoursesListing from "@/sections/courses/CoursesListing";

export default async function CoursesPage() {
  const [content, courses, categories, levels] = await Promise.all([
    getCatalogContent(),
    getAllCourses(),
    getCategories(),
    getCourseLevels(),
  ]);

  return (
    <main id="main" className="flex-1">
      <Suspense>
        <CoursesHero content={content.hero} />
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
