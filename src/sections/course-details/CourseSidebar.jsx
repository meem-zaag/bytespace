import CreatorSummary from "@/components/common/CreatorSummary";
import BadgeIcon from "@/components/icons/BadgeIcon";
import ConnectIcon from "@/components/icons/ConnectIcon";
import SourceIcon from "@/components/icons/SourceIcon";
import VideocamIcon from "@/components/icons/VideocamIcon";
import AppButton from "@/components/ui/AppButton";
import { cn } from "@/lib/utils/cn";
import {
  formatDuration,
  formatHours,
  formatPrice,
  padNumber,
  pluralize,
} from "@/lib/utils/formatters";

const INCLUDE_ICONS = {
  resources: SourceIcon,
  video: VideocamIcon,
  certificate: BadgeIcon,
  consultation: ConnectIcon,
};

/**
 * Course sidebar card (Figma 412px, 40px padding): lesson preview, price, enroll CTA, what the
 * course includes and the creator summary. Shared by the About, Lessons and Reviews tabs.
 *
 * @param {object} props
 * @param {import("@/lib/api/courses").Course} props.course
 * @param {import("@/lib/api/lessons").CourseModule[]} props.modules
 * @param {{ id: string, icon: string, label: string }[]} props.includes
 * @param {typeof import("@/lib/data/courseDetails").courseDetails.sidebar} props.content
 * @param {string} [props.className]
 */
export default function CourseSidebar({ course, modules, includes, content, className }) {
  const lessons = modules.flatMap((module) => module.lessons);
  const preview = lessons.slice(0, content.previewCount);
  const remaining = Math.max(0, course.lessonCount - preview.length);

  return (
    <aside
      aria-label="Course summary"
      className={cn(
        "flex flex-col gap-6 rounded-card border border-neutral-200 bg-white p-6 sm:p-[39px]",
        className,
      )}
    >
      <div className="flex flex-col gap-6">
        <h2 className="font-heading text-heading-xs text-neutral-950">
          {pluralize(course.lessonCount, "Lesson")} ({formatHours(course.durationMinutes)})
        </h2>
        <div className="flex flex-col gap-3">
          <ol className="flex flex-col gap-3">
            {preview.map((lesson, index) => (
              <li key={lesson.id} className="flex items-start justify-between gap-6">
                <span className="flex gap-2 text-label-m text-neutral-950">
                  <span className="w-6 shrink-0">{padNumber(index + 1)}</span>
                  <span className="max-w-50">{lesson.title}</span>
                </span>
                <span className="shrink-0 text-body-m text-primary-800">
                  {formatDuration(lesson.durationMinutes)}
                </span>
              </li>
            ))}
          </ol>
          {remaining > 0 && (
            <p className="text-body-m text-neutral-700">
              {remaining} {content.moreVideosLabel}
            </p>
          )}
        </div>
      </div>

      <div className="flex flex-col gap-6">
        <p className="text-body-m text-neutral-700">{content.enrollMessage}</p>
        <p className="flex items-end">
          <span className="font-heading text-heading-s leading-[1.05] text-primary-800">
            {formatPrice(course.price)}
          </span>
          <span className="text-body-m text-neutral-700">/lifetime</span>
        </p>
        <AppButton href={content.enrollCta.href} fullWidth>
          {content.enrollCta.label}
        </AppButton>
      </div>

      <h3 className="font-heading text-heading-xs text-neutral-950">{content.includesTitle}</h3>
      <ul className="flex flex-col gap-3">
        {includes.map((item) => {
          const Icon = INCLUDE_ICONS[item.icon];
          return (
            <li key={item.id} className="flex items-center gap-2 text-body-m text-neutral-700">
              <Icon className="size-6 shrink-0 text-primary-800" />
              {item.label}
            </li>
          );
        })}
      </ul>

      <hr className="border-ink-200" />

      <CreatorSummary creator={course.creator} message={content.creatorMessage} />
    </aside>
  );
}
