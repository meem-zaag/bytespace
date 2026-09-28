import LessonItem from "@/components/common/LessonItem";
import ProgressStatCard from "@/components/common/ProgressStatCard";

/**
 * Lessons tab: modules intro, the curriculum module list, lesson content and progress tracking.
 *
 * @param {object} props
 * @param {import("@/lib/api/lessons").CourseModule[]} props.modules
 * @param {typeof import("@/lib/data/courseDetails").courseDetails.lessons} props.content
 */
export default function CourseLessons({ modules, content }) {
  return (
    <div className="flex flex-col gap-6">
      <h2 className="font-heading text-heading-xs text-neutral-950">{content.modulesTitle}</h2>
      <p className="text-body-m text-neutral-700">{content.modulesIntro}</p>

      <h2 className="font-heading text-heading-xs text-neutral-950">{content.listTitle}</h2>
      <ol className="flex flex-col gap-6">
        {modules.map((module) => (
          <LessonItem
            key={module.id}
            order={module.order}
            title={module.title}
            summary={module.summary}
          />
        ))}
      </ol>

      <h2 className="font-heading text-heading-xs text-neutral-950">{content.contentTitle}</h2>
      <p className="text-body-m text-neutral-700">{content.contentText}</p>

      <h2 className="font-heading text-heading-xs text-neutral-950">{content.progressTitle}</h2>
      <p className="text-body-m text-neutral-700">{content.progressText}</p>
      <ProgressStatCard
        label={content.progress.label}
        value={content.progress.value}
        className="border border-neutral-200"
        valueClassName="text-heading-s"
        barClassName="w-full bg-neutral-100"
      />
    </div>
  );
}
