import VideocamIcon from "@/components/icons/VideocamIcon";
import { cn } from "@/lib/utils/cn";

/**
 * Curriculum module row (Lessons tab): lime video tile, "Module N: Title" and summary.
 * Figma: 72px tile with 24px radius and a 40px icon, 13px gap, 16px title / 16px grey summary.
 *
 * @param {object} props
 * @param {number} props.order module number
 * @param {string} props.title
 * @param {string} props.summary
 * @param {keyof JSX.IntrinsicElements} [props.as="li"]
 * @param {string} [props.className]
 */
export default function LessonItem({ order, title, summary, as: Component = "li", className }) {
  return (
    <Component className={cn("flex items-center gap-[13px]", className)}>
      <span className="flex size-14 shrink-0 items-center justify-center rounded-[18px] bg-lime-400 text-neutral-950 sm:size-18 sm:rounded-3xl">
        <VideocamIcon className="size-8 sm:size-10" />
      </span>
      <div className="flex flex-col gap-1">
        <h3 className="text-label-m text-neutral-950">
          Module {order}: {title}
        </h3>
        <p className="text-body-m text-neutral-700">{summary}</p>
      </div>
    </Component>
  );
}
