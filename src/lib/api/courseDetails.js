/** Course details page copy access (see `lib/api/courses.js` for the data-layer rules). */
import { courseDetails } from "@/lib/data/courseDetails";

/** @returns {Promise<typeof courseDetails>} */
export async function getCourseDetailsContent() {
  return courseDetails;
}
