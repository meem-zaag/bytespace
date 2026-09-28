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
  featuredCourses: {
    title: "Discover Your Passion, Build Your Skills",
    description:
      "At Bytespace Courses, we bring you closer to life-changing knowledge. Explore a variety of courses across different fields, from technology to the arts, and make a difference in your career and life.",
    featuredLabel: "Featured",
    moreLink: { label: "+ More", href: ROUTES.courses },
    limit: 6,
    empty: {
      title: "No courses in this category yet",
      description: "New courses are added every week. Browse the full catalog in the meantime.",
      actionLabel: "Browse all courses",
    },
  },
  learningPaths: {
    title: "Explore Diverse Learning Paths at Bytespace",
    description:
      "At Bytespace, we believe in empowering individuals through knowledge. Our diverse range of courses spans various fields, ensuring there's something for everyone. Unleash your potential and explore our carefully curated categories.",
    paths: [
      { id: "design", label: "Design", icon: "design", query: "design" },
      { id: "development", label: "Development", icon: "development", query: "development" },
      { id: "it-software", label: "IT & Software", icon: "computer", query: "software" },
      { id: "business", label: "Business", icon: "business", query: "business" },
      { id: "marketing", label: "Marketing", icon: "marketing", query: "marketing" },
      { id: "photography", label: "Photography", icon: "photography", query: "photography" },
    ],
  },
  growth: {
    title: "Your Path to Professional Growth Starts Here!",
    description:
      "Explore our curated selection of courses tailored to enhance your capabilities and accelerate your career journey. Whether you are looking to sharpen specific skills, gain industry expertise, or embark on a new career path entirely, we have the resources you need.",
    stats: [
      { value: "12K", label: "Students" },
      { value: "70+", label: "Courses" },
      { value: "16", label: "Creators" },
    ],
    showcaseCourseSlug: "learn-figma-from-basic",
    image: {
      src: "/images/landing/hero-student.webp",
      alt: "Student with headphones studying on a laptop",
    },
    progressCard: { label: "Learning Progress", value: 55 },
  },
  createManage: {
    title: "Create & Manage Courses Easily.",
    brand: "ByteSpace",
    description:
      "supports individuals or entities in the creation, publication, and administration of educational courses.",
    benefits: [
      "Share Your Expertise",
      "Monetize Your Passion",
      "Flexibility and Autonomy",
      "Build a Community",
    ],
    image: {
      src: "/images/landing/creator-student.webp",
      alt: "Smiling creator with headphones holding a tablet",
    },
    revenue: { title: "Total Revenue", period: "July 1-28", amount: "$120.29", progress: 56 },
    yearToDate: { title: "Year to Date", period: "2023", amount: "$1,200.38", change: "+12%" },
  },
  creatorCta: {
    title: "Unlock Your Potential as a Creator with ByteSpace",
    description:
      "Experience the collaboration of numerous creators and an expanding selection of courses. Register now and become a part of a community comprising over 10,000 local and international creators. Utilize our Course Editor, and showcase your expertise by publishing your finest course on the ByteSpace Course Library.",
    cta: { label: "Join as Creator", href: ROUTES.signUp },
  },
};
