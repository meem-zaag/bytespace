/** Testimonial data access (see `lib/api/courses.js` for the data-layer rules). */
import { testimonials } from "@/lib/data/testimonials";

/** @returns {Promise<typeof testimonials>} */
export async function getTestimonials() {
  return testimonials;
}
