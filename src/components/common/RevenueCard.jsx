import StatCard from "@/components/common/StatCard";
import ProgressBar from "@/components/ui/ProgressBar";

/**
 * Blue creator-earnings card ("Total Revenue", "Year to Date") with an optional change badge
 * and progress bar.
 *
 * @param {object} props
 * @param {string} props.title
 * @param {string} props.period e.g. "July 1-28"
 * @param {string} props.amount formatted amount, e.g. "$120.29"
 * @param {string} [props.change] badge text, e.g. "+12%"
 * @param {number} [props.progress] percentage for the bar
 * @param {string} [props.className]
 */
export default function RevenueCard({ title, period, amount, change, progress, className }) {
  return (
    <StatCard tone="blue" className={className}>
      <div>
        <p className="text-label-m">{title}</p>
        <p className="text-caption leading-3">{period}</p>
      </div>
      <p className="font-heading text-heading-2xs">{amount}</p>
      {change && (
        <p className="self-start rounded-3xl bg-lime-500 px-2 py-0.5 text-caption leading-5 font-medium text-neutral-950">
          {change}
        </p>
      )}
      {progress !== undefined && (
        <ProgressBar value={progress} label={`${title} goal`} className="w-50 bg-white" />
      )}
    </StatCard>
  );
}
