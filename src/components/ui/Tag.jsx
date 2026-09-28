import { cn } from "@/lib/utils/cn";

const VARIANTS = {
  glass: "bg-neutral-50/60 text-ink-700 leading-5 backdrop-blur-sm",
  neutral: "gap-1 bg-neutral-50 text-neutral-700",
};

/**
 * Small label on course cards: `glass` over the thumbnail ("17 Lessons", "2 hours 16 mins")
 * and `neutral` for the level ("Beginner" with the signal icon).
 *
 * @param {object} props
 * @param {"glass" | "neutral"} [props.variant="neutral"]
 * @param {import("react").ReactNode} [props.icon] leading icon (20px in Figma)
 * @param {string} [props.className]
 * @param {import("react").ReactNode} props.children
 */
export default function Tag({ variant = "neutral", icon, className, children, ...rest }) {
  return (
    <span
      className={cn(
        "inline-flex shrink-0 items-center justify-center rounded-3xl px-3 py-1.5 text-label-xs whitespace-nowrap",
        VARIANTS[variant],
        className,
      )}
      {...rest}
    >
      {icon}
      {children}
    </span>
  );
}
