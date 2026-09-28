/** Learner data access (see `lib/api/courses.js` for the data-layer rules). */
import { learners } from "@/lib/data/learners";

/**
 * @param {string[]} ids
 * @returns {Promise<{ id: string, name: string, role: string, avatar: { src: string, alt: string } }[]>}
 *   learners in the order of `ids` (unknown ids are skipped)
 */
export async function getLearnersByIds(ids) {
  const byId = new Map(learners.map((learner) => [learner.id, learner]));
  return ids.map((id) => byId.get(id)).filter(Boolean);
}
