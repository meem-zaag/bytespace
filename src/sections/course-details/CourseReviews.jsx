import RatingSummary from "@/sections/course-details/RatingSummary";
import ReviewsList from "@/sections/course-details/ReviewsList";

/**
 * Reviews tab: intro, rating summary and filterable individual reviews.
 *
 * @param {object} props
 * @param {import("@/lib/api/courses").Course} props.course
 * @param {import("@/lib/api/reviews").ReviewSummary} props.summary
 * @param {import("@/lib/api/reviews").Review[]} props.reviews
 * @param {typeof import("@/lib/data/courseDetails").courseDetails.reviews} props.content
 */
export default function CourseReviews({ course, summary, reviews, content }) {
  return (
    <div className="flex flex-col gap-6">
      <h2 className="font-heading text-heading-xs text-neutral-950">{content.title}</h2>
      <p className="text-body-m text-neutral-700">
        {content.intro.replace("{course}", course.fullTitle)}
      </p>
      <RatingSummary summary={summary} label={content.ratingsLabel} />
      <h2 className="font-heading text-heading-xs text-neutral-950">{content.listTitle}</h2>
      <ReviewsList reviews={reviews} content={content} />
    </div>
  );
}
