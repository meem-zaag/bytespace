import StarIcon from "@/components/icons/StarIcon";
import { cn } from "@/lib/utils/cn";

const MAX_STARS = 5;

/**
 * Read-only row of five stars (review cards, rating breakdown). Stars up to the rounded
 * `value` are filled with the current text color; the rest use `neutral-200`.
 *
 * @param {object} props
 * @param {number} props.value rating from 0 to 5
 * @param {number} [props.size=24] star size in px
 * @param {string} [props.label] accessible label (defaults to "Rated X out of 5")
 * @param {string} [props.className] e.g. text color and gap utilities
 */
export default function RatingStars({ value, size = 24, label, className }) {
  const filled = Math.round(value);

  return (
    <span
      role="img"
      aria-label={label ?? `Rated ${value} out of ${MAX_STARS}`}
      className={cn("inline-flex items-center gap-1 text-neutral-700", className)}
    >
      {Array.from({ length: MAX_STARS }, (_, index) => (
        <StarIcon
          key={index}
          width={size}
          height={size}
          className={cn("shrink-0", index >= filled && "text-neutral-200")}
        />
      ))}
    </span>
  );
}
