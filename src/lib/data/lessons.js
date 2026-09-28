/**
 * Course curricula, keyed by `courseId`. Each module groups lessons; the course sidebar previews
 * the first lessons and the Lessons tab lists the modules.
 * Figma copy is used for "Build Digital Asset" (modules renumbered sequentially).
 *
 * Spec format per module: [title, summary, [[lessonTitle, minutes], ...]]
 */
const CURRICULA = {
  "course-build-digital-asset": [
    [
      "Introduction to Digital Assets",
      "Lay the groundwork with lessons like 'Understanding Digital Elements' and 'Navigating Design Software Tools.' Dive into the essentials of digital asset creation.",
      [
        ["Introduction to Digital Assets", 12],
        ["Design Principles for Impacts", 21],
        ["Advanced Techniques in Digital Creation", 16],
      ],
    ],
    [
      "Design Principles for Impact",
      "Master the principles that drive impactful designs with lessons such as 'Color Theory in Digital Design' and 'Typography Essentials.' Elevate your visual communication skills.",
      [
        ["Color Theory in Digital Design", 18],
        ["Typography Essentials", 22],
      ],
    ],
    [
      "User-Centric Design Strategies",
      "Understand 'Design Thinking in Digital Creation' and delve into 'User Experience (UX) Essentials.' Craft digital assets with a focus on user-centric design.",
      [
        ["Design Thinking in Digital Creation", 20],
        ["User Experience (UX) Essentials", 24],
      ],
    ],
    [
      "Interactive Media and Engagement",
      "Engage your audience with lessons like 'Creating Interactive Presentations' and 'Integrating Multimedia Elements.' Master the art of creating immersive digital experiences.",
      [
        ["Creating Interactive Presentations", 19],
        ["Integrating Multimedia Elements", 23],
      ],
    ],
    [
      "Project Showcase and Critique",
      "Perfect your presentation skills with 'Effective Presentation Techniques' and embrace collaboration with 'Peer Critique and Collaboration.' Showcase your work with confidence.",
      [
        ["Effective Presentation Techniques", 17],
        ["Peer Critique and Collaboration", 25],
      ],
    ],
    [
      "Optimizing Digital Assets for Various Platforms",
      "Adapt your digital creations for 'Mobile Platforms' and optimize for 'Social Media.' Ensure widespread accessibility and engagement across diverse digital landscapes.",
      [
        ["Designing for Mobile Platforms", 21],
        ["Optimizing for Social Media", 18],
      ],
    ],
  ],
  "course-learn-figma-from-basic": [
    [
      "Getting Started with Figma",
      "Set up your workspace and learn how files, pages and frames fit together.",
      [
        ["Welcome to Figma", 6],
        ["Frames and Layers", 9],
        ["Shapes, Text and Color", 11],
      ],
    ],
    [
      "Layouts That Adapt",
      "Use auto layout and constraints to build interfaces that resize gracefully.",
      [
        ["Auto Layout Basics", 12],
        ["Constraints and Resizing", 8],
      ],
    ],
    [
      "Components and Variants",
      "Create reusable components and organise them with variants and properties.",
      [
        ["Building Components", 10],
        ["Variants and Properties", 9],
      ],
    ],
    [
      "Prototyping and Handoff",
      "Link screens into an interactive prototype and prepare files for developers.",
      [
        ["Prototype Interactions", 11],
        ["Developer Handoff", 7],
      ],
    ],
  ],
  "course-the-power-of-big-data": [
    [
      "Understanding Big Data",
      "Learn what makes data big and how modern teams store and process it.",
      [
        ["What Is Big Data?", 8],
        ["Data Pipelines Explained", 12],
        ["Tools of the Trade", 10],
      ],
    ],
    [
      "Exploring and Cleaning Data",
      "Prepare messy datasets for analysis and spot patterns early.",
      [
        ["Cleaning Real Datasets", 14],
        ["Exploratory Analysis", 13],
      ],
    ],
    [
      "From Insight to Decision",
      "Visualise results and communicate them to stakeholders.",
      [
        ["Visualising Trends", 11],
        ["Writing an Insight Report", 9],
      ],
    ],
  ],
  "course-balancing-productivity-and-wellbeing": [
    [
      "Foundations of Sustainable Productivity",
      "Clarify what matters and design a week that supports it.",
      [
        ["Defining Your Priorities", 9],
        ["The Weekly Review", 11],
        ["Energy Mapping", 8],
      ],
    ],
    [
      "Protecting Focus and Rest",
      "Set boundaries, reduce distractions and make recovery part of the plan.",
      [
        ["Healthy Boundaries", 10],
        ["Rest as a Strategy", 9],
      ],
    ],
  ],
  "course-mastering-money-management": [
    [
      "Understanding Your Money",
      "Track cash flow and build a budget that reflects your values.",
      [
        ["Mapping Your Cash Flow", 10],
        ["Budgeting That Sticks", 12],
        ["Building an Emergency Fund", 9],
      ],
    ],
    [
      "Growing Your Wealth",
      "Learn investing basics and automate your financial system.",
      [
        ["Investing Basics", 14],
        ["Automating Your Finances", 8],
      ],
    ],
  ],
  "course-from-idea-to-startup-success": [
    [
      "Validating the Idea",
      "Find real problems worth solving and talk to potential customers.",
      [
        ["Finding Real Problems", 10],
        ["Customer Interviews", 13],
        ["Defining Your MVP", 11],
      ],
    ],
    [
      "Launching the Product",
      "Price, position and launch your product, then learn from the market.",
      [
        ["Pricing and Positioning", 12],
        ["Your First Launch", 10],
      ],
    ],
  ],
  "course-modern-web-development-with-nextjs": [
    [
      "App Router Fundamentals",
      "Understand routes, layouts and the server-first mental model.",
      [
        ["Routes and Layouts", 14],
        ["Server Components", 16],
        ["Client Components", 12],
      ],
    ],
    [
      "Data and Performance",
      "Fetch, cache and render data efficiently.",
      [
        ["Data Fetching Patterns", 18],
        ["Caching Strategies", 15],
      ],
    ],
    [
      "Shipping to Production",
      "Optimise, test and deploy your site.",
      [
        ["Images and Fonts", 12],
        ["Deploying Your Site", 10],
      ],
    ],
  ],
  "course-javascript-essentials-for-designers": [
    [
      "JavaScript Basics",
      "Variables, functions and events explained visually.",
      [
        ["Your First Script", 8],
        ["Functions and Events", 12],
        ["Working with the DOM", 14],
      ],
    ],
    [
      "Interactive Interfaces",
      "Animate components and load real data.",
      [
        ["Animating Interfaces", 13],
        ["Fetching Data", 11],
      ],
    ],
  ],
  "course-digital-illustration-fundamentals": [
    [
      "Sketching and Composition",
      "Start loose with thumbnails and find strong compositions.",
      [
        ["Thumbnail Sketches", 9],
        ["Composition Basics", 11],
        ["Clean Line Work", 12],
      ],
    ],
    [
      "Color and Light",
      "Choose harmonious palettes and add depth with light and shadow.",
      [
        ["Color Harmony", 13],
        ["Light and Shadow", 14],
      ],
    ],
  ],
  "course-design-systems-in-practice": [
    [
      "Planning a Design System",
      "Audit your product and define the foundations.",
      [
        ["The Interface Audit", 12],
        ["Defining Design Tokens", 15],
        ["Naming Conventions", 10],
      ],
    ],
    [
      "Building and Governing",
      "Build flexible components and keep the system healthy.",
      [
        ["Component Architecture", 18],
        ["Documentation and Governance", 14],
      ],
    ],
  ],
  "course-data-storytelling-with-dashboards": [
    [
      "Designing for Your Audience",
      "Know who reads your dashboard and what they need.",
      [
        ["Audience First", 10],
        ["Choosing the Right Chart", 14],
        ["Decluttering Visuals", 12],
      ],
    ],
    [
      "Building the Dashboard",
      "Lay out, build and present a complete dashboard.",
      [
        ["Dashboard Layouts", 15],
        ["Presenting Your Story", 11],
      ],
    ],
  ],
  "course-sql-for-everyday-analysts": [
    [
      "Querying Basics",
      "Select, filter and sort data with confidence.",
      [
        ["Your First Query", 8],
        ["Filtering and Sorting", 10],
        ["Joining Tables", 14],
      ],
    ],
    [
      "Analysing Data",
      "Summarise data with aggregations and window functions.",
      [
        ["Aggregations", 12],
        ["Window Functions", 15],
      ],
    ],
  ],
  "course-time-blocking-for-deep-work": [
    [
      "Planning Your Time",
      "Design an ideal week and block time for what matters.",
      [
        ["Why Deep Work Matters", 7],
        ["Designing Your Ideal Week", 11],
        ["Blocking Your Calendar", 9],
      ],
    ],
    [
      "Staying on Track",
      "Handle interruptions and review your system.",
      [
        ["Handling Interruptions", 8],
        ["The Weekly Reset", 9],
      ],
    ],
  ],
  "course-social-media-content-strategy": [
    [
      "Strategy Foundations",
      "Define your audience and the content pillars that serve them.",
      [
        ["Knowing Your Audience", 9],
        ["Content Pillars", 11],
        ["Planning a Content Calendar", 12],
      ],
    ],
    [
      "Growing and Measuring",
      "Create consistently and measure what works.",
      [
        ["Batching Content", 10],
        ["Analytics That Matter", 11],
      ],
    ],
  ],
  "course-personal-finance-for-freelancers": [
    [
      "Stabilising Your Income",
      "Pay yourself a salary and plan for taxes.",
      [
        ["Paying Yourself a Salary", 10],
        ["Planning for Taxes", 12],
        ["Building a Safety Net", 9],
      ],
    ],
    [
      "Planning Ahead",
      "Invest and save for retirement as a self-employed professional.",
      [
        ["Retirement for the Self-Employed", 13],
        ["Your Annual Money Review", 8],
      ],
    ],
  ],
  "course-pitch-decks-that-win-investors": [
    [
      "Structuring Your Story",
      "Learn the ten-slide structure investors expect.",
      [
        ["The Ten-Slide Structure", 11],
        ["Problem and Solution", 10],
        ["Presenting Traction", 12],
      ],
    ],
    [
      "Designing and Delivering",
      "Design clear slides and rehearse a confident pitch.",
      [
        ["Designing Clear Slides", 13],
        ["Rehearsing the Pitch", 9],
      ],
    ],
  ],
  "course-creative-marketing-campaigns": [
    [
      "From Insight to Idea",
      "Find the insight and develop a big idea.",
      [
        ["Finding the Insight", 10],
        ["Developing the Big Idea", 12],
        ["Writing the Brief", 9],
      ],
    ],
    [
      "Bringing It to Life",
      "Plan channels and measure the campaign's impact.",
      [
        ["Channel Planning", 11],
        ["Measuring Impact", 10],
      ],
    ],
  ],
  "course-mobile-photography-masterclass": [
    [
      "Seeing Like a Photographer",
      "Understand light and composition.",
      [
        ["Understanding Light", 9],
        ["Composition Rules", 11],
        ["Shooting in Any Condition", 12],
      ],
    ],
    [
      "Editing and Sharing",
      "Edit on your phone and share a cohesive portfolio.",
      [
        ["Editing on Your Phone", 13],
        ["Building a Portfolio", 9],
      ],
    ],
  ],
};

/** Normalised modules: `{ id, courseId, order, title, summary, lessons: [{ id, title, durationMinutes }] }`. */
export const modules = Object.entries(CURRICULA).flatMap(([courseId, spec]) =>
  spec.map(([title, summary, lessons], moduleIndex) => {
    const id = `${courseId}-module-${moduleIndex + 1}`;
    return {
      id,
      courseId,
      order: moduleIndex + 1,
      title,
      summary,
      lessons: lessons.map(([lessonTitle, durationMinutes], lessonIndex) => ({
        id: `${id}-lesson-${lessonIndex + 1}`,
        title: lessonTitle,
        durationMinutes,
      })),
    };
  }),
);
