import { ROUTES } from "@/lib/constants/routes";

/** Copy of the 404 page. */
export const notFound = {
  code: "404",
  title: "The page you are looking for doesn’t exist",
  description: "Try to use a correct url or go back to homepage to start again",
  cta: { label: "Back to Home", href: ROUTES.home },
};
