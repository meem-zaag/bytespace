/** Creator profile copy access (see `lib/api/courses.js` for the data-layer rules). */
import { creatorProfile } from "@/lib/data/creatorProfile";

/** @returns {Promise<typeof creatorProfile>} */
export async function getCreatorProfileContent() {
  return creatorProfile;
}
