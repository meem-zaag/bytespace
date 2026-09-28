import { ALL, DURATION_OPTIONS, FEATURED } from "@/lib/constants/courseFilters";

const SORTERS = {
  relevant: () => 0,
  rating: (a, b) => b.rating - a.rating,
  popular: (a, b) => b.studentCount - a.studentCount,
  "price-asc": (a, b) => a.price - b.price,
  "price-desc": (a, b) => b.price - a.price,
};

const normalize = (text) => text.toLowerCase().trim();

/**
 * Applies the listing filters to a course list (pure, so it runs on server or client).
 * `category` may be a category id, `"featured"` or `"all"`; `query` matches title, subtitle,
 * category and creator name.
 *
 * @param {import("@/lib/api/courses").Course[]} courses
 * @param {typeof import("@/lib/constants/courseFilters").DEFAULT_COURSE_FILTERS} filters
 * @returns {import("@/lib/api/courses").Course[]}
 */
export function filterCourses(courses, { query, category, level, duration, sort }) {
  const needle = normalize(query ?? "");
  const range = DURATION_OPTIONS.find((option) => option.value === duration);

  const filtered = courses.filter((course) => {
    if (category === FEATURED && !course.featured) return false;
    if (category !== ALL && category !== FEATURED && course.category.id !== category) return false;
    if (level !== ALL && course.level.id !== level) return false;
    if (range?.min && course.durationMinutes < range.min) return false;
    if (range?.max && course.durationMinutes >= range.max) return false;
    if (!needle) return true;
    return [course.title, course.subtitle, course.category.name, course.creator.name].some((text) =>
      normalize(text).includes(needle),
    );
  });

  return filtered.toSorted(SORTERS[sort] ?? SORTERS.relevant);
}
