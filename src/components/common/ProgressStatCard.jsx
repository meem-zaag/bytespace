import StatCard from "@/components/common/StatCard";
import ProgressBar from "@/components/ui/ProgressBar";
import { cn } from "@/lib/utils/cn";

/**
 * "Learning Progress · 55%" card with a lime progress bar.
 *
 * @param {object} props
 * @param {string} props.label
 * @param {number} props.value percentage 0–100
 * @param {string} [props.className]
 * @param {string} [props.barClassName] width of the bar area (200px in the floating cards)
 * @param {string} [props.valueClassName] size override for the percentage (48px by default)
 */
export default function ProgressStatCard({
  label,
  value,
  className,
  barClassName,
  valueClassName,
}) {
  return (
    <StatCard className={className}>
      <p className="text-label-s">{label}</p>
      <p className={cn("font-heading text-stat", valueClassName)}>{value}%</p>
      <ProgressBar value={value} label={label} className={cn("w-50", barClassName)} />
    </StatCard>
  );
}
