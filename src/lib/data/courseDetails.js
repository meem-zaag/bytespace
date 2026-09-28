import { ROUTES } from "@/lib/constants/routes";

/** Shared copy of the course details page (every course uses it). */
export const courseDetails = {
  tabs: [
    { key: "about", label: "About" },
    { key: "lessons", label: "Lessons" },
    { key: "reviews", label: "Reviews" },
  ],
  sidebar: {
    previewCount: 3,
    moreVideosLabel: "more videos",
    enrollMessage: "Ready to Dive In? Enroll Now and Start Building Your Digital Future!",
    enrollCta: { label: "Enroll Now", href: ROUTES.signUp },
    includesTitle: "This course includes",
    creatorMessage: "Ready to Dive In? Enroll Now and Start Building Your Digital Future!",
  },
};
