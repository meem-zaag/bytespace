import { cn } from "@/lib/utils/cn";

/**
 * Rounded 8px progress bar with a lime fill (Learning Progress, Total Revenue cards).
 *
 * @param {object} props
 * @param {number} props.value percentage from 0 to 100
 * @param {string} props.label accessible name, e.g. "Learning progress"
 * @param {string} [props.className] track overrides (e.g. `bg-white/80` on blue cards)
 */
export default function ProgressBar({ value, label, className }) {
  const clamped = Math.min(100, Math.max(0, value));

  return (
    <div
      role="progressbar"
      aria-label={label}
      aria-valuenow={clamped}
      aria-valuemin={0}
      aria-valuemax={100}
      className={cn("h-2 w-full overflow-hidden rounded-3xl bg-neutral-50", className)}
    >
      <div className="h-full rounded-3xl bg-lime-400" style={{ width: `${clamped}%` }} />
    </div>
  );
}
