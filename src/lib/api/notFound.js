/** 404 page copy access (see `lib/api/courses.js` for the data-layer rules). */
import { notFound } from "@/lib/data/notFound";

/** @returns {Promise<typeof notFound>} */
export async function getNotFoundContent() {
  return notFound;
}
