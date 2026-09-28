import { notFound } from "next/navigation";
import { Suspense } from "react";
import { getCourseDetailsContent } from "@/lib/api/courseDetails";
import { getCourseBySlug, getCourseIncludes, getCourseSlugs } from "@/lib/api/courses";
import { getLessonsByCourse } from "@/lib/api/lessons";
import Container from "@/components/ui/Container";
import CourseAbout from "@/sections/course-details/CourseAbout";
import CourseHero from "@/sections/course-details/CourseHero";
import CourseLessons from "@/sections/course-details/CourseLessons";
import CourseSidebar from "@/sections/course-details/CourseSidebar";
import CourseTabs from "@/sections/course-details/CourseTabs";

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

  const [content, modules, includes] = await Promise.all([
    getCourseDetailsContent(),
    getLessonsByCourse(course.id),
    getCourseIncludes(),
  ]);

  return (
    <main id="main" className="flex-1">
      <CourseHero course={course} />
      <Container className="grid gap-10 pt-10 pb-20 xl:grid-cols-[723px_412px] xl:justify-between xl:pt-[63px] xl:pb-[72px]">
        <Suspense>
          <CourseTabs
            tabs={content.tabs}
            panels={{
              about: <CourseAbout course={course} content={content.about} />,
              lessons: <CourseLessons modules={modules} content={content.lessons} />,
            }}
          />
        </Suspense>
        <CourseSidebar
          course={course}
          modules={modules}
          includes={includes}
          content={content.sidebar}
          className="relative z-10 xl:-mt-[604px] xl:self-start"
        />
      </Container>
    </main>
  );
}
