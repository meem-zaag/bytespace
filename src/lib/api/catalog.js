/** Catalog page content access (see `lib/api/courses.js` for the data-layer rules). */
import { catalog } from "@/lib/data/catalog";

/** @returns {Promise<typeof catalog>} */
export async function getCatalogContent() {
  return catalog;
}
