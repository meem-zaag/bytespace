/** Review data access (see `lib/api/courses.js` for the data-layer rules). */
import { summarizeRatings } from "@/lib/api/courses";
import { courses } from "@/lib/data/courses";
import { learners } from "@/lib/data/learners";
import { reviews } from "@/lib/data/reviews";

const learnersById = new Map(learners.map((learner) => [learner.id, learner]));

/**
 * @typedef {object} Review
 * @property {string} id
 * @property {number} rating
 * @property {string} createdAt ISO date
 * @property {string} body
 * @property {{ name: string, role: string, avatar: { src: string, alt: string } }} author
 */

/**
 * @param {string} courseId
 * @returns {Promise<Review[]>} newest first
 */
export async function getReviewsByCourse(courseId) {
  return reviews
    .filter((review) => review.courseId === courseId)
    .sort((a, b) => b.createdAt.localeCompare(a.createdAt))
    .map(({ learnerId, courseId: _courseId, ...review }) => {
      const { name, role, avatar } = learnersById.get(learnerId);
      return { ...review, author: { name, role, avatar } };
    });
}

/**
 * @typedef {object} ReviewSummary
 * @property {number} rating weighted average
 * @property {number} reviewCount total ratings
 * @property {{ stars: number, count: number, share: number }[]} breakdown 5 → 1 stars, `share` 0–1
 */

/**
 * @param {string} courseId
 * @returns {Promise<ReviewSummary | null>}
 */
export async function getReviewSummary(courseId) {
  const course = courses.find((item) => item.id === courseId);
  if (!course) return null;

  const { rating, reviewCount } = summarizeRatings(course.ratingBreakdown);
  const breakdown = [5, 4, 3, 2, 1].map((stars) => {
    const count = course.ratingBreakdown[stars] ?? 0;
    return { stars, count, share: reviewCount ? count / reviewCount : 0 };
  });
  return { rating, reviewCount, breakdown };
}
