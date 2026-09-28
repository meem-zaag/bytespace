/** Option lists and defaults for the course listing toolbar (courses + creator pages). */

export const ALL = "all";
export const FEATURED = "featured";

export const DURATION_OPTIONS = [
  { value: ALL, label: "Any duration" },
  { value: "short", label: "Under 3 hours", max: 180 },
  { value: "medium", label: "3 to 6 hours", min: 180, max: 360 },
  { value: "long", label: "Over 6 hours", min: 360 },
];

export const SORT_OPTIONS = [
  { value: "relevant", label: "Most relevant" },
  { value: "rating", label: "Highest rated" },
  { value: "popular", label: "Most popular" },
  { value: "price-asc", label: "Price: low to high" },
  { value: "price-desc", label: "Price: high to low" },
];

export const DEFAULT_COURSE_FILTERS = {
  query: "",
  category: ALL,
  level: ALL,
  duration: ALL,
  sort: "relevant",
};
