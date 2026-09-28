import SectionHeader from "@/components/common/SectionHeader";
import FadeIn from "@/components/motion/FadeIn";
import Container from "@/components/ui/Container";
import FeaturedCoursesBrowser from "@/sections/landing/FeaturedCoursesBrowser";

/**
 * "Discover Your Passion, Build Your Skills": section header, category chips and course grid.
 *
 * @param {object} props
 * @param {typeof import("@/lib/data/landing").landing.featuredCourses} props.content
 * @param {import("@/lib/api/courses").Course[]} props.courses
 * @param {{ id: string, name: string }[]} props.categories
 */
export default function FeaturedCourses({ content, courses, categories }) {
  return (
    <section aria-labelledby="featured-courses-title" className="bg-white pt-16 lg:pt-[72px]">
      <Container>
        <FadeIn>
          <SectionHeader
            id="featured-courses-title"
            title={content.title}
            description={content.description}
            titleClassName="max-w-[588px]"
            descriptionClassName="max-w-[917px]"
          />
        </FadeIn>
        <FeaturedCoursesBrowser courses={courses} categories={categories} content={content} />
      </Container>
    </section>
  );
}
