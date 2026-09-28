import { ROUTES } from "@/lib/constants/routes";
import { buildMetadata } from "@/lib/utils/seo";
import { notFound } from "next/navigation";
import { Suspense } from "react";
import { getCourseDetailsContent } from "@/lib/api/courseDetails";
import { getCourseBySlug, getCourseIncludes, getCourseSlugs } from "@/lib/api/courses";
import { getLessonsByCourse } from "@/lib/api/lessons";
import { getReviewSummary, getReviewsByCourse } from "@/lib/api/reviews";
import Container from "@/components/ui/Container";
import CourseAbout from "@/sections/course-details/CourseAbout";
import CourseHero from "@/sections/course-details/CourseHero";
import CourseLessons from "@/sections/course-details/CourseLessons";
import CourseReviews from "@/sections/course-details/CourseReviews";
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
  return buildMetadata({
    title: course.fullTitle,
    description: `${course.subtitle}. ${course.description[0]}`.slice(0, 160),
    path: ROUTES.course(course.slug),
    image: course.thumbnail,
    type: "article",
  });
}

export default async function CourseDetailsPage({ params }) {
  const { slug } = await params;
  const course = await getCourseBySlug(slug);
  if (!course) notFound();

  const [content, modules, includes, reviews, summary] = await Promise.all([
    getCourseDetailsContent(),
    getLessonsByCourse(course.id),
    getCourseIncludes(),
    getReviewsByCourse(course.id),
    getReviewSummary(course.id),
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
              reviews: (
                <CourseReviews
                  course={course}
                  summary={summary}
                  reviews={reviews}
                  content={content.reviews}
                />
              ),
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
