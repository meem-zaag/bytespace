import { ROUTES } from "@/lib/constants/routes";

/** Copy of the courses catalog page. */
export const catalog = {
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
