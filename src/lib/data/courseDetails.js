import { ROUTES } from "@/lib/constants/routes";

/** Shared copy of the course details page (every course uses it). */
export const courseDetails = {
  tabs: [
    { key: "about", label: "About" },
    { key: "lessons", label: "Lessons" },
    { key: "reviews", label: "Reviews" },
  ],
  about: {
    descriptionTitle: "Description",
    galleryTitle: "Sneak Peek",
    keyPointsTitle: "Key Points",
  },
  lessons: {
    modulesTitle: "Explore the Modules",
    modulesIntro:
      "Immerse yourself in the course content as we break down each module into comprehensive lessons, providing practical insights and hands-on experiences.",
    listTitle: "Lesson List",
    contentTitle: "Lesson Content",
    contentText:
      "Engage with each lesson through captivating video content, detailed textual explanations, and interactive elements. Download resources, complete assignments, and test your understanding with quizzes.",
    progressTitle: "Lesson Progress Tracking",
    progressText:
      "Witness your growth as you complete lessons, with an intuitive progress tracking feature guiding you through your learning journey.",
    progress: { label: "Learning Progress", value: 55 },
  },
  sidebar: {
    previewCount: 3,
    moreVideosLabel: "more videos",
    enrollMessage: "Ready to Dive In? Enroll Now and Start Building Your Digital Future!",
    enrollCta: { label: "Enroll Now", href: ROUTES.signUp },
    includesTitle: "This course includes",
    creatorMessage: "Ready to Dive In? Enroll Now and Start Building Your Digital Future!",
  },
};
