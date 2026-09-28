/** Shared content of the sign-up and sign-in pages. */
import { ROUTES } from "@/lib/constants/routes";

export const auth = {
  signUp: {
    intro: {
      title: "Sign up and come in",
      description:
        "The registration process is straightforward, uncomplicated, and efficient, allowing users to sign up quickly, easily, and at no cost",
    },
    eyebrow: "Create an Account",
    title: "Welcome to ByteSpace",
    fields: {
      name: { label: "Full Name", placeholder: "Jamie Davis" },
      email: { label: "Email", placeholder: "designer@example.com" },
      password: { label: "Password", placeholder: "********" },
    },
    submitLabel: "Continue",
    switchPrompt: "Already have an account?",
    switchLink: { label: "Login", href: ROUTES.signIn },
    successRedirect: ROUTES.courses,
  },
  showcase: {
    backCourseSlug: "build-digital-asset",
    frontCourseSlug: "the-power-of-big-data",
  },
};
