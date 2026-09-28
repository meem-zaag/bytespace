import Heading from "@/components/ui/Heading";
import { cn } from "@/lib/utils/cn";

const ALIGN = {
  center: "items-center text-center",
  start: "items-start text-left",
};

const TONE = {
  muted: "text-neutral-500",
  default: "text-neutral-700",
};

/**
 * Section title + supporting paragraph.
 * Figma: centered sections use Heading M/S with a muted Body L paragraph 16px below;
 * left-aligned feature sections use a `neutral-700` paragraph 40px below.
 *
 * @param {object} props
 * @param {import("react").ReactNode} props.title
 * @param {import("react").ReactNode} [props.description]
 * @param {"center" | "start"} [props.align="center"]
 * @param {"m" | "s"} [props.size="m"] Heading M (44px) or S (36px)
 * @param {"muted" | "default"} [props.tone] paragraph color (defaults to muted when centered)
 * @param {"h1" | "h2" | "h3"} [props.as="h2"]
 * @param {string} [props.id] id for the heading (use with `aria-labelledby` on the section)
 * @param {string} [props.className]
 * @param {string} [props.titleClassName]
 * @param {string} [props.descriptionClassName]
 */
export default function SectionHeader({
  title,
  description,
  align = "center",
  size = "m",
  tone,
  as = "h2",
  id,
  className,
  titleClassName,
  descriptionClassName,
}) {
  const resolvedTone = tone ?? (align === "center" ? "muted" : "default");

  return (
    <div
      className={cn(
        "flex flex-col",
        ALIGN[align],
        align === "center" ? "gap-4" : "gap-10",
        className,
      )}
    >
      <Heading as={as} size={size} id={id} className={cn("text-black", titleClassName)}>
        {title}
      </Heading>
      {description && (
        <p className={cn("text-body-l", TONE[resolvedTone], descriptionClassName)}>{description}</p>
      )}
    </div>
  );
}
