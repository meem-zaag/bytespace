/** Every internal URL in the site. Components link through these, never hardcoded paths. */
export const ROUTES = {
  home: "/",
  courses: "/courses",
  creators: "/creators",
  signIn: "/signin",
  signUp: "/signup",
  course: (slug) => `/courses/${slug}`,
  creator: (slug) => `/creators/${slug}`,
};

/** Tabs of the course details page, addressed with `?tab=`. */
export const COURSE_TABS = {
  about: "about",
  lessons: "lessons",
  reviews: "reviews",
};
