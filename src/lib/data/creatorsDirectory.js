import { SEARCH_SCOPES } from "@/lib/constants/search";

/** Copy of the Creators list page (no Figma frame; follows the Courses page). */
export const creatorsDirectory = {
  hero: {
    title: "Meet Our Creators",
    subtitle: "Learn from passionate designers, developers, analysts and storytellers.",
    search: {
      label: "Search creators",
      placeholder: "Search creators",
      scopes: SEARCH_SCOPES,
    },
  },
  results: { singular: "creator found", plural: "creators found" },
  empty: {
    title: "No creators found",
    description: "Try a different name or topic.",
    actionLabel: "Show all creators",
  },
};
