/** Curriculum data access (see `lib/api/courses.js` for the data-layer rules). */
import { modules } from "@/lib/data/lessons";

/**
 * @typedef {object} CourseModule
 * @property {string} id
 * @property {number} order
 * @property {string} title
 * @property {string} summary
 * @property {{ id: string, title: string, durationMinutes: number }[]} lessons
 */

/**
 * @param {string} courseId
 * @returns {Promise<CourseModule[]>} the course's modules in order
 */
export async function getLessonsByCourse(courseId) {
  return modules
    .filter((module) => module.courseId === courseId)
    .sort((a, b) => a.order - b.order)
    .map(({ courseId: _courseId, ...module }) => module);
}
