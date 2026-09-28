"use client";

import { useState } from "react";
import EmptyState from "@/components/common/EmptyState";
import ReviewCard from "@/components/common/ReviewCard";
import StarIcon from "@/components/icons/StarIcon";
import Chip from "@/components/ui/Chip";

const ALL = 0;
const STAR_FILTERS = [5, 4, 3, 2, 1];

/**
 * "Individual Reviews" with the All / ★5–★1 filter chips.
 *
 * @param {object} props
 * @param {import("@/lib/api/reviews").Review[]} props.reviews
 * @param {typeof import("@/lib/data/courseDetails").courseDetails.reviews} props.content
 */
export default function ReviewsList({ reviews, content }) {
  const [rating, setRating] = useState(ALL);
  const visible = rating === ALL ? reviews : reviews.filter((review) => review.rating === rating);

  return (
    <>
      <div role="group" aria-label="Filter reviews by rating" className="flex flex-wrap gap-4">
        <Chip active={rating === ALL} onClick={() => setRating(ALL)}>
          {content.allLabel}
        </Chip>
        {STAR_FILTERS.map((stars) => (
          <Chip
            key={stars}
            active={rating === stars}
            onClick={() => setRating(stars)}
            icon={<StarIcon className="size-6" />}
            aria-label={`${stars} star reviews`}
            className="gap-1"
          >
            {stars}
          </Chip>
        ))}
      </div>
      {visible.length > 0 ? (
        <ul className="flex flex-col gap-6" aria-live="polite">
          {visible.map((review) => (
            <li key={review.id}>
              <ReviewCard review={review} />
            </li>
          ))}
        </ul>
      ) : (
        <EmptyState title={content.empty.title} description={content.empty.description} />
      )}
    </>
  );
}
