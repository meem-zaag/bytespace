import StatCard from "@/components/common/StatCard";

/**
 * Compact topic card: "UI/UX Design / 200 Courses • 1000+ Students".
 *
 * @param {object} props
 * @param {string} props.title
 * @param {string[]} props.stats rendered separated by bullets
 * @param {string} [props.className]
 */
export default function TopicStatCard({ title, stats, className }) {
  return (
    <StatCard className={className}>
      <div>
        <p className="text-label-m">{title}</p>
        <p className="flex items-center gap-2 text-body-xs text-neutral-500">
          {stats.map((stat, index) => (
            <span key={stat} className="flex items-center gap-2">
              {index > 0 && (
                <span aria-hidden="true" className="text-caption">
                  •
                </span>
              )}
              {stat}
            </span>
          ))}
        </p>
      </div>
    </StatCard>
  );
}
