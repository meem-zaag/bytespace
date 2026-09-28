import { ROUTES } from "@/lib/constants/routes";

/** Primary header links (center of the header). */
export const MAIN_NAV = [
  { label: "Home", href: ROUTES.home },
  { label: "Courses", href: ROUTES.courses },
  { label: "Creators", href: ROUTES.creators },
];

/** Account links (right side of the header). */
export const AUTH_NAV = [
  { label: "Sign In", href: ROUTES.signIn },
  { label: "Join Us", href: ROUTES.signUp },
];
