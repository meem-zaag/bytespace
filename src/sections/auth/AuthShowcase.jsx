import CourseCard from "@/components/common/CourseCard";
import HappyStudentsCard from "@/components/common/HappyStudentsCard";
import Float from "@/components/motion/Float";
import DecorShape from "@/components/ui/DecorShape";

/**
 * Decorative stack on the auth pages (Figma positions relative to the 1200px column): two course
 * cards, the lime "Happy Students" card and three 3D shapes. Marked `inert`, so the real links in
 * the cards are skipped by keyboard and assistive tech.
 *
 * @param {object} props
 * @param {import("@/lib/api/courses").Course} props.backCourse
 * @param {import("@/lib/api/courses").Course} props.frontCourse
 * @param {typeof import("@/lib/data/landing").landing.hero.happyStudents} props.happyStudents
 * @param {{ id: string, name: string, avatar: { src: string, alt: string } }[]} props.people
 */
export default function AuthShowcase({ backCourse, frontCourse, happyStudents, people }) {
  return (
    <div
      inert
      aria-hidden="true"
      className="pointer-events-none absolute inset-x-8 inset-y-0 hidden xl:block"
    >
      <div className="absolute top-[394px] left-0.5 w-[373px]">
        <CourseCard course={backCourse} />
      </div>
      <div className="absolute top-[305px] left-[113px] w-[373px]">
        <CourseCard course={frontCourse} />
      </div>
      <Float delay={0.7} className="absolute top-[740px] left-[228px]">
        <HappyStudentsCard
          tone="lime"
          title={happyStudents.title}
          rating={happyStudents.rating}
          ratingCount={happyStudents.ratingCount}
          countLabel={happyStudents.countLabel}
          people={people}
          className="w-[258px]"
        />
      </Float>
      <DecorShape
        shape="spring"
        tone="white"
        size={176}
        float
        delay={1}
        className="top-[626px] left-[351px]"
      />
      <DecorShape
        shape="torus"
        tone="lime"
        size={147}
        float
        delay={0.4}
        className="top-[320px] left-[30px]"
      />
      <DecorShape
        shape="pyramid"
        tone="lime"
        size={189}
        float
        delay={1.4}
        className="top-[702px] -left-[25px]"
      />
    </div>
  );
}
