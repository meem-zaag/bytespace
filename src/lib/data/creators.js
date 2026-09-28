/**
 * Course creators. Courses reference a creator through `creatorId` + `creatorSlug`;
 * a creator's courses are always derived (see `getCoursesByCreator`), never stored here.
 */
export const creators = [
  {
    id: "creator-purepearl-studio",
    slug: "purepearl-studio",
    name: "PurePearl Studio",
    role: "Professional Creator",
    headline: "Passionate UI/UX, Web designer",
    bio: [
      "Welcome to the creative world of PurePearl Studio. Here, you'll discover the passion, expertise, and inspiration that drive my creative journey. Let's explore and learn together!",
      "Dive into my creative portfolio, showcasing a glimpse of my artistic endeavors. From digital designs to multimedia projects, each piece tells a unique story. Explore the world of creativity with me.",
    ],
    avatar: { src: "/images/people/purepearl-studio.jpg", alt: "Portrait of PurePearl Studio" },
    followers: 12,
  },
  {
    id: "creator-codecraft-collective",
    slug: "codecraft-collective",
    name: "CodeCraft Collective",
    role: "Professional Creator",
    headline: "Front-end engineers teaching the modern web",
    bio: [
      "CodeCraft Collective is a small team of front-end engineers who love turning complex web concepts into clear, practical lessons.",
      "Every course is built around real projects, so you finish with work you can ship and show.",
    ],
    avatar: {
      src: "/images/people/ethan-walker.jpg",
      alt: "Portrait of Ethan Walker from CodeCraft Collective",
    },
    followers: 348,
  },
  {
    id: "creator-lumen-creative",
    slug: "lumen-creative",
    name: "Lumen Creative",
    role: "Professional Creator",
    headline: "Illustrator and design systems lead",
    bio: [
      "Lumen Creative is the teaching home of Sarah Marquez, an illustrator and design systems lead with a decade of studio experience.",
      "Expect warm, hands-on lessons that blend craft, process and the confidence to find your own visual voice.",
    ],
    avatar: {
      src: "/images/people/sarah-marquez.jpg",
      alt: "Portrait of Sarah Marquez from Lumen Creative",
    },
    followers: 512,
  },
  {
    id: "creator-northwind-analytics",
    slug: "northwind-analytics",
    name: "Northwind Analytics",
    role: "Professional Creator",
    headline: "Data analysts who love a good chart",
    bio: [
      "Northwind Analytics helps curious people make sense of data, from their first SQL query to dashboards that tell a clear story.",
      "Our courses focus on practical techniques you can apply at work the very next day.",
    ],
    avatar: {
      src: "/images/people/alex-bennett.jpg",
      alt: "Portrait of Alex Bennett from Northwind Analytics",
    },
    followers: 227,
  },
  {
    id: "creator-brightpath-academy",
    slug: "brightpath-academy",
    name: "BrightPath Academy",
    role: "Professional Creator",
    headline: "Productivity coach and content strategist",
    bio: [
      "BrightPath Academy is led by Amara Okafor, a productivity coach who has helped thousands of creators build sustainable routines.",
      "Learn systems that protect your focus, your energy and your audience.",
    ],
    avatar: {
      src: "/images/people/amara-okafor.jpg",
      alt: "Portrait of Amara Okafor from BrightPath Academy",
    },
    followers: 431,
  },
  {
    id: "creator-atlas-finance-lab",
    slug: "atlas-finance-lab",
    name: "Atlas Finance Lab",
    role: "Professional Creator",
    headline: "Financial planner for independent workers",
    bio: [
      "Atlas Finance Lab is run by James Lawson, a certified financial planner who specialises in the money questions freelancers actually face.",
      "No jargon, just calm, practical steps toward financial confidence.",
    ],
    avatar: {
      src: "/images/people/james-lawson.jpg",
      alt: "Portrait of James Lawson from Atlas Finance Lab",
    },
    followers: 189,
  },
  {
    id: "creator-foundry-ventures",
    slug: "foundry-ventures",
    name: "Foundry Ventures",
    role: "Professional Creator",
    headline: "Startup advisor and brand marketer",
    bio: [
      "Foundry Ventures shares the playbooks Kenji Tanaka uses to help early-stage founders tell their story and grow.",
      "From pitch decks to launch campaigns, every lesson is grounded in real startup experience.",
    ],
    avatar: {
      src: "/images/people/kenji-tanaka.jpg",
      alt: "Portrait of Kenji Tanaka from Foundry Ventures",
    },
    followers: 276,
  },
  {
    id: "creator-frame-and-field",
    slug: "frame-and-field",
    name: "Frame & Field",
    role: "Professional Creator",
    headline: "Travel photographer and filmmaker",
    bio: [
      "Frame & Field is the studio of Tomás Rivera, a travel photographer and filmmaker who shoots on whatever is in his pocket.",
      "Learn to see light, compose with intent and edit images people remember.",
    ],
    avatar: {
      src: "/images/people/tomas-rivera.jpg",
      alt: "Portrait of Tomás Rivera from Frame & Field",
    },
    followers: 395,
  },
];
