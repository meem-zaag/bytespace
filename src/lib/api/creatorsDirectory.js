/** Creators list copy access (see `lib/api/courses.js` for the data-layer rules). */
import { creatorsDirectory } from "@/lib/data/creatorsDirectory";

/** @returns {Promise<typeof creatorsDirectory>} */
export async function getCreatorsDirectoryContent() {
  return creatorsDirectory;
}
