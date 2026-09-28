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
 */
export default function ProgressStatCard({ label, value, className, barClassName }) {
  return (
    <StatCard className={className}>
      <p className="text-label-s">{label}</p>
      <p className="font-heading text-stat">{value}%</p>
      <ProgressBar value={value} label={label} className={cn("w-50", barClassName)} />
    </StatCard>
  );
}
