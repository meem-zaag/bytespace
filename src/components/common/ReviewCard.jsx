import Avatar from "@/components/ui/Avatar";
import RatingStars from "@/components/ui/RatingStars";
import { cn } from "@/lib/utils/cn";
import { formatRelativeTime } from "@/lib/utils/formatters";

/**
 * Individual course review (Reviews tab): author, relative date, star rating and comment.
 * Figma: 723px wide, 40px padding, 24px radius, `neutral-200` border, 24px between blocks.
 *
 * @param {object} props
 * @param {import("@/lib/api/reviews").Review} props.review
 * @param {string} [props.className]
 */
export default function ReviewCard({ review, className }) {
  const { author, rating, createdAt, body } = review;

  return (
    <article
      className={cn(
        "flex flex-col gap-6 rounded-card border border-neutral-200 p-6 text-neutral-700 sm:p-[39px]",
        className,
      )}
    >
      <div className="flex flex-col gap-6">
        <header className="flex items-start justify-between gap-4">
          <div className="flex items-center gap-3">
            <Avatar src={author.avatar.src} alt={author.avatar.alt} size={52} />
            <div>
              <p className="text-label-l font-normal text-neutral-950">{author.name}</p>
              <p className="text-body-m leading-6">{author.role}</p>
            </div>
          </div>
          <time dateTime={createdAt} className="shrink-0 text-body-m leading-6">
            {formatRelativeTime(createdAt)}
          </time>
        </header>
        <RatingStars value={rating} />
      </div>
      <p className="text-body-m leading-6">{body}</p>
    </article>
  );
}
