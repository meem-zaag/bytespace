import { notFound } from "next/navigation";
import { getCourseBySlug, getCourseSlugs } from "@/lib/api/courses";
import CourseHero from "@/sections/course-details/CourseHero";

export const dynamicParams = false;

export async function generateStaticParams() {
  const slugs = await getCourseSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const course = await getCourseBySlug(slug);
  if (!course) return {};
  return { title: course.fullTitle, description: course.subtitle };
}

export default async function CourseDetailsPage({ params }) {
  const { slug } = await params;
  const course = await getCourseBySlug(slug);
  if (!course) notFound();

  return (
    <main id="main" className="flex-1">
      <CourseHero course={course} />
    </main>
  );
}
