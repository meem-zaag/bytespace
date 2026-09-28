/** Landing page content access (see `lib/api/courses.js` for the data-layer rules). */
import { landing } from "@/lib/data/landing";

/** @returns {Promise<typeof landing>} */
export async function getLandingContent() {
  return landing;
}
