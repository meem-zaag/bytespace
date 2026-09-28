/** Auth pages content access (see `lib/api/courses.js` for the data-layer rules). */
import { auth } from "@/lib/data/auth";

/** @returns {Promise<typeof auth>} */
export async function getAuthContent() {
  return auth;
}
