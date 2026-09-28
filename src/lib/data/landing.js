import { ROUTES } from "@/lib/constants/routes";

/** Landing page content. Each key feeds one section. */
export const landing = {
  hero: {
    title: "Get Access to Hundreds Courses Available",
    subtitle:
      "Unlock your creativity, gain valuable knowledge, and grow your business with our wide range of courses.",
    search: {
      label: "Search courses, topics or creators",
      placeholder: "Course, topic, creator",
      submitLabel: "Search",
    },
    image: {
      src: "/images/landing/hero-student.webp",
      alt: "Smiling student with headphones holding a laptop",
    },
    topicCard: { title: "UI/UX Design", stats: ["200 Courses", "1000+ Students"] },
    progressCard: { label: "Learning Progress", value: 55 },
    happyStudents: {
      title: "Happy Students",
      rating: 4.5,
      ratingCount: 240,
      countLabel: "2K+",
      learnerIds: [
        "learner-brooklyn-simmons",
        "learner-omar-haddad",
        "learner-albert-flores",
        "learner-cody-fisher",
        "learner-darnell-brooks",
        "learner-malik-johnson",
        "learner-lars-nilsson",
      ],
    },
  },
  partners: [
    { id: "partner-1", name: "Logoipsum", mark: "waves" },
    { id: "partner-2", name: "Logoipsum", mark: "burst" },
    { id: "partner-3", name: "Logoipsum", mark: "bolt" },
    { id: "partner-4", name: "Logoipsum", mark: "petals" },
    { id: "partner-5", name: "Logoipsum", mark: "rings" },
  ],
  creatorCta: {
    title: "Unlock Your Potential as a Creator with ByteSpace",
    description:
      "Experience the collaboration of numerous creators and an expanding selection of courses. Register now and become a part of a community comprising over 10,000 local and international creators. Utilize our Course Editor, and showcase your expertise by publishing your finest course on the ByteSpace Course Library.",
    cta: { label: "Join as Creator", href: ROUTES.signUp },
  },
};
