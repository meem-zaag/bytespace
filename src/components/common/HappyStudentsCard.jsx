import StatCard from "@/components/common/StatCard";
import StarIcon from "@/components/icons/StarIcon";
import AvatarGroup from "@/components/ui/AvatarGroup";
import { cn } from "@/lib/utils/cn";
import { formatRating } from "@/lib/utils/formatters";

/**
 * "Happy Students · 4.5 (240) ★" card with a 43px avatar stack and a count bubble.
 * `white` (landing) uses a lime star and bubble; `lime` (auth pages) a blue star and dark bubble.
 *
 * @param {object} props
 * @param {string} props.title
 * @param {number} props.rating
 * @param {number} props.ratingCount
 * @param {{ id?: string, name: string, avatar: { src: string, alt: string } }[]} props.people
 * @param {string} props.countLabel e.g. "2K+"
 * @param {"white" | "lime"} [props.tone="white"]
 * @param {string} [props.className]
 */
export default function HappyStudentsCard({
  title,
  rating,
  ratingCount,
  people,
  countLabel,
  tone = "white",
  className,
}) {
  const onLime = tone === "lime";

  return (
    <StatCard tone={tone} className={className}>
      <div>
        <p className="text-label-m leading-6">{title}</p>
        <p
          className={cn(
            "flex items-center text-caption",
            onLime ? "text-neutral-800" : "text-neutral-500",
          )}
        >
          <span>
            <span className="font-medium text-neutral-950">{formatRating(rating)}</span> (
            {ratingCount})<span className="sr-only"> ratings</span>
          </span>
          <StarIcon
            width={16}
            height={16}
            className={onLime ? "text-primary-800" : "text-lime-400"}
          />
        </p>
      </div>
      <AvatarGroup
        people={people}
        countLabel={countLabel}
        size="md"
        countTone={onLime ? "dark" : "lime"}
        label={`${countLabel} happy students`}
      />
    </StatCard>
  );
}
