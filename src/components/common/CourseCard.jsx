import Image from "next/image";
import Link from "next/link";
import SignalIcon from "@/components/icons/SignalIcon";
import StarRoundIcon from "@/components/icons/StarRoundIcon";
import AvatarGroup from "@/components/ui/AvatarGroup";
import Tag from "@/components/ui/Tag";
import { ROUTES } from "@/lib/constants/routes";
import { cn } from "@/lib/utils/cn";
import {
  formatCompactNumber,
  formatDuration,
  formatPrice,
  formatRating,
  pluralize,
} from "@/lib/utils/formatters";

/**
 * Course summary card (Figma "Course_Card_1", 373×384). The title link is stretched over the whole
 * card so it's one click target, while the creator link stays independently clickable on top.
 *
 * @param {object} props
 * @param {import("@/lib/api/courses").Course} props.course
 * @param {"h2" | "h3" | "h4"} [props.headingLevel="h3"]
 * @param {boolean} [props.priority=false] preload the thumbnail (above-the-fold cards)
 * @param {string} [props.className]
 */
export default function CourseCard({
  course,
  headingLevel: Title = "h3",
  priority = false,
  className,
}) {
  const href = ROUTES.course(course.slug);
  const otherStudents = Math.max(0, course.studentCount - course.learners.length);

  return (
    <article
      className={cn(
        "group relative flex h-full flex-col rounded-card border border-neutral-200 bg-white p-[14px] pb-[21px] transition duration-300",
        "hover:-translate-y-1 hover:border-neutral-300 hover:shadow-card",
        className,
      )}
    >
      <div className="relative aspect-[343/195] overflow-hidden rounded-media bg-neutral-900">
        <Image
          src={course.thumbnail.src}
          alt={course.thumbnail.alt}
          fill
          priority={priority}
          sizes="(min-width: 1280px) 341px, (min-width: 768px) 45vw, 92vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <ul className="absolute right-3 bottom-[13px] left-[13px] flex flex-wrap gap-3">
          <li>
            <Tag variant="glass">{pluralize(course.lessonCount, "Lesson")}</Tag>
          </li>
          <li>
            <Tag variant="glass">{formatDuration(course.durationMinutes)}</Tag>
          </li>
          <li>
            <Tag variant="glass">{pluralize(course.commentCount, "Comment")}</Tag>
          </li>
        </ul>
      </div>

      <div className="mt-[21px] flex flex-col gap-4">
        <div className="flex items-start justify-between gap-3">
          <div className="min-w-0">
            <Title className="truncate font-heading text-heading-xs text-black">
              <Link
                href={href}
                className="rounded-sm after:absolute after:inset-0 after:rounded-card after:content-['']"
              >
                {course.title}
              </Link>
            </Title>
            <p className="text-body-xs text-ink-700">
              by{" "}
              <Link
                href={ROUTES.creator(course.creator.slug)}
                className="relative z-10 rounded-sm text-primary-800 lowercase hover:underline"
              >
                {course.creator.name}
              </Link>
            </p>
          </div>
          <p className="flex shrink-0 items-center text-body-l text-ink-700">
            {formatRating(course.rating)}
            <span className="sr-only"> out of 5 stars</span>
            <StarRoundIcon className="ms-1 text-neutral-200" />
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-3">
          <Tag icon={<SignalIcon className="text-neutral-700" />}>{course.level.label}</Tag>
          <AvatarGroup
            people={course.learners}
            countLabel={`${formatCompactNumber(otherStudents)}+`}
            label={`${formatCompactNumber(course.studentCount)} students enrolled`}
          />
        </div>

        <p className="flex items-end">
          <span className="font-heading text-heading-xs text-primary-800">
            {formatPrice(course.price)}
          </span>
          <span className="text-body-xs text-ink-700">/lifetime</span>
        </p>
      </div>
    </article>
  );
}
