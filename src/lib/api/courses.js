/**
 * Course data access. Pages and sections read courses ONLY through these helpers so the static
 * data source can later be swapped for an API without touching components.
 * Helpers are async on purpose to match that future API.
 */
import { categories } from "@/lib/data/categories";
import { courseIncludes, courseLevels, courses } from "@/lib/data/courses";
import { creators } from "@/lib/data/creators";
import { learners } from "@/lib/data/learners";

const byId = (list) => new Map(list.map((item) => [item.id, item]));

const creatorsById = byId(creators);
const categoriesById = byId(categories);
const learnersById = byId(learners);
const levelsById = byId(courseLevels);

/**
 * Weighted average and total from a `{ stars: count }` breakdown.
 *
 * @param {Record<number, number>} breakdown
 * @returns {{ rating: number, reviewCount: number }}
 */
export function summarizeRatings(breakdown) {
  const entries = Object.entries(breakdown).map(([stars, count]) => [Number(stars), count]);
  const reviewCount = entries.reduce((sum, [, count]) => sum + count, 0);
  const total = entries.reduce((sum, [stars, count]) => sum + stars * count, 0);
  return { rating: reviewCount ? total / reviewCount : 0, reviewCount };
}

/**
 * @typedef {object} CourseCreator
 * @property {string} id
 * @property {string} slug
 * @property {string} name
 * @property {string} role
 * @property {{ src: string, alt: string }} avatar
 */

/**
 * @typedef {object} Course
 * @property {string} id
 * @property {string} slug
 * @property {string} title
 * @property {string} fullTitle
 * @property {string} subtitle
 * @property {number} price
 * @property {boolean} featured
 * @property {number} lessonCount
 * @property {number} durationMinutes
 * @property {number} commentCount
 * @property {number} studentCount
 * @property {number} rating
 * @property {number} reviewCount
 * @property {Record<number, number>} ratingBreakdown
 * @property {{ id: string, label: string }} level
 * @property {{ id: string, slug: string, name: string }} category
 * @property {CourseCreator} creator
 * @property {{ id: string, name: string, avatar: { src: string, alt: string } }[]} learners
 * @property {{ src: string, alt: string }} thumbnail
 * @property {{ src: string, alt: string }} preview
 * @property {{ src: string, alt: string }[]} gallery
 * @property {string[]} description
 * @property {string[]} keyPoints
 */

/** @returns {Course} */
function toCourse(course) {
  const { creatorId, categoryId, learnerIds, level, ...rest } = course;
  const creator = creatorsById.get(creatorId);
  return {
    ...rest,
    ...summarizeRatings(course.ratingBreakdown),
    level: levelsById.get(level),
    category: categoriesById.get(categoryId),
    creator: {
      id: creator.id,
      slug: creator.slug,
      name: creator.name,
      role: creator.role,
      avatar: creator.avatar,
    },
    learners: learnerIds.map((id) => {
      const { name, avatar } = learnersById.get(id);
      return { id, name, avatar };
    }),
  };
}

/** @returns {Promise<Course[]>} every course in catalog order */
export async function getAllCourses() {
  return courses.map(toCourse);
}

/** @returns {Promise<Course[]>} courses flagged as featured */
export async function getFeaturedCourses() {
  return courses.filter((course) => course.featured).map(toCourse);
}

/**
 * @param {string} slug
 * @returns {Promise<Course | null>}
 */
export async function getCourseBySlug(slug) {
  const course = courses.find((item) => item.slug === slug);
  return course ? toCourse(course) : null;
}

/**
 * @param {string} creatorId
 * @returns {Promise<Course[]>} the creator's courses
 */
export async function getCoursesByCreator(creatorId) {
  return courses.filter((course) => course.creatorId === creatorId).map(toCourse);
}

/** @returns {Promise<string[]>} slugs for `generateStaticParams` */
export async function getCourseSlugs() {
  return courses.map((course) => course.slug);
}

/** @returns {Promise<{ id: string, slug: string, name: string }[]>} */
export async function getCategories() {
  return categories;
}

/** @returns {Promise<{ id: string, label: string }[]>} */
export async function getCourseLevels() {
  return courseLevels;
}

/** @returns {Promise<{ id: string, icon: string, label: string }[]>} perks in every course */
export async function getCourseIncludes() {
  return courseIncludes;
}
