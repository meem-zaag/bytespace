import { ROUTES } from "@/lib/constants/routes";

const search = (query) => `${ROUTES.courses}?q=${encodeURIComponent(query)}`;

/**
 * Footer content. Items without `href` have no page in this static build and render as text.
 */
export const footer = {
  newsletter: {
    intro: "Stay Up to date with our latest features and releases by joining our newsletter.",
    placeholder: "Enter your email",
    submitLabel: "Subscribe",
    disclaimer:
      "By subscribing, you agree to our Privacy Policy and consent to receive updates from our company.",
  },
  columns: [
    {
      title: "Browse",
      links: [
        { label: "Featured Courses", href: ROUTES.courses },
        { label: "Featured Categories", href: ROUTES.courses },
        { label: "Business", href: search("business") },
        { label: "IT", href: search("it") },
        { label: "Design", href: search("design") },
      ],
    },
    {
      title: "Topics",
      links: [
        { label: "Development", href: search("development") },
        { label: "Marketing", href: search("marketing") },
        { label: "Photography", href: search("photography") },
        { label: "Finance", href: search("finance") },
        { label: "Sport", href: search("sport") },
      ],
    },
    {
      title: "Platform",
      links: [
        { label: "Become a Creator", href: ROUTES.signUp },
        { label: "Affiliate Program", href: ROUTES.signUp },
        { label: "Contact" },
        { label: "Help" },
        { label: "About" },
      ],
    },
  ],
  legal: [
    { label: "Privacy Policy" },
    { label: "Terms of Service" },
    { label: "Cookies Settings" },
  ],
};
