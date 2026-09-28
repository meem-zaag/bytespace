import CourseCard from "@/components/common/CourseCard";
import Stagger from "@/components/motion/Stagger";
import StaggerItem from "@/components/motion/StaggerItem";
import { cn } from "@/lib/utils/cn";

/**
 * Responsive grid of `CourseCard`s (1 → 2 → 3 columns, 40px gaps as in Figma) that reveals the
 * cards one after another when scrolled into view.
 *
 * @param {object} props
 * @param {import("@/lib/api/courses").Course[]} props.courses
 * @param {number} [props.priorityCount=0] how many leading thumbnails to preload (above the fold)
 * @param {"h2" | "h3" | "h4"} [props.headingLevel="h3"]
 * @param {import("react").ReactNode} [props.emptyState] shown when `courses` is empty
 * @param {string} [props.className]
 */
export default function CourseGrid({
  courses,
  priorityCount = 0,
  headingLevel = "h3",
  emptyState,
  className,
}) {
  if (courses.length === 0) {
    return emptyState ?? null;
  }

  return (
    <Stagger
      as="ul"
      className={cn("grid grid-cols-1 gap-10 md:grid-cols-2 xl:grid-cols-3", className)}
    >
      {courses.map((course, index) => (
        <StaggerItem as="li" key={course.id}>
          <CourseCard
            course={course}
            headingLevel={headingLevel}
            priority={index < priorityCount}
          />
        </StaggerItem>
      ))}
    </Stagger>
  );
}
