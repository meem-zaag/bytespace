import RatingStars from "@/components/ui/RatingStars";
import { formatCompactNumber, formatRating } from "@/lib/utils/formatters";

/**
 * Rating overview (Figma `60:1294`): lime score tile and one bar per star level.
 *
 * @param {object} props
 * @param {import("@/lib/api/reviews").ReviewSummary} props.summary
 * @param {string} props.label e.g. "Ratings"
 */
export default function RatingSummary({ summary, label }) {
  return (
    <div className="flex flex-col gap-6 rounded-card border border-neutral-200 p-6 sm:flex-row sm:items-center sm:p-[39px]">
      <div className="flex h-35 w-full shrink-0 flex-col items-center justify-center rounded-lg bg-lime-400 sm:w-[129px]">
        <p className="text-label-s text-neutral-950">{label}</p>
        <p className="font-heading text-heading-s text-neutral-950">
          {formatRating(summary.rating)}
          <span className="sr-only"> out of 5 from {summary.reviewCount} ratings</span>
        </p>
      </div>
      <ul className="flex flex-1 flex-col gap-1">
        {summary.breakdown.map((row) => (
          <li key={row.stars} className="flex items-center gap-4">
            <span
              aria-hidden="true"
              className="h-2 flex-1 overflow-hidden rounded-sm bg-neutral-100"
            >
              <span
                className="block h-full rounded-sm bg-lime-400"
                style={{ width: `${Math.max(row.share * 100, row.count ? 2 : 0)}%` }}
              />
            </span>
            <RatingStars
              value={row.stars}
              label={`${row.stars} stars`}
              className="hidden sm:inline-flex"
            />
            <span className="w-10 shrink-0 text-right text-body-m text-neutral-700 max-sm:w-auto">
              <span className="sm:hidden">{row.stars}★ </span>
              {formatCompactNumber(row.count)}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
