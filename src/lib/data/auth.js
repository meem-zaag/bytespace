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
  signIn: {
    intro: {
      title: "Sign in with ease",
      description:
        "Experience a seamless and efficient sign-in process that grants you instant access to a world of knowledge.",
    },
    eyebrow: "Sign In",
    title: "Welcome Back",
    fields: {
      email: { label: "Email", placeholder: "designer@example.com" },
      password: { label: "Password", placeholder: "********" },
    },
    submitLabel: "Sign In",
    dividerLabel: "or",
    providers: [
      { id: "facebook", label: "Continue with Facebook" },
      { id: "google", label: "Continue with Google" },
    ],
    switchPrompt: "New user?",
    switchLink: { label: "Create an account", href: ROUTES.signUp },
    successRedirect: ROUTES.courses,
  },
  showcase: {
    backCourseSlug: "build-digital-asset",
    frontCourseSlug: "the-power-of-big-data",
  },
};
