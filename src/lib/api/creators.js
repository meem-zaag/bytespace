/** Creator data access (see `lib/api/courses.js` for the data-layer rules). */
import { courses } from "@/lib/data/courses";
import { creators } from "@/lib/data/creators";

/**
 * @typedef {object} Creator
 * @property {string} id
 * @property {string} slug
 * @property {string} name
 * @property {string} role
 * @property {string} headline
 * @property {string[]} bio
 * @property {{ src: string, alt: string }} avatar
 * @property {number} followers
 * @property {number} courseCount derived from the courses that reference this creator
 * @property {number} studentCount derived total of students across those courses
 */

/** @returns {Creator} */
function toCreator(creator) {
  const own = courses.filter((course) => course.creatorId === creator.id);
  return {
    ...creator,
    courseCount: own.length,
    studentCount: own.reduce((sum, course) => sum + course.studentCount, 0),
  };
}

/** @returns {Promise<Creator[]>} */
export async function getAllCreators() {
  return creators.map(toCreator);
}

/**
 * @param {string} slug
 * @returns {Promise<Creator | null>}
 */
export async function getCreatorBySlug(slug) {
  const creator = creators.find((item) => item.slug === slug);
  return creator ? toCreator(creator) : null;
}

/** @returns {Promise<string[]>} slugs for `generateStaticParams` */
export async function getCreatorSlugs() {
  return creators.map((creator) => creator.slug);
}
