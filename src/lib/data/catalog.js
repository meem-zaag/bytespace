import { ROUTES } from "@/lib/constants/routes";

/** Copy of the courses catalog page. */
export const catalog = {
  listing: {
    pageSize: 9,
    allLabel: "All",
    featuredLabel: "Featured",
    results: { singular: "course found", plural: "courses found" },
    empty: {
      title: "No courses match your filters",
      description: "Try a different search term or clear the filters to see the full catalog.",
      actionLabel: "Clear filters",
    },
  },
  hero: {
    title: "Find Your Next Course",
    search: {
      label: "Search the catalog",
      placeholder: "Search",
      submitLabel: "Search",
      scopes: [
        { value: "courses", label: "Courses", href: ROUTES.courses },
        { value: "creators", label: "Creators", href: ROUTES.creators },
      ],
    },
  },
};
