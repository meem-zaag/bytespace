import { ROUTES } from "@/lib/constants/routes";

/** Scopes of the hero search ("Courses ⌄" picker) on the catalog and creators pages. */
export const SEARCH_SCOPES = [
  { value: "courses", label: "Courses", href: ROUTES.courses },
  { value: "creators", label: "Creators", href: ROUTES.creators },
];
