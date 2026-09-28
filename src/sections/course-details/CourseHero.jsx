import Link from "next/link";
import CoursePreview from "@/components/common/CoursePreview";
import ShareButton from "@/components/common/ShareButton";
import PeopleIcon from "@/components/icons/PeopleIcon";
import SignalIcon from "@/components/icons/SignalIcon";
import StarIcon from "@/components/icons/StarIcon";
import FadeIn from "@/components/motion/FadeIn";
import Container from "@/components/ui/Container";
import GridBackdrop from "@/components/ui/GridBackdrop";
import Heading from "@/components/ui/Heading";
import Pill from "@/components/ui/Pill";
import { ROUTES } from "@/lib/constants/routes";
import { formatCompactNumber, formatRating, pluralize } from "@/lib/utils/formatters";

/**
 * Course details hero: title, subtitle, creator link, level/rating/students pills, share button
 * and trailer preview. The sidebar card overlaps this hero on desktop (see the page layout).
 *
 * @param {object} props
 * @param {import("@/lib/api/courses").Course} props.course
 */
export default function CourseHero({ course }) {
  return (
    <GridBackdrop
      aria-labelledby="course-title"
      className="pt-28 pb-12 lg:h-[957px] lg:pt-[172px] lg:pb-0"
    >
      <Container>
        <div className="flex flex-col gap-6 lg:max-w-[723px] xl:max-w-none xl:flex-row xl:items-start xl:justify-between">
          <FadeIn immediate className="flex flex-col gap-6 xl:max-w-[820px]">
            <div className="flex flex-col gap-2">
              <Heading as="h1" id="course-title" size="s" className="text-neutral-50">
                {course.fullTitle}
              </Heading>
              <p className="font-heading text-heading-xs text-neutral-50">{course.subtitle}</p>
            </div>
            <p className="text-label-l text-neutral-50">
              by{" "}
              <Link
                href={ROUTES.creator(course.creator.slug)}
                className="rounded-sm text-lime-400 lowercase hover:underline"
              >
                {course.creator.name}
              </Link>
            </p>
            <ul className="flex flex-wrap gap-4" aria-label="Course facts">
              <li>
                <Pill icon={<SignalIcon className="size-6" />}>{course.level.label}</Pill>
              </li>
              <li>
                <Pill icon={<StarIcon />}>
                  {formatRating(course.rating)} ({pluralize(course.reviewCount, "review")})
                </Pill>
              </li>
              <li>
                <Pill icon={<PeopleIcon />}>
                  {formatCompactNumber(course.studentCount)} Students
                </Pill>
              </li>
            </ul>
          </FadeIn>
          <ShareButton title={course.fullTitle} className="self-start" />
        </div>
        <FadeIn immediate delay={0.15} className="mt-10 lg:mt-[59px] lg:max-w-[720px] xl:ml-[5px]">
          <CoursePreview image={course.preview} courseTitle={course.fullTitle} />
        </FadeIn>
      </Container>
    </GridBackdrop>
  );
}
